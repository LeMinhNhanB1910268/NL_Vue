
<template>
<div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button class="nav-link active" id="v-pills-home-tab" data-toggle="pill" data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Thống kế sản phẩm</button>
      <button class="nav-link" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Quản lý tài khoản</button>
      <button class="nav-link" id="v-pills-messages-tab" data-toggle="pill" data-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Quản lý sản phẩm</button>
      <button class="nav-link" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Quản lý đơn hàng</button>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Statistical /></div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><AccountManagerVue /></div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><ProductManagerVue /></div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><OrderManagerVue /></div>
    </div>
  </div>
</div>
</template>
<script>
import AccountManagerVue from './AccountManager.vue'
import ProductManagerVue from './ProductManager.vue'
import OrderManagerVue from './OrderManager.vue'
import Statistical from './Statistical.vue'
export default {
    components: {
        AccountManagerVue,
        ProductManagerVue,
        OrderManagerVue,
        Statistical
    }
}
</script>
