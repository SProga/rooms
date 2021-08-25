import "./Navigation.scss";
import Logo from "../../images/logo.svg";

const Navigation = (props) => {
	return (
		<nav className="nav">
			<button type="button" className="nav__btn">
				<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
						fill="#FFF"
						fillRule="evenodd"
					/>
				</svg>
				<span className="sr-only">Toggle Menu</span>
			</button>
			<a href="/" className="nav__logo">
				<img src={Logo} alt="room Logo" />
			</a>
		</nav>
	);
};

export default Navigation;
