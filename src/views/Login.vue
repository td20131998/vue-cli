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
            console.log(this.$route.from);
            this.$router.push(this.$route.query.redirect || '/');
            // console.log(this.$router);
        }
    }
}
</script>