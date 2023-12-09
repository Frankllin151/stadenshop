import {items}from '@/dados/staden';

export const Staden = () => {
    return (
       <div className='p-10 mt-12 gap-1 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

        {items.map((items) =>(
         
         <div className=' border rounded-lg' key={items.id}>
         <img className='h-72 object-cover w-full' src={items.img} alt="" />
       <div className='mt-2 px-5'>
        <span className='text-[14px] font-sans text-gray-700'>
            {items.place.bedroom},
        </span>
        <span className='text-[14px] font-sans text-gray-700'>
            {items.place.room},
        </span>
        <span className='text-[14px] font-sans text-gray-700'>
            {items.place.kitchen},
        </span>
       </div>
         <p className='text-2xl px-5 text-indigo-900 uppercase font-bold'>{items.price}/m</p>
      <button className='text-gray-700 mt-10 cursor-pointer py-3 px-10'>View Details</button>
     </div>
        ))}
        
       </div> 
      )
}