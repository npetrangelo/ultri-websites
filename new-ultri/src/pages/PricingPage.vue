<template>
  <q-page class="row fit">
    <div class="row fit">
      <div class="col-xs-12 col-sm-6 col-md-3 text-center">
        <div>Free<br />No Benefits</div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 text-center">Monthly<br />Co-op</div>
      <div class="col-xs-12 col-sm-6 col-md-3 text-center">Yearly<br />Co-op</div>
      <div class="col-xs-12 col-sm-6 col-md-3 text-center">Business<br />Co-op</div>
    </div>
    <div class="row full-width fit">
      <div class="col-12 text-center fit">Lifetime<br />Membership</div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";

const auth = useAuthStore();

const hosted = ref("ultri-hosted");

const triggerSignInDialog = async () => {
  auth.setTargetUrl("/member");
  auth.setSignInRequired(true);
  console.log(auth.targetUrl);
};

const $q = useQuasar();

console.log($q.dark.isActive);
</script>
