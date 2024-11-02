import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const {data} = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });
  return data;
}

export async function loginService(formData) {
  const {data} = await axiosInstance.post("/auth/login", formData);
  return data;
}

export async function chcekAuth() {
  const {data} = await axiosInstance.post("/auth/chcek-auth");
  return data;
}
