<template>
  <div class="text_group">
      <div class="input-group">
          <input :type="type" :value="value" :placeholder="placeholder" :name="name" @input="$emit('input',$event.target.value)" :class="{'is-invalid':error}">
          <button class="vcode" v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
          <div v-if="error" class="invalid-feedback">{{error}}</div>
      </div>
  </div>
</template>

<script>
export default {
props:{
    type:String,
    value:String,
    placeholder:String,
    name:String,
    btnTitle:String,
    disabled:Boolean,
    error:String
},
methods:
{}

}
</script>

<style lang="scss" scoped>
.text_group{
    margin-top: 20px;
    width: 100%;
    height: 50px;
    .input-group{
        width: 100%;
        height: 100%;
        position: relative;
        // overflow: hidden;
      
        .vcode{
            position: absolute;
            right: -5px;
            top: 0;
            width: 100px;
            margin-right: 0;
            height: 34px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            
        }
        input{
            width: 100%;
            height: 62%;
        }
    }
    .is-invalid{
        border: 2px solid #f00;
    }
    .invalid-feedback{
        color: #f00;
    }
}
</style>