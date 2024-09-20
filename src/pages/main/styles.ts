import tw, { styled } from "twin.macro";
import icon from "./button.svg";

import leht from "./left-bg.png";
import right from "./right-bg.png";
import lehtFull from "./left-bg-full.png";
import rightFull from "./right-bg-full.png";

import { keyframes } from "@emotion/react";

// 이미지에 url 삽입
type IMAGE = { img?: string; imgFull?: string };

const boxWidth = keyframes`
  0% {
    /* width: 0%; */
    width: 1280px;
  }
  100% {
    ${tw`w-full`}
  }
`;
const boxHeight = keyframes`
  0% {
    /* width: 0%; */
    height: 0px;
  }
  100% {
    height: 95px;
  }
`;

export const Body = styled("div")`
  ${tw`flex flex-row w-full h-full overflow-hidden`}
  position: relative;
  div.infomation {
    display: flex;
    flex-direction: row;
    padding: 20px 21px 20px 21px;
    gap: 39px;
    width: 300px;
    height: 95px;
    overflow-y: hidden;
    &.nomal {
      display: none;
    }
    &.action {
      animation: ${boxHeight} 0.5s;
    }
    div.item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        font-family: NotoSans;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.67;
        letter-spacing: normal;
      }
      p {
        font-family: NotoSans;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
      }
    }
  }
  h1.title {
    font-family: NotoSans;
    font-size: 44px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 6px;
  }
  h3.description {
    font-family: NotoSans;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    margin-bottom: 2px;
  }
  p {
    font-family: NotoSans;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.12px;
    text-align: center;
  }
  button {
    width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    object-fit: contain;
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    border: solid 1px #fcfcfc;
    background-color: rgba(0, 4, 23, 0.6);
    font-family: NotoSans;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
    position: relative;
    ::after {
      content: url(${icon});
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
`;

export const Left = styled("div")<IMAGE>`
  ${tw`flex h-full flex-col items-center text-marine`}
  background-image: url(${leht});
  /* 액션 이벤트 동작시 처리 */
  &.nomal {
    ${tw`w-1/2`}
  }
  &.action {
    ${tw`w-full`}
    animation: ${boxWidth} 0.5s;
    background-image: url(${lehtFull});
  }
  background-repeat: no-repeat;
  background-position: left 100% center;
  background-size: cover;
  padding-top: 300px;
  button {
    margin-top: 40px;
  }
  div.infomation {
    margin-top: 40px;
    border-top: 1px solid rgba(0, 30, 96, 0.3);
    border-bottom: 1px solid rgba(0, 30, 96, 0.3);
  }
`;
export const Right = styled("div")<IMAGE>`
  ${tw`flex w-1/2 h-full flex-col items-center text-white`}
  background-image: url(${right});
  &.nomal {
    ${tw`w-1/2`}
  }
  /* 액션 이벤트 동작시 처리 */
  &.action {
    ${tw`w-full`}
    animation: ${boxWidth} 0.5s;
    background-image: url(${rightFull});
  }
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 300px;
  button {
    margin-top: 31px;
  }
  div.infomation {
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  p {
    opacity: 0.8;
    color: #d9daeb;
  }
`;
