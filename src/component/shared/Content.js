import ContentDetail from "./ContentDetail";
import styles from "./Content.module.css";
import userdata from "../../data/userdata.json";
import { useEffect } from "react";

const Content = () => {
  //spring에서 데이터 긁어옴
  const getMovies = async () => {
    fetch("http://localhost:8080/api/boards", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((dd) => console.log(dd));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.background}>
      <div className="container col-10 mt-2 ">
        <div className={styles.card_background}>
          <p className={styles.article_kind}>인기 중고</p>
          {/* 컨탠츠 3개 들어가는 곳 */}
          {userdata["data"].map((item) => {
            return (
              <div className={styles.flat_card}>
                <ContentDetail data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
