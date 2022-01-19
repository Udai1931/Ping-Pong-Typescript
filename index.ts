//Commands to install
//Commands to check
//Benefits
//Long term goal => angular

//Typescript Basics


// let id : number = 5
// // id = '5';

// //Basic Types

// let company : string = 'Google';

// let booleanValue : boolean = true;

// let x : any = 5 || '5';

// let ids : number[] = [1,2,3]; //only one type ina array

// let arr : any[] = [1,'2',true]; //only one type ina array


// //tuple different types in a array
// let person : [number,string] = [1,'2'];

// //tuple array
// let employee : [number,string][] ;
// employee =[
//     [1,"udai"]
// ] 

// //Union
// let pid : string | number;

// pid = '22'
// pid = 22 //Both are valid


// function addNum(x:number,y:number):number{
//     return x+y;
// }

// console.log(addNum(5,6));


// function log(message : string | number) :void { //union of the types
//     console.log(message);
// }

// class personal{
//     id : number
//     name:string

//     constructor(){
//         this.id = 1;
//         this.name = 'udai';
//         console.log(123)
//     }
// }

// const brad = new personal();



///////GAME   //////////////////


let handle1 : number = 250
let speed1 : number = 0
let handle2 : number= 250
let speed2: number = 0

let ballleft: number = 770;
let balltop : number= 330;
let ballleftspeed : number= 0;
let balltopspeed : number= 0;

let score1 : number= 0;
let score2 : number= 0;

document.addEventListener("keydown", function (e) : void {
    if (e.keyCode == 87) {
        speed1 = -10
    }
    if (e.keyCode == 83) {
        speed1 = 10
    }
    if (e.keyCode == 38) {
        speed2 = -10
    }
    if (e.keyCode == 40) {
        speed2 = 10
    }
})

document.addEventListener("keyup", function (e) : void  {
    if (e.keyCode == 87) {
        // if (handle1 > 0) {
        speed1 = 0
        // }
    }
    if (e.keyCode == 83) {
        // if (handle1 < 590) {
        speed1 = 0
        // }
    }
    if (e.keyCode == 38) {
        // if (handle2 > 0) {
        speed2 = 0
        // }
    }
    if (e.keyCode == 40) {
        // if (handle2 < window.innerHeight) {
        speed2 = 0
        // }
    }
})

function start(): void {
    let dir1 = 0;
    let dir2 = 0;
    ballleft = 770;
    balltop = 330;
    if (Math.random() < 0.5) {
        dir1 = 1;
    } else {
        dir1 = -1;
    }

    if (Math.random() < 0.5) {
        dir2 = 1;
    } else {
        dir2 = -1;
    }

    ballleftspeed = dir1 * Math.random() * 10;
    balltopspeed = dir2 * Math.random() * 10;
}

setInterval(() => {
    if (handle1 + speed1 >= 0 && handle1 + speed1 <= window.innerHeight - 150) {
        handle1 += speed1
    }
    if (handle2 + speed2 >= 0 && handle2 + speed2 <= window.innerHeight - 150) {
        handle2 += speed2
    }
    ballleft += ballleftspeed;
    balltop += balltopspeed;

    if (balltop < 0 || balltop > window.innerHeight) {
        balltopspeed = -balltopspeed;
    }

    if (ballleft <= 40) {
        console.log(handle1 + " " + balltop + " " + ballleft);
        if (balltop > handle1 && balltop < handle1 + 150) {
            console.log(2)
            ballleftspeed = -ballleftspeed;
        } else {
            start();
            score2++;
        }
    }
    
    if (ballleft >= window.innerWidth - 40) {
        if (balltop >= handle2 && balltop <= handle1 + 150) {
            ballleftspeed = -ballleftspeed;
        } else {
            start();
            score1++;
        }
    }

    
    document.querySelector<HTMLElement>(".handle1").style.top = handle1 + "px"
    document.querySelector<HTMLElement>(".handle2").style.top = handle2 + "px"
    document.querySelector<HTMLElement>(".ball").style.left = ballleft + "px"
    document.querySelector<HTMLElement>(".ball").style.top = balltop + "px"
    document.querySelector(".score1").innerHTML = score1 +""
    document.querySelector(".score2").innerHTML = score2 +""
    
    if(score1==3){
        alert("Player 1 wins");
        score1=0;
        score2=0;
        
    }
    if(score2==3){
        alert("Player 2 wins");
        score1=0;
        score2=0;
    }
     
},20)

start()