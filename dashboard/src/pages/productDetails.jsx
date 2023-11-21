import { Helmet } from 'react-helmet-async';

import { ProductDetails } from 'src/sections/productDetails';

// ----------------------------------------------------------------------

export default function ProductDetail() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <ProductDetails />
    </>
  );
}
