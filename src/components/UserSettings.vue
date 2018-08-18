<template>
    <div>
        <input type="text" placeholder="Put your public key">
        <input type="text" placeholder="Put your private key">
    </div>
    
</template>

<script>
    export default {
        name: 'UserSettings',
        data() {
            return {};
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