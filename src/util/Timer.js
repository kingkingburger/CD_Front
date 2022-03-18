import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current); // 시간이 다되면 여기서 정지한다.
  }, []);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current <= 0) {
      clearInterval(timerId.current);
      // dispatch event
    }
  }, [sec]);

  return (
    <div className="timer">
      {min} 분 {sec} 초
    </div>
  );
};
export default Timer;
