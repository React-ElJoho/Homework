class Engine{
	constructor(root){
		this.root = root;		//Este sera el id al que se añadira la lista de tareas
		this.date = new Date();	//Esta es la fecha del momento en que se añaden las tareas
		this.listOfTasks = [];	//Este arreglo contendra las tareas organizadas

		//Se le añade el contexto correspondiente por si las moscas
		//Es posible que el retirar una linea del siguiente codigo no dañe
		//la ejecución
		this.addTask = this.addTask.bind(this);
		this.remainingTime = this.remainingTime.bind(this);
		this.submitHTML = this.submitHTML.bind(this);
	}
	remainingTime(finalDate){
		let remainingTime = Math.round( (finalDate.getTime() - this.date.getTime()) / 86400000 );
		//Calcula el tiempo entre la fecha de programación de las tareas y la fecha de entrega

		return remainingTime > 0 ? remainingTime : 0;
		//Si el tiempo remanente es mayor que 0 entrega su valor sino
		//entrega un 0 como valor
	}
	addTask(task){

		// Este metodo recibe como parametro una tarea con toda la información
		//obtenida en la clase Tasks.

		let remainingTime = this.remainingTime(task.deadline);
		//Envia la información de tasks y obtiene el tiempo  restante
		//Este variable sera el primer filtro, aquellos trabajos con fecha de 
		// entrega mas cercana seran de primer prioridad en la lista

		let iterativeDeadline = 0; 
		//Iterative deadline obtendra todos los valores de tiempo remanente de cada tarea
		// en el arreglo this.listOfTasks


		if(this.listOfTasks.length > 0 && remainingTime != 0){
			//Evalua si la lista tenia un valor antes y que el tiempo remanente sea diferente de 0
			//Cuando el tiempo remanente es 0 significa que la fecha de entrega es hoy y por lo tanto
			//ya no se puede hacer nada, la prioridad sera minima.

			iterativeDeadline = this.remainingTime(this.listOfTasks[this.listOfTasks.length-1].deadline);
			//Se obtiene el tiempo remanente del ultimo valor en la lista
			//si la nueva tarea "task" tiene un tiempo remanente menor se pondra al final de la lista

			if( remainingTime >= iterativeDeadline && iterativeDeadline != 0)
				this.listOfTasks.push(task);
				//cuando remainin time es mayor o igual que el tiempo remanente del la tarea enlistada
				// la cual es comparada y iterative deadline es diferente de 0, e elemento ira al final
				// de la lista
				//En caso de que iterativeDeadline no sea 0, este elemento no se puede poner al final
				//porque todo elemento con iterativeDeadline que sea 0 ya no se puede entregar y tienen
				//prioridad minima
			else
				for(let i=0; i < this.listOfTasks.length ; i++ ){
					iterativeDeadline = this.remainingTime(this.listOfTasks[i].deadline);
					//Se obtiene el tiempo remanente para cada elemento en la lista
					if(remainingTime <= iterativeDeadline || iterativeDeadline == 0){
						//De cumplirse la condición, el arreglo es partido en 2
						// y la nueva tarea "task" es ingresada en su lugar correspondiente
						this.listOfTasks = this.listOfTasks.slice(0,i).concat([task],this.listOfTasks.slice(i));
						break;
						//El comando "break" detiene el ciclo, si el ciclo no es detenido,
						//entonces el arreglo seguira aumentado infinitamente y por lo tanto
						//nunca se cumplira la codicion para cual el ciclo para
					}
				}
				//El ciclo recorre la lista de tareas existente, y va metiendo las tareas correspondientes
				//segun les corresponda

		}else	this.listOfTasks.push(task);
		//Cuando las lista esta vacia o el tiempo remante de "task" es 0
		//ese elemento se pone al final de la lista.

		this.submitHTML();
	}
	submitHTML(){
		if(document.getElementById('listOfTasks')) //Pregunta si existe el elemento
			document.getElementById(this.root).removeChild(document.getElementById('listOfTasks'));
			//De existir lo remueve para poder colocar otro nuevo y actualizado

		let listOfTasks = document.createElement('div'); 	//Este elemento tendra todas las tareas organizadas
		listOfTasks.id = 'listOfTasks'; 					//Se le añade el id correspondiente

		for(let i=0; i<this.listOfTasks.length;i++)
			listOfTasks.appendChild(this.listOfTasks[i].elementHTML);
			//El ciclo añade la lista de tareas ,que fue previamente organizada,
			//al elemento listOfTask

		document.getElementById(this.root).appendChild(listOfTasks);
		//Se añade la lista organizada a la ventana elemento del navegador para que se vean
	}
}
class Task{
	constructor(root){
		//Se crea el (formulario) contenedor de los inputs
		this.contenedorTasks = document.createElement("form");
		this.contenedorTasks.classList.add("tasks");
		this.name = document.createElement("h4");
		
		//Se crean todos los inputs que accederan a la información
		this.work = new Input("text","work","tiempo estimado de trabajo");
		this.deadline = new Input("text","deadline", "dia");
		this.percent = new Input("text", "percent","porcentaje de la nota");
		this.like = new Input("text","like","cuanto le gusta");
		this.boton = new Input("button","boton","Hola5","Hola5");

		//Se añaden todos los inputs al co
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
	addEngine(engine){
		this.engine = engine;	//Comunica a esta clase con la clase Engine
	}
	createHomework(){
		let homework = {
			work : this.work.getAttribute('value'), 
			deadline : new Date(this.deadline.getAttribute('value')),
			percent : this.percent.getAttribute('value'),
			like : this.like.getAttribute('value'),
			elementHTML : document.createElement('div')
		};	//Crea un objeto con todos los valores obtenidos de los inputs
			//los cuales seran enviados a la clase Engine, ademas se crea 
			//un elemento HTML para mostrar luego las tareas en el navegador.

		homework.elementHTML.innerText = `-------------
			${homework.deadline}
			${homework.work}
			${homework.percent}
			${homework.like}
			-------------`;	//Se añade el contenido al elemento HTML

		return homework;
	}
	onClick(){
		if(this.engine)	// pregunta si la clase Engine esta comunicandose
			this.engine.addTask(this.createHomework());
		//Le envia la información a la clase Engine
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
	const engine = new Engine('root',new Date());
	const formularioDeTareas =new Task("root");
	formularioDeTareas.addEngine(engine); 
	//Se enlaza a engine al formulario, de no hacerse esto
	//No se ejecutara nada nunca 
};


