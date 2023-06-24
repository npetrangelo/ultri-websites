<template>
  <q-page class="flex row fit">
    <q-card class="q-pa-xl">
      <q-card-section>
        <div class="text-h3">Coming soon!</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h5">
        A digital logbook to keep all your decisions and agreements organized. It will implement sociocratic principles by default, with the option to use other tools where appropriate. It's built on top of the open source OpenSociocracy logbook, which we also built.
        </div>

      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import { useColorStore } from "../stores/color";

const auth = useAuthStore();
const color = useColorStore();

const plan = ref("yearly");

const triggerSignInDialog = async () => {
  auth.setTargetUrl("/member");
  auth.setSignInRequired(true);
  console.log(auth.targetUrl);
};

</script>

<style lang="scss">

</style>
