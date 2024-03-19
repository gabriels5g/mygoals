import Link from "next/link";
import ProgressBar from "./Progress";

interface TableBodyProps {
  progress: number;
  itemName: string;
  value: number | string;
  valueObjetive: number | string;
}


export function TableBody({progress, itemName, value, valueObjetive }: TableBodyProps) {
  return (
<tbody className="" >
  <tr>
    <th className="text-left">
      <Link href={itemName} className="hover:text-gray-300">
      {itemName}
      </Link>
    </th>
    <td className="sm:flex gap-1 row-auto">
      <p>{value}</p>
      <span className="text-[#71717A]"> de {valueObjetive}</span>
    </td>
    <td>
      <ProgressBar progress={progress}/>
    </td>
  </tr>
</tbody>
  )
}