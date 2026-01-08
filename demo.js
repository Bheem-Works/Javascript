function bubbleShort () {
	let arr = [5,1,2,4,3];
	let len = arr.length;
    for (let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
}; 
bubbleShort()
// Here is the examples: 
    /* 
        bubbleShort means    arrange according to the acsending or the descending numbers; 
        like this -: [5,1,2] -> [1,2,5]; 
        and also like this :- [2,4,1] -> [1,2,4];
        you have to make this throught out the code; 
    */

    
console.log("hello man");
let name = "this is the vim"; 
console.log(`hello ${name}`);


let ballPen = "Hello my name is ";
let sayPen = "fountain pen";
let concatPen = ballPen + sayPen;
console.log(concatPen);

