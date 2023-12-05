import { Search } from '@/components/search'
import { Sidebar } from '@/components/sidebar'
import Image from 'next/image'

export default function Home() {
  return (
/*
bg-indigo-950
text-indigo-900
text-gray-700

*/ 
    <div className='w-full h-screen text-black  bg-white '>
     <div className='ml-64'>
     <Search/>
     </div>
      <Sidebar/>
    </div>
  )
  }