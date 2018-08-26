<template>
    <div>
        <h1>{{nombre}}</h1>
    </div>
    
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {
                nombre: this.$route.params.nombre
            };
        },
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