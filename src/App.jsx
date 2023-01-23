import React, { createContext } from "react";
import Routes from "./routes/Routes";
import "./styles.less";

export const UserContext = createContext("test context");

const App = () => {
  return (
    <UserContext.Provider value={"tetetete"}>
      <>
        <article
          className="title-range"
          title="main-title"
          style={{ padding: "15px" }}
        >
          Range Slider
        </article>
        <Routes />
      </>
    </UserContext.Provider>
  );
};

export default App;
