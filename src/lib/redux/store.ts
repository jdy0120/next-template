import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import loginReducer from "./features/login/loginSlice";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["login"],
  timeout: 500,
};

const sessionReducers = combineReducers({
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, sessionReducers);

export const store = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
