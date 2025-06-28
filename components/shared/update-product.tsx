"use client"

import { useGetAllCatalogQuery, useGetOneProductsQuery, useUpdateProductMutation } from "@/store/apiSlice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface Props {
    productId: number
}

export const UpdateProduct = ({ productId }: Props) => {
    const { data: catalog } = useGetAllCatalogQuery()
    const { data: product } = useGetOneProductsQuery(productId)
    const [previewUrls, setPreviewUrls] = useState<string[]>([])
    const [updateProduct] = useUpdateProductMutation()

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
            name: product?.oneProduct.name,
            price: product?.oneProduct.price,
            description: product?.oneProduct.description,
            catalogId: product?.oneProduct.catalogId
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData()

            formData.append("id", String(productId))
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

            await updateProduct(formData).unwrap()

            form.reset()
            setPreviewUrls([])
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
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                Редактировать
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            Редактировать товар
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="img"
                            render={({ field: { ...rest } }) => (
                                <FormItem>
                                    <FormLabel>Фото</FormLabel>
                                    <FormControl>
                                        <div>
                                            <Input multiple type="file" {...rest} onChange={(e) => handleFileChange(e)} accept="image/*,.png,.jpg,.web" />
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
                        <DialogFooter>
                            <DialogClose>
                                Закрыть
                            </DialogClose>
                            <Button type="submit">Обновить</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}

