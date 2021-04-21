<template>
  <div>
    <label :for="name">{{ label }}<span v-if="required">*</span> : </label>
    <select :name="name" :id="name">
      <option v-for="element in liste" :key="element.key" :value="element.key">{{ element.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    name: String,
    label: String,
    required: Boolean,
    liste: {}
  }
}
</script>

<style scoped>

</style>
