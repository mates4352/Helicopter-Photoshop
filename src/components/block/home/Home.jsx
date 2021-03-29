import icon from "./../../../assets/images/home/icon.svg"
import s from"./Home.module.scss"

export const Home = ()=> {
	return (
		<section className={s.home}>
			<div className={s.container}>
				<div className={s.wrapper}>
					<p className={s.text}>Эксклюзивная <span> фотосессия </span> <br/> при полете на вертолете</p>
					<div className={s.blockPrice}>
						<div className={s.Price}>
							<span>Стоимость:</span>
							<span>1500₽</span>
						</div>
						<img className={s.icon} src={icon} alt="discount"/>
					</div>
					<button className={s.button}>Забронировать место</button>
				</div>
			</div>
		</section>
	);
}

