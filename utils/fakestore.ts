export const getProducts = async () => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_API_URL}/products`
    
    const response = await fetch(uri)
    const data = response.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getProductById = async (id: string) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    
    const response = await fetch(uri)
    const data = response.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
