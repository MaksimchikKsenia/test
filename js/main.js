// function nums(count){
//     let arr = []
//     for(let i = 0; i<count; i++){
//         if(i==0){
//             arr[i]=1
//         }
//         else if(i==1){
//             arr[i] = 2
//         }
//         else{arr[i]=arr[i-1]+arr[i-2]}
//     }

//     return arr
// }

// console.log(nums(10))

// function factorial(n){
//     let f = 1
//     for(let i = 1; i<n+1; i++)
//     {
//          f = f*i
//     }
//     return f
// }

// console.log(factorial(7))

// function pr(n){
//     n +="";
//     let add =0
//     let nul = 1
//     for(let i =0; i<n.length; i++){
//         add+= +n[i]
//         nul *= n[i]
//     }

//     return {
//         "summa": add,
//         "proizved":nul
//     }
    
// }

// console.log(pr(12345))

// function inve(num){
//     num +=""
//     let a =""
//     let counter_ch =0
//     let counter_nech =0
//     for(let i =0; i< num.length; i++)
//     {
//         if(+num[i]%2==0){
//             counter_ch++
//         }
//         else{
//             counter_nech++
//         }
//     }

//     return {
//         "ch": counter_ch,
//         "nech":counter_nech
//     }
// }
// console.log(inve(6843))

// function Random(){
//     let num = Math.floor(Math.random()*100)
//     for (let i =1; i<=10;i++){
// let result = +prompt(`popytka ${i}, vvedite chislo:`)
    

//     if(result==num){
//         return alert(`ugadano c ${i} popytki. Chislo: ${num}`)
//     }
//     else if (result< num){
//         alert("chislo < zagadannogo")
//     }
//     else if (result> num){
//         alert("chislo > zagadannogo")
//     }
   
// }

//  return alert("you lose( vernoe chislo: "+num)

// }

// Random()
// /**
//  * gsxsaghcvghsxhgasxgash
//  * @param {string} time
//  *  @return {number} bhjuftfkvhbjnkml;kmjhgftrd
//  */
// function timeToMinute(time){
// try{
//     let h = +time.split(":")[0]
//     let m = +time.split(":")[1]
//     if(!(h>=0 && h<=23) || !( m>=0 && m<=59) ){
//          throw new RangeError("nepravilny vvod")
//     }
//     return h*60 + m
// }
// catch(error){
//     console.log(error)

// }
// }
// console.log(timeToMinute("13:65"))

// //это родительский элемент
// let cat={
//     color:"red",
//     isPet() {
//         console.log("i am a pet "+this.name+", my color is " + this.color)
//     }
// }

// //это конструктор
// function Pet(name,age){
//     this.name = name
//     this.age = age
//     this.__proto__ = cat
//     this.MyInfo = function(){
//         console.log("My name is "+this.name+" my color is "+this.color)
//     }
// }

// let p1 =new Pet("bobik", 1)
// let p2 = new Pet("redy", 12)
// let p3 = new Pet("lal", 3)
// console.log(p1.isPet())
// console.log(p2.MyInfo())
// console.log(p3.MyInfo())

// class Pet{

//     color = "red"
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }

//     Info(){
//      console.log("my name is "+this.name+" i am " + this.age + " years old."+"my color is "+ this.color)   
//     }
// }

// class Cat extends Pet{
//     color = "red"
//     constructor(name, age, size){
//        super(name, age),
//         this.size = size
//     }
// Info(){
//     super.Info()
//     console.log("my size is "+ this.size)
// }
// }

// let p1 = new Pet("lol", 12)
// let p2 = new Pet("Ir", 11)
// let p3 = new Pet("kin", 4)

// let c1 = new Cat("nik", 5, "small")

// console.log(p1.Info())
// console.log(p2)
// console.log(p3.Info())

// console.log(c1.Info())
// console.log(c1.isSize())


// 


// function sum(a, b){
//     return a+b
// }

// let date = [4,10,8,6]

// console.log(sum(date))

let a = [1, 2]
let b = a

let c = [...a]
a.push(5)
console.log(b)
console.log(c)
