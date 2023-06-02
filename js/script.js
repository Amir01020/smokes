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
for (let i of masc) {
    let maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
    };
    let mask = IMask(i, maskOptions);
}

//AIzaSyC8vwy2tLXxwXz9HVOtVylxeJvw4YWHBbs
let mtbox = doc.querySelector('.mtbox')

    , filt = doc.querySelectorAll('#filt')

filt.forEach((i) => {
    i.onclick = () => {
        filt.forEach(element => {
            element.classList.remove('active')
        });
        i.classList.add('active')
        if (i.dataset.name == 'чаша') {
            mtbox.classList.add('filt1')
            mtbox.classList.remove('filt2')
            mtbox.classList.remove('filt3')
        } else if (i.dataset.name == 'табак') {
            mtbox.classList.add('filt2')
            mtbox.classList.remove('filt1')
            mtbox.classList.remove('filt3')
        } else {
            mtbox.classList.add('filt3')
            mtbox.classList.remove('filt2')
            mtbox.classList.remove('filt1')
        }
    }

})

let burger = doc.querySelector('.burger')
let navigeyt = doc.querySelectorAll('#navigeyt')
let burgerMenu = doc.querySelector('.burgerMenu')
let menuAct = false
burger.onclick=()=>{
    if (menuAct == false) {
        menuAct = true
        burgerMenu.classList.add('activeMenu')
        burger.src ='./icon/Frame 82 (1).png'
        doc.body.style.overflow = 'hidden'
        burgerMenu.style.opacity = 0
        for (let i = 0; i < navigeyt.length; i++) {
            if (i%2 == 0) {
                navigeyt[i].dataset.aos = 'fade-right'
            }else{

                navigeyt[i].dataset.aos = 'fade-left'
            }
        }
        for(let i of navigeyt){

            
        }
        setTimeout(() => {
            burgerMenu.style.opacity = 1
            for(let i of navigeyt){
                i.dataset.aos = ''
            }
        }, 300);
        
    }else{
        menuAct = false
        
        burger.src ='./icon/Frame 82.png'
        doc.body.style.overflow = 'auto'
        burgerMenu.style.opacity = 0
        setTimeout(() => {
            burgerMenu.style.opacity = 1
            burgerMenu.classList.remove('activeMenu')
        }, 300);
    }
    
}
let bowl = doc.querySelectorAll('#bowl')
let tobacco = doc.querySelectorAll('#tobacco')
function filts(btn) {
    btn.forEach((i)=>{
        i.onclick=()=>{
            for(let item of btn){
                item.classList.remove('grActive')
            }
            i.classList.add('grActive')
        }
    })
}
filts(bowl)
filts(tobacco)