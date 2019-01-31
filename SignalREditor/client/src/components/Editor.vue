<template>
  <div class="editor">
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [["bold", "italic", "underline", "strike"]]
        }
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      // this.$store.dispatch("editorUnfocused");
    },
    onEditorFocus(editor) {
      // this.$store.dispatch("editorFocused");
    },
    onEditorReady(editor) {},
    onEditorChange(e, n) {
      const { quill, html, text } = e;
      const { editor } = quill;
      this.$store.dispatch("editorChanged", editor.delta);
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    content: {
      get: function() {
        console.log("get content");
        /*if (this.$refs.myTextEditor && this.$refs.myTextEditor.quill && this.$store.state.content.ops) {
           this.$refs.myTextEditor.quill.updateContents(this.$store.state.content);
        }*/
        return this.$store.state.content;
      },
      set: function(v) {
        console.log("set content");
        console.log(v);
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("connect");
  },
  destroyed: function() {
    this.$store.dispatch("disconnect");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
  height: 100vh;
}
</style>
