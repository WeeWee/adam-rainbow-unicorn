const getString = (s: string): string => {
	return `hej ${s}`;
};

const arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];
for (let i = 0; i < arr.length; i++) {
	const word: string = arr[i];
	console.log(getString(word));
}
