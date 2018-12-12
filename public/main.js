class Element{
	constructor(element){
		//Se recibe un elemento HTML
		this.element = element;

		//Se les da el mismo contexto de la clase a sus funciones
		this.setAtributes = this.setAtributes.bind(this);
		this.getAtributes = this.getAtributes.bind(this);
		this.getElement = this.getElement.bind(this);
		this.addChild = this.addChild.bind(this);
	}

	setAtributes(value,atribute){
		//Se reciben dos parametros, el primero indica el atributo a
		//cambiar, el segundo es el nuevo atributo
		switch (value) {
			case 'class':
				this.element.className = atribute;
				break;
			case 'id':
				this.element.id = atribute;
				break;
			case 'placeholder':
				this.element.placeholder = atribute;
				break;
			case 'value':
				this.element.value = atribute;
				break;
			default:
				console.log('No se encuentra el atributo pasado');
				break;
		}
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
	getElement(){
		//Reterno el elemento
		return this.element;
	}
	addChild(child){
		//Añade hijos al elemento
		this.element.appendChild(child);
	}
}

class Input extends Element{
	constructor(type = 'text'){
		//Primero se 'heredan' las caracterisitcas de la clase Element
		//Enviandose como parametro el nuevo elemento html 'input'
		super(document.createElement('input'));
		//Al cambiar el atributo type, se elige la clase de input
		this.element.type = type;
	}
}

class Form extends Element{
	constructor(children = []){
		//Primero se 'heredan' las caracterisitcas de la clase Element
		//Enviandose como parametro el nuevo elemento html 'form'
		super(document.createElement('form'));

		//Se crea la variable de tipo array que recibera a los hijos
		this.children = [];

		//Se le da el contexto de la clase a la función
		this.addChildren = this.addChildren.bind(this);
		//se añaden los hijos al formulario
		this.addChildren(children);
	}
	addChildren(children){
		for(let i in children){
			this.children.push(children[i]);
			this.element.appendChild(children[i].getElement());
		}
	}
}
class Questions{
	constructor(){
		this.questions = [];
		this.submit = new Input('button');
		this. container = new Form();
	}
	newQuestion(question){

	}
}
class Work{
	constructor(){
	}
	
}
window.onload = function(){
	
	const input1 = new Input();
	
	const input2 = new Input();
	input2.setAtributes('placeholder','input');
	const input3 = new Input();
	input3.setAtributes('placeholder','input');
	const input4 = new Input('button');
	input4.setAtributes('value','input');
	
	const boxQuestions = new Form([input1,input2,input3,input4]);
	const daiv =  boxQuestions;
	daiv.innerText='hola mundo';

	document.getElementById('root').appendChild(boxQuestions.getElement());
	document.getElementById('root').appendChild(daiv);
	input1.setAtributes('placeholder','input');
}
