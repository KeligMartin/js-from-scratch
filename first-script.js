class Task {
	constructor(title, description, priority) {
		this.title = title
		this.description = description
		this.priority = priority
	}
}

let task1 = new Task("Créer le HTMl", "Structurer le site", 1)
let task2 = new Task("Créer le CSS", "Styliser le site", 5)
let task3 = new Task("Créer le JS", "Animer le site", 3)
let task4 = new Task("Créer le php", "Créer le backend", 19)
let task5 = new Task("Créer la BDD", "instancier la BDD", 100)

const tasks = [task1, task2, task3, task4, task5]

tasks.forEach((task, index) => {
	console.log(task, index)
})

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