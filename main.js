const menuIcon = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const previewContentBg = document.querySelector('.preview-content__bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    sidebar.classList.toggle('change');
    previewContentBg.classList.toggle('surface');
})


const filter = document.querySelector('.filter__img');
const cardsFiler = document.querySelector('.cards-filer__left');

filter.addEventListener('click', () => {
    cardsFiler.classList.toggle('avtive')
});

const accordion = document.querySelectorAll('.accordion-item');

for(item of accordion) {
    item.addEventListener('click', function(){
        if(this.classList.contains('active-accordion')) {
            this.classList.remove('active-accordion');
        } else {
            for(el of accordion) {
                el.classList.remove('active-accordion');
            }
            this.classList.add('active-accordion');
        }
    })
}
