import s from "./DescriptionPerson.module.scss"

export const DescriptionPerson = (props) => {
	return (
		<div className={s.description}>
			<h3 className={s.title}>{props.title}</h3>
			<p className={s.text}>
				{props.text}
			</p>
			<button className={s.read}>Читать еще</button>
		</div>
	);
}
