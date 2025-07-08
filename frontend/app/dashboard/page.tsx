// Dashboard page with welcome paragraph and system overview
// Explains the purpose and application of ThreatLens

import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <section className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow flex flex-col gap-4">

                <div className="fle flex-col items-center gap-10">
                    <h2 className="text-3xl py-5">🔍 ThreatLens Overview</h2>
                    <p>An AI-powered cybersecurity platform built to simulate attacks, analyse threat patterns, and produce intelligence-grade security reports.</p>
                    <br></br>
                    <p>This application includes three core modules:</p>
                </div>

                <div className="fle flex-col items-center gap-10">
                    <h2 className="text-3xl py-5">👁️ Scan Page</h2>
                    <p>The Scan page allows users to launch controlled penetration tests against target systems. Users can choose from various simulation types such as SQL injection, brute force, or XSS. These tests use real-world techniques and tooling to mimic threat actor behaviour in a safe, sandboxed environment.</p>
                    <br></br>
                    <p> In the industry: This is ideal for security teams conducting red team assessments or developers testing their apps against OWASP Top 10 vulnerabilities.</p>
                </div>

                <div className="fle flex-col items-center gap-10">
                    <h2 className="text-3xl py-5">🚨 Threats Page</h2>
                    <p>The Threats page analyses system logs and scan outputs using AI. Uploaded logs are parsed using Natural Language Processing (NLP) and anomaly detection algorithms to classify potential threats based on severity and behaviour.</p>
                    <br></br>
                    <p> In the industry: This empowers security analysts to detect sophisticated threats earlier, reduce false positives, and prioritise high-risk events efficiently using automated intelligence.
                    </p>
                </div>

                <div className="fle flex-col items-center gap-10">
                    <h2 className="text-3xl py-5">📄 Reports Page </h2>
                    <p>The Reports section stores the results of all previous scans and analyses. Each report contains a breakdown of vulnerabilities, AI-detected patterns, timestamps, and recommended remediations. Reports are exportable in PDF or CSV format for compliance, auditing, or client delivery.</p>
                    <br></br>
                    <p>In the industry: This supports security operations centres (SOCs), consultants, and auditors in documenting incidents, tracking remediation efforts, and fulfilling regulatory requirements.</p>
                </div>

            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="pt-4 flex flex-col gap-2 justify-center">
                        <CardTitle>Total Scans</CardTitle>
                        <p className="text-3xl font-bold mt-2">48</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 flex flex-col gap-2 justify-center">
                        <CardTitle>Critical Threats</CardTitle>
                        <p className="text-3xl font-bold mt-2 text-red-400">7</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 flex flex-col gap-2 justify-center">
                        <CardTitle>AI Detections</CardTitle>
                        <p className="text-3xl font-bold mt-2 text-emerald-400">26</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 flex flex-col gap-2 justify-center">
                        <CardTitle>Last Scan</CardTitle>
                        <p className="text-md text-black mt-2">12/07/2025 – SQL Injection Test</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
