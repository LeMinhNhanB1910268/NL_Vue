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
      _id : localStorage.getItem('_id'),
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
            <img :src="product.imageUrl" class="card-img-top" alt="...">
          </div>
          <div class="col-sm-8">
            <div class="ml-5">
              <p class="title-name">{{product.name}}</p>
              <p class="content">Biên chế: {{product.club}}</p>
              <p class="content">Giá bán: {{product.price}}</p>
              <p class="content">Số lượng còn: {{product.amount}}</p>
              <!-- <router-link :to="{ name: 'AddOrder', params: {name: product.name}}"> -->
                <a :href="'../CreatOrder/'+product.name+'/'+product.price">    <button type="button" class="btn btn-danger shopping">Đặt hàng</button></a>
              <!-- </router-link> -->

            </div>
          </div>
        </div>
        <div class="mt-4">
        </div>
    </div>
</template>
