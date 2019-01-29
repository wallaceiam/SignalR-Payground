<template>
  <div class="editor">
    <quill v-model="content" :config="config" @text-change="textChanged">></quill>
  </div>
</template>

<script>

export default {
  name: 'Editor',
  data: function() {
    return {
        config: {
            height: '100vh',
            readOnly: false,
            placeholder: 'Compose an epic...',
        },
    }
  },
  computed: {
    content: {
      get: function () {
        return this.$store.state.content
      },
      set: function (content) {
      }
    }
  }, 
  methods: {
    textChanged: function(quill, delta, oldDelta, source) {
      if (source == 'api') {
        console.log("An API call triggered this change.");
      } else if (source == 'user') {
        console.log("A user action triggered this change.");
      }
      this.$store.dispatch('changeText', delta);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
  height: 100vh;
}
</style>
