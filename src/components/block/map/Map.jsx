import s from "./Map.module.scss"
import map from "./../../../assets/images/map/map.jpg"
import { SliderBlock } from "../../common/sliderBlock/SliderBlock"
import {data} from "./../../common/sliderBlock/slide/data"
import { BlockPerson } from "../../common/blokPerson/BlockPerson"

export const Map = () => {
	const style = {
		blokPerson: {
			flexDirection: 'row',
			alignItems: ' flex-start',
		},
		styleLike: {
			display:'none'
		},
		styleImg: {
			width: "67px",
			height: "67px",
			margin:"0 10px 20px auto",
		},
		styleName: {
			textAlign: "left",
			display: 'block',
		},
		styleSpan: {
			textAlign:"left",
			display: 'block',
		},
		styleLink: {
			textAlign:"left",
			display: 'block',
			maxWidth: "150px",
		},
	}
	return (
		<section className={s.map}>
			<img className={s.img} src={map} alt="map"/>
			<div className={s.container}>
				<SliderBlock
					slide0={data[0]}
					slide1={data[1]}
					slide2={data[2]}
				/>
				<div className={s.wrapper}>
					<BlockPerson
						blokPerson={style.blokPerson}
						styleImg={style.styleImg}
						styleLike={style.styleLike}
						styleName={style.styleName}
						styleSpan={style.styleSpan}
						styleLink={style.styleLink}
					/>
				</div>
			</div>
		</section>
	);
}

