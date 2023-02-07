import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";
import MarketList from "./MarketList"
import ProduceList from "./ProduceList"

function App(){
  return (
    <React.Fragment>
      <Header />
      {/* <MarketList />
      <ProduceList /> */}
      <MarketControl />
    </React.Fragment>
  );
}

export default App;