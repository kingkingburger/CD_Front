import axios from "axios";
import ContentDetail from "./ContentDetail";
import styles from "./Content.module.css";
import userdata from "../../data/userdata.json";
import { useEffect, useState } from "react";

const Content = () => {
  //spring에서 데이터 긁어옴
  // let [jdata, setJdata] = useState([]);
  // const getData = async () => {
  //   // fetch("http://localhost:8080/api/boards/1", {
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //   },
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((dd) => console.log(dd));
  //   const url = "http://localhost:8080/api/b";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setJdata(res.data);
  //       console.log("성공");
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // if (jdata.length > 0) {
  //   return jdata.map((realdata) => (
  //     <div key={realdata.id}>{realdata.category}</div>
  //   ));
  // }

  return (
    <div className={`${styles.background}`}>
      <div className="row mt-2">
        <div className={`${styles.card_background}`}>
          <p className={styles.article_kind}>인기 중고</p>
          {/* 컨탠츠 3개 들어가는 곳 */}
          {userdata["data"].map((item) => {
            return (
              <div className={`${styles.flat_card} mx-3`}>
                <ContentDetail key={item.id} data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
