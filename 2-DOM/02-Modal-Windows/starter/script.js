
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click', function (){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
const addHidden = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeModal.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        addHidden();
    }
});

