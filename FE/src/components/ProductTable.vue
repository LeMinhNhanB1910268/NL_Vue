
<script>
    import { defineComponent } from 'vue';
    import ProductService from "../services/product.service";
    export default defineComponent({
        data() {
            return {
                products: [],
            }
        },
        // components: {
        //     VueSimpleAlert
        // },
        methods: {
            

            async DeleteProduct(id){
               await ProductService.delete(id);
               this.products = await ProductService.getAll();
               alert("Hello! I am an alert box!!");
            },
        },
        async created(){
            this.products = await ProductService.getAll();
            // this.$alert("Hello Vue Simple Alert.");
        }
    });
</script>
<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
<template>
    <div class="container">
        <router-link :to="{name: 'AddProduct',}">
            <button type="button" class="btn btn-primary">Thêm mới</button>
        </router-link>
        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại sản phẩm</th>
                    <th scope="col">Loại áo</th>
                    <th scope="col">Hiệu chỉnh</th>
                </tr>
            </thead>
            <tbody         
            v-for="(product, index) in products"
            :key="product._id"
            :class="{ active: index === activeIndex }"
            >
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{product.name}}</td>
                    <td>{{product.genres}}</td>
                    <td>{{product.price}}</td>
                    <td >{{product.club}}</td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'EditProduct',
                                params:{id : product._id },
                             }">
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger" @click="DeleteProduct(product._id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
            <!-- <DataTable
            class="table table-hover table-striped"
            width="100%"
            >
            <thead>
                <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
                </tr>
            </thead>
        </DataTable> -->
    </div>
</template>