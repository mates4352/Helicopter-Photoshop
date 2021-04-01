import s from "./Map.module.scss"
import map from "./../../../assets/images/map/map.jpg"
import { SliderBlock } from "../../common/sliderBlock/SliderBlock"
import { data } from "./../../common/sliderBlock/slide/data"
import { Avatar } from "../../common/avatar/Avatar"
import img1 from "./../../../assets/images/person/img.png"
import { Slide } from "../../common/sliderBlock/slide/Slide"
export const Map = () => {
	const slide = {
		wrapper: {
			display: "flex",
			alignItems: "center",
			marginBottom: '34px',
		},
		styleNumber: {
			marginRight: "18px",
			margin: "0px 20px 0px 0px",
			alignText: "left",
		},
		styleLink: {
			maxWidth: "none",
		},
		StyletextTwo: {
			textAlign: "left",
		}
	}
	return (
		<section className={s.map}>
			<div className={s.mapImgWrapper}>
				<img className={s.mapImg} src={map} alt="map" />
				<div className={s.mapWrapper}>
					<Slide
						StyletextTwo={slide.StyletextTwo}
						Stylewrapper={slide.wrapper}
						styleNumber={slide.styleNumber}
						number={data[0].number}
						text={data[0].text}
						textTwo={data[0].textTwo}
					/>
					<Slide
						StyletextTwo={slide.StyletextTwo}
						Stylewrapper={slide.wrapper}
						styleNumber={slide.styleNumber}
						number={data[1].number}
						text={data[1].text}
						textTwo={data[1].textTwo}
					/>
					<Slide
						StyletextTwo={slide.StyletextTwo}
						Stylewrapper={slide.wrapper}
						styleNumber={slide.styleNumber}
						number={data[2].number}
						text={data[2].text}
						textTwo={data[2].textTwo}
					/>
					<div className={`${s.innerImg} + ${s.innerImgStyle}`}>
						<img className={s.img} src={img1} alt="" />
						<Avatar
							name="Мария Иванова"
							nameWork="Фотограф"
							textLink="Показать больше информации"
							styleLink={slide.styleLink}
						/>
					</div>
				</div>

			</div>
			<div className={s.container}>
				<div className={s.wrapper}>
					<SliderBlock
						slide0={data[0]}
						slide1={data[1]}
						slide2={data[2]}
					/>
					<div className={s.innerImg}>
						<img className={s.img} src={img1} alt="" />
						<Avatar
							name="Мария Иванова"
							nameWork="Фотограф"
							textLink="Показать больше информации о фотографе"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

