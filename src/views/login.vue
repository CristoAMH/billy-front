<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="input.email" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <a class="actionButton" v-on:click="login()">Login</a>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: "",
                    errors: "",
                },
            }
        },
        methods: {
            login() {
                let prueba = axios.post('http://localhost:4000/users/login', { 'email': this.input.email, 'password':this.input.password })
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("authenticated", true);
                        this.$router.replace({name:"secure", params: { nombre: res.data.nombre, id: res.data.id, token: res.data.token, activao:'' }})
                    }
                })
                .catch(function (error) {
                    alert("Correo o contraseña invalidas")
                    console.log(error);
                });
            },
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>