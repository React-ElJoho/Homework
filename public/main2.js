class Engine{
	constructor(root){
		this.root = root;
		this.addTask = this.addTask.bind(this);
	}
	remaininTime(date1,date2){
		return Math.round((date1.getTime()-date2.getTime())/86400000);
	}
	addTask(task){
		 console.log(task)
		 let list = document.createElement('div');
		 list.innerText = `-------------
		 ${task.work}
		 ${task.percent}
		 ${task.like}
		 ${task.deadline}
		 -------------`;
		 document.getElementById(this.root).appendChild(list);
	}
}
class Task{
	constructor(root){
		this.contenedorTasks = document.createElement("div");
		this.contenedorTasks.classList.add("tasks");
		this.name = document.createElement("h4");
		this.work = new Input("text","work","tiempo estimado de trabajo");
		this.deadline = new Input("text","deadline", "dia");
		this.percent = new Input("text", "percent","porcentaje de la nota");
		this.like = new Input("text","like","cuanto le gusta");
		this.boton = new Input("button","boton","Hola5","Hola5");
		this.contenedorTasks.appendChild(this.work.getElement());
		this.contenedorTasks.appendChild(this.percent.getElement());
		this.contenedorTasks.appendChild(this.like.getElement());
		this.contenedorTasks.appendChild(this.deadline.getElement());
		this.contenedorTasks.appendChild(this.boton.getElement());
		document.getElementById(root).appendChild(this.contenedorTasks);
		
		this.onClick = this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
		this.boton.getElement().addEventListener("click",this.onClick); // Aca estamos llamando al elemento HTML del Boton y ademas
		// estamos escuchando cuando suceda el evento click  de ese elemento para ejecutar el metodo onClick. 
		this.createHomework = this.createHomework.bind(this);
		this.addEngine = this.addEngine.bind(this);
	}
	percentO(){ 
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
	addEngine(engine){
		this.engine = engine;
	}
	createHomework(){
		let homework = {
			work : this.work.getAttribute('value'), 
			deadline : this.deadline.getAttribute('value'),
			percent : this.percent.getAttribute('value'),
			like : this.like.getAttribute('value')
		};
		return homework;
	}
	onClick(){
		if(this.engine)
			this.engine.addTask(this.createHomework());
		//this.percentO();

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
	const engine = new Engine('root');
	const contenedor =new Task("root");
	contenedor.addEngine(engine);
};




