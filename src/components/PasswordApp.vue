<template>
  <button class="password">
    <div class="password-all">
      <div class="password-leftd">
        <img class="imeg" src="https://s3.bmp.ovh/imgs/2022/08/03/61220035d1bab3cc.png" />
      </div>
      <div class="password-righta">
        <div class="password-jklb">
          <div class="password-name">
            <li v-for="item in Telegram" :key="item.name">
              <span class="ado">{{ item.name }}</span>
            </li>
          </div>
          <div class="password-job">
            <li v-for="item in items" :key="item.aaa">
              <span class="job">{{ item.aaa }}</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "PasswordApp",
  data() {
    return {
      Telegram: [{ name: "Telegram" }],
      items: [{ aaa: "thomas@gmail.com" }],
    };
  },
};
</script>

<style lang="scss">
.password {
  .password-all {
    display: flex;
    justify-content: flex-start;
  }

  .password-leftd {
    background-color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 6px;

    .imeg {
      position: relative;
      left: 0px;
      top: 5px;
      width: 38px;
      height: 36px;
    }
  }

  .password-righta {
    padding-left: 5px;

    .password-jklb {
      padding-left: 20px;
    }

    .password-name {
      padding: 4px 0 10px 0;

      .ado {
        color: #fff;
        float: left;
        font-size: 18px;
      }
    }

    .job {
      color: #8f8f8f;
    }
  }
}
</style>