import axiosClient from "../../config/axiosClient";
export async function cineName() {
  try {
    const response = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getShowTimeRequest(movieId) {
  try {
    const response = await axiosClient.get(
      `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getTheaterNameByCineId(cineId) {
  try {
    const response = await axiosClient.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cineId}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getShowTimeByCineIdAndGroupIdAPI(cineId) {
  // const payload = { ...cineId, maNhom: "GP07" };

  try {
    const response = await axiosClient.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cineId}&maNhom=${"GP07"}`
    );

    // const response = await axiosClient.get(
    //   `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${payload}`
    // );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

