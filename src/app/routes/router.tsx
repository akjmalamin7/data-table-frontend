import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const LazyHome = React.lazy(() => import("@/pages/home/Home"))
const LazyProducts = React.lazy(() => import("@/pages/products/ProductsPage"))
const LazyAddProducts = React.lazy(() => import("@/pages/addProducts/AddProducts"))
const ErrorFallback = () => <div>Something went wrong. Page not found.</div>;
export const router = createBrowserRouter([
    {
        element: <Suspense fallback="Loading...">
            <LazyProducts />
        </Suspense>,
        path: "/",
        errorElement: <ErrorFallback />,
    },
    {
        element: <Suspense fallback="Loading...">
            <LazyProducts />
        </Suspense>,
        path: "/products",
        errorElement: <ErrorFallback />,
    },
    {
        element: <Suspense fallback="Loading...">
            <LazyAddProducts />
        </Suspense>,
        path: "/products/add",
        errorElement: <ErrorFallback />,
    }
])