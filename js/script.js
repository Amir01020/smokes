let doc = document

let caunt = doc.querySelector('#caunt')
let oupenScroll = doc.querySelector('.oupenScroll')
doc.body.onscroll=(event)=>{
    console.log( );
    if (window.scrollY >= caunt.offsetHeight*2) {
        
        oupenScroll.classList.add('oupenScroll1')
    }else if (window.scrollY <= caunt.offsetHeight*2){
        oupenScroll.classList.remove('oupenScroll1')
    }

}