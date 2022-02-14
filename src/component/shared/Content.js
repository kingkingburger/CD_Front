import ContentDetail from "./ContentDetail";
const Content = () => {
  return (
    <div class="container col-md-8 mt-2">
      <div class="row">
        {/* 컨탠츠 3개 들어가는 곳 */}
        <div class="col-md-3">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
        <div class="col">
          <ContentDetail />
        </div>
      </div>
    </div>
  );
};

export default Content;
