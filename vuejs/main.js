var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Smartphone'
    },
    methods: {
        say: function(text){
            return "Hello" + text;
        }
    }
})

console.log(vueInstance);

setTimeout(() => {
    vueInstance.title = 'Dien thoai';
}, 3000);