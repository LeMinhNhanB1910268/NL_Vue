<template>
    <div v-if="account">
        <form @submit="EditAccount(id, account)">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="account.username">
                </div>
                <label class="col-sm-2 col-form-label">text</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="account.password">
                </div>
                <label class="col-sm-2 col-form-label">root</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="account.root">
                </div>
                <label class="col-sm-2 col-form-label">avatar</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="account.avatar">
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
            async EditAccount(id,account){
                this.account = await accountService.update(id,account)
            }
        },
        created(){
            this.getAccout(this.id)
        }
    }

</script>
    