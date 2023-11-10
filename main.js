let noteArr = [
    { title: 'Jora', img: "images/1.jpg", desc: "Жора хуй моржовый", status: false },
    { title: 'Jorisimo', img: "images/2.jpg", desc: "Жора оч важный кент", status: true },
    { title: 'Jora Neorzydannost`', img: "images/3.jpg", desc: "Жора а шо случилось?", status: false },
    { title: 'King Jora', img: "images/4.jpg", desc: "Жора Кинг-Конг", status: false },
    { title: 'Zastrial', img: "images/5.jpg", desc: "Жопа застряла", status: true },
];

function getCard(card, index) {
    let cardElement = document.createElement("li")
    let cardImg = document.createElement("img")
    let cardTitle = document.createElement("h2")
    let cardDescription = document.createElement("p")
    let cardRemoveBtn = document.createElement("button")
    let cardImportantBtn = document.createElement("button")
    let cardEditBtn = document.createElement("button")

    if (card.status === true) {
        cardImportantBtn.textContent = "Не важное"
        cardElement.classList.add("card_important")
    } else if (card.status === false) {
        cardImportantBtn.textContent = "Важное"
    }

    cardElement.classList.add("card")
    cardImg.classList.add("card__img")
    cardTitle.classList.add("card__title")
    cardDescription.classList.add("card__desc")
    cardRemoveBtn.classList.add("card__btn")
    cardImportantBtn.classList.add("card__btn")
    cardEditBtn.classList.add("card__btn")



    cardTitle.textContent = card.title
    cardImg.src = card.img
    cardDescription.textContent = card.desc


    cardRemoveBtn.textContent = "Удалить"
    cardEditBtn.textContent = "Изменить"

    cardRemoveBtn.onclick = function () {
        noteArr.splice(index, 1)
        render(noteArr)
    }
    cardEditBtn.onclick = function () {
        card.title = prompt("Введите новое название заметки")
        card.desc = prompt("Введите текст заметки")
        card.status = confirm("Важна ли эта заметка?")

        render(noteArr)
    }

    cardImportantBtn.onclick = function () {
        if (cardElement.classList.contains("card_important") == false) {
            cardImportantBtn.textContent = "Не важное"
            cardElement.classList.add("card_important")
        } else {
            cardImportantBtn.textContent = "Важное"
            cardElement.classList.remove("card_important")
        }
    }
    cardElement.append(cardImg, cardTitle, cardDescription, cardRemoveBtn, cardImportantBtn, cardEditBtn)

    return cardElement
}


function getAddBtn(text) {
    let buttonAdd = document.createElement("button")
    buttonAdd.textContent = text
    return buttonAdd;
}

function getList() {
    let ul = document.createElement("ul")
    ul.classList.add("list")
    return ul
}
function getInput(type, placeholder, className) {
    let input = document.createElement("input")
    input.type = type
    input.placeholder = placeholder
    input.classList.add(className)

    return input
}
let list = getList()

let addBtn = getAddBtn("Добавить новую заметку")
let inputBox = document.createElement("div")
inputBox.classList.add("input")
let inputName = getInput("text", "Имя кота", "input__name")
let inputSrc = getInput("", "Ссылка на фото", "input__img")
let inputDesc = getInput("text", "Описание", "input__desc")

addBtn.onclick = function () {
    let titleValue = inputName.value;
    let imgValue = inputSrc.value;
    let descValue = inputDesc.value;

    let newNoteObj = {
        title: titleValue,
        img: imgValue,
        desc: descValue,
        status: false
    }
    inputName.value = ""
    inputSrc.value = ""
    inputDesc.value = ""

    noteArr.push(newNoteObj)
    render(noteArr)
}
function render(arrNotes) {
    list.innerHTML = "";

    for (let i = 0; i < arrNotes.length; i++) {
        let newCard = getCard(arrNotes[i], i)
        list.append(newCard)
    }
}
render(noteArr)
list.append()
inputBox.append(inputName, inputSrc, inputDesc)
document.body.append(inputBox, addBtn, list)