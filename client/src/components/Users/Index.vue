<template>
    <div>
        <h2>Get All Users</h2>
        <p><button v-on:click="logout">Logout</button></p>
        <h4>User Count {{users.length}}</h4>
        <p><button v-on:click="navigateTo('/user/create')">Create User</button></p>
        <div v-for="user in users" v-bind:key="user.id">
        <div> ID: {{ user.id }}</div>
        <div> Name-Lastname: {{ user.name }} - {{ user.lastname }}</div>
        <div> email: {{ user.email }}</div>
        <div> password: {{ user.password }}</div>
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
                 let result = confirm("Want to delete?")
                     if (result) {
                          try {
                            await UsersService.delete(user)
                              this.refreshData()
                     } catch (err) {
                          console.log(err)
                      }
                     }
                 },
             async refreshData() {
                  this.users = (await UsersService.index()).data
        },
            logout(){
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setUser', null)
                this.$router.push({
                    name: 'login'
                })
        }
    }
}
</script>

<style scoped>

</style>
