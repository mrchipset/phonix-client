<template>
  <div class="View">
    <img :src="this.url" width="600" height="600" />
    <br>
    <span>{{this.url}}</span>
  </div>
</template>

<script>
export default {
  name: 'View',
  props: {
      url: String
  },
}
</script>
