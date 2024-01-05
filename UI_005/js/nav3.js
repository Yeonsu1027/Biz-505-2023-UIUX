// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기

// nav_list 는 dom 객체를 여러개 가진 list(type) 이된다.
const nav_list = document.querySelectorAll("li.main_nav"); // 저요소가 있는 3개를 모두 선택하라

/*
 * Js 에서는 함수의 매개변수로 직접 함수를 전달할 수 있다.
 */

// 이렇게 이벤트 핸들러까지 통으로 만들어 버릴 수 있다.
nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert(nav_text + "메뉴클릭");
  });
});
