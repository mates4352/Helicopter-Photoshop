import { NavLink } from "react-router-dom";
import s from "./BlockPerson.module.scss"
import img from "./../../../assets/images/person/img.png"

export const BlockPerson = (props) => {
	return (
		<div className={s.blokPerson} style={props.blokPerson}>
			<div className={s.image}>
				<img className={s.img} style={props.styleImg} src={img} alt="person" />
				<span className={s.like} style={props.styleLike}></span>
			</div>
			<div className={s.wrapper}>
				<cite className={s.name} style={props.styleName}>Марина Иванова</cite>
				<span className={s.nameWork} style={props.styleSpan}>Фотограф</span>
				<NavLink className={s.link} style={props.styleLink} to={"/"}>Показать больше информации о фотографе</NavLink>
			</div>
		</div>
	);
}
