import React from 'react'
import ProductCard from './productCard'
import Link from 'next/link'

type Props = {}

export default function Discounted({ }: Props) {
  return (
    <div
      className='flex flex-col text-center justify-center bg-slate-200 mt-4 rounded shadow p-4 mx-auto'
      id='promocoes'
      >
      <Link href={'/promocoes'}>
        <h3 className='font-bold uppercase text-xl'>Promoções</h3>
      </Link>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3'
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