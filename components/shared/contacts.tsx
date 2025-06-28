import Link from "next/link"
import { Container } from "./container"
import Image from "next/image"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export const Contacts = () => {
    return (
        <div>
            <div className={"bg-cover"} style={{ backgroundImage: "url('/Image+Background.jpg')", backgroundAttachment: "fixed" }}>
                <div className={"py-10 md:py-15 lg:py-25"}>
                    <Container className={"bg-[#212020] flex flex-col lg:flex-row text-white min-h-[400px] md:min-h-[500px] lg:h-125"}>
                        <div className={"flex justify-center items-center flex-col w-full lg:w-[50%] text-center space-y-4 md:space-y-5 py-8 lg:py-0"}>
                            <div className={"w-full max-w-md lg:w-111 flex flex-col items-center space-y-4 md:space-y-5 px-4 lg:px-0"}>
                                <h1 className={"text-2xl md:text-3xl lg:text-5xl"}>Контакты</h1>
                                <p className="text-sm md:text-base">Приглашаем вас посетить наш магазин! Мы будем рады оказать помощь по всем вашим вопросам.</p>
                                <div className={"flex gap-2"}>
                                    <Link href={"#"}><Image src={"/Item → Link (2).svg"} width={34} height={34} alt="Facebook" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                                    <Link href={"#"}><Image src={"/Item → Link (1).svg"} width={34} height={34} alt="Instagram" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                                    <Link href={"#"}><Image src={"/Item → Link.svg"} width={34} height={34} alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col items-center justify-center w-full lg:w-[50%] text-center space-y-4 md:space-y-6 lg:space-y-3.5 py-8 lg:py-0 px-4 lg:px-0"}>
                            <div className={"space-y-2"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Адрес</h3>
                                <p className="text-sm md:text-base">г. Москва, ул. Тверская, <br /> д. 7, корп. 2, 125009.</p>
                            </div>
                            <div className={"space-y-2"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Номер</h3>
                                <p className="text-sm md:text-base">+7 (992) 999 09 90</p>
                            </div>
                            <div className={"space-y-2"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>E-mail</h3>
                                <p className="text-sm md:text-base">amirosmanov81@mail.ru</p>
                            </div>
                            <div className={"space-y-2"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Часы работы</h3>
                                <p className="text-sm md:text-base">Понедельник - пятница: 10:00 - 20:00 <br /> Суббота - Воскресенье: Выходной </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className={"bg-center bg-cover"} style={{ backgroundImage: "url('/ChatGPT Image 18 июн. 2025 г., 06_20_11 1.png')" }}>
                <div className={"py-10 md:py-15 lg:py-25"}>
                    <Container className={"flex justify-center lg:justify-end"}>
                        <div className={"w-full md:w-[80%] lg:w-[50%] bg-white"}>
                            <div className={"px-4 md:px-8 lg:px-20 py-8 md:py-10 lg:py-12.5 space-y-8 md:space-y-10 lg:space-y-12.5"}>
                                <h2 className={"text-2xl md:text-3xl lg:text-5xl text-center"}>Напишите нам</h2>
                                <div className={"space-y-4 md:space-y-5 lg:space-y-6 w-full"}>
                                    <Input className={"bg-neutral-400 w-full rounded-3xl"} placeholder="Имя" />
                                    <Input className={"bg-neutral-400 w-full rounded-3xl"} placeholder="E-mail" />
                                    <Textarea className={"bg-neutral-400 w-full rounded-3xl"} placeholder="Сообщение" />
                                </div>
                                <Button className={"bg-[#E04141] w-full rounded-3xl"}>Отправить</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}