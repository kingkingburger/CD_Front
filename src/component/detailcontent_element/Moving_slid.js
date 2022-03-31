import { Carousel } from "bootstrap";
import styles from "./css/Moving_slid.module.css";

const Moving_slid = ({ data }) => {
  return (
    <div>
      <div className="container d-flex justify-content-center bg-light mt-5 ">
        <div className="d-flex flex-column">
          <div
            id="demo"
            className="carousel slide "
            data-bs-ride="carousel"
            style={{ maxWidth: "500px" }}
          >
            <div className={`carousel-indicators ${styles.invertIndicators}`}>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={data}
                  width="500px"
                  alt="nikeShoes1"
                  className="d-block "
                />
              </div>
              <div className="carousel-item">
                <img
                  src={data}
                  width="500px"
                  alt="nikeShoes2"
                  className="d-block "
                />
              </div>

              <div className="carousel-item">
                <img
                  src={data}
                  width="500px"
                  alt="nikeShoes3"
                  className="d-block "
                />
              </div>
            </div>

            <button
              className={`carousel-control-prev ${styles.invertPrev}`}
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className={`carousel-control-next ${styles.invertIndicators}`}
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moving_slid;
