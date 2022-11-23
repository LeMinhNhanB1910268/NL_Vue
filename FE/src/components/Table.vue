<script setup lang="ts">
    import DataTable from 'datatables.net-vue3';
    import DataTablesLib from 'datatables.net-bs5';
    DataTable.use(DataTablesLib);
</script>
<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
<template>
    <div class="container">
            <DataTable
            class="table table-hover table-striped"
            width="100%"
            >
            <thead>
                <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
                </tr>
            </thead>
        </DataTable>
    </div>
</template>