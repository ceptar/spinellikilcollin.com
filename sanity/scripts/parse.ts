import { isMatch, pick } from 'lodash'

const createClient = require('@sanity/client')

const stagingClient = createClient({
  projectId: 'yu09j7lk',
  dataset: 'staging',
  useCdn: false,
})

const prodClient = createClient({
  projectId: 'yu09j7lk',
  dataset: 'development',
  useCdn: false,
  token:
    'skIXuHKOGE3jQera4VYcGQ9XvTjeTGrLrYLns2CdP2OnIviBz5P4mJALgLnDTZWuzKZU1991TgdI9PX11jnwkdG3I8MCTtn0zdtniumETgXqaVVM9bowLS0a8FHjTy6CrU1K5v6YIY552akpTz1QcHdMm8BSjpkq3vh4BSRo8Wbh67DpXHTx',
})

const fieldsToSync = ['gallery', 'related', 'options', 'variants', 'info']

const run = async () => {
  const [backupProducts, currentProducts] = await Promise.all([
    stagingClient.fetch(
      `*[_type == "shopifyProduct" && !(_id in path("drafts.**"))]`,
    ),
    prodClient.fetch(
      `*[_type == "shopifyProduct" && !(_id in path("drafts.**"))]`,
    ),
  ])

  const fixRefs = (related: any) => {
    const relatedItems = related?.items ?? []
    return {
      ...related,
      items: relatedItems
        .map((item) => {
          const { document } = item
          const { shopifyId, title } = backupProducts.find(
            (p) => p._id === document._ref,
          )
          const prodDoc = currentProducts.find((p) => p.shopifyId === shopifyId)
          if (!prodDoc) return null
          return {
            ...item,
            document: {
              ...item.document,
              _ref: prodDoc._id,
            },
          }
        })
        .filter(Boolean),
    }
  }
  await Promise.all(
    backupProducts
      // .filter((d) => d.title === 'Acacia')
      // .slice(0, 10)
      .map(async (backupDoc) => {
        const { shopifyId } = backupDoc
        const existingDocs = currentProducts.filter(
          (p) => p.shopifyId === shopifyId,
        )

        if (existingDocs.length === 0) return
        if (existingDocs.length > 1) {
          const docNames = existingDocs
            .map((doc) => `${doc.title}, id: ${doc._id}`)
            .join('\n')
          throw new Error(
            `Multiple documents with id ${shopifyId}:\n${docNames}`,
          )
        }

        const existingDoc = existingDocs[0]
        const pickedBackup = pick(backupDoc, fieldsToSync)
        const pickedExisting = pick(existingDoc, fieldsToSync)

        const fieldsToPatch = fieldsToSync.filter(
          (fieldName) =>
            Boolean(
              pickedBackup[fieldName] !== undefined &&
                pickedExisting[fieldName] !== undefined,
            ) && !isMatch(pickedExisting[fieldName], pickedBackup[fieldName]),
        )

        if (!fieldsToPatch.length) return
        console.log('-------------------')
        console.log(`Syncing ${backupDoc.title}`)

        console.log(fieldsToPatch)

        const ifMissingArgs = fieldsToPatch.reduce((acc, fieldName) => {
          const isArray = Array.isArray(pickedBackup[fieldName])
          return {
            [fieldName]: isArray ? [] : {},
            ...acc,
          }
        }, {})
        const setArgs = fieldsToPatch.reduce((acc, fieldName) => {
          const value =
            fieldName === 'related'
              ? fixRefs(pickedBackup[fieldName])
              : pickedBackup[fieldName]
          return {
            [fieldName]: value,
            ...acc,
          }
        }, {})
        console.log('DISABLED!')
        // await prodClient
        //   .patch(existingDoc._id)
        //   .setIfMissing(ifMissingArgs)
        //   .set(setArgs)
        //   .commit()
      }),
  )
}

run()
