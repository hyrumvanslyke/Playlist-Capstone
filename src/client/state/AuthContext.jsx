import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
const intialState = {
  token: null,
  username: null,
  id: null,
};

const AuthContext = createContext();

const AuthContextProvider = (props) => {


  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGOUT" : return intialState
      case "LOGIN":
        localStorage.setItem('token', action.payload.token)
        return {
          ...state,
          token: action.payload.token,
          username: action.payload.username,
          id: action.payload.id,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);
useEffect(()=>{
  //check if a token is in the browser is so send to server for validation
  //if valid we need to get user info saved to state
  // if not valid remove it from browser
  let savedToken = localStorage.getItem('token')
  if(savedToken){
    axios.get(`/api/validate/${savedToken}`)
    .then((res)=>{
      let info = jwtDecode(savedToken)
      console.log("INFO", info)
      info.token=savedToken
      dispatch({type: "LOGIN", payload: info})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}, [])
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export default AuthContext;
