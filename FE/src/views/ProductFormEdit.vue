<template>
    <div v-if="product">
        <form @submit="EditProduct(id, product)">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.name">
                </div>
                <label class="col-sm-2 col-form-label">text</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.genres">
                </div>
                <label class="col-sm-2 col-form-label">root</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.price">
                </div>
                <label class="col-sm-2 col-form-label">avatar</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.club">
                </div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
import productService from '../services/product.service';
    export default {
        data(){
            return{
                product:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getAccout(id){
                this.product = await productService.get(id)
            },
            async EditProduct(id,product){
                this.product = await productService.update(id,product);
            }
        },
        created(){
            this.getAccout(this.id)
        }
    }

</script>
    