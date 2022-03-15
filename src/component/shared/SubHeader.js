import styles from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className="container px-5 mt-3 d-flex justify-content-center">
      <div className="row g-0 ">
        <div className={`col-xxl-6 d-flex`}>
          <div className=" p-2 flex border dropdown">
            <a
              className={`dropdown-toggle ${styles.aTag}`}
              data-bs-toggle="dropdown"
              href="#"
            >
              <img
                className="text-center"
                src={require(`../../images/의류.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark ">의류</div>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Link 2
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/뷰티_잡화.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">뷰티 잡화</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/유아용품.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">유아용품</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/가구.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">가구 생활</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/디지털.png`)}
                width="70px"
                height="70px"
              ></img>
              <div className="text-center text-dark">디지털</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/컴퓨터.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">컴퓨터</div>
            </a>
          </div>
        </div>
        <div className={`col-xxl-5 d-flex`}>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/스포츠_레저.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">레저</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/뷰티.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">뷰티</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/생활_가전.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">생활 가전</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center"
                src={require(`../../images/자동차_공구.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">공구</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center "
                src={require(`../../images/도서_기타.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">도서 기타</div>
            </a>
          </div>
          <div className="p-2 flex border">
            <a className={styles.aTag} href="#">
              <img
                className="text-center "
                src={require(`../../images/도서_기타.png`)}
                width="62px"
                height="70px"
              ></img>
              <div className="text-center text-dark">도서 기타</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
