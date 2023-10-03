<template>
    <div class="list-user">
        <user 
        v-for="user in listUser" 
        v-bind:key="user.id" 
        v-bind:user = "user"
        v-on:deleteUser="deleteUser"
        />
    </div>
</template>

<script>
    import User from './User.vue';
    export default {
        name: 'list-user',
        props:{
            listUser:{
                type: Array,
                default: []
            }
        },
        data(){
            return{

            }
        },
        components:{
            User
        },
        methods:{
            deleteUser(data){
                console.log('deleteUser trong ListUser.vue', data);
                this.$emit('deleteUserEvent', data);
            }
        }
    }
</script>

<style lang="css" scoped>
    .list-user{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .list-user .user{
        padding: 30px;
        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(100% / 3 - 20px * 2 / 3);
        box-sizing: border-box;
    }
</style>