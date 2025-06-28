"use client"

import { useGetCartQuery, usePostOrderMutation } from "@/store/apiSlice"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CartDelete } from "./cart-delete"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "../ui/textarea"
import { IMaskInput } from "react-imask"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"
import { ScrollArea } from "../ui/scroll-area"
import { CartUpdate } from "./cart-update"
import { ShoppingBag } from "lucide-react"

export const Cart = () => {
    const { data, isLoading, isError, refetch } = useGetCartQuery()
    const [postOrder] = usePostOrderMutation()


    const formSchema = z.object({
        name: z.string().min(2, { message: "Имя не может быть короче 2 символов" }),
        email: z.string().min(2, { message: "Email не может быть короче 2 символов" }),
        comment: z.string(),
        phone: z.string().min(18, { message: "Введите корректный номер телефона" }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            comment: "",
            phone: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await postOrder({
                name: data.name,
                email: data.email,
                comment: data.comment,
                phone: data.phone
            }).unwrap()
            toast.success("Заказ успешно создан")
            refetch()
        } catch (err) {
            console.error(err)
            toast.error("Произошла ошибка")
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL || "http://localhost:5000/"

    const cartItem = data?.cartItem || []

    const total = cartItem.map(el => el.price)
    const totalSum = total.reduce((sum, num) => sum + num, 0)

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    return (
        <div className={"fixed top-10 right-5"}>
            {cartItem.length > 0
                &&
                <Dialog>
                    <DialogTrigger className={"relative"}>
                        <div className={"bg-white shadow size-17.5 rounded-full flex items-center justify-center"}>
                            <ShoppingBag className={"size-10"} />
                        </div>
                        <div className={"bg-[#E04141] rounded-full size-6 flex items-center justify-center text-white absolute top-0 right-0"}>
                            <span className={"text-sm"}>{cartItem.length}</span>
                        </div>
                    </DialogTrigger>
                    <DialogContent className={"w-350"}>
                        <ScrollArea className={"h-170"}>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <DialogHeader>
                                        <DialogTitle>Корзина</DialogTitle>
                                    </DialogHeader>
                                    <div className={"space-y-4"}>
                                        <p className={"mb-4.5"}>Продукция</p>
                                        {data?.cartItem.map(el => (
                                            <div key={el.id}>
                                                <div className={"flex  items-center justify-between"}>
                                                    <Image src={baseUrl + el.img} alt={"Product"} width={46} height={46} />
                                                    <p className={"text-sm"}>{el.name}</p>
                                                    <CartUpdate quantity={el.quantity} productId={el.id} />
                                                    <p>{el.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0 })}</p>
                                                    <CartDelete productId={el.id} />
                                                </div>
                                                <div className={"bg-neutral-400 opacity-50 w-full mt-2 h-[1px]"} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={"flex justify-end"}>
                                        <span className={"text-[18px] font-bold"}>Общий: {totalSum.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0 })}</span>
                                    </div>
                                    <div className={"mt-7 mb-4.5"}>
                                        <p className={"font-bold text-[12px]"}>Оформить заказ</p>
                                    </div>
                                    <div className={"space-y-4"}>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Имя</FormLabel>
                                                    <FormControl>
                                                        <Input type="text" placeholder="Ваше имя" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Электронная почта</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="Ваш электронный адрес" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Телефон</FormLabel>
                                                    <FormControl>
                                                        <IMaskInput
                                                            placeholder="Ваш телефон"
                                                            className={cn(
                                                                "w-full px-3 py-2 rounded-md border border-gray-200",
                                                                "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                                                                "placeholder:text-gray-400 text-sm"
                                                            )}
                                                            mask={"+7 (000) 000-00-00"}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="comment"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Коментарий</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Ваш комментарий" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className={"flex justify-center mt-3"}>
                                        <DialogFooter>
                                            <Button type="submit" className={"bg-[#E04141] rounded-3xl"}>Заказать</Button>
                                        </DialogFooter>
                                    </div>
                                </form>
                            </Form>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            }
        </div>
    )
}