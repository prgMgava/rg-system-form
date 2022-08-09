import {
    Routes as Switch,
    Route,
  } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard"

export const Routes = () => {
    return (
        <Switch>
            <Route  path="/" element={<SignUp/>}/>
            <Route  path="/dashboard" element={<Dashboard/>}/>
        </Switch>
    )
}

export default Routes


