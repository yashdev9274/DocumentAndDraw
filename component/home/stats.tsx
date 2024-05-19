import * as React from "react";


export const Stats = () => {

    const stats = [
        {
            data: "1K+",
            title: "Customers"
        },
        {
            data: "100+",
            title: "Files Created"
        },
        {
            data: "20+",
            title: "Countries"
        },
        // {
        //     data: "30M+",
        //     title: "Total revenue"
        // },
    ]

    return (
        <section className=" pt-2 py-14 relative flex items-center 
        justify-center flex-col bg-[#F6F6F3]">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="mt-3">
                        At Doc&Draw, we take pride in delivering an exceptional collaborative experience that empowers teams and fosters creativity. Our commitment to excellence is reflected in the remarkable success and satisfaction of our users:
                    </p>
                </div>
                <div className="mt-12 pt-5">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}