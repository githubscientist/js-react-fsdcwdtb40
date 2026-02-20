import { useContext } from "react";
import { UserContext } from "../App";

const Child3 = () => {

    const user = useContext(UserContext);

    return (
        <>
            <p>Welcome {user?.email ?? '' != '' ? user.email : 'Guest'}!</p>
        </>
    )
}

export default Child3;