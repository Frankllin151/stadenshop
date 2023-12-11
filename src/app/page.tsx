
import { Colunm } from '@/components/Colunm'
import { Staden } from '@/components/Stadens'
import { Temants } from '@/components/Temants'
import { TodoActivity } from '@/components/Todoactvity'
import { Search } from '@/components/search'
import { Sidebar } from '@/components/sidebar'


export default function Home() {
  return (
/*
bg-indigo-950
text-indigo-900
text-gray-700

*/ 
    <div className='w-full h-screen text-black  bg-white '>
     <div className='ml-64 py-0 px-20'>
     <Search/>
     <Colunm/>
     <Staden/>
     <TodoActivity/>
     <Temants/>
     </div>
      <Sidebar/>
    </div>
  )
  }