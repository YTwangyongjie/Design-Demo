<template>
  <div class="elmain">
    <el-form ref="formRef" :model="form" label-width="0px">
      <el-form-item class="inp">
        <div class="ftext">真实姓名</div>
        <el-input
          v-model="form.name"
          size="large"
          placeholder="请输入真实姓名"
          style="height: 66px; font-size: 24px"
        ></el-input>
      </el-form-item>
      <div class="ftext">基本信息</div>
      <el-form-item>
        <el-form-item>
          <el-select v-model="birth" class="m-2" placeholder="出生年份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="height: 66px; font-size: 24px; line-height: 66px"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="sex" class="m-2" placeholder="性别">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="height: 66px; font-size: 24px; line-height: 66px"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="diqu">
          <el-select v-model="region" class="m-2" placeholder="地区">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="height: 66px; font-size: 24px; line-height: 66px"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form-item>
      <el-form-item size="large" class="inp">
        <div class="ftext">身份证号</div>
        <el-input
          v-model="form.identityNumber"
          size="large"
          placeholder="请输入身份证号"
          style="height: 66px; font-size: 24px"
        ></el-input>
      </el-form-item>
      <el-form-item size="large" class="inp">
        <div class="ftext">手机号码</div>
        <el-input
          v-model="form.phone"
          size="large"
          placeholder="请输入手机号码"
          style="height: 66px; font-size: 24px"
        ></el-input>
      </el-form-item>
      <el-form-item size="large" class="inp">
        <div class="ftext">手机验证码</div>
        <el-input
          v-model="form.verificationCode"
          size="large"
          placeholder="请输入手机验证码"
          style="height: 66px; font-size: 24px"
        >
        </el-input>
      </el-form-item>

      <el-form-item class="but">
        <el-button type="certification" @click="onSubmit">立即认证</el-button>
      </el-form-item>
      <el-form-item class="but ver">
        <el-button type="ver" @click="onVerify">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        identityNumber: "",
        phone: "",
        verificationCode: "",
        birth: "",
        sex: "",
        region: "",
      },
    };
  },
  method: {
    onSubmit() {
      console.log("submit!");
    },
    onVerify() {
      console.log("verify!");
    },
  },
};
</script>

<style lang="scss" scoped>
.elmain {
  left: 455px;
  top: 160px;
  width: 901px;
  height: 1168px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  padding: 50px;
  box-sizing: border-box;
}
.ftext {
  font-weight: bold;
  margin: 25px 25px 25px 0px;
  text-align: left;
  width: 230px;
  height: 35px;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
}

.inp ::v-deep .el-input__inner {
  border: 0;
  width: 780px;
  height: 66px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(240, 240, 240, 1);
  border-radius: 7px;
  &::placeholder {
    width: 420px;
    height: 36px;
    color: rgba(192, 196, 204, 1);
    font-size: 24px;
    /* font-weight: 500; */
  }
}
.elmain ::v-deep .el-select {
  margin-right: 11px;
}
.elmain ::v-deep .el-select .el-input__inner {
  /* border:0; */
  width: 152px;
  height: 66px;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(240, 240, 240, 1);
  border-radius: 7px;
  font-size: 24px;
  &::placeholder {
    width: 420px;
    height: 36px;
    color: rgba(192, 196, 204, 1);
    font-size: 24px;
  }
}
.elmain ::v-deep .diqu .el-select .el-input__inner {
  /* border:0; */
  width: 455px;
}
.but ::v-deep .el-button--certification {
  width: 135px;
  height: 46px;
  background-color: rgba(128, 128, 128, 1);
  border-radius: 1.94px;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  line-height: 46px;
  margin-top: 60px;
  position: relative;
}
.but ::v-deep .el-button--ver {
  width: 135px;
  height: 46px;
  background-color: rgba(128, 128, 128, 1);
  border-radius: 1.94px;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  line-height: 46px;
  position: absolute;
  left: 631px;
  bottom: 155px;
}
</style>