import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col justify-center h-full text-center max-w-5xl mx-auto my-4 '>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>Inovice</h1>
        <p>
          <Link href='/invoices/new'>
            <Button variant={"ghost"} className='inline-flex gap-2'>
              <CirclePlus /> Create NEW
            </Button>
          </Link>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] p-4'>Date</TableHead>
            <TableHead className='p-4'>Customer</TableHead>
            <TableHead className='p-4'>Email</TableHead>
            <TableHead className='text-center p-4'>Status</TableHead>
            <TableHead className='text-right p-4'>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium p-4'>
              <span className='font-semibold'> 22/10/2024</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              <span className='font-semibold'> Franck henrry</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              FranckhEnrry02@gmial.com
            </TableCell>
            <TableCell className='text-center p-4'>
              <Badge className='rounded-full'>Open</Badge>
            </TableCell>

            <TableCell className='text-right p-4'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
