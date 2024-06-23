"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useConvex, useMutation, useQuery } from 'convex/react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { api } from '@/convex/_generated/api'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"

const Settings = () => {

    const convex = useConvex();
    const { user }: any = useKindeBrowserClient();
    const [userName, setUserName] = useState('');
    const [teamName, setTeamName] = useState('');


    useEffect(() => {
        if (user) {
            setUserName(user.given_name);
        }
    }, [user]);



    return (
        <div className="space-y-6 gap-x-6 px-5">
            <div className="grid gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                    <CardHeader>
                        <CardTitle>Team Name</CardTitle>
                        <CardDescription>This is your team's visible name within D&D. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <Input placeholder="Team Name" />
                        </form>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
                <Card x-chunk="dashboard-04-chunk-1">
                    <CardHeader>
                        <CardTitle>User Name</CardTitle>
                        <CardDescription>This is user's visible name within D&D. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <Input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder='User Name'
                            />
                        </form>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-04-chunk-2">
                    <CardHeader>
                        <CardTitle>Plugins Directory</CardTitle>
                        <CardDescription>The directory within your project, in which your plugins are located.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <Input placeholder="Project Name" defaultValue="/content/plugins" />
                            <div className="flex items-center space-x-2">
                                {/* <Checkbox id="include" defaultChecked /> */}
                                <label
                                    htmlFor="include"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Allow administrators to change the directory.
                                </label>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default Settings