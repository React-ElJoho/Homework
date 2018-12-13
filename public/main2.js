class Task {
	constructor(root){
		this.contenedorTasks =document.createElement("div")
		this.contenedorTasks.classList.add("tasks")
		this.name =document.createElement("h4")
		this.work = new Input("text","work","Hola")
		this.deadline =new Input("text","deadline", "Hola2")
		this.percent = new Input("text", "percent","Hola3")
		this.like =new Input("text","like","Hola4")
		this.boton = new Input("button","boton","Hola5","Hola5")
		this.contenedorTasks.appendChild(this.work.getElement())
		this.contenedorTasks.appendChild(this.percent.getElement())
		this.contenedorTasks.appendChild(this.like.getElement())
		this.contenedorTasks.appendChild(this.deadline.getElement())
		this.contenedorTasks.appendChild(this.boton.getElement())
		document.getElementById(root).appendChild(this.contenedorTasks)
		
		this.onClick= this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
		this.boton.getElement().addEventListener ("click",this.onClick) // Aca estamos llamando al elemento HTML del Boton y ademas
		// estamos escuchando cuando suceda el evento click  de ese elemento para ejecutar el metodo onClick. 
		
		  this.percentO= this.percentO.bind(this);
		 this.likeability= this.likeability.bind(this);
		 this.time= this.time.bind(this);

	}

	time() {

			//return this.work.getElement().value - this.deadline.getElement().value 
			
	}

	percentO() { 
		if (!this.percentArray)	this.percentArray = [];
		this.percentArray = this.maxHeap(parseInt(this.percent.getAttribute("value")),this.percentArray);
		console.log(this.percentArray);
	}

	maxHeap(newItem,arrayToSort){
		if(arrayToSort.length == 0 || newItem <= arrayToSort[arrayToSort.length-1]){
			arrayToSort.push(newItem);
			return arrayToSort;
		}	
		for(let i=0; i < arrayToSort.length ; i++)
			if(newItem >= arrayToSort[i])
				return arrayToSort.slice(0,i).concat([newItem],arrayToSort.slice(i));
	}

	likeability() {
			
	}
	
	onClick(){
		this.percentO();//Aca llamamos la funcion dentro del Onclick.
		
	}




}
class Input {
	constructor(type,id,placeholder,value=""){
		this.element = document.createElement("input");
		this.element.placeholder =placeholder;
		this.element.type = type;
		this.element.id = id; 
		this.element.value = value; 

	}
	getElement(){
		return this.element;
	}
	getAttribute(nameAttribute){
		if(nameAttribute=="placeholder"){
			return this.element.placeholder;
		} else if(nameAttribute=="type"){
			return this.element.type;
		} else if(nameAttribute=="id"){
			return this.element.id;
		} else if(nameAttribute=="value"){
			return this.element.value;
		} else if(nameAttribute=="class"){
			return this.element.className;

		}else return false;
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




