export type FacebookPixel = {
  track: string
  eventType: string
  options?: Record<string, unknown>
  eventData?: Record<string, unknown>
}

declare global {
  interface Window {
    fbq(
      track: string,
      eventType: string,
      options?: Record<string, unknown>,
      eventData?: Record<string, unknown>,
    ): void
  }
}
