const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  //   와우 코드해석 완료쓰 ^^ 그러니까 이미 const들이 만드어져있잖아?
  //  li, delBtn, span에다가 계속 덮붙인거임
  // delBtn은 X 를 text 입력한거고! 그리고 appendChild로 const li에
  // delBtn, span 붙이고 마지만에 toDoList에 다가 li를 붙이면
  //  한번에  li -> delBtn -> span을 붙인 효과를 얻는 거이젱 ㅎㅎ
}

function handleSubmit(event) {
  event.preventDefault();
  //   을 하지 않는다면 초기화되어서 li에 암것두 안남음요.
  const currentValue = toDoInput.value;
  //   즉 input에 내가 작성한것이 toDoInput의 value가 자동적으로 된다는 것이다.
  paintToDo(currentValue);
  toDoInput.value = "";
  //   내가 입력한 값을 지워줌 ㅋ
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
