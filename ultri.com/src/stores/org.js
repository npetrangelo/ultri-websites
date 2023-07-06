import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";
import { api } from "boot/axios";

export const useOrgStore = defineStore("org", () => {
  const orgs = ref(useStorage("orgs", new Map()));
  const currentOrgUid = ref(useStorage("currentOrgUid", null));
  const fetching = ref(false);
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

  const createOrg = async (name) => {
    // POST an org

    const result = await api.post("/orgs", { name: name });

    const orgData = result.data;

    console.log(orgData);

    orgs.value.set(orgData.uid, orgData);

    showOrgCreateDialog.value = null;

    return orgData;
  };

  return {
    orgs,
    currentOrgUid,
    fetching,
    showOrgCreateDialog,
    setCurrentOrg,
    triggerOrgCreateDialog,
    validateOrgName,
    validateTitle,
    createOrg
  };
});
