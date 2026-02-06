import { useState, useEffect, useRef } from 'react';
import './index.scss'

// 从0到1新建一个 React 前端工程，并写一个页面，实现下面功能：

// - 上面有个2分钟的倒计时
// - 倒计时下，有2个按钮，一个按钮可以暂停/恢复倒计时，另一个按钮可以减10秒倒计时
// - 然后倒计时到0之后，出现一个秒杀新按钮

export default function Index() {
  const TIME = 2 * 30;
  const [leftTime, setLeftTime] = useState(TIME);
  const timer = useRef<null | NodeJS.Timeout>(null);

  // 倒计时
  const countDownTime = () => {
    timer.current = setInterval(() => {
      setLeftTime(time => {
        if (time <= 0) {
          clearInterval(timer.current as NodeJS.Timeout);
          return time;
        } else {
          return time - 1;
        }
      });
    }, 1000);
  }

  useEffect(() => {
    countDownTime();
  }, []);

  // 暂停/恢复倒计时
  const handleTimePauseOrContinue = () => {
    // 暂停倒计时
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      // 继续倒计时
    } else {
      countDownTime();
    }
  }

  // 减去10s时间
  const reduceTime10 = () => {
    setLeftTime(time => {
      if (time <= 10) {
        return 0;
      } else {
        return time - 10;
      }
    });
  }

  return (
    <>
      <div>{leftTime}</div>
      <div onClick={handleTimePauseOrContinue}>暂停/恢复</div>
      <div onClick={reduceTime10}>减去10s</div>
      {leftTime === 0 ? <div>秒杀新按钮</div> : null}
    </>
  )
}
