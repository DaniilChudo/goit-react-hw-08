import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Імпорт BrowserRouter
import App from "./App";
import store from "./redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      {/* Обгортання App у BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);
