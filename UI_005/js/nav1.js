// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_home = document.querySelector("li.main_nav.home"); // .은요소구분
const nav_login = document.querySelector("li.main_nav.login"); //3개의 셀렉트 연속
const nav_join = document.querySelector("li.main_nav.join"); // li태그에서main_nav 가 붙어있고..

// event 처리기(handler) 함수 선언

// nav_click_handler 는 nav 의 3가지 요소에게 공통으로
// 연결이 되어 있다
// nav 3가지 요소중 어떤 것을 클릭해도
// 동일한 alert 가 작동된다.
// 어떤 nav 요소가 클릭되었는지 확인하기 위하여
// event 라는 매개변수를 설정하였다
// nav 3가지 요소(li tag)중 어떤 부분이 클릭이 되면
// nav)click_hander() 함수가 실행되고, 클릭된 요소의 정보가
// event 매개변수를 통하여 전달된다
const nav_click_handler = (event) => {
  //event 라는 매개변수 /를 통하여 이벤트변수를 하나로 줄인다.

  const target = event.target; //실제로 클릭된 것
  const nav_text = target.innerText;
  alert(nav_text + "메뉴 클릭"); // li의 text와 같이 출력된다
};

nav_home.addEventListener("click", nav_click_handler); //클릭된거에 대한 정보가 위에 event 변수에 담기게 된다.
nav_login.addEventListener("click", nav_click_handler);
nav_join.addEventListener("click", nav_click_handler); //3개의 요소가 1개 클릭요소 공유 //한개의 이벤트
