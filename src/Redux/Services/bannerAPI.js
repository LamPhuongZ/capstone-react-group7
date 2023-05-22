import axiosClient from "../../config/axiosClient";

export const getBannersAPI = async () => {
    const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner");
    return data;
};