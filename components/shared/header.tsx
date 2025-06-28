import Link from "next/link"
import { Container } from "./container"

export const Header = () => {
    return (
        <Container className={"flex flex-col"}>
            <Link className={"text-[24px] md:text-[28px] lg:text-[34px] text-center py-4 md:py-6 lg:py-7.5"} href={"/"}>Elite Leather</Link>
            <nav className={"pt-2 md:pt-2.5 pb-8 md:pb-10 lg:pb-12.5 text-[12px] md:text-[13px] lg:text-[15px]"}>
                <ul className={"flex flex-wrap gap-2 md:gap-3 lg:gap-4 justify-center"}>
                    <li>
                        <Link href={"/catalog"}>Каталог</Link>
                    </li>
                    <li>
                        <Link href={"/product"}>Все товары</Link>
                    </li>
                    <li>
                        <Link href={"/custom-orders"}>Пользовательские продукты</Link>
                    </li>
                    <li>
                        <Link href={"/our-history"}>Наша история</Link>
                    </li>
                    <li>
                        <Link href={"/contacts"}>Контакты</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}