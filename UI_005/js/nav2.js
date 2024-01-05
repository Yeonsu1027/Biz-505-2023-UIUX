// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기

// nav_list 는 dom 객체를 여러개 가진 list(type) 이된다.
const nav_list = document.querySelectorAll("li.main_nav"); // 저요소가 있는 3개를 모두 선택하라
// const nav_login = document.querySelector("li.main_nav.login"); //3개의 셀렉트 연속
// const nav_join = document.querySelector("li.main_nav.join"); // li태그에서main_nav 가 붙어있고..

const nav_click_handler = (event) => {
  //event 라는 매개변수 /를 통하여 이벤트변수를 하나로 줄인다.

  const target = event.target; //실제로 클릭된 것
  const nav_text = target.innerText;
  alert(nav_text + "메뉴 클릭"); // li의 text와 같이 출력된다
};

// js 에서는 배열과 list의 요소가[]똑같음.
// nav_list[0].addEventListener("click", nav_click_handler); //클릭된거에 대한 정보가 위에 event 변수에 담기게 된다.
// nav_list[1].addEventListener("click", nav_click_handler);
// nav_list[2].addEventListener("click", nav_click_handler); //3개의 요소가 1개 클릭요소 공유 //한개의 이벤트

//------------------------------------------------------------
// java와 마찬가지로 이렇게 편히 작성이 된다.

// for (let i = 0; i < nav_list.length; i++) {
//   nav_list[i].addEventListener("click", nav_click_handler);
// }

//-------------------------------------------------------------
// const add_event = (item) => {
//   item.addEventListener("click", nav_click_handler);
// };
// // forEach 함수 (할일)
// nav_list.forEach(add_event);

// 이런것도 있으나 권장X

//--------------------------------------
// 권장
// for문없이 확장 for문으로 만들기. 위의 것과 하는일은 같다.

// forEach()안에 함수를 직접 선언하여 사용, 무명함수.
// 분홍색 : 함수
// list를 펼쳐놓고 ****n번째 아이템을 item에 담아서**** (item 자리 1급함수 java는 안됨)

/*
 * Js 에서는 함수의 매개변수로 직접 함수를 전달할 수 있다.
 */
nav_list.forEach((item) => {
  item.addEventListener("click", nav_click_handler);
});
