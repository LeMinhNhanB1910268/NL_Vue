<template>
    <!-- <router-link :to="{name: 'manager'}">
        <i class="fa-solid fa-arrow-left back"></i>
    </router-link> -->
    <h1>Biểu đồ thống kê</h1>
    <div>
        <h3>Thống kê số sản phẩm trong kho</h3>
        <canvas id="myChart1"></canvas>
    </div>

    <div class="mt-4">
        <h3>Thống kê số đơn hàng</h3>
        <canvas id="myChart2"></canvas>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>
<script>
    import Chart from 'chart.js/auto';
    import productService from '../services/product.service'
    export default {
        data() {
            return {
                products: [],
                tuyen: 0
            }
        },
        methods: {
            countProduct(){
               let count;
                for (let i=0; i<this.products.lenght; i++){
                    alert("5");
                    // console.log(this.products[i].genres);
                    // if (this.products[i].genres == 'tuyen' ) count++;
                }
                console.log(count);
                return count;
            },
            async getAllProduct(){
                this.products = await productService.getAll();
            }
        },
        mounted() {
            this.getAllProduct();
             this.countProduct();
            const ctx = document.getElementById('myChart1')
            const ctx1 = document.getElementById('myChart2')
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Áo đội tuyển', 'Áo câu lạc bộ', 'Áo trơn'],
                    datasets: [{
                        label: 'Áo đội tuyển',
                        data: [65, 59, 80],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)'
    
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                        ],
                        borderWidth: 1
                    }]
                }   
            });

            new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                    datasets: [{
                        label: 'Số lượng',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }   
            });
        }
    }
</script>