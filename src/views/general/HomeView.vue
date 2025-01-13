<script setup>
/*desktop component imports*/
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import banner from '@/components/desktop/general/home/banner.vue'
import find from '@/components/desktop/general/home/find.vue'
import sports from '@/components/desktop/general/home/sports.vue'
import FooterView from '@/components/desktop/elements/FooterView.vue'
</script>

<template>
  <HeaderView />
  <main>
    <div class="flag">
      <img src="/public/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
    <banner />
    <find />
    <sports />
    <div class="flag">
      <img src="/public/brazil-flag.png" alt="Bandeira do Brasil" />
    </div>
  </main>
  <FooterView />
</template>

<style scoped>
.flag {
  display: flex;
  justify-content: center;
  margin: 5vw;
}

.flag:first-of-type {
  margin-top: 2vw;
}
</style>
