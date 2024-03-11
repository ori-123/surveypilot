import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    setCurrentUser: () => {},
    setUserToken: () => {}
});

const tmpSurveys = [];

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, setUserToken] = useState(null);
    const [surveys, setSurveys] = useState([...tmpSurveys]);

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
