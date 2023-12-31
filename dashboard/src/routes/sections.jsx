import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const LandingPage = lazy(() => import('src/pages/landingPage'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const OrdersView = lazy(() => import('src/pages/oder-details'));
export const OrdersDetails = lazy(() => import('src/pages/orders-detail'));
export const MissingProd = lazy(() => import('src/pages/missing'));
export const ProductsOverview = lazy(() => import('src/pages/productsOverview'));
export const ProductDetails = lazy(() => import('src/pages/productDetails'))
export const AddProduct = lazy(() => import('src/pages/addProduct'));
export const UpdataProd = lazy(() => import('src/pages/updateProduct'));
export const Profile = lazy(() => import('src/pages/profile'))
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div style={{width:"100%", height:'100%'}}><div className="loader" /></div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        {
          path: 'orders',
          element: <Outlet />,
          children: [
            { index: true, element: <OrdersView /> }, 
            { path: 'orders-detail/:id', element: <OrdersDetails /> }, 
          ],
        },
        {
          path: 'product-overview',
          element: <Outlet />,
          children: [
            { index: true, element: <ProductsOverview /> }, 
            { path: 'add-product', element: <AddProduct /> },
            { path: 'product-details/:id', element: <ProductDetails /> }, 
            { path: 'updateProd/:productId', element: <UpdataProd /> },
          ],
        },
        { path: 'missing-product', element: <MissingProd /> },
        { path: 'product-details/:id', element: <ProductsOverview /> },
        { path: '/profile', element: <Profile /> },
        { path: 'updateProduct/:productId', element: <UpdataProd /> },
      ],
    },
    { path:'/', element: <LandingPage />},
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
