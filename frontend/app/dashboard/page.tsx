// Dashboard cards with staggered Framer Motion animation and proper TypeScript types

"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// 👇 Define card animation variants with type safety
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number): TargetAndTransition => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1], // Equivalent to easeOut
        },
    }),
};

export default function DashboardPage() {
    // 👇 Dashboard stats array
    const stats = [
        { title: "Total Scans", value: 48 },
        { title: "Critical Threats", value: 7, highlight: "text-red-400" },
        { title: "AI Detections", value: 26, highlight: "text-emerald-400" },
        {
            title: "Last Scan",
            value: "12 July 2025 – SQL Injection test",
            small: true,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.title}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                >
                    <Card className="hover:shadow-xl transition-shadow">
                        <CardContent className="pt-4">
                            <CardTitle className="text-lg font-semibold">
                                {stat.title}
                            </CardTitle>
                            <p
                                className={`mt-2 font-bold ${stat.small
                                    ? "text-sm text-muted-foreground"
                                    : `text-3xl ${stat.highlight || ""}`
                                    }`}
                            >
                                {stat.value}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
