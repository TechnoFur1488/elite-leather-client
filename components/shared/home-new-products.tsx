"use client"

import { useGetAllNewProductsQuery } from "@/store/apiSlice"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { CartAdd } from "./cart-add"

import 'swiper/css'
import 'swiper/css/navigation'
import Link from "next/link"

export const HomeNewProducts = () => {
    const { data, isLoading, isError } = useGetAllNewProductsQuery()

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL || "https://elite-leather-server-production.up.railway.app/"

    return (
        <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            className="w-full"
            loop={false}
            navigation={true}
        >
            {data?.products.rows.map(el => (
                <SwiperSlide key={el.id}>
                    <div className={"bg-white flex justify-center items-center flex-col p-4 sm:p-6 md:p-8 lg:p-10 gap-2 h-full"}>
                        <Link className={"flex flex-col items-center w-full"} href={`/product/${el.id}`}>
                            <div className={"w-full aspect-square relative mb-3"}>
                                <Image 
                                    src={baseUrl + el.img[0]} 
                                    alt={el.name} 
                                    fill 
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                                />
                            </div>
                            <p className={"text-sm md:text-base lg:text-[17px] text-center font-medium"}>{el.name}</p>
                            <span className={"text-[#E04141] text-lg md:text-xl lg:text-[20px] font-bold"}>{el.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0 })}</span>
                        </Link>
                        <div className={"w-full flex items-center justify-center mt-2"}>
                            <CartAdd productId={el.id} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}