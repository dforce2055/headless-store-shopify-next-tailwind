import { useState } from "react";
import { NextPage, GetStaticProps } from 'next'
import HeroComponent from "../components/HeroComponent";
import ProductsHomePage from "../components/ProductsHomePage";
import { MainLayout } from "../layouts"
import { getProducts, getSlug } from '../utils'
import { Product } from '../types'
import { SwitchDarkMode } from "../components/ui/SwitchDarkMode";

interface Props {
  products: Product[]
}


const HomePage: NextPage<Props> = ({ products }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <MainLayout title="Home">
      <HeroComponent />
      <ProductsHomePage products={products} />
    </MainLayout>
  )
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try { 
    const products = await getProducts()

    if (!products)
      return {
        redirect: {
          destination: `/?error=true&`, // sino existe data en el servidor, redirige al home
          permanent: false
        }
      }
    
    const productsWithSlug = products.map((product: Product) => {
      return {
        ...product,
        slug: getSlug(product.title)
      }
    })
  
    return {
      // Passed to the page component as props
      props: {
        products: productsWithSlug
      },
      revalidate: 86400 // 60 sec * 60 min * 24 hs
    }
  } catch (error) {
    return {
      // Passed to the page component as props
      props: { products: {} },
    }
  }
}

export default HomePage