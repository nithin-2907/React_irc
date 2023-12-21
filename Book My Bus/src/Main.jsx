import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { LogContext } from "./Components/LogContext";
import router from "./Components/Routes";

export default function Main()
{
    let [user,setUser] = useState(null);
    return (
        <LogContext.Provider value={{user,setUser}}>
        <RouterProvider router={router}/>
        </LogContext.Provider>
    );
}