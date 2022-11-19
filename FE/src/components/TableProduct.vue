<script>
    export default {
        props: {
            products: { type: Array, default: {} },
            activeIndex: { type: Number, default: -1 },
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index);
            }
        },
        data() {
            return {
                // products: [],
                // activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
            productStrings() {
                return this.products.map((product) => {
                    const { name, genres, price, image, description } = product;
                    return [name, genres, price, image, description].join("");
                });
            },
            activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
            },
            filteredProducts() {
            if (!this.searchText) return this.products;
                return this.products.filter((_product, index) =>
                    this.productStrings[index].includes(this.searchText)

                );
            },
        }
    };

</script>

<style>

</style>
<template>
    <div>
        <button type="button" class="btn btn-primary">Thêm mới</button>
        <table class="table table-striped mt-2" id="myTable" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Thông tin chi tiết</th>
                    <th scope="col">Hiệu chỉnh</th>
                </tr>
            </thead>
            <tbody         
            v-for="(product, index) in products"
            :key="product._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)">
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.genres}}</td>
                    <td>{{product.description}}</td>
                    <td>
                        <!-- <router-link
                        :to="{
                        name: 'product.edit',
                        params: { id: activeProduct._id },
                        }"
                        > -->
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        <!-- </router-link> -->
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>