<template>
    <form>
    <div class="form-group row">
        <label  class="col-sm-2 col-form-label">username</label>
        <div class="col-sm-10">
        <input type="text" class="form-control">
        </div>
        <label  class="col-sm-2 col-form-label">text</label>
        <div class="col-sm-10">
        <input type="text" class="form-control">
        </div>
        <label  class="col-sm-2 col-form-label">root</label>
        <div class="col-sm-10">
        <input type="text" class="form-control">
        </div>
        <label  class="col-sm-2 col-form-label">avatar</label>
        <div class="col-sm-10">
        <input type="text" class="form-control">
        </div>
    </div>
    <button>submit</button>
    </form>
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
            }
        },
        created(){
            this.getAccout(this.id)
        }
    }

</script>
    