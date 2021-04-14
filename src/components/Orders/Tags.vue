<template>
  <div class="tags">
    <div class="label">
      {{ label }}
    </div>
    <p
      class="tagsItem"
      v-for="(item, index) in tags"
      :key="index"
      @click="checkTag(item)"
      :class="{ choose: selectTag == item }"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
    label: String,
    selectTag: String,
    sex:Array,
    // SexInfo:String
  },
  methods: {
    checkTag(item) {
      this.$emit("checkTag", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .label {
    font-weight: bold;
    // margin-right: 20px;
    width: 20%;
  }
  .tagsItem {
    width: 70px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    margin: 10px;
  }
  .choose {
    color: #2395ff !important;
    background: #eef7ff !important;
    border-color: rgba(35, 149, 255, 0.18) !important;
  }
}
</style>>

</styles>