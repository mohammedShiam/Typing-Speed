const header = document.getElementById('header')
const inputSection = document.getElementById('input-section');
const inputField = document.getElementById('typing-input');
const startBtn = document.getElementById('start-btn')
const timing = document.getElementById('display-timig')
const getAnswer = document.getElementById('get-answer')
const reloadBtn = document.getElementById('reload')
const displayoutput = document.getElementById('display-output')


window.onload = function () {

    let timer = 1
    header.lastElementChild.innerHTML = `<p style="text-align:center; font-size:33px; margin-top:.2rem;">Check Your Typing Expertise<p>`
    startBtn.addEventListener('click', function () {
        inputSection.classList.remove('hide');
        startBtn.classList.add('hide')
        inputField.focus()
        inputField.style.in
        displayTime(timer, inputSection, startBtn);

    })

    getAnswer.addEventListener('click', function () {

        let inputValue = inputField.value.split(' ')
        header.firstElementChild.innerHTML = `You have typed <b>${inputValue.length}</b> words in 60 secound`;
        header.lastElementChild.innerHTML = `<p style="text-align:left; font-size:24px; margin-top:1rem; margin-bottom:.5rem;">${inputValue.join(' ')}</p>`
        if(inputValue.length > 50){
        displayoutput.innerHTML = `<h1 style="font-size:35px; color:green;">Excelent!</h1><br><p style="font-size:22px;">You are a type Master.</p>`

        }else if(inputValue.length > 35){
            displayoutput.innerHTML = `<h1 style="font-size:35px; color:green;">Well Done!</h1><br><p style="font-size:22px;">Keep Practiching</p>`
    
        }else{
            displayoutput.innerHTML = `<h1 style="font-size:35px; color:red;">Very Poor!</h1><br><p style="font-size:22px;">Keep Practiching</p>`
        }

        getAnswer.classList.add('hide')
        reloadBtn.classList.remove('hide')

        reloadBtn.addEventListener('click', function () {
            location.reload()
        })

    })
}




function displayTime(timer, inputSection) {


    let timerFunction = setInterval(function () {
        header.firstElementChild.innerHTML = `${timer++} Sec`
        header.lastElementChild.classList.add('hide')
        // timing.innerHTML = `${timer++} Sec`
        if (timer == 61) {
            stopInterval();
        }
    }, 1000)


    function stopInterval() {
        clearInterval(timerFunction)
        // timer = 0;
        inputSection.classList.add('hide')

        getAnswer.classList.remove('hide')
        header.firstElementChild.innerHTML = `Your Time's Up 🙂`
       header.lastElementChild.classList.remove('hide')
       header.lastElementChild.innerHTML = `<p style="text-align:center; font-size:33px; margin-top:.2rem;">Click The Get Result Button.<p>`

    }


}