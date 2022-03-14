<template>
    <div>
        test
        {{ data }}
    </div>
</template>

<script lang="ts" setup>
import { useQuery } from "@urql/vue";

const { data, error } = await useQuery({
    query: `query test {
                    fruits {
                        tree_name
                    }
                }`,
});

console.log(data);



</script>