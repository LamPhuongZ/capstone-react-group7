import axiosClient from "../../config/axiosClient";

export const getMoviesAPI = async (currentPage) => {
    const { data } = await axiosClient.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${"GP07"}`);
    return data;
}
