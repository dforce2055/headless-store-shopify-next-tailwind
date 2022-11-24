export * from './fakestore'

export const getSlug = (str: string) => {
  if (!str)
    return

  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
}
export const fortmatPrice = (number: number) => {
  if (!number)
    return

  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(number)
}

export const capitalize = (text: string): string => {
  try {
    const result = text?.toLowerCase()
    return result?.charAt(0).toUpperCase() + result?.slice(1)
  } catch (error) {
    return text
  }
}