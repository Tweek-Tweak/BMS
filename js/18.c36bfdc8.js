(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{8327:function(t,e,a){},b0d4:function(t,e,a){"use strict";var r=a("8327"),s=a.n(r);s.a},ee87:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{staticClass:"q-pa-md",attrs:{id:"q-app",view:"lHh Lpr lFf"}},[r("q-header",{staticClass:"glossy",class:t.drawerState?" bg-black":"bg-primary",staticStyle:{height:"150px","border-radius":"0 0 1rem 1rem"}},[r("q-toolbar",{staticClass:"justify-center"},[r("q-img",{staticClass:"shadow-7",staticStyle:{"margin-top":"0.5rem",height:"60px",width:"100%","border-radius":"0.5rem"},attrs:{basic:"",src:a("4b51")}}),r("div",{staticClass:"fixed-top-right"},[r("user-account")],1)],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 col-2"},[r("q-img",{staticClass:"fixed-top-left",staticStyle:{height:"6.5rem",width:"7.3rem",margin:"1.3rem","border-radius":"0.5rem"},attrs:{src:a("73b8")}},[t.home?r("div",{staticClass:"absolute-full text-subtitle2 flex flex-center"},[r("q-img",{staticStyle:{"margin-top":"-0.4rem"},attrs:{basic:"",src:a("fbf5")}})],1):t._e(),r("q-btn",{staticStyle:{height:"6.5rem",width:"7.3rem","border-radius":"0.5rem"},attrs:{to:"/Home"},on:{mouseover:function(e){t.home=!0},mouseleave:function(e){t.home=!1}}})],1)],1),r("div",{staticClass:"col-12",staticStyle:{"text-align":"center","margin-top":"1.7rem"}},[r("q-item-label",{staticStyle:{"font-size":"1.5rem",color:"white"},attrs:{overline:""}},[t._v("Mantenimientos por equipo")])],1)])],1),r("div",{staticClass:"bg-blue-10 glossy",staticStyle:{width:"100%",height:"0.5rem","border-radius":"0.5rem","margin-top":"-0.5rem"}}),r("div",{staticClass:"row no-wrap justify-end"},[r("div",{staticClass:"col-auto"},[1==t.Usuario.rol||2==t.Usuario.rol?r("q-btn",{staticStyle:{margin:"1rem"},attrs:{icon:"queue",label:"Agregar",color:"primary"},on:{click:function(e){return t.MaintenanceCreate()}}}):t._e(),r("q-btn",{staticStyle:{margin:"1rem"},attrs:{icon:"logout",label:"Salir",to:"/Home",color:"primary"}})],1)]),r("div",{staticClass:"bg-blue-10 glossy",staticStyle:{width:"100%",height:"0.5rem","border-radius":"0.5rem"}}),r("q-page-container",[r("router-view"),r("maintenance-section-equipment",{staticStyle:{"margin-top":"-9.5rem"}})],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"row q-col-gutter-x-xs q-col-gutter-y-lg justify-center",staticStyle:{width:"100%"}},t._l(t.items,(function(e,r){return a("div",{key:r,staticStyle:{width:"108px"}},[a("q-btn",{staticClass:"btn-fixed-width",staticStyle:{width:"100%","margin-bottom":"0.5rem"},attrs:{color:t.drawerState?"grey-9":"blue-"+e.Color,align:"between",icon:"engineering"},on:{click:function(a){return t.verMaintenanceTable(e)}}},[t._v("\n        "+t._s(e.Nombre)+" -- "+t._s(e.Anio)+"\n      ")])],1)})),0)])},o=[],n=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function l(t){if(!isNaN(t)&&t>=1&&t<=12)return n[t-1]}var c={data(){return{items:[],totalDias:0}},created(){let t=new Date("2021/04/01"),e=new Date,a=e.getMonth()+1,r=!1,s=6;for(let i=e.getFullYear();i>=t.getFullYear()+1;i--){for(let t=a;t>=1;t--){10==s&&0==r?(r=!0,s--):s<10&&0==r?(s++,10==s&&(r=!1)):6==s&&r?(r=!1,s++):(s--,6==s&&(r=!0));let e={Nombre:l(t),Anio:i,Color:s,Mes:t};this.items.push(e)}a=12}for(let i=a;i>t.getMonth();i--){10==s&&0==r?(r=!0,s--):s<10&&0==r?(s++,10==s&&(r=!1)):6==s&&r?(r=!1,s++):(s--,6==s&&(r=!0));let e={Nombre:l(i),Anio:t.getFullYear(),Color:s,Mes:i};this.items.push(e)}},methods:{verMaintenanceTable(t){1==t.Mes.toString().length&&(t.Mes="0"+t.Mes.toString());var e={Mes:t.Mes,"Año":t.Anio};this.MaintenanceSectionSelected=e,this.$router.push({path:"/MaintenanceList"})}},computed:{drawerState:{get(){return this.$store.state.showcase.drawerState?this.$q.dark.set(!0):this.$q.dark.set(!1),this.$store.state.showcase.drawerState},set(t){this.$store.commit("showcase/updateDrawerState",t)}},MaintenanceSectionSelected:{get(){return this.$store.state.cardState.MaintenanceSectionSelected},set(t){this.$store.commit("cardState/updateMaintenanceSectionSelected",t)}}}},u=c,m=a("2877"),d=a("9c40"),h=a("eebe"),g=a.n(h),b=Object(m["a"])(u,i,o,!1,null,null,null),p=b.exports;g()(b,"components",{QBtn:d["a"]});var w=a("dddf"),S={name:"CardsPage",components:{MaintenanceSectionEquipment:p,UserAccount:w["a"]},data(){return{leftDrawerOpen:!1,home:!1}},methods:{MaintenanceCreate(){var t={Status:!1},e={reporte:t,lastRoute:"/MaintenanceList"};this.Flags=e,1!=this.Usuario.rol&&2!=this.Usuario.rol||this.$router.push({path:"/MaintenanceCreate/"}),3!=this.Usuario.rol||this.$q.notify({position:"bottom",timeout:2500,textColor:"white",type:"warning",message:"No tienes los permisos para crear un Mantenimiento"})}},computed:{drawerState:{get(){return this.$store.state.showcase.drawerState?this.$q.dark.set(!0):this.$q.dark.set(!1),this.$store.state.showcase.drawerState},set(t){this.$store.commit("showcase/updateDrawerState",t)}},Usuario:{get(){return this.$store.state.global.Usuario},set(t){this.$store.commit("global/updateUsuario",t)}},Flags:{get(){return this.$store.state.global.Flags},set(t){this.$store.commit("global/updateFlags",t)}}}},f=S,y=(a("b0d4"),a("4d5a")),v=a("e359"),q=a("65c6"),C=a("068f"),M=a("0170"),$=a("09e3"),x=Object(m["a"])(f,r,s,!1,null,null,null);e["default"]=x.exports;g()(x,"components",{QLayout:y["a"],QHeader:v["a"],QToolbar:q["a"],QImg:C["a"],QBtn:d["a"],QItemLabel:M["a"],QPageContainer:$["a"]})}}]);