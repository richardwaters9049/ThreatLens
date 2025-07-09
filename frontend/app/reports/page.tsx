'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type Report = { id: number; title: string; summary: string; date: string; severity: 'Low' | 'Medium' | 'High' | 'Critical'; };

export default function ReportsPage() {
    const dummyReports: Report[] = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        title: ['SQL Injection Test', 'XSS Scan', 'Login Brute Force'][i % 3] + ` – Batch ${i + 1}`,
        summary: `Detailed report for scan batch ${i + 1}, highlighting vulnerabilities and AI analysis.`,
        date: `2025-07-${5 + i}`,
        severity: (['Low', 'Medium', 'High', 'Critical'] as const)[i % 4],
    }));

    const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
    const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <motion.main initial="hidden" animate="visible" variants={container} className="font-inter space-y-8 px-6 py-10 max-w-6xl mx-auto">
            <motion.h1 variants={item} className="text-4xl font-bold">
                📑 Security Reports
            </motion.h1>

            {dummyReports.map(rep => (
                <motion.div key={rep.id} variants={item} whileHover={{ scale: 1.02 }} className="glass-bg p-6 rounded-xl shadow-lg">
                    <CardHeader className="flex justify-between items-center">
                        <div>
                            <CardTitle>{rep.title}</CardTitle>
                            <p className="text-sm">Date: {rep.date}</p>
                        </div>
                        <Badge variant={rep.severity === 'Critical' ? 'destructive' : rep.severity === 'High' ? 'secondary' : 'outline'}>
                            {rep.severity}
                        </Badge>
                    </CardHeader>
                    <CardContent className="mt-4 space-y-4">
                        <p>{rep.summary}</p>
                        <Button variant="outline" className='bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition shadow-md '>Download PDF</Button>
                    </CardContent>
                </motion.div>
            ))}
        </motion.main>
    );
}
