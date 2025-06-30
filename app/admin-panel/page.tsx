"use client"

import { AdminPanel } from "@/components/shared/admin-panel";
import { Container } from "@/components/shared/container";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPanelPage() {

    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        const role = localStorage.getItem("role")
        setIsAdmin(role === "ADMIN")
    }, []);

    if (isAdmin === null) {
        return <div>Loading...</div>
    }

    if (!isAdmin) {
        notFound();
    }

    return (
        <Container>
            <AdminPanel />
        </Container>
    )
}