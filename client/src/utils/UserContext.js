import React, { createContext, useReducer } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

function reducer(state, action) {
    switch (action.type) {
        case "GET_USER":
            return action.payload;
        default:
            return state;
    }
}

function UserProvider({ value = {}, ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
    console.log("state.id " +state.id)
    localStorage.setItem("user", state.id)

    return <Provider value={[state.id, dispatch]} {...props} />;
}

export { UserProvider, UserContext };
