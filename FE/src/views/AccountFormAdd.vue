<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm tài khoản</h3>
        <form @submit="AddAccount(account)" class="form-item">
            <div class="form-group" >
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
                        <input type="text" class="form-control"  v-model="own.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="own.phone">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="own.email">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="own.address">
                    </div>
                </div>

                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Avatar</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="account.avatar">
                    </div>
                </div> 
                

                <button class="btn btn-primary mt-4">Thêm</button>
                <router-link :to="{name: 'accountmanager'}"> 
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
import accountService from '../services/account.service';
import userService from '../services/user.service';
    export default {
        data(){
            return{
                account: null,
                user: null,
                own:null
            //    id : this.$route.params.id
            }
        },
        // props:{
        //     id : {type: String, required: true},
        // },
        methods: {
            // async getAccout(id){
            //     this.account = await accountService.get(id)
            // },
            async AddAccount(data){
                 await accountService.create(
                    {
                        username: this.account.username, 
                        password: this.account.password,
                        root: this.account.root,
                        avatar: this.account.avatar,
                        own: this.own
                    })
                    await userService.create({
                        name: this.own.name, 
                        phone: this.own.phone,
                        email: this.own.email,
                        address: this.own.address,
                    })
            }
        },
        created(){
            this.account = {};
            this.user = {};
            this.own = {};
        }
    }

</script>
    