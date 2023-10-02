<template>
    <div class="user">
        <p class="">{{ user.email }}</p>
    </div>
</template>

<script>
    export default {
        name: 'user',
        props:{
            user:{
                type: Object,
                default: null
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="css" scoped>
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>