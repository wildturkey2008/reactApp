import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  // 今回の質問のため一旦コメントアウト
  // useEffect(() => {
  //   if (num > 0) {
  //     if (num % 3 === 0) {
  //       faceShowFlag || setfaceShowFlag(true);
  //     } else {
  //       faceShowFlag && setfaceShowFlag(false);
  //     }
  //   }
  // },[num]);

  // ==========================
  // =========質問ここから=========
  // ==========================

  // こうするとOK
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     faceShowFlag || setfaceShowFlag(true);
  //   } else {
  //     faceShowFlag && setfaceShowFlag(false);
  //   }
  // }

  // こうするとNG
  if (num > 0) {
    if (num % 3 === 0) {
      setfaceShowFlag(true);
    } else {
      setfaceShowFlag(false);
    }
  }
  // ==========================
  // =========質問ここまで=========
  // ==========================

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ◠‿◠ )</p>}
    </>
  );
};

export default App;
