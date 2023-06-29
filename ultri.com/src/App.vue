<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import Passwordless from "supertokens-web-js/recipe/passwordless";

let apiHost;
if (process.env.DEV) {
  apiHost = "https://localhost";
}
if (process.env.PROD) {
  apiHost = "https://api.service.ultri.com";
}
console.log("APIHOST", apiHost);
SuperTokens.init({
  // enableDebugLogs: true,
  appInfo: {
    apiDomain: apiHost,
    apiBasePath: "/auth",
    appName: "Ultri",
  },
  recipeList: [
    Session.init({ getTokenTransferMethod: () => "cookie" }),
    Passwordless.init(),
  ],
});

const $q = useQuasar();

console.log($q.dark.isActive);
</script>
