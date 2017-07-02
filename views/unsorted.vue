<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <p>Welcome to {{title}}</p>

        <ul>
            <li v-for="item in unsorted">
                {{ item.name }}
                <ul v-if="item.isDir">
                    <li v-for="file in item.files">
                        {{file}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<style lang="css">
</style>