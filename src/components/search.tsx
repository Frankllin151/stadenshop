import "@/styles/search.css";

export const Search = ()  =>{
    return (
  
        <div className="py-10 h-9 px-10  ">
            <span className="cursor-pointer text-gray-700 text-lg px-3 "><i className="bi bi-search "></i></span>
        <input className=" rounded-full shadow-lg w-64 search cursor-pointer text-gray-700 py-2 px-4"  type="text" placeholder="Search" />
        </div>
    
    )
}