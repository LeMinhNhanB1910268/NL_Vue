<template>
    <div>
        <form @submit="AddAccount(account)">
            <div class="form-group row" >
                <label class="col-sm-2 col-form-label">username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"  v-model="account.own">
                </div>
                <label class="col-sm-2 col-form-label">password</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="account.username">
                </div>
                <label class="col-sm-2 col-form-label">root</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control">
                </div>
                <label class="col-sm-2 col-form-label">avatar</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control">
                </div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
import accountService from '../services/account.service';
    export default {
        data(){
            return{
                account: null,
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
                 await accountService.create({username: this.account.username, own:{ name: this.account.own}})
            }
        },
        created(){
            this.account = {};
        }
    }

</script>
    