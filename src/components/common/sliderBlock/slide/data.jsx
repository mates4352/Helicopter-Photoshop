function Data(value1,value2,value3) {
	this.number = value1
	this.text= value2
	this.textTwo= value3
}

export const data = [
	new Data(1,"Где встречаемся?","Москва"),
	new Data(2,"Время съемки","3 часа"),
	new Data(3,"Мест осталось:","2 места"),
]