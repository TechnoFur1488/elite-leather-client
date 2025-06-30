"use client"

import { useGetAllProductsQuery } from "@/store/apiSlice"
import Image from "next/image"
import { CartAdd } from "./cart-add"
import { DeleteProduct } from "./delete-product"
import Link from "next/link"

export const Products = () => {
    const { data, isLoading, isError } = useGetAllProductsQuery()

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL || "https://elite-leather-server-production.up.railway.app/"

    return (
        <>
            <h1 className={"text-2xl md:text-3xl lg:text-[45px] px-4 md:pl-32 text-center md:text-left"}>Главная страница магазина</h1>
            <h2 className={"pt-10 md:pt-15 lg:pt-25 text-2xl md:text-3xl lg:text-5xl text-center md:text-left px-4 md:px-0"}>Продукты ({data?.allProduct.length})</h2>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 md:pt-9 gap-4 md:gap-6 lg:gap-y-7.5 px-4 md:px-0"}>
                {data?.allProduct.map(el => (
                    <div key={el.id} className="flex flex-col items-start">
                        <div className="w-full max-w-xs">
                            <Link href={`/product/${el.id}`} className="block">
                                <div className={"relative w-full aspect-square mb-3"}>
                                    <Image 
                                        src={baseUrl + el.img[0]} 
                                        alt="Картинка товара" 
                                        fill 
                                        className="object-cover rounded-lg" 
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                                    />
                                </div>
                                <p className={"text-sm md:text-base lg:text-[17px] text-left font-medium mb-2"}>{el.name}</p>
                                <p className={"text-[#E04141] text-base md:text-lg lg:text-[20px] font-bold text-left mb-3"}>{el.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0 })}</p>
                            </Link>
                            <div className="flex justify-start">
                                <CartAdd productId={el.id} />
                            </div>
                        </div>
                        <div className="absolute top-2 right-2">
                            <DeleteProduct productId={el.id} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}