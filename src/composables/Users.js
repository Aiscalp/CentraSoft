import User from "../api/UserApi";
import Address from "../api/AddressApi";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function useUser() {
  const data = ref([]);
  const usersdata = ref([]);
  const user = ref([]);
  const address = ref([]);
  const router = useRouter();
  const notyf = new Notyf();

  const getAllData = async (params) => {
    let response = await User.get("users", { params: params });
    data.value = response.data;
    usersdata.value = response.data;
  };

  const getUser = async (id) => {
    let response = await User.get(`users/${id}`);
    user.value = response.data;
  };
  const getAddress = async (id) => {
    let response = await Address.get(`users/${id}`);
    address.value = response.data.address;
  };

  const storeUser = async (data) => {
    try {
      await User.post(`users`, data);
      await Address.post(`users`, data);
      notyf.dismissAll();
      notyf.success(`The new user was created`);
      await router.push({ name: "user.index" });
    } catch (err) {
      notyf.error("Something went wrong with Back!");
    }
  };
  return {
    address,
    data,
    user,
    usersdata,
    getAllData,
    getUser,
    getAddress,
    storeUser,
  };
}
