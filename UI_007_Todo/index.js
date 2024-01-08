/*
DOMcontentLoaded : 화면에 DOM 요소들이 모두 완성되면 //문서자체에 이벤트를 설정
이 event 를 설정함으로써 문서(DOM)가 모두 화면에 나타난 후에
비로소 JS 를 실행하기 시작한다
JS 코드가 ,html 위, 아래 어디에 있든지 상관없이 실행가능하다
*/

//화면에 있는 컨텐츠가 로드되면
document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoInput = document.querySelector("section.input input");
  // 3개의 요소를 갖는 리스트 만들기
  const todoList = ["체육관가기", "HTML 책읽기", "책상정리", "영화보기", "라면먹기"];

  const createLiTag = (todoContent) => {
    // <span></span>  // span 태그를 만들어라
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const litag = document.createElement("LI"); //태그만들기

    //위에서 만들어진 span tag에 각각 class를 부착하라
    // <span class ="complete"></span>
    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent; //매개변수로 받은걸 여기에다가
    spanClose.innerHTML = "&times;";

    litag.appendChild(spanComplete); // .appendChild : 특정부모요소에 자식요소 추가
    litag.appendChild(spanTodo);
    litag.appendChild(spanClose);

    ulContent.appendChild(litag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    todoList.forEach((item) => createLiTag(item));
  };

  createTodoList();
  /*
    화면상에 lit tag가 여러개 있는데 querySelector() 를 사용하여
    요청을 하면 화면에서 최초로 발견되는 요소만 select 가 된다
    */
  ulContent.addEventListener("click", (event) => {
    /*
    ul tag에 event 를 설정하고, 실제로는 li tag 에 대하여
    event 코드를 처리할 것이다
    이때 실제 제일먼저 클릭된 요소는 event.tartget 이 된다
    이 화면에서 event.target 은 SPAN tag 가 된다
    그러면 SPAN이 아닌 LI tag 에 대하여 어떤 처리를 하려고 한다
    */
    const target = event.target;
    if (target.tagName === "SPAN") {
      /*
        span tag에 close 클래스가 부착된 친구인가?
        */
      if (target.classNaME === "close") {
        // 삭제할지 물어보기
        //선택된 SPAN 태그가 close면
        if (confirm("TODO 를 삭제할까요?")) {
          //삭제를 허락하면
          //현재 span 의 부모인 LI tag를 감추기
          target.closest("LI").style.display = "none";
        }
        return false;
      }

      //li tag가 클릭되면
      //   target.classList.add("complete");
      /*
    tart.closest("LI")
    클릭된 요소(target)을 감싸고 잇는 부모들 중에
    가장 가까이 있는 LI tag
    */
      const liTag = target.closest("LI");
      // LI tag 에 complete 라는 클래스를 추가하라
      // <li class = "complete")와 같은 코드가 된다
      // liTag.classList.add("complete");

      /*
      tag 요소에 class 속성이 설정되면 classList 에 해당 클래스명이
      배열로 저장되어 있다
      즉, liTag(LI) 에 class 속성이 있고, 값이 complete 이면 제거
      만약 없으면 추가
      */

      /*
클래스변수?.aaa : 클래스변수가 null이 아닌경우에만 aaa 코드실행
만약 클래스 변수가 null 이면 이 코드 자체가 skip
 */

      // ? 는 litag의 값이 null이냐 묻는다 ,null이 아닌경우에만 실행하며, null이면 이코드는 무시된다.
      liTag?.classList.toggle("complete"); // li tag에 complete를 붙였다 뗏다 해서 체크를 붙였다 뗐다 구현 //toggle:껏다켯다 라는뜻
    }
  });
  const addBtn = document.querySelector("section.input button");
  addBtn?.addEventListener("click", () => {
    const todo = todoInput.value;
    //todo 가 falsy(비어있으)면
    if (!todo) {
      alert("TO DO 내용을 입력해 주세요");
      todoInput.select();
      return false; // 입력이 안되면 더이상진행x
    }
    // List(배열)의 끝에 새로운 값을 추가하기
    todoList.push(todo);
    // createTodoList(); //함수실행
    createLiTag(todo); //위에는 리스트를 새로만드는거여서 새로추가하면 체크표시가 해제되버리니까
    todoInput.value = "";
  }); // end addBtn click
}); // DOMContentLoaded
