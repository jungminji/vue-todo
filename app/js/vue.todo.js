"use strict"; {
  var config = {
    apiKey: "",
    authDomain: "vue-todolist-c856b.firebaseapp.com ",
    databaseURL: "https://vue-todolist-c856b.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config); // Vue instance
  new Vue({
    el: ".app",
    created: function created() {
      this.getList()
    },
    data: {
      todoList: {
        task: [],
        complete: []
      },
      editable: false
    },
    computed: {},
    methods: {
      getList: function getList() {
        var _this = this; // Truncate before fetch todolist
        this.todoList.task = [];
        this.todoList.complete = []; // Fetching todo items from server
        firebase.database().ref("todolist/").once("value").then(function (res) {
          res.forEach(function (todo) {
            if (todo.val().status) {
              _this.todoList.task.push(Object.assign(todo.val(), {
                key: todo.key
              }))
            } else {
              _this.todoList.complete.push(Object.assign(todo.val(), {
                key: todo.key
              }))
            }
          })
        })
      },
      add: function add() {
        var input = document.querySelector(".userInput");
        if (input.value === "") throw "You must type something."; // .set will overwrite. Be aware!
        var addedKey = firebase.database().ref("todolist/").push({
          content: input.value,
          status: true
        }).key;
        this.todoList.task.push({
          content: input.value,
          status: true,
          key: addedKey
        });
        input.value = ""
      },
      remove: function remove(key) {
        var _this2 = this;
        firebase.database().ref("todolist/" + key).remove();
        this.todoList.task.forEach(function (item, index) {
          if (item.key === key) {
            var toRemove = _this2.todoList.task.indexOf(item);
            _this2.todoList.task.splice(toRemove, 1)
          }
        });
        this.todoList.complete.forEach(function (item, index) {
          if (item.key === key) {
            var toRemove = _this2.todoList.complete.indexOf(item);
            _this2.todoList.complete.splice(toRemove, 1)
          }
        })
      },
      complete: function complete(key) {
        var _this3 = this;
        firebase.database().ref().child("todolist/" + key).update({
          status: false
        });
        this.todoList.task.forEach(function (item, index) {
          if (item.key === key) {
            var toMove = _this3.todoList.task.indexOf(item);
            toMove = _this3.todoList.task.splice(toMove, 1);
            _this3.todoList.complete.push(toMove[0]);
            _this3.$set(item, "status", false)
          }
        })
      },
      undo: function undo(key) {
        var _this4 = this;
        firebase.database().ref().child("todolist/" + key).update({
          status: true
        });
        this.todoList.complete.forEach(function (item, index) {
          if (item.key === key) {
            var toMove = _this4.todoList.complete.indexOf(item);
            toMove = _this4.todoList.complete.splice(toMove, 1);
            _this4.todoList.task.push(toMove[0]);
            _this4.$set(item, "status", true)
          }
        })
      },
      edit: function edit($event) {
        var node = $event.target.nextElementSibling.nextElementSibling;
        node.setAttribute("class", "active");
        node.focus()
      },
      editConfirm: function editConfirm(key, $event) {
        var _this5 = this;
        var input = $event.target;
        if (input.value === "") throw "You must type something.";
        firebase.database().ref().child("todolist/" + key).update({
          content: input.value
        });
        this.todoList.task.forEach(function (item, index) {
          if (item.key === key) {
            _this5.$set(item, "content", input.value)
          }
        });
        input.setAttribute("class", "editInput")
      },
      editCancel: function editCancel($event) {
        var input = $event.target;
        input.setAttribute("class", "editInput")
      }
    }
  })
}
//# sourceMappingURL=vue.todo.js.map