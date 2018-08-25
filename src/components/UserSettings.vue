<template>
    <div>
        <input type="text" v-model="publickey" placeholder="Put your public key">
        <input type="text" v-model="privatekey" placeholder="Put your private key">
        <a class="actionButton" v-on:click="insertKeys()">Insert Keys</a>
        
        <div v-if="messageAlert != ''">
            {{messageAlert}}
        </div>
    </div>
</template>
<script>

import axios from 'axios';

    export default {
        name: 'UserSettings',
        data() {
            return {
                publickey:"",
                privatekey:"",
                messageAlert:"",
                isActive:""
            };
        },
        created() {
            this.checkIsActive();
        },

        methods: {
            checkIsActive() {
                axios.get('http://localhost:4000/secure/users/'+ this.$route.params.id, {
                    headers: {'Authorization': this.$route.params.token},
                    }) 
                    .then(res => {
                        console.log(res.data)
                        this.isActive = res.data.isActive;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            insertKeys() {
                if (this.isActive == true) {
                    axios.patch('http://localhost:4000/secure/users/'+ this.$route.params.id, {publicAWSKey: this.publickey, privateAWSKey: this.privatekey}, {
                        headers: {'Authorization': this.$route.params.token},
                    }) 
                    .then(res => {
                        this.messageAlert = "Sus claves se han registrado satisfactoriamente"
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }else {
                    this.messageAlert = "Necesita verificar su cuenta para introducir sus claves"
                }
            }
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>