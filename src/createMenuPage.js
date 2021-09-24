export default function createMenuPage() {
    const contentDiv = document.createElement('span');


    let newMenuItem = document.createElement('div');
    newMenuItem.setAttribute('id', 'item-menu1');
    newMenuItem.classList.add('item-menu');
    newMenuItem.innerHTML = "Food 1";

    contentDiv.append(newMenuItem);

    newMenuItem = document.createElement('div');
    newMenuItem.setAttribute('id', 'item-menu2');
    newMenuItem.classList.add('item-menu');
    newMenuItem.innerHTML = "Food 2";

    contentDiv.append(newMenuItem);

    newMenuItem = document.createElement('div');
    newMenuItem.setAttribute('id', 'item-menu3');
    newMenuItem.classList.add('item-menu');
    newMenuItem.innerHTML = "Food 3";

    contentDiv.append(newMenuItem);

    newMenuItem = document.createElement('div');
    newMenuItem.setAttribute('id', 'item-menu4');
    newMenuItem.classList.add('item-menu');
    newMenuItem.innerHTML = "Food 4";

    contentDiv.append(newMenuItem);

    return contentDiv;
}