
const str = "hey js You R amazing";
const vowels = ['a','e','i','o','u'];

function countVowel(data){
	let count = 0;
	
	data.toLowerCase().split('').forEach((char)=>{
		vowels.includes(char)&&count++;
	})	

	return count;
}

const numofVowels = countVowel(str);

console.log(numofVowels);

let b,r; console.log('hello');
