import Link from "next/link"
import { Container } from "./container"
import Image from "next/image"

export const Footer = () => {
    return (
        <Container className={"text-white flex flex-col md:flex-row justify-between py-10 md:py-15 lg:py-22.5 gap-8 md:gap-6 lg:gap-0"}>
            <div className={"px-4 w-full md:w-auto lg:w-52.5 text-center md:text-left"}>
                <Link href={"/"} className="text-lg md:text-xl lg:text-2xl font-semibold block mb-3 md:mb-4">Elite Leather</Link>
                <p className={"text-[#C2C2C2] text-sm md:text-base"}>Мы объединяем ремесленное искусство и современные технологии для производства высококачественных кожаных изделий на заказ.</p>
            </div>
            <nav className="w-full md:w-auto">
                <ul className={"flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-0"}>
                    <li className={"flex flex-col px-4 w-full md:w-55 gap-1 text-center md:text-left"}>
                        <Link href={"/catalog"} className="text-sm md:text-base hover:text-gray-300 transition-colors">Каталог</Link>
                    </li>
                    <li className={"flex flex-col px-4 w-full md:w-55 gap-1 text-center md:text-left"}>
                        <Link href={"/contacts"} className="text-sm md:text-base hover:text-gray-300 transition-colors">Контакты</Link>
                    </li>
                    <li className={"flex flex-col px-4 w-full md:w-55 gap-1 text-center md:text-left"}>
                        <Link href={"/our-history"} className="text-sm md:text-base hover:text-gray-300 transition-colors">Наша история</Link>
                        <Link href={"/custom-orders"} className="text-sm md:text-base hover:text-gray-300 transition-colors">Пользовательские продукты</Link>
                    </li>
                </ul>
            </nav>
            <div className={"px-4 flex items-center flex-col gap-3 md:gap-4 lg:gap-4.5 text-center"}>
                <h3 className={"text-lg md:text-xl lg:text-[34px]"}>Подписывайтесь на нас</h3>
                <div className={"flex gap-2"}>
                    <Link href={"#"}><Image src={"/Item → Link (2).svg"} width={34} height={34} alt="Facebook" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                    <Link href={"#"}><Image src={"/Item → Link (1).svg"} width={34} height={34} alt="Instagram" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                    <Link href={"#"}><Image src={"/Item → Link.svg"} width={34} height={34} alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 lg:w-[34px] lg:h-[34px]" /></Link>
                </div>
            </div>
        </Container>
    )
}