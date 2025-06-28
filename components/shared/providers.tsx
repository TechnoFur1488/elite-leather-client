"use client"

import { store } from "@/store/store"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { Footer } from "./footer"
import { Header } from "./header"
import { Cart } from "./cart"

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <Provider store={store}>
            <header>
                <Header />
            </header>
            <Cart />
            <main>
                {children}
            </main>
            <footer className={"bg-[#212020]"}>
                <Footer />
            </footer>
        </Provider>
    )
}