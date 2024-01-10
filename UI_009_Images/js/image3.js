document.addEventListener("DOMContentLoaded", () => {
  const img_list_box = document.querySelector("div.image_list");

  img_list_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG") {
      // const image_view = document.querySelctor("div.image_view img")
      // 위의 경우 코드가 길어지면 공백이 적용안되는 경우가 있어서
      // 아래와 같이 나누어 작성한다

      const image_view_box = document.querySelector("div.image_view");

      // 크게 보여질 이미지 tag 가져오기
      // 이 박스가 포함하고 있는 img
      const image_view = image_view_box.querySelector("img");
      console.log(image_view);

      image_view.style.marginLeft = "-100%";
      image_view.style.opacity = 0;
      image_view.style.transform = "rotate(-90deg)";

      const newImage = document.createElement("IMG");
      newImage.src = target.src;

      image_view_box.appendChild(newImage);

      // 위의 코드가 실행된 후 1초간 기다렸다가
      /*
       * 비동기 실행 코드의 타이밍을 어느정도 맞추기 위한 방법
       */
      setTimeout(() => {
        // image_view_box 의 첫번째 IMG tag(왼쪽으로 사라진 이미지)를
        // 완전히 제거하라
        image_view_box.querySelector("IMG").remove(); // 사라지게 만든거 아예 없애기
      }, 1000); // 1000ms 기다리다가 함수실행

      // 클릭된 image 의 소스
      // const img_src = target.src;

      // image_view.src = img_src;
    }
  });
});
