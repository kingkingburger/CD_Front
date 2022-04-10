import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const IsLogin = () => {
  const [isLogin, setIsLogin] = useState(false); //로그인 관리
  const [info, setInfo] = useState({});
  const cookie = new Cookies();
  const result = { isLogin, info };
  useEffect(() => {
    console.log(cookie.get("mySessionId"));
    let log = true;
    const axiosdata = async () => {
      if (cookie.get("mySessionId")) {
        // 로그인 상태 변경
        await axios
          .post(
            "http://localhost:8080/check",
            // { session: cookie.get("mySessionId") },
            { withCredentials: true }
          )
          .then((res) => setInfo(res));
        if (log) {
          setIsLogin(true);
        }
      }
    };
    axiosdata();
    return () => {
      log = false;
    };
  }, []);

  return result;
  console.log(isLogin);
  console.log(info);
};

export default IsLogin;
