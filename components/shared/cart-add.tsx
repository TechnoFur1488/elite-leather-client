"use client"

import { useAddCartMutation } from "@/store/apiSlice"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"

interface Props {
    productId: number
    className?: string
}

export const CartAdd = ({ productId, className }: Props) => {
    const [postCart] = useAddCartMutation()
    const router = useRouter()

    const handleAddCart = async (productId: number) => {
        try {
            await postCart(productId).unwrap()
            toast.success("Товар успешно добавлен в корзину")
        } catch (err) {
            if (err && typeof err === "object" && "status" in err && err.status === 401) {
                router.push(`/auth/signin?from=${encodeURIComponent(window.location.pathname)}`)
            } else if (err && typeof err === "object" && "status" in err && err.status === 409)  {
                toast.error("Товар уже в корзине")
            } else {
                console.error(err)
                toast.error("Произошла ошибка")
            }
        }
    }

    return (
        <Button onClick={() => handleAddCart(productId)} className={cn("bg-[#E04141] rounded-[20px]", className)}>Купить</Button>
    )
}