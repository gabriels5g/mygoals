
import React from "react";
import { TableBody } from "./table-body";




export function Table() {
  const items = [
    {
      item: "Notebook",
      value1: 370,
      value2: 1500
    },
    {
      item: "Headset",
      value1: 800,
      value2: 2000
    },
    // Adicione mais itens conforme necessário
  ];
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };
  return (
    <table className="w-full caption-bottom text-sm mt-3">
      <thead>
        <tr className="text-left text-sm font-light">
          <th>Nome</th>
          <th>Valor</th>
          <th>Meta</th>
        </tr>
      </thead>

     {items.map((item, index) => (
          <TableBody
         key={index}
         itemName={item.item}
         value={formatCurrency(item.value1)}
         valueObjetive={formatCurrency(item.value2)} progress={Number(((item.value1 / item.value2) * 100).toFixed(2))}          />
        ))}
    </table>
  )
}