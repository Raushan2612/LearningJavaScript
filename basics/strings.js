let name="Raushan"
let marks=95
//console.log(`My name is ${name} and marks are ${marks}`)
let name2="cognizanttt"
//console.log(name2.lastIndexOf('t'))
//console.log(name2.trim())
//console.log(name2.find("ogni"))


// let name3=12
// let name4="12"
// console.log(name3===name4)

// let num=12
// num=name2.includes("ttt")
// console.log(num)

let str="Raushan Singh"
let pos=[]
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='a')
        pos.push(i)
}
for(let a of pos)
    console.log(a);