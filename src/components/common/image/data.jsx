import img1 from "./../../../assets/images/photos/img1.png";
import img2 from "./../../../assets/images/photos/img2.png";
import img3 from "./../../../assets/images/photos/img3.png";
import img4 from "./../../../assets/images/photos/img4.png";


function Data(src, alt) {
	this.src = src
	this.alt = alt
}

export const data = [
	new Data(img1,"galerai"),
	new Data(img3,"galerai"),
	new Data(img2,"galerai"),
	new Data(img4,"galerai"),
	new Data(img2, "galerai"),
	new Data(img4,"galerai"),
	new Data(img3,"galerai"),
	new Data(img2,"galerai"),
]