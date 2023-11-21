import { Helmet } from 'react-helmet-async';

import { OrderDetails } from 'src/sections/orderDetails';

// ----------------------------------------------------------------------

export default function OrderDetail() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <OrderDetails />
    </>
  );
}
