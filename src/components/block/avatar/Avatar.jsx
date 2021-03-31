import { NavLink } from "react-router-dom";
import s from "./Avatar.module.scss"
export const Avatar = (props) => {
	return (
		<div className={s.wrapper}>
			<cite className={s.name} >{props.name}</cite>
			{props.nameWork && <span className={s.nameWork}>{props.nameWork}</span>}
			{props.textLink && <NavLink className={s.link} to={"/"}>{props.textLink}</NavLink>}
			{props.reting && <NavLink className={s.reting} to={"/"}>{props.reting}</NavLink>}
		</div>
	);
}
