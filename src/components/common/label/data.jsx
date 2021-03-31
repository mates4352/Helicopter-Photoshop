import icon2 from "./../../../assets/images/gallery/icon2.svg";
import icon1 from "./../../../assets/images/gallery/icon1.svg";
import icon4 from "./../../../assets/images/gallery/icon4.svg";
import icon5 from "./../../../assets/images/gallery/icon5.svg";
import icon3 from "./../../../assets/images/gallery/icon3.svg";
import icon6 from "./../../../assets/images/gallery/icon6.svg";


function Data(path,caption,descripton,star) {
	this.src = path
	this.alt = caption
	this.text = descripton
	this.rating = star
}

export const data = [
	new Data(icon2, 'съемки', '3 часа съемки'),
	new Data(icon1,'фотографии','Более 50 фотографий'),
	new Data(icon4,'Москва','Москва'),
	new Data(icon5,'вопросы','Готовы ответить на любые вопросы'),
	new Data(icon3,'150 отзывов','Более 150 отзывов с оценкой',icon6),
]