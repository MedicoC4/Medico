import { Helmet } from 'react-helmet-async';

import { ProductsOverview } from 'src/sections/productsOverview';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <ProductsOverview />
    </>
  );
}