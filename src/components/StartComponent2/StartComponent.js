import { useEffect, useState } from "react";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
import Card from "./Card";
import { map } from "lodash";
import font from "../font.css";

const css = {
  top: {
    position: "absolute",
    paddingBottom: "5%",
  },
  bottom: {
    borderTop: "0.15rem solid",
    position: "absolute",
    background: "rgba(255,255,255,0.3)",
    bottom: "0px",
    height: "60%",
    display: "grid",
    gridTemplateColumns: "repeat(5,20vw)",
  },
  image: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
  },
};
const human = [
  { name: ["권노현", "nohyun", "1", "Backend Developer", "blahblahblah"] },
  {
    name: [
      "김동성",
      "dongsung",
      "2",
      "Backend Developer",
      "상품성 있는 서비스를 만드는 것을 목표로 하는 개발자 입니다. 관심사는 Backend, AI입니다!",
    ],
  },
  { name: [
      "이준혁", 
      "junhyeok", 
      "3", 
      "Frontend Developer", 
      "꾸준히 성장하는 개발자 입니다. 앱 개발에 관심이 있습니다."
    ], 
  },
  { name: ["이종복", "joongbok", "4", "Backend Developer", "blahblahblah"] },
  {
    name: [
      "이창호",
      "changho",
      "5",
      "AI Developer",
      "저는 열정적이고 배우고자 하는 의지가 강한 개발자 입니다. 최근 제 관심사는 AI modeling과 AI researching입니다!",
    ],
  },
];
const StartComponent = () => {
  const [ishover, setishover] = useState(0);
  const [chat, setischat] = useState(0);
  return (
    <div style={css.bg}>
      <img
        style={css.image}
        src={require("../../image/background.jpg").default}
      ></img>
      <div style={css.top}>
        <Welcome></Welcome>
      </div>
      <div style={css.bottom}>
        {human.map((h) => {
          return <Card {...h}></Card>;
        })}
      </div>
    </div>
  );
};
export default StartComponent;
