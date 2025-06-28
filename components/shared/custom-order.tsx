"use client"

import Image from "next/image"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container } from "./container"
import 'swiper/css'
import 'swiper/css/navigation'

import { Pagination } from "swiper/modules"

export const CustomOrder = () => {
    return (
        <>
            <div className={"bg-cover bg-center"} style={{ backgroundImage: "url('/Image.png')" }}>
                <Container className={"py-10 md:py-15 lg:py-25"}>
                    <div className={"w-full md:w-[60%] lg:w-[30%]"}>
                        <h1 className={"text-2xl md:text-3xl lg:text-5xl"}>Пользовательские продукты</h1>
                        <p className={"text-[#595452] text-sm md:text-[13px] lg:text-[15px] mt-4 md:mt-6"}>Хотя качественное кожаное изделие само по себе
                            прекрасный подарок, добавление
                            небольшой индивидуальности делает его
                            еще лучшим. Если вы
                            хочете снабдить свою компанию
                            элегантными и унифицированными корпоративными
                            аксессуарами, ищете
                            персонализированные
                            подарки для своих близких или просто
                            хотите
                            побаловать себя уникальными кожаными
                            изделиями, наша опция индивидуального брендирования
                            является
                            идеальным решением.</p>
                    </div>
                </Container>
            </div>
            <div className={"bg-cover"} style={{ backgroundImage: "url('/Image+Background.jpg')", backgroundAttachment: "fixed" }}>
                <Container className={"py-10 md:py-15 lg:py-25"}>
                    <h2 className={"text-2xl md:text-3xl lg:text-5xl pb-4 md:pb-6 lg:pb-7 text-center text-white"}>Разработка брендинга</h2>
                    <div className="flex justify-center">
                        <Image src={"/Kak-naJti-xobbi-luchshie-idei-i-sovety_1544891729-1024x512 1 (1).png"} width={1200} height={600} alt="Картинка" className="w-full max-w-full h-auto" />
                    </div>
                </Container>
            </div>
            <div className={"bg-[#EBEBEB]"}>
                <Container className={"flex flex-col py-10 md:py-15 lg:py-25"}>
                    <h2 className={"text-center text-2xl md:text-3xl lg:text-5xl pb-4 md:pb-6 lg:pb-7"}>Галерея</h2>
                    <Swiper 
                        spaceBetween={20} 
                        modules={[Pagination]} 
                        className={"flex justify-center items-center w-full"}
                        breakpoints={{
                            768: {
                                spaceBetween: 30,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className={"flex justify-center"}>
                                <Image src={"/Галерея 3.png"} alt="Картинка" width={1040} height={556} className="w-full max-w-full h-auto" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"flex justify-center"}>
                                <Image src={"/галерея 2.png"} alt="Картинка" width={1040} height={556} className="w-full max-w-full h-auto" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"flex justify-center"}>
                                <Image src={"/Галереия 1.png"} alt="Картинка" width={1040} height={556} className="w-full max-w-full h-auto" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"flex justify-center"}>
                                <Image src={"/a5b0baf5e8c6d4241b57d866a1a8--kantselyarskie-tovary-kozhanaya-papka-dlya-ejdan-v-konyachnom 1.png"} alt="Картинка" width={1040} height={556} className="w-full max-w-full h-auto" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
            <div className={"flex flex-col lg:flex-row justify-between"}>
                <div className="w-full lg:w-1/2">
                    <Image src={"/ChatGPT Image 18 июн. 2025 г., 06_59_23 1.png"} width={960} height={750} alt="Картинка" className="w-full h-auto" />
                </div>
                <div className={"w-full lg:w-1/2 flex justify-center"}>
                    <div className={"py-10 md:py-15 lg:py-25 text-center space-y-6 md:space-y-8 lg:space-y-10 w-full max-w-md lg:max-w-160 px-4 lg:px-0"}>
                        <h2 className={"text-2xl md:text-3xl lg:text-5xl"}>Пользовательские продукты</h2>
                        <p className={"text-sm md:text-base lg:text-[17px] text-[#212020]"}>Вы можете заказать брендинг и кастомизацию наших продуктов. Заполните форму, и мы свяжемся с вами в ближайшее время!</p>
                        <div className={"space-y-3 md:space-y-4"}>
                            <Input placeholder="Имя" className={"bg-[#67676733] rounded-3xl"} type="text" />
                            <Input placeholder="Номер телефона" className={"bg-[#67676733] rounded-3xl"} type="text" />
                            <Input placeholder="E-mail" className={"bg-[#67676733] rounded-3xl"} type="text" />
                            <Textarea placeholder="Предпочтения по кастомизации" className={"bg-[#67676733] rounded-3xl"} />
                            <Button className={"bg-[#E04141] w-full"}>Отправить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}