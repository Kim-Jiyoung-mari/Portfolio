//메인배너
const ani = document.querySelectorAll('.bnr_txt');
console.log(ani);

const mainBnr = new Swiper('.main_bnr',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    on: {
        slideChange: function () {
            for(let i of ani) i.classList.remove('js_bnr')
            ani[this.realIndex].classList.add('js_bnr')
        }
    },
    scrollbar: {
        el: ".main_bnr .swiper-scrollbar",
    },
});

//신상
const newSwiper = new Swiper('.new',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".new_wrap .swiper-scrollbar",
    },
});

// ============================================= 베스트
//전체보기
const bestSwiper = new Swiper('.best1',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".alll .progress .swiper-scrollbar",
    },
});
//라면
const noodleSwiper = new Swiper('.best2',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".noodle .progress .swiper-scrollbar",
    },
});
//오뚜기밥
const riceSwiper = new Swiper('.best3',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".rice .progress .swiper-scrollbar",
    },
});
//스낵
const crackerSwiper = new Swiper('.best4',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".cracker .progress .swiper-scrollbar",
    },
});
//3분
const threeSwiper = new Swiper('.best5',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".three .progress .swiper-scrollbar",
    },
});
//간편
const easySwiper = new Swiper('.best6',{
    autoplay:{
        delay:500000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".easy .progress .swiper-scrollbar",
    },
});

// 베스트리뷰
const reviewSwiper = new Swiper('.review',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".review_wrap .swiper-scrollbar",
    },
});
//베스트탭내용
const bestTab = document.querySelectorAll('.best_wrap .best_tab > div');
const bestTitle = document.querySelectorAll('.best_wrap .item_tab a');
console.log(bestTab,bestTitle);
function bestHide(){
    for(let i of bestTab) i.style.display = 'none';
};

function bestClsReset(){
    for(let i of bestTitle) i.classList.remove('active');
};
bestHide();
bestClsReset();

bestTab[0].style.display = 'block';
bestTitle[0].classList.add('active');

bestTitle.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        bestClsReset();
        target.classList.add('active');

        bestHide();
        bestTab[index].style.display = 'block';

        e.preventDefault();
    })
})


//====================== 오직 오뚜기몰 탭
//전체보기
const onlySwiper = new Swiper('.only1',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".all .progress .swiper-scrollbar",
    },
});
//단독
const singleSwiper = new Swiper('.only2',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".single .progress .swiper-scrollbar",
    },
});
//스낵
const snackSwiper = new Swiper('.only3',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".snack .progress .swiper-scrollbar",
    },
});
//간편식
const simpleSwiper = new Swiper('.only4',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".simple .progress .swiper-scrollbar",
    },
});
//라면
const ramenSwiper = new Swiper('.only5',{
    autoplay:{
        delay:5000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:13,
    scrollbar: {
        el: ".ramen .progress .swiper-scrollbar",
    },
});

//오뚜기몰탭내용
const onlyTab = document.querySelectorAll('.only_wrap .only_tab > div');
const onlyTitle = document.querySelectorAll('.only_wrap .item_tab a');

function onlyHide(){/* 탭 내용 모두 숨기기 */
    for(let i of onlyTab) i.style.display = 'none';
};

function onlyClsReset(){ /* 탭 클래스 초기화 */
    for(let i of onlyTitle) i.classList.remove('active');
}
onlyHide();
onlyClsReset();
/* 초기 화면 보이기 */
onlyTab[0].style.display = 'block';
onlyTitle[0].classList.add('active');

onlyTitle.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        onlyClsReset();
        target.classList.add('active');

        onlyHide();
        onlyTab[index].style.display = 'block';

        e.preventDefault();
    })
})