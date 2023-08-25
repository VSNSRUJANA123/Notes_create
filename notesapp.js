let bgContainer = document.querySelector('.bg-container');
let newnotesEl = document.querySelector('.notes-add');

let getdata = localStorage.getItem('savedata');

if (getdata) {
    let parseData = JSON.parse(getdata);
    for (let text of parseData) {
        console.log(text);
        createNotes(text);
    }
}





function createNotes(text = '') {
    let divContainer = document.createElement('div');
    divContainer.classList.add('notesContainer');
    divContainer.innerHTML = `<div class="notes">
            <div class="notes-settings">
                <button><i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-solid fa-check tickmark"></i></button>
                <button><i class="fa-solid fa-trash trash"></i></button>
            </div>
            <textarea class="textarea"></textarea>
        </div>`;
    let editEl = divContainer.querySelector('.notes .notes-settings .edit');
    let tickmarkEl = divContainer.querySelector('.notes .notes-settings .tickmark');
    let trashEl = divContainer.querySelector('.notes .notes-settings .trash');
    let textareaEl = divContainer.querySelector('.notes .textarea');
    textareaEl.value = text;
    textareaEl.addEventListener('input', () => {
        storedataLs();
    });
    editEl.onclick = () => {
        editEl.classList.add('tickmark');
        tickmarkEl.classList.remove('tickmark');
        textareaEl.disabled = true;
    };
    tickmarkEl.onclick = () => {
        editEl.classList.remove('tickmark');
        tickmarkEl.classList.add('tickmark');
        textareaEl.disabled = false;
    };
    trashEl.onclick = () => {
        divContainer.remove();
        storedataLs();
    };
    bgContainer.appendChild(divContainer);
}

function storedataLs() {
    let allTextArea = document.querySelectorAll('.notes .textarea');
    console.log('remove');
    let pushData = [];
    console.log('array data:', pushData);
    allTextArea.forEach((text) => {
        console.log('for loop remove::', text.value);
        pushData.push(text.value);
    });
    localStorage.setItem('savedata', JSON.stringify(pushData));
}
newnotesEl.onclick = () => {
    createNotes();
}