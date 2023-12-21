import {createBrowserRouter} from "react-router-dom";
import Body from "./Body";
// import Hotels from "./Comps/Hotels";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Action from "../Action";
import Visa from "./Comps/Visa";
import GroupBooking from "./Comps/GroupBooking";
import Offers from "./Comps/Offer";
import Care from "./Comps/Customer";
import About from "../AboutUs";
import HotelPage from "./HotelPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
                {path: "", element: <Body />},
                {path: "Hotels", elemetn:<HotelPage/>},
                {path: "Login", element: <LoginPage/>},
                {path: "SignUp",element:<SignUpPage/>},
                {path: "Result",element: <Action/>},
                {path:"book",element:<HotelPage/>},
                {path:"Visa",element:<Visa></Visa>},
                {path:"group",element:<GroupBooking></GroupBooking>},
                {path:"offers",element:<Offers></Offers>},
                {path:"care",element:<Care></Care>},
                {path:"aboutUs",element:<About></About>}
        ]
      },
])

export default router;