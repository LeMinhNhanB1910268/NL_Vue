<template>
    <div v-if="account" class="form shadow-lg">

        <form @submit="EditUser(id, account)" class="form-item">
            <h3 class="text-center mt-4">Thay đổi thông tin tài khoản</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.username">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.password">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Chức năng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.root">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số điện thoại</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.phone">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.email">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.own.address">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Avatar</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.avatar">
                    </div>
                </div> 
                

                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'productmanager'}"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
            </div>
        </form>
    </div>
</template>
<style>
.form {
    margin: 0 auto;
    width: 700px;
}
.form-item{
    padding: 10px;
}
</style>
<script>
import accountService from '../services/account.service';
    export default {
        data(){
            return{
                account:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getAccout(id){
                this.account = await accountService.get(id)
            },
            async EditUser(id,account){
                this.account = await accountService.update(id,account)
            }
        },
        created(){
            this.getAccout(this.id)
        }
    }

</script>
    