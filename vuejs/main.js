var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Smartphone',
        counter: 0,
        clientX: 0,
        clientY: 0,
        message: 'Error',
        a: 0,
        b: 0,
        number: 20,
        num: 25,
        firstName: 'Luan',
        textClass: 'active',
        isActive: true,
        isError: false,
        activeColor: 'red',
        fontSize: '30',
        bg: 'https://img.freepik.com/premium-photo/abstract-3d-illustration-neon-glowing-frame_250994-203.jpg',
        tabSelected: 'login',
        items: [
            {   
                id: '01',
                note: 'a',
            },
            {   
                id: '02',
                note: 'b',
            },
            {   
                id: '03',
                note: 'c',
            },
            {   
                id: '04',
                note: 'v',
            }
        ],
        arrUser: [
            {email: 'test01@gmail.com', isActived: true},
            {email: 'test02@gmail.com', isActived: true},
            {email: 'test03@gmail.com', isActived: false},
            {email: 'test04@gmail.com', isActived: true},
            {email: 'test05@gmail.com', isActived: false}
        ]
    },
    methods: {
        say: function(text){
            return "Hello" + text;
        },

        // click luôn nhận biến truyền vào (vd: number)
        handleClick(event ,number){
            console.log("event: " , event.target);
            this.counter += number;
        },
        handleMouseMove(e){
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleSubmitForm(e){
            console.log(e);
        },
        reverseMessage: function(){
            return this.message.split('').reverse().join('');
        },

        // handleKeyUp(e){
        //     this.firstName = e.target.value;
        //     console.log(e.target);
        // }

        // rang buoc class
        changeActive(){
            // if isActive = true -> false
            // if isActive = false -> true
            return this.isActive = !this.isActive
        },
        changeTab(text){
            this.tabSelected = text
        }
    },
    computed: {
         // Computed
        // reverseMessage: function(){
        //     return this.message.split('').reverse().join('');
        // }

        // Computed
        addA(){
            console.log('addA run');
            return this.a + this.number;
        },
        addB(){
            console.log('addB run');
            return this.b + this.number;
        },

        // rang buoc class

        objClass: function(){
            return{
                active: this.isActive,
                error: this.isError,
            }
        },
        objStyle(){
            return{
                backgroundImage: 'url(' + this.bg + ')',
                margin: '0'
            }
        },

        userActive(){
            return this.arrUser.filter(function(e){
                return e.isActived == false;
            })
        }


    }
})

// console.log(vueInstance);

setTimeout(() => {
    vueInstance.title = 'Dien thoai';
}, 3000);