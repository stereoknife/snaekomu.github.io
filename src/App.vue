<template>
  <MainLayout
    :slug="$route.params.slug"
  >
    <router-view />
  </MainLayout>
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>

  @font-face {
    font-family: Blackletter;
    src: url('/fonts/BLACEB__.ttf');
    font-weight: normal;
  }

</style>
