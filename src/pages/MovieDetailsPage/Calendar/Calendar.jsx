import React, { useState } from "react";
import styles from "./Calendar.module.scss";
import { Tabs } from "antd";
import CineName from "./CineName/CineName";
import ShowTime from "./ShowTime/ShowTime";
import {
  cineName,
  getShowTimeRequest,
} from "../../../Redux/Services/cineNameAPI";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function Calendar() {
  const [cineList, setCineList] = useState([]);
  const [cineId, setCineId] = useState("");
  const [timeDate, setTimeDate] = useState([]);
  const params = useParams();
  const getShowTime = async () => {
    try {
      const response = await getShowTimeRequest(params.movieId);
      setTimeDate(response.heThongRapChieu);
    } catch (error) {
      toast.error("Không lấy được thông tin lịch chiếu phim");
    }
  };

  const getCineName = async () => {
    try {
      const response = await cineName();
      setCineList(response);
      // default select cine
      if (response.length) {
        setCineId(response[0].maHeThongRap);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const updateCineIdSelected = (cineId) => {
    setCineId(cineId);
  };

  useEffect(() => {
    getCineName();
  }, []);

  useEffect(() => {
    if (params.movieId) {
      getShowTime();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Tabs
        tabPosition={"left"}
        items={cineList.map((item, index) => {
          const id = String(index + 1);
          return {
            label: (
              <CineName
                item={item}
                updateCineIdSelected={updateCineIdSelected}
              />
            ),
            key: id,
            children: <ShowTime cineId={cineId} timeDate={timeDate} />,
          };
        })}
      />
    </div>
  );
}

export default Calendar;
