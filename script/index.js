// 스와이퍼 슬라이드
const main = new Swiper('#main',{
    mousewheel:true,
    direction:'vertical',
    behavior:'smooth',
    speed: 1000,
});

const bnrSlide = new Swiper('.design .left .banner',{
    autoplay:{delay:0},
    loop:true,
    speed:3500,
    slidesPerView:3,
    spaceBetween:5,
});

const snsSlide = new Swiper('.design .left .sns',{
    autoplay:{delay:0},
    loop:true,
    speed:4500,
    slidesPerView:3,
    spaceBetween:10,
});

const detailSlide = new Swiper('.design .right .detail',{
    autoplay:{delay:2500,},
    effect:'fade',
    loop:true,
    pagination:{
        el:'.design .swiper-pagination',
        type:'bullets'
    }
})

// =========================== nav 클릭이벤트
const nav = document.querySelectorAll('nav a');
const contact = document.querySelector('.h_right')
const design = document.querySelector('nav li:nth-child(4) a')
console.log(design)

function navRest(){
    for(let i of nav) i.classList.remove('nav_active');
};
navRest();
nav[0].classList.add('nav_active');

nav.forEach((t, i)=>{ 
    t.addEventListener('click',function(e){
        e.preventDefault();
        navRest();
        t.classList.add('nav_active');
        main.slideTo(i, 1000);
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 0);
    })
})

design.addEventListener('click',function(e){ //3행 소개영역으로 이동
    e.preventDefault();
    main.slideTo(5, 1000);
})
contact.addEventListener('click',function(e){ //6행 소개영역으로 이동
    e.preventDefault();
    main.slideTo(6, 1000);
})

//팝업 띄우기
const popup_bg = document.querySelector('.popup_bg');
const bnr = document.querySelectorAll('.banner img');
const sns = document.querySelectorAll('.sns img');
const detail = document.querySelectorAll('.detail img');
const scroll = document.querySelector('.scroll_wrap');
/* console.log(popup_bg, bnr); */

popup_bg.style.display = 'none' // 팝업 숨기기

//================배너 팝업
for(let i of bnr){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        console.log(i);
        
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '900px';
        popup_bg.children[0].style.marginTop = '200px';

        main.mousewheel.disable();
    })
}

//================SNS 팝업
for(let i of sns){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        console.log(i);
        
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '150px';

        main.mousewheel.disable();
    })
}

//================상세페이지 팝업
for(let i of detail){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        console.log(i);
        
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '90px';

        scroll.scrollTo(0,0);

        main.mousewheel.disable();
    })
}

//팝업 닫기
popup_bg.addEventListener('click',()=>{
    popup_bg.style.display = 'none';
    main.mousewheel.enable(); //마우스휠 허용(팝업 숨길 시)
})
