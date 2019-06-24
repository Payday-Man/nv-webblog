<template>
    <div>
        <h2>Get All Users</h2>
        <h4>User Count {{users.length}}</h4>
        <div v-for="user in users" v-bind:key="user.id">
           <p> ID: {{ user.id }}</p>
           <p> Name-Lastname: {{ user.name }} - {{ user.lastname }}</p>
           <p> email: {{ user.email }}</p>
           <p> password: {{ user.password }}</p>
           <p><button v-on:click="navigateTo('/user/'+user.id)">User Detail</button></p>
           <hr>
        </div>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return {
            users:[]
        }
    },
    async created () {
        try{
        this.users = (await UsersService.index()).data
        } catch (error) {
            console.log (error)
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
    }
}
</script>

<style scoped>

</style>
