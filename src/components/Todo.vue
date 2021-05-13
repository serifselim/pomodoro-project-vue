<template>
  <div class="task">
    <div class="task-header">
      <h2 class="header t-left">tasks</h2>
      <h2 class="header t-right">{{ checkCount }}</h2>
    </div>
    <div class="task-main">
      <div class="task-add">
        <input
          v-model="task"
          type="text"
          class="add-task-input "
          placeholder="add a new task"
        />
        <a @click.prevent="addTodo" class="add-task-btn btn-white">
          <i class="fas fa-plus-circle fa-3x btn-white"></i>
        </a>
      </div>
      <ul class="task-list">
        <li class="task-item" v-for="(todo, index) in todoList" :key="index">
          <a @click="checkTodo" class="check-task-btn btn-gray">
            <i class="fas fa-check-circle"></i>
          </a>
          <span class="task-text">{{ todo }}</span>
          <a
            @click="deleteTodo(index, $event)"
            class="delete-task-btn btn-active"
          >
            <i class="fas fa-minus-circle"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "todo",
  data() {
    return {
      task: null,
      checkCount: 0,
      // todoList : []
    };
  },
  computed: mapState({
    todoList: (state) => state.todo.todoList,
  }),
  created() {
    const getData = localStorage.getItem("tasks");
    this.$store.dispatch("getTodo", JSON.parse(getData));
    // this.todoList = this.$store.state.todo.todoList;
    // console.log(this.todoList);
  },
  methods: {
    addTodo() {
      this.task !== null ? this.$store.dispatch("addTodo", this.task.toLowerCase()) : alert("Please enter a text");
      this.task = null;
    },
    deleteTodo(index, e) {
      let todoItem = e.target.parentElement.parentElement;
      this.$store.dispatch("deleteTodo", index);

      if (todoItem.className === "task-item check") {
        this.checkCount--;
      }
    },

    checkTodo(e) {
      let todoItem = e.target.parentElement.parentElement;

      if (todoItem.className !== "task-item check") {
        todoItem.classList.add("check");
        this.checkCount++;
      } else {
        todoItem.classList.remove("check");
        this.checkCount--;
      }
    },
  },
};
</script>
