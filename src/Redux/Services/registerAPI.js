import axiosClient from "../../config/axiosClient";

export async function registerUser(payload) {
  try {
    const response = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
    return response;
  } catch (error) {
    throw error.response.data.content;
  }
}
