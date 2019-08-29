<template>
  <li class="list-group-item ml-3 text-left">
    <button
      v-bind:class="{disabled: !todo.active}"
      v-on:click="$emit('done')"
      class="btn btn-default btn-circle btn-lg"
    >
      <font-awesome-icon 
        icon="check" 
        size="lg"
        transform="shrink-6" :style="{ color: 'white' }"
        class="text-success" 
        v-show="!todo.active"
        />
    </button>
    {{ todo.name }}
    <!-- <button
      v-on:click="$emit('remove')"
    > -->
        <font-awesome-icon 
            icon="times" 
            size="lg"
            class="float-right text-danger"
        />
    <!-- </button> -->
  </li>
</template>

<script>
export default {
  // data: function() {},
  props: ["todo"]
};
</script>

<style scoped>
.btn-circle {
border: 1px solid #8E8E8E;
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
</style>