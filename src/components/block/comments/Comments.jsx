import s from "./Comments.module.scss"
import { data } from "./../../common/avatar/data"
import img1 from "./../../../assets/images/reviews/img1.png"
import img2 from "./../../../assets/images/reviews/img2.png"
import img3 from "./../../../assets/images/reviews/img3.png"
import { Comment } from "../../common/comment/Comment"

export const Comments = () => {
	return (
		<section className={s.Comments}>
			<div className={s.container}>
				<h2 className={s.title}>Отзывы</h2>
				<Comment
					img={img1}
					name={data[0].name}
					nameWork={data[0].nameWork}
					reting={data[0].reting}
					textSpan={data[0].textSpan}
					text={data[0].text}
					date={data[0].date}
				/>
				<Comment
					img={img2}
					name={data[1].name}
					nameWork={data[1].nameWork}
					reting={data[1].reting}
					textSpan={data[1].textSpan}
					text={data[1].text}
					date={data[1].date}
				/>
				<div className={s.wrapper}>
					<Comment
						img={img3}
						name={data[2].name}
						nameWork={data[2].nameWork}
						reting={data[2].reting}
						textSpan={data[2].textSpan}
						text={data[2].text}
						date={data[2].date}
					/>
				</div>
				<button className={s.button}>Показать Все (134)</button>
			</div>
		</section>
	);
}

