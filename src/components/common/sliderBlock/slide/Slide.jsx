import s from "./Slide.module.scss"

export const Slide = (props) => {
	return (
		<>
			{props.number && <span className={s.number}>{props.number}</span>}
			{props.text && <p className={s.text}>{props.text}</p>}
			{props.textTwo && <span className={s.textTwo}>{props.textTwo}</span>}
		</>
	);

}

