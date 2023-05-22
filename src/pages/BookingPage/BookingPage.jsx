import React, { useEffect, useState } from "react";
import {
  bookingTickets,
  getSeatByShowTimeId,
} from "../../Redux/Services/seatAPI";
import Purchase from "./Purchase/Purchase";
import SeatsMap from "./SeatsMap/SeatsMap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function BookingPage() {
  // 2)
  const { showTimeId } = useParams();

  // 7)
  const navigate = useNavigate();

  // 3)
  const [seats, setSeats] = useState([]);

  // 9)
  const [movieDetails, setMovieDetails] = useState([]);

  // 4)
  const [cart, setCart] = useState([]);

  // 1)
  const getSeats = async (id) => {
    try {
      const response = await getSeatByShowTimeId(id);
      setSeats(response.data.content.danhSachGhe);
      setMovieDetails(response.data.content.thongTinPhim);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 5)
  const onAddToCart = (seat) => {
    setCart([...cart, seat]);
  };

  // 8)
  const removeToCart = (seatId) => {
    const newCart = cart.filter((item) => item.maGhe !== seatId);
    setCart(newCart);
  };

  // 6)
  const handlePurchase = async () => {
    if (cart.length === 0) {
      toast.warning("Vui Lòng Chọn Ghế");
      return;
    }

    try {
      const response = await bookingTickets({
        maLichChieu: showTimeId,
        danhSachVe: cart.map((item) => {
          return {
            maGhe: item.maGhe,
            giaVe: item.giaVe,
          };
        }),
      });
      toast.success("Thanh Toán Thành Công");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSeats(showTimeId);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 00, 0, 100)
  ),url(${movieDetails?.hinhAnh})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container-lg">
        <div className="d-flex row py-5">
          <div className="col-12 col-lg-8">
            <SeatsMap
              seats={seats}
              onAddToCart={onAddToCart}
              cart={cart}
              removeToCart={removeToCart}
            />
          </div>
          <div className="col-12 col-lg-4">
            <Purchase
              cart={cart}
              onPurchase={handlePurchase}
              removeToCart={removeToCart}
              movieDetails={movieDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
