<template>
    <div v-if="user" class="form shadow-lg">

        <form @submit="EditUser(id, user)" class="form-item">
            <h3 class="text-center mt-4">Thay đổi thông tin tài khoản</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.username">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.password">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Chức năng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.admin">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số điện thoại</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.phone">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.email">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.address">
                    </div>
                </div>
                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'accountmanager'}"> 
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
import userService from '../services/user.service';
    export default {
        data(){
            return{
                user:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getUser(id){
                this.user = await userService.get(id)
            },
            async EditUser(id,user){
                this.user = await userService.update(id,user)
            }
        },
        created(){
            this.getUser(this.id)
        }
    }

</script>
    