<script>
    import AccountS from '../services/account.service'
    export default {
        data(){
            return{
                cart:[]
            }   
        },
    props: {
        products: { type: Array, default: {} },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        AddtoCart(id){
            this.cart.push(id)
            AccountS.update('6363d733c2386820d42303d3',
            {"username": "minhnhan",
            "password": "nhan123",
            "root": "true",
            "avatar": "fsdfs","store": this.cart}
        )
        }
    },
};
</script>
<style>
    .show-detail {
        background-color: #54a0ff;
        border-radius: 10px;
        border-color: white;
    }
    .shopping-card {
        font-size: 30px;
        margin-left: 10px;
        color: red;
    }
</style>
<template>
    <div class="card" style="margin:1% 1%; width: 23%;"
        v-for="(product, index) in products"
        :key="product._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
        >
        <div>
            <!-- https://media.vov.vn/sites/default/files/styles/large/public/2021-08/man_city_0.jpg -->
            <img :src="product.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Câu lạc bộ: {{ product.club }}</p>
                <p class="card-text">Giá: {{ product.price}}</p>
                <p class="card-text">Số lượng: {{ product.number}}</p>
                <router-link :to="{name: 'productdetail', params: {id: product._id}}">
                    <button class="show-detail text-white">Xem chi tiết sản phẩm</button>
                </router-link>
                <i class="fa-solid fa-cart-plus shopping-card" @click="AddtoCart(product._id)"></i>
            </div>
        </div>
    </div>
</template>