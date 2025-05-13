class Task {
	constructor(title, description, priority, timeSpent, owner) {
		this.title = title
		this.description = description
		this.priority = priority
		this.timeSpent = timeSpent
		this.owner = `${owner.name} ${owner.firstname}`
	}
}

class Owner {
	constructor(name, firstname) {
		this.name = name;
		this.firstname = firstname
	}
}

const owner = new Owner('Martin', 'Kelig')

let task1 = new Task("Créer le HTMl", "Structurer le site", 1, 10, owner)
let task2 = new Task("Créer le CSS", "Styliser le site", 5, 10,  owner)
let task3 = new Task("Créer le JS", "Animer le site", 3, 10,  owner)
let task4 = new Task("Créer le php", "Créer le backend", 19, 10, owner)
let task5 = new Task("Créer la BDD", "instancier la BDD", 100, 10, owner)

const tasks = [task1, task2, task3, task4, task5]

tasks.forEach((task, index) => {
	if(index % 2 !== 0) {
		task.title = task.title.toUpperCase()
	}
})

const falseTask = new Task('Total temps passé', '', 0, tasks.reduce((acc, curr) => acc + curr.timeSpent, 0), owner)
tasks.push(falseTask)

console.table(tasks)


// natif
// attention à la condition
for(let i = 0; i < tasks.length; i++) {
	console.log(tasks[i])
}

tasks.sort((a, b) => a.priority - b.priority)
// natif

// tri à bulle, tri par insertion

const tasksFiltrees = tasks.filter((task) => task.priority > 15)

// natif
const tasksFiltreesNatif = []
for(let i = 0; i < tasks.length; i++) {
	if(tasks[i].priority > 15) {
		tasksFiltreesNatif.push(tasks[i])
	}
}


const tasksMap = tasks.map((task) => new Task(task.title, task.description, task.priority * 2, 0, owner))

// natif

const priorityTotal = tasks.reduce((acc, currentValue) => acc + currentValue.priority, 0)

// natif
let total = 0
for (let i = 0; i < tasks.length; i++) {
	total = total + tasks[i].priority
}