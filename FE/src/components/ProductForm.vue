<template>
    <Form
    @submit="submitProduct"
    :validation-schema="productFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
            name="name"
            type="text"
            class="form-control"
            v-model="productLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="genres">Loại</label>
            <Field
            name="genres"
            type="genres"
            class="form-control"
            v-model="productLocal.genres"
            />
            <ErrorMessage name="genres" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Giá</label>
            <Field
            name="price"
            type="text"
            class="form-control"
            v-model="productLocal.price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="image">Hình ảnh</label>
            <Field
            name="image"
            type="tel"
            class="form-control"
            v-model="productLocal.image"
            />
            <ErrorMessage name="image" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="description">Hình ảnh</label>
            <Field
            name="description"
            type="tel"
            class="form-control"
            v-model="productLocal.description"
            />
            <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
        </div>
    </Form>
</template>
<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        emits: ["submit:product", "delete:product"],
        props: {
            product: { type: Object, required: true }
        },
        data() {
            const productFormSchema = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
            genres: yup
            .string(),
            price: yup.string(),
            image: yup
            .string(),
            description: yup
            .string(),
            });
            return {
            productLocal: this.product,
            productFormSchema,
            };
        },
    };
</script>
<style scoped>
    @import "@/assets/form.css";
</style>