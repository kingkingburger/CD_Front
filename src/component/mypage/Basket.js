import styles from "../css/Basket.module.css";

const Basket = () => {
  return (
    <div className="col-7 m-5">
      <div className="">
        <h1>장바구니 </h1>
        <hr />
      </div>
      <ul class="list-group mt-4">
        <li class="list-group-item border-top border-2 border-secondary rounded-3">
          <div className="row">
            <img
              className={`img-fluid col-lg-3 py-2`}
              src="./static/img/전자레인지.png"
              alt="장바구니"
            ></img>
            <div className="col-lg-9">
              <div className="d-flex justify-content-between">
                <h2>물품이름</h2>
              </div>
              <hr></hr>
              <div className="mt-2 mb-2">판매자/ 구매자</div>
              <hr></hr>
              <div className="mt-2 mb-2">
                <div className="row">
                  <div className="col-sm-4">시작 가격: 1000</div>
                  <div className="col-sm-8">현재 가격: 29,000</div>
                </div>
              </div>
              <hr></hr>

              <div className="mt-2 mb-2">
                <div>남은시간: 23:00:00 </div>
                <div>등록일: 2022:03/29</div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item border-top border-2 border-secondary rounded-3 mt-3">
          Second item
        </li>
        <li class="list-group-item border-top border-2 border-secondary rounded-3 mt-3">
          Third item
        </li>
      </ul>
    </div>
  );
};

export default Basket;
