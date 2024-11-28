import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });
  return data;
}

export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);
  return data;
}

export async function chcekAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");
  return data;
}

export const getCardDataService = async () => {
  const response = await axiosInstance.get("/card/getCardData");
  if (!response.data) throw new Error("Failed to fetch card data");
  console.log("response", response.data); // Logs the actual data
  return response.data; // Return the actual data, not the full response object
};
