<script>

import AccountService from "@/services/account.service";
import TableAccount from "../components/AccountTable.vue"
export default {
    components: {
        TableAccount
    },
    data() {
        return {
            accounts: [],
            activeIndex: -1,
        };
    },
    computed: {
        // accountStrings() {
        //     return this.accounts.map((account) => {
        //         const { name, clb, number, namepl } = account;
        //         return [name, clb, number, namepl].join("");
        //     });
        // },
    // Trả về các account có chứa thông tin cần tìm kiếm.
        filteredAccounts() {
            if (!this.searchText) return this.accounts;
                return this.accounts.filter((_account, index) =>
                    this.accountStrings[index].includes(this.searchText)

                );
        },
        activeAccount() {
            if (this.activeIndex < 0) return null;
            return this.filteredAccounts[this.activeIndex];
        },
        filteredAccountsCount() {
            return this.filteredAccounts.length;
        },
    },
    methods: {
        async retrieveAccounts() {
            try {
                this.accounts = await AccountService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveAccounts();
            this.activeIndex = -1;
        },
        // async removeAllProducts() {
        //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        //         try {
        //             await AccountService.deleteAll();
        //             this.refreshList();
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    mounted() {
        this.refreshList();
    },
};

</script>
<template>
    <div>
        <!-- <router-link :to="{name: 'manager'}">
            <i class="fa-solid fa-arrow-left back"></i>
        </router-link> -->

        <h2 class="mb-4">Danh sách tài khoản</h2>
        <div class="row">
            <TableAccount                 
                v-if="filteredAccountsCount > 0"
                :accounts="filteredAccounts"
                v-model:activeIndex="activeIndex">
            </TableAccount>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>
