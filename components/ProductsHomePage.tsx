import Image from 'next/image'
import { FC } from "react"
import { Product } from '../types'
import Link from 'next/link'
import { fortmatPrice } from '../utils'
interface Props {
  products: Product[]
}

const ProductsHomePage: FC<Props> = ({ products }) => {
  const staticProducts = [
    {
      id: 1,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$13',
      description: '3 sizes available',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '$64',
      description: 'Walnut',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Focus Carry Case',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ]
  const maxLength = 65

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`products/${product.id}` || "#"} className="group">
              <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.description}
                  width="300"
                  height="300"
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.title}</h3>
                <p>{fortmatPrice(product.price)}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500 ">
                {
                  product.description?.length >= maxLength
                    ? product.description?.slice(0, maxLength) + ' ...'
                    : product.description
                }
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsHomePage