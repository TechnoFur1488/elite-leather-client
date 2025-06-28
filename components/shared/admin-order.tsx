"use client"

import { useGetAllOrdersQuery } from "@/store/apiSlice"
import { Card, CardContent, CardHeader, CardTitle, } from "../ui/card"
import { ScrollArea } from "../ui/scroll-area"

export const AdminOrder = () => {
    const { data, isLoading, isError } = useGetAllOrdersQuery()

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    return (
        <div>
            <h1 className={"text-center text-[45px] mb-2"}>Заказы</h1>
            <ScrollArea className={"h-[700]"}>
                <div className={"space-y-10"}>
                    {data?.orders.map(el => (
                        <Card key={el.id}>
                            <CardHeader>
                                <CardTitle>Номер заказа: {el.id}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Имя: {el.name}</p>
                                <p>Эл. почта {el.email}</p>
                                <p>Номер телефона {el.phone}</p>
                                <p>Комментарий {el.comment}</p>
                                <p>Сумма заказа {el.total}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}