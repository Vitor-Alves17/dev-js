import './style.css';
import logo from '../Header/logo/logo.webp'

export default function Header() {
    return (
        <header>
            <div className="logo-wrapper">
                <img src={logo} alt=""/>
            <nav>
                <div className="ancor-wrapper">
                    <a href="">ancor one</a>
                    <a href="">ancor two</a>
                </div>
            </nav>
            </div>
                <div className="button-wrapper">
                    <button>sign up</button>
                    <button>login in</button>
                </div>
        </header>
    )
}