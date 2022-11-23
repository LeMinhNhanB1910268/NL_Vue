<template>
    <div v-if="promotion">
        <form @submit="EditPromotion(id, promotion)">
            <div class="form-group row" >
                <label class="col-sm-2 col-form-label">name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"  v-model="promotion.name">
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
                promotion:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getPromotion(id){
                this.promotion = await promotionService.get(id)
            },
            async EditPromotion(id,promotion){
                this.promotion = await promotionService.update(id,promotion)
            }
        },
        created(){
            this.getPromotion(this.id)
        }
    }

</script>
    