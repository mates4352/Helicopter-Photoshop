import s from "./Map.module.scss"
import map from "./../../../assets/images/map/map.jpg"
import { SliderBlock } from "../../common/sliderBlock/SliderBlock"
import { data } from "./../../common/sliderBlock/slide/data"
import img1 from "./../../../assets/images/person/img.png"
import { Avatar } from "../avatar/Avatar"

export const Map = () => {
	return (
		<section className={s.map}>
			<img className={s.img} src={map} alt="map" />
			<div className={s.container}>
					<SliderBlock
						slide0={data[0]}
						slide1={data[1]}
						slide2={data[2]}
					/>

					<div className={s.wrapper}>
						<img className={s.img1} src={img1} alt="" />
						<Avatar
							name="Мария Иванова"
							nameWork="Фотограф"
							textLink="Показать больше информации о фотографе"
						/>
					</div>
			</div>
		</section>
	);
}

