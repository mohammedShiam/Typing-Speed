const header = document.getElementById('header')
const inputSection = document.getElementById('input-section');
const inputField = document.getElementById('typing-input');
const startBtn = document.getElementById('start-btn')
const timing = document.getElementById('display-timig')
const getAnswer = document.getElementById('get-answer')
const reloadBtn = document.getElementById('reload')
const displayoutput = document.getElementById('display-output')
const paragraph = document.getElementById('paragraph')


// Paragraph
const paraContent = [
    `He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination [Quran 64:3]<br>
    Meaning: It teaches that the final destination of every Muslim is Allah. He has created each person in the perfect form, and every life revolves around Allah. The verse inspires people when they feel lost or gloomy.<br>
    My mercy encompasses all things [Quran 7:156]<br>
    Meaning: It says that the mercy of Allah is limitless. There are no boundaries around. It inspires people who are repenting for sins and facing troubles in life. One must not be fearful because Allah forgives everyone. 
    `,
    
    `So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief” [Quran 94:5-6]<br>
    Meaning: It asks people to have faith in Allah and says that one who recites the verses of the Quran when facing great difficulties in life gets blessings from Allah. He gives everyone and also takes something from all. This verse gives hope, and it is among the important ayat in the Quran.<br>
    He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination [Quran 64:3]<br>
    And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent [Quran 65:3]
    `,

    `And Allah would not punish them while they seek forgiveness [Quran 8:33]<br>
    Meaning: This verse teaches Muslims to ask for His mercy and forgiveness. It says that compassion is the most important virtue of life. One must always hope for the best and always have faith in the Almighty.<br>
    Do what is beautiful. Allah loves those who do what is beautiful [Quran 2:195]<br>
    Meaning: One must be pure at heart. The verse asks everyone to do good in this world. Our actions must be centred around doing good deeds that bring joy to the heart and offer something valuable to others as well.
    `,

    `Allah does not burden a soul beyond that it can bear[Quran 2:286]<br>
    Meaning: The ayah says that Allah tests everyone, and He does not put hurdles in one’s way if the person cannot handle them. It teaches that He knows us better, and He is aware of our strengths. He will not put devotees through something that they cannot handle.<br>
    And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent [Quran 65:3]<br>
    Meaning: When in struggle, A Muslim must always remember Allah, for His remembrance brings hope. One is never alone in this world; the supreme power is with everyone. The ayah restores faith in the Almighty.
    `,

    `The truth is from your Allah, so do not be among the doubters [Quran 3:60]<br>
    Meaning: The verse teaches everyone to believe in the oneness of Allah because it is the only truth in this world. It helps the mind to stay away from confusion and distractions that can bring anyone down.<br>
    Muslims believe that when a person recites ayats from the Quran, Allah offers them guidance. When praying, the person can listen to His voice. If a person is sad, they get encouragement and comfort from the Almighty. Ayats offer a solution to people who feel lost in their lives. The verses hold significant importance among the followers of Islam.
    
    `
]



window.onload = function () {

    let timer = 1
    header.lastElementChild.innerHTML = `<p style="text-align:left; font-size:33px; padding-top:.2rem;">You will get 120 Second or 2 Minutes for typing. Above have the paragraph that you can write. <p>`
    startBtn.addEventListener('click', function () {
        inputSection.classList.remove('hide');
        startBtn.classList.add('hide')
        inputField.focus()
        inputField.value = ''
        displayTime(timer, inputSection, startBtn);

    })

    getAnswer.addEventListener('click', function () {

        let inputValue = inputField.value.split(' ')
        header.firstElementChild.innerHTML = `You have typed <b>${inputValue.length}</b> words in 120 secound or 2 Minutes`;
        header.lastElementChild.innerHTML = `<p style="text-align:left; font-size:24px; margin-top:1rem; margin-bottom:.5rem;">${inputValue.join(' ')}</p>`
        if (inputValue.length > 90) {
            displayoutput.innerHTML = `<h1 style="font-size:35px; color:green;">Excelent!</h1><br><p style="font-size:22px;">You are a type Master.</p>`

        } else if (inputValue.length > 60) {
            displayoutput.innerHTML = `<h1 style="font-size:35px; color:green;">Well Done!</h1><br><p style="font-size:22px;">Keep Practiching</p>`

        } else {
            displayoutput.innerHTML = `<h1 style="font-size:35px; color:red;">Very Poor!</h1><br><p style="font-size:22px;">Keep Practiching</p>`
        }
        getAnswer.classList.add('hide')
        reloadBtn.classList.remove('hide')
        reloadBtn.addEventListener('click', function () {
            location.reload()
        })

    })
}


// Random Number Genarator
let paraCount = 0;
let mathRandom = Math.random().toPrecision(1)

if (mathRandom == 0.1) {
    paraCount = 0
} else if (mathRandom == 0.2) {
    paraCount = 1

} else if (mathRandom == 0.3) {
    paraCount = 2

} else if (mathRandom == 0.4) {

    paraCount = 3

} else if (mathRandom == 0.5) {
    paraCount = 4
}

else if (mathRandom == 0.6) {
    paraCount = 0
}else if (mathRandom == 0.7) {
    paraCount = 1
}else if (mathRandom == 0.8) {
    paraCount = 2
}else if (mathRandom == 0.9) {
    paraCount = 3
}else if (mathRandom == 1) {
    paraCount = 4
}

function displayTime(timer, inputSection) {


    let timerFunction = setInterval(function () {
       
        header.firstElementChild.innerHTML = `${timer++} Secound`
        paragraph.classList.remove('hide')
        paragraph.innerHTML = `${paraContent[paraCount]}`
        header.lastElementChild.classList.add('hide')

        if (timer == 122) {
            stopInterval();
        }
    }, 1000)


    function stopInterval() {
        clearInterval(timerFunction)
        // timer = 0;
        

        paragraph.classList.add('hide')
        inputSection.classList.add('hide')
        getAnswer.classList.remove('hide')
        header.firstElementChild.innerHTML = `Your Time's Up 🙂`
        paragraph.innerHTML = ''
        header.lastElementChild.classList.remove('hide')
        header.lastElementChild.innerHTML = `<p style="text-align:center; font-size:33px; margin-top:.2rem;">Click The Get Result Button.<p>`

    }


}