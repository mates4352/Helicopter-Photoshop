import { Button } from "../button/Button"
import s from "./Bye.module.scss"

export const Bye = (props) => {
	return (
		<>
			<div className={s.wrapper}>
				<ul className={s.list}>
					<li className={s.item}>
						<span className={s.text}>{props.textSpanOne}</span>
					</li>

					<li className={s.item}>
						<span className={`${s.text} + ${s.strong}`}>{props.textSpanTwo}</span>
					</li>

					<li className={s.item}>
						<span className={s.text}>{props.textSpanFree}</span>
					</li>
				</ul>
				<Button/>
			</div>
		</>
	);
}
