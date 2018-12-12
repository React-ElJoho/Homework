class Azul{
	constructor(){
		//
	}
}
class Task {
	constructor(root){
		this.element="hola2"
		this.amarillo= new Azul()
		this.contenedorTasks =document.createElement("div")
		this.contenedorTasks.classList.add("tasks")
		this.name =document.createElement("h4")
		this.work = new Input("text","work","Hola")
		this.deadline =new Input("text","deadline", "Hola2")
		this.percent = new Input("text", "percent","Hola3")
		this.like =new Input("text","like","Hola4")
		this.boton = new Input("boton","button","Hola5","Hola5")
		this.contenedorTasks.appendChild(this.work.getElement())
		this.contenedorTasks.appendChild(this.percent.getElement())
		this.contenedorTasks.appendChild(this.like.getElement())
		this.contenedorTasks.appendChild(this.deadline.getElement())
		this.contenedorTasks.appendChild(this.boton.getElement())
		document.getElementById(root).appendChild(this.contenedorTasks)
		console.log(this)
		this.onClick= this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
		this.boton.getElement().addEventListener ("click",this.onClick) // Aca estamos llamando al elemento HTML del Boton y ademas
		// estamos escuchando cuando suceda el evento click  de ese elemento para ejecutar el metodo onClick. 
		
		 this.descriptionTime = `Tiempo que toma hacerlo menos fecha de entrega y da el valor de dias correspondientes`
		 this.descriptionPercent =` De acuerdo al porcentaje que tiene la tarea asiganara
		 un valor de puntaje priiorizando el de mayor porcentaje al de menor porcentaje`
		 this.descriptionLikeability =`Se utiliza como ultimop recurso el gusto que tiene la persona por dicha tarea si sus 
		 valores han sido iguales en las otras categorias`
		  this.percentO= this.percentO.bind(this);
		 this.likeability= this.likeability.bind(this);
		 this.time= this.time.bind(this);

	}

	time() {
			//return this.work.getElement().value - this.deadline.getElement().value 
			console.log(this.descriptionTime)
	}

	percentO() { 
			console.log(this.descriptionPercent)
	}

	likeability() {
			console.log(this.descriptionLikeability)
	}
	
	onClick(){
		function ol(){
			this.time();
			this.percentO();
			this.likeability();

		}

		ol=ol.bind(this);		
		ol()
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
}



window.onload = function (){
	window.innerText ="Hola mundo"
	var jave1 = document.createElement ("div")
	jave1.innerText ="hola mundo"
	document.getElementById("root").appendChild(jave1)
	const contenedor =new Task ("root")
	var hola= new Task("root")


};




