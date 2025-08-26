// 스와이퍼 슬라이드
const main = new Swiper('#main',{
    mousewheel:true,
    direction:'vertical',
    behavior:'smooth',
    speed: 1000,
    on: {
        slideChangeTransitionEnd: function(){
            for(let i of nav) i.classList.remove('nav_active')
            nav[this.activeIndex].classList.add('nav_active')
            setTimeout(()=>{
                ScrollTrigger.refresh();
            },0);
        },
    },
});

const bnrSlide = new Swiper('.design .left .banner',{
    autoplay:{delay:0},
    loop:true,
    speed:3500,
    breakpoints:{
        1400:{slidesPerView:3, direction: 'horizontal'}, /* => 화면 너비 1024 이상 시 2개 표시 (1400~max) */
        1024:{slidesPerView:1, direction: 'vertical'}, /* => 화면 너비 1024 이상 시 2개 표시 (1024~1400) */
        480:{slidesPerView:1, direction: 'vertical'}, /* => 화면 너비 480 이상 시 2개 표시 (480~1024) */
    },
});

//프로젝트 슬라이드
const webProject = new Swiper('.web',{
    autoplay:{delay:4000,},
    loop: true,
    scrollbar: {
        el: '.web .swiper-scrollbar',
    },
})

//디자인 슬라이드
const snsSlide = new Swiper('.design .left .sns',{
    autoplay:{delay:0},
    loop:true,
    speed:4500,
    slidesPerView:3,
    breakpoints:{
        1400:{slidesPerView:3,},/* => 화면 너비 1024 이상 시 2개 표시 (1400~max) */
        1024:{slidesPerView:2,},/* => 화면 너비 1024 이상 시 2개 표시 (1024~1400) */
        500:{slidesPerView:2,}, /* => 화면 너비 480 이상 시 2개 표시 (1024~500) */
        430:{slidesPerView:1,}, /* => 화면 너비 480 이상 시 2개 표시 (1024~500) */
    },
});

const detailSlide = new Swiper('.design .right .detail',{
    autoplay:{delay:2500,},
    // effect:'fade',
    loop:true,
    breakpoints:{
        1400:{slidesPerView:1,},/* => 화면 너비 1024 이상 시 1개 표시 (1400~max) */
        480:{slidesPerView:3,}, /* => 화면 너비 480 이상 시 3개 표시 (500~1400) */
        429:{slidesPerView:1,}, /* => 화면 너비 480 이상 시 1개 표시 (1024~500) */
    },
    pagination:{
        el:'.design .swiper-pagination',
        type:'bullets'
    }
})


// =========================== nav 클릭이벤트
const nav = document.querySelectorAll('nav a');
const contact = document.querySelector('.h_right')
const design = document.querySelector('nav li:nth-child(5) a')
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

design.addEventListener('click',function(e){ //4행 디자인 소개영역으로 이동
    e.preventDefault();
    main.slideTo(4, 1000);
});

contact.addEventListener('click',function(e){ //5행 연락 소개영역으로 이동
    e.preventDefault();
    main.slideTo(5, 1000);
});

//팝업 띄우기
const popup_bg = document.querySelector('.popup_bg');
const bnr = document.querySelectorAll('.banner img');
const sns = document.querySelectorAll('.sns img');
const detail = document.querySelectorAll('.detail img');
const scroll = document.querySelector('.scroll_wrap');

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
