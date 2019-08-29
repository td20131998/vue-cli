<template>
    <div>
        <button v-on:click="handleLogin()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        handleLogin: function() {
            localStorage.setItem('isLoggedIn', true);
            this.$router.push(this.$route.query.redirect || '/');
        }
    }
}
</script>