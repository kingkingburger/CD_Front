import styles from "../css/Basket.module.css";

const Basket = () => {
  return (
    <div className="container m-5">
      <div className="">
        <h1>장바구니 </h1>
        <hr />
      </div>
      <ul class="list-group mt-4">
        <li class="list-group-item border-top border-2 border-secondary rounded-3">
          <div className="row">
            <div className="col-sm-3">
              <img className="img-fluid" src="./static/img/사과.jpg"></img>
            </div>
            <div className="col-sm-9">
              <div className="d-flex justify-content-between">
                <h2>물품이름</h2>
                <h2>현재 가격 : ₩999999 </h2>
              </div>
              <hr></hr>
              <div className="text-end">
                <h2>시작 가격 : ₩999999 </h2>
              </div>
              <hr></hr>
              <div>남은 시간</div>

              <div>등록일: 2022-02-03</div>
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
