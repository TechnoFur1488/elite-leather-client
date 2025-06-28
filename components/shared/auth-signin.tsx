"use client"

import { z } from "zod"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSigninUserMutation } from "@/store/apiSlice"
import { useRouter } from "next/navigation"
import { Input } from "../ui/input"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Container } from "./container"
import Link from "next/link"
import toast from "react-hot-toast"

export const AuthSignin = () => {
    const router = useRouter()
    const [checkPassword, setCheckPassword] = useState(false)
    const [signin] = useSigninUserMutation()

    const formSchema = z.object({
        email: z.string().min(2, { message: "Email не может быть короче 2 символов" }),
        password: z.string().min(8, { message: "Пароль должен содержать не менее 8 символов" })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const response = await signin({
                email: data.email,
                password: data.password
            }).unwrap()
            localStorage.setItem("role", response.signinUser.role)
            toast.success("Вход прошел успешно")
            router.push("/")
        } catch (err) {
            console.error(err)
            toast.error("Произошла ошибка")
        }
    }

    return (
        <div className={"bg-center bg-cover"} style={{ backgroundImage: "url('/5c7d205126c3d000250d6df7_optimized_2560.webp')" }}>
            <Container className={"py-65 max-w-150"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Card className={""}>
                            <CardHeader>
                                <CardTitle>Войдите в аккаунт</CardTitle>
                                <CardDescription>
                                    Введите email и пароль для входа в аккаунт
                                </CardDescription>
                                <CardAction>
                                    <Link href={"/auth/signin"}>
                                        Зарегистрироваться
                                    </Link>
                                </CardAction>
                            </CardHeader>
                            <CardContent className={"space-y-5"}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Почта</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Пароль</FormLabel>
                                            <FormControl>
                                                <div className={"relative"}>
                                                    <Input type={checkPassword ? "text" : "password"} {...field} />
                                                    <button className={"absolute right-0 top-1/2 -translate-y-1/2 mr-2 cursor-pointer"} type="button" onClick={() => setCheckPassword(!checkPassword)}>{checkPassword ? <Eye /> : <EyeOff />}</button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button type="submit">Войти</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </Container>
        </div>
    )
}