<template>
  <user-form> </user-form>
</template>

<script>
import UserForm from "../userform/UserForm.vue";
export default {
  name: "UserCreate",
  components: { UserForm },
  props: {
    id: {
      required: false,
    },
  },
};
</script>

<style></style>
