"use client"

import { z } from "zod"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateProductMutation, useGetAllCatalogQuery } from "@/store/apiSlice"
import { Input } from "../ui/input"
import { useState, useRef } from "react"
import { Container } from "./container"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const CreateProduct = () => {
    const { data: catalog } = useGetAllCatalogQuery()
    const [previewUrls, setPreviewUrls] = useState<string[]>([])
    const [postProduct] = useCreateProductMutation()
    const inputRef = useRef<HTMLInputElement | null>(null);

    const formSchema = z.object({
        img: z.any()
            .refine((files) => {
                if (typeof window === 'undefined') return true
                return files instanceof FileList && files.length > 0
            }, "Добавьте хотя бы один файл")
            .refine((files) => {
                if (typeof window === 'undefined') return true
                return files instanceof FileList && files.length <= 10
            }, "Максимум 10 файлов")
            .refine(
                (files) => {
                    if (typeof window === 'undefined') return true
                    return files instanceof FileList &&
                        Array.from(files).every(file => file.size <= 5_000_000)
                },
                "Каждый файл должен быть меньше 5MB"
            ),
        name: z.string().min(2, { message: "Email не может быть короче 2 символов" }),
        price: z.coerce.number().min(1, { message: "Цена должна быть больше 0" }),
        description: z.string().min(2, { message: "Описание должно быть не меньше 2 символов" }),
        catalogId: z.coerce.number().min(1, { message: "Категория должна быть больше 0" }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            img: undefined,
            name: "",
            price: 0,
            description: "",
            catalogId: 0
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData()

            if (data.img && data.img instanceof FileList) {
                Array.from(data.img).forEach((file) => {
                    if (file instanceof File) {
                        formData.append("img", file)
                    }
                })
            }
            formData.append("name", String(data.name))
            formData.append("price", String(data.price))
            formData.append("description", String(data.description))
            formData.append("catalogId", String(data.catalogId))

            await postProduct(formData).unwrap()

            form.reset()
            setPreviewUrls([])
            if (inputRef.current) inputRef.current.value = "";
        } catch (err) {
            alert("Не удалось создать товар")
            console.error(err)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            form.setValue("img", e.target.files)

            const files = Array.from(e.target.files)
            const urls = files.map(file => URL.createObjectURL(file))
            setPreviewUrls(urls)
        }
    }

    const handleRemoveFile = (index: number) => {
        const newUrls = [...previewUrls]
        URL.revokeObjectURL(newUrls[index])
        newUrls.splice(index, 1)
        setPreviewUrls(newUrls)

        const currentFiles = form.getValues("img")
        if (currentFiles && currentFiles instanceof FileList) {
            const files = Array.from(currentFiles)
            files.splice(index, 1)

            const dataTransfer = new DataTransfer()
            files.forEach(file => {
                if (file instanceof File) {
                    dataTransfer.items.add(file)
                }
            })

            form.setValue("img", dataTransfer.files)

            if (files.length === 0 && inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }

    return (
        <div>
            <Container className={"py-65 max-w-150"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Card className={""}>
                            <CardHeader>
                                <CardTitle>Создайте товар</CardTitle>
                            </CardHeader>
                            <CardContent className={"space-y-5"}>
                                <FormField
                                    control={form.control}
                                    name="img"
                                    render={({ field: { ref, ...rest } }) => (
                                        <FormItem>
                                            <FormLabel>Фото</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <Input
                                                        multiple
                                                        type="file"
                                                        {...rest}
                                                        ref={e => {
                                                            ref(e)
                                                            inputRef.current = e
                                                        }}
                                                        onChange={(e) => handleFileChange(e)}
                                                        accept="image/*,.png,.jpg,.web"
                                                    />
                                                    <div className={"grid grid-cols-5 gap-x-5 gap-y-10 my-5"}>
                                                        {previewUrls.map((el: string, i: number) => (
                                                            <div key={i} className={"flex w-30 relative"}>
                                                                <Image className={"object-cover rounded-2xl min-h-[190px] max-h-[190px]"} src={el} alt="asd" width={120} height={190} />
                                                                <button type="button" onClick={() => handleRemoveFile(i)} className={"cursor-pointer absolute right-1 top-1"}>
                                                                    <Trash2 color='black' fill='currentColor' className={'hover:text-red-600 duration-300 transition hover:scale-120 text-[#E5E5EA]'} />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <span>{previewUrls.length === 0 ? "Файлы не выбраны" : `файлов выбрано ${previewUrls.length}`}</span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Введите название товара</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Описание</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Цена товара</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="number" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="catalogId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Выберите категорию</FormLabel>
                                            <FormControl>
                                                <Select
                                                    value={field.value ? String(field.value) : ""}
                                                    onValueChange={(value) => field.onChange(Number(value))}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Выберите категорию" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {catalog?.catalog.map(el => (
                                                                <SelectItem value={String(el.id)} key={el.id}>
                                                                    {el.name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button type="submit">Создать</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </Container>
        </div>
    )
}