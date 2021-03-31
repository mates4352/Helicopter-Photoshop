import s from "./Person.module.scss"
import img from "./../../../assets/images/person/img.png"
import { NavLink } from "react-router-dom"
import { DescriptionPerson } from "../../common/descriptionPerson/DescriptionPerson"

export const Person = () => {
	return (
		<section className={s.Person}>
			<div className={s.container}>
				<div className={s.content}>
					<img className={s.img} src={img} alt="person" />
					<cite className={s.name}>Марина Иванова</cite>
					<span className={s.nameWork}>Фотограф</span>
					<NavLink className={s.link} to={"/"}>Показать больше информации о фотографе</NavLink>
				</div>
				<DescriptionPerson
					title='Об организаторе:'
					text="
						Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются
						в маркетинге, операциях 
						и услугах обслуживания клиентов, специализирующихся 
						на совместном использовании 
						и частных турах.
						
						Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. 
						Мы никогда не зависим 
						от субпоставщиков 
						и не свяжемся…
					"/>
				<DescriptionPerson
					title='Что я предоставлю:'
					text="
						Встречу вас на машине после длительного перелёта.
						Качественный подбор места 
						и локации для вашей съемки.
						При необходимости всегда возможно прерваться 
						на обед/ужин.
						Более 50 фотографий на выходе 
						с обработкой и замечательные впечатления о Дубае!
					"/>
			</div>
		</section>
	);
}