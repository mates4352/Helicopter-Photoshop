import s from "./Slide.module.scss"

export const Slide = (props) => {
	return (
		<>
			<div className={s.wrapper} style={props.Stylewrapper}>
				{props.number && <span className={s.number} style={props.styleNumber}>{props.number}</span>}
				<div className={s.block}>
					{props.text && <p className={s.text}>{props.text}</p>}
					{props.textTwo && <span className={s.textTwo} style={props.StyletextTwo}>{props.textTwo}</span>}
				</div>
			</div>
		</>
	);

}

