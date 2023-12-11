import { MessageActivety } from "./dashboard/MessagesActivety"
import '../styles/global.css'

export const TodoActivity = () => {
    return (
        <div className="p-10">
            <div className="flex">
             <div className="to-do w-1/2">
             <div className="">
                <h2 className="text-indigo-900 font-bold">To do</h2>
             </div>
             <table className="min-w-full  rounded-md overflow-hidden text-gray-700">
            <thead className="">
                <tr>
                    <th className="py-2 px-4">Title</th>
                    <th className="py-2 px-4">Data</th>
                    <th className="py-2 px-4">Hour</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4">Exemplo 1</td>
                    <td className="py-2 px-4">2023-12-11</td>
                    <td className="py-2 px-4">14:30</td>
                </tr>
                <tr>
                    <td className="py-2 px-4">Exemplo 2</td>
                    <td className="py-2 px-4">2023-12-12</td>
                    <td className="py-2 px-4">09:45</td>
                </tr>
                <tr>
                    <td className="py-2 px-4">Exemplo 3</td>
                    <td className="py-2 px-4">2023-12-13</td>
                    <td className="py-2 px-4">18:15</td>
                </tr>
            </tbody>
        </table>
             </div>
            <MessageActivety/>
            </div>
        </div>
    )
}