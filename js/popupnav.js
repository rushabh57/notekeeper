const user_cd = document.querySelector('.user-cd');
const userProfile = document.querySelector('.user-profile');
const userDeleteNoteBox = document.querySelector('.user-deleteNoteBox');
const userDoneNoteBox = document.querySelector('.user-doneNoteBox');

const popupDeleteNoteBox = document.querySelector('.popup-DeleteNoteBox')
const popupUserprofile = document.querySelector('.popup-userprofile')
const popupDoneNoteBox = document.querySelector('.popup-DoneNoteBox')
const closeBtn = document.querySelectorAll('.close');


// const cuppopups = document.querySelectorAll('.cup');

// function emptyBox(emptyConName) {
//   const empContainer = document.createElement('div');
//   empContainer.className = 'empCOn';

//   const empImg = document.createElement('img');
//   empImg.src = './img/38471738-removebg-preview.png';
//   empImg.className = 'empCOnImg';

//   const emph2 = document.createElement('h2');
//   emph2.className = 'empCOnText';
//   emph2.innerHTML = `No items in ${emptyConName} !!`;

//   empContainer.appendChild(emph2);
//   empContainer.appendChild(empImg);

//   cuppopups.forEach(cup => {
//     if (cup) {
//       cup.append(empContainer);
//     }
//   });
// }
user_cd.addEventListener('click' , (e)=> {

const body = document.body;

    
    if(e.target == userProfile){
        popupUserprofile.style.visibility = 'visible'
        popupUserprofile.style.right = '0'

        popupDoneNoteBox.style.right = '-100%'
        popupDoneNoteBox.style.visibility = ' hidden'
        popupDeleteNoteBox.style.right = '-100%'
        popupDeleteNoteBox.style.visibility = 'hidden'


    }
    else if(e.target == userDeleteNoteBox){
        popupDeleteNoteBox.style.right = '0';
        popupDeleteNoteBox.style.visibility = ' visible';

        popupUserprofile.style.visibility = 'hidden';
        popupUserprofile.style.right = '-100%';
        popupDoneNoteBox.style.right = '-100%';
        popupDoneNoteBox.style.visibility = ' hidden';
        
            if (noteColections.childElementCount > 0) {
                // The container has child elements
                // Add your code here
            } else {
                
                // The container does not have any child elements
                // Add your code here
                // emptyBox('Trash can');
            }
    }
    else if(e.target == userDoneNoteBox){
        popupDeleteNoteBox.style.right = '-100%';
        popupDoneNoteBox.style.right = '0';
        
        popupUserprofile.style.visibility = 'hidden';
        popupUserprofile.style.right = '-100%';
        popupDeleteNoteBox.style.visibility = ' hidden';
        popupDoneNoteBox.style.visibility = 'visible';

        if (noteColections.childElementCount > 0) {
            // The container has child elements
            // Add your code here
        } else {
            
            // The container does not have any child elements
            // Add your code here
            // emptyBox('Complete work');
        }
    }

})
closeBtn.forEach(closeB => {
closeB.addEventListener('click' , (e)=> {
    console.log('close')
    closeB.parentElement.style.visibility = ' hidden';
    closeB.parentElement.style.right = '-100%';
})
})
    
