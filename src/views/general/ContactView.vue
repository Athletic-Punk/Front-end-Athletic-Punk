<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import FooterView from '@/components/desktop/elements/FooterView.vue'
import content from '@/components/desktop/general/contact/content.vue'
import info from '@/components/desktop/general/contact/info.vue'
import technologies from '@/components/desktop/general/contact/technologies.vue'
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <content />
    <info />
    <technologies />
    <div class="flag">
      <img src="/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
  </main>
  <FooterView />
</template>
