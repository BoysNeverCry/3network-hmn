<template>
  <div class="link-status">
    <div class="node start">
      <div class="iconfont location">&#xe9d8;</div>
      <div class="iconfont city">&#xe9d7;</div>
      <div>
        <div class="node-name">{{linkInfo.startName}}</div>
        <div class="node-type">{{linkInfo.startType}}</div>
      </div>
    </div>
    <div class="link">
      <div>{{linkInfo.linkType}}</div><!--中继站类型，这个地方不需要滚动吗？？？ -->
      <div class="iconfont work">&#xe60a;</div>
      <div>
        <!-- 中继站数量和状态 -->
        <div><span class="value">{{linkInfo.linkNum}}</span>个</div>
        <div>状态{{linkInfo.linkStatus}}</div>
      </div>
    </div>
    <div class="node end">
      <div class="iconfont location">&#xe9d8;</div>
      <div class="iconfont city">&#xe9d7;</div>
      <div>
        <div class="node-name">{{linkInfo.endName}}</div>
        <div class="node-type">{{linkInfo.endType}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link-status',
  props: {
    linkInfo: {
      type: Object,
      required: true,
    }
  }
}
</script>


<style lang="less" scoped>
  @import '~@/assets/css/variable.less';
  .link-status {
    color: @defaultFontColor;
    font-size: @defaultFontSize;
    font-weight: @defaultFontWeight;
    height: 86%;
    display: flex;
    justify-content: space-between;
    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > div {
        margin-bottom: 10px;
      }
      .iconfont {
        font-size: @titleFontSize * 1.5;
        font-weight: @titleFontWeight;
        &.work {
          color: green;
        }
      }
    }
    .node {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .iconfont {
        color: @themeColorLight;
        font-size: @titleFontSize * 4;
        font-weight: @titleFontWeight;
        &.city {
          color: @themeColorLight;
          margin-bottom: 10px;
        }
        &.location {
          color: red;
        }
      }
      .node-name {
        color: red;
        font-size: @titleFontSize;
        font-weight: @titleFontWeight;
      }
      .node-type {
        font-weight: @titleFontWeight;
      }
    }
  }
</style>