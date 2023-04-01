import Head from 'next/head'
import Header from '@/components/header'
import Featured from '@/components/featured'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artigos Esportivos</title>
        <meta name="description" content="Loja virtual de artigos esportivos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-br from-slate-300 to-slate-500 h-screen'>
        <Header />
        <div className='p-4'>
          <Featured />
        </div>
      </div>
    </>
  )
}
