<template>
    <div>
        <h2>Get All Users</h2>
        <h4>User Count {{users.length}}</h4>
        <p><button v-on:click="navigateTo('/user/creat')">Create User</button></p>
        <div v-for="user in users" v-bind:key="user.id">
           <p> ID: {{ user.id }}</p>
           <p> Name-Lastname: {{ user.name }} - {{ user.lastname }}</p>
           <p> email: {{ user.email }}</p>
           <p> password: {{ user.password }}</p>
           <p><button v-on:click="navigateTo('/user/'+user.id)">User Detail</button>
           <button v-on:click="navigateTo('/user/edit/'+user.id)">Edit User</button>
           <button v-on:click="deleteUser(user)">delete</button></p>
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
        async deleteUser (user) {
            let result = confirm('Want to delete')
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
