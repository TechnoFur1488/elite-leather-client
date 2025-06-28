import { AdminCreateCatalog } from "./admin-create-catalog"
import { AdminOrder } from "./admin-order"
import { CreateProduct } from "./create-product"

export const AdminPanel = () => {
    return (
        <div>
            <AdminOrder />
            <CreateProduct />
            <AdminCreateCatalog />
        </div>
    )
}