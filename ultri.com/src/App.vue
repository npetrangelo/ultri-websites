<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import Passwordless from 'supertokens-web-js/recipe/passwordless'

SuperTokens.init({
    appInfo: {
        apiDomain: "https://api.service.opensociocracy.org",
        apiBasePath: "/auth",
        appName: "Ultri",
    },
    recipeList: [
        Session.init(),
        Passwordless.init(),
    ],
});

const $q = useQuasar()

console.log($q.dark.isActive)

</script>
