
import React, { useEffect, useState, useRef } from "react";
import API from "../../contexts/API";

export default function Timer({dateBid, finalBid, id }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    //set to whatever the user decides
    //"Mon Apr 26 2021 19:31:04 GMT+0100 (British Summer Time)"
    const countDownDate = new Date("Mon Apr 23 2021 09:34:04 GMT+0100 (British Summer Time)").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval);
        console.log(finalBid)
        API.updateTime(id, finalBid)
        .then((response) => {
          console.log("updated item", response);
        })
        .catch((error) => console.log(error));
      }
      else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h5>Time Remaining</h5>
      <div className="timer">
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
