<template>
    <li class="list-group-item ml-3 text-left">
        <button 
            v-bind:class="{disabled: !todo.active}" 
            v-on:click='$emit("done")'
        >
            <i class="fas fa-check"></i>
        </button>
        {{ todo.name }} 
        <button v-on:click='$emit("remove")' class='btn btn-primary float-right'>Remove</button>
    </li>
</template>

<script>
export default {
    // data: function() {},
    props: ['todo']
}
</script>