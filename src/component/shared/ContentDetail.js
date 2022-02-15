import userdata from "../../data/userdata.json";

const ContentDetail = ({ data }) => {
  return (
    <div class="container col p-0">
      <div class="text-center">
        <img width="200" height="250" alt="contentpull" src="/logo192.png" />
      </div>
      <div class="d-flex justify-content-between">
        <div>남은 시간: 75:00</div>
        <div>조회수 1085</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>{data.title}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>{data.location}</div>
      </div>
      <div class="d-flex justify-content-end">
        <div>현재가격: {data.price}</div>
      </div>
      <div class="d-flex justify-content-end">
        <div>즉시구매가격: {data.immediately}</div>
      </div>
    </div>
  );
};

export default ContentDetail;
