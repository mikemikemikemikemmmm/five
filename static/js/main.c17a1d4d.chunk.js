(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),l=a(4),o=a(5),c=a(7),u=a(8),h=a(11),d=a(9),p=a(12),m=a(1),y="SET_PLAYERNUM",f="SET_GRIDNUM",v="INIT_DONE",g="SET_PLAYERDATA",b="SET_TURN";function E(e){return{type:b,payload:e}}a(28);var N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={allChess:[]},a.checkVectorList=[[1,0],[1,1],[0,1],[-1,1]],a.playerNum=Number(a.props.state.playerNum),a.gridNum=Number(a.props.state.gridNum),a.gridW=a.props.layout.gridWidth,a.sT=null,a.eT=null,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"initChess",value:function(){for(var e=[],t=[],a=0;a<this.gridNum;a++)e.push(0);for(var n=0;n<this.gridNum;n++)t.push([].concat(e));this.setState({allChess:[].concat(t)})}},{key:"handleMoveChess",value:function(e,t){this.sT=(new Date).getTime(),0===this.state.allChess[e][t]&&this.setChessState(e,t)}},{key:"setChessState",value:function(e,t){var a=this;this.setState({allChess:this.state.allChess.map(function(n,r){return e===r?n.map(function(e,n){return t===n?a.props.state.nowPlayerTurn:e}):n})},function(){a.checkIfWin(e,t)})}},{key:"setChessState2",value:function(e,t){var a=this,n=Object(o.a)(this.state.allChess);n[e][t]=this.props.state.nowPlayerTurn,this.setState({allChess:n},function(){a.checkIfWin(e,t)})}},{key:"checkIfWin",value:function(e,t){var a=this,n=!1,r=!0,i=!1,s=void 0;try{for(var l,o=this.checkVectorList[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){for(var c=l.value,u=0,h=function(n){console.log(u);var r=c.map(function(e){return e*n}),i=[e+r[0],t+r[1]];return i[0]>a.gridNum-1||i[1]>a.gridNum-1||i[0]<0||i[1]<0?"break":a.state.allChess[i[0]][i[1]]!==a.props.state.nowPlayerTurn?"break":void(u+=1)},d=1;d<6;d++){if("break"===h(d))break}var p=function(n){var r=c.map(function(e){return e*n}),i=[e+r[0],t+r[1]];return i[0]>a.gridNum-1||i[1]>a.gridNum-1||i[0]<0||i[1]<0?"break":a.state.allChess[i[0]][i[1]]!==a.props.state.nowPlayerTurn?"break":void(u+=1)};for(d=-1;d>-6;d--){if("break"===p(d))break}4===u&&(n=!0)}}catch(m){i=!0,s=m}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}n&&this.gameOver(),this.handlePlayerTurn()}},{key:"gameOver",value:function(){var e=this;alert("".concat(this.props.state.playerData.find(function(t){return t.id===e.props.state.nowPlayerTurn}).name,"\u8d0f\u4e86"))}},{key:"handlePlayerTurn",value:function(){this.props.state.nowPlayerTurn===this.playerNum?this.props.dispatch(E(1)):this.props.dispatch(E(this.props.state.nowPlayerTurn+1)),console.log((new Date).getTime()-this.sT)}},{key:"handleChessBtnStyle",value:function(e,t){var a=this.props.layout.intervalWidth;return{top:e*a+a/2,left:t*a+a/2,height:this.gridW,width:this.gridW}}},{key:"handleSingleChessStyle",value:function(e){if(0!==e)return{backgroundColor:this.props.state.playerData.find(function(t){return e===t.id}).color,border:"0.5px black solid"}}},{key:"componentDidMount",value:function(){this.initChess()}},{key:"render",value:function(){var e=this,t=this.props.layout.gridWidth;return r.a.createElement("section",{className:"chessman-wrapper"},r.a.createElement("section",{className:"chess-game"},this.state.allChess!==[]?this.state.allChess.map(function(a,n){return r.a.createElement("div",{key:n,className:"chessman-row",style:{height:t}},a.map(function(t,a){return r.a.createElement("span",{key:a,className:"chess-btn",style:e.handleChessBtnStyle(n,a),onClick:function(){return e.handleMoveChess(n,a)}},r.a.createElement("div",{style:Object(l.a)({height:4*e.gridW/5,width:4*e.gridW/5,borderRadius:2*e.gridW/5},e.handleSingleChessStyle(t)),className:"single-chess"}))}))}):null))}}]),t}(n.Component),k=Object(m.b)(function(e){return{state:e}},function(e){return{dispatch:e}})(N);a(29);var C=function(e){var t=Number(e.gridNum),a=e.layout,n=a.gridWidth,i=a.intervalWidth,s=(t-1)*n+t*i,l=function(e){for(var a=[],n=0;n<t;n++)e?a.push(r.a.createElement("div",{key:"row".concat(n),className:"single-row"})):a.push(r.a.createElement("span",{key:"column".concat(n),className:"single-column"}));return a};return r.a.createElement("section",{className:"layout-wrapper",style:{width:s,height:s,transform:"translate(".concat(n/2,"px,").concat(n/2,"px)")}},r.a.createElement("div",{className:"layout-row"},l(!0)),r.a.createElement("div",{className:"layout-column"},l(!1)))};var w=Object(m.b)(function(e){return{state:e}})(function(e){var t=e.state;return r.a.createElement("section",{style:{width:"20%"}},t.playerData.map(function(e){return r.a.createElement("div",{key:e.id},t.nowPlayerTurn===e.id?r.a.createElement("span",null,">>"):null,r.a.createElement("span",null,"\u73a9\u5bb6",e.id,"\uff0c",e.name),r.a.createElement("span",{style:{width:20,height:20,backgroundColor:e.color,display:"inline-block"}}))}))}),T=(a(30),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={playerData:[{id:1,name:""},{id:2,name:""}],color:"",gridNum:5},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"checkForm",value:function(){var e=void 0===this.state.playerData.find(function(e){return""===e.name}),t=""!==this.state.color,a=!(!Number(5<=this.state.gridNum)||!Number(this.state.gridNum<=30));return!0===t&&!0===e&&!0===a||(alert("\u8acb\u78ba\u8a8d\u984f\u8272\u8ddf\u540d\u5b57\u90fd\u6709\u586b\u4e0a\u4ee5\u53ca\u683c\u5b50\u6578\u57285~30\u4e4b\u9593"),!1)}},{key:"handleInit",value:function(){if(!1!==this.checkForm()){var e,t,n=this.state.playerData.length;if("random"===this.state.color){var r=a(34)({count:n,hue:"random"});e=this.state.playerData.map(function(e){return Object(l.a)({},e,{color:r[e.id-1]})})}else e=this.state.playerData.map(function(e){return Object(l.a)({},e,{color:"#000000"})});this.props.dispatch((t=this.state.gridNum,{type:f,payload:t})),this.props.dispatch(function(e){return{type:y,payload:e}}(n)),this.props.dispatch({type:g,payload:e}),this.props.dispatch({type:v})}}},{key:"handleChangePlayer",value:function(e){var t=Object(o.a)(this.state.playerData);if(-1===e)t.pop();else{var a=this.state.playerData.length;t.push({id:a+1,name:""})}this.setState({playerData:t})}},{key:"handleChangePlayerName",value:function(e,t){this.setState({playerData:Object(o.a)(this.state.playerData).map(function(a){return a.id===t?Object(l.a)({},a,{name:e}):a})})}},{key:"handleChangeColor",value:function(e){this.setState({color:e})}},{key:"render",value:function(){var e=this,t=this.state.playerData.length;return r.a.createElement("div",null,"\u8acb\u9078\u64c7\u908a\u683c\u6578",r.a.createElement("input",{type:"number",min:"5",max:"30",defaultValue:"5",onChange:function(t){return e.setState({gridNum:t.target.value})}}),"\u8acb\u9078\u64c7\u4eba\u6578",r.a.createElement("button",{disabled:t<=2,onClick:function(){return e.handleChangePlayer(-1)}},"-"),t,r.a.createElement("button",{disabled:t>=8,onClick:function(){return e.handleChangePlayer(1)}},"+"),this.state.playerData.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,"\u73a9\u5bb6",t.id),r.a.createElement("span",null,"\u8acb\u8f38\u5165\u540d\u7a31",r.a.createElement("input",{type:"text",onChange:function(a){return e.handleChangePlayerName(a.target.value,t.id)}})))}),"\u984f\u8272\u5206\u914d \u96a8\u6a5f",r.a.createElement("input",{type:"radio",name:"color-radio",onChange:function(t){return e.handleChangeColor(t.target.value)},value:"random"}),"\u540c\u8272",r.a.createElement("input",{type:"radio",name:"color-radio",onChange:function(t){return e.handleChangeColor(t.target.value)},value:"allsame"}),r.a.createElement("button",{onClick:function(){return e.handleInit()}},"\u958b\u59cb\u904a\u6232"))}}]),t}(n.Component)),O=Object(m.b)(function(e){return{state:e}},function(e){return{dispatch:e}})(T);a(36);var j=Object(m.b)(function(e){return{state:e}})(function(e){var t=e.state.isInited,a={gridWidth:20,intervalWidth:2};return r.a.createElement("section",{className:"App"},t?r.a.createElement("section",{style:{display:"flex"}},r.a.createElement("section",{style:{width:"80%"}},r.a.createElement(k,{layout:a}),r.a.createElement(C,{gridNum:e.state.gridNum,layout:a})),r.a.createElement(w,null)):r.a.createElement("section",null,r.a.createElement(O,null)))}),D=a(10),S={playerNum:2,gridNum:15,isInited:!1,playerData:[],nowPlayerTurn:1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_DONE":return Object.assign({},e,{isInited:!0});case"SET_PLAYERNUM":return Object.assign({},e,{playerNum:t.payload});case"SET_GRIDNUM":return Object.assign({},e,{gridNum:t.payload});case"SET_PLAYERDATA":return Object.assign({},e,{playerData:t.payload});case"SET_TURN":return Object.assign({},e,{nowPlayerTurn:t.payload});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=Object(D.b)(P);s.a.render(r.a.createElement(m.a,{store:W},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.c17a1d4d.chunk.js.map