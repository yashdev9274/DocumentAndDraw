import { SecondaryMenu } from "@/app/_components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[800px] px-5">
            <SecondaryMenu
                items={[
                    { path: "/dashboard/settings", label: "General" },
                    { path: "/dashboard/settings/billing", label: "Billing" },
                ]}
            />

            <main className="mt-8">{children}</main>
        </div>
    );
}