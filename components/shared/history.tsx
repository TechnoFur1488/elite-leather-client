import Image from "next/image"
import { Container } from "./container"
import { Avatar, AvatarImage } from "../ui/avatar"

export const History = () => {
    return (
        <>
            <div className={"bg-[#EBEBEB]"}>
                <Container className={"flex flex-col lg:flex-row lg:space-x-3.5 items-center py-10 md:py-15 lg:py-25 gap-6 lg:gap-0"}>
                    <div className={"w-full lg:w-[770px]"}>
                        <Image src={"/ChatGPT Image 18 июн. 2025 г., 07_37_32 1.png"} alt="Картинка" width={1200} height={288} className="w-full h-auto" />
                    </div>
                    <div className={"w-full lg:w-[30%] space-y-4 md:space-y-6 lg:space-y-7 text-[#595452] text-sm md:text-base"}>
                        <p>
                            В Elite Leather мы создаем стильные кожаные изделия ручной работы. Наши продукты сочетают современный дизайн и практичность, делая вашу жизнь удобнее и привлекательнее. Каждый дизайн уникален, а для изготовления используем только высококачественную кожу, европейский лен и фурнитуру.
                        </p>
                        <p>Все изделия производятся вручную в Москве.</p>
                    </div>
                </Container>
            </div>
            <div className={"bg-cover"} style={{ backgroundImage: "url('/фон главной 2.png')", backgroundAttachment: "fixed" }}>
                <Container className={"py-10 md:py-15 lg:py-25 flex justify-center"}>
                    <div className={"space-y-6 md:space-y-8 lg:space-y-9 w-full md:w-[80%] lg:w-[50%] text-sm md:text-base lg:text-[18px]"}>
                        <div className={"bg-white w-full h-[1px]"} />
                        <p className={"text-center text-white"}>Мы создаем широкий ассортимент кожаных изделий высочайшего качества. Наши уникальные дизайны, разработанные с учетом современных потребностей, выделяют нас среди других. Приобретайте наши товары и добавьте элегантности своему образу.</p>
                        <div className={"bg-white w-full h-[1px]"} />
                    </div>
                </Container>
            </div>
            <div className={"bg-[#EBEBEB]"}>
                <Container className={"py-10 md:py-15 lg:py-25"}>
                    <div>
                        <h2 className={"pb-6 md:pb-8 lg:pb-10 text-2xl md:text-3xl lg:text-5xl text-center"}>Наша команда</h2>
                        <div className={"flex flex-col md:flex-row justify-between gap-6 md:gap-4 lg:gap-0"}>
                            <div className="w-full md:w-1/3">
                                <div className={"text-center w-full md:w-80 lg:w-92.5 flex items-center flex-col bg-white py-8 md:py-12 lg:py-17.5 px-4 md:px-6 lg:px-7.5 space-y-2 md:space-y-2.5 h-full"}>
                                    <Avatar className={"size-20 md:size-25 lg:size-30"}>
                                        <AvatarImage src={"/ChatGPT Image 18 июн. 2025 г., 06_02_33 1.png"} />
                                    </Avatar>
                                    <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Алиса Кравцова</h3>
                                    <p className={"text-xs md:text-sm lg:text-[13px]"}>Основатель и менеджер по продукту</p>
                                    <p className={"text-[#595452] text-xs md:text-sm lg:text-[13px]"}>Алиса Кравцова — основатель и менеджер по продукту компании Elite Leather, с более чем 15-летним опытом работы с кожаными изделиями. Имея профессиональное образование в области графического дизайна, она создает большинство дизайн-макетов и концептуальных эскизов для наших продуктов.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3">
                                <div className={"text-center w-full md:w-80 lg:w-92.5 flex items-center flex-col bg-white py-8 md:py-12 lg:py-17.5 px-4 md:px-6 lg:px-7.5 space-y-2 md:space-y-2.5 h-full"}>
                                    <Avatar className={"size-20 md:size-25 lg:size-30"}>
                                        <AvatarImage src={"/ChatGPT Image 18 июн. 2025 г., 06_07_04 1.png"} />
                                    </Avatar>
                                    <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Артем Сенькин</h3>
                                    <p className={"text-xs md:text-sm lg:text-[13px]"}>Координатор производства</p>
                                    <p className={"text-[#595452] text-xs md:text-sm lg:text-[13px]"}>Артем Сенькин отвечает за весь производственный процесс в Elite Leather — от составления калькуляционных таблиц и обработки запросов на образцы до переговоров с поставщиками о лучших ценах и ведения отчетов по доставке. Он отлично разбирается в цепочке разработки наших продуктов и прилагает все усилия, чтобы обеспечить отличный опыт для клиентов.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3">
                                <div className={"text-center w-full md:w-80 lg:w-92.5 flex items-center flex-col bg-white py-8 md:py-12 lg:py-17.5 px-4 md:px-6 lg:px-7.5 space-y-2 md:space-y-2.5 h-full"}>
                                    <Avatar className={"size-20 md:size-25 lg:size-30"}>
                                        <AvatarImage src={"/ChatGPT Image 18 июн. 2025 г., 06_09_19 1.png"} />
                                    </Avatar>
                                    <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Мирон Соколов</h3>
                                    <p className={"text-xs md:text-sm lg:text-[13px]"}>Менеджер по производству</p>
                                    <p className={"text-[#595452] text-xs md:text-sm lg:text-[13px]"}>Мирон Соколов работает в нашей команде с самого основания и отвечает за разработку и управление системой учета запасов. Благодаря своему богатому опыту в управлении и постоянным связям с поставщиками отрасли, он обеспечивает бесперебойную работу всех производственных процессов, чтобы каждая деталь выполнялась точно в срок..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container className={"py-10 md:py-15 lg:py-25"}>
                    <h2 className={"text-2xl md:text-3xl lg:text-5xl pb-6 md:pb-8 lg:pb-12.5 text-center"}>Наша история</h2>
                    <div className={"space-y-6 md:space-y-7 lg:space-y-7.5"}>
                        <div className={"flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5"}>
                            <div className={"bg-[#B53535] size-16 md:size-20 lg:size-25 text-lg md:text-2xl lg:text-3xl text-center flex justify-center items-center text-white rounded-full mx-auto md:mx-0"}>
                                2020
                            </div>
                            <div className={"flex flex-col w-full md:w-250 text-center md:text-left"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Март</h3>
                                <p className="text-sm md:text-base">Группа энтузиастов объединилась с целью создать уникальные кожаные изделия, сочетая современный дизайн и традиционные техники ручной работы.</p>
                            </div>
                        </div>
                        <div className={"flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5"}>
                            <div className={"bg-[#B53535] size-16 md:size-20 lg:size-25 text-lg md:text-2xl lg:text-3xl text-center flex justify-center items-center text-white rounded-full mx-auto md:mx-0"}>
                                2021
                            </div>
                            <div className={"flex flex-col w-full md:w-250 text-center md:text-left"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Июль</h3>
                                <p className="text-sm md:text-base">После года усердной работы и развития, мы запустили первую линию продуктов, получив положительные отзывы клиентов и расширив свою команду мастеров.</p>
                            </div>
                        </div>
                        <div className={"flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5"}>
                            <div className={"bg-[#B53535] size-16 md:size-20 lg:size-25 text-lg md:text-2xl lg:text-3xl text-center flex justify-center items-center text-white rounded-full mx-auto md:mx-0"}>
                                2022
                            </div>
                            <div className={"flex flex-col w-full md:w-250 text-center md:text-left"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Август</h3>
                                <p className="text-sm md:text-base">Благодаря росту популярности, мы переехали в более просторное производственное помещение и начали сотрудничество с международными поставщиками материалов.</p>
                            </div>
                        </div>
                        <div className={"flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5"}>
                            <div className={"bg-[#B53535] size-16 md:size-20 lg:size-25 text-lg md:text-2xl lg:text-3xl text-center flex justify-center items-center text-white rounded-full mx-auto md:mx-0"}>
                                2023
                            </div>
                            <div className={"flex flex-col w-full md:w-250 text-center md:text-left"}>
                                <h3 className={"text-xl md:text-2xl lg:text-4xl"}>Февраль</h3>
                                <p className="text-sm md:text-base">Мы запустили онлайн-магазин и начали экспортировать нашу продукцию за границу, укрепляя свои позиции на рынке кожаных аксессуаров.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"bg-cover"} style={{ backgroundImage: "url('/Image+Background.jpg')", backgroundAttachment: "fixed" }}>
                <Container>
                    <div className={"py-10 md:py-15 lg:py-25"}>
                        <h2 className={"pb-6 md:pb-8 lg:pb-12.5 text-2xl md:text-3xl lg:text-5xl text-white text-center"}>Галерея</h2>
                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-y-7.5"}>
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration.jpg"} className="w-full h-auto" />
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration (2).png"} className="w-full h-auto" />
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration (3).png"} className="w-full h-auto" />
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration (4).png"} className="w-full h-auto" />
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration (5).png"} className="w-full h-auto" />
                            <Image width={370} height={256} alt="Картинка" src={"/Picture → Illustration (6).png"} className="w-full h-auto" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}