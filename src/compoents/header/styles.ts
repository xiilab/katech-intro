import tw, { styled } from "twin.macro";

export const Layout = styled.div`
  ${tw`w-full absolute`}
  top: 40px;
  padding-left: 15%;
  padding-right: 15%;
  z-index: 1;
  img {
    width: 150px;
    height: 64px;
  }
`;
