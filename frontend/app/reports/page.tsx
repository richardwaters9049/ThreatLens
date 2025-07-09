'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Report = {
    id: number;
    title: string;
    summary: string;
    date: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
};

const dummyReports: Report[] = [
    {
        id: 1,
        title: 'SQL Injection on Login Endpoint',
        summary: 'Detected SQLi vulnerability on POST /login with bypassed authentication.',
        date: '2025-07-08',
        severity: 'High',
    },
    {
        id: 2,
        title: 'XSS Detected in Search Bar',
        summary: 'Reflected XSS discovered via query string injection on /search.',
        date: '2025-07-06',
        severity: 'Medium',
    },
];

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">📑 Security Reports</h1>

            {dummyReports.map((report) => (
                <Card key={report.id}>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <div>
                            <CardTitle>{report.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{report.date}</p>
                        </div>
                        <Badge
                            variant={
                                report.severity === 'Critical'
                                    ? 'destructive'
                                    : report.severity === 'High'
                                        ? 'secondary'
                                        : 'outline'
                            }
                        >
                            {report.severity}
                        </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>{report.summary}</p>
                        <Button variant="outline" size="sm">
                            Download PDF
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
