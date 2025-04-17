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

console.table(tasks.sort((a, b) => b.priority - a.priority))
