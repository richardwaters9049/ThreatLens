'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ScanPage() {
    const [output, setOutput] = useState<string>('');
    const dummyScans = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        type: ['SQL Injection', 'XSS Test', 'Brute Force'][i % 3],
        status: ['Completed', 'Running'][i % 2],
        date: `2025-07-${8 + i}`,
    }));

    const handleScan = () => {
        setOutput(`> Launching scan...\n> Simulating...\n> Scan complete: vulnerability found!\n\n${output}`);
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };
    const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={container}
            className="font-inter space-y-8 px-6 py-10 max-w-6xl mx-auto"
        >
            <motion.h1 variants={item} className="text-4xl font-bold mb-2">
                👁️ Launch Penetration Tests
            </motion.h1>

            <motion.div variants={item} className="glass-bg p-6 rounded-xl shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="target">Target URL / IP</Label>
                        <Input id="target" placeholder="https://example.com or 192.168.0.10" />
                    </div>
                    <div>
                        <Label htmlFor="type">Test Type</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose test type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sql">SQL Injection</SelectItem>
                                <SelectItem value="xss">Cross-Site Scripting (XSS)</SelectItem>
                                <SelectItem value="brute">Brute Force Login</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition shadow-md" onClick={handleScan}>
                    Start Scan
                </Button>
            </motion.div>

            <motion.div variants={item} className="glass-bg p-6 rounded-xl shadow-lg">
                <CardHeader>
                    <CardTitle>Console Output</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea className="bg-black font-mono text-green-400 min-h-[200px]" value={output} readOnly />
                </CardContent>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyScans.map((scan) => (
                    <motion.div whileHover={{ scale: 1.03 }} key={scan.id}>
                        <Card className="glass-bg hover:shadow-xl transition">
                            <CardHeader>
                                <CardTitle>{scan.type}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base">Status <strong>{scan.status}</strong></p>
                                <p className="text-sm">Date: <strong>{scan.date}</strong></p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.main>
    );
}
