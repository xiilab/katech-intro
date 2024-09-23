import React from "react";
import * as Style from "./styles";
import Header from "compoents/header";

import left from "./left-bg.png";
import right from "./right-bg.png";
import leftFull from "./left-bg-full.png";
import rightFull from "./right-bg-full.png";
import leftRaw from "./left-bg-raw.jpg";
import rightRaw from "./right-bg-raw.jpg";
import leftFullRaw from "./left-bg-raw-full.jpg";
import rightFullRaw from "./right-bg-raw-full.jpg";

type ACTION_TYPE = "action" | "nomal";

function App() {
  const [onLeft, setOnLeft] = React.useState<ACTION_TYPE>("nomal");
  const [onRight, setOnRight] = React.useState<ACTION_TYPE>("nomal");

  const useProgressiveImage = (src: string) => {
    const [sourceLoaded, setSourceLoaded] = React.useState<string>();

    React.useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
  };

  /**
   * 마우스 커서가 위치 할때 이벤트 처리
   * @param e
   */
  const sizeUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.attributes.getNamedItem("data-cy")?.value;
    if (name === "left") {
      setOnLeft("action");
    } else {
      setOnRight("action");
    }
    // console.log(e);
  };
  /**
   * 마우스 커서가 나갈때 이벤트 처리
   * @param e
   */
  const sizeDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.attributes.getNamedItem("data-cy")?.value;
    if (name === "left") {
      setOnLeft("nomal");
    } else {
      setOnRight("nomal");
    }
    // console.log(e);
  };
  return (
    <>
      <Header data-cy="Header" />
      <Style.Body data-cy="Body">
        <Style.Left
          data-cy="left"
          className={onLeft}
          onMouseUp={sizeUp}
          onMouseLeave={sizeDown}
          img={useProgressiveImage(left) || leftRaw}
          imgFull={useProgressiveImage(leftFull) || leftFullRaw}
        >
          <h1 className="title">Cloud Server</h1>
          <h3 className="description">
            사용자 목적에 맞는 사양의 가상 서버 생성
          </h3>
          <div className={`infomation ${onLeft}`}>
            <div className="item">
              <h3>제공 OS</h3>
              <p>Linux 계열 서버 시스템</p>
            </div>
            <div className="item">
              <h3>제공 목적</h3>
              <p>SW 개발 및 서비스 제공</p>
            </div>
            <div className="item">
              <h3>사용자 환경</h3>
              <p>CLI 기반 키보드 입력</p>
            </div>
          </div>
          <button>Server 바로가기</button>
        </Style.Left>
        <Style.Right
          data-cy="right"
          className={onRight}
          onMouseUp={sizeUp}
          onMouseLeave={sizeDown}
          img={useProgressiveImage(right) || rightRaw}
          imgFull={useProgressiveImage(rightFull) || rightFullRaw}
        >
          <h1 className="title">Cloud PC</h1>
          <h3 className="description">
            국가 보안 요구사항을 준수하는 높은 보안성
          </h3>
          <p>(국가정보원 보안기능확인서 획득, 2022.06월)</p>
          <div className={`infomation ${onRight}`}>
            <div className="item">
              <h3>제공 OS</h3>
              <p>Linux 계열 서버 시스템</p>
            </div>
            <div className="item">
              <h3>제공 목적</h3>
              <p>시뮬레이션 및 데이터 분석</p>
            </div>
            <div className="item">
              <h3>사용자 환경</h3>
              <p>GUI기반 마우스, 키보드 입력</p>
            </div>
          </div>
          <button>PC 바로가기</button>
        </Style.Right>
      </Style.Body>
    </>
  );
}

export default App;
