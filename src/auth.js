const isAuthenticated = () => {
  const user= localStorage.getItem("userData");
  if (user!= null) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;