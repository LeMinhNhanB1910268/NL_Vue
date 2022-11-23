<script>
import ProductService from '@/services/product.service'
export default {
  // name: 'productdetail',
  props:{
    id:{ type: String, required: true },
  },
  data () {
    return {
      product:{},
    };
  },
  methods: {
    async getbyid(id) {
      this.product = await ProductService.get(id)
    }
  },
  updated() {
    this.getbyid(this.id);
  },
  created() {
    this.getbyid(this.id);
  },
}
</script>
<style>
  .title-name{
    font-size: 40px;
    font-weight: 550;
    color: rebeccapurple
  }
  .content {
    font-size: 25px;
  }
  .shopping {
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
</style>
<template>
    <div class="container">
        <div class="row" v-if="product">
          <div class="col-sm-4">
            <img src="https://media.vov.vn/sites/default/files/styles/large/public/2021-08/man_city_0.jpg" class="card-img-top" alt="...">
          </div>
          <div class="col-sm-8">
            <div class="ml-5">
              <p class="title-name">{{product.name}}</p>
              <p class="content">Giá bán: {{product.price}}</p>
              <p class="content">Số lượng còn: {{product.amount}}</p>
              <button type="button" class="btn btn-danger shopping">Đặt hàng</button>
            </div>
          </div>
        </div>
        <div class="mt-4">
        </div>
    </div>
</template>
