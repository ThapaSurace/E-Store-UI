import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CartCard = () => {
  return (
    <div className="flex justify-between p-4  border border-slate-400/85 shadow-sm rounded-md  gap-10 items-center relative cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="h-32 w-32">
          <img src="https://books.bizmandala.com/media/books/9781788401487/image.webp" alt="image" className="h-full w-full object-cover object-center" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm">
            <b>Title:</b> Elton John by O'Neill
          </span>
          <span className="text-sm">
            <b>Price:</b> $<span>300</span>
          </span>
          <span className="text-sm">
            <b>ID:</b> 123456
          </span>
          <div />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <div className=" p-2 border border-slate-500 cursor-pointer rounded-md">
            <AiOutlinePlus  className="cursor-pointer" />
          </div>
          <span>2</span>
          <div className=" p-2 border border-slate-500 cursor-pointer rounded-md">
            <AiOutlineMinus  className="cursor-pointer" />
          </div>
        </div>
        <span className="text-light text-xl oldstyle-nums">$1000</span>
      </div>
      <div className="absolute top-2 right-3 cursor-pointer">
        <RxCross2 size={25} />
      </div>
    </div>
  )
}

export default CartCard