const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")
      
/*=============== SHOW MENU ===============*/
// validate if constant exists
if(navToggle)
{
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add("show-menu")
    })
}

/*============== MENU HIDDEN ===============*/
// validate if constant exists
if(navClose)
{
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks =  document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    //when we click on each nav link,we remove the show menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
     //when the scroll is greater than 80 viewport height , add the class scroll header to the tag header
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll" , scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".project-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    projectItems = document.querySelectorAll(".project-item"),
    totalProjectItem = projectItems.length;

    for(let i=0;i<totalFilterBtn;i++){
        filterBtns[i].addEventListener("click",function()
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k =0;k<totalProjectItem;k++){
                if(filterValue === projectItems[k].getAttribute("data-category"))
                {
                    projectItems[k].classList.remove("hide");
                    projectItems[k].classList.add("show");
                }else{
                    projectItems[k].classList.add("hide");
                    projectItems[k].classList.remove("show");
                }

                if(filterValue === "all")
                {
                    projectItems[k].classList.remove("hide");
                    projectItems[k].classList.add("show");
                }
            }

        })
    }

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

//open model
const openThemeModal = () => {
    themeModal.style.display ='grid';
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/

//remove active class from span or font size selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");

    })
}

fontSizes.forEach(size => {
    size.addEventListener('click' , () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        //change the font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;

    })
})

/*===== PRIMARY COLORS =====*/

//remove active class from colors
const changeActiveColorClass =() => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click' , () => {
        let primaryHue;
        changeActiveColorClass();       

        if(color.classList.contains('color-1'))
        {
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')) 
        {
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')) 
        {
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')) 
        {
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')) 
        {
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
        
    })
})

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click' , () => {

    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    window.location.reload();
})

Bg2.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');

    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
})

const form = document.querySelector('.form');
function sendEmail(){
    // console.log("hello");
    const name = document.getElementById('name');
    const from = document.getElementById('em')
    const sub = document.querySelector("#sub");
    const msg = document.querySelector(".message").value;
    // console.log(msg);

    const fullMsg = `Full Name : ${name.value} <br> Email : ${from.value} <br> Subject : ${sub.value} <br> Message : ${msg}`
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "harinisree333@gmail.com",
        Password : "39F88909B60DB4EB6BD4D96FCCB7C71F1DEE",
        To : 'harinisree333@gmail.com',
        From : 'harinisree333@gmail.com',
        Subject : sub.value,
        Body : fullMsg
    }).then(
      message => alert(message)
    )
    .catch((err)=>console.log(err))
}


form.addEventListener(('submit'),(e)=>{
    e.preventDefault();
    
    sendEmail();
})