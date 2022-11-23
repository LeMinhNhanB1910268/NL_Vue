<template>
    <div>
        <form @submit="AddPromotion(promotion)">
            <div class="form-group row" >
                <label class="col-sm-2 col-form-label">name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="promotion.name">
                </div>
                <label class="col-sm-2 col-form-label">discount</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="promotion.discount">
                </div>
                <label class="col-sm-2 col-form-label">time</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="promotion.time">
                </div>
                <label class="col-sm-2 col-form-label">description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="promotion.description">
                </div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
import promotionService from '../services/promotion.service';
    export default {
        data(){
            return{
                promotion: null,
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
            async AddPromotion(data){
                 await promotionService.create({
                    name: this.account.name, 
                    discount: this.account.discount, 
                    time: this.account.time, 
                    description: this.account.description, 
                    Products:{ name: this.promotion.Products}})
            }
        },
        created(){
            this.promotion = {};
        }
    }

</script>
    