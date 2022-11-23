<template>
    <div>
        
        <Form @submit="AddProduct(product)"     :validation-schema="productFormSchema">
            <div class="form-group">
                <label for="name">Tên</label>
                <Field
                name="name"
                type="text"
                class="form-control"
                v-model="product.name"
                />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="genres">Loại</label>
                <Field
                name="genres"
                type="genres"
                class="form-control"
                v-model="product.genres"
                />
                <ErrorMessage name="genres" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="price">Giá</label>
                <Field
                name="price"
                type="text"
                class="form-control"
                v-model="product.price"
                />
                <ErrorMessage name="price" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="image">Hình ảnh</label>
                <Field
                name="image"
                type="tel"
                class="form-control"
                v-model="product.image"
                />
                <ErrorMessage name="image" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="description">Hình ảnh</label>
                <Field
                name="description"
                type="tel"
                class="form-control"
                v-model="product.description"
                />
                <ErrorMessage name="description" class="error-feedback" />
            </div>
            <button>Submit</button>
        </Form>
    </div>
</template>
<script>
import productService from '../services/product.service';
import * as yup from "yup";
import {Form, Field, ErrorMessage } from "vee-validate";
    export default {
        data(){
            const productFormSchema = yup.object().shape({
                name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
                genres: yup
                .string(),
                price: yup.string(),
            });
            return{
                product: null,
            //    id : this.$route.params.i
                productFormSchema,
            }
        },
        components: {
            Field,
            ErrorMessage,
            Form
        },
        // props:{
        //     id : {type: String, required: true},
        // },
        methods: {
            // async getAccout(id){
            //     this.product = await productService.get(id)
            // },
            async AddProduct(data){
                //  await productService.create({username: this.product.username, own:{ name: this.product.own}})
                 await productService.create({name: this.product.name, price: this.product.price})
            }
        },
        created(){
            this.product = {};
        }
    }

</script>
    