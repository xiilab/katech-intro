import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/main";
import reportWebVitals from "./reportWebVitals";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";
import { Global, css } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const globalStyle = css`
  html {
    ${tw`antialiased w-full h-full`}
    body {
      ${tw`w-full h-full`}
      #root {
        ${tw`w-full h-full`}
      }
    }
  }
`;

root.render(
  <React.StrictMode>
    <BaseStyles />
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
