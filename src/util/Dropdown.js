import { Dropdown } from "react-bootstrap";

const DropdownMenu = (isActive) => {
  return (
    <Dropdown.Menu show>
      <Dropdown.Item href="#/action-1">로그인</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-2">회원가입</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">장바구니</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">마이페이지</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-5">판매하기</Dropdown.Item>
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
