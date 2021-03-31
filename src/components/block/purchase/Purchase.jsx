import { Bye } from "../../common/bye/Bye"
import s from "./Purchase.module.scss"
import {data} from "./../../common/label/data"
import { Label } from "../../common/label/Label"

export const Purchase = () => {
	const style = {
		borderBottom: "none",
		borderTop: "none",
		marginTop: "0",
   	padding:"32px 0 29px 20px",
	}
	return (
		<section className={s.Purchase}>
			<div className={s.container}>
				<h2 className={s.title}>Доступная съемка <br/> в ближайщее время</h2>
				<div className={s.wrapper}>
					<time className={s.time} datetime="09-14">Пятница, 14 сентября</time>
					<Bye
						textSpanOne='15:00 - 18:00'
						textSpanTwo= '850$'
						textSpanFree= 'Осталось — 1 место'
					/>
					<Bye
						textSpanOne='19:00 - 22:00'
						textSpanTwo= '850$'
						textSpanFree= 'Осталось — 1 место'
					/>
					<Label
						style={style}
						styleSpan={{ fontSize: '18px', }}
						styleRating = {{marginLeft: '10px',}}
						src={data[4].src}
						alt={data[4].alt}
						text={data[4].text}
						rating={data[4].rating}
					/>
				</div>
			</div>
		</section>
	);
}
