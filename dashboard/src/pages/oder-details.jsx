import { Helmet } from 'react-helmet-async';

import { OrdersView } from 'src/sections/orders';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <OrdersView />
    </>
  );
}
