import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import cls from "classnames";
import styles from "./profilePage.module.scss";
import { Input, Select } from "antd";
import { getAccountInfoAPI, updateUserAPI } from "../../Redux/Services/accountAPI";

function ProfilePage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { taiKhoan } = useParams();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      hoTen: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: "GP00",
    },
    mode: "onChange",
  });

  // Xử lý hiển thị dữ liệu lên Input
  const onEditAccount = async (account) => {
    try {
      const data = await getAccountInfoAPI(account);
      // update dữ  liệu vào ô Input
      setValue("taiKhoan", data.taiKhoan);
      setValue("matKhau", data.matKhau);
      setValue("email", data.email);
      setValue("soDT", data.soDT);
      setValue("hoTen", data.hoTen);

      toast.success("Thông tin đang cập nhật");
    } catch (error) {
      toast.error("Thông tin không thể truy cập");
    }
  };

  useEffect(() => {
    onEditAccount(taiKhoan);
  }, [taiKhoan]);

  // Xử lý cập nhật dữ liệu
  const onSubmit = async (values) => {
    try {
      await updateUserAPI({
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDT: values.soDT,
        hoTen: values.hoTen,
        maLoaiNguoiDung: "KhachHang",
        maNhom: "GP00",
      });
      toast.success("Cập nhật thông tin thành công");

    } catch (error) {
      toast.error("Cập nhật thông tin không thành công");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center">
        {/* dùng template string để add thêm class cho className đã có sẵn hoặc dùng thư viện classnames */}
        <i className={cls("fa fa-user-edit", styles.icon)}></i>
      </div>
      <h4 className="text-center">Cập nhật thông tin cá nhân</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <Controller
            name="taiKhoan"
            control={control}
            render={({ onChange, field }) => {
              return (
                <Input
                  type="text"
                  onChange={onChange}
                  {...field}
                  placeholder="Tài Khoản *"
                />
              );
            }}
            rules={{
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
              pattern: {
                value: /^\S+$/,
                message: "Tài khoản không được chứa khoảng trắng",
              },
            }}
          />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <Controller
            name="matKhau"
            control={control}
            render={({ onChange, field }) => {
              return (
                <Input
                  type={togglePassword ? "text" : "password"}
                  onChange={onChange}
                  {...field}
                  placeholder="Mật Khẩu *"
                />
              );
            }}
            rules={{
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                message: "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số",
              },
            }}
          />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <Controller
            name="hoTen"
            control={control}
            render={({ onChange, field }) => {
              return (
                <Input
                  type="text"
                  onChange={onChange}
                  {...field}
                  placeholder="Họ Tên *"
                />
              );
            }}
            rules={{
              required: {
                value: true,
                message: "Họ tên không được để trống",
              },
            }}
          />
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <Controller
            name="email"
            control={control}
            render={({ onChange, field }) => {
              return (
                <Input
                  type="text"
                  onChange={onChange}
                  {...field}
                  placeholder="Email *"
                />
              );
            }}
            rules={{
              required: {
                value: true,
                message: "Email không được để trống",
              },
            }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <Controller
            name="soDT"
            control={control}
            render={({ onChange, field }) => {
              return (
                <Input
                  type="text"
                  onChange={onChange}
                  {...field}
                  placeholder="Số Điện Thoại *"
                />
              );
            }}
            rules={{
              required: {
                value: true,
                message: "Số điện thoại không được để trống",
              },
              pattern: {
                value: /[\d]/,
                message: "Vui lòng nhập đúng định dạng",
              },
            }}
          />
          {errors.soDT && <p>{errors.soDT.message}</p>}
        </div>
        <div className={styles.showPass}>
          <input
            type="checkbox"
            id="showPassword"
            onChange={() => setTogglePassword(!togglePassword)}
          />
          <label htmlFor="showPassword" className="ms-2">
            Hiển thị mật khẩu
          </label>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage