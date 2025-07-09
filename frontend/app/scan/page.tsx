'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function ScanPage() {
    const [output, setOutput] = useState<string>('');

    const handleScan = () => {
        setOutput('Launching scan... (simulate output here)\n[+] Target located\n[+] Attempting SQL Injection...\n[!] Vulnerability found!');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">👁️ Launch a Penetration Test</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Configure Scan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="target">Target URL or IP</Label>
                        <Input id="target" placeholder="e.g., https://example.com or 192.168.1.1" />
                    </div>

                    <div>
                        <Label htmlFor="type">Test Type</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select test type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sql">SQL Injection</SelectItem>
                                <SelectItem value="xss">Cross-Site Scripting (XSS)</SelectItem>
                                <SelectItem value="brute">Brute Force Login</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button onClick={handleScan}>Start Scan</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Console Output</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        className="font-mono bg-black text-green-400 min-h-[200px]"
                        value={output}
                        readOnly
                    />
                </CardContent>
            </Card>
        </div>
    );
}
