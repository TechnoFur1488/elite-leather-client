"use client"

import { useGetOneProductsQuery } from "@/store/apiSlice"
import Link from "next/link"
import { useParams } from "next/navigation"
import { CartAdd } from "./cart-add"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from "react"
import { FreeMode, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper/types"
import { UpdateProduct } from "./update-product"

export const ProductOption = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const router = useParams()
    const productId = router.productId
    const [role, setRole] = useState("")

    useEffect(() => {
        setRole(localStorage.getItem("role") || "")
    }, [])


    const { data, isLoading, isError } = useGetOneProductsQuery(Number(productId))

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>
    if (!data) return <div>Товар не найден</div>

    const oneProduct = data.oneProduct

    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL || "http://localhost:5000/"

    return (
        <div className="px-4 md:px-0">
            <Link className={"underline text-[#E04141] text-sm md:text-[15px] block mb-4 md:mb-6"} href={"/product"}>Главная страница магазина</Link>
            <div className={"flex flex-col lg:flex-row pt-6 md:pt-8 lg:pt-12.5 gap-6 lg:gap-0"}>
                <div className={"w-full lg:w-[50%] flex justify-center"}>
                    <div className={"w-full max-w-md lg:w-109"}>
                        <Swiper className={"w-full mb-4 md:mb-6"} thumbs={{ swiper: thumbsSwiper }} slidesPerView={1} spaceBetween={20} modules={[FreeMode, Thumbs]}>
                            {oneProduct.img.map((el, i) => (
                                <SwiperSlide key={i}>
                                    <div className={"relative w-full aspect-square lg:w-109.5 lg:h-107"}>
                                        <Image src={baseUrl + el} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Картинка товара" className="object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {oneProduct.img.map((el, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative w-full aspect-square">
                                        <Image src={baseUrl + el} fill alt="Картинка товара" className="object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className={"w-full lg:w-[50%] space-y-4 md:space-y-5 flex flex-col items-start"}>
                    <span className={"text-[#61A854] text-sm md:text-[15px]"}>В наличии</span>
                    <h1 className={"text-xl md:text-2xl lg:text-[34px]"}>{oneProduct.name}</h1>
                    <p className={"font-bold text-lg md:text-xl lg:text-[19px]"}>{oneProduct.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0 })}</p>
                    <div className={"bg-[#EDF0F5] h-[1px] w-full"} />
                    <CartAdd className={"w-full md:w-30"} productId={oneProduct.id} />
                    <div className={"flex flex-col items-start w-full"}>
                        <div className={"flex items-center flex-col"}>
                            <span className="text-sm md:text-base">Описание</span>
                            <div className={"bg-[#E04141] w-full md:w-30 h-0.5"} />
                        </div>
                    </div>
                    <p className={"text-[#595452] text-sm md:text-[15px] leading-relaxed"}>{oneProduct.description}</p>
                </div>
                {role === "ADMIN" &&
                    <div className="w-full lg:w-auto">
                        <UpdateProduct productId={oneProduct.id} />
                    </div>
                }
            </div>
        </div>
    )
}