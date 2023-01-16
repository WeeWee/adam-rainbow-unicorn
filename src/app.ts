const getString = (s: string) => {
	return `hej ${s}`;
};

const arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
for (let i = 0; i < arr.length; i++) {
	const word = arr[i];
	console.log(getString(word));
}
