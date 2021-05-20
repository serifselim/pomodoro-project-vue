<template>
  <!-- Task Main Side -->
  <div class="task">

    <!-- Task Header Side -->
    <div class="task-header">
      <h2 class="header t-left">tasks</h2>
      <h2 class="header t-right">{{ checkCount }}/{{ todoList.length }}</h2>
    </div>
    <!-- Task Header Side -->

    <div class="task-main">

      <!-- Task Add Side -->
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
      <!-- Task Add Side -->

      <!-- Task List Side -->
      <ul class="task-list">
        <li
          :class="{ 'task-item': todo, check: todo.check }"
          v-for="(todo, index) in todoList"
          :key="index"
        >
          <a @click="checkTodo(index, $event)" class="check-task-btn btn-gray">
            <i class="fas fa-check-circle"></i>
          </a>
          <span class="task-text">{{ todo.task }}</span>
          <a
            @click="deleteTodo(index, $event)"
            class="delete-task-btn btn-active"
          >
            <i class="fas fa-minus-circle"></i>
          </a>
        </li>
      </ul>
      <!-- Task List Side -->

    </div>
    
  </div>
  <!-- Task Main Side -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "todo",
  data() {
    return {
      task: null,
      checkCount: 0,
    };
  },
  created() {
    const getData = localStorage.getItem("tasks");
    const getTask = JSON.parse(getData);

    getTask.map((task) => {
      if (task.check) {
        this.checkCount++;
      } else if (!task.check && this.checkTodo > 0) {
        this.checkCount--;
      }
    });

    this.$store.dispatch("getTodo", JSON.parse(getData));
  },
  computed: mapState({
    todoList: (state) => state.todo.todoList,
  }),
  methods: {
    addTodo() {
      let taskItem = {
        task: this.task,
        check: false,
      };

      this.task !== null
        ? this.$store.dispatch("addTodo", taskItem)
        : alert("Please enter a text");
      this.task = null;
    },

    deleteTodo(index, e) {
      let todoItem = e.target.parentElement.parentElement;
      this.$store.dispatch("deleteTodo", index);

      if (todoItem.className === "task-item check") {
        this.checkCount--;
      }
    },

    checkTodo(index) {
      this.todoList[index].check = !this.todoList[index].check;
      this.todoList[index].check ? this.checkCount++ : this.checkCount--;
      localStorage.setItem("tasks", JSON.stringify(this.todoList));
    },
  },
};
</script>
