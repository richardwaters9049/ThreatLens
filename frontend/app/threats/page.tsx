'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Threat = { id: number; name: string; severity: 'Low' | 'Medium' | 'High' | 'Critical'; source: string };

export default function ThreatsPage() {
    const [logs, setLogs] = useState('');
    const [threats, setThreats] = useState<Threat[]>([]);
    const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
    const item = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

    const handleAnalyse = () => {
        setThreats(Array.from({ length: 6 }, (_, i) => ({
            id: i + 1,
            name: ['Suspicious login', 'SQL anomaly', 'Malicious script'][i % 3],
            severity: (['Low', 'Medium', 'High', 'Critical'] as const)[i % 4],
            source: ['auth.log', 'web.log', 'app.log'][i % 3],
        })));
    };

    return (
        <motion.main initial="hidden" animate="visible" variants={container} className="font-inter space-y-8 px-6 py-10 max-w-6xl mx-auto">
            <motion.h1 variants={item} className="text-4xl font-bold">
                🚨 AI Threat Detection
            </motion.h1>

            <motion.div variants={item} className="glass-bg p-6 rounded-xl shadow-lg space-y-4">
                <Label htmlFor="log">Paste system or security logs</Label>
                <Textarea id="log" className="min-h-[150px]" value={logs} onChange={e => setLogs(e.target.value)} />
                <Button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 transition shadow-md" onClick={handleAnalyse}>
                    Analyse Logs
                </Button>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
                {!threats.length
                    ? <p>No threats detected yet.</p>
                    : threats.map(shown => (
                        <motion.div key={shown.id} variants={item} whileHover={{ scale: 1.02 }} className="glass-bg p-4 rounded-lg flex justify-between items-center shadow-lg">
                            <div>
                                <p className="font-medium">{shown.name}</p>
                                <p className="text-sm">Source: {shown.source}</p>
                            </div>
                            <Badge variant={shown.severity === 'Critical' ? 'destructive' : shown.severity === 'High' ? 'secondary' : 'outline'}>
                                {shown.severity}
                            </Badge>
                        </motion.div>
                    ))}
            </motion.div>
        </motion.main>
    );
}
