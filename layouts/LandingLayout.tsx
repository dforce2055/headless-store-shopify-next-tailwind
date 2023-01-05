import Head from 'next/head'
// import NavBar from "../components/ui/NavBar"

import { FC, useEffect } from 'react';
import { FooterComponent } from '../components/FooterComponent';
import HeaderLanding from '../components/ui/HeaderLanding';
// import { menuItems } from '../_nav'
// import Footer from '../components/ui/Footer'


interface Props {
  title?: string
  section?: string
  imageFullUrl?: string
  children: React.ReactNode
}

// const origin = typeof window === undefined ? '' : window.location.origin

const origin = (() => {
  try {
    if (typeof window.location !== 'undefined') {
      return window.location.origin
    }
  } catch (e) {
    return ''
  }
})()

export const LandingLayout: FC<Props> = ({ title, section, children, imageFullUrl }) => {
  const fullTitle = title ? `${ title } | Headless Store with Shopify` : 'Next App'
  let description = 'Headless Store with Shopify Next App Generated by create NEXT app'
  description += section ? ` | Info about Headless Store with Shopify App: ${section}` : ''


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || 'light'
      const html = document.querySelector('html')
      html?.setAttribute('data-theme', theme)
      html?.setAttribute('class', theme)
    }
  }, [])
  
  
  return (
    <>
      <Head>
        <title>{ fullTitle }</title>
        <link rel="icon" href="/img/favicon.png" />
        <meta name="author" content="Diego Pérez" />
        <meta name="dev" content="dforce2055 dperez2055@gmail.com" />
        <meta name="description"  content={ description } />
        <meta name="keywords" content="open, shop, next, app, react, typescript, node" />
        <meta property="og:title" content={ fullTitle } />
        <meta property="og:description" content={ description } />
        <meta property="og:image" content={`${origin}/img/banner.jpg`} />
      </Head>
      {/* <NavBar menuItems={menuItems}/> */}
      <HeaderLanding />
      <main className="container mx-auto px-4 content-center min-h-screen">
        { children }
      </main>
      <FooterComponent author="dforce2055" />
    </>
  )
}