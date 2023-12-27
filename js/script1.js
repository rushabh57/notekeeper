// custom wraning msg problem!
// unpin and pin icon toggle

// differ popup on differ icon-section: the error facing the reson it[The issue you're facing is that the customAlert function is only showing the first error argument passed to it, and not displaying the other arguments.

// The reason for this is that you're creating a new custom-alert-popup element every time the function is called, and appending it to the customAlertContainer element. So, each time the function is called, it creates a new popup and appends it to the container, without removing the previous popups.]

// Constants
const loader = document.querySelector('.loader');

const numbertotalNotes = document.querySelector('.numbertotalNotes');
const numberRbin = document.querySelector('.numberRbin');

const numberCom = document.querySelector('.numberCom');


const userHeadingInput = document.querySelector('#headingText');
const userSummeryInput = document.querySelector('#summryText');
const createNoteBtn = document.querySelector('#createNote');
const noteColections = document.querySelector('.note-collection');
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

let noteId = 0;
const notesArray = [];
const notee = document.querySelectorAll('.note-collection note');
const ImpNoteCollection = document.querySelector('.Impnote-collection');
const ImpNoteContainer = document.querySelector('.impContainer')
const importantNoteBtn = document.querySelector('.imp-btn')

const customAlertContainer = document.querySelector('.custom-alert');

const subFeatures = document.getElementById('subFeatures')

window.addEventListener('load' , ()=> {
    document.body.classList.add('visible');
    loader.classList.add('non');
})



// Time
const date_TDY = document.getElementById('date_TDY');
let time_TDY = document.getElementById('time_TDY');
let curTDY = new Date();
let g_date = curTDY.getDate()
let g_month = (curTDY.getMonth()+1)
let g_year = (curTDY.getFullYear())
let g_minuts = 
time_TDY.innerHTML = ` ${curTDY.toLocaleTimeString()}`


date_TDY.innerText = `${g_date}-${g_month}-${g_year}`;

// Custom Alert Function
function customAlert(errText, errImg, progressBgClr) {
    let popup = document.querySelector('.custom-alert-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.className = 'custom-alert-popup';
        customAlertContainer.append(popup);
    }

    const wraningIcon = document.createElement('img');
    wraningIcon.src = errImg;
    wraningIcon.className = 'warIcon';

    const wraning = document.createElement('p');
    wraning.className = 'warText';
    wraning.innerHTML = errText;

    const progressBar = document.createElement('div');
    progressBar.className = 'CustomAlertprgressLine';
    progressBar.style.background = progressBgClr;

    popup.innerHTML = ''; // Clear previous content
    popup.append(wraningIcon);
    popup.append(wraning);
    popup.append(progressBar);

    customAlertContainer.style.display = 'block';
    setTimeout(() => {
        customAlertContainer.style.display = 'none';
    }, popupAnimationDuration);
}

//  create note function 
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
        noteId++;


        // note create
        const note = document.createElement('div');
        // give class
        note.className = 'note';
        // give id
        note.id = `${noteId}` ;


        // DATE======================================
        // Date Container
        const DT_container = document.createElement('div');
        DT_container.className = 'dateContainer';
        // Note number Box
        const NUM = document.createElement('h5');
        NUM.className = 'Notenum';
        NUM.innerText = `${noteId}`;
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

        const trashcan = document.querySelector('.trashcan');
        const completeWork = document.querySelector('.completeWork');
        const dotEl = document.querySelector('.dot-el');
        // const ImpnoteCollection = document.querySelector('.Impnote-collection')
        noteColections.addEventListener('click' , (e)=> {
            // Done Btn
            if(e.target === doneBtn){

                customAlertContainer.style.display = 'block';
                customAlert(DoneWarningText,DoneWarningIcon,DoneWarningBgClr);
                setTimeout(() => {
                    customAlertContainer.style.display = 'none' ;
                }, popupAnimationDuration);
                
                e.target.parentElement.parentElement.classList.toggle('done');
                e.target.parentElement.parentElement.remove();
                completeWork.append(note);
    
                // Update the number of notes
                noteCounter.innerHTML = `${noteColections.childElementCount}`;
                numberCom.innerHTML = `${completeWork.childElementCount}`;


            }
            // Delete Btn
            else if(e.target === delBtn){
                customAlertContainer.style.display = 'block';
                customAlert(TrashWarningText,TrashWarningIcon,TrashWarningBgClr);
                setTimeout(() => {
                    customAlertContainer.style.display = 'none' ;
                }, popupAnimationDuration);
                e.target.parentElement.parentElement.remove();
                trashcan.append(note);
                // Update the number of notes
                noteCounter.innerHTML = `${noteColections.childElementCount}`;
                numberRbin.innerHTML = `${trashcan.childElementCount}`;   
                e.target.parentElement.parentElement.classList.add('Trash');
            
                delBtn.addEventListener('click' , (e)=> {
                    e.target.parentElement.parentElement.remove();
                    numberRbin.innerHTML = `${trashcan.childElementCount}`;   

                    customAlertContainer.style.display = 'block';
                    customAlert('Deleted',TrashWarningIcon,TrashWarningBgClr);
                    setTimeout(() => {
                        customAlertContainer.style.display = 'none' ;
                    }, popupAnimationDuration);
                    e.target.parentElement.parentElement.remove();
                });  
            }
            // Important Btn
            else if(e.target === importantNoteBtn){
                let impBtnCounter = 0;
                customAlertContainer.style.display = 'block';
                e.target.parentElement.parentElement.classList.toggle('pinned');

                if (e.target.parentElement.parentElement.classList.contains('pinned')) {
                    customAlert(PinWarningText , PinWarningIcon , PinWarningBgClr);
                    setTimeout(() => {
                        customAlertContainer.style.display = 'none';
                    }, popupAnimationDuration);
                    
                    importantNoteBtnImg.src = importantNoteUnpinImg;
                    
    
                    
                    
                }
            
                
                
                else {
                    importantNoteBtnImg.src = importantNotePinImg;
                
                    console.log('remove to imP');


                    customAlert('unpinn' , importantNoteUnpinImg , PinWarningBgClr);
                    setTimeout(() => {
                        customAlertContainer.style.display = 'none';
                    }, popupAnimationDuration);
    
    
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

        // Create an empty array to store the notes
        
        // ...

    // Inside the createNote() function, after creating the note element
    notesArray.push(note);


    }

    console.log('CreatedNote:',notesArray)
};


createNoteBtn.addEventListener('click' , ()=> {
    createNote();
    noteCounter.innerHTML = `${noteColections.childElementCount}`; 
    numbertotalNotes.innerHTML = `${notesArray.length}`;
    // console.log('yay') 

})



