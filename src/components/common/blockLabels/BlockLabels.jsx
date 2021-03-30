import { Label } from "../label/Label";
import s from "./BlockLabels.module.scss"

export const BlockLabels = (props) => {
	return (
		<div className={s.grid}>
			{props.label0 &&
				<Label
					className={s.label}
					src={props.label0.src}
					alt={props.label0.alt}
					text={props.label0.text} />
			}
			{props.label1 &&
				<Label
					className={s.label}
					src={props.label1.src}
					alt={props.label1.alt}
					text={props.label1.text} />
			}
			{props.label2 &&
				<Label
					className={s.label}
					src={props.label2.src}
					alt={props.label2.alt}
					text={props.label2.text} />
			}
			{props.label3 &&
				<Label
					className={s.label}
					src={props.label3.src}
					alt={props.label3.alt}
					text={props.label3.text} />
			}
			{props.label4 &&
				<Label
					className={s.label}
					src={props.label4.src}
					alt={props.label4.alt}
					text={props.label4.text} />
			}
			{props.label5 &&
				<Label
					className={s.label}
					src={props.label5.src}
					alt={props.label5.alt}
					text={props.label5.text} />
			}
		</div>
	);
}

