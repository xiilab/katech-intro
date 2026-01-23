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
          <h1 className="title">SW as a Service</h1>
          <h3 className="description">
            사용자 목적에 맞는 사양의 가상 서버 생성
          </h3>
          <div className={`infomation ${onLeft}`}>
            <div className="item">
              <h3>사용자</h3>
              <p>기관 사용자</p>
              <p>무료 컴퓨팅 자원</p>
              <p>제공</p>
            </div>
            <div className="item">
              <h3>판매자</h3>
              <p>기관 사용자</p>
              <p>개발 결과물</p>
              <p>판매/실증</p>
            </div>
            <div className="item">
              <h3>상품 예</h3>
              <p>Database</p>
              <p>Kafka</p>
              <p>Grafana 등</p>
            </div>
          </div>
          <button onClick={() => window.location.href = "https://app.bigdata-car.kr"}>APP마켓 바로가기</button>
        </Style.Left>
        <Style.Right
          data-cy="right"
          className={onRight}
          onMouseUp={sizeUp}
          onMouseLeave={sizeDown}
          img={useProgressiveImage(right) || rightRaw}
          imgFull={useProgressiveImage(rightFull) || rightFullRaw}
        >
          <h1 className="title">API as a Service</h1>
          <h3 className="description">
            AI 모델 및 알고리즘을 API 형태 제공 서비스
          </h3>
          <div className={`infomation ${onRight}`}>
            <div className="item">
              <h3>사용자</h3>
              <p>전체 사용자</p>
              <p>무료/유료API 제공</p>
            </div>
            <div className="item">
              <h3>판매자</h3>
              <p>기관 가입자</p>
              <p>개발 결과물</p>
              <p>판매/실증</p>
            </div>
            <div className="item">
              <h3>상품 예</h3>
              <p>OpenAI</p>
              <p>차량 탐지</p>
              <p>정보 조회 등</p>
            </div>
          </div>
          <button onClick={() => window.location.href = "https://api.bigdata-car.kr"}>API마켓 바로가기</button>
        </Style.Right>
      </Style.Body>
    </>
  );
}

export default App;
