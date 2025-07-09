"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
    visible: {
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
    hidden: {},
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export default function DashboardPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="space-y-12 px-6 md:px-12 max-w-7xl mx-auto py-8">
            <motion.section
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-lg flex flex-col gap-12"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl font-semibold tracking-wide mb-3">
                        🔍 Welcome to <span className="text-blue-400">ThreatLens</span>
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
                        ThreatLens is an advanced, AI-powered cybersecurity platform designed to empower security professionals and developers alike. It simulates realistic penetration tests, analyses security logs with machine learning models, and delivers comprehensive, intelligence-grade security reports — all from a sleek web interface.
                    </p>
                    <p className="mt-4 text-gray-400 max-w-3xl">
                        By combining automated scanning, manual testing techniques, and AI-driven anomaly detection, ThreatLens helps teams identify vulnerabilities early, prioritize risks effectively, and communicate findings with clarity and confidence.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-semibold mb-3">
                        <Link
                            href="/scan"
                            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                        >
                            👁️ Scan Page
                        </Link>
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                        Launch custom penetration test simulations to evaluate system security under real-world attack scenarios. Choose from popular attack types such as SQL injection, cross-site scripting (XSS), brute force attempts, and more — all safely executed within a sandbox environment.
                    </p>
                    <p className="mt-2 text-gray-400">
                        Perfect for red teams, security auditors, and developers looking to harden applications against top cybersecurity threats.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-semibold mb-3">
                        <Link
                            href="/threats"
                            className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                        >
                            🚨 Threats Page
                        </Link>
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                        Upload or stream security logs and scan outputs for AI-powered classification and anomaly detection. Our platform leverages natural language processing (NLP) and machine learning models to categorize threats by severity and behaviour, helping you spot high-risk incidents faster.
                    </p>
                    <p className="mt-2 text-gray-400">
                        Ideal for SOC analysts and security researchers aiming to reduce false positives and prioritize critical threats with intelligent automation.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-semibold mb-3">
                        <Link
                            href="/reports"
                            className="text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                        >
                            📄 Reports Page
                        </Link>
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                        Review comprehensive reports summarizing previous scans and threat analyses. Each report includes detailed breakdowns of vulnerabilities, AI-driven insights, timestamps, and actionable remediation recommendations. Export reports in PDF or CSV for audits, compliance, and client delivery.
                    </p>
                    <p className="mt-2 text-gray-400">
                        Supports security teams and consultants in documenting findings clearly and meeting regulatory requirements.
                    </p>
                </motion.div>
            </motion.section>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {[
                    { title: "Total Scans", value: "48", valueClass: "text-blue-600" },
                    { title: "Critical Threats", value: "7", valueClass: "text-red-400" },
                    { title: "AI Detections", value: "26", valueClass: "text-emerald-400" },
                    {
                        title: "Last Scan",
                        value: "12/07/2025 – SQL Injection Test",
                        valueClass: "text-gray-900 text-sm",
                    },
                ].map(({ title, value, valueClass }, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        <Card>
                            <CardContent className="pt-6 flex flex-col gap-2 justify-center">
                                <CardTitle>{title}</CardTitle>
                                <p className={`text-2xl font-extrabold mt-3 ${valueClass || "text-black"}`}>
                                    {value}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
