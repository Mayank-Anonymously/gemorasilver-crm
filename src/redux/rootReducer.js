import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import mailReducer from "./slices/mail";
import chatReducer from "./slices/chat";
import blogReducer from "./slices/blog";
import userReducer from "./slices/user";
import productReducer from "./slices/product";
import calendarReducer from "./slices/calendar";
import kanbanReducer from "./slices/kanban";
import dataReducer from "../redux/slices/Action";
import Topup from "../redux/slices/WalletBalance";
import Login from "../redux/slices/userSignIn";
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const productPersistConfig = {
  key: "product , TopUp",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy", "checkout"],
};

const rootReducer = combineReducers({
  mail: mailReducer,
  chat: chatReducer,
  blog: blogReducer,
  user: userReducer,
  calendar: calendarReducer,
  kanban: kanbanReducer,
  data: dataReducer,
  signIn: Login,
  TopUp: persistReducer(productPersistConfig, Topup),
  product: persistReducer(productPersistConfig, productReducer),
});

export { rootPersistConfig, rootReducer };
