import Image from 'next/image'
import Link from 'next/link'

import { CleanLayout } from '../layouts'
import {
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <CleanLayout title="404">
        <div className="flex min-h-full flex-col bg-white dark:bg-gray-800 lg:relative">
          <div className="flex flex-grow flex-col">
            <main className="flex flex-grow flex-col bg-white dark:bg-gray-800">
              <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0 pt-10 sm:pt-16">
                  <Link href="/" className="inline-flex">
                    <span className="sr-only">Your Company</span>
                    <ShoppingBagIcon
                      className="h-8 w-auto sm:h-10 flex-shrink-0 text-sky-400 hover:text-sky-500 transition-all delay-75"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                  <p className="text-base font-semibold text-sky-600">404</p>
                  <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-300">Page not found</h1>
                  <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                  <div className="mt-6">
                    <Link href="/" className="text-base font-medium text-sky-600 hover:text-sky-500">
                      Go back home
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
            <footer className="flex-shrink-0 bg-gray-50 dark:bg-gray-700">
              <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <nav className="flex space-x-4">
                  <Link href="https://portfolio-dforce2055.web.app/" className="text-sm font-medium dark:text-gray-300 text-gray-500 hover:text-gray-600">
                    Contact Support
                  </Link>
                  <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                  <Link href="https://github.com/dforce2055" className="text-sm font-medium dark:text-gray-300 text-gray-500 hover:text-gray-600">
                    Status
                  </Link>
                  <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                  <Link href="https://twitter-clone-dforce2055.vercel.app/" className="text-sm font-medium dark:text-gray-300 text-gray-500 hover:text-gray-600">
                    Twitter
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
          <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
              alt=""
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </CleanLayout>
    </>
  )
}
