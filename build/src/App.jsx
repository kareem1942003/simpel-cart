import { Outlet } from "react-router-dom";
import Navebare from "./components/Navebare";
import { Provider } from "react-redux";
import { store } from "./rtk/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navebare />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
