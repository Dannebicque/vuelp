<template>
  <div class="form-group">
    <label :for="name">{{ label }}<span v-if="required">*</span> : </label>
    <input type="text"
           @input="handleInput"
           :id="name"
           :value="value"
           :name="name" class="form-control" :required="[required ? `required` : '']">
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props : {
    value: String,
    name: String,
    label: String,
    required: Boolean
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
