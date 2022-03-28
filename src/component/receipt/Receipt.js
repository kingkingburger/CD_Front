import styles from "./css/Receipt.module.css";

const Receipt = () => {
  return (
    <div className="col-7 m-5">
      <div className="">
        <h1>거래 내역 </h1>
        <hr />
      </div>
      <ul class="list-group mt-4">
        <li class="list-group-item border-top border-2 border-secondary rounded-3">
          <div className="row">
            <img
              className={`img-fluid col-lg-3 py-2`}
              src="./static/img/사과.jpg"
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
                <div>가격: 29,000</div>
                <div>등록일: 2022-02-03</div>
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

export default Receipt;
