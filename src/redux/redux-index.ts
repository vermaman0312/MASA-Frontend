import { configureStore } from "@reduxjs/toolkit";
import reducerIndex from "./reducers/reducer-index";

//==============================|| REDUX TOOLKIT - MAIN STORE ||==============================//

const store = configureStore({
  reducer: reducerIndex,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
