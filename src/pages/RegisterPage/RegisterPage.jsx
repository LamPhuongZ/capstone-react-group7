import React, { useState } from "react";
import styles from "./register.module.scss";
import cls from "classnames";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../../Redux/Services/registerAPI";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import FormOutlet from "../../components/FormOutlet/FormOutlet";

function RegisterPage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      xacThucMatKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP07",
      hoTen: "",
    },
  });
  // ---

  const navigate = useNavigate();

  const { user } = useSelector((state) => {
    return state.userReducer;
  });

  //---
  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await registerUser({
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDt: values.soDt,
        maNhom: values.maNhom,
        hoTen: values.hoTen,
      });
      toast.success("Đăng ký thành công");
      navigate(`/login`);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <FormOutlet>
      <div>
        <div className="text-center">
          {/* dùng template string để add thêm class cho className đã có sẵn hoặc dùng thư viện classnames */}
          <i className={cls("fa fa-lock", styles.icon)}></i>
        </div>
        <h4 className="text-center">Đăng ký</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Tài Khoản *"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
                pattern: {
                  value: /^\S+$/,
                  message: "Tài khoản không được chứa khoảng trắng",
                },
              })}
            />
            {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type={togglePassword ? "text" : "password"}
              placeholder="Mật Khẩu *"
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống",
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                  message: "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số",
                },
              })}
            />
            {errors.matKhau && <p>{errors.matKhau.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type={togglePassword ? "text" : "password"}
              placeholder="Nhập Lại Mật Khẩu *"
              {...register("xacThucMatKhau", {
                required: {
                  value: true,
                },
                validate: (val) => {
                  if (watch("matKhau") != val) {
                    return "Nhập lại mật khẩu không khớp";
                  }
                },
              })}
            />
            {errors.xacThucMatKhau && <p>{errors.xacThucMatKhau.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Họ Tên *"
              {...register("hoTen", {
                required: {
                  value: true,
                  message: "Họ tên không được để trống",
                },
              })}
            />
            {errors.hoTen && <p>{errors.hoTen.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email không được để trống",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Số Điện Thoại *"
              {...register("soDt", {
                required: {
                  value: true,
                  message: "Số điện thoại không được để trống",
                },
                pattern: {
                  value: /[\d]/,
                  message: "Vui lòng nhập đúng định dạng",
                },
              })}
            />
            {errors.soDt && <p>{errors.soDt.message}</p>}
          </div>

          <div className="mb-4">
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
            <button disabled={isLoading}>ĐĂNG KÝ</button>
          </div>
        </form>

        <div className={styles.linkToLogin}>
          <Link to="/login">Bạn đã có tài khoản? Đăng nhập</Link>
        </div>
      </div>
    </FormOutlet>
  );
}

export default RegisterPage;
