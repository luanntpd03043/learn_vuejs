<template>
    <div class="user">
        <p class="">{{ user.email }}</p>
        <button class="delete" v-on:click="handleDelete">Delete</button>
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
        },
        methods:{
            handleDelete(e){
                var data = {
                    id: this.user.id
                }
                console.log('handleDelete user trong user.vue')
                this.$emit('deleteUser', data);
            }
        }
    }
</script>

<style lang="css" scoped>
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .user .delete{
        position: absolute;
        top: 0;
        right: 0; 
    }
</style>