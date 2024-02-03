// let words=document.querySelectorAll(".word");
// words.forEach((word)=>
// {
//     let letters =word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span=document.createElement("span");
//         span.textContent = letter;
//         span.className="letter";
//         word.append(span);

//     });
// });

// let currrentWordIndex=0;
// let maxWordIndex= words.length-1;
// words[currrentWordIndex].style.opacity="0";
// let changetext=()=>
// {
//     let currentword=words[currrentWordIndex];
//     let nextword=currrentWordIndex === maxWordIndex ?words[0]:words[currrentWordIndex + 1];
//     Array.from(currentword.children).forEach((letter,i)=>{
//         setTimeout(()=>
//         {
//             letter.className="letter out";
//         },i * 80);
//     });
//     nextword.style.opacity="1";
//     Array.from(nextword.children).forEach((letter,i)=>
//     {
//         letter.className="letter behind";
//         setTimeout(()=>
//         {
//             letter.className="letter in";
//         },340 + i * 80)
//     });
//     currrentWordIndex=currrentWordIndex === maxWordIndex? 0:currrentWordIndex + 1;
// };
// changetext();
// setInterval(changetext,300);

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
//toggle icon navbar///////////////////////////////////////////

// let menuicon=document.querySelector("#menu-icon");
// let navlist=document.querySelector(".navlist");

// menuicon.onclick = ()=>{
//     menuicon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// };



// window.onscroll = ()=>
// {
//     menuicon.classList.remove("bx-x");
//     navlist.classList.remove("open");

// };




// window.onscroll = ()=>
// {
//     document.getElementById("menu-icon").classList.remove("bx-x");
//     document.getElementsByClassName("navlist").classList.remove("open");

// };

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