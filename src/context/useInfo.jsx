import { createContext, useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import Loading from "../components/Loading";

const infoContext = createContext()

export const useInfo = () => {
    return useContext(infoContext);
}

export function InfoProvider({ children }) {

    const [loaded, setLoaded] = useState(true);
    const [userData, setUserData] = useState(null);

    const infoValues = {
        user: userData,
        loaded,
        setLoaded,
        setUser: (data) => {
            console.log("data",data)
            if (data["user"] == null || data["token"] == null) return { "success": false }

            setUserData({ ...data.user, "token": data.token })
            return { "success": true }
        },
        logout: () => {
            setUserData(null);
        },
    }

    useEffect(() => {
        const savedData = localStorage.getItem("user")
        if (savedData != null && userData == null ) infoValues.setUser(JSON.parse(savedData))
    })

    if (userData == null) return <infoContext.Provider value={{ ...infoValues }}>
        <Login info={infoValues} />
        {/* {!loaded && <Loading />} */}
    </infoContext.Provider>

    return (
        <infoContext.Provider value={{ ...infoValues }}>
            {children}
            {/* {!loaded && <Loading />} */}
        </infoContext.Provider>
    )
}