'use client'
import { useState } from "react";

export function Footer() {
  const [rowsPerPage, setRowsPerPage] = useState(10); 

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value));
  };
  return (
    <footer className="flex justify-between items-center w-full border-t border-[#27272A] py-2 text-sm text-[#71717A]">
      <p>Showing  {rowsPerPage} of 2 items</p>
      <div className="flex gap-3 items-center">
      <label className="" htmlFor="rowsPerPageSelect">Rows per page</label>
        <select className="bg-[#27272A] px-3 py-1 rounded-[6px]" id="rowsPerPageSelect" value={rowsPerPage} onChange={handleRowsPerPageChange}>
          {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <option key={value} value={value} className="text-xs">{value}</option>
          ))}
        </select>
      </div>
    </footer>
  )
}