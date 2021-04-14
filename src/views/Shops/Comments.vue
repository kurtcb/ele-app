<template>
  <div class="comments">
    <div class="top">
      <div class="top-left">
        <p>{{ comments.rating.shop_score.toFixed(1) }}</p>
        <div class="left-txt">
          商家评分
          <Rating :rating="comments.rating.shop_score"></Rating>
        </div>
      </div>
      <div class="top-right">
        <li>
          <p>味道</p>
          {{ comments.rating.overall_score.toFixed(1) }}
        </li>
        <li>
          <p>包裹</p>
          {{ comments.rating.package_score.toFixed(1) }}
        </li>
        <li>
          <p>配送</p>
          {{ comments.rating.rider_score.toFixed(1) }}
        </li>
      </div>
    </div>
    <div class="middel">
      <li
        v-for="(item, index) in comments.tags"
        :key="index"
        :class="{ 'meiddel-col': item.unsatisfied }"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.count }}</p>
      </li>
    </div>
    <div class="bottom">
      <div
        class="items"
        v-for="(item, index) in comments.comments"
        :key="index"
      >
        <div class="top">
          <div class="top-left">
            <img :src="item.avatar" alt="" />
            <div class="txt">
              {{ item.username }}
              <Rating :rating="item.rating"></Rating>
                <span
                :style="{color: ratingcontent(item.rating).color}"
              >{{ratingcontent(item.rating).txt}}</span>
            </div>
          </div>
          <p>{{ item.rated_at }}</p>
        </div>
        <div class="comments">
          {{ item.reply.content }}
        </div>
        <div class="img" v-for="(items, i) in item.order_images" :key="i">
          <img :src="items.image_hash" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "../../components/Rating";
export default {
  data() {
    return {
      comments: [],
    };
  },
  components: {
    Rating,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/api/profile/comments").then((res) => {
        console.log(res.data);
        this.comments = res.data;
      });
    },
    ratingcontent(rating) {
      const content = [
        { txt: "吐槽", color: "rgb(137,159,188)" },
        { txt: "较差", color: "rgb(137, 159, 188)" },
        { txt: "一般", color: "rgb(251, 154, 11)" },
        { txt: "满意", color: "rgb(251, 154, 11)" },
        { txt: "超赞", color: "rgb(255, 96, 0)" },
      ];
      return content[rating - 1];
    },
  },
};
</script>

<style lang="scss" scoped>
// 如果两侧出现间隙看看是不是宽度设置了百分之百然后又设置了margin

.comments {
  // height: 100%;
  // width: 100%;
  // height: 100%;
  // background-color: #f00;
  // position: fixed;
  // right: 0;
  // top: 260px;
  // bottom: 0;
  // left: 0;
  background-color: #f1f1f1;
  .top {
    // background-color: #fff;
    // width: 100%;
    height: 100px;
    // text-align: center;
    // line-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    .top-left {
      width: 40%;
      display: flex;
      align-items: center;
      p {
        color: #ff6000;
        font-size: 30px;
        font-weight: bold;
        margin-right: 20px;
      }
    }
    .top-right {
      // width: 350px;
      // width: 300px;
      width: 60%;
      // width: 200px;
      height: 100px;
      // background-color: #f00;
      display: flex;
      // justify-content: space-around;
      li {
        // width: 50px;
        width: 30%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        color: #333;
        font-weight: normal;
        p {
          font-size: 14px;
          color: #333;
          font-weight: normal;
        }
      }
    }
  }
  .middel {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 30px;
    li {
      //  width: 80px;
      margin: 5px;
      //  height: 40px;
      background-color: #6d7885;
      display: flex;
      color: #ebf5ff;
      //  justify-content: center;

      font-size: 14px;
      align-items: center;
      padding: 5px;
    }
    .meiddel-col {
      background-color: #aaa;
    }
  }
  .bottom {
    border-bottom: 1px solid #ccc;
    .items {
      .top {
        font-size: 14px;
        .top-left {
          display: flex;
          width: 30%;
          justify-content: space-between;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 20px;
            .txt {
              display: flex;
              align-items: center;
            }
          }
        }
        p {
          color: #494949;
          margin-right: 5px;
        }
      }
      .comments {
        font-size: 13px;
        margin-left: 30px;
        font-weight: 400;
        color: #333;
        background-color: #dcdcdc;
        padding: 5px;
        margin-right: 10px;
      }
      .img {
        img {
          margin-top: 10px;
          width: 150px;
          height: 150px;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>