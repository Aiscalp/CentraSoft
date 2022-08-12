<template>
  <div
    class="z-0 flex items-center justify-center mb-8 py-7 md:py-12 px-4 sm:px-6 lg:px-8 items-center"
  >
    <div
      class="max-w-md w-full space-y-8 p-4 bg-gray-100 rounded-xl shadow-lg z-10"
    >
      <div class="grid gap-8 grid-cols-1">
        <div class="flex flex-col">
          <div class="flex flex-col sm:flex-row items-center">
            <h2 v-if="!userId" class="font-semibold text-lg mr-auto">
              Create User
            </h2>
            <h2 v-else class="font-semibold text-lg mr-auto">User Info</h2>
            <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
          </div>
          <form @submit.prevent="saveUser" class="mt-5">
            <div class="form">
              <div class="flex-auto w-full mb-1 text-xs space-y-2">
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">Name</label>
                  <input
                    v-if="!userId"
                    v-model="userdata.name"
                    placeholder="Name"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    name="integration[shop_name]"
                    id="integration_shop_name"
                  />
                  <p v-else>
                    <i class="font-semibold text-gray-600 py-2">
                      {{ userdata.name }}
                    </i>
                  </p>
                  <p class="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2"
                    >User Name</label
                  >
                  <input
                    v-if="!userId"
                    v-model="userdata.username"
                    placeholder="User Name"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    name="integration[shop_name]"
                    id="integration_shop_name"
                  />
                  <p v-else>
                    <i class="font-semibold text-gray-600 py-2">
                      {{ userdata.username }}
                    </i>
                  </p>
                  <p class="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">E-mail</label>
                  <div
                    v-if="!userId"
                    class="flex flex-wrap items-stretch w-full mb-4 relative"
                  >
                    <div class="flex">
                      <span
                        class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-500 justify-center items-center text-xl rounded-lg text-white"
                      >
                        <span class="material-icons"> mail </span>
                      </span>
                    </div>
                    <input
                      v-model="userdata.email"
                      type="email"
                      class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="abcxy@abc.com"
                      required
                    />
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <p v-else>
                    <i class="font-semibold text-gray-600 py-2">
                      {{ userdata.email }}
                    </i>
                  </p>
                </div>

                <div v-if="!userId" class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">Phone</label>
                  <input
                    v-model="userdata.phone"
                    placeholder="Address"
                    required="required"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                    name="integration[street_address]"
                    id="integration_street_address"
                  />
                  <p class="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2"
                    >Address:</label
                  >
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Street</label
                    >
                    <input
                      v-if="!userId"
                      v-model="addressdata.street"
                      placeholder="Address"
                      required="required"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                    <p v-else>
                      <i class="font-semibold text-gray-600 py-2">
                        {{ addressdata.street }}
                      </i>
                    </p>
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>

                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Suite</label
                    >
                    <input
                      v-if="!userId"
                      v-model="addressdata.suite"
                      placeholder="Address"
                      required="required"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                    <p v-else>
                      <i class="font-semibold text-gray-600 py-2">
                        {{ addressdata.suite }}
                      </i>
                    </p>
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Zipcode</label
                    >
                    <input
                      v-if="!userId"
                      v-model="addressdata.zipcode"
                      placeholder="Zipcode"
                      required="required"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                    <p v-else>
                      <i class="font-semibold text-gray-600 py-2">
                        {{ addressdata.zipcode }}
                      </i>
                    </p>
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse"
              >
                <button
                  @click="this.$router.push('/')"
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  v-if="!userId"
                  type="submit"
                  class="transition duration-200 ease-in-out mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import useUser from "../../composables/Users";
export default {
  name: "UserForm",
  props: {
    userId: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    let userdata = reactive({
      name: "",
      usernamename: "",
      email: "",
      phone: "",
    });
    let addressdata = reactive({
      street: "",
      suite: "",
      zipcode: "",
    });
    const { address, user, getAddress, getUser, storeUser } = useUser();

    if (props.userId) {
      onMounted(getUser(props.userId), getAddress(props.userId));
      userdata = user;
      addressdata = address;
    }

    const saveUser = async () => {
      props.userId;
      await storeUser({ ...userdata });
    };

    return {
      addressdata,
      userdata,
      saveUser,
    };
  },
};
</script>

<style scoped></style>
