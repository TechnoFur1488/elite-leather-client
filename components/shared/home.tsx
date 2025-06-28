"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "./container"
import { HomeProducts } from "./home-products"
import { HomeNewProducts } from "./home-new-products"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"

export const Home = () => {
    const [value, setValue] = useState("")

    return (
        <>
            <div className={"h-[300px] md:h-[400px] lg:h-175 bg-[#F1F1F1] flex items-center justify-center relative"}>
                <div className={"absolute inset-0 bg-center bg-cover hidden md:block"} style={{ backgroundImage: "url('/Picture → Image placeholder.jpg')" }} />
                <div className={"py-8 text-white md:py-12 lg:py-37.5 flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-full lg:max-w-150 px-4 md:px-6 lg:px-0 text-center relative z-10"}>
                    <h1 className={"font-medium text-3xl md:text-5xl lg:text-7xl"}>Сумки, которые прослужат вам всю жизнь.</h1>
                    <p className={"text-sm md:text-base"}>Все наши изделия создаются вручную из высококачественной кожи.</p>
                    <div>
                        <Link className={"rounded-3xl bg-[#E04141] text-white py-3 md:py-4 px-4 md:px-5 text-sm md:text-base inline-block"} href={"/catalog"}>Выбрать продукт</Link>
                    </div>
                </div>
            </div>
            <div className={"bg-center bg-cover text-white"} style={{ backgroundImage: "url('/Image+Background.jpg')" }}>
                <Container className={"pt-10 md:pt-15 lg:pt-20 pb-15 md:pb-20 lg:pb-25"}>
                    <h2 className={"text-3xl md:text-4xl lg:text-5xl text-center"}>Коллекция</h2>
                    <div className={"flex flex-col md:flex-row justify-between h-full my-6 md:my-8 lg:my-10 gap-6 md:gap-4 lg:gap-0"}>
                        <div className={"relative w-full md:w-80 lg:w-92.5 h-80 md:h-96 lg:h-112"}>
                            <div className={"h-[95%]"}>
                                <div className={"h-full relative"}>
                                    <Image className={"z-5 object-cover"} fill src={"/IMG_2131-680x680 1.png"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Держатели" />
                                </div>
                            </div>
                            <div className={"absolute bg-red-500 bottom-0 z-20 h-16 md:h-18 lg:h-19 w-full md:w-72 lg:w-80 left-1/2 -translate-x-1/2"}>
                                <div className={"flex items-center justify-center h-full"}>
                                    <span className={"text-xl md:text-2xl lg:text-[34px]"}>Держатели</span>
                                </div>
                            </div>
                        </div>
                        <div className={"relative w-full md:w-80 lg:w-92.5 h-80 md:h-96 lg:h-112"}>
                            <div className={"h-[95%]"}>
                                <div className={"h-full relative"}>
                                    <Image className={"z-5 object-cover"} fill src={"/Picture → Illustration.png"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Держатели" />
                                </div>
                            </div>
                            <div className={"absolute bg-red-500 bottom-0 z-20 h-16 md:h-18 lg:h-19 w-full md:w-72 lg:w-80 left-1/2 -translate-x-1/2"}>
                                <div className={"flex items-center justify-center h-full"}>
                                    <span className={"text-xl md:text-2xl lg:text-[34px]"}>Кошельки</span>
                                </div>
                            </div>
                        </div>
                        <div className={"relative w-full md:w-80 lg:w-92.5 h-80 md:h-96 lg:h-112"}>
                            <div className={"h-[95%]"}>
                                <div className={"h-full relative"}>
                                    <Image className={"z-5 object-cover"} fill src={"/Picture → Illustration (1).png"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Держатели" />
                                </div>
                            </div>
                            <div className={"absolute bg-red-500 bottom-0 z-20 h-16 md:h-18 lg:h-19 w-full md:w-72 lg:w-80 left-1/2 -translate-x-1/2"}>
                                <div className={"flex items-center justify-center h-full"}>
                                    <span className={"text-xl md:text-2xl lg:text-[34px]"}>Сумки</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Link href={"/catalog"} className={"max-w-50"}>
                            <div className={"p-2.5 rounded-2xl border-1 bprder-white text-center"}>
                                Узнать больше
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
            <div className={"bg-[#EBEBEB]"}>
                <Container className={"py-10 md:py-15 lg:py-20"}>
                    <h2 className={"text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-10 lg:mb-12.5"}>Продукты</h2>
                    <HomeProducts />
                </Container>
            </div>
            <div className={"bg-cover bg-center"} style={{ backgroundImage: "url('/Image.png')" }}>
                <Container className={"py-10 md:py-15 lg:py-20"}>
                    <div className={"max-w-full md:max-w-[60%] lg:max-w-[30%] space-y-6 md:space-y-8 lg:space-y-10"}>
                        <h2 className={"text-2xl md:text-3xl lg:text-[50px]"}>Пользовательские продукты</h2>
                        <p className={"text-[#595452] text-sm md:text-[13px] lg:text-[15px]"}>Качественный кожаный продукт сам по себе — отличный подарок, а добавление индивидуальной доработки делает его еще лучше. Будь то корпоративные аксессуары, персональные подарки или уникальные вещи для себя — наш сервис по индивидуальному брендингу поможет создать именно то, что вам нужно.</p>
                        <div className={"max-w-40"}>
                            <Link href={"/catalog"} className={""}>
                                <div className={"p-2.5 rounded-2xl border-2 border-[#E04141] text-center"}>
                                    Узнать больше
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"bg-cover bg-center"} style={{ backgroundImage: "url('/Image+Background.jpg')" }}>
                <Container className={"py-10 md:py-15 lg:py-20"}>
                    <h2 className={"text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-10 lg:mb-12.5 text-white"}>Новые поступления</h2>
                    <HomeNewProducts />
                </Container>
            </div>
            <div className={"bg-cover"} style={{ backgroundImage: "url('/фон главной 2.png')", backgroundAttachment: "fixed" }}>
                <Container className={"py-15 md:py-20 lg:py-25"}>
                    <h2 className={"text-2xl md:text-3xl lg:text-5xl text-center text-white"}>Мы можем вывести ваш бренд на новый уровень, обеспечив вас роскошными товарами.</h2>
                </Container>
            </div>
            <div>
                <Container className={"flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"}>
                    <div className={"relative w-full lg:w-100 h-80 md:h-96 lg:h-121.5"}>
                        <Image fill src={"/resize_clp_before 1.png"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Картинка" className="object-cover" />
                    </div>
                    <div className={"space-y-6 md:space-y-7 lg:space-y-7.5 w-full lg:w-143"}>
                        <h2 className={"text-2xl md:text-3xl lg:text-5xl"}>Отличные товары по отличным ценам</h2>
                        <p className={"text-[#595452] text-sm md:text-base"}>С самого начала мы создаем практичные, современные и изысканные кожаные аксессуары, доступные каждому. Наша главная цель — удовлетворение клиентов через высококачественные изделия, соответствующие их индивидуальным предпочтениям.</p>
                        <p className={"text-[#595452] text-sm md:text-base"}>В Elite Leather мы делаем вещи, которые живут долго и со временем становятся только лучше. Наши мастера с энтузиазмом берутся за любые заказы, стремясь превзойти ваши ожидания, независимо от сложности проекта.</p>
                    </div>
                </Container>
            </div>
            <div className={"bg-center bg-cover text-white"} style={{ backgroundImage: "url('/Image+Background.jpg')" }}>
                <Container className={"pt-10 md:pt-15 lg:pt-20 pb-20 md:pb-30 lg:pb-40"}>
                    <h2 className={"mb-5 text-3xl md:text-4xl lg:text-5xl text-center"}>Почему мы</h2>
                    <div className={"flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-0"}>
                        <div className={"flex flex-col items-center gap-3 text-center w-full md:w-80 lg:w-90"}>
                            <Image src={"/icon.svg"} width={80} height={80} className={"md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"} alt="Картинка" />
                            <h3 className={"text-2xl md:text-3xl lg:text-4xl"}>Ручная работа</h3>
                            <p className="text-[#C2C2C2] text-sm md:text-base">Наши мастера работают с каждым клиентом индивидуально, чтобы создать уникальный продукт, отражающий их вкус.</p>
                        </div>
                        <div className={"flex flex-col items-center gap-3 text-center w-full md:w-80 lg:w-90"}>
                            <Image src={"/icon (1).svg"} width={80} height={80} className={"md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"} alt="Картинка" />
                            <h3 className={"text-2xl md:text-3xl lg:text-4xl"}>Ручная работа</h3>
                            <p className="text-[#C2C2C2] text-sm md:text-base">Мы используем только лучшие материалы для долговечности изделий.</p>
                        </div>
                        <div className={"flex flex-col items-center gap-3 text-center w-full md:w-80 lg:w-90"}>
                            <Image src={"/5c7939d626c3d000250bbf9c 1.svg"} width={80} height={80} className={"md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"} alt="Картинка" />
                            <h3 className={"text-2xl md:text-3xl lg:text-4xl"}>Ручная работа</h3>
                            <p className="text-[#C2C2C2] text-sm md:text-base">Мы сочетаем традиционные методы и современные технологии для создания изысканных и долговечных изделий.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"bg-cover relative"} style={{ backgroundImage: "url('/фон главной 1.png')", backgroundAttachment: "fixed" }}>
                <Container className={"py-10 md:py-15 lg:py-20 z-10 relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"}>
                    <div className={"space-y-2 w-full lg:w-142.5"}>
                        <h2 className={"text-2xl md:text-3xl lg:text-[40px] text-white"}>Подпишитесь для получения актуальных новостей и обновлений.</h2>
                        <p className={"text-white text-sm md:text-base"}>Подпишитесь на нашу рассылку, чтобы получать актуальные новости о новых поступлениях и специальных предложениях непосредственно на ваш электронный адрес!</p>
                    </div>
                    <div className={"space-y-2 w-full lg:w-65"}>
                        <Input className={"rounded-3xl text-white"} placeholder="Email" value={value} onChange={e => setValue(e.target.value)} />
                        <Button className={"rounded-3xl bg-[#E04141] w-full"} onClick={() => setValue("")}>Подписаться</Button>
                    </div>
                </Container>
                <div className={"absolute w-full h-full bg-black top-0 opacity-40 z-5"} />
            </div>
        </>
    )
}