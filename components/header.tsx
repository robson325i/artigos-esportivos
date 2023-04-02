import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/next.svg'

type Props = {}

function Header({ }: Props) {
  return (
    <div className='divide-y divide-slate-400'>
      <header className='w-full bg-slate-200 flex flex-row items-center justify-between'>
        <Link href={'/'}>
          <span className='flex flex-row ml-5 my-2'>
            <Image
              src={logo}
              alt='Logotipo'
              height={24}
            />
          </span>
        </Link>
        <h4 className='font-semibold text-xl justify-self-center'>Artigos Esportivos</h4>
        <Link href={'/login'} className='h-full w-[118px]'>
          <span className='mr-2 flex flex-row items-center gap-1 h-full hover:bg-slate-300'>
            <FaUserCircle size={24} />
            <p className='font-semibold'>Entrar</p>
          </span>
        </Link>
      </header>
      <nav className='flex flex-col sm:flex-row w-full bg-slate-300 shadow justify-center py-0 divide-slate-500 divide-y sm:divide-y-0 sm:divide-x'>
        <span>
          <Link href={'#categorias'} className='flex gap-1 justify-center bg-slate-300 px-16 py-2 hover:bg-slate-400 font-semibold'>
            Categorias
            <RiArrowDownSLine size={24} />
          </Link>
        </span>
        
        <span>
          <Link href={'#destaques'} className='flex gap-1 justify-center bg-slate-300 px-16 py-2 hover:bg-slate-400 font-semibold'>
            Destaques
          </Link>
        </span>

        <span>
          <Link href={'#promocoes'} className='flex gap-1 justify-center bg-slate-300 px-16 py-2 hover:bg-slate-400 font-semibold'>
            Promoções
          </Link>
        </span>
      </nav>
    </div>
  )
}

export default Header