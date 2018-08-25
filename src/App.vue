<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated == false" to="/inscription">Suscribirse</router-link><br><br>
            <router-link v-if="authenticated == false" to="/login">Login</router-link>
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                token: "",
                id:"",
                nombre:"",
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "inscription" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>

    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>
