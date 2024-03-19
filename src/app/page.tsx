

import { Table } from "@/components/table";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div className="flex flex-col text-[#FFFFFF] bg-[#0E0F11] h-screen min-w-full items-center pt-[10rem] px-[3rem] absolute">
      <main className=" flex flex-1 justify-start flex-col gap-4 w-full">
        <Header />
        <Table />  
      </main>
      <Footer />
    </div>
  );
}