const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// 여기서 toDo 는 no argument just a current element

function deleteToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  // parentNode는 li 가 몇번째있는지 말해줌.
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  //   내 생각에는 위에 있는거는 조건이 참이면 true를 return하고 아니며 false를 return
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //오홍 아 저장소에는 string으로 저장하고 나중에 밖에서 json object로 만든다.x
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "clear";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  li.id = newId;
  //   li에 id 넣기 ....구나?
  //   와우 코드해석 완료쓰 ^^ 그러니까 이미 const들이 만드어져있잖아?
  //  li, delBtn, span에다가 계속 덮붙인거임
  // delBtn은 X 를 text 입력한거고! 그리고 appendChild로 const li에
  // delBtn, span 붙이고 마지만에 toDoList에 다가 li를 붙이면
  //  한번에  li -> delBtn -> span을 붙인 효과를 얻는 거이젱 ㅎㅎ
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
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
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
