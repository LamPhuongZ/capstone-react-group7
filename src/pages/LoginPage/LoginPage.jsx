import React from "react";
import styles from "./loginPage.module.scss";
import cls from "classnames";
import FormOutlet from "../../components/FormOutlet/FormOutlet";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/slices/userSlice";

function LoginPage() {
  // 3)
  const [togglePassword, setTogglePassword] = useState(false);

  // 1)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  // 4)
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.userReducer;
  });

  // 5)
  const [searchParams, _] = useSearchParams();

  // console.log(searchParams.get(`fallbackUrl`));

  // 2)
  const onSubmit = (values) => {
    dispatch(login(values));
  };

  if (user) {
    // searchParams.get(`fallbackUrl`) = /booking/44239
    if (searchParams.get(`fallbackUrl`)) {
      return <Navigate to={searchParams.get(`fallbackUrl`)} />;
    }
    return <Navigate to="/" />;
  }

  return (
    <FormOutlet>
      <div>
        <div className="text-center">
          {/* dùng template string để add thêm class cho className đã có sẵn hoặc dùng thư viện classnames */}
          <i class={cls("fa fa-user", styles.icon)}></i>
        </div>
        <h4 className="text-center">Đăng Nhập</h4>

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

          <div className="mb-3">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setTogglePassword(!togglePassword)}
            />
            <label className="ms-2" htmlFor="showPassword">
              Hiển thị mật khẩu
            </label>
          </div>

          <div className={styles.formGroup}>
            <button>ĐĂNG NHẬP</button>
          </div>
        </form>

        <div className={styles.linkToLogin}>
          <Link to="/register">Bạn chưa có tài khoản? Đăng ký</Link>
        </div>
      </div>
    </FormOutlet>
  );
}

export default LoginPage;
