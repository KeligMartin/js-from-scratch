const title = document.getElementById('title')
title.innerText = 'Je suis modifié'

const button = document.getElementById('btn-1')
button.addEventListener('click', onClick)

function onClick() {
	console.log('click')
}

const input = document.getElementById('input-text')
input.addEventListener('focus', () => console.log('tu es en train d ecrire'))
input.addEventListener('blur', () => {
	// vérifier que le champs est correct
	// si pas correct => message d'erreur
	// sinon rien
})