import axiosClient from "../../config/axiosClient";

export async function getSeatByShowTimeId(showTimeId) {
  try {
    const response = await axiosClient.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`
    );
    return response;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function bookingTickets(payload) {
  try {
    const response = await axiosClient.post("/QuanLyDatVe/DatVe", payload);
    return response;
  } catch (error) {
    console.log(error);
    let message = error.message;
    if (error.response.status === 401) {
      message = "Vui Lòng Đăng Nhập";
    }

    throw message;
  }
}
