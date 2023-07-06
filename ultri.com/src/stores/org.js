import { defineStore, storeToRefs  } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref, watch} from "vue";
import { api } from "boot/axios";


export const useOrgStore = defineStore("org", () => {
  const orgs = ref(useStorage("orgs", new Map()));
  const currentOrgUid = ref(useStorage("currentOrgUid", null));
  const fetching = ref(false);
  const fetched = ref(false);
  const showOrgCreateDialog = ref(false);

  const setCurrentOrg = (uid) => {
    currentOrgUid.value = uid;
  };
  const triggerOrgCreateDialog = () => {
    showOrgCreateDialog.value = true;
  };
  const validateOrgName = (orgName) => {
    if (orgName === null) {
      return false;
    }
    return orgName.length >= 2 && orgName.length <= 64;
  };
  const validateTitle = (title) => {
    return title.length >= 2 && title.length <= 64;
  };

  const loadOrgs = async () => {
    // POST an org

    const result = await api.get("/orgs");

    const orgsData = result.data;

    console.log(orgsData);

    return orgsData;
  };

  const createOrg = async (name) => {
    // POST an org

    const result = await api.post("/orgs", { name: name });

    const orgData = result.data;

    console.log(orgData);

    orgs.value.set(orgData.uid, orgData);

    showOrgCreateDialog.value = null;

    return orgData;
  };

  const $reset = () => {
    console.log(
    'RESET ORGS'
    )
    orgs.value = new Map();
    currentOrgUid.value = null;
    fetching.value = false;
    showOrgCreateDialog.value = false;
  }

  return {
    orgs,
    currentOrgUid,
    fetching,
    fetched,
    showOrgCreateDialog,
    loadOrgs,
    setCurrentOrg,
    triggerOrgCreateDialog,
    validateOrgName,
    validateTitle,
    createOrg,
    $reset
  };
});
