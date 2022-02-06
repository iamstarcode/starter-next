import SideBar from './partials/sidebar'
import Footer from './partials/footer'
import Navbar from './partials/navbar'
import Head from 'next/head'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;400&display=swap" rel="stylesheet"/>
      </Head>
      <div 
      className="antialiased flex flex-col bg-base text-foreground container mx-auto mt-0" 
      >
        <Navbar />
        <main className="p-4 lg:p-8 flex ">
          {children}
        </main>
        <Footer />
      </div>

      <style jsx global>
        {`
        html,body{
          font-family: 'Kumbh Sans', sans-serif;
        } 
        `}
      </style>
    </>
  )
}

export default DefaultLayout
