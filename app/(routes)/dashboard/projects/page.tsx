import React from 'react'
import { Bell, ChevronDown, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

const Projects = () => {
    return (
        <main className="flex-1 p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Active issues</h1>
                <div className="flex items-center space-x-4">
                    <button className="p-2 bg-zinc-500 hover:bg-zinc-200 rounded-full">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-zinc-500 hover:bg-zinc-200 rounded-full">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="flex justify-between items-center mb-4">
                <button className="flex items-center text-sm text-zinc-500 hover:text-black">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </button>
                <button className="flex items-center text-lg text-zinc-500 hover:text-black">
                    Display
                    <ChevronDown className="w-4 h-4 ml-1" />
                </button>
            </div>

            <div className="bg-black-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold flex items-center">
                        <span className="w-2 h-2 bg-zinc-500 hover:bg-zinc-200 rounded-full mr-2"></span>
                        Todo <span className="ml-2 text-gray-500">9</span>
                    </h2>
                    <button className="p-1 hover:bg-gray-700 rounded-full">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
                <ul className="space-y-2">
                    {[
                        { id: "Project-1", title: "Welcome to D3 👋", date: "May 1 - Sep 10" },
                        { id: "Project-2", title: "Try 3 ways to use D3: Document, Draw or Develope", date: "May 1 - May 1" },
                        { id: "Project-3", title: "Connect to Slack", date: "May 1 - May 1" },
                        { id: "Project-4", title: "Connect GitHub or GitLab", date: "May 1 - Jun 22" },
                        { id: "Project-5", title: "Customize settings", date: "May 1 - May 1" },
                    ].map((item) => (
                        <li key={item.id} className="flex justify-between items-center p-2  hover:bg-zinc-400 rounded">
                            <div>
                                <span className="text-gray-500 mr-2">{item.id}</span>
                                <span>{item.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Projects