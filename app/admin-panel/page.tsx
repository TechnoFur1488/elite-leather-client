import { AdminPanel } from "@/components/shared/admin-panel";
import { Container } from "@/components/shared/container";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function AdminPanelPage() {

    const cookieStore = await cookies()
    const token = cookieStore.get("jwt")?.value

    if (!token) {
        notFound()
    }

    try {
        const payloadBase64 = token.split(".")[1]
        const decodedPayload = JSON.parse(
            Buffer.from(payloadBase64, "base64").toString("utf-8")
        )

        if (decodedPayload.role !== "ADMIN") {
            notFound()
        }
    } catch (err) {
        console.error(err)
        notFound()
    }

    return (
        <Container>
            <AdminPanel />
        </Container>
    )
}