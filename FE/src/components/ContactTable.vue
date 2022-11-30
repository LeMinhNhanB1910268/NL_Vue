
<script>
import ContactService from "../services/contact.service";
import SearchTable from "@/components/SearchTable.vue";
export default{
    data() {
        return {
            contacts: [],
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
        async Confirm(id){
            await CartService.update(id,
                {
                    state: "đã xữ lý"
                })
        }
    },
    computed: {
        contactStrings() {
            return this.contacts.map((contact) => {
                const { name } = contact;
                return [name].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    async created(){
        this.contacts = await ContactService.getAll();
        // this.$alert("Hello Vue Simple Alert.");
    }
};
</script>

<template>
<div class="container">
    <div class="row col-12">
        <div class="col-5"></div>
        <SearchTable class="col-4" v-model="searchText" />
    </div>
    <table class="table table-striped mt-2" id="table_id" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">UID</th>
                <th scope="col">Vấn đề</th>
                <th scope="col" style="max-width: 100px" >Trạng thái</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Xữ lý</th>
            </tr>
        </thead>
        <tbody  v-if="filteredContactsCount > 0"       
        v-for="(contact, index) in filteredContacts"
        :key="contact._id"
        :class="{ active: index === activeIndex }"
        >
            <tr id="rtable">
                <th scope="row"></th>
                <td>{{contact.userId}}</td>
                <td>{{contact.problem}}</td>

                <td >{{contact.state}}</td>
                <td >{{contact.description}}</td>
                <td>
                    <button type="button" class="btn btn-success ml-3" @click="Confirm(contact._id)">Đã xữ lý</button>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center">
            Không tìm thấy liên hệ
        </tbody>
    </table>
</div>
</template>