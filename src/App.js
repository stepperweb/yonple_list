import React from "react";
import Main from "./routes/Main";
import Detail from "./components/Detail";

import { HashRouter, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

// 스타일
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none
  }
  a{
    text-decoration: none
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Route path="/" exact={true} component={Main} />
        <Route path="/detail/:id" component={Detail} />
      </HashRouter>
    </>
  );
}

export default App;
