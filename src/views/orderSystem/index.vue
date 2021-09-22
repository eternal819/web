<template>
  <DAGBoard :DataAll="DataAll" @></DAGBoard>
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
            "dst_input_idx": 0,
            "dst_node_id": 2,
            "id": 1,
            "src_node_id": 1,
            "src_output_idx": 0,
            // "edgesText": "running into subnode"
          }
        ],
        "nodes": [
          {
            "id": 1,
            "in_ports": [
              0
            ],
            "name": "NODE_PARENT",
            "out_ports": [
              0
            ],
            "pos_x": 157,
            "pos_y": 120,
            "type": "Variable",
            "iconClassName": "el-icon-link",
            "detail": [
              {
                "label": "time",
                "value": "2018"
              }
            ]
          },
          {
            "id": 2,
            "in_ports": [
              0
            ],
            "name": "NODE_CHILD",
            "iconClassName": "el-icon-cpu",
            "out_ports": [
              0
            ],
            "pos_x": 459,
            "pos_y": 457,
            "type": "Variable"
          }
        ]
      },
      data: null
    }
  },
  methods: {
   async test() {
     let data=null;
      data = await getData();
      this.data=data.json
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>

</style>
