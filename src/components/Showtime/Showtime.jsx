import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import {
  cineName,
  getTheaterNameByCineId,
} from "../../Redux/Services/cineNameAPI";
import CineName from "./CineName/CineName";
import { toast } from "react-toastify";
import styles from "./showtime.module.scss";
import TheaterName from "./TheaterName/TheaterName";
import cls from 'classnames'

function Showtime() {
  const [cineList, setCineList] = useState([]);
  const [cineId, setCineId] = useState("");
  const [theaterList, setTheaterList] = useState([]);

  const updateCineIdSelected = (cineId) => {
    setCineId(cineId);
  };

  const getTheaterByCineId = async (id) => {
    try {
      const response = await getTheaterNameByCineId(id);
      // cho nay P ghi la response.heThongRapChieu, ma response la 1 array chu khong phai object, nen no k show, P log response la thay no la 1 array
      setTheaterList(response);
    } catch (error) {
      toast.error("Không lấy được thông tin cụm rạp chiếu");
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

  useEffect(() => {
    getCineName();
  }, []);

  useEffect(() => {
    if (cineId) {
      getTheaterByCineId(cineId);
    }
  }, [cineId]);

  return (
    <div className={cls('container py-5', styles.showtime)} id="theaterCluster">
      <Tabs
        className={styles.showtime__group}
        defaultActiveKey="1"
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
            children: <TheaterName cineId={cineId} theaterList={theaterList} />,
          };
        })}
      />
    </div>
  );
}

export default Showtime;
