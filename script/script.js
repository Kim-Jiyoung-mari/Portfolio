//썸네일 변경
const thumnail = document.querySelectorAll('.thumnail a img');
const bigImg = document.querySelector('.big_img img');
console.log(thumnail,bigImg);
console.log(thumnail[0].parentElement);

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 bigthum_002.jpg 변경
//클래스명 제거
function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
};

function bigSrc(num){
    return bigImg.src = `./images/bigthum_${num}.jpg`
}

thumnail[0].addEventListener('mouseover',function(){
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList = 'active';
});
thumnail[1].addEventListener('mouseover',function(){
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
});

//주문수량 + 주문 금액
// 초기값 | 주문수량 = 1개 , 주문금액 = 3980원
let price = 3980; //초기 주문 금액
let number = 1; //초기 주문 수량
let totalPrice = 3980; //최종 가격을 저장하는 변수

const item_num = document.querySelector('#amount_num');//수량표시 DOM
const plus = document.querySelector('#plus'); //수량증가버튼 DOM
const minus = document.querySelector('#minus'); //수량감소버튼 DOM
const orderPrice = document.querySelector('.order_price .or_price'); 

console.log(price, number, totalPrice, item_num, plus, minus, orderPrice);

//초기값 설정 : 주문수량 1개 + 주문금액 3980원표시
item_num.value = number;
orderPrice.textContent = price*number;
orderPrice.textContent = Number(price*number).toLocaleString('ko-kr');

//수량 증가버튼 설정
plus.addEventListener('click',()=>{
    number++;
    item_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})

//수량 감소버튼 설정
// 1개 이하 '최소구매수량입니다'
minus.addEventListener('click',()=>{
    number <= 1 ? alert('최소 구매 수량입니다.') :number--;
    item_num.value = number;
    totalPrice = price*number;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr');
})

//배송팝업창 닫기버튼
// 1. 초기값 : 팝업 숨기기
// 2. 배송안내 ! 클릭시
// 3. 팝업창 보이기
// 4. 팝업 내 'X' 클릭시
// 5. 팝업 숨기기

const noticePopup = document.querySelector('.notice_bg');
const deliBtn = document.querySelector('.deli_info');
const closeBtn = document.querySelector('#close');
console.log(noticePopup, deliBtn, closeBtn);

noticePopup.style.display = 'none';
deliBtn.addEventListener('click',()=>{
    noticePopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click',()=>{
    noticePopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})

//장바구니 팝업창
// 1. 초기값 : 팝업숨기기
// 2. 장바구니 버튼 클릭시 
// 3. 장바구니 팝업창 보이기
// 4. 팝업 내 'X' 클릭시
// 5. 팝업 숨기기
const cartPopup = document.querySelector('.cart_bg');
const cartBtn = document.querySelector('.cart');
const cartClose = document.querySelector('#cartclose');
const shoppingBtn = document.querySelector('.shopping');
const moveBtn = document.querySelector('.move');
console.log(cartPopup, cartBtn, cartClose);

cartPopup.style.display = 'none';
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block';
})

cartClose.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
})

shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
})