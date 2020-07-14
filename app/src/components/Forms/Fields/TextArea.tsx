import * as React from 'react'
import { Field as FormikField } from 'formik'
import { FieldProps } from './Field'
import { InputWrapper, TextArea as TextAreaElement } from './styled'

export interface TextAreaProps extends FieldProps {
  type?: string
}

export const TextArea = (props: TextAreaProps) => {
  const {
    name,
    required,
    readOnly,
    disabled,
    placeholder,
    type,
    color,
    validate,
  } = props
  return (
    <FormikField validate={validate} name={name}>
      {({ field }) => (
        <InputWrapper>
          <TextAreaElement
            {...field}
            as="textArea"
            value={field.value || ''}
            id={field.name}
            required={required}
            placeholder={placeholder}
            color={color}
            type={type}
            readOnly={readOnly}
            disabled={disabled}
          />
        </InputWrapper>
      )}
    </FormikField>
  )
}
