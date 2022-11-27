<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm khuyến mãi</h3>
        <form @submit="AddPromotion(promotion)" class="form-item">
            <div class="form-group" >
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ưu đãi</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.discount">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Thời gian</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.time">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Chi tiết</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.description">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Hình ảnh</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.imageUrl">
                    </div>
                </div>

                <button class="btn btn-primary mt-4">Thêm</button>
                <router-link :to="{name: 'promotionmanager'}"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
                <!-- <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.email">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số điện thoại</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.phone">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.address">
                    </div>
                </div>
                -->


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
import promotionService from '../services/promotion.service';
import userService from '../services/user.service';
    export default {
        data(){
            return{
                promotion: null,
                user: null,
            //    id : this.$route.params.id
            }
        },
        // props:{
        //     id : {type: String, required: true},
        // },
        methods: {
            // async getAccout(id){
            //     this.promotion = await promotionService.get(id)
            // },
            async AddPromotion(data){
                 await promotionService.create(
                    {
                        name: this.promotion.name, 
                        discount: this.promotion.discount,
                        time: this.promotion.time,
                        description: this.promotion.description,
                        imageUrl: this.promotion.imageUrl,
                    })

                    // await userService.create(
                    //     name: this.user.name, 
                    //     phone: this.user.phone,
                    //     email: this.user.email,
                    //     address: this.user.address,
                    // )
            }
        },
        created(){
            this.promotion = {};
            this.user = {};
        }
    }

</script>
    