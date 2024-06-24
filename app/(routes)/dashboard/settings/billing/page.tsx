import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

const BillingPage = () => {
    return (
        <div className="space-y-6 gap-x-6 px-5">
            <div className="grid gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                    <CardHeader>
                        <CardTitle>Billing</CardTitle>
                        <CardDescription>Manage all things billing. </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div >
    )
}

export default BillingPage