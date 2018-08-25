<template>
    <div>
        <div v-if="publickey != ''">
            <br><br>
            <b>Public Key:  </b>{{publickey}}
            <br>
            <b>Private Key:  </b>{{privatekey}}
        </div>
        <div v-if="messageAlert != ''">
            {{messageAlert}}
        </div>
        <br>
        <a class="actionButton" v-on:click="awsapiCall()">Costes diarios</a>
        <br><br>
        <div v-for="costs in cost" :key="costs.id">
            Gastado hoy: {{costs.Total.AmortizedCost.Amount}}&nbsp;{{costs.Total.AmortizedCost.Unit}}
        </div>    
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'UserDashboard',
        data() {
            return {
                user: "",
                cost:"",
                publickey: "",
                privatekey:"",
                messageAlert:"",
                activarCostes:""
            };
        },

        created (){
            this.getUser();
        },
        methods:{
            getUser() {
                axios.get(`http://localhost:4000/secure/users/` + this.$route.params.id, {headers:{Authorization:this.$route.params.token}})
                    .then( res => {
                        if (res.data.isActive == false) {
                            this.messageAlert = "Tu correo no está verificado, por favor, verificalo para poder continuar"
                        }else{
                            if(res.data.publicAWSKey != null || res.data.publicAWSKey != "" && res.data.privateAWSKey != null || res.data.privateAWSKey != "") {
                                this.publickey = res.data.publicAWSKey;
                                this.privatekey = res.data.privateAWSKey;
                            }
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            awsapiCall(){
                axios.get('http://localhost:4000/awsapi/?publicAWSKey='+this.publickey+'&privateAWSKey='+ this.privatekey, {headers:{Authorization:this.$route.params.token}})
                .then( res =>  {
                    this.cost=res.data.ResultsByTime
                })
                .catch(function (error) {
                console.log(error);
                });
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