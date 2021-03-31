import s from "./Label.module.scss"


export const Label = (props) => {
	return (
		<div className={s.label} style={props.style}>
			<div className={s.inner}>
				{props.src && <img className={s.img} src={props.src} alt={props.alt} />}
			</div>
			<div className={s.wrapper}>
				{props.text && <span className={s.caption}>{props.text}</span>}
				{props.rating && <img className = {s.rating} src={props.rating} alt="rating"/>}
			</div>
		</div>
	);
}
