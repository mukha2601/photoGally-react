
export default function Navbar() {
   return (
      <div className="w-full h-20  border-b-2 border-black flex items-center justify-center">
         <div className="inbut-box w-[600px] h-14 bg-blue-200  flex">
            <input type="text" className="flex-1 text-black"/>
            <button className="bg-black w-[80px] h-full shrink-0">search</button>
         </div>
      </div>
   )
}
