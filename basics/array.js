let arr=new Array(1,2,3,4,5)
let arr2=[5,4,3,2,1]
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push(6))
// console.log(arr)

// console.log("A "+arr)
// const n1=arr.slice(2,3)
// console.log(n1)
// console.log("B "+arr)
// const n2=arr.splice(2,3)
// console.log(n2)
// console.log("C "+arr)

// arr.push(arr2)
// console.log(arr)

const arr3=arr.concat(arr2)
console.log(arr3)

const arr4=[...arr,...arr2]
console.log(arr4)
