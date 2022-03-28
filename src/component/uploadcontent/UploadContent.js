import React, { useState, useEffect } from "react";
import styles from "./UploadContent.module.css";

function UploadContent() {
  const [content, setContent] = useState("");

  const getValue = (event) => {
    const { name, value } = event.target;
    setContent({
      [name]: value,
    });
  };

  useEffect(() => {
    if (content !== "") {
      console.log(content);
    }
  }, [content]);
  const onChange = (e) => {};

  return (
    <div class="row" className={styles.background}>
      <div class="container">
        <div class="container col-xs-8 p-5 my-5 border border-2" className={styles.content_background}>
          <div className={`${styles.imagePreview} mx-5 mt-5`}></div>
          <div class="mx-5 mt-2 mb-5">
            <input type="file" name="image" onChange={onChange} multiple />
            {/* <button onClick={onClick}>사진을 선택해주세요</button> */}
          </div>
          <div className={`col-xs-3 mx-5 my-3`}>
            <label>제목 </label>
            <input
              className={styles.input}
              type="text"
              name="title"
              onChange={getValue}
            />
          </div>
          <div className={`col-xs-3 mx-5 my-3 `}>
            <label>카테고리 </label>
            <select className={styles.input} name="category" onChange={getValue}>
              <option value="0">종류를 선택해주세요</option>
              <option value="100">의류</option>
              <option value="200">가구</option>
              <option value="300">소품</option>
              <option value="400">잡화</option>
            </select>
          </div>
          <div className={`col-xs-3 mx-5 my-3`}>
            <label>경매 시작 금액</label>
            <input
              className={styles.input}
              type="text"
              name="auction_price"
              onChange={getValue}
            />
          </div>
          <div className={`col-xs-3 mx-5 my-3`}>
            <label>즉시 구매 금액 </label>
            <input
              className={styles.input}
              type="text"
              name="immediately_price"
              onChange={getValue}
            />
          </div>
          <div className={`col-xs-3 mx-5 my-3`}>
            <label>판매 종료일 </label>
            <input className={styles.input} type="date" name="endDate" onChange={getValue} />
          </div>
          <div className={`col-xs-3 mx-5 my-3`}>
            <textarea
              className={styles.textarea}
              name="description"
              onChange={getValue}
              placeholder="설명글을 입력해주세요!"
              rows="10"
            />
          </div>
          <div class="mx-5 mt-3 mb-5" align="right">
            <button type="button" class="mx-2 btn btn-primary">
              등록
            </button>
            <button type="button" class="mx-2 btn btn-warning">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadContent;
