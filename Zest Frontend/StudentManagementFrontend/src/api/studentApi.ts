import API from "./axios";

export const getStudents = () => API.get("/students");
export const addStudent = (data: any) => API.post("/students", data);
export const updateStudent = (id: number, data: any) =>
  API.put(`/students/${id}`, data);
export const deleteStudent = (id: number) =>
  API.delete(`/students/${id}`);

export const loginUser = (data: any) => API.post("/auth/login", data);
export const registerUser = (data: any) => API.post("/auth/register", data);