'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import React from 'react'

const BillingPage = () => {
    return (
        <div className="space-y-6 gap-x-6 px-5">
            <div className="grid gap-6">
                <Card className="overflow-hidden" x-chunk="dashboard-04-chunk-1">
                    <CardHeader>
                        <CardTitle>Billing</CardTitle>
                        <CardDescription>Manage all things billing. </CardDescription>
                    </CardHeader>
                    <Separator className="my-2" />
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">

                            <CardTitle className="group flex items-center gap-2 text-lg">View and manage your billing details</CardTitle>
                            <CardDescription >View and edit your billing details, as well as cancel your subscription.</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                            <Button size="sm" variant="outline" className="h-8 gap-1 bg-zinc-600 hover:bg-zinc-700 text-white" >
                                <span>
                                    Billing Portal
                                </span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </CardHeader>
                    <Separator className="my-2" />
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">

                            <CardTitle className="group flex items-center gap-2 text-lg">Need anything else?</CardTitle>
                            <CardDescription >If you need any further help with billing, our support team are here to help.</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                            <Button size="sm" variant="outline" className="h-8 gap-1" >
                                <span>
                                    Contact Support
                                </span>
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div >
    )
}

export default BillingPage