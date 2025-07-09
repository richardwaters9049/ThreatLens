'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ScanPage() {
    const [scans, setScans] = useState([
        { id: 1, type: "SQL Injection", status: "Completed", date: "2025-07-08" },
        { id: 2, type: "XSS Test", status: "Running", date: "2025-07-09" },
    ]);

    return (
        <main className="px-6 md:px-12 py-10 space-y-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-semibold mb-2">👁️ Launch Penetration Tests</h1>
                <p className="text-gray-400 max-w-2xl">
                    Simulate real-world attacks in a sandboxed environment. Choose your test type and launch controlled scans against target systems.
                </p>
            </motion.div>

            <div className="space-y-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition">+ New Scan</Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scans.map((scan) => (
                        <Card key={scan.id}>
                            <CardContent className="pt-6">
                                <CardTitle>{scan.type}</CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Status: {scan.status} • {scan.date}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
