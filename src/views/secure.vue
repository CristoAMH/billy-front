<template>
    <div id="secure">
        <UserHeader></UserHeader>
        <a @click="component='UserDashboard'">User Dashboard</a>
        <a @click="component='UserSettings'">Add keys</a>
        <br><br>
        <component :is="component"></component>
    </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import UserSettings from '@/components/UserSettings'
import UserDashboard from '@/components/UserDashboard'

    export default {
        name: 'Secure',
        props: ['nombre'],
        data()  {
            return {
                component : "UserDashboard"
            }
        },

        components : {
            UserHeader,
            UserSettings,
            UserDashboard
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