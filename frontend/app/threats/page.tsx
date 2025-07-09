'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

type Threat = {
    id: number;
    name: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    source: string;
};

export default function ThreatsPage() {
    const [logs, setLogs] = useState('');
    const [threats, setThreats] = useState<Threat[]>([]);

    const handleAnalyse = () => {
        // Placeholder simulated AI threat detection
        setThreats([
            { id: 1, name: 'Suspicious Login Attempt', severity: 'High', source: 'auth.log' },
            { id: 2, name: 'Malicious Script', severity: 'Critical', source: 'webserver.log' },
        ]);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">🚨 AI Threat Detection</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Upload Log or Paste System Output</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Label htmlFor="log">Paste logs below:</Label>
                    <Textarea
                        id="log"
                        placeholder="e.g., Apache logs, syslog, IDS alerts..."
                        className="min-h-[150px]"
                        value={logs}
                        onChange={(e) => setLogs(e.target.value)}
                    />
                    <Button onClick={handleAnalyse}>Analyse Logs</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Threat Classification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {threats.length === 0 ? (
                        <p className="text-muted-foreground">No threats detected yet.</p>
                    ) : (
                        threats.map((threat) => (
                            <div
                                key={threat.id}
                                className="border p-4 rounded-md shadow flex justify-between items-center"
                            >
                                <div>
                                    <p className="font-medium">{threat.name}</p>
                                    <p className="text-sm text-muted-foreground">Source: {threat.source}</p>
                                </div>
                                <Badge
                                    variant={
                                        threat.severity === 'Critical'
                                            ? 'destructive'
                                            : threat.severity === 'High'
                                                ? 'secondary'
                                                : 'outline'
                                    }
                                >
                                    {threat.severity}
                                </Badge>
                            </div>
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
