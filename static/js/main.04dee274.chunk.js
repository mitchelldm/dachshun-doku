(this.webpackJsonpdachshundoku=this.webpackJsonpdachshundoku||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/dog-still.2f9a8692.png"},32:function(e,t,n){e.exports=function(){return new Worker(n.p+"6c160d89d42b3de1d4da.worker.js")}},34:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABuCAYAAADFwOqWAAADIklEQVR42u3dwW0TQRSA4ZnQAVDAuobQQ06hDXxKMTmFNvApPUANdgGEDmC4eME2VvTWzHrH628uRqPIsXc//jeSZSWXUlLLK+fc9gucaJVScs75ppTyq3/cXq8m9jJYYIFlgQUWWGCBBZYFFlhggQUWWBZYYIHVKITFYtFfyJRzPry4k+/1/9593F6HUfc2m03TUMECCyywwAILLLDAAgsssMACCyywwAILLLDAqgWmh1BrPd2/7V9BSunwJQzfW65+TALr88f3Va/Lpy/fJ4EaBTgKrMOLfewGRPee7t9VvSHL1csYn9uF3kdJJeWU/zymlE7eW65eql7n9Xodfbtv9gDlfLN9vr09xVIsxVIsxVIsxQILLKPQKDQKFUuxFEuxFEuxLqJYR+7CWcCcWgUf6Uy7FwU4Cqyaib6EVfv9trwXHZmKpViKpViKpViKBRZYRqFRaBQqlmIplmIplmI5vL+yovKjX6ao/Xy1YUVvSNd1kzwfWGDNC1bXdWE0tS9MZNV+viELLMVSLLDAAgsssMACy+Hd4V2xFAsssMAaH9ZUX6aYCsJcPtKZCmrz34QGC6xBsMZIeevr2mAZhYplFIIFFlhggQWWw7vDu8O7YimWUQgWWGCBBRZYDu8O7w7viqVYYIEFFlhggQWWw7vDu8O7YhmFYIE1Lqzoen647V9peu0PCNw9fptkXD4/fAj93N3j16q/FyywwDrnG2n9xg17fWUHeT9e9/cuAdYsDu+KpVhggQUWWGCBBZbDu8O7w7tiGYVgzRZWdEUBhl9g8PmiNy66ojc4OuKie9HfGx5JA+5HVQcppZvK/zl/Bn8u9Eero8/3F9buTUsn78Vh3R5gKQeVHLYXLWrzsBRLsRRLsRRLsa68WGCBZRQahYqlWIqlWIqlWIp1pbCO4fjfvZoXsDbAqcC0vsYYhSk44sJ7u/vHfs+QEVx7ZP6L6jwjrnlYiqVYiqVYiqVYV14ssMAyCo1CxVIsxVIsxVIsxQLrrLBqAxyh4rMAc42jsOrIBEuxFEuxFEuxFAsssMAyCo1CxVIssBRLsRRLsea/fgMqOPdBBVP9QAAAAABJRU5ErkJggg=="},37:function(e,t,n){e.exports=n(54)},42:function(e,t,n){},51:function(e,t){},52:function(e,t){},53:function(e,t){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),s=(n(42),n(5)),l=n(6),c=n(11),u=n(10),d=(n(27),n(30)),h=n.n(d),p=n(14),m=n(2),f=new(n(31).a)("sudoku");f.version(1).stores({unsolved:"++id,date,grid"});var v=f,g=n(32),b=n.n(g);function y(e){return e.disabled?r.a.createElement("div",{className:"App-button App-button-disabled"},e.children):r.a.createElement(p.b,{to:e.to,style:{textDecoration:"none"}},r.a.createElement("div",{className:"App-button App-button-enabled"},e.children))}function k(e){var t=Object(m.f)();return r.a.createElement("div",{className:"App-button App-button-enabled",onClick:function(){var n,a,r,i,o,s=parseInt(e.difficulty,10),l=(n=s,a=0,r=100,i=window.localStorage.getItem("testMode")?2:40,o=75,Math.min(o,Math.max(i,Math.round(n/(r-a)*(o-i))+i))),c=new b.a;c.addEventListener("message",(function(e){v.table("unsolved").add({date:new Date,grid:e.data}).then((function(e){return t.push("/dachshun-doku/game/".concat(e))}))})),c.postMessage(l)}},"new game")}var w=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={difficulty:window.localStorage.getItem("difficulty")||50},a}return Object(l.a)(n,[{key:"onDifficultyChanged",value:function(e){var t=e.target.value;this.setState({difficulty:t}),window.localStorage.setItem("difficulty",t)}},{key:"render",value:function(){var e=window.localStorage.getItem("currentId");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"App-title-image",src:h.a,alt:""}),r.a.createElement("h1",null,"DACHSHUN-DOKU"),r.a.createElement("section",{className:"App-buttons"},r.a.createElement(y,{to:"/dachshun-doku/game/".concat(e),disabled:!e},"continue"),r.a.createElement(k,{difficulty:this.state.difficulty}),r.a.createElement("div",null,r.a.createElement("input",{type:"range",id:"difficulty-slider",step:"10",defaultValue:this.state.difficulty,onChange:this.onDifficultyChanged.bind(this)}),"difficulty"),r.a.createElement(y,{to:"/dachshun-doku/unsolved"},"unsolved"))))}}]),n}(r.a.Component),E=n(25),A=n(4),I=n(17),C=n(21);function O(e){var t=[];return e.forEach((function(e){Array.isArray(e)?t.push(O(e)):"object"===typeof e?t.push(S(e)):t.push(e)})),t}var S=function e(t){if(null===t)return null;for(var n={},a=0,r=Object.entries(t);a<r.length;a++){var i=Object(C.a)(r[a],2),o=i[0],s=i[1];Array.isArray(s)?n[o]=O(s):n[o]="object"===typeof s?e(s):s}return n};function j(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(0===e[t][n])return!1;return!0}function x(e){return Math.floor(Math.random()*Math.floor(e))}function L(e){return e.map((function(e){return e.map((function(e){return e.value||0}))}))}var R=n(34),N=n.n(R);function W(e){return r.a.createElement("img",{src:N.a,alt:"",className:"App-little-dog"})}var B=n(18),D=n(35),V=["/dachshun-doku/sprites/dog-walk-left-1.png","/dachshun-doku/sprites/dog-walk-left-2.png","/dachshun-doku/sprites/dog-walk-left-3.png","/dachshun-doku/sprites/dog-walk-left-2.png"],U=function(){function e(t,n,a,r,i){var o=this;Object(s.a)(this,e),this.canvas=r,this.onFinished=i,this.squareCoords={x:n.x+12,y:n.y-18},this.startCoords={x:r.width,y:this.squareCoords.y},this.coords=Object(D.a)({},this.startCoords),this.pickupNumber=a.toString(),this.imageStage=0,this.walking=!0,this.completed=!1,this.heldNumber=new B.fabric.Text(this.pickupNumber,{fontFamily:"ConnectionII",fontSize:30,fill:"rgb(56,56,56)"}),B.fabric.Image.fromURL(this.getImage(),(function(e){o.sprite=e,o.sprite.scaleToWidth(150),o.sprite.set({left:20}),o.sprite.setCoords(),o.group=new B.fabric.Group([o.heldNumber,o.sprite]),o.setCoords(),r.add(o.group).renderAll()}))}return Object(l.a)(e,[{key:"setCoords",value:function(){this.group.set({left:this.coords.x,top:this.coords.y}),this.group.setCoords()}},{key:"updateCoords",value:function(){this.walking&&(this.coords.x-=20),this.setCoords()}},{key:"getImage",value:function(){return this.walking?V[this.imageStage]:"/dachshun-doku/sprites/dog-still-left.png"}},{key:"nextImage",value:function(){this.walking&&(this.imageStage=(this.imageStage+1)%V.length),this.group.removeWithUpdate(this.sprite),this.sprite.setSrc(this.getImage()),this.group.addWithUpdate(this.sprite)}},{key:"delete",value:function(){this.canvas.remove(this.group)}},{key:"update",value:function(){var e=this;if(this.group){if(this.completed)return this.delete(),"delete";this.nextImage(),this.updateCoords(),this.coords.x<this.squareCoords.x?(this.walking=!1,setTimeout((function(){return e.walking=!0}),2e3),this.heldNumber.set({text:""}),this.onFinished()):this.coords.x<=-this.group.width&&(this.completed=!0)}}}]),e}(),T=new(function(){function e(){Object(s.a)(this,e);var t=document.getElementById("root").getBoundingClientRect(),n=t.width,a=t.height;this.canvas=new B.fabric.Canvas("base-canvas",{width:n,height:a}),this.dogs=new Set,this.counter=0,this.levels=new Set}return Object(l.a)(e,[{key:"addLevel",value:function(e){this.levels.add(e)}},{key:"sortedLevels",value:function(){return Array.from(this.levels).sort()}},{key:"getLevel",value:function(e){return this.sortedLevels()[e]}},{key:"addDog",value:function(e,t,n,a){var r=this;0===this.dogs.size&&(this.interval=setInterval((function(){return r.update()}),400)),this.dogs.add(new U(e,n,t,this.canvas,a))}},{key:"clear",value:function(){var e,t=Object(I.a)(this.dogs);try{for(t.s();!(e=t.n()).done;){e.value.delete()}}catch(n){t.e(n)}finally{t.f()}this.dogs=new Set,this.interval&&clearInterval(this.interval),this.canvas.renderAll()}},{key:"update",value:function(){var e,t=new Set,n=Object(I.a)(this.dogs);try{for(n.s();!(e=n.n()).done;){var a=e.value;"delete"===a.update()&&t.add(a)}}catch(s){n.e(s)}finally{n.f()}var r,i=Object(I.a)(t);try{for(i.s();!(r=i.n()).done;){var o=r.value;this.dogs.delete(o)}}catch(s){i.e(s)}finally{i.f()}0===this.dogs.size&&clearInterval(this.interval),this.canvas.renderAll()}}]),e}()),q=n(13),F=n.n(q),K=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onClick=a.onClick.bind(Object(A.a)(a)),a.numberRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.numberRef.current.getBoundingClientRect();T.addLevel(e.y+e.height)}},{key:"onClick",value:function(){this.props.cb({row:this.props.row,column:this.props.column,position:this.numberRef.current.getBoundingClientRect()})}},{key:"render",value:function(){return r.a.createElement("td",{onClick:this.onClick,className:F()({active:this.props.active}),ref:this.numberRef},r.a.createElement("div",{className:"App-square-container"},r.a.createElement("span",{className:"App-square-top-left"},this.props.cell.noteTopLeft),r.a.createElement("span",{className:"App-square-bottom-left"},this.props.cell.noteBottomLeft),r.a.createElement("span",{className:"App-square-centre"},this.props.cell.value),r.a.createElement("span",{className:"App-square-top-right"},this.props.cell.noteTopRight),r.a.createElement("span",{className:"App-square-bottom-right"},this.props.cell.noteBottomRight)))}}]),n}(r.a.Component),M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={active:!1,invalid:!1},a.onClick=a.onClick.bind(Object(A.a)(a)),a.numberRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.numberRef.current.getBoundingClientRect();T.addLevel(e.y+e.height)}},{key:"onClick",value:function(){var e=this;this.props.cb(this.numberRef.current.getBoundingClientRect())?(this.setState({active:!0}),setTimeout((function(){e.setState({active:!1})}),500)):(this.setState({invalid:!0}),setTimeout((function(){e.setState({invalid:!1})}),500))}},{key:"render",value:function(){return r.a.createElement("td",{onClick:this.onClick,className:F()({active:this.state.active,invalid:this.state.invalid}),ref:this.numberRef},this.props.children)}}]),n}(r.a.Component);function Y(e){return r.a.createElement(M,{cb:function(t){return e.cb({value:e.value,position:t})}},e.children)}var Q=Object(E.a)(Array(9)).map((function(e){return Array(9).fill({predefined:!0,value:null})})),P=["App-example-main","App-example-top-right","App-example-top-left"],Z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={grid:null,complete:!1,selected:null,latestInput:null,resetTimer:null,exampleState:0},a.history=[],a.middleRef=r.a.createRef(),a.celebrationInterval=null,a.id=parseInt(a.props.id,10),a.onSelect=a.onSelect.bind(Object(A.a)(a)),a.onInput=a.onInput.bind(Object(A.a)(a)),a.undo=a.undo.bind(Object(A.a)(a)),a.onKeyPress=a.onKeyPress.bind(Object(A.a)(a)),a.onKeyDown=a.onKeyDown.bind(Object(A.a)(a)),a.nextExampleState=a.nextExampleState.bind(Object(A.a)(a)),a.onBackClick=a.onBackClick.bind(Object(A.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.middleRef.current.getBoundingClientRect();T.addLevel(t.y+t.height),v.table("unsolved").get(this.id,(function(t){t?(window.localStorage.setItem("currentId",t.id),e.setState({grid:t.grid})):e.props.history.push("/")})),document.addEventListener("keypress",this.onKeyPress),document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyPress),document.removeEventListener("keydown",this.onKeyDown),this.worker&&this.worker.removeEventListener("message",this.onGeneratedGame),this.celebrationInterval&&(clearInterval(this.celebrationInterval),this.celebrationInterval=null)}},{key:"onSelect",value:function(e){this.setState({selected:e})}},{key:"onKeyPress",value:function(e){"0123456789".includes(e.key)&&this.onInput({value:parseInt(e.key,10)}),e.preventDefault()}},{key:"onKeyDown",value:function(e){switch(e.key){case"ArrowRight":this.setState((function(e,t){return{selected:{row:e.selected?e.selected.row:0,column:Math.min((e.selected?e.selected.column:-1)+1,8)}}}));break;case"ArrowLeft":this.setState((function(e,t){return{selected:{row:e.selected?e.selected.row:0,column:Math.max((e.selected?e.selected.column:9)-1,0)}}}));break;case"ArrowDown":this.setState((function(e,t){return{selected:{row:Math.min((e.selected?e.selected.row:-1)+1,8),column:e.selected?e.selected.column:0}}}));break;case"ArrowUp":this.setState((function(e,t){return{selected:{row:Math.max((e.selected?e.selected.row:9)-1,0),column:e.selected?e.selected.column:0}}}));break;case" ":this.nextExampleState();break;case"Delete":this.onInput({value:null})}}},{key:"onInput",value:function(e){var t=this;if(!this.state.celebrationInterval){var n=e.value,a=e.position;return this.state.selected?!this.state.grid[this.state.selected.row][this.state.selected.column].predefined&&(n&&(this.setState({latestInput:{value:n,time:new Date}}),this.state.resetTimer&&clearTimeout(this.state.resetTimer),this.setState({resetTimer:setTimeout((function(){return t.setState({latestInput:null})}),2e3)})),this.update(n,this.state.selected,!0,a,this.state.selected.position),!0):void 0}}},{key:"update",value:function(e,t,n,a,r){var i=this,o=this.state.grid[t.row][t.column];if(!o.predefined){n&&this.history.push({position:t,value:o.value,noteTopLeft:o.noteTopLeft||null,noteTopRight:o.noteTopRight||null,noteBottomLeft:o.noteBottomLeft||null,noteBottomRight:o.noteBottomRight||null});var s=O(this.state.grid);switch(P[this.state.exampleState]){case"App-example-main":s[t.row][t.column].value=e;break;case"App-example-top-right":s[t.row][t.column].noteTopRight=e;break;case"App-example-top-left":s[t.row][t.column].noteTopLeft=e;break;case"App-example-bottom-right":s[t.row][t.column].noteBottomRight=e;break;case"App-example-bottom-left":s[t.row][t.column].noteBottomLeft=e}v.table("unsolved").update(this.id,{grid:s});var l=function(e){var t=L(e);if(!j(t))return!1;var n,a=Object(I.a)(t);try{for(a.s();!(n=a.n()).done;)for(var r=n.value,i=1;i<10;i++)if(!r.includes(i))return!1}catch(f){a.e(f)}finally{a.f()}for(var o=function(e){for(var n=t.map((function(t){return t[e]})),a=1;a<10;a++)if(!n.includes(a))return{v:!1}},s=0;s<9;s++){var l=o(s);if("object"===typeof l)return l.v}for(var c=0;c<3;c++)for(var u=0;u<3;u++){for(var d=[],h=0;h<3;h++)for(var p=0;p<3;p++)d.push(t[3*c+h][3*u+p]);for(var m=1;m<10;m++)if(!d.includes(m))return!1}return!0}(s);l?(window.localStorage.removeItem("currentId"),v.table("unsolved").delete(this.id),T.addDog(a,e,r,(function(){i.setState({grid:s,complete:l}),i.startCelebration()}))):this.setState({grid:s,complete:l})}}},{key:"undo",value:function(){if(this.history.length>0){var e=this.history.pop(),t=e.position,n=e.value;this.update(n,t,!1)}}},{key:"nextExampleState",value:function(){this.setState((function(e,t){return{exampleState:e.exampleState+1===P.length?0:e.exampleState+1}}))}},{key:"startCelebration",value:function(){var e=this;this.celebrationInterval||(this.celebrationInterval=setInterval((function(){e.setState({latestInput:{value:x(8)+1,time:new Date}})}),1e3))}},{key:"onBackClick",value:function(){window.history.back(),T.clear()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:F()("App-title-bar",{"App-complete-green":this.state.complete})},r.a.createElement("h1",{className:"App-navigation-button",onClick:this.onBackClick},"<"),r.a.createElement("h1",null,this.state.complete?"WOOF WOOF!":"DACHSHUN-DOKU"),r.a.createElement("h1",{className:"App-navigation-button"}," ")),r.a.createElement("div",{className:"App-body"},r.a.createElement("table",null,r.a.createElement("tbody",null,(this.state.grid||Q).map((function(t,n){return r.a.createElement("tr",{key:n},t.map((function(t,a){return r.a.createElement(K,{key:10*(n+1)+a,cell:t,row:n,column:a,cb:e.onSelect,active:!!e.state.selected&&(e.state.selected.row===n||e.state.selected.column===a)})})))}))))),r.a.createElement("div",{className:F()("App-title-bar","App-middle",{"App-complete-green":this.state.complete}),ref:this.middleRef},this.state.latestInput&&this.state.latestInput.value&&Object(E.a)(Array(this.state.latestInput.value)).map((function(t,n){return r.a.createElement(W,{key:e.state.latestInput.time.getTime()+n})}))),r.a.createElement("div",{className:"App-controls-container"},r.a.createElement("table",{className:"App-controls"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(Y,{value:1,cb:this.onInput},"1"),r.a.createElement(Y,{value:2,cb:this.onInput},"2"),r.a.createElement(Y,{value:3,cb:this.onInput},"3")),r.a.createElement("tr",null,r.a.createElement(Y,{value:4,cb:this.onInput},"4"),r.a.createElement(Y,{value:5,cb:this.onInput},"5"),r.a.createElement(Y,{value:6,cb:this.onInput},"6")),r.a.createElement("tr",null,r.a.createElement(Y,{value:7,cb:this.onInput},"7"),r.a.createElement(Y,{value:8,cb:this.onInput},"8"),r.a.createElement(Y,{value:9,cb:this.onInput},"9")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"App-example-square",onClick:this.nextExampleState},r.a.createElement("span",{className:P[this.state.exampleState]},"#"))),r.a.createElement(Y,{value:null,cb:this.onInput},"X"),r.a.createElement(M,{cb:this.undo},"<"))))))}}]),n}(r.a.Component),H=Object(m.h)(Z),J=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={deleted:!1},a.onClick=a.onClick.bind(Object(A.a)(a)),a}return Object(l.a)(n,[{key:"onClick",value:function(){var e=this;this.setState({deleted:!0}),setTimeout((function(){return e.props.onDelete(e.props.entry.id)}),300)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:F()({"App-unsolved-entry-deleted":this.state.deleted})},r.a.createElement("span",{className:"App-unsolved-delete",onClick:function(){return e.onClick()}},"X"),r.a.createElement("table",{onClick:function(){return e.props.history.push("/dachshun-doku/game/".concat(e.props.entry.id))}},r.a.createElement("tbody",null,this.props.entry.grid.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,n){return r.a.createElement(K,{key:10*(t+1)+n,cell:e,row:t,column:n,cb:function(){}})})))})))))}}]),n}(r.a.Component);J=Object(m.h)(J);var G=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={entries:null},a.delete=a.delete.bind(Object(A.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateUnsolved()}},{key:"updateUnsolved",value:function(){var e=this;v.table("unsolved").reverse().toArray().then((function(t){return e.setState({entries:t})}))}},{key:"delete",value:function(e){var t=this;parseInt(window.localStorage.getItem("currentId"),10)===e&&window.localStorage.removeItem("currentId"),v.table("unsolved").delete(e).then((function(e){return t.updateUnsolved()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-title-bar"},r.a.createElement("h1",{className:"App-navigation-button",onClick:function(){return window.history.back()}},"<"),r.a.createElement("h1",null,"UNSOLVED"),r.a.createElement("h1",{className:"App-navigation-button"}," ")),r.a.createElement("div",{className:"App-body App-body-unsolved"},this.state.entries&&this.state.entries.map((function(t){return r.a.createElement(J,{key:t.id,entry:t,onDelete:e.delete})}))))}}]),n}(r.a.Component),X=Object(m.h)(G),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=n(57),ee=n(56);function te(e){var t=Object(m.g)().id;return r.a.createElement(H,{key:t,id:t})}function ne(e){var t=Object(m.g)().difficulty;return r.a.createElement(H,{difficulty:t})}o.a.render(r.a.createElement(p.a,null,r.a.createElement(m.a,{render:function(e){var t=e.location.key;return r.a.createElement(_.a,{component:null},r.a.createElement(ee.a,{key:t,classNames:"fade",timeout:300},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/dachshun-doku/new/:difficulty"},r.a.createElement(ne,null)),r.a.createElement(m.a,{path:"/dachshun-doku/game/:id"},r.a.createElement(te,null)),r.a.createElement(m.a,{path:"/dachshun-doku/unsolved"},r.a.createElement(X,null)),r.a.createElement(m.a,{path:"/dachshun-doku/"},r.a.createElement(w,null)))))}})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dachshun-doku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dachshun-doku","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.04dee274.chunk.js.map