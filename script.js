console.log('welcome to Tic Tac Toe');

let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic= new Audio("gameover.mp3");

let gameOver=false;

let turn= "X";


//Function to change turn
const changeTurn = ()=>{

    if(turn==="X"){
        return "0";
    }
    else{
        return "X";
    }
}


//Function to check for a win

const checkWin = ()=>{

    let boxTexts= document.getElementsByClassName('boxText');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText===boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText!=='' ){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + ": Won";
            gameOver= true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        };

    })
}

//Main Logic


let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText= element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText ===''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();

            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
            
        }
    })
})

//add event listener to reset


    reset.addEventListener('click', ()=>{
        let boxText= document.querySelectorAll('.boxText');
        Array.from(boxText).forEach(element =>{
            element.innerText= "";
        })

        turn="X";
        gameOver= false;
        document.getElementsByClassName("info")[0].innerText = " Turn for " + turn; 
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";




    })



