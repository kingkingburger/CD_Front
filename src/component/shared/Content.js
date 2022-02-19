import ContentDetail from "./ContentDetail";
import styles from "./Content.module.css";
import userdata from "../../data/userdata.json";

const Content = () => {
  return (
    <div class={styles.background}>
      <div class="container col-md-6 mt-2">
        <div className={styles.card_background}>
          {/* 컨탠츠 3개 들어가는 곳 */}
          {userdata["data"].map((item) => {
            return (
              <div class={styles.flat_card}>
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
