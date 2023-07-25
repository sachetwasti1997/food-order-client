import React from 'react';
import {Footer, Header} from "./Components";
import {Home} from "./Page";

function App() {

  return (
    <div className={"min-h-screen bg-cyan-50"}>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
