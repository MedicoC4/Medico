import { Helmet } from 'react-helmet-async';

import { LandingPage } from 'src/sections/landingPage';

// ----------------------------------------------------------------------

export default function landingPage() {
  return (
    <>
      <Helmet>
        <title> home </title>
      </Helmet>

      <LandingPage />
    </>
  );
}