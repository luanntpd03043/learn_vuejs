<template>
    <div class="demo-slot">
        <comp-tabs title="Tieu de cua tab">
            <ul class="tabs-header">
                <li 
                v-on:click="setActiveTab(index)"
                v-bind:class="{active : tabActive == index}"
                v-for="(item,index) in tabsHeader" 
                v-bind:key="index">{{ item.text }}</li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere architecto, cupiditate reprehenderit nisi earum iure saepe ullam harum inventore, culpa soluta dicta sapiente, perferendis doloribus aut ab libero ipsum.
            </div>
            <div class="tab-content tab2" v-if="tabActive === 1">
                tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere architecto, cupiditate reprehenderit nisi earum iure saepe ullam harum inventore, culpa soluta dicta sapiente, perferendis doloribus aut ab libero ipsum.
            </div>
            <div class="tab-content tab3" v-if="tabActive === 2">
                tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere architecto, cupiditate reprehenderit nisi earum iure saepe ullam harum inventore, culpa soluta dicta sapiente, perferendis doloribus aut ab libero ipsum.
            </div>
        </comp-tabs>
    </div>
</template>

<script>
    import CompTabs from './CompTabs.vue';
    export default {
        name: 'demo-slot',
        data(){
            return{
                tabsHeader: [
                    {text: 'tab1'},
                    {text: 'tab2'},
                    {text: 'tab3'},
                ],
                tabActive: 0,
            }
        },
        components:{
            CompTabs
        },
        methods:{
            setActiveTab(index){
                this.tabActive = index;
            }
        }
    }
</script>

<style lang="css" scoped>
    .demo-slot{
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }


</style>