"use client"

import { AdminPanel } from "@/components/shared/admin-panel";
import { Container } from "@/components/shared/container";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPanelPage() {

    // const cookieStore = await cookies()
    // const token = cookieStore.get("jwt")?.value

    // if (!token) {
    //     notFound()
    // }

    // try {
    //     const payloadBase64 = token.split(".")[1]
    //     const decodedPayload = JSON.parse(
    //         Buffer.from(payloadBase64, "base64").toString("utf-8")
    //     )

    //     if (decodedPayload.role !== "ADMIN") {
    //         notFound()
    //     }
    // } catch (err) {
    //     console.error(err)
    //     notFound()
    // }

    const [role, setRole] = useState("")

    useEffect(() => {
        setRole(localStorage.getItem("role") || "")
    }, [])

    if (role !== "ADMIN") {
        notFound()
    }

    return (
        <Container>
            <AdminPanel />
        </Container>
    )
}