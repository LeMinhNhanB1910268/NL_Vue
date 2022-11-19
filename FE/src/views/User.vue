<template>
    <div class="container">
        <h1 class="text-center">Thông tin tài khoản</h1>
        <div class="row mt-4">
            <div class="col-2">
                <img src="../assets/logo.png" alt="" width="150" height="150">
            </div>
            <div class="col-8 head-user">
                <p><label for="">Tên đăng nhập:  </label> nhanminhle</p>
                <p><label for="">UID: </label>1234567890</p>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
        </div>
        <div class="mt-4 space"><h2>Thông tin cá nhân</h2></div>
        <div class="row mt-4">
            <div class="col-12 userdetail">
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Họ và tên:  </label></div>
                    <div class="col-9 d-inline"><p> Lê Minh nhân</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Địa chỉ:  </label></div>
                    <div class="col-9 d-inline"><p> Vĩnh Long</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Số điện thoại:  </label></div>
                    <div class="col-9 d-inline"><p> 0123456789</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Email:  </label></div>
                    <div class="col-9 d-inline">   <p> nhan@gmail.com</p></div>
                </div>



                
                
                
             
            </div>
        </div>
        <div class="mt-4 space"><h2>Thông tin tài khoản</h2></div>
        <div class="row mt-4">
            <div class="col-12 userdetail">
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Username:  </label></div>
                    <div class="col-9 d-inline">      <p> nhanminhle</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">password:  </label></div>
                    <div class="col-9 d-inline">  <p> ********</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Email:  </label></div>
                    <div class="col-9 d-inline">               <p> nh**@gmail.com</p></div>
                </div>
             
                
    
            </div>
        </div>
    </div>
</template>
<style>
    .userdetail p{
        margin: 10px;
        font-size: 20px;
        margin-top: 5px;
    }
    .head-user p{
        font-size: 25px;
    }
    .space {
        background-color: #F7F7FA;
    }
    label {
        font-size: 20px;
    }
</style>