'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

type Report = {
    id: number;
    title: string;
    date: string;
    summary: string;
};

export default function ReportsPage() {
    const [reports] = useState<Report[]>([
        {
            id: 1,
            title: "SQL Injection Simulation - July",
            date: "2025-07-08",
            summary: "4 vulnerabilities found, 1 critical. Includes mitigation guidance.",
        },
        {
            id: 2,
            title: "XSS Scan - June",
            date: "2025-06-22",
            summary: "3 injection points identified. AI confirmed one as exploitable.",
        },
    ]);

    return (
        <main className="px-6 md:px-12 py-10 space-y-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-semibold mb-2">📄 Security Reports</h1>
                <p className="text-gray-400 max-w-2xl">
                    Browse AI-generated reports from previous tests and threat analyses. Export them for compliance, documentation, or stakeholder briefings.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report) => (
                    <Card key={report.id}>
                        <CardContent className="pt-6">
                            <CardTitle className="mb-2">{report.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mb-3">{report.date}</p>
                            <p className="text-gray-300 mb-4">{report.summary}</p>
                            <div className="flex gap-2">
                                <Button variant="outline" className="text-sm">View</Button>
                                <Button className="bg-gray-800 text-white hover:bg-gray-700 text-sm">Export PDF</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}
