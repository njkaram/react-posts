import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.scss";
import PostContainer from "./components/PostContainer";
import PostFormContainer from "./components/PostFormContainer";
import PostSearchContainer from "./components/PostSearchContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostSearchContainer />
        <PostFormContainer />
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
