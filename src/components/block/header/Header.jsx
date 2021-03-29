import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import logo from "./../../../assets/images/header/logo.svg"
import icon from "./../../../assets/images/header/icon.svg"

export const Header = ()=> {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.wrapper}>

					<div className={s.inner}>
						<img className={s.logo} src={logo} alt="logo" />
						
						<div className={s.phone}>
							<span>Телефон:</span>
							<NavLink className={s.cite} to={"/"}>Москва</NavLink>
							<NavLink className={s.phoneLink} to={"/"}>8(800)-123-12-12</NavLink>
						</div>
					</div>
					
					<img src={icon} alt="icon"/>

				</div>
			</div>
		</header>
	);
}

