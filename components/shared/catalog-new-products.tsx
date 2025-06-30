import { useGetNewCatalogProductsQuery } from "@/store/apiSlice"
import Image from "next/image"
import Link from "next/link"

interface Props {
    catalogId: number
}

export const CatalogNewProducts = ({ catalogId }: Props) => {
    const { data, isLoading, isError } = useGetNewCatalogProductsQuery(catalogId)

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL || "https://elite-leather-server-production.up.railway.app/"


    return (
        <div className={"flex justify-between pt-12.5"}>
            {data?.product.rows.map(el => (
                <div key={el.id} className={"space-y-5"}>
                    <Link href={`/product/${el.id}`} className={"space-y-5"}>
                        <div className={"relative w-92.5 h-78"}>
                            <Image src={baseUrl + el.img[0]} alt={el.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                        </div>
                        <p className={"text-[18px] text-center"}>{el.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}