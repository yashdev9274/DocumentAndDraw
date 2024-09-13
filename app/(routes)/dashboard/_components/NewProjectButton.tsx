// 'use client'

import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import Constant from '@/app/_constant/Constant'
import PricingDialog from './PricingDialog'

function NewProjectButton({ onProjectCreate, totalProjects }: any) {

    const [projectInput, setProjectInput] = useState('');

    return (

        <div>

            <Dialog>
                <DialogTrigger className='w-full' asChild>
                    <Button
                        className='bg-black hover:bg-zinc-900'
                    > New Project</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Project?</DialogTitle>
                        <DialogDescription>
                            <Input placeholder='Enter Project Name'
                                className='mt-3'
                                onChange={(e) => setProjectInput(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="">
                        <DialogClose asChild>
                            {/* <Button type="button" variant="secondary">
                                Close
                            </Button> */}
                            <Button type="button"
                                className='bg-black hover:bg-zinc-900 ml-5'
                                disabled={!(projectInput && projectInput.length > 3)}
                                onClick={() => onProjectCreate(projectInput)}
                            >
                                Create
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default NewProjectButton