import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, _setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, _setToke] = useState(localStorage.getItem("ACCESS_TOKEN"));
    // setuserto local storage
    const setUser = (user) => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
        _setUser(user);
    };
    const setToken = (token) => {
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
        _setToke(token);
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => {
    return useContext(StateContext);
};
