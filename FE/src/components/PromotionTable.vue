<script>
    import PromotionService from "../services/promotion.service"
    export default {
        data() {
            return {
                promotions: [],
            }
        },
        methods: {
            
            async getName(id){
                this.promotions == await PromotionService.get(id);
            },
            async DeletePromotion(id){
               await PromotionService.delete(id);
               this.promotions = await PromotionService.getAll();
            },
            async creatpromotion(){
                await PromotionService.create();
                this.promotions = await PromotionService.getAll();
            }
        },
        async created(){
            this.promotions = await PromotionService.getAll();
        }
    };
</script>

<style>

</style>
<template>
    <div>
        <router-link :to="{name: 'AddPromotion',}">
            <button type="button" class="btn btn-primary">Thêm mới</button>
        </router-link>
        
        
        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Chức năng</th>
                    <th scope="col">Tên người sở hữu</th>
                    <th scope="col">Hiệu chỉnh</th>
                </tr>
            </thead>
            <tbody         
            v-for="(promotion, index) in promotions"
            :key="promotion._id"
            :class="{ active: index === activeIndex }"
            >
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{promotion.name}}</td>
                    <td>{{promotion.discount}}</td>
                    <td>{{promotion.time}}</td>
                    <td >{{promotion.description}}</td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'EditPromotion',
                                params:{id : promotion._id },
                             }">
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger" @click="DeletePromotion(promotion._id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>