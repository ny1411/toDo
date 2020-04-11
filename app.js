var goals = [];

var completedGoals = [];

function printGoals() {
  var container = document.getElementById("goals-container");
  var completedContainer = document.getElementById("completed-container");
  container.innerHTML = "";
  completedContainer.innerHTML = "";
  for (var i = 0; i < goals.length; i++) {
    container.innerHTML +=
      "<div id=" +
      i +
      "><p onclick='strikeItem(this.parentElement.id)'>" +
      goals[i] +
      "</p><span onclick='removeItem(this.parentElement.id)'><i class=\"fas fa-times\"></i></span></div>";
  }
  if (completedGoals.length >= 1) {
    for (var i = 0; i < completedGoals.length; i++) {
      completedContainer.innerHTML +=
        "<div id=" +
        i +
        "><p onclick='strikeItem(this.parentElement.id)'>" +
        completedGoals[i] +
        "</p><span onclick='removeCompletedItem(this.parentElement.id)'><i class=\"fas fa-times\"></i></span></div>";
    }
  }
}
function addItem(item) {
  if (item === "") {
    alert("Please have a goal in life.");
  } else {
    goals.push(item);
    document.getElementById("goal").value = "";
    printGoals();
  }
}
function strikeItem(index) {
  completedGoals.push(goals.splice(index, 1));
  printGoals();
}
function removeItem(index) {
  goals.splice(index, 1);
  printGoals();
}
function removeCompletedItem(index) {
  completedGoals.splice(index, 1);
  printGoals();
}
