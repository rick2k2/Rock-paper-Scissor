const arr = ["Rock","Paper","Scissor"];
const random_choose = Math.floor( Math.random()*3);
const computer_choice = arr[random_choose];
const message_text = document.getElementById("message_content");

// this is html submit button
const btn = document.getElementById("submit_btn");

// click submit button to get the value
info();
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const selectRadio = document.querySelector(`input[name="g"]:checked`);
    (selectRadio) ? getValue(selectRadio.value) : message_text.innerHTML = `**Please Select a Option**`;
});

// here we get the value
function getValue(v){
    setComputerChoice();
    winning_logic(v);
    setTimeout(() => winning_logic(v), 3000);
}

// here i provide the winning_logic 
function winning_logic(user_choice){
    setTimeout(()=>{setComputerChoice()},2000);
    if(user_choice === computer_choice){
        message_text.innerHTML = `**Both Choice are Same So This Game is Draw**`;
        setTimeout(()=>{
            message_text.addEventListener("click",message_text.innerText = "উভয় পছন্দ একই তাই এই গেমটি ড্র");
        },4000);
    }
    else{
        if((user_choice === "Rock") && (computer_choice ==="Paper")){
            message_text.innerHTML = `**Computer Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "কম্পিউটারের জয় কারণ কাগজ দ্বারা সহজে পাথর মোড়ানো হয়");
            },4000);
        }
        else if((user_choice === "Rock") && (computer_choice ==="Scissor")){
            message_text.innerHTML = `**User Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "User জয় কারণ শিলা কাঁচি নষ্ট করে");
            },4000);
        }
        else if((user_choice === "Paper") && (computer_choice ==="Scissor")){
            message_text.innerHTML = `**Computer Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "কম্পিউটারের জয় কারণ কাঁচি কাগজ কেটেছে");
            },4000);
        }
        else if((user_choice === "Paper") && (computer_choice ==="Rock")){
            message_text.innerHTML = `**User Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "User জয় কারণ কাগজ দ্বারা সহজে শিলা মোড়ানো হয়");
            },4000);
        }
        else if((user_choice === "Scissor") && (computer_choice ==="Rock")){
            message_text.innerHTML = `**Computer Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "কম্পিউটারের জয় কারণ শিলা কাঁচি নষ্ট করে");
            },4000);
        }
        else if((user_choice === "Scissor") && (computer_choice ==="Paper")){
            message_text.innerHTML = `**User Win The Game**`;
            setTimeout(()=>{
                message_text.addEventListener("click",message_text.innerText = "User জয় কারণ কাঁচি কাগজ কেটেছে");
            },4000);
        }
    }
}


// Here is set computer selected radio field
function setComputerChoice(){
    const computer_radio = document.querySelectorAll(`input[name="g1"]`);
    const choose_field_by_computer = computer_radio[random_choose];
    choose_field_by_computer.checked = true;
}


function info(){
    message_text.innerHTML = "**Game Start**";
}

// here is the Code for Play Again Button
// Add an event listener to the "Play Again" button
const playAgainBtn = document.getElementById("play_again");

playAgainBtn.addEventListener("click", function playAgain(e) {
    // Clear the message
    const message_text = document.getElementById("message_content");
    message_text.innerHTML = "";

    // Uncheck all radio buttons user and computer selected both
    const userRadioButtons = document.querySelectorAll(`input[name="g"]`);
    const computerRadioButtons = document.querySelectorAll(`input[name="g1"]`);
    userRadioButtons.forEach((radio) => (radio.checked = false));
    computerRadioButtons.forEach((radio) => (radio.checked = false));
}
);



// ***********************************
// Logic diagram behind this game    *
// ***********************************

//  U    v/s  C        ( winner)
// rock --> paper -->   (c) 1
// rock --> scisor -->  (u) 2
// paper --> scissor -->(c) 3

// crossponding case

//  U    v/s  C        ( winner)
// paper -->  rock-->   (u) 4
// scisor --> rock -->  (c) 5
// scisor --> paper --> (u) 6


// There are Total 6 case to check the winner properly
// one thing if both select same then draw the game

// Here,
// **U = user ,**C = computer

// **********************************
// **Build**                        *
// **********************************
    // developer: @ricksaha 2k23    *
// **********************************