import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Ellison's Draw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <h1 className="">
          Ellison's Draw
        </h1>
      </main>

      <footer className="">
        Footer
      </footer>
    </div>
  )
}

export default Home
