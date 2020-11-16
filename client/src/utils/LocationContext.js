import React, { createContext, useReducer } from "react";

const LocationContext = createContext();
const { Provider } = LocationContext;

function reducer(state, action) {
    switch (action.type) {
        case "NEW_LOCATION":
            console.log("action.payload " +action.payload)
            return action.payload;
        default:
            return state;
    }
}

function LocationProvider({ value = {}, ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
    localStorage.setItem("location", state)

    return <Provider value={[state, dispatch]} {...props} />;
}

export { LocationProvider, LocationContext };
