"use client"

import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { useUpdateCatlogMutation } from "@/store/apiSlice"
import { Input } from "../ui/input"
import toast from "react-hot-toast"

interface Props {
    catalogId: number
}

export const UpdateCatalog = ({ catalogId }: Props) => {
    const [name, setName] = useState("")
    const [update, setUpdate] = useState(false)
    const [role, setRole] = useState("")
    const [updateCatalog] = useUpdateCatlogMutation()

    useEffect(() => {
        setRole(localStorage.getItem("role") || "")
    }, [])

    const handleUpdateCatalog = async (catalogId: number) => {
        try {
            await updateCatalog({
                id: catalogId,
                name: name
            }).unwrap()
            setUpdate(false)
            toast.success("Каталог успешно обновлен")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            {role === "ADMIN" &&
                <div>
                    <Button onClick={() => setUpdate(!update)}><Pencil /></Button>
                    {update &&
                        <div className={"flex items-center space-x-4"}>
                            <Input type="text" placeholder="Название каталога" onChange={(e) => setName(e.target.value)} />
                            <Button onClick={() => handleUpdateCatalog(catalogId)}>Сохранить</Button>
                        </div>
                    }
                </div>
            }
        </>
    )
}