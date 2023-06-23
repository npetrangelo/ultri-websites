<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-h2 full-width text-center text-bold navbar-brand-link">
      {{ $t('homepage.heading1') }}
      <br />
      {{ $t('homepage.heading2') }}
      <br />
      {{ $t('homepage.heading3') }}
      <br />
      {{ $t('homepage.heading4') }}
    </div>
    <div class="text-h3 full-width  text-center text-bold navbar-text-link">{{ $t('homepage.tagline') }}</div>
    <div class="full-width  text-center">
      <q-btn
        size="xl"
        :label="$t('homepage.button')"
        color="primary"
        href="https://discord.gg/tG7sCar5"
        rounded
      ></q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();

const triggerSignInDialog = async () => {
  auth.setTargetUrl('/member');
  auth.setSignInRequired(true);
  console.log(auth.targetUrl)
}


const $q = useQuasar()

console.log($q.dark.isActive)
</script>
