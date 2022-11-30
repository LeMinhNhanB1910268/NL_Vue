<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm đơn hàng</h3>
        <form @submit="AddOrder" class="form-item">
            <div class="form-group" >
                <!-- <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">UID</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="_id">
                    </div>
                </div> -->
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Tên SP</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="productName">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="productPrice">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Kích cỡ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.size">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số áo</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.number">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">In tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.namePlayer">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số lượng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.sl">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ghi chú</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.description">
                    </div>
                </div>

                <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                <button class="btn btn-primary mt-4">Thêm</button>
                </router-link>
                <button class="btn btn-primary mt-4" v-else >Thêm</button>
                <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
                <router-link :to="{name: 'ordermanager'}" v-else> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>

            </div>
        </form>
    </div>
</template>
<style>
@import "../assets/style.css";
.form {
    margin: 0 auto;
    width: 700px;
}
.form-item{
    padding: 10px;
}
</style>
<script>
import cartService from '../services/cart.service';
import productService from '../services/product.service';

    export default {
        data(){
            return{
                cart: null,
                _id : localStorage.getItem('_id'),
            //    id : this.$route.params.id
                productName: "",
                productPrice: "",
                admin : localStorage.getItem('admin'),
            }
        },
        props:{
            name : {type: String, req: true},
            price : {type: String, req: true},
        },
        methods: {
            // async getAccout(id){
            //     this.account = await accountService.get(id)
            // },

            async AddOrder(){
                // evt.preventDefault()
                 await cartService.create(
                    {          
                        userId: this._id,
                        productName: this.productName, 
                        productPrice: this.productPrice, 
                        size: this.cart.size,
                        nunmber: this.cart.nunmber,
                        namePlayer: this.cart.namePlayer,
                        sl: this.cart.sl,
                        description: this.cart.description,
                        state: 'chờ xữ lý'
                    }
                )
            }},
            created(){
            this.cart = {};
            // if(this.name != undefined ){
            //     this.productName = this.name;
            //  }
             if((this.name != undefined) && (this.price != undefined) ){
                this.productName = this.name;
                this.productPrice = this.price;
             }
          }
        }
        

</script>
    