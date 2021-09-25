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
            "src_output_idx": 0,
            "dst_node_id": 2,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
          },
          {
            "id": 2,
            "src_node_id": 7,
            "src_output_idx": 0,
            "dst_node_id": 8,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
          },
          {
            "id": 3,
            "src_node_id": 11,
            "src_output_idx": 0,
            "dst_node_id": 12,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 4,
            "src_node_id": 11,
            "src_output_idx": 0,
            "dst_node_id": 13,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 5,
            "src_node_id": 12,
            "src_output_idx": 0,
            "dst_node_id": 14,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 6,
            "src_node_id": 12,
            "src_output_idx": 0,
            "dst_node_id": 15,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 7,
            "src_node_id": 14,
            "src_output_idx": 0,
            "dst_node_id": 16,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 8,
            "src_node_id": 14,
            "src_output_idx": 0,
            "dst_node_id": 17,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 9,
            "src_node_id": 16,
            "src_output_idx": 0,
            "dst_node_id": 20,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
            "edgesText": "N:1",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 10,
            "src_node_id": 17,
            "src_output_idx": 0,
            "dst_node_id": 21,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
            "edgesText": "N:1",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 11,
            "src_node_id": 20,
            "src_output_idx": 1,
            "dst_node_id": 22,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
            "edgesText": "N:1",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 12,
            "src_node_id": 21,
            "src_output_idx": 1,
            "dst_node_id": 23,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
            "edgesText": "N:1",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 13,
            "src_node_id": 17,
            "src_output_idx": 0,
            "dst_node_id": 18,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 14,
            "src_node_id": 17,
            "src_output_idx": 0,
            "dst_node_id": 19,
            "dst_input_idx": 1,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
              "stroke-dasharray": "0px"
            },
            "edgesText": "1:N",
            "textStyle": {
              "fontSize": "12.5px",
              "stroke": "black"
            }
          },
          {
            "id": 15,
            "src_node_id": 20,
            "src_output_idx": 0,
            "dst_node_id": 24,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
          },
          {
            "id": 16,
            "src_node_id": 21,
            "src_output_idx": 0,
            "dst_node_id": 25,
            "dst_input_idx": 0,
            "type": "active",
            "style": {
              "stroke-width": "1.5px",
              "stroke": "black",
              "animation": "none",
            },
          },
        ],
        "nodes": [
          {
            "id": 1,  // 节点id
            "name": "客户采购(PO)",  // 节点名称
            "out_ports": [
              0
            ],  // 出口下标
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 100,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "yellow",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 2,  // 节点id
            "name": "配置信息",  // 节点名称
            "in_ports": [  // 入口下标
              0
            ],
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 200,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen",
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 3,  // 节点id
            "name": "需求下达",  // 节点名称
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 275,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 4,  // 节点id
            "name": "备货",  // 节点名称
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 350,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 5,  // 节点id
            "name": "发货",  // 节点名称
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 425,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 6,  // 节点id
            "name": "运输",  // 节点名称
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 500,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 7,  // 节点id
            "name": "入库",  // 节点名称
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 575,  // 节点坐标 距离顶部
            "out_ports": [
              0
            ],  // 出口下标
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightgreen",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 8,  // 节点id
            "name": "客户签收",  // 节点名称
            "in_ports": [
              0
            ],  // 出口下标
            "pos_x": 150,  // 节点坐标 距离左侧
            "pos_y": 675,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "yellow",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-coin",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 11,  // 节点id
            "name": "项目",  // 节点名称
            "out_ports": [
              0
            ],  // 出口下标
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 50,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "background": "lightblue",
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 12,
            "name": "合同",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 500,  // 节点坐标 距离左侧
            "pos_y": 125,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 13,
            "name": "合同",
            "in_ports": [
              0, 1, 2
            ],
            "pos_x": 700,  // 节点坐标 距离左侧
            "pos_y": 125,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 14,
            "name": "BOQ",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
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
            "nameDescribe": "报价单，物料清单",           /* 非必要 气泡内容 */
          },
          {
            "id": 15,
            "name": "BOQ",
            "in_ports": [
              0, 1, 2
            ],
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 200,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "报价单，物料清单",           /* 非必要 气泡内容 */
          },
          {
            "id": 16,
            "name": "批次",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 275,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "相同履行地、发货时间、运输方式、产品类型、目的地的物料集合",           /* 非必要 气泡内容 */
          },
          {
            "id": 17,
            "name": "批次",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 275,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "相同履行地、发货时间、运输方式、产品类型、目的地的物料集合",           /* 非必要 气泡内容 */
          },
          {
            "id": 18,
            "name": "备货单",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 800,  // 节点坐标 距离左侧
            "pos_y": 350,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "生成备货单元，指导实物履行",           /* 非必要 气泡内容 */
          },
          {
            "id": 19,
            "name": "备货单",
            "in_ports": [
              0, 1, 2
            ],
            "pos_x": 1000,  // 节点坐标 距离左侧
            "pos_y": 350,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "生成备货单元，指导实物履行",           /* 非必要 气泡内容 */
          },
          {
            "id": 20,
            "name": "发货单",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0, 1, 2
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 425,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "相同起运地、目的地、相同发货时间的批次集合",           /* 非必要 气泡内容 */
          },
          {
            "id": 21,
            "name": "发货单",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0, 1, 2
            ],
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 425,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "相同起运地、目的地、相同发货时间的批次集合",           /* 非必要 气泡内容 */
          },
          {
            "id": 22,
            "name": "派送单",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 500,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "指导仓库进行物料派送",           /* 非必要 气泡内容 */
          },
          {
            "id": 23,
            "name": "派送单",
            "in_ports": [
              0, 1, 2
            ],
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 500,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
            "nameDescribe": "指导仓库进行物料派送",           /* 非必要 气泡内容 */
          },
          {
            "id": 24,
            "name": "入库单",
            "in_ports": [
              0, 1, 2
            ],
            "out_ports": [
              0
            ],
            "pos_x": 400,  // 节点坐标 距离左侧
            "pos_y": 575,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
          },
          {
            "id": 25,
            "name": "入库单",
            "in_ports": [
              0, 1, 2
            ],
            "pos_x": 600,  // 节点坐标 距离左侧
            "pos_y": 575,  // 节点坐标 距离顶部
            "type": "Variable",
            "nodeStyle": {  /* 非必要 节点样式 */
              "border": "2px solid bluegreen"
            },
            "iconStyle": {  /* 非必要 节点icon样式 */
              "background": "bluegreen"
            },
            "iconClassName": "el-icon-success",     /* 非必要  节点icon的类名 */
          },
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
