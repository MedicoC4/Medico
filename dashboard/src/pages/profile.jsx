import { Helmet } from 'react-helmet-async';

import { Profile } from 'src/sections/profile';

// ----------------------------------------------------------------------

export default function Profiles() {
  return (
    <>
      <Helmet>
        <title> Profile </title>
      </Helmet>

      <Profile />
    </>
  );
}