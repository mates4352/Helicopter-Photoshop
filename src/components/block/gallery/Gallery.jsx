import s from "./Gallery.module.scss"
import img from './../../../assets/images/gallery/bg.jpg'
import { data } from "./../../common/label/data"
import { BlockLabels } from "../../common/blockLabels/BlockLabels"

export const Gallery = () => {
	return (
		<section className={s.Gallery}>
			<div className={s.container}>
				<div className={s.grid}>
					<h2 className={s.title}>Фотосессия в вертолете</h2>
					<div className={s.description}>
						<img src={img} alt='Gallery' className={s.img} />
						<p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты</p>
					</div>
					<BlockLabels
						label0={data[0]}
						label1={data[1]}
						label2={data[2]}
						label3={data[3]}
						label4={data[4]}
						label5={data[5]}
					/>
				</div>
			</div>
		</section>
	);
}

