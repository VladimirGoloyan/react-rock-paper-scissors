import React from "react";

import Game from "./containers/game/Game";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Game />
      </Layout>
    </div>
  );
};

export default App;
