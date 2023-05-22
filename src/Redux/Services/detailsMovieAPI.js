import axiosClient from "../../config/axiosClient";
export async function infoMovie(movieId) {
  try {
    const response = await axiosClient.get(
      `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
