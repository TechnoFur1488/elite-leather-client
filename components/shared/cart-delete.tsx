import { Trash2 } from "lucide-react"
import { useDeleteCartMutation } from "@/store/apiSlice"
import toast from "react-hot-toast"

interface Props {
    productId: number
}

export const CartDelete = ({ productId }: Props) => {
    const [deleteCart] = useDeleteCartMutation()

    const handelDeleteCartProduct = async (productId: number) => {
        try {
            await deleteCart(productId).unwrap()
            toast.success("Товар успешно удален из корзины")
        } catch (err) {
            console.error(err)
            toast.error("Произошла ошибка")
        }
    }

    return (
        <button type="button" onClick={() => handelDeleteCartProduct(productId)}>
            <Trash2 className={"size-4 text-[#9199AB] hover:text-red-500 cursor-pointer"} />
        </button>
    )
}