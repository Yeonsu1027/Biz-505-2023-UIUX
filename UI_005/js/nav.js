// DON 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_home = document.querySelector("li.main_nav.home"); // .은요소구분
const nav_login = document.querySelector("li.main_nav.login"); //3개의 셀렉트 연속
const nav_join = document.querySelector("li.main_nav.join"); // li태그에서main_nav 가 붙어있고..

// event 처리기(handler) 함수 선언
const nav_home_click_handler = () => {
  alert("홈 메뉴 클릭");
};
const nav_login_click_handler = () => {
  alert("로그인 클릭");
};
const nav_join_click_handler = () => {
  alert("회원가입 클릭");
};

nav_home.addEventListener("click", nav_home_click_handler);
nav_login.addEventListener("click", nav_login_click_handler);
nav_join.addEventListener("click", nav_join_click_handler);
//요소에 하나씩 등록하는방법
