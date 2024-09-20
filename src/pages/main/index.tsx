import React from "react";
import * as Style from "./styles";
import Header from "compoents/header";

function App() {
  return (
    <>
      <Header data-cy="Header" />
      <Style.Body data-cy="Body">
        <Style.Left data-cy="Left">
          <h1 className="title">Cloud Server</h1>
          <h3 className="description">
            사용자 목적에 맞는 사양의 가상 서버 생성
          </h3>
          <button>Server 바로가기</button>
        </Style.Left>
        <Style.Right data-cy="Right">
          <h1 className="title">Cloud PC</h1>
          <h3 className="description">
            국가 보안 요구사항을 준수하는 높은 보안성
          </h3>
          <p>(국가정보원 보안기능확인서 획득, 2022.06월)</p>
          <button>PC 바로가기</button>
        </Style.Right>
      </Style.Body>
    </>
  );
}

export default App;
