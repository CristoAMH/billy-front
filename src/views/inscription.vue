<template>
    <div id ="formuser">
        <h1>Darse de alta</h1>
        <div class="form-container">
            <input type="text" v-model="input.name" id="name" placeholder="insert your first name">
            <input type="text" v-model="input.email" id="email" placeholder="insert your email">
            <input type="text" v-model="input.password" id="password" placeholder="insert your password">
            <a class="actionButton" v-on:click="insertUser">Enviar</a>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
export default {
    name: 'inscription',
    data() {
        return {
            input: {
                name: "",
                email:"",
                password: ""
            }
        }
    },
    methods: {
        insertUser: async function () {
            let insertUser = axios.post('http://localhost:4000/users', { 'nombre': this.input.name, 'email' : this.input.email, 'password':this.input.password})
                .then(res => {
                    console.log(res.data._id)
                })
                .catch(function (error) {
                    console.log(error);
                });
            let waiting = await insertUser
        },
    }
}
</script>

<style>

    body,
    html {
        margin: 0;
        padding: 0;
    }
    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .form-container {
        background: white;
        border: 0 none;
        border-radius: 3px;
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
        padding: 20px 30px;
        box-sizing: border-box;
        width: 50%;
        margin: 0 10%;
    }
    input {
        padding: 10px 20px;
        border: 1px solid #999;
        border-radius: 3px;
        display: block;
        width: 100%;
        margin-bottom: 20px;
        box-sizing: border-box;
        outline: none;
        text-align: center;
    }
    a {
        width: 100px;
        background: #27AE60;
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 1px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
    }

</style>

