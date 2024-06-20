import { SecondaryMenu } from "@/app/_components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[800px] px-5">
            <SecondaryMenu
                items={[
                    { path: "/dashboard/settings", label: "General" },
                    { path: "/dashboard/settings", label: "Accounts" },
                    { path: "/dashboard/settings", label: "Members" },
                    { path: "/dashboard/settings", label: "Categories" },
                    { path: "/dashboard/settings", label: "Notifications" },
                ]}
            />

            <main className="mt-8">{children}</main>
        </div>
    );
}