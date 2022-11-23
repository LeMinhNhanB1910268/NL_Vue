<script>
    import ProductService from "../services/product.service";
    export default{
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
    };

</script>

<template>
  <div class="container">
    <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody         

            >
                <tr id="rtable">
                    <td>{{product.name}}</td>
                    <td>{{product.genres}}</td>
                    <td>{{product.price}}</td>
                    <td >{{product.club}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

