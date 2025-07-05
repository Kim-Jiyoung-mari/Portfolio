//로그인 탭 내용 변경하기

//초기세팅
//1. "tabC" 탭내용 모두 숨기기 > 함수생성 "tabHide"
//2. 탭내용 1번에 보이기
//3. 탭제목 클래스 초기화 => 함수생성 "tabReset"
//4. 탭제목 1번에 클래스 적용
const tabC = document.querySelectorAll('.login_container > div');
const tabT = document.querySelectorAll('.login_title a');
console.log(tabC,tabT)

function tabHide(){
    for(let i of tabC)i.style.display = 'none';
}

function tabReset(){
    for(let i of tabT) i.classList.remove('active');
}

tabHide();
tabReset();

tabC[0].style.display = 'block';
tabT[0].classList.add('active');

tabT.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        tabReset();
        target.classList.add('active');

        tabHide();
        tabC[index].style.display = 'block';
        e.preventDefault();
    })
})

