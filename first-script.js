function saveJsonObjToFile() {
	const saveObj = { 'a': 3 }; // tmp

	// file setting
	const text = JSON.stringify(saveObj);
	const name = 'sample.json';
	const type = 'text/plain';

	// create file
	const a = document.createElement('a');
	const file = new Blob([text], { type: type });
	a.href = URL.createObjectURL(file);
	a.download = name;
	document.body.appendChild(a);
	a.click();
	a.remove();
}

var test = true

function resolveAfter2Seconds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (test === true) {
				resolve('succes !'); // renvoie le parametre
				test = false
			} else {
				reject('erreur !'); // renvoie le parametre
				test = true
			}
		}, 3000);
	});
}

function syncCall() {
	console.log('starting sync');

	const res = resolveAfter2Seconds();
	console.log('calling sync');

	return res
	// Expected output: "resolved"
}

async function asyncCall() {
	console.log('starting async')

	const res = await resolveAfter2Seconds();
	console.log('resolved async')
	return res
}


let compteCourant = { name: 'compteCourant', solde: 100, tempsRetrait: 1000 }
let compteEpargne = { name: 'compteEpargne', solde: 10000, tempsRetrait: 2000 }


function withdraw(solde, compte) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (solde <= compte.solde && solde > 0) {
				compte.solde -= solde
				res(`Nouveau montant du solde ${compte.name} : ${compte.solde}`)
			} else {
				rej('Pas assez de sous')
			}
		}, compte.tempsRetrait)
	})
}


withdraw(100, compteCourant).then(res => console.log(res))
withdraw(100, compteCourant).then(res => console.log(res))


// url à fetch : https://keligmartin.github.io/api/films.json


