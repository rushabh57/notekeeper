// custom wraning msg problem!
// unpin and pin icon toggle
// differ popup on differ icon-section


const userHeadingInput = document.querySelector('#headingText');
const userSummeryInput = document.querySelector('#summryText');
const createNoteBtn = document.querySelector('#createNote');
const noteColections = document.querySelector('.note-collection');


// c
const date_TDY = document.getElementById('date_TDY');
let time_TDY = document.getElementById('time_TDY');
let curTDY = new Date();
let g_date = curTDY.getDate()
let g_month = (curTDY.getMonth()+1)
let g_year = (curTDY.getFullYear())
let g_minuts = 
time_TDY.innerHTML = ` ${curTDY.toLocaleTimeString()}`


date_TDY.innerText = `${g_date}-${g_month}-${g_year}`;
// ================= custom alert
const customAlertContainer = document.querySelector('.custom-alert');

// const customalertLineColor = document.querySelector('.CustomAlertprgressLine');


const popupAnimationDuration=2000;

const emptyWarningBgClr = '#556d2ff1';
const emptyWarningText = 'please fill both fields';
const emptyWarningIcon = './icons/alert.png';

const DoneWarningBgClr = 'rgb(118, 255, 76)';
const DoneWarningText = 'move to done work';
const DoneWarningIcon = './icons/thumbs-up.png';

const TrashWarningBgClr = 'rgb(254, 94, 94)';
const TrashWarningText = 'move to recycle bin';
const TrashWarningIcon = './icons/trash-2.png';

const PinWarningBgClr = 'rgb(255, 231, 76)';
const PinWarningText = 'Pinned';
const PinWarningIcon = './icons/pin.png';




// 
function customAlert(errText, errImg, progressBgClr){

    const popup = document.createElement('div');
    popup.className = 'custom-alert-popup';
    
    const wraningIcon = document.createElement('img');
    wraningIcon.src = errImg;
    wraningIcon.className = 'warIcon';
    
    const wraning = document.createElement('p');
    wraning.className = 'warText';
    
    wraning.innerHTML = errText;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'CustomAlertprgressLine';
    progressBar.style.background = progressBgClr;
    
    popup.append(wraningIcon)
    popup.append(wraning)
    popup.append(progressBar)
    customAlertContainer.append(popup);
}

//  create note fun =================
function createNote(){
    
    const heading = userHeadingInput.value;
    const summery = userSummeryInput.value;
    if(heading == '' || summery == ''){
        
        customAlert(emptyWarningText,emptyWarningIcon,emptyWarningBgClr);
        customAlertContainer.style.display = 'block';
        setTimeout(() => {
            customAlertContainer.style.display = 'none' ;
        }, popupAnimationDuration);
    }

else{



    // note create
    const note = document.createElement('div');
    // give class
    note.className = 'note';
    // give id

    const ID = Math.floor(Math.random()* 100 + 1);
    note.id = `${ID}` ;


// DATE======================================
    // Date Container
    const DT_container = document.createElement('div');
    DT_container.className = 'dateContainer';
    // Note number Box
    const NUM = document.createElement('h5');
    NUM.className = 'Notenum';
    NUM.innerText = `${ID}`;
    // Current Date / month / year
    const date = document.createElement('span');
    date.className = 'dateContainer'
    date.className = 'dateTag';

    date.innerText =`${g_date}-${g_month}-${g_year}`;
    
    DT_container.append(NUM)
    DT_container.append(date)
// DATE======================================

// Heading & summry's
    const h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerText = heading;
    const pHolder = document.createElement('div');
    pHolder.className = 'summry-holder';
    const p = document.createElement('p');
    p.className = 'summry';
    p.innerText = summery;
    pHolder.append(p);


    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    // DELETE BTN CODE====================
    const delBtn = document.createElement('button');
    const delBtnImg = document.createElement('img');
    const delImg = './icons/x.png';
    delBtnImg.src = `${delImg}`;
    delBtn.classList.add('delete-btn');
    
    // Done BTN CODE====================
    const doneBtn = document.createElement('button')
    const doneBtnImg = document.createElement('img');
    const doneImg = './icons/check.png';
    doneBtnImg.src = `${doneImg}`;
    doneBtn.classList.add('done-btn');

    // Important BTN CODE====================
    const importantNoteBtn = document.createElement('button');
    const importantNoteBtnImg = document.createElement('img');
    const importantNotePinImg = './icons/pin.png';
    const importantNoteUnpinImg = './icons/unpin.png';
    importantNoteBtnImg.src = `${importantNotePinImg}`;
    importantNoteBtn.classList.add('imp-btn');

    noteColections.addEventListener('click' , (e)=> {
        
        if(e.target === doneBtn){
            customAlertContainer.style.display = 'block';
            customAlert(DoneWarningText,DoneWarningIcon,DoneWarningBgClr);
            setTimeout(() => {
                customAlertContainer.style.display = 'none' ;
            }, popupAnimationDuration);
               
            e.target.parentElement.parentElement.classList.toggle('done');

         }
        else if(e.target === delBtn){
            
            customAlertContainer.style.display = 'block';
            customAlert(TrashWarningText,TrashWarningIcon,TrashWarningBgClr);
            setTimeout(() => {
                customAlertContainer.style.display = 'none' ;
            }, popupAnimationDuration);
            e.target.parentElement.parentElement.remove();
        }
        else if(e.target === importantNoteBtn){
            customAlertContainer.style.display = 'block';
            customAlert(PinWarningText , PinWarningIcon , PinWarningBgClr);
            setTimeout(() => {
                customAlertContainer.style.display = 'none';
            }, popupAnimationDuration);
            e.target.parentElement.parentElement.classList.toggle('pinned');
         
            if(true){
                importantNoteBtnImg.src = `${importantNoteUnpinImg}`;
            } 

            
          
        }
    })


    // p.append(note);
    noteColections.append(note)
    note.append(DT_container);
    note.append(h2);
    note.append(pHolder);
    btnContainer.append(delBtn);
    delBtn.append(delBtnImg)
    btnContainer.append(doneBtn)
    doneBtn.append(doneBtnImg)
    note.append( btnContainer);
    btnContainer.append(importantNoteBtn);
    importantNoteBtn.append(importantNoteBtnImg)

    userHeadingInput.value = '';
    userSummeryInput.value = '';


}



}
// Click EVENT for create note
// const noteCounter = document.getElementById('noteCounter');
// const notee = document.querySelectorAll('.note-collection note');
createNoteBtn.addEventListener('click' , ()=> {
    console.log('yay') 
    createNote();
})
// noteCounter.innerHTML = `${notee.length}`; 


// const emptyNoteArray = [...notee]
