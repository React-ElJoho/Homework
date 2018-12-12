class Azul{
	constructor(){
	}
}
class Task {
	constructor(root){
		this.contenedorTasks = document.createElement("div");
		this.contenedorTasks.classList.add("tasks");
		this.name = document.createElement("h4");
		this.work = new Input("text","work","Hola");
		this.deadline =new Input("text","deadline", "Hola2");
		this.percent = new Input("text", "percent","Hola3");
		this.like =new Input("text","like","Hola4");
		this.boton = new Input("boton","button","Hola5","Hola5");
		this.contenedorTasks.appendChild(this.work.getElement());
		this.contenedorTasks.appendChild(this.percent.getElement());
		this.contenedorTasks.appendChild(this.like.getElement());
		this.contenedorTasks.appendChild(this.deadline.getElement());
		this.contenedorTasks.appendChild(this.boton.getElement());
		document.getElementById(root).appendChild(this.contenedorTasks);
		this.onClick= this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
		this.boton.getElement().addEventListener("click",this.onClick); // Aca estamos llamando al elemento HTML del Boton y ademas
		// estamos escuchando cuando suceda el evento click  de ese elemento para ejecutar el metodo onClick. 

	}
	time(){
		//return this.work.getElement().value - this.deadline.getElement().value
	}
	percentO(){ 
	}
	likeability(){
	}
	onClick(){
		//if( !(/^\d{9}$/.test(this.work.getAtributes('value'))))
		if(isNaN(parseInt(this.work.getAtributes('value'))))
			console.log('aaaa');
		else console.log(parseInt(this.work.getAtributes('value')))
	}
}
class Input {
	constructor(id,type,placeholder,value=""){
		this.element = document.createElement("input");
		this.element.placeholder =placeholder;
		this.element.type = type;
		this.element.id = id; 
		this.element.value = value; 
	}
	getElement(){
		return this.element;
	}
	getAtributes(value){
		//La función entrega el el valor del atributo recbido en el
		//parametro value
		switch (value) {
			case 'class':
				return this.element.classList;
				break;
			case 'id':
				return this.element.id;
				break;
			case 'placeholder':
				return this.element.placeholder;
				break;
			case 'value':
				return this.element.value;
				break;
			default:
				console.log('No se encuentra el atributo pasado');
				break;
		}
	}
}



window.onload = function (){
	const contenedor =new Task("root");
};




