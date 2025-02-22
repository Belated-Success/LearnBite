
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
);
