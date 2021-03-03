(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(12),r=n.n(c),s=n(3),i=n(4),l=n(6),o=n(5),u=(n(17),n(18),n(0)),b=function(){return Object(u.jsx)("div",{className:"app-logo",children:Object(u.jsx)("img",{className:"app-logo__img",src:"./img/logo.png",alt:"App logo"})})},j=function(){return Object(u.jsx)("header",{className:"app-header",children:Object(u.jsx)(b,{})})},f=(n(20),n(2)),d=n(11),g=(n(21),n(22),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:e.props.value,isEmpty:!0},e.clickHandler=function(){var t=e.props,n=t.onSelect,a=t.row,c=t.column,r=t.value,s=t.isPlaying,i=e.state.isEmpty;s&&i&&(e.setState({value:r,isEmpty:!1}),n(a,c))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"board-field",onClick:this.clickHandler,children:this.state.value})}}]),n}(a.Component)),h=(n(23),function(e){var t=e.message;return Object(u.jsx)("div",{className:"info-panel",children:t})}),m=(n(24),function(e){var t=e.onSelect;return Object(u.jsxs)("div",{className:"buttons-block",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-outline-info btn-lg btn-block",onClick:function(){return t("Autoplay")},children:"Autoplay"}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg btn-block",onClick:function(){return t("Statistics")},children:"Statistics"}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-lg btn-block",onClick:function(){return t("NewGame")},children:"New Game"})]})}),p=(n(25),n(9)),O=n.n(p),y=function(e){var t=e.onPlayerChange,n=e.playerState,c=Object(a.useState)(n),r=Object(f.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(!1),o=Object(f.a)(l,2),b=o[0],j=o[1],d=Object(a.useState)(!1),g=Object(f.a)(d,2),h=g[0],m=g[1];return Object(u.jsxs)("div",{className:"toggles-block",children:[Object(u.jsxs)("label",{className:"toggles-block__toggle",children:[Object(u.jsx)("span",{children:"First player"}),Object(u.jsx)(O.a,{onChange:function(e){i(e),t()},checked:s,className:"react-switch",onColor:"#86d3ff",onHandleColor:"#2693e6",offColor:"#86d3ff",offHandleColor:"#2693e6",checkedIcon:Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:18,fontWeight:"bold",color:"#ffffff",paddingRight:2},children:"O"})})]}),Object(u.jsxs)("label",{className:"toggles-block__toggle",children:[Object(u.jsx)("span",{children:"Night Mode"}),Object(u.jsx)(O.a,{onChange:function(e){j(e),document.getElementById("root").classList.toggle("night-mode")},checked:b,className:"react-switch",onColor:"#86d3ff",onHandleColor:"#2693e6"})]}),Object(u.jsxs)("label",{className:"toggles-block__toggle",children:[Object(u.jsx)("span",{children:"Fullscreen"}),Object(u.jsx)(O.a,{onChange:function(e){var t;m(e),h?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():(t=document.getElementById("root")).requestFullScreen?t.requestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen()},checked:h,className:"react-switch",onColor:"#86d3ff",onHandleColor:"#2693e6"})]})]})},v=(n(27),function(e){var t=Object(f.a)(e.line,2),n=Object(f.a)(t[0],2),a=n[0],c=n[1],r=Object(f.a)(t[1],2),s=r[0],i=r[1],l=e.visibility?"winning-line":"winning-line d-none";return Object(u.jsx)("svg",{className:l,height:"300",width:"300",children:Object(u.jsx)("line",{className:"winning-line__line",x1:a,y1:c,x2:s,y2:i})})}),x=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={board:[["","",""],["","",""],["","",""]],isPlaying:!0,winner:"",message:"Let's play!"},e.currentPlayer="X",e.startingPlayer="X",e.idCounter=0,e.winningLines=[[[0,0],[0,0]],[[10,50],[290,50]],[[10,150],[290,150]],[[10,250],[290,250]],[[50,10],[50,290]],[[150,10],[150,290]],[[250,10],[250,290]],[[10,10],[290,290]],[[10,290],[290,10]]],e.winningLine=e.winningLines[0],e.drawLine=function(t){e.winningLine=e.winningLines[t]},e.setInitialGameState=function(){e.setState({board:[["","",""],["","",""],["","",""]],isPlaying:!0,winner:"",message:"Let's play!"}),e.currentPlayer=e.startingPlayer},e.toggleCurrentPlayer=function(){e.currentPlayer="O"===e.currentPlayer?"X":"O"},e.toggleStartingPlayer=function(){e.startingPlayer="O"===e.startingPlayer?"X":"O",e.setInitialGameState()},e.stopGame=function(t){var n="Player ".concat(t," won!");e.setState({isPlaying:!1,winner:t},(function(){e.setState({message:t?n:"Tie!"})})),e.drawLine(1)},e.makeMove=function(t,n){e.setState((function(a){var c=a.board,r=Object(d.a)(c);return r[t][n]=e.currentPlayer,{board:r}}),(function(){e.resultCheck(),e.toggleCurrentPlayer(),e.setState({message:"It's player ".concat(e.currentPlayer," turn.")})}))},e.resultCheck=function(){for(var t=e.state.board,n=0;n<3;n++)if(t[n][0]&&t[n][0]===t[n][1]&&t[n][1]===t[n][2]){var a=t[n][0];return e.stopGame(a),void e.drawLine(n+1)}for(var c=0;c<3;c++)if(t[0][c]&&t[0][c]===t[1][c]&&t[1][c]===t[2][c]){var r=t[0][c];return e.stopGame(r),void e.drawLine(c+4)}if(t[0][0]&&t[0][0]===t[1][1]&&t[1][1]===t[2][2]){var s=t[0][0];return e.stopGame(s),void e.drawLine(7)}if(t[0][2]&&t[0][2]===t[1][1]&&t[1][1]===t[2][0]){var i=t[0][2];return e.stopGame(i),void e.drawLine(8)}for(var l=0;l<3;l++)for(var o=0;o<3;o++)if(!t[l][o])return;e.stopGame(null),e.drawLine(0)},e.autoplay=function(){e.setState({board:[["","",""],["","",""],["","",""]],isPlaying:!0,winner:"",message:"Let's play!"},(function(){for(var t=[],n=0;n<3;n++)for(var a=0;a<3;a++)t.push([n,a]);!function n(){if(e.state.isPlaying){var a=Math.floor(Math.random()*(t.length+1)),c=t.splice(a-1,1),r=Object(f.a)(c,1)[0],s=Object(f.a)(r,2),i=s[0],l=s[1];e.setState((function(t){var n=t.board,a=Object(d.a)(n);return a[i][l]=e.currentPlayer,{board:a}}),(function(){e.resultCheck(),e.toggleCurrentPlayer(),e.setState({message:"It's player ".concat(e.currentPlayer," turn.")}),t.length&&setTimeout(n,1e3)}))}}()}))},e.onSelect=function(t,n){e.state.board[t][n]||e.makeMove(t,n)},e.settingsListener=function(t){switch(t){case"Autoplay":e.autoplay();break;case"Statistics":break;case"NewGame":e.setInitialGameState()}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;this.settingsListener();var t=this.state,n=t.board,a=t.isPlaying,c=n.map((function(t,n){return Object(u.jsx)("div",{className:"board-row",children:t.map((function(t,c){return Object(u.jsx)(g,{row:n,column:c,onSelect:e.onSelect,value:t,isPlaying:a},e.idCounter++)}))},e.idCounter++)}));return Object(u.jsxs)("div",{className:"game-board",children:[Object(u.jsxs)("section",{className:"game-field",children:[Object(u.jsx)(h,{message:this.state.message}),Object(u.jsx)(v,{line:this.winningLine,visibility:!this.state.isPlaying}),c]}),Object(u.jsxs)("section",{className:"game-settings",children:[Object(u.jsx)(y,{onPlayerChange:this.toggleStartingPlayer,playerState:"O"===this.startingPlayer}),Object(u.jsx)(m,{onSelect:this.settingsListener})]})]})}}]),n}(a.Component),S=function(){return Object(u.jsx)("main",{className:"app-main",children:Object(u.jsx)(x,{})})},w=(n(28),n(29),function(){return Object(u.jsxs)("div",{className:"social-icons",children:[Object(u.jsx)("a",{href:"https://github.com/DenisKhatsuk",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:"fa fa-github fa-3x"})}),Object(u.jsx)("a",{href:"https://github.com/DenisKhatsuk",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:"fa fa-youtube fa-3x"})})]})}),k=(n(30),function(){return Object(u.jsx)("img",{src:"./img/rsschool-logo.png",alt:"RS School logo",className:"rsschool-logo"})}),N=function(){return Object(u.jsxs)("footer",{className:"app-footer",children:[Object(u.jsxs)("div",{className:"app-footer__details",children:[Object(u.jsx)("span",{className:"app-footer__year",children:"2021"}),Object(u.jsx)("div",{className:"app-footer__logo",children:Object(u.jsx)("a",{href:"https://rs.school/react/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(k,{})})})]}),Object(u.jsx)("div",{className:"app-footer__icons",children:Object(u.jsx)(w,{})})]})},C=(n(31),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"react-game-app",children:[Object(u.jsx)(j,{}),Object(u.jsx)(S,{}),Object(u.jsx)(N,{})]})}}]),n}(a.Component));n(32);r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.9d3fb76d.chunk.js.map