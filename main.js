let newTaskQuestion = prompt("タスクを入力してください");
const taskList = [];

function makeNewTaskList(taskName) {
  let newTaskName = taskName;
  taskList.push(newTaskName);
  console.log('====================\n現在持っているタスク一覧\n====================');
  taskList.forEach(function(element, index, array) {
    console.log(index + ':[内容]' + element);
  });
}

while (newTaskQuestion !== null) {
  makeNewTaskList(newTaskQuestion);
  newTaskQuestion = prompt("タスクを入力してください");
}
