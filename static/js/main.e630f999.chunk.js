(this.webpackJsonpdachshundoku=this.webpackJsonpdachshundoku||[]).push([[0],{26:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/dog-still.2f9a8692.png"},32:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABuCAYAAADFwOqWAAADIklEQVR42u3dwW0TQRSA4ZnQAVDAuobQQ06hDXxKMTmFNvApPUANdgGEDmC4eME2VvTWzHrH628uRqPIsXc//jeSZSWXUlLLK+fc9gucaJVScs75ppTyq3/cXq8m9jJYYIFlgQUWWGCBBZYFFlhggQUWWBZYYIHVKITFYtFfyJRzPry4k+/1/9593F6HUfc2m03TUMECCyywwAILLLDAAgsssMACCyywwAILLLDAqgWmh1BrPd2/7V9BSunwJQzfW65+TALr88f3Va/Lpy/fJ4EaBTgKrMOLfewGRPee7t9VvSHL1csYn9uF3kdJJeWU/zymlE7eW65eql7n9Xodfbtv9gDlfLN9vr09xVIsxVIsxVIsxQILLKPQKDQKFUuxFEuxFEuxLqJYR+7CWcCcWgUf6Uy7FwU4Cqyaib6EVfv9trwXHZmKpViKpViKpViKBRZYRqFRaBQqlmIplmIplmI5vL+yovKjX6ao/Xy1YUVvSNd1kzwfWGDNC1bXdWE0tS9MZNV+viELLMVSLLDAAgsssMACy+Hd4V2xFAsssMAaH9ZUX6aYCsJcPtKZCmrz34QGC6xBsMZIeevr2mAZhYplFIIFFlhggQWWw7vDu8O7YimWUQgWWGCBBRZYDu8O7w7viqVYYIEFFlhggQWWw7vDu8O7YhmFYIE1Lqzoen647V9peu0PCNw9fptkXD4/fAj93N3j16q/FyywwDrnG2n9xg17fWUHeT9e9/cuAdYsDu+KpVhggQUWWGCBBZbDu8O7w7tiGYVgzRZWdEUBhl9g8PmiNy66ojc4OuKie9HfGx5JA+5HVQcppZvK/zl/Bn8u9Eero8/3F9buTUsn78Vh3R5gKQeVHLYXLWrzsBRLsRRLsRRLsa68WGCBZRQahYqlWIqlWIqlWIp1pbCO4fjfvZoXsDbAqcC0vsYYhSk44sJ7u/vHfs+QEVx7ZP6L6jwjrnlYiqVYiqVYiqVYV14ssMAyCo1CxVIsxVIsxVIsxQLrrLBqAxyh4rMAc42jsOrIBEuxFEuxFEuxFAsssMAyCo1CxVIssBRLsRRLsea/fgMqOPdBBVP9QAAAAABJRU5ErkJggg=="},33:function(e,t,n){e.exports=function(){return new Worker(n.p+"2a6365ae50b8e1bc1b3b.worker.js")}},36:function(e,t,n){e.exports=n(53)},41:function(e,t,n){},50:function(e,t){},51:function(e,t){},52:function(e,t){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),s=n.n(i),o=(n(41),n(5)),l=n(6),c=n(11),u=n(10),d=(n(26),n(29)),p=n.n(d),h=n(13);function m(e){return e.disabled?r.a.createElement("div",{className:"App-button App-button-disabled"},e.children):r.a.createElement(h.b,{to:e.to,style:{textDecoration:"none"}},r.a.createElement("div",{className:"App-button App-button-enabled"},e.children))}var f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={difficulty:window.localStorage.getItem("difficulty")||50},a}return Object(l.a)(n,[{key:"onDifficultyChanged",value:function(e){var t=e.target.value;this.setState({difficulty:t}),window.localStorage.setItem("difficulty",t)}},{key:"render",value:function(){var e=window.localStorage.getItem("currentId");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"App-title-image",src:p.a,alt:""}),r.a.createElement("h1",null,"DACHSHUN-DOKU"),r.a.createElement("section",{className:"App-buttons"},r.a.createElement(m,{to:"/game/".concat(e),disabled:!e},"continue"),r.a.createElement(m,{to:"/new/".concat(this.state.difficulty)},"new sudoku"),r.a.createElement("div",null,r.a.createElement("input",{type:"range",id:"difficulty-slider",step:"10",defaultValue:this.state.difficulty,onChange:this.onDifficultyChanged.bind(this)}),"difficulty"),r.a.createElement(m,{to:"/unsolved"},"unsolved"))))}}]),n}(r.a.Component),v=n(24),g=n(4),b=n(19),y=n(20);function w(e){var t=[];return e.forEach((function(e){Array.isArray(e)?t.push(w(e)):"object"===typeof e?t.push(E(e)):t.push(e)})),t}var E=function e(t){if(null===t)return null;for(var n={},a=0,r=Object.entries(t);a<r.length;a++){var i=Object(y.a)(r[a],2),s=i[0],o=i[1];Array.isArray(o)?n[s]=w(o):n[s]="object"===typeof o?e(o):o}return n};function k(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(0===e[t][n])return!1;return!0}function A(e){return Math.floor(Math.random()*Math.floor(e))}function I(e){return e.map((function(e){return e.map((function(e){return e.value||0}))}))}var C=new(n(31).a)("sudoku");C.version(1).stores({unsolved:"++id,date,grid"});var O=C,x=n(32),j=n.n(x);function S(e){return r.a.createElement("img",{src:j.a,alt:"",className:"App-little-dog"})}var L=n(2),R=n(16),N=n(34),B=["/sprites/dog-walk-left-1.png","/sprites/dog-walk-left-2.png","/sprites/dog-walk-left-3.png","/sprites/dog-walk-left-2.png"],D=function(){function e(t,n,a,r,i){var s=this;Object(o.a)(this,e),this.canvas=r,this.onFinished=i,this.squareCoords={x:n.x+12,y:n.y-18},this.startCoords={x:r.width,y:this.squareCoords.y},this.coords=Object(N.a)({},this.startCoords),this.pickupNumber=a.toString(),this.imageStage=0,this.walking=!0,this.completed=!1,this.heldNumber=new R.fabric.Text(this.pickupNumber,{fontFamily:"ConnectionII",fontSize:30,fill:"rgb(56,56,56)"}),R.fabric.Image.fromURL(this.getImage(),(function(e){s.sprite=e,s.sprite.scaleToWidth(150),s.sprite.set({left:20}),s.sprite.setCoords(),s.group=new R.fabric.Group([s.heldNumber,s.sprite]),s.setCoords(),r.add(s.group).renderAll()}))}return Object(l.a)(e,[{key:"setCoords",value:function(){this.group.set({left:this.coords.x,top:this.coords.y}),this.group.setCoords()}},{key:"updateCoords",value:function(){this.walking&&(this.coords.x-=20),this.setCoords()}},{key:"getImage",value:function(){return this.walking?B[this.imageStage]:"/sprites/dog-still-left.png"}},{key:"nextImage",value:function(){this.walking&&(this.imageStage=(this.imageStage+1)%B.length),this.group.removeWithUpdate(this.sprite),this.sprite.setSrc(this.getImage()),this.group.addWithUpdate(this.sprite)}},{key:"update",value:function(){var e=this;if(this.group){if(this.completed)return this.canvas.remove(this.group),"delete";this.nextImage(),this.updateCoords(),this.coords.x<this.squareCoords.x?(this.walking=!1,setTimeout((function(){return e.walking=!0}),2e3),this.heldNumber.set({text:""}),this.onFinished()):this.coords.x<=-this.group.width&&(this.completed=!0)}}}]),e}(),W=new(function(){function e(){Object(o.a)(this,e);var t=document.getElementById("root").getBoundingClientRect(),n=t.width,a=t.height;this.canvas=new R.fabric.Canvas("base-canvas",{width:n,height:a}),this.dogs=new Set,this.counter=0,this.levels=new Set}return Object(l.a)(e,[{key:"addLevel",value:function(e){this.levels.add(e)}},{key:"sortedLevels",value:function(){return Array.from(this.levels).sort()}},{key:"getLevel",value:function(e){return this.sortedLevels()[e]}},{key:"addDog",value:function(e,t,n,a){var r=this;0===this.dogs.size&&(this.interval=setInterval((function(){return r.update()}),400)),this.dogs.add(new D(e,n,t,this.canvas,a))}},{key:"update",value:function(){var e,t=new Set,n=Object(b.a)(this.dogs);try{for(n.s();!(e=n.n()).done;){var a=e.value;"delete"===a.update()&&t.add(a)}}catch(o){n.e(o)}finally{n.f()}var r,i=Object(b.a)(t);try{for(i.s();!(r=i.n()).done;){var s=r.value;this.dogs.delete(s)}}catch(o){i.e(o)}finally{i.f()}0===this.dogs.size&&clearInterval(this.interval),this.canvas.renderAll()}}]),e}()),V=n(33),U=n.n(V),F=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onClick=a.onClick.bind(Object(g.a)(a)),a.numberRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.numberRef.current.getBoundingClientRect();W.addLevel(e.y+e.height)}},{key:"onClick",value:function(){this.props.cb({row:this.props.row,column:this.props.column,position:this.numberRef.current.getBoundingClientRect()})}},{key:"render",value:function(){return r.a.createElement("td",{onClick:this.onClick,className:this.props.active?"active":null,ref:this.numberRef},r.a.createElement("span",{className:"App-square-top-left"},this.props.cell.noteTopLeft),r.a.createElement("span",{className:"App-square-bottom-left"},this.props.cell.noteBottomLeft),r.a.createElement("span",null,this.props.cell.value),r.a.createElement("span",{className:"App-square-top-right"},this.props.cell.noteTopRight),r.a.createElement("span",{className:"App-square-bottom-right"},this.props.cell.noteBottomRight))}}]),n}(r.a.Component),T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={active:!1},a.onClick=a.onClick.bind(Object(g.a)(a)),a.numberRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.numberRef.current.getBoundingClientRect();W.addLevel(e.y+e.height)}},{key:"onClick",value:function(){var e=this;this.setState({active:!0}),this.props.cb(this.numberRef.current.getBoundingClientRect()),setTimeout((function(){e.setState({active:!1})}),500)}},{key:"render",value:function(){return r.a.createElement("td",{onClick:this.onClick,className:this.state.active?"active":null,ref:this.numberRef},this.props.children)}}]),n}(r.a.Component);function q(e){return r.a.createElement(T,{cb:function(t){return e.cb({value:e.value,position:t})}},e.children)}var K=Object(v.a)(Array(9)).map((function(e){return Array(9).fill({predefined:!0,value:null})})),M=["App-example-main","App-example-top-right","App-example-top-left"],Y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={grid:null,complete:!1,selected:null,latestInput:null,resetTimer:null,exampleState:0},a.history=[],a.middleRef=r.a.createRef(),a.celebrationInterval=null,a.onSelect=a.onSelect.bind(Object(g.a)(a)),a.onInput=a.onInput.bind(Object(g.a)(a)),a.undo=a.undo.bind(Object(g.a)(a)),a.onKeyPress=a.onKeyPress.bind(Object(g.a)(a)),a.onKeyDown=a.onKeyDown.bind(Object(g.a)(a)),a.nextExampleState=a.nextExampleState.bind(Object(g.a)(a)),a.onGeneratedGame=a.onGeneratedGame.bind(Object(g.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e,t,n,a,r,i=this.middleRef.current.getBoundingClientRect();if(W.addLevel(i.y+i.height),this.props.id)this.id=parseInt(this.props.id,10),this.getGridById(this.id);else if(this.props.difficulty){this.worker=new U.a,this.worker.addEventListener("message",this.onGeneratedGame);var s=parseInt(this.props.match.params.difficulty,10),o=(e=s,t=0,n=100,a=window.localStorage.getItem("testMode")?2:40,r=75,Math.min(r,Math.max(a,Math.round(e/(n-t)*(r-a))+a)));this.worker.postMessage(o)}document.addEventListener("keypress",this.onKeyPress),document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyPress),document.removeEventListener("keydown",this.onKeyDown),this.worker&&this.worker.removeEventListener("message",this.onGeneratedGame),this.celebrationInterval&&(clearInterval(this.celebrationInterval),this.celebrationInterval=null)}},{key:"onGeneratedGame",value:function(e){var t=this;O.table("unsolved").add({date:new Date,grid:e.data}).then((function(e){t.id=e,window.location.href.includes("new")&&setTimeout((function(){O.table("unsolved").reverse().toArray().then((function(t){t[0].id===e&&t.length>1&&(O.table("unsolved").delete(e),window.localStorage.setItem("currentId",t[1].id))}))}),500),t.getGridById(e)}))}},{key:"getGridById",value:function(e){var t=this;O.table("unsolved").get(e,(function(e){e?(window.localStorage.setItem("currentId",e.id),t.setState({grid:e.grid})):t.props.history.push("/")}))}},{key:"onSelect",value:function(e){this.setState({selected:e})}},{key:"onKeyPress",value:function(e){"0123456789".includes(e.key)&&this.onInput(parseInt(e.key,10)),e.preventDefault()}},{key:"onKeyDown",value:function(e){switch(e.key){case"ArrowRight":this.setState((function(e,t){return{selected:{row:e.selected?e.selected.row:0,column:Math.min((e.selected?e.selected.column:-1)+1,8)}}}));break;case"ArrowLeft":this.setState((function(e,t){return{selected:{row:e.selected?e.selected.row:0,column:Math.max((e.selected?e.selected.column:9)-1,0)}}}));break;case"ArrowDown":this.setState((function(e,t){return{selected:{row:Math.min((e.selected?e.selected.row:-1)+1,8),column:e.selected?e.selected.column:0}}}));break;case"ArrowUp":this.setState((function(e,t){return{selected:{row:Math.max((e.selected?e.selected.row:9)-1,0),column:e.selected?e.selected.column:0}}}));break;case" ":this.nextExampleState()}}},{key:"onInput",value:function(e){var t=this;if(!this.state.celebrationInterval){var n=e.value,a=e.position;this.state.selected&&(n&&!this.state.grid[this.state.selected.row][this.state.selected.column].predefined&&(this.setState({latestInput:{value:n,time:new Date}}),this.state.resetTimer&&clearTimeout(this.state.resetTimer),this.setState({resetTimer:setTimeout((function(){return t.setState({latestInput:null})}),2e3)})),this.update(n,this.state.selected,!0,a,this.state.selected.position))}}},{key:"update",value:function(e,t,n,a,r){var i=this,s=this.state.grid[t.row][t.column];if(!s.predefined){n&&this.history.push({position:t,value:s.value,noteTopLeft:s.noteTopLeft||null,noteTopRight:s.noteTopRight||null,noteBottomLeft:s.noteBottomLeft||null,noteBottomRight:s.noteBottomRight||null});var o=w(this.state.grid);switch(M[this.state.exampleState]){case"App-example-main":o[t.row][t.column].value=e;break;case"App-example-top-right":o[t.row][t.column].noteTopRight=e;break;case"App-example-top-left":o[t.row][t.column].noteTopLeft=e;break;case"App-example-bottom-right":o[t.row][t.column].noteBottomRight=e;break;case"App-example-bottom-left":o[t.row][t.column].noteBottomLeft=e}O.table("unsolved").update(this.id,{grid:o});var l=function(e){var t=I(e);if(!k(t))return!1;var n,a=Object(b.a)(t);try{for(a.s();!(n=a.n()).done;)for(var r=n.value,i=1;i<10;i++)if(!r.includes(i))return!1}catch(f){a.e(f)}finally{a.f()}for(var s=function(e){for(var n=t.map((function(t){return t[e]})),a=1;a<10;a++)if(!n.includes(a))return{v:!1}},o=0;o<9;o++){var l=s(o);if("object"===typeof l)return l.v}for(var c=0;c<3;c++)for(var u=0;u<3;u++){for(var d=[],p=0;p<3;p++)for(var h=0;h<3;h++)d.push(t[3*c+p][3*u+h]);for(var m=1;m<10;m++)if(!d.includes(m))return!1}return!0}(o);l?(window.localStorage.removeItem("currentId"),O.table("unsolved").delete(this.id),W.addDog(a,e,r,(function(){i.setState({grid:o,complete:l}),i.startCelebration()}))):this.setState({grid:o,complete:l})}}},{key:"undo",value:function(){if(this.history.length>0){var e=this.history.pop(),t=e.position,n=e.value;this.update(n,t,!1)}}},{key:"nextExampleState",value:function(){this.setState((function(e,t){return{exampleState:e.exampleState+1===M.length?0:e.exampleState+1}}))}},{key:"startCelebration",value:function(){var e=this;this.celebrationInterval||(this.celebrationInterval=setInterval((function(){e.setState({latestInput:{value:A(8)+1,time:new Date}})}),1e3))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-title-bar ".concat(this.state.complete?"App-complete-green":"")},r.a.createElement("h1",{className:"App-navigation-button",onClick:function(){return window.history.back()}},"<"),r.a.createElement("h1",null,this.state.complete?"WOOF WOOF!":"DACHSHUN-DOKU"),r.a.createElement("h1",{className:"App-navigation-button"}," ")),r.a.createElement("div",{className:"App-body"},r.a.createElement("table",null,r.a.createElement("tbody",null,(this.state.grid||K).map((function(t,n){return r.a.createElement("tr",{key:n},t.map((function(t,a){return r.a.createElement(F,{key:10*(n+1)+a,cell:t,row:n,column:a,cb:e.onSelect,active:!!e.state.selected&&(e.state.selected.row===n||e.state.selected.column===a)})})))}))))),r.a.createElement("div",{className:"App-title-bar App-middle ".concat(this.state.complete?"App-complete-green":""),ref:this.middleRef},this.state.latestInput&&this.state.latestInput.value&&Object(v.a)(Array(this.state.latestInput.value)).map((function(t,n){return r.a.createElement(S,{key:e.state.latestInput.time.getTime()+n})}))),r.a.createElement("div",{className:"App-controls-container"},r.a.createElement("table",{className:"App-controls"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(q,{value:1,cb:this.onInput},"1"),r.a.createElement(q,{value:2,cb:this.onInput},"2"),r.a.createElement(q,{value:3,cb:this.onInput},"3")),r.a.createElement("tr",null,r.a.createElement(q,{value:4,cb:this.onInput},"4"),r.a.createElement(q,{value:5,cb:this.onInput},"5"),r.a.createElement(q,{value:6,cb:this.onInput},"6")),r.a.createElement("tr",null,r.a.createElement(q,{value:7,cb:this.onInput},"7"),r.a.createElement(q,{value:8,cb:this.onInput},"8"),r.a.createElement(q,{value:9,cb:this.onInput},"9")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"App-example-square",onClick:this.nextExampleState,style:{display:"none"}},"Blocking this for now",r.a.createElement("span",{className:M[this.state.exampleState]},"#"))),r.a.createElement(q,{value:null,cb:this.onInput},"X"),r.a.createElement(T,{cb:this.undo},"<"))))))}}]),n}(r.a.Component),G=Object(L.g)(Y),Q=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={deleted:!1},a.onClick=a.onClick.bind(Object(g.a)(a)),a}return Object(l.a)(n,[{key:"onClick",value:function(){var e=this;this.setState({deleted:!0}),setTimeout((function(){return e.props.onDelete(e.props.entry.id)}),300)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.deleted?"App-unsolved-entry-deleted":null},r.a.createElement("span",{className:"App-unsolved-delete",onClick:function(){return e.onClick()}},"X"),r.a.createElement("table",{onClick:function(){return e.props.history.push("/game/".concat(e.props.entry.id))}},r.a.createElement("tbody",null,this.props.entry.grid.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,n){return r.a.createElement(F,{key:10*(t+1)+n,cell:e,row:t,column:n,cb:function(){}})})))})))))}}]),n}(r.a.Component);Q=Object(L.g)(Q);var Z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={entries:null},a.delete=a.delete.bind(Object(g.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateUnsolved()}},{key:"updateUnsolved",value:function(){var e=this;O.table("unsolved").reverse().toArray().then((function(t){return e.setState({entries:t})}))}},{key:"delete",value:function(e){var t=this;parseInt(window.localStorage.getItem("currentId"),10)===e&&window.localStorage.removeItem("currentId"),O.table("unsolved").delete(e).then((function(e){return t.updateUnsolved()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-title-bar"},r.a.createElement("h1",{className:"App-navigation-button",onClick:function(){return window.history.back()}},"<"),r.a.createElement("h1",null,"UNSOLVED"),r.a.createElement("h1",{className:"App-navigation-button"}," ")),r.a.createElement("div",{className:"App-body App-body-unsolved"},this.state.entries&&this.state.entries.map((function(t){return r.a.createElement(Q,{key:t.id,entry:t,onDelete:e.delete})}))))}}]),n}(r.a.Component),H=Object(L.g)(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(56),J=n(55);function X(e){var t=Object(L.f)().id;return r.a.createElement(G,{key:t,id:t})}function z(e){var t=Object(L.f)().difficulty;return r.a.createElement(G,{difficulty:t})}s.a.render(r.a.createElement(h.a,null,r.a.createElement(L.a,{render:function(e){var t=e.location.key;return r.a.createElement(P.a,{component:null},r.a.createElement(J.a,{key:t,classNames:"fade",timeout:300},r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/new/:difficulty"},r.a.createElement(z,null)),r.a.createElement(L.a,{path:"/game/:id"},r.a.createElement(X,null)),r.a.createElement(L.a,{path:"/unsolved"},r.a.createElement(H,null)),r.a.createElement(L.a,{exact:!0,path:"/"},r.a.createElement(f,null)))))}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e630f999.chunk.js.map