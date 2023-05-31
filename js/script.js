let doc = document
let heads = doc.querySelector('#heads')
let caunt = doc.querySelector('#caunt')
let oupenScroll = doc.querySelector('.oupenScroll')
doc.body.onscroll = (event) => {
    console.log();
    if (window.scrollY >= caunt.offsetHeight * 3) {

        oupenScroll.classList.add('oupenScroll1')
    } else if (window.scrollY <= caunt.offsetHeight * 3) {
        oupenScroll.classList.remove('oupenScroll1')

    }
    if (window.scrollY >= caunt.offsetHeight * 2) {
        heads.style.opacity = 0

    } else if (window.scrollY <= caunt.offsetHeight * 2) {

        heads.style.opacity = 1
    }

}
let masc = document.querySelectorAll('#selector');
for (let i of masc){
    let maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
    };
    let mask = IMask(i, maskOptions);
}

//AIzaSyC8vwy2tLXxwXz9HVOtVylxeJvw4YWHBbs
let mtbox = doc.querySelector('.mtbox')

,filt = doc.querySelectorAll('#filt')

filt.forEach((i)=>{
    i.onclick=()=>{
        filt.forEach(element => {
            element.classList.remove('active')
        });
        i.classList.add('active')
        if (i.dataset.name == 'чаша') {
            mtbox.classList.add('filt1')
            mtbox.classList.remove('filt2')
            mtbox.classList.remove('filt3')
        }else if (i.dataset.name == 'табак') {
            mtbox.classList.add('filt2')
            mtbox.classList.remove('filt1')
            mtbox.classList.remove('filt3')
        }else{
            mtbox.classList.add('filt3')
            mtbox.classList.remove('filt2')
            mtbox.classList.remove('filt1')
        }
    }
    
})