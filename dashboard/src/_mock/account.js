// ----------------------------------------------------------------------

const userName = JSON.parse(localStorage.getItem("userData"))


export const account = {
  displayName: userName?.data?.username,
  email: userName?.data?.email,
  photoURL: '/assets/images/avatars/avatar_25.jpg',
};
