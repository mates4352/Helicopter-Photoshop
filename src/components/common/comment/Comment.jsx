import s from "./Comment.module.scss"
import { Avatar } from "../../common/avatar/Avatar"

export const Comment = (props) => {
	return (
		<div className={s.Comment}>
			<div className={s.column}>
				<div className={s.wrapper}>
					<img className={s.img} src={props.img} alt="avatar" />
					<Avatar
						name={props.name}
						nameWork={props.nameWork}
						textLink={props.textLink}
						reting={props.reting}
					/>
				</div>
				{props.textSpan && <span className={s.textSpan}>{props.textSpan}</span>}
			</div>
			{props.text && <p className={s.text}>{props.text}</p>}
			{props.date && <span className={s.date}>{props.date}</span>}
		</div>
	);
}