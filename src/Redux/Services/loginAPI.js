import axiosClient from "../../config/axiosClient";
export async function loginUser(payload) {
  try {
    const response = await axiosClient.post(
      "/QuanLyNguoiDung/DangNhap",
      payload
    );
    return response;
  } catch (error) {
    throw error.response.data.content;
  }
}
