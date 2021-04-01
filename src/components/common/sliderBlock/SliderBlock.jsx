import "./SliderBlock.scss"

import SwiperCore, { Navigation, Pagination,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Slide } from "./slide/Slide";

SwiperCore.use([Navigation, Pagination,Autoplay]);

export const SliderBlock = (props) => {
	return (
		<div className="blockSlider">
			<Swiper
				slidesPerView={1}
				navigation
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide>
					{props.slide0 &&
						<Slide
							number={props.slide0.number}
							text={props.slide0.text}
							textTwo={props.slide0.textTwo}
						/>
					}
				</SwiperSlide>

				<SwiperSlide>
					{props.slide1 &&
						<Slide
							number={props.slide1.number}
							text={props.slide1.text}
							textTwo={props.slide1.textTwo}
						/>
					}
				</SwiperSlide>

				<SwiperSlide>
					{props.slide2 &&
						<Slide
							number={props.slide2.number}
							text={props.slide2.text}
							textTwo={props.slide2.textTwo}
						/>
					}
				</SwiperSlide>

			</Swiper>
		</div>
	);
}

