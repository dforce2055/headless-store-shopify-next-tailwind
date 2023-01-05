import { useState } from "react";
import { NextPage, GetStaticProps } from 'next'
import { ProductsLayout } from "../../layouts"
import { getProducts, getSlug } from '../../utils'
import { Product } from '../../types'
import ProductsHomePage from "../../components/ProductsHomePage";
import OTPForm from "../../components/ui/OTPForm";

interface Props {
  products: Product[]
}


const ProductsPage: NextPage<Props> = ({ products }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [otp, setOtp] = useState('');

  const onChange = (value: string) => setOtp(value);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <ProductsLayout title="Products">
      <ProductsHomePage products={products} />
      <OTPForm
        value={otp}
        valueLength={6}
        onChange={onChange}
      />
    </ProductsLayout>
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

export default ProductsPage