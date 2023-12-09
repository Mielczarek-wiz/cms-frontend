const store = configureStore();
import { Provider } from "react-redux";
import configureStore from "../../config/configureStore";

export default function ReduxStoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
