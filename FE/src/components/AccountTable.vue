<script>
import AccountService from "../services/account.service";
import SearchTable from "@/components/SearchTable.vue";
export default {
    data() {
        return {
            accounts: [],
            searchText: "",
            activeIndex: -1,
        }
    },
    components: {
        SearchTable
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        }
    },
    methods: {
        // async getName(id){
        //     this.users == await UserService.get(id);
        // },
        async DeleteAccount(id) {
            await AccountService.delete(id);
            this.accounts = await AccountService.getAll();
        },
        // async creatAccount(){
        //     await AccountService.addAccount();
        //     this.accounts = await AccountService.getAll();
        // }
    },
    computed: {
        accountStrings() {
            return this.accounts.map((account) => {
                const { username } = account;
                return [username].join("");
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
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
    async created() {
        this.accounts = await AccountService.getAll();
    }
};
</script>

<style>

</style>
<template>
    <div class="row col-12">
        <div class="row col-12">
            <router-link :to="{ name: 'AddAccount', }" class="col-3">
                <button type="button" class="btn btn-primary">Thêm mới</button>
            </router-link>
            <div class="col-5"></div>
            <SearchTable class="col-4" v-model="searchText" />
        </div>


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
            <tbody v-if="filteredAccountsCount > 0"  v-for="(account, index) in  filteredAccounts" :key="account._id" :class="{ active: index === activeIndex }">
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{ account.username }}</td>
                    <td>{{ account.password }}</td>
                    <td>{{ account.root }}</td>
                    <td>{{ account.own.name }}</td>
                    <td>
                        <router-link :to="{
                            name: 'EditAccount',
                            params: { id: account._id },
                        }">
                            <button type="button" class="btn btn-warning"><i
                                    class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger" @click="DeleteAccount(account._id)"><i
                                class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center">
                Không tìm thấy khuyến mãi
            </tbody>
        </table>
    </div>
</template>