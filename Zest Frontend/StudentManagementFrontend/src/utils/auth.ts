export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  const token = getToken();
  return (
    token !== null && 
    token !== undefined && 
    token !== "" && 
    token !== "null" && 
    token !== "undefined"
  );
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};