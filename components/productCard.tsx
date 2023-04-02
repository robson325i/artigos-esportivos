import Image from 'next/image'
import shoe from '../public/images/shoe.jpg'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'

type Props = {
  id?: string
  name?: string
  isDiscounted?: boolean
  value?: number
}

export default function ProductCard({id, name, isDiscounted, value}: Props) {
  const productName = name ? name : 'Lorem ipsum'
  const productId = id ? id : '1'

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  
  const productValue = formatter.format(value ? value : 420.69)
  
  return (
    <div className='flex flex-col bg-slate-50 rounded hover:shadow-lg'>
      <div className='overflow-hidden rounded min-w-[14rem] max-w-[16rem]'>
        <Image
          src={shoe}
          alt={productName}
          placeholder='blur'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col my-2 gap-1'>
        <Link href={`/product/${productId}`}>
          <h3 className='font-semibold text-base hover:underline'>{productName}</h3>
        </Link>
        <div className='flex flex-row justify-between px-2'>
          <span className='text-lg'>{productValue}</span>
            <button className='bg-slate-500 font-bold text-slate-100 rounded-md px-3 group relative duration-300'>
              <MdShoppingCart
                size={18}
              />
              <span
                className="absolute hidden group-hover:flex -top-3 -left-7 -translate-y-full w-24 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
                >Adicionar ao carrinho
              </span>
            </button>
        </div>
      </div>
    </div>
  )
}