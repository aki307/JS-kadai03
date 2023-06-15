let NewTaskQuestion = prompt("タスクを入力してください");
let TaskNumber = 0;
let TaskList = [];

function NewTaskList(tasknumber, taskname) {
  let Newtasknumber = tasknumber;
  let Newtaskname = taskname;
  TaskList[Newtasknumber] = Newtaskname;
  console.log('====================\n現在持っているタスク一覧\n====================');
  for (let i = 0; i < TaskList.length; i++) {
    console.log(i + ':[内容]' + TaskList[i]);
  }
}

while (NewTaskQuestion !== null) {
  NewTaskList(TaskNumber, NewTaskQuestion);
  TaskNumber += 1;
  NewTaskQuestion = prompt("タスクを入力してください");
}
