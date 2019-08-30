<template>
  <li class="list-group-item ml-3 text-left pl-3">
    <button
      v-bind:class="{disabled: !todo.active}"
      v-on:click="$emit('done')"
      class="btn btn-default btn-circle btn-lg"
    >
      <font-awesome-icon
        icon="check"
        size="lg"
        transform="shrink-6"
        class="text-success done-icon"
        v-show="!todo.active"
      />
    </button>
    <span 
      class="pl-4" 
      v-html="!todo.active ? `<del>${todo.name}</del>` : todo.name"
      :style="!todo.active ? 'opacity: 0.5' : null"
    ></span>
    <font-awesome-icon
      icon="times"
      size="lg"
      class="float-right text-danger mt-1"
      v-on:click="$emit('remove')"
    />
  </li>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style scoped>
.done-icon {
  font-size: 20px;
}
.btn-circle {
  border: 1px solid #8e8e8e;
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
</style>