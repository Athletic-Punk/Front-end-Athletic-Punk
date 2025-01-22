<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import FooterView from '@/components/desktop/elements/FooterView.vue'
import banner from '@/components/desktop/general/sports/banner.vue'
import content from '@/components/desktop/general/sports/content.vue'
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner />
    <content />
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
  </main>
  <FooterView />
</template>

<style scoped></style>
