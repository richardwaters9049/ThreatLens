// Responsive, animated, collapsible Sidebar using Framer Motion
// Default state is collapsed. Includes nav + logout functionality + motion styling

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Radar, ShieldAlert, FileText, Menu, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true); // default to collapsed
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
    };

    return (
        <motion.aside
            initial={{ width: 64 }}
            animate={{ width: collapsed ? 64 : 260 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-zinc-900 border-r border-zinc-800 h-screen p-4 flex flex-col justify-between shadow-lg"
        >
            <div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCollapsed(!collapsed)}
                    className="mb-6"
                >
                    <Menu className="w-5 h-5" />
                </Button>

                <nav className="space-y-2">
                    <SidebarLink href="/dashboard" icon={<Home className="w-4 h-4" />} collapsed={collapsed}>
                        Dashboard
                    </SidebarLink>
                    <SidebarLink href="/scan" icon={<Radar className="w-4 h-4" />} collapsed={collapsed}>
                        Launch Scan
                    </SidebarLink>
                    <SidebarLink href="/threats" icon={<ShieldAlert className="w-4 h-4" />} collapsed={collapsed}>
                        Threats
                    </SidebarLink>
                    <SidebarLink href="/reports" icon={<FileText className="w-4 h-4" />} collapsed={collapsed}>
                        Reports
                    </SidebarLink>
                </nav>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="w-full justify-start text-red-500"
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    {!collapsed && "Log Out"}
                </Button>
            </motion.div>
        </motion.aside>
    );
};

const SidebarLink = ({ href, icon, children, collapsed }: any) => (
    <Link
        href={href}
        className="flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors"
    >
        <span className="mr-3">{icon}</span>
        <AnimatePresence>
            {!collapsed && (
                <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.span>
            )}
        </AnimatePresence>
    </Link>
);
