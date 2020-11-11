<template>
  <div class="home-wrapper">
    <div class="home-left">
      <h2 class="home-title">VUE--富文本编辑器</h2>
      <tinymce
        class="home-tinymce"
        ref="context"
        :height="500"
        v-model="content"
      />
    </div>
    <div class="home-right">
      <h2 class="home-title">内容展示区</h2>
      <div
        class="home-right-content"
        v-html="content"
      ></div>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce';

export default {
  data: () => ({
    content: 'hello world',
  }),
  components: {
    Tinymce,
  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  // background: #f2f2f2;
  padding-top: 50px;
  padding: 16px;
  display: flex;
}

.home-title {
  margin-bottom: 16px;
}

.home-left {
  width: 900px;
  margin-right: 20px;
}

.home-right {
  flex: 1;
  flex-wrap: wrap;
  word-break: break-all;
}
</style>
