import Head from 'next/head'
import Header from '@/components/header'
import Featured from '@/components/featured'
import Discounted from '@/components/discounted'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artigos Esportivos</title>
        <meta name="description" content="Loja virtual de artigos esportivos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-br from-slate-300 to-slate-500'>
        <Header />
        <div className='p-4 flex flex-col gap-20'>
          <Featured />
          <Discounted />
        </div>
      </div>
    </>
  )
}
