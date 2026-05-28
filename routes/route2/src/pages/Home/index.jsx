import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to='/contact'>Contact</Link>
        </>
    )
}