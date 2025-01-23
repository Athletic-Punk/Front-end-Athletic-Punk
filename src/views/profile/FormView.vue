<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue';
import FooterView from '@/components/desktop/elements/FooterView.vue';
import formulate from '@/components/desktop/profile/formulate.vue';
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <formulate />
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
  </main>
  <FooterView />
</template>
