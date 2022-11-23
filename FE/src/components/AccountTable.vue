<script>
    import AccountService from "../services/account.service";
    export default {
        data() {
            return {
                accounts: [],
                users: null,
            }
        },
        methods: {
            
            // async getName(id){
            //     this.users == await UserService.get(id);
            // },
            async DeleteAccount(id){
               await AccountService.delete(id);
               this.accounts = await AccountService.getAll();
            },
            // async creatAccount(){
            //     await AccountService.addAccount();
            //     this.accounts = await AccountService.getAll();
            // }
        },
        async created(){
            this.accounts = await AccountService.getAll();
        }
    };
</script>

<style>

</style>
<template>
    <div>
        <router-link :to="{name: 'AddAccount',}">
            <button type="button" class="btn btn-primary">Thêm mới</button>
        </router-link>
        
        
        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Chức năng</th>
                    <th scope="col">Tên người sở hữu</th>
                    <th scope="col">Hiệu chỉnh</th>
                </tr>
            </thead>
            <tbody         
            v-for="(account, index) in accounts"
            :key="account._id"
            :class="{ active: index === activeIndex }"
            >
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{account.username}}</td>
                    <td>{{account.password}}</td>
                    <td>{{account.root}}</td>
                    <td >{{account.own.name}}</td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'EditAccount',
                                params:{id : account._id },
                             }">
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger" @click="DeleteAccount(account._id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>