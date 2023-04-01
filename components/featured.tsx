import React from 'react'
import ProductCard from './productCard'
import Link from 'next/link'

type Props = {}

export default function Featured({ }: Props) {
  return (
    <div className='flex flex-col text-center justify-center bg-slate-200 mt-4 rounded shadow p-4'>
      <Link href={'/featured'}>
        <h3 className='font-semibold text-xl'>Destaques</h3>
      </Link>
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-3'
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}