class Task {
	constructor(root){
		this.contenedorTasks = document.createElement("div")
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
		this.percentO= this.percentO.bind(this);
        this.likeability= this.likeability.bind(this);
        this.time= this.time.bind(this);
        this.onClick= this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
        this.boton.getElement().addEventListener ("click",this.onClick) // Aca estamos llamando al elemento HTML del Boton y ademas

	}

//			
//		console.log(this)
//		this.onClick= this.onClick.bind(this);// Aca estamos haciendo que el elemento onClick tenga el contexto de esta clase. 
//		this.boton.getElement().addEventListener ("click",this.onClick) // Aca estamos llamando al elemento HTML del Boton y ademas
//		// estamos escuchando cuando suceda el evento click  de ese elemento para ejecutar el metodo onClick.     
//        this.percentO= this.percentO.bind(this);
//        this.likeability= this.likeability.bind(this);
//        this.time= this.time.bind(this);

	

	time() {
			
	}

	percentO() { 
        //console.log(this.element.getElementById("percent").getAttribute("value"));
        //únicamente es necesario llamar this.percent.getAttribute.
        if (this.percentArray){
            console.log("Ya existe");   
        } else{
            this.percentArray = [];
            console.log("No existía");
        }
        console.log(this.percent.getAttribute("value"));
        this.percentArray.push(this.percent.getAttribute("value"));
        //Agregamos al arreglo cada una de las variables que se van ingresando en el input de porcentaje
        console.log(this.percentArray);
	}

	likeability() {
			
	}
	
	onClick(){
		this.percentO();
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
        if(nameAttribute == "placeholder"){
            return this.element.placeholder;
        }
        else if(nameAttribute == "type"){
            return this.element.type;
        }
        else if(nameAttribute == "id"){
            return this.element.id;
        }
        else if(nameAttribute == "value"){
            return this.element.value;
        }
        else if(nameAttribute == "class"){
            return this.element.className;
        }
        else return false;
    }
}


window.onload = function (){
	/*var jave1 = document.createElement ("div")
	jave1.innerText ="hola mundo"
	document.getElementById("root").appendChild(jave1)*/
	const contenedor =new Task ("root")
	var hola= new Task("root")


};