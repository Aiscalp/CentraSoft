<template>
  <div>
    <div class="container mx-auto pb-6 px-4 sm:px-8">
      <div class="py-8 md:py-4">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-6 overflow-x-auto">
          <div class="flex justify-between">
            <div>
              <router-link
                to="/create"
                class="hover:shadow-md p-3 md:p-2 rounded-full duration-1000 ease-in-out transform hover:scale-125 delay-200 hover:bg-blue-300 hover:text-3xl font-bold text-center bg-blue-200 cursor-pointer"
              >
                + Add User</router-link
              >
            </div>
          </div>
          <div
            class="inline-block min-w-full shadow md:shadow-xl md:pl-4 pt-6 rounded-lg overflow-hidden"
          >
            <tbody>
              <transition-group name="list">
                <user
                  v-for="user in pagiatedUsers"
                  :key="user.id + 122"
                  :userdata="user"
                  @click="openModal(user)"
                ></user>
              </transition-group>
            </tbody>
          </div>
          <div class="userListPagination">
            <div
              class="page"
              v-for="page in pages"
              :key="page"
              :class="{'pageSelected': page===pageNumber}"
              @click="pageClick(page)"
            >
              {{ page }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import useUser from "../../composables/Users";
import User from "../user/User.vue";
export default {
  name: "ListUser",
  components: {
    User,
  },

  data() {
    return {
      usersPerPage: 5,
      pageNumber: 1,
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.usersdata.length / 5);
    },
    pagiatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.usersdata.slice(from, to);
    },
  },

  methods: {
    pageClick(page) {
        this.pageNumber = page
    }
  },

  setup() {
    //Get User data

    const { usersdata, getAllData } = useUser();

    //Modal for responsive design
    const isOpenModal = ref(false);
    const modalData = ref([]);
    const openModal = (data) => {
      if (window.innerWidth < 820) {
        isOpenModal.value = true;
        modalData.value = { ...data };
      }
    };

    onMounted(async () => {
      await getAllData({});
    });

    return {
      usersdata,
      isOpenModal,
      modalData,
      openModal,
    };
  },
};
</script>

<style scoped>
th {
  text-align: center;
  padding-left: 75px;
}
.list-enter-active {
  animation: changePage 0.8s;
}
.list-leave-active {
  animation: changePage 0.8s reverse;
}
.userListPagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.page {
  padding: 8px;
  margin-right: 10px;
  border: solid 1px #e7e7e7;
}

.page:hover {
    background: #aeaeae;
    cursor: pointer;
    color: white;
}
.pageSelected {
    background: #aeaeae;
    cursor: pointer;
    color: white;
}
.listBody {
    align-content: center;
}

@keyframes changePage {
  0% {
    opacity: 0;
    transform: translate(20px, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
</style>
