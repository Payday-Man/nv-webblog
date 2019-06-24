<template>
    <div>
        <h1>Show User</h1>
        <p>User ID: {{userId}}</p>
        <p>Username : {{user.name}} - Lastname {{user.lastname}}</p>
        <p>email : {{user.email}} </p>
        <p>Password : {{user.password}} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: 0
        }
    },
    async created () {
        try {
        let userId = this.$route.params.userId
        this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log (error)
        }
    }
}
</script>

<style scoped>

</style>
