

const text=document.querySelector(".second-text");
const textload=()=>{
    setTimeout(()=>
    {
        text.textContent="Youtuber";
    },0); 
    setTimeout(()=>
    {
        text.textContent="Software Developer";
    },4000);
    setTimeout(()=>
    {
        text.textContent="Web Developer";
    },8000);
    setTimeout(()=>
    {
        text.textContent="UI/UX Designer";
    },12000);
    setTimeout(()=>
    {
        text.textContent="Frontend Developer";
    },16000);
}
textload();
setInterval(textload,20000);
// circleskill-------------------------------------------------------------------------//
const circles=document.querySelectorAll('circle');
circles.forEach( elem=>{
     var dots=elem.getAttribute("data-dots");
     var marked=elem.getAttribute("data-percent");
     var percent=Math.floor(dots * marked/100);
     var points="";
     var rotate=360/dots;


     for(let i=0; i< dots ; i++)
     {
         points+=`<div class="points" style="--i:${i};;--rot:${rotate}deg;"></div>`;
     }
     elem.innerHTML=points;
     const pointsMarked=elem.querySelectorAll('.points');

     for(let i=0; i< percent ; i++)
     {
        pointsMarked[i].classList.add('.marked');
     }
});


//mix it up portfolio  section////////////////////
var mixer=mixitup(".portfolio-gallery");
////Active Menu////////////////////////////////////////////////////
let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop)
    {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);
/////////sticky navbar//////////////////////////////////////////////
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY >50)
})
//another code for toggle///////////////////////////////////////////////////////////////////////////////////////


function clickmenu(){
    document.getElementById("menu_icon").classList.toggle("bx-x");
    document.getElementById("navlist").classList.toggle("open");
}



// Onclickmenu();




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if(entry.isIntersacting)
    {
        entry.target.classList.add("show-items");
    }
    else{
        entry.target.classList.remove("show-items");
    }
});
});

const scrollScale=document.querySelectorAll(".scroll-Scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom=document.querySelectorAll(".scroll-Bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));
 
const scrollTop=document.querySelectorAll(".scroll-Top");
scrollTop.forEach((e1)=>observer.observe(e1));

//circle rating animation /////////////////////////////
const rating=document.getElementsByClassName('rating')[0];
const block=document.getElementsByClassName('block');
for(var i = 1;
    i < 100; i++)
    {
        rating.innerHTML += "<div class= 'block' ></div>";
        block[i].style.transform = "rotate("+3.6 * i + "deg)";
        block[i].style.animationDelay = `$(i/40)s`;
       
        
    }
    const counter=document.querySelector('.counter');
    counter.innerText= 0;
    const target= +counter.getAttribute('data-target');
    const NumberCounter = () =>
    {
        const value= +counter.innerText;
        if(value < target)
    {
        counter.innerText = Math.ceil(value + 1);
        setTimeout(() => 
        {
            NumberCounter()
        },20)
    }
    }
    NumberCounter();
	
	
	
// 	function clickmenu() {
//     let navList = document.getElementById('navlist');
//     navList.classList.toggle('active'); // Ensure your CSS has a class '.active' that shows the menu on small screens
// }

function clickmenu() {
    document.getElementById("navlist").classList.toggle("active");
}