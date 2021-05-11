import {
  UPDATE_NODEINFO_MUTATION,
  UPDATE_BANDINFO_MUTATION,
  UPDATE_LINKINFO_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_NODEBAND_MUTATION,
  UPDATE_NODES_MUTATION,
  UPDATE_LINKS_MUTATION,

  INIT_LIGHT_ACTION,
  UPDATE_NETINFO_ACTION,
  UPDATE_BANDINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_NODEBAND_ACTION,
  UPDATE_LINKINFO_ACTION,
  UPDATE_NODES_ACTION,
  UPDATE_LINKS_ACTION,
} from './constant'

import {
  getLightNetInfo,
  getNodeInfo,
  getLinkInfo,
  getBandInfo,
  getNodeBand,
  getNodes,
  getLinks,
} from '../../../api'

export default {
  namespaced: true,
  state: () => ({
    netInfo: [],
    bandInfo: [],
    nodeInfo: [],
    nodeband: [],
    linkInfo: {},
    nodes: [],
    links: [],
  }),
  mutations: {
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      console.log("whatswrong")
      state.netInfo = [
        {
          name: '业务上下站',
          value: data.numofupdown,
          status: '状态正常',
          baifenbi: data.perofupdown,
          type: 'bussiness',
        },
        {
          name: '电中继站',
          value: data.numofelectricmid,
          status: '状态正常',
          baifenbi: data.perofelectricmid,
          type: 'elc',
        },
        {
          name: '光中继站',
          value: data.numoflightmid,
          status: '状态正常',
          baifenbi: data.peroflightmid,
          type: 'light',
        },
        {
          name: '故障节点',
          value: data.numoferror,
          status: '紧急状态',
          baifenbi: data.peroferror,
          type: 'error',
        },
      ];
    },
    [UPDATE_BANDINFO_MUTATION](state, { data }) {
      state.bandInfo = [        
        {name: 'MD01', value: data.value1},//parseInt(Math.random() * 100)
        {name: 'MD02', value: data.value2},
        {name: 'MD03', value: data.value3},
        {name: 'MD04', value: data.value4},
        {name: 'MD05', value: data.value5},
        {name: 'MD06', value: data.value6},
        {name: 'MD07', value: data.value7},
        {name: 'MD08', value: data.value8},
        {name: 'MD09', value: data.value9},
        {name: 'MD010', value: data.value10},
      ];
    },
    [UPDATE_NODEINFO_MUTATION](state, { data }) {
      
      state.nodeInfo = [
        {
          label: "等级",
          data: data.level,
        },
        {
          label: "守时时钟",
          data: data.clocktime,//该字段是否需要实时更新？
        },
        {
          label: "节点出/入度",
          data: data.inoutvalue,
        },
        {
          label: "色散补偿",
          data: data.chromecompensate,
        },
        {
          label: "核心路由器",
          data: data.corerouter,
        },
        {
          label: "节点运维负责人",
          data: data.nodesuperviser,
          contact: data.contactable
        },
        {
          label: "节点联系方式",
          data: data.contact,
          contact: data.contactable
        }
      ];
      //state.nodeInfo = [...data];
    },
    [UPDATE_NODEBAND_MUTATION](state, { data }) {
      state.nodeband =  [
        {
          name: data.linkname1,//'北京-天津',
          value: data.linkload1,//parseInt(Math.random() * 100),
        },
        {
          name: data.linkname2,
          value: data.linkload2,
        },
        {
          name: data.linkname3,
          value: data.linkload3,
        },
        {
          name: data.linkname4,
          value: data.linkload4,
        },
      ];
    },
    [UPDATE_LINKINFO_MUTATION](state, { data }) {
      state.linkInfo = {
        startName: data.startName,//'北京',
        startType: data.startType,//'业务上下站',
        endName: data.endName,//'天津',
        endType: data.endType,//'业务上下站',
        linkType: data.linkType,//'OTN光中继站',
        linkNum: data.linkNum,//8,
        linkStatus: data.linkStatus,//'正常'
      };
    },
    [UPDATE_NODES_MUTATION](state, { data }) {
      state.nodes = [...data];
    },
    [UPDATE_LINKS_MUTATION](state, { data }) {

      
      state.links = [...data];

    },
  },
  actions: {
    async [INIT_LIGHT_ACTION]({dispatch}) {
    },
    async [UPDATE_NETINFO_ACTION]({dispatch, commit}, payload) { // payload没有使用？？？
      // 异步API
      // let  data =null
      //  await getNodeInfo({ name }).then(res => data = res)

      // commit(UPDATE_NODEINFO_MUTATION, { data })

      let data  =null;
      
       await getLightNetInfo({}).then(res => data = res);
       
      commit(UPDATE_NETINFO_MUTATION, {
        data
      })
    },
    async [UPDATE_BANDINFO_ACTION]({dispatch, commit}, target) { // payload使用
      // 异步API
      // let { data } = await getBandInfo({
      //   target
      // })
      // commit(UPDATE_BANDINFO_MUTATION, {
      //   data
      // })
      let  data =null
      
      await getBandInfo({ target }).then(res => data = res)
      console.log("check band!!!")
     commit(UPDATE_BANDINFO_MUTATION, { data })
    },
    async [UPDATE_NODEINFO_ACTION]({dispatch, commit}, name) { // payload使用
      // 异步API
      // 异步API
      //let data = null
      //await getSysInfo().then(res => data = res)
      //commit(UPDATE_SYSINFO_MUTATION, {data})
      
      let  data =null
       await getNodeInfo({ name }).then(res => data = res)

      commit(UPDATE_NODEINFO_MUTATION, { data })
    },
    async [UPDATE_NODEBAND_ACTION]({dispatch, commit}, node) { // payload使用
      // 异步API
      // let { data } = await getNodeBand({
      //    node 
      // })
      // commit(UPDATE_NODEBAND_MUTATION, {
      //   data
      // })

      let  data =null
       await getNodeBand({ node }).then(res => data = res)

      commit(UPDATE_NODEBAND_MUTATION, { data })
      
    },
    async [UPDATE_LINKINFO_ACTION]({dispatch, commit}, name ) { // payload使用
      // 异步API
      // let { data } = await getLinkInfo({
      //   name
      // })
      // commit(UPDATE_LINKINFO_MUTATION, {
      //   data
      // })


      let  data =null
      await getLinkInfo({ name }).then(res => data = res)//name是链路名称

      commit(UPDATE_LINKINFO_MUTATION, { data })

    },
    async [UPDATE_NODES_ACTION]({dispatch, commit}, payload ) { // payload使用
      // 异步API
      let { data } = await getNodes()
      commit(UPDATE_NODES_MUTATION, {
        data
      })
    },
    async [UPDATE_LINKS_ACTION]({dispatch, commit}, payload ) { // payload使用
      // 异步API
      // let { data } = await getLinks()
      // commit(UPDATE_LINKS_MUTATION, {
      //   data
      // })

      // let  data =null
      // await getLinks({ }).then(res => data = res)
      
      let { data } = await getLinks()

      
     commit(UPDATE_LINKS_MUTATION, { data })
    },
  },
}
