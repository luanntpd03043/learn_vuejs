<template>
  <div class="copyright">
    <p>This game owned by Mrluan in Vue 3 course for beginers - <a href="#">View here</a></p>
  </div>
</template>

<style lang="css" scoped>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: .5rem;
  color: var(--light);
  z-index: 30;
  font-size: 1.5rem;
  width: 100%;
    text-align: center;
}

.copyright a {
  color: #f4dc26;
}
</style>
