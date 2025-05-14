
function saveJsonObjToFile() {
	const saveObj = { "a": 3 }; // tmp

	// file setting
	const text = JSON.stringify(saveObj);
	const name = "sample.json";
	const type = "text/plain";

	// create file
	const a = document.createElement("a");
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
			if(test === true){
				resolve('succes !');
				test = false
			}
			else {
				reject("erreur !");
				test = true
			}
		}, 2000);
	});
}

function syncCall() {
	console.log("starting sync");

	const res =  resolveAfter2Seconds();
	console.log("calling sync");

	return res
	// Expected output: "resolved"
}

async function asyncCall() {
	console.log('starting async')

	const res = await resolveAfter2Seconds();
	console.log('resolved async')
	return res
}

asyncCall().then((res) => console.log(res)).catch(err => console.error(err));
syncCall().then((res) => console.log(res)).catch(err => console.error(err));

asyncCall().then((res) => console.log(res)).catch(err => console.error(err));
