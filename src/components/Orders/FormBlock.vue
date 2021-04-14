<template>
  <div class="form-bolck">
     <div class="content">
          <div class="label"> {{label}} </div>
          <input v-if="!textarea" :type="type" :placeholder="placeholder" :value="value"  @input="$emit('input',$event.target.value)">
           
          <textarea v-else  :type="type" :placeholder="placeholder" :value="value" :textarea='textarea' 
          rows="2"
          maxlength="100"></textarea>
          
          <i :class="'iconfont '+icon"  v-if="icon"></i>
          
     </div>   
     <Tags class="sex" v-if="tags" :tags="tags"  @checkTag="checkTag" :selectTag="sex" ></Tags>   
  </div>
</template>

<script>
import Tags from './Tags'
export default {
props:{
    type:{
        type:String,
        default:''
    },
    placeholder:String,
    value:String,
    label:String,
    textarea:String,
    icon:String,
    // sex:Array,
    sex:String,
    tags:Array,
    // SexInfo:String

},
created(){
    // console.log(this.tags);
},
  methods: {
    checkTag(item) {
        // console.log(item);
      this.$emit("checkSex", item);
    },
  },
components:{
Tags}
}
</script>

<style lang="scss" scoped>
.form-bolck{
    background-color: #fff;
    .content{
        display: flex;
        padding: 10px;
        align-items: center;
        // justify-content: space-between;
        // flex: 1;
        .label{
            font-size: 14px;
            font-weight: bold;
            width: 20%;
        }
        input{
            height: 40px;
            width: 60%;
            border: none;
            margin-left: 20px;
            
        }
        textarea{
                height: 40px;
            width: 60%;
            border: none;
            margin-left: 20px;
        }
        i{
            font-size: 20px;
        }
     
    }
       .sex{
          display: flex;
          justify-content: flex-start;
          padding: 0;
        }
}
</style>