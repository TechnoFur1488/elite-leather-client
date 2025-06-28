import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Auth {
    email: string
    name: string
    password: string
}

interface Products {
    id: number
    name: string
    description: string
    price: number
    img: string[]
    catalogId: number
}

interface Cart {
    id: number
    name: string
    price: number
    quantity: number
    img: string
    productId: number
}

interface Order {
    id: number
    name: string
    email: string
    phone: string
    comment: string
    total: number
}

interface Catalog {
    id: number
    name: string
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://elite-leather-server-production.up.railway.app",
        credentials: "include",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    tagTypes: ["Products", "Cart", "User", "Order", "Catalog"],
    endpoints: (builder) => ({
        signinUser: builder.mutation<{ signinUser: { role: string } }, Partial<Auth>>({
            query: (user) => ({
                url: "/api/user/signin",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),
        signupUser: builder.mutation<void, Auth>({
            query: (user) => ({
                url: "/api/user/signup",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),


        getAllProducts: builder.query<{ allProduct: Products[] }, void>({
            query: () => "/api/products/",
            providesTags: ["Products"]
        }),
        getAllNewProducts: builder.query<{ products: { rows: Products[] } }, void>({
            query: () => "/api/products/new",
            providesTags: ["Products"]
        }),
        getOneProducts: builder.query<{ oneProduct: Products }, number>({
            query: (id) => `/api/products/${id}`,
            providesTags: ["Products"]
        }),
        createProduct: builder.mutation<{ product: Products }, FormData>({
            query: (formData) => ({
                url: "/api/products",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),
        updateProduct: builder.mutation<void, FormData>({
            query: (formData) => ({
                url: `/api/products/${formData.get("id")}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ["Products"]
        }),

        createCatalog: builder.mutation<void, Partial<Catalog>>({
            query: (body) => ({
                url: "/api/catalog",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Catalog"]
        }),
        getAllCatalog: builder.query<{ catalog: Catalog[] }, void>({
            query: () => "/api/catalog",
            providesTags: ["Catalog"]
        }),
        getNewCatalogProducts: builder.query<{ product: { rows: Products[] } }, number>({
            query: (id) => `/api/catalog/${id}`,
            providesTags: ["Catalog"]
        }),
        deleteCatalog: builder.mutation<void, number>({
            query: (id) => ({
                url: `/api/catalog/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Catalog"]
        }),
        updateCatlog: builder.mutation<void, { id: number; name: string }>({
            query: ({ id, name }) => ({
                url: `/api/catalog/${id}`,
                method: "PUT",
                body: { name }
            }),
            invalidatesTags: ["Catalog"]
        }),


        addCart: builder.mutation<void, number>({
            query: (productId) => ({
                url: `/api/cart/${productId}`,
                method: "POST",
                body: { productId }
            }),
            invalidatesTags: ["Cart"]
        }),
        getCart: builder.query<{ cartItem: Cart[] }, void>({
            query: () => "/api/cart",
            providesTags: ["Cart"]
        }),
        updateCart: builder.mutation<void, { id: number; quantity: number }>({
            query: ({ id, quantity }) => ({
                url: `/api/cart/${id}`,
                method: "PUT",
                body: { quantity },
            }),
            invalidatesTags: ["Cart"]
        }),
        deleteCart: builder.mutation<void, number>({
            query: (id) => ({
                url: `/api/cart/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"]
        }),


        postOrder: builder.mutation<void, Partial<Order>>({
            query: (order) => ({
                url: "/api/order",
                method: "POST",
                body: order
            }),
            invalidatesTags: ["Order"]
        }),
        getAllOrders: builder.query<{ orders: Order[] }, void>({
            query: () => "/api/order",
            providesTags: ["Order"]
        }),

    })
})

export const {
    useSignupUserMutation,
    useSigninUserMutation,

    useAddCartMutation,
    useGetCartQuery,
    useUpdateCartMutation,
    useDeleteCartMutation,

    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetAllNewProductsQuery,
    useGetOneProductsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,

    useCreateCatalogMutation,
    useGetAllCatalogQuery,
    useGetNewCatalogProductsQuery,
    useDeleteCatalogMutation,
    useUpdateCatlogMutation,

    usePostOrderMutation,
    useGetAllOrdersQuery,
} = apiSlice