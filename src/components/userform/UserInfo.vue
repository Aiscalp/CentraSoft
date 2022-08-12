<template>
  <user-form :userId="id"> </user-form>
</template>

<script>
import UserForm from "../userform/UserForm.vue";
export default {
  name: "UserInfo",
  components: { UserForm },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
};
</script>

<style></style>
