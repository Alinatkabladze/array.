// function createGround(width, height){
//     var result = [];
//     for (var i = 0 ; i < width; i++) {
//         result[i] = [];
//         for (var j = 0; j < height; j++) {
//             result[i][j] = Math.floor(Math.random() * 100);
//         }
//     }
//     return result;
// }
// // Create a new ground with width = 15 & height = 9

// console.log(createGround(2, 3));


function sortLeast(arr) {
  // manually sort array from smallest to largest:
  // loop through array backwards:
  for (let i = arr.length-1; i >= 0; i--) {
    // loop again through the array, moving backwards:
    for (let j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };
  return arr;
};
//console.log(sortLeast([10,9,1000,12,-11,3]));

// function sortGreatest(arr) {
//   // manually sort array from largest to smallest:
//   // loop forwards through array:
//   for (let i = 0; i < arr.length; i++) {
//     // loop through the array, moving forwards:
//     // note in loop below we set `j = i` so we move on after finding greatest value:
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i]; // store original value for swapping
//         arr[i] = arr[j]; // set original value position to greater value
//         arr[j] = temp; // set greater value position to original value
//       };
//     };
//   };
//   return arr;
// };

// console.log(sortGreatest([10,9,1000,12,-11,3]));
// // => [ 1000, 12, 10, 9, 3, -11 ]


// function printReverse(arr){
// 	var result=[];
// 	for(var i = arr.length - 1; i >= 0; i--){
// 		result.push(arr[i]);
// 	}
// 	return result;
// }
// console.log(printReverse([10,9,1000,12,-11,3]));

// ar mushaobs
// function Reverse(arr){
// 	var result=[];
// 	for(let i =0,j= arr.length-1; i < j; i++,j--){
// 		let tmp=result[j];
// 		result[j]=result[i];
// 		result[i]=tmp
// 	}
// 	return result;
// }
// console.log(Reverse([10,9,1000,12,-11,3]));

// function maxChar(str) {

//         const charMap = {};
//         let max = 0;
//         let maxChar = '';
//         var string=str.toLowerCase();

//         for(let char of string){
//             if(charMap[char]){
//                 charMap[char]++;
//             }else{
//                 charMap[char] = 1;
                
//             }
//         }

//         for(let char in charMap){
//             if(charMap[char] > max){
//                 max = charMap[char];
//                 maxChar = char;
                
//             }  
//             else if (charMap[char] === max){
//             	maxChar=null;

//             }  
//         }

// return maxChar;     
// }
// console.log(maxChar("Alinna"));

function getGold(size){
	 var array = [10,9,1000,12,11,3];
	
	 sortLeast(array);
	
	 var result;
	 var arr=[];

  while(result>0){
    for (var i = 0 ; i < array.length; i++) {
    	
    	result=size-array[i];
    	
    	arr.push(result);
    
   }     //result.push(weights[i]);
 
 }
return arr;
}
console.log(getGold(10));