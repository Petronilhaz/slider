import { developerData } from '../database/developer-data.js'

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

const profileImage = document.getElementsByClassName("profile-image")
const discourse = document.getElementsByClassName("discourse")
const devName = document.getElementsByClassName("developer-name")
const devArea = document.getElementsByClassName("job")

nextBtn.addEventListener('click', () => {
    avancar()
})

prevBtn.addEventListener('click', () => {
    voltar()
})

function avancar() {
    profileImage[0].src = developerData[1].img
    discourse[0].innerHTML = developerData[1].discourse
    devName[0].innerHTML = developerData[1].name
    devArea[0].innerHTML = developerData[1].job
}

function voltar() {
    profileImage[0].src = developerData[0].img
    discourse[0].innerHTML = developerData[0].discourse
    devName[0].innerHTML = developerData[0].name
    devArea[0].innerHTML = developerData[0].job
}