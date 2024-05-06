import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        {/* <Image src={'/logo-1.png'}
          alt='logo'
          height={40}
          width={40} /> */}
        <span className='text-black font-bold'>D&D</span>

        <h2>File Name</h2>
      </div>
      <div className='flex items-center gap-4'>
        <Button className='h-8 text-[12px]
        gap-2 bg-gray-500 hover:bg-gray-700'
          onClick={() => onSave()}
        >
          <Save className='h-4 w-4' /> Save </Button>
        <Button className='h-8 text-[12px]
        gap-2 bg-black hover:bg-zinc-900'>
          Share <Link className='h-4 w-4' /> </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader