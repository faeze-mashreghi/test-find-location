import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["location"],
};

const dev = process.env.NODE_ENV === "development";

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
// eslint-disable-next-line
export default () => {
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
