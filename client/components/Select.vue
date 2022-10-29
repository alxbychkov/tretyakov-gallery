<script setup>
defineProps({
  filters: {
    type: Object,
  },
});

const emit = defineEmits(["select"]);

const select = ref("");

const onInput = (key) => {
  emit("select", key, select.value.value);
};
</script>
<template>
  <select
    class="form-select me-2"
    ref="select"
    @input="onInput(filters[0])"
    :disabled="filters[1].size < 2"
  >
    <option value="">{{ filters[0] }} (all)</option>
    <option v-for="value in filters[1]" :value="value" :key="value">
      {{ value }}
    </option>
  </select>
</template>
