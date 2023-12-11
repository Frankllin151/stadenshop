import { userItems } from "@/dados/UserMessage"



export const MessageActivety = () => {
    return (
        <div className=" w-1/2 bg-indigo-950 text-white rounded-md">
            <div className="flex justify-between p-5 text-white ">
                <div><h2 className="font-semibold">Activity</h2></div>
                <div><span className="cursor-pointer"><i className="bi bi-three-dots-vertical"></i></span></div>
            </div>
            <div className="px-10 py-5" >
            {userItems.map((item) => (
           <div className="mt-1" key={item.id}>
            <div className="border rounded-full w-8 h-8">
                <img src={item.avatar} className="w-full h-full rounded-full" alt="" />
            </div>
            <div className="border-b border-gray-700">
                <p className="font-medium">{item.name}: <br/> <small className="text-gray-700">send you 4 Message </small></p>
            </div>
       
            </div>
            
            ) )}
             </div>
              </div>
            
    )
}