<template>
    <div>
        <h1>Get All Users</h1>
        <div v-if="users.length">
            <div>User Count {{users.length}}</div>
            <div>ID: {{users[0].id}}</div>
            <div>Name-Lastname: {{users[0].name}} - {{users[0].lastname}}</div>
            <div>email: {{ users[0].email}}</div>
            <div>password: {{ users[0].password}} </div>
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
        this.users = (await UsersService.index()).data
    }

}
</script>

<style scoped>

</style>
