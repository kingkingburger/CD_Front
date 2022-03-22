import styles from "./css/Moving_slid.module.css";

const Moving_slid = ({ data }) => {
  return (
    <div id="demo" className="carousel slide " data-bs-ride="carousel">
      <div>
        <div className="carousel-indicators">
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
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={data} width="500px" alt="nikeShoes1" className="d-block" />
        </div>
        <div className="carousel-item">
          <img src={data} width="500px" alt="nikeShoes2" className="d-block " />
        </div>
        <div className="carousel-item">
          <img src={data} width="500px" alt="nikeShoes3" className="d-block " />
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-secondary"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-secondary"></span>
        </button>
      </div>
    </div>
  );
};

export default Moving_slid;
