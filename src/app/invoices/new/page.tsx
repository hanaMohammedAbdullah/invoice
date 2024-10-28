import { db } from "@/db";
import { sql } from "drizzle-orm";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// import { CirclePlus } from "lucide-react";

export default async function Home() {
  const result = db.execute(sql`SELECT current_database()`);
  console.log("test ", result);
  return (
    <main className='flex flex-col justify-center h-full  max-w-5xl mx-auto my-4 '>
      <div className='flex justify-between my-2'>
        <h1 className='text-3xl font-semibold'>Create new </h1>
      </div>
      {JSON.stringify(result)}
      <form action='' className='grid gap-4 max-w-xs border p-4 rounded-lg'>
        <div className=''>
          <Label
            htmlFor='billingName'
            className='block text-sm font-semibold  mb-2'>
            Billing Name{" "}
          </Label>
          <Input id='billingName' type='text' />
        </div>
        <div className=''>
          <Label
            htmlFor='billingEmail'
            className='block text-sm font-semibold  mb-2'>
            Billing Email{" "}
          </Label>
          <Input id='billingEmail' type='text' />
        </div>{" "}
        <div className=''>
          <Label
            htmlFor='billingValue'
            className='block text-sm font-semibold  mb-2'>
            Value{" "}
          </Label>
          <Input id='billingValue' type='text' />
        </div>{" "}
        <div className=''>
          <Label
            htmlFor='description'
            className='block text-sm font-semibold  mb-2'>
            Description{" "}
          </Label>
          <Textarea id='description' />
        </div>
        <div className=' '>
          <Button className=' font-semibold'> Submit</Button>
        </div>
      </form>
    </main>
  );
}
