<script>
import AccountService from "@/services/account.service";
import OrderTable from "../components/OrderTable.vue"
    export default {
        components: {
            OrderTable
        },
        data() {
        return {
            accounts: [],
            activeIndex: -1,
        };
    },
    computed: {
        accountStrings() {
            return this.accounts.map((account) => {
                const { name, clb, number, namepl } = account;
                return [name, clb, number, namepl].join("");
            });
        },
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
        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await AccountService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    mounted() {
        this.refreshList();
    },
    }
</script>
<template>
    <div>
        <h2>
            Danh sách đơn hàng
            <OrderTable></OrderTable>

        </h2>
    </div>
</template>