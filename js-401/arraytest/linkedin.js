const arr = [0, 2, 3, 5, 1];
let count = 0;

// console.log('initial', arr)

for (let num of arr){
  console.log('be if', arr ,num)
  if(num !== 0){
    console.log('in if', arr, num, count);
    arr[count++] = num;
    console.log('af if', arr, num)
  }
}

console.log('before while', arr)

while(count < arr.length){
  console.log(arr,count, arr.length)
  arr[count++] = 0
  console.log('before',count)
  console.log('after while', arr)
}

