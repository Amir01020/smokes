let doc = document
let heads = doc.querySelector("#heads")
let caunt = doc.querySelector("#caunt")
let arrTabac = [
    {
        "arr": ["Spectrum", "Daily hookah", "endorphin", "Fumari", "Element"],
        "id": "easy"
    }, {
        "arr": ["sebero", "Musthave", "Darkside shot", "Black Burn", "Peter Ralf", "Chabacco", "Brusko", "Duft", "Северный ветер", "Darkside shot"],
        "id": "average"
    }, {
        "arr": ["Black Burn", "Darkside", "Bonche", "Peter Ralf"],
        "id": "strong"
    },

]
let myMod = doc.querySelector('#myMod')
let myModText = doc.querySelector('#myModText')
let cartcriaytdata = doc.querySelector("#cartcriaytdata")
function cartcriayt(name, tabac, cap, prise, id, ugol, img) {
    const div1 = document.createElement("div");
    div1.classList.add("swiper-slide");

    const div2 = document.createElement("div");
    div2.classList.add("content");

    const div3 = document.createElement("div");
    div3.classList.add("imgLog");

    const img1 = document.createElement("img");
    img1.src = "./icon/Vector (1).svg";
    img1.alt = "";
    div3.appendChild(img1);

    const div4 = document.createElement("div");
    div4.classList.add("img");

    const img2 = document.createElement("img");
    img2.src = img;
    img2.alt = "";
    div4.appendChild(img2);

    const h3 = document.createElement("h3");
    h3.textContent = name;
    div4.appendChild(h3);

    const div5 = document.createElement("div");
    div5.classList.add("text");

    const p1 = document.createElement("p");
    p1.textContent = "Количество:";
    div5.appendChild(p1);

    const span1 = document.createElement("span");
    span1.textContent = cap;
    div5.appendChild(span1);

    const div6 = document.createElement("div");
    div6.classList.add("text");

    const p2 = document.createElement("p");
    p2.textContent = "Уголь:";
    div6.appendChild(p2);

    const span2 = document.createElement("span");
    span2.textContent = ugol;
    div6.appendChild(span2);

    const div7 = document.createElement("div");
    div7.classList.add("text");

    const div8 = document.createElement("div");
    div8.classList.add("text");

    const p4 = document.createElement("p");
    p4.textContent = "Табак:";
    div8.appendChild(p4);

    const span4 = document.createElement("span");
    span4.textContent = tabac;
    div8.appendChild(span4);

    const div9 = document.createElement("div");
    div9.classList.add("text");



    const div10 = document.createElement("div");
    div10.classList.add("sum");

    const h32 = document.createElement("h3");
    h32.textContent = prise;
    div10.appendChild(h32);

    const button = document.createElement("button");
    button.dataset.id = id
    button.textContent = "Заказть";
    button.id = "btnShop"
    div10.appendChild(button);

    div2.appendChild(div3);
    div2.appendChild(div4);
    div2.appendChild(div5);
    div2.appendChild(div6);
    div2.appendChild(div7);
    div2.appendChild(div8);
    div2.appendChild(div9);
    div2.appendChild(div10);

    div1.appendChild(div2);
    cartcriaytdata.append(div1)
}
let myModFunc = (text) => {
    myModText.innerHTML = ''
    myMod.style.display = 'flex'
    myModText.innerHTML = text
    myMod.style.opacity = 0
    setTimeout(() => {
        myMod.style.opacity = 1
    }, 500);
    setTimeout(() => {
        myMod.style.opacity = 0
        setTimeout(() => {
            myMod.style.display = 'none'
        }, 500);
    }, 2000);
}

let oupenScroll = doc.querySelector(".oupenScroll")
let comentBoxdata = doc.querySelector(".comentBoxdata")
function commentcreaytdata(name, comments, star, id) {
    let arr = ["./icon/User-98-1.png", "./icon/User-98-2.png", "./icon/User-98.png"]
    let num = Math.floor(Math.random() * 3)
    const slide = document.createElement("div");
    slide.dataset.id = id
    slide.classList.add("swiper-slide");
    const comment = document.createElement("div");
    comment.classList.add("myComent");
    const block1 = document.createElement("div");
    block1.classList.add("block");
    const img = document.createElement("div");
    img.classList.add("img");
    const imgSrc = document.createElement("img");
    imgSrc.setAttribute("src", arr[num]);
    img.appendChild(imgSrc);
    const text = document.createElement("div");
    text.classList.add("text");
    const h4 = document.createElement("h4");
    h4.textContent = name;
    text.appendChild(h4);

    const status = document.createElement("div");
    status.classList.add("status");
    for (let i = 0; i < 5; i++) {
        const imgStatus = document.createElement("img");
        if (i + 1 <= star) {
            imgStatus.setAttribute("src", "./icon/paginationStatus.png");
        } else {
            imgStatus.setAttribute("src", "./icon/paginationStatusActive.png");
        }
        status.appendChild(imgStatus);
    }
    text.appendChild(status);

    block1.appendChild(img);
    block1.appendChild(text);

    const block2 = document.createElement("div");
    block2.classList.add("block");

    const p = document.createElement("p");
    p.textContent = comments;
    block2.appendChild(p);
    comment.appendChild(block1);
    comment.appendChild(block2);
    slide.appendChild(comment);
    comentBoxdata.append(slide)
}

let masc = document.querySelectorAll("#selector");
for (let i of masc) {
    let maskOptions = {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
    };
    let mask = IMask(i, maskOptions);
}

//AIzaSyC8vwy2tLXxwXz9HVOtVylxeJvw4YWHBbs
let mtbox = doc.querySelector(".mtbox")

    , filt = doc.querySelectorAll("#filt")

filt.forEach((i) => {
    i.onclick = () => {
        filt.forEach(element => {
            element.classList.remove("active")
        });
        i.classList.add("active")
        if (i.dataset.name == "чаша") {
            mtbox.classList.add("filt1")
            mtbox.classList.remove("filt2")
            mtbox.classList.remove("filt3")
        } else if (i.dataset.name == "табак") {
            mtbox.classList.add("filt2")
            mtbox.classList.remove("filt1")
            mtbox.classList.remove("filt3")
        } else {
            mtbox.classList.add("filt3")
            mtbox.classList.remove("filt2")
            mtbox.classList.remove("filt1")
        }
    }

})

let burger = doc.querySelector(".burger")
let navigeyt = doc.querySelectorAll(".navigeyt")
let burgerMenu = doc.querySelector(".burgerMenu")
let menuAct = false
burger.onclick = (event) => {
    event.preventDefault()
    if (menuAct == false) {
        menuAct = true
        burgerMenu.classList.add("activeMenu")
        burger.src = "./icon/Frame 82 (1).png"
        doc.body.style.overflow = "hidden"
        burgerMenu.style.opacity = 0
        for (let i = 0; i < navigeyt.length; i++) {
            if (i % 2 == 0) {
                navigeyt[i].dataset.aos = "fade-right"
            } else {

                navigeyt[i].dataset.aos = "fade-left"
            }
        }

        setTimeout(() => {
            burgerMenu.style.opacity = 1
            for (let i of navigeyt) {
                i.dataset.aos = ""
            }
        }, 300);

    } else {
        menuAct = false

        burger.src = "./icon/Frame 82.png"
        doc.body.style.overflow = "auto"
        burgerMenu.style.opacity = 0
        for (let i = 0; i < navigeyt.length; i++) {
            if (i % 2 == 0) {
                navigeyt[i].dataset.aos = "fade-right"
            } else {

                navigeyt[i].dataset.aos = "fade-left"
            }
        }
        setTimeout(() => {
            burgerMenu.style.opacity = 1
            burgerMenu.classList.remove("activeMenu")
        }, 300);
    }

}
let postObj = {
    cap: '',
    tabak: '',
    userName: '',
    siti: '',
    phone: ''
}
let bowl = doc.querySelectorAll("#bowl")
let tobacco = doc.querySelectorAll("#tobacco")

bowl.forEach((i) => {
    i.onclick = () => {
        for (let item of bowl) {
            item.classList.remove("grActive")
        }
        i.classList.add("grActive")

        postObj.cap = i.dataset.number
        if (i.dataset.number == 'false') {
            postObj.cap = 'фруктовая чаша'
        }


    }
})
tobacco.forEach((i) => {
    i.onclick = () => {
        for (let item of tobacco) {
            item.classList.remove("grActive")
        }
        i.classList.add("grActive")
        postObj.tabak = i.dataset.tabak
    }
})
let userNameShops = doc.querySelector('.userNameShops')
let userPhoneShop = doc.querySelector('.userPhoneShop')
let sity = doc.querySelectorAll('.sity')
let userShop = doc.querySelector('#userShop')

//POST gmail//////////////////////////////////////////////////////////////////////
let btnPostGmail = doc.querySelector('.btnPostGmail')
userShop.onclick = () => {
    sity.forEach((i) => {
        if (i.checked == true) {
            postObj.siti = i.dataset.sity
        }

    })
    if (userNameShops.value == '' || userPhoneShop.value == '') {
        myModFunc('Пожалуйсто <br> заполните все поля')
    } else if (userNameShops.value !== '' && userPhoneShop.value !== '') {
        postObj.phone = userPhoneShop.value
        postObj.userName = userNameShops.value
        myModFunc('Срасибо за <br> вашь  заказ')
        
    }
}
let commentModl = doc.querySelector(".commentModl")
let comentsForm = doc.querySelector(".comentsForm")
let commentBlock = doc.querySelector("#commentBlock")
let close = doc.querySelector(".close")
comentsForm.onclick = () => {
    commentModl.classList.add("commentModlActive")
    doc.body.style.overflow = "hidden"
    commentModl.style.opacity = 0
    commentBlock.dataset.aos = "zoom-out-down"
    setTimeout(() => {
        commentModl.style.opacity = 1

    }, 300);
    setTimeout(() => {

        commentBlock.dataset.aos = ""
    }, 500);
}
function creaytdata() {
    axios.get("https://645d2fb3250a246ae319f640.mockapi.io/smokeArr").then(res => {

        let myArr = res.data
        for (let i of myArr) {
            commentcreaytdata(i.userName, i.usreComment, i.star, i.id)
        }
    })
}
close.onclick = () => {

    doc.body.style.overflow = "auto"
    commentModl.style.opacity = 0
    commentBlock.dataset.aos = "zoom-out-up"
    setTimeout(() => {
        commentModl.classList.remove("commentModlActive")
        commentModl.style.opacity = 1
    }, 300);
}
let obj = {
    userName: "",
    phone: "",
    usreComment: "",
    star: ""
}
let dataStars = doc.querySelectorAll("#dataStars")
let userName = doc.querySelector("#userName")
let phone = doc.querySelector("#phone")
let usreComment = doc.querySelector("#usreComment")
let databas = doc.querySelector("#databas")
dataStars.forEach((i) => {
    i.onclick = () => {
        obj.star = i.dataset.num
        for (let item of dataStars) {
            if (item.dataset.num <= i.dataset.num) {
                item.src = './icon/paginationStatus.png'
            } else {
                item.src = './icon/paginationStatusActive.png'
            }
        }
    }
})
function postdata(obj) {
    axios.post("https://645d2fb3250a246ae319f640.mockapi.io/smokeArr", obj)
}
databas.addEventListener("click", () => {
    if (userName.value !== "" && phone.value !== "" && usreComment.value !== "" && obj.star !== "") {
        comentBoxdata.innerHTML = ""
        obj.userName = userName.value
        obj.phone = phone.value
        obj.usreComment = usreComment.value
        postdata(obj)
        doc.body.style.overflow = "auto"
        commentModl.style.opacity = 0
        commentBlock.dataset.aos = "zoom-out-up"
        setTimeout(() => {
            commentModl.classList.remove("commentModlActive")
            commentModl.style.opacity = 1
        }, 300);
    } else {
        alert("заполните всё пожалуйста")
    }
    setTimeout(() => {
        creaytdata()
    }, 500);

})
creaytdata()
let navegeyt = doc.querySelectorAll("#navegeyt")
let praiyce = doc.querySelector("#praiyce")
let com = doc.querySelector("#com"), coma = doc.querySelector("#coma"), yakor = doc.querySelector("#yakor")
let userCom = doc.querySelector("#userCom"), anchorComment = doc.querySelector("#anchorComment")
    , questionsAnchor = doc.querySelector("#questionsAnchor")
let question = doc.querySelector(".question")
function anchor(btn, cotainer) {
    btn.onclick = (event) => {
        event.preventDefault()
        scroll(0, cotainer.offsetTop - 60)

    }
}
let myquestion = doc.querySelector('#myquestion')
let fffffffff = doc.querySelector('#fffffffff')
anchor(com, praiyce)
anchor(fffffffff, praiyce)
anchor(coma, yakor)
anchor(userCom, anchorComment)
anchor(questionsAnchor, question)
navegeyt.forEach((i) => {
    i.onclick = (event) => {
        event.preventDefault()

        if (i.dataset.names == "Акции") {
            scroll(0, yakor.offsetTop - 60)

        } else if (i.dataset.names == "Отзывы") {
            scroll(0, anchorComment.offsetTop - 60)

        } else if (i.dataset.names == "Вапросы") {
            scroll(0, question.offsetTop - 60)

        } else if (i.dataset.names == "Услуги") {
            scroll(0, praiyce.offsetTop - 60)

        } else if (i.dataset.names == "Блог") {
            scroll(0, myquestion.offsetTop - 60)

        }
        for (let item of navegeyt) {
            item.classList.remove("active")
        }
        i.classList.add("active")
        menuAct = false

        burger.src = "./icon/Frame 82.png"
        doc.body.style.overflow = "auto"
        burgerMenu.style.opacity = 0
        for (let i = 0; i < navigeyt.length; i++) {
            if (i % 2 == 0) {
                navigeyt[i].dataset.aos = "fade-right"
            } else {

                navigeyt[i].dataset.aos = "fade-left"
            }
        }
        setTimeout(() => {
            burgerMenu.style.opacity = 1
            burgerMenu.classList.remove("activeMenu")
        }, 300);

    }
})
let opshen = doc.querySelector("#opshen")
let gridFil = doc.querySelectorAll('#gridFil')
let gridbul = false
opshen.onclick = () => {
    if (gridbul == false) {
        opshen.innerHTML = 'Скрыть'
        gridbul = true

        for (let i of gridFil) {
            i.classList.add('gridFilActive')

        }

    } else if (gridbul == true) {
        for (let i of gridFil) {
            i.classList.remove('gridFilActive')
        }
        opshen.innerHTML = 'Показать <br> больше'
        gridbul = false
    }

}
doc.body.onscroll = () => {
    const offset = caunt.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= offset * 3) {
        oupenScroll.classList.add("oupenScroll1")
    } else if (scrollY <= offset * 3) {
        oupenScroll.classList.remove("oupenScroll1")
    }

    heads.style.opacity = scrollY >= offset * 2 ? 0 : 1;

    for (let i of navegeyt) {

        if (i.dataset.names == "Услуги" && scrollY >= yakor.offsetTop - 60) {
            navegeyt.forEach(item1 => item1.classList.remove("active"));
            i.classList.add("active");
        } else if (i.dataset.names == "Отзывы" && scrollY >= anchorComment.offsetTop - 60) {
            navegeyt.forEach(item1 => item1.classList.remove("active"));
            i.classList.add("active");
        } else if (i.dataset.names == "Вапросы" && scrollY >= question.offsetTop - 60) {
            navegeyt.forEach(item1 => item1.classList.remove("active"));
            i.classList.add("active");
        }

    }
}
false

let shopModal = doc.querySelector('.shopModal'), closes = doc.querySelector('#closes')
axios.get("https://645d2fb3250a246ae319f640.mockapi.io/cartArr").then(res => {
    res.data.forEach(async (i) => {
        cartcriayt(i.name, i.tabac, i.cap, i.prise, i.id, i.ugol, i.img)
    });
    let btnShop = doc.querySelectorAll("#btnShop")
    btnShop.forEach((i) => {
        i.onclick = () => {
            shopModal.classList.toggle('shopModalActive')
            shopModal.classList.add("shopModalActive")
            doc.body.style.overflow = "hidden"
            shopModal.style.opacity = 0
            shopModal.dataset.aos = "zoom-out-down"
            btnPostGmail.dataset.id = i.dataset.id
            setTimeout(() => {
                shopModal.style.opacity = 1

            }, 300);
            setTimeout(() => {

                shopModal.dataset.aos = ""
            }, 500);
        }
    })

})
closes.onclick = () => {

    doc.body.style.overflow = "auto"
    shopModal.style.opacity = 0
    shopModal.dataset.aos = "zoom-out-up"
    setTimeout(() => {
        shopModal.classList.remove("shopModalActive")
        shopModal.style.opacity = 1
    }, 300);
}

let numberCaunt = doc.querySelector('.numberCaunt')
let arove = doc.querySelectorAll('.arove')
let num1 = 1
for (let i of arove) {
    i.onclick = () => {
        if (i.dataset.id == '+') {
            num1 += 1
            if (num1 >= 6) {
                num1 = 6
            }
            numberCaunt.innerHTML = num1
        } else {
            num1 -= 1
            if (num1 <= 1) {
                num1 = 1
            }
            numberCaunt.innerHTML = num1
        }
        i.dataset.number = num1
    }

}


///POST gmail//////////////////////////////////////////////
let postShops = doc.querySelector('.postShops')
let postShops1 = doc.querySelector('.postShops1')
let shopsPost = doc.querySelectorAll('.shopsPost')
let newOrder = {

}
btnPostGmail.onclick = () => {
    shopsPost.forEach((i) => {
        if (i.checked == true) {
            newOrder.siti = i.dataset.sity
        }
    })
    if (postShops.value !== '' && postShops1.value !== '') {
        newOrder.phone = postShops.value
        newOrder.userName = postShops1.value
        newOrder.order = btnPostGmail.dataset.id
        doc.body.style.overflow = "auto"
        shopModal.style.opacity = 0
        shopModal.dataset.aos = "zoom-out-up"
        setTimeout(() => {
            shopModal.classList.remove("shopModalActive")
            shopModal.style.opacity = 1
        }, 300);
        myModFunc('Срасибо за <br> вашь  заказ ')
    } else {
        myModFunc('Пожалуйсто <br> заполните все поля  ')
    }
}