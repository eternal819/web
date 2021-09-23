<template>
  <!--  <DAGBoard :DataAll="DataAll" @></DAGBoard>-->
  <DAGBoard :DataAll="DataAll" @updateDAG="updateDAG" @editNodeDetails="editNodeDetails"></DAGBoard>
</template>

<script>
import DAGBoard from 'dag-board'
import {getData} from '@/api/test.js'
import Vue from 'vue'

Vue.use(DAGBoard)
export default {
  name: 'orderSystem',
  data() {
    return {
      DataAll: {
        "edges": [
          {
            "id": 1,
            "src_node_id": 1,
            "src_output_idx": 2,
            "dst_node_id": 2,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "接单啦",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 2,
            "src_node_id": 2,
            "src_output_idx": 2,
            "dst_node_id": 3,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "需求管理",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          }
        ],
        "nodes": [
          {
            "id": 1,  // 节点id
            "name": "Icare",  // 节点名称
            "in_ports": [  // 入口下标
              0
            ],
            "out_ports": [
              0, 1, 2
            ],  // 出口下标
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 200,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "备件需求",           /* 非必要 气泡内容 */
          },
          {
            "id": 2,
            "in_ports": [
              0, 1, 2
            ],
            "name": "OMS",
            "out_ports": [
              0, 1, 2
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 200,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "订单",           /* 非必要 气泡内容 */
          },
          {
            "id": 3,
            "in_ports": [
              0
            ],
            "name": "ERP",
            "out_ports": [
              0
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 100,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "订单",           /* 非必要 气泡内容 */
          }
        ]
      },
      data: null
    }
  },
  methods: {
    async test() {
      let data = null;
      data = await getData();
      this.data = data.json
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>

</style>
