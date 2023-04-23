import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
// utils
// import axios from "axios";
import { isValidToken, setSession } from "../utils/jwt";
import Alert from "src/theme/overrides/Alert";
import { host } from "src/static";
// import axios from "axios";
import axios from "src/utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    localStorage.setItem("isloggedIn", true);
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const jwttoken = window.localStorage.getItem("jwttoken");

        if (jwttoken && isValidToken(jwttoken)) {
          setSession(jwttoken);

          const response = await axios.get("/api/account/my-account");
          const { user } = response.data;

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  // const login = async (username, passCode, setError) => {
  //   const options = {
  //     method: "POST",
  //     url: `${host}login`,
  //     headers: { "Content-Type": "application/json" },
  //     data: { username: username, password: passCode },
  //   };
  //   const response = await axios.request(options);
  //   const { jwttoken, email, password, rollId, id, name } = response.data;
  //   const user = {
  //     email: email,
  //     rollId: rollId,
  //     id: id,
  //     name: name,
  //   };
  //   if (response.data === "User Not found") {
  //     alert(response.data);
  //   } else {
  //     localStorage.setItem("LoginState", true);
  //     localStorage.setItem("User", JSON.stringify(user));
  //     window.localStorage.setItem("jwttoken", jwttoken);
  //     setSession(jwttoken);
  //     dispatch({
  //       type: "LOGIN",
  //       payload: {
  //         user,
  //       },
  //     });
  //   }
  // };

  const login = async (email, password) => {
    const response = await axios.post("/api/account/login", {
      email,
      password,
    });
    localStorage.setItem("LoginState", true);
    const { jwttoken, user } = response.data;
    setSession(jwttoken);
    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/account/register", {
      email,
      password,
      firstName,
      lastName,
    });
    const { jwttoken, user } = response.data;

    window.localStorage.setItem("jwttoken", jwttoken);
    
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    window.localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };

  const resetPassword = () => {};

  const updateProfile = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
