import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // або sessionStorage
import { combineReducers } from "redux"; // Використовуйте redux, а не redux-toolkit
import authReducer from "./auth/slice";
import contactsReducer from "./contacts/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Зберігайте лише auth в локальному сховищі
};

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
