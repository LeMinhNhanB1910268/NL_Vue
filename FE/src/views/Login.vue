<template>
    <div class="container" style="margin-bottom:100px">  
        <h1 style="text-align:center">Đăng nhập</h1> 
        <br />
        <br />
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form @submit="Login">
                    <div class="form-group">
                        <label style="font-weight:bolder">UserName:</label>
                        <input 
                        type="text"
                        v-model="user.username" 
                        class="form-control" 
                        placeholder=" Nhập vào username">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Password:</label>
                        <input 
                        type="password" 
                        v-model="user.password"
                        class="form-control" 
                        placeholder=" Nhập vào Password">
                    </div>
                    <div>
                        <button type="submit" style="width:48%; margin: 0 0 5px 5px" class="btn btn-primary">ĐĂNG NHẬP</button>
                        <button type="submit" style="width:48%; margin: 0 0 5px 5px;" class="btn btn-danger">ĐĂNG KÝ</button>
                    </div>
                    
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>
<script>
import authService from '../services/auth.service';

export default{
    data(){
        return{
            user: {},
        }
    },
    methods: {
        async Login(evt) {
            evt.preventDefault()
            await authService.login(this.user)
                .then(response => {

                    console.log(response)
                    localStorage.setItem('token', response.accessToken)
                    localStorage.setItem('admin', response.admin)
                    localStorage.setItem('name', response.name)
                    localStorage.setItem('username', response.username)
                    localStorage.setItem('email', response.email)
                    localStorage.setItem('phone', response.phone)
                    localStorage.setItem('address', response.address)
                    localStorage.setItem('_id', response._id)
                    this.$router.push({
                        name: 'home-client',
                        params: { name: response.name },
                    })
                })
        }
    },
}
</script>
