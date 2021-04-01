import { NavLink } from "react-router-dom"
import s from "./Footer.module.scss"
import logo from "./../../../assets/images/header/logo.svg"
import icon1 from "./../../../assets/images/footer/icon1.svg"
import icon2 from "./../../../assets/images/footer/icon2.svg"
import icon3 from "./../../../assets/images/footer/icon3.svg"
import icon4 from "./../../../assets/images/footer/icon4.svg"
import icon5 from "./../../../assets/images/footer/icon5.svg"






export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<div className={s.footerTop}>

					<img src={logo} alt="logo" />
					<ul className={s.list}>

						<li className={s.item}>
							<NavLink className={s.link} to={'/'}>
								<img className={s.icon} src={icon1} alt="vk" />
							</NavLink>
						</li>

						<li className={s.item}>
							<NavLink className={s.link} to={'/'}>
								<img className={s.icon} src={icon2} alt="vk" />
							</NavLink>
						</li>

						<li className={s.item}>
							<NavLink className={s.link} to={'/'}>
								<img className={s.icon} src={icon3} alt="vk" />
							</NavLink>
						</li>
					</ul>

				</div>
				<div className={s.footerBottom}>
					<div className={s.iconsBottom}>
						<img src={icon4} alt="Beb" />
						<img src={icon5} alt="visa" />
					</div>
					<div className={s.information}>
						<span className={s.text}>Тех. поддержка: 8(800)700-00-00</span>
						<span className={s.text}>© 2018 HELYFLY. All Rights Reserved.</span>
					</div>
					<span className={s.language}>RU</span>
				</div>
			</div>
		</footer >
	);
}

