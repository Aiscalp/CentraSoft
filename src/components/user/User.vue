<template>
  <tr>
    <td class="px-20 py-5 border-gray-200 bg-white text-sm cursor-pointer">
      <div class="flex items-center">
        <div class="ml-2 text-sm">
          <p class="md:text-base text-gray-900 whitespace-pre">
            {{ userdata.name }}
          </p>
        </div>
      </div>
    </td>

    <td class="px-20 py-5 bg-white text-sm">
      <p class="md:text-base text-gray-900 whitespace-no-wrap">
        {{ userdata.email }}
      </p>
    </td>
    <td class="hidden xl:table-cell py-5 md:pl-1 bg-white text-sm">
      <p class="md:text-base text-gray-900 whitespace-no-wrap">
        {{ userdata.phone }}
      </p>
    </td>

    <td
      class="hidden md:table-cell text-center md:pl-1 md:py-5 bg-white text-sm"
    >
      <router-link
        :to="{ name: 'user.info', params: { id: userdata.id } }"
        class="text-gray-500 hover:text-blue-500 mx-2"
      >
        <i
          class="font-bold transition duration-200 ease-in-out material-icons-outlined md:text-md"
          >manage_accounts</i
        >
      </router-link>
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: {
    userdata: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
td {
  width: 1%;
}
</style>
