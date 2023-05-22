import axiosClient from "../../config/axiosClient";

// Call API lấy thông tin tài khoản
export const getAccountInfoAPI = async (account) => {
    try {
        const response = await axiosClient.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`, account);

        return response.data.content;
    } catch (error) {
        throw error.response.data.content;
    }
};

// Call API cập nhật thông tin
export const updateUserAPI = async (account) => {
    try {
        const payload = { ...account };

        const data = await axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload);
        return data;
    } catch (error) {
        throw error.response.data.content;
    }
};