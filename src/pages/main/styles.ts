import tw, { styled } from "twin.macro";
import leht from "./left-bg.png";
import right from "./right-bg.png";
import icon from "./button.svg";

export const Body = styled("div")`
  ${tw`flex flex-row w-full h-full overflow-hidden`}
  position: relative;
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
    opacity: 0.8;
    font-family: NotoSans;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.12px;
    text-align: center;
    color: #d9daeb;
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

export const Left = styled("div")`
  ${tw`flex w-full h-full flex-col items-center text-marine`}
  background-image: url(${leht});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 300px;
  button {
    margin-top: 40px;
  }
`;
export const Right = styled("div")`
  ${tw`flex w-full h-full flex-col items-center text-white`}
  background-image: url(${right});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 300px;
  button {
    margin-top: 31px;
  }
`;
