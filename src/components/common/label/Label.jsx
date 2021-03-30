import s from "./Label.module.scss"


export const Label = (props) => {
	return (
		<div className={s.label}>
			<div className={s.inner}>
				{props.src && <img className={s.img} src={props.src} alt={props.alt} />}
			</div>
			{props.text && <span className={s.caption}>{props.text}</span>}
		</div>
	);
}
