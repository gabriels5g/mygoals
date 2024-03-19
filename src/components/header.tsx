import { Plus, Search, Tags } from "lucide-react";

export function Header() {
  return (
    <header>
      <div className="w-full">
      <h1 className="text-3xl mb-5">Suas metas</h1>
      <p className="text-base leading-5 mb-4">Poupe hoje para colher os frutos amanhã.</p>
    </div>
    <div className="flex gap-4 mb-5">
        <h2 className="font-bold">Metas</h2>
        <button className="py-1 px-2 flex items-center gap-2 bg-[#2DD4BF] text-black rounded-2xl text-xs hover:opacity-90"> <Plus size={12} />Criar meta</button>
      </div><div className="flex items-center relative gap-2">
        <Search className="absolute left-3 top-[5px] text-gray-500" size={16} />
        <input type="text" placeholder="Buscar metas" className="text-xs rounded-full bg-transparent w-[11.5rem] border border-dashed border-[#3F3F46] px-4 py-1 pl-9 focus:outline-none" />
        <span className="text-gray-500 border flex items-center border-dashed border-[#3F3F46] w-20 rounded-full text-xs cursor-pointer px-4 py-1 gap-1">
          <Tags size={16} />
          Tags
        </span>
      </div></header>
  )
}