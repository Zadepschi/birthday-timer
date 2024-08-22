gsap.from("#birthdayGirl", {scale: 1.5, duration: 1.5})
gsap.from("h1", {opacity:0, duration: 3.2, delay: 1.3})
gsap.from(".dates", {opacity:0, duration: 3, delay: 1.8})
gsap.from(".time", {delay: 2.8, opacity: 0, duration: 1.5, stagger: 0.4})
gsap.from(".btn", {opacity:0, duration: 3, delay: 1.8})

const btnMusicOne = document.querySelector("#btnMusicOne");
const btnMusicTwo = document.querySelector("#btnMusicTwo");
btnMusicTwo.style.display = "none";

const btnStart = document.querySelector('.btnStart');
btnStart.addEventListener('click', birthdayCowntdown);

function birthdayCowntdown() {  
    btnStart.style.pointerEvents = "none";
    document.querySelector("input").style.pointerEvents = "none";
    
    const now = new Date();
    const dayInput = document.querySelector('#inputDate').value;
    let birthdayDate = new Date(dayInput);
    const diff = birthdayDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;
    
    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;



    if (displayDay === 0 && displayHour === 0 && displayMinute === 0 && displaySecond <= 60) {
        const redHeading = document.querySelector(".seconds");
        redHeading.classList.add("red");
    }

    let timerID = setInterval(birthdayCowntdown, 1000); 

    if (diff <= 0) {
        const time = document.querySelector(".timer");
        time.style.display = "none";
        clearInterval(timerID);
        happyBirthday();
        photos ();
        backgroundChange();
        document.querySelector("#myAudioOne").pause();
        document.querySelector(".dates").style.display = "none";
        btnMusicOne.style.display = "none";
        btnMusicTwo.style.display = "block";
        document.querySelector(".btnReload").style.display = "block";
    }
        
    document.querySelector('.btnRestart').addEventListener('click', () => {
        clearInterval(timerID);
        btnStart.style.pointerEvents = "auto";
        document.querySelector("input").style.pointerEvents = "auto";
        document.querySelector('.days').textContent = '';
        document.querySelector('.hours').textContent = '';
        document.querySelector('.minutes').textContent = '';
        document.querySelector('.seconds').textContent = '';
    })
}

function happyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy birthday!";
    heading.classList.add("happy");
}

function photos () {
    const birthdayGirl = document.querySelector("#birthdayGirl");
    birthdayGirl.style.display = "none";
    const fireworksPhoto = document.querySelector("#fireworks");
    fireworksPhoto.style.display = "block";
}

function backgroundChange() {
    document.body.style.backgroundImage = "URL(background1.jpg)";
    document.body.classList.add("mishura");
} 

const audioOne = document.querySelector("#myAudioOne");

btnMusicOne.addEventListener('click', function(){
    if (audioOne.paused) {
        audioOne.play();
        btnMusicOne.classList.toggle("pause");
    }
    else {
        audioOne.pause();
        btnMusicOne.classList.toggle("pause");
    }
})

const audioTwo = document.querySelector("#myAudioTwo");

btnMusicTwo.addEventListener('click', function(){
    if (audioTwo.paused) {
        audioTwo.play();
        btnMusicTwo.classList.toggle("pause");
    }
    else {
        audioTwo.pause();
        btnMusicTwo.classList.toggle("pause");
    }
})

document.querySelector(".btnReload").addEventListener("click", () => {
    window.location.reload();
})