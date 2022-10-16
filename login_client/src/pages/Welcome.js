import { useLocation } from "react-router-dom";


export default function Welcome(){

    const location = useLocation();
    return (<div className="welcome">
        {location.state.userData!=null
        ?
        <h1>Hi, {location.state.userData.userName}</h1>
        :
        <h1>{location.state.errMess}</h1>
        }
    </div>);
}