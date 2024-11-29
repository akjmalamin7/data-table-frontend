import PageLoader from "@/components/common/pageLoader";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const LazyHome = React.lazy(() => import("@/pages/home/Home"));
const LazyProducts = React.lazy(() => import("@/pages/products/ProductsPage"));
const LazyAddProducts = React.lazy(
  () => import("@/pages/addProducts/AddProducts")
);
const LazyUpdateProducts = React.lazy(
  () => import("@/pages/updateProducts/UpdateProducts")
);
const ErrorFallback = () => <div>Something went wrong. Page not found.</div>;
export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <LazyHome />
      </Suspense>
    ),
    path: "/",
    errorElement: <ErrorFallback />,
  },
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <LazyProducts />
      </Suspense>
    ),
    path: "/products",
    errorElement: <ErrorFallback />,
  },
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <LazyAddProducts />
      </Suspense>
    ),
    path: "/products/add",
    errorElement: <ErrorFallback />,
  },
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <LazyUpdateProducts />
      </Suspense>
    ),
    path: "/products/update/:id",
    errorElement: <ErrorFallback />,
  },
]);
