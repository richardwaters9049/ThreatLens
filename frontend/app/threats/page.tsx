'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

type Threat = {
    id: number;
    name: string;
    severity: "Low" | "Medium" | "High" | "Critical";
    timestamp: string;
};

export default function ThreatsPage() {
    const [threats] = useState<Threat[]>([
        { id: 1, name: "Suspicious login attempt", severity: "High", timestamp: "2025-07-08 14:22" },
        { id: 2, name: "SQL anomaly detected", severity: "Critical", timestamp: "2025-07-07 10:05" },
    ]);

    return (
        <main className="px-6 md:px-12 py-10 space-y-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-semibold mb-2">🚨 Detected Threats</h1>
                <p className="text-gray-400 max-w-2xl">
                    View AI-classified threats based on logs and system activity. Upload your logs for automated analysis and anomaly detection.
                </p>
            </motion.div>

            <div className="space-y-4">
                <div className="flex gap-4">
                    <Input type="file" className="w-full max-w-sm" />
                    <Button className="bg-emerald-600 hover:bg-emerald-700 transition">Upload Logs</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {threats.map((threat) => (
                        <Card key={threat.id}>
                            <CardContent className="pt-6">
                                <CardTitle>{threat.name}</CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Severity: <span className={`font-bold ${getSeverityColor(threat.severity)}`}>{threat.severity}</span> • {threat.timestamp}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}

function getSeverityColor(severity: string) {
    switch (severity) {
        case "Low":
            return "text-green-400";
        case "Medium":
            return "text-yellow-400";
        case "High":
            return "text-orange-400";
        case "Critical":
            return "text-red-500";
        default:
            return "text-gray-300";
    }
}
