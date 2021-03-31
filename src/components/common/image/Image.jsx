import s from "./Image.module.scss"

export const Image = (props) => {
	return (
		<img src={props.src} alt={props.alt}/>
	);
}
