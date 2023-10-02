var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun',
        url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6',
        target: '_blank',
        price: '20000',
        sale: 0.3,
        selectedProduct: 0,
        cardNumber: 5,
        listProductDetail:[
            {
                image: 'images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            },
            {
                image: 'images/black.jpg',
                quantity: 5,
                textColor: 'Màu Đen'
            },
            {
                image: 'images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            }
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>`,
    },
    methods:{
        handleClickColor(e, index){
            this.selectedProduct = index;
            // console.log(e,index);
        },
        classActive(index){
            return {
                active: this.selectedProduct === index
            }
        },
        addToCard(e){
            if(this.cardNumber + 1 > this.getProduct.quantity){
                alert('Không đủ số lượng')
            }else{
                this.cardNumber = this.cardNumber + 1
            }
        }
    },
    computed:{
        formatOriginalPrice(){
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price);
        },
        formatFinalPrice(){
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },  
        getProduct(){
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        },

    }
})