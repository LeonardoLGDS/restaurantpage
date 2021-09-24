import sass from './style.scss';
import createContactPage from './createContactPage.js';
import createHistoryPage from './createHistoryPage.js';
import createMenuPage from './createMenuPage.js';

// Creation of the index.
document.body.append(createContainerTopImage(), createContainerMenu(), createContainerContent(), createContainerFooter());

let containerTop = document.getElementById('container-top');
let contentDiv = document.getElementById('content');
let containerFooter = document.getElementById('foot-note');
let myButtonMenu = document.getElementById('button1');
let myButtonHistory = document.getElementById('button2');
let myButtonContact = document.getElementById('button3');

// Creation of the Menu page.
myButtonMenu.onclick = () => {
    clearContent();
    contentDiv.append(createMenuPage());
};

// Creation of the History page.
myButtonHistory.onclick = () => {
    clearContent();
    contentDiv.append(createHistoryPage());
};

// Creation of the Contact page.
myButtonContact.onclick = () => {
    clearContent();
    contentDiv.append(createContactPage());
};

// Go back to the main page.
containerTop.onclick = () => {
    document.body.removeChild(contentDiv);
    document.body.insertBefore(createContainerContent(), containerFooter);
    contentDiv = document.getElementById('content');
};


function clearContent() {
    const contentDiv = document.getElementById('content');
    while (contentDiv.lastElementChild) {
        console.log(contentDiv.lastElementChild)
        contentDiv.removeChild(contentDiv.lastElementChild);
    }
};

function createContainerFooter() {
    const newFooter = document.createElement('div');
    newFooter.setAttribute('id', 'foot-note')
    newFooter.classList.add('block');
    const newParag = document.createElement('p');
    newParag.innerHTML = "All rights reserved. 2021";
    newFooter.append(newParag);
    return newFooter;
};

function createContainerContent() {
    const newContainerMenu = document.createElement('div');
    newContainerMenu.setAttribute('id', 'content');
    newContainerMenu.classList.add('block');

    const newItem1 = document.createElement('div');
    newItem1.classList.add('block');
    newItem1.innerHTML = "4";

    const newItem2 = document.createElement('div');
    newItem2.classList.add('block');
    newItem2.innerHTML = "5";

    newContainerMenu.append(newItem1, newItem2);
    return newContainerMenu;
};

function createContainerMenu() {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', 'container-menu')
    newElement.classList.add('block');

    const newMenu1 = document.createElement('div');
    newMenu1.setAttribute('id', 'button1')
    newMenu1.classList.add('buttons');
    newMenu1.innerHTML = "Menu";

    const newMenu2 = document.createElement('div');
    newMenu2.setAttribute('id', 'button2')
    newMenu2.classList.add('buttons');
    newMenu2.innerHTML = "History";

    const newMenu3 = document.createElement('div');
    newMenu3.setAttribute('id', 'button3')
    newMenu3.classList.add('buttons');
    newMenu3.innerHTML = "Contact";

    newElement.append(newMenu1, newMenu2, newMenu3);
    return newElement;
};

function createContainerTopImage() {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', 'container-top')
    newElement.innerHTML = "Picture";
    newElement.classList.add('block');
    return newElement;
};