"use client"

import { useDeleteCatalogMutation } from "@/store/apiSlice"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"

interface Props {
    catalogId: number
}

export const DeleteCatalog = ({ catalogId }: Props) => {
    const [deleteCatalog] = useDeleteCatalogMutation()
    const [role, setRole] = useState("")

    useEffect(() => {
        setRole(localStorage.getItem("role") || "")
    }, [])

    const handleClickDeleteCatalog = async (catalogId: number) => {
        try {
            await deleteCatalog(catalogId).unwrap()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            {role === "ADMIN" &&
                <Button onClick={() => handleClickDeleteCatalog(catalogId)}><Trash2 /></Button>}
        </>
    )
}