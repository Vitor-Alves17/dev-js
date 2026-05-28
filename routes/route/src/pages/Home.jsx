import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <Link to="/about">About</Link>
            <Link to='/contact'>Contact</Link>
        </>
    )
}