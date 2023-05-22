import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    userReducer: userSlice,
  })
);

const store = configureStore({
  // reducer: {
  //   userReducer: userSlice,
  // },
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);
