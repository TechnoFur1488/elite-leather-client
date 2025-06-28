"use client"

import { useDeleteProductMutation } from "@/store/apiSlice"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

interface Props {
    productId: number
}

export const DeleteProduct = ({ productId }: Props) => {
    const [deleteProduct] = useDeleteProductMutation()
    const [role, setRole] = useState("")

    useEffect(() => {
        setRole(localStorage.getItem("role") || "")
    }, [])

    const handleDeleteProduct = async (productId: number) => {
        try {
            await deleteProduct(productId).unwrap()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            {role === "ADMIN" &&
                <Button className={"absolute top-3 right-3 bg-red-500"} onClick={() => handleDeleteProduct(productId)}><Trash2 /></Button>
            }
        </>
    )
}