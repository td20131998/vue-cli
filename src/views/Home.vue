<template>
  <div class="container">
    <div class="row">
      <h1 class="col text-center mb-4 mt-5">TODOs APP</h1>
    </div>

    <div class="row">
      <div class="col text-center">
        <div class="input-group mb-3">
          <input
            class="form-control"
            placeholder="What's next?"
            v-on:keyup.enter="addTodo"
            v-model="newTodo"
          />
          <button v-on:click="addTodo" class="btn btn-success ml-3">Add</button>
        </div>
      </div>
    </div>

    <div class="row">
      <ul class="col list-group">
        <li
          is="todo-item"
          v-for="(item, index) in filteredTodos"
          v-bind:todo="item"
          v-bind:key="item.id"
          v-on:remove="removeTodo(index)"
          v-on:done="completeTodo(index)"
        />
      </ul>
    </div>

    <div class="row mt-3" v-show="todos.length" style="color: #8E8E8E">
      <div class="col">
        <span class="float-left">{{ activeTodos == 1 ? "1 item" : activeTodos + " items" }} left</span>

        <ul class="d-inline">
          <li class="d-inline mr-2">
            <button class="btn btn-light" v-on:click="changeVisibility('all')">All</button>
          </li>
          <li class="d-inline mr-2">
            <button class="btn btn-light" v-on:click="changeVisibility('active')">Active</button>
          </li>
          <li class="d-inline">
            <button class="btn btn-light" v-on:click="changeVisibility('completed')">Completed</button>
          </li>
        </ul>

        <button 
          class="float-right btn btn-success clearfix"
          v-on:click="clearCompletedTodos"
        >
          Clear completed
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoItem from "@/components/TodoItem.vue";

var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(todo => todo.active);
  },
  completed: function(todos) {
    return todos.filter(todo => !todo.active);
  }
};

export default {
  name: "home",
  data: function() {
    let todos = [
        { id: 1, name: "Do something fun!", active: true },
        { id: 2, name: "Learn to relax", active: false },
        { id: 3, name: "Climb moutain", active: true }
    ];
    return {
      newTodo: "",
      activeTodos: todos.filter(todo => todo.active).length,
      todos: todos,
      visibility: 'all'
    };
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos);
    }
  },
  methods: {
    addTodo: function() {
      this.activeTodos++;
      this.todos.push({ id: this.counter, name: this.newTodo, active: true });
      this.newTodo = "";
    },
    removeTodo: function(index) {
      this.activeTodos--;
      this.todos.splice(index, 1);
    },
    completeTodo: function(index) {
      // this.activeTodos--;
      let toggleActive = !this.todos[index].active;
      if (toggleActive) {
        this.activeTodos++;
      } else {
        this.activeTodos--;
      }
      this.$set(this.todos, index, { ...this.todos[index], active: toggleActive });
    },
    changeVisibility: function(type) {
      this.visibility = type;
    },
    clearCompletedTodos: function() {

    }
  },
  components: {
    TodoItem
  }
};
</script>
