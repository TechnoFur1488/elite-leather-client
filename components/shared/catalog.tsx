"use client"

import { useGetAllCatalogQuery } from "@/store/apiSlice"
import { CatalogNewProducts } from "./catalog-new-products"
import { Container } from "./container"
import { DeleteCatalog } from "./delete-catalog"
import { UpdateCatalog } from "./update-catalog"

export const Catalog = () => {
    const { data, isLoading, isError } = useGetAllCatalogQuery()

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка</div>

    return (
        <div>
            {data?.catalog.map((el, i) => (
                <div className={"bg-cover"} style={i % 2 === 0 ? { backgroundImage: "url('/Image+Background.jpg')", backgroundAttachment: "fixed", color: "white" } : {}} key={el.id}>
                    <Container className={"pt-20 pb-25"}>
                        <div>
                            <UpdateCatalog catalogId={el.id} />
                            <h2 className={" text-5xl text-center"}>{el.name}</h2>
                            <DeleteCatalog catalogId={el.id} />
                        </div>
                        <CatalogNewProducts catalogId={el.id} />
                    </Container>
                </div>
            ))}
        </div>
    )
}