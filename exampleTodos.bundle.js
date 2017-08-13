webpackJsonp([3],{1095:function(t,e,n){e=t.exports=n(28)(),e.push([t.i,'.todo-scene {\n\tfont: 14px \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n\tfont-weight: 300;\n\n\t/*\n\t\tHack to remove background from Mobile Safari.\n\t\tCan\'t use it globally since it destroys checkboxes in Firefox\n\t*/\n}\n.todo-scene button {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n.todo-scene button, .todo-scene input[type="checkbox"] {\n\toutline: none;\n}\n.todo-scene .hidden {\n\tdisplay: none;\n}\n.todo-scene .todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todo-scene .todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todo-scene .todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todo-scene .todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todo-scene .todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n\tborder: 0;\n\tpadding-bottom: 0;\n}\n.todo-scene .new-todo, .todo-scene .edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n.todo-scene .new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n.todo-scene .main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n.todo-scene label[for=\'toggle-all\'] {\n\tdisplay: none;\n}\n.todo-scene .toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none;\n\n\t/* Mobile Safari */\n}\n.todo-scene .toggle-all:before {\n\tcontent: \'\\276F\';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n.todo-scene .toggle-all:checked:before {\n\tcolor: #737373;\n}\n.todo-scene .todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n.todo-scene .todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n.todo-scene .todo-list li:last-child {\n\tborder-bottom: none;\n}\n.todo-scene .todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n.todo-scene .todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n.todo-scene .todo-list li.editing .view {\n\tdisplay: none;\n}\n.todo-scene .todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\n\t/* auto, since non-WebKit browsers doesn\'t support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none;\n\n\t/* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n.todo-scene .todo-list li .toggle:after {\n\tcontent: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n}\n.todo-scene .todo-list li .toggle:checked:after {\n\tcontent: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n}\n.todo-scene .todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\t-webkit-transition: color 0.4s;\n\ttransition: color 0.4s;\n}\n.todo-scene .todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n.todo-scene .todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\t-webkit-transition: color 0.2s ease-out;\n\ttransition: color 0.2s ease-out;\n}\n.todo-scene .todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n.todo-scene .todo-list li .destroy:after {\n\tcontent: \'\\D7\';\n}\n.todo-scene .todo-list li:hover .destroy {\n\tdisplay: block;\n}\n.todo-scene .todo-list li .edit {\n\tdisplay: none;\n}\n.todo-scene .todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n.todo-scene .footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n.todo-scene .footer:before {\n\tcontent: \'\';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t\t            0 8px 0 -3px #f6f6f6,\n\t\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t\t            0 16px 0 -6px #f6f6f6,\n\t\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todo-scene .todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n.todo-scene .todo-count strong {\n\tfont-weight: 300;\n}\n.todo-scene .filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n.todo-scene .filters li {\n\tdisplay: inline;\n}\n.todo-scene .filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n.todo-scene .filters li a.selected, .todo-scene .filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n.todo-scene .filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n.todo-scene .clear-completed, .todo-scene html .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n\tposition: relative;\n}\n.todo-scene .clear-completed:hover {\n\ttext-decoration: underline;\n}\n.todo-scene .info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n.todo-scene .info p {\n\tline-height: 1;\n}\n.todo-scene .info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n.todo-scene .info a:hover {\n\ttext-decoration: underline;\n}\n\t@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.todo-scene .toggle-all, .todo-scene .todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\t.todo-scene .todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\t.todo-scene .toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\tappearance: none;\n\t}\n\t}\n\t@media (max-width: 430px) {\n\t.todo-scene .footer {\n\t\theight: 50px;\n\t}\n\t.todo-scene .filters {\n\t\tbottom: 10px;\n\t}\n\t}\n',""])},1181:function(t,e,n){var o=n(1095);"string"==typeof o&&(o=[[t.i,o,""]]);n(29)(o,{});o.locals&&(t.exports=o.locals)},1197:function(t,e,n){t.exports=n(257)},257:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=(n.n(o),n(410));e.default=n.i(o.createScene)({name:"todos",component:i.a})},266:function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=n(7),a=(n.n(r),n(18)),l=n.n(a),c=n(435),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a=n.i(r.kea)({path:function(){return["scenes","todos","index"]},constants:function(){return["SHOW_ALL","SHOW_ACTIVE","SHOW_COMPLETED"]},actions:function(t){t.constants;return{showAll:!0,showActive:!0,showCompleted:!0,addTodo:function(t){return{value:t}},removeTodo:function(t){return{id:t}},completeTodo:function(t){return{id:t}},unCompleteTodo:function(t){return{id:t}},renameTodo:function(t,e){return{id:t,value:e}},setEditing:function(t){return{id:t}},updateEditValue:function(t,e){return{id:t,value:e}},clearEditing:function(t){return{id:t}},toggleAll:function(t){return{completed:t}},clearCompleted:!0}},reducers:function(t){var e,r,a=t.actions,s=t.constants;return{visibilityFilter:[s.SHOW_ALL,l.a.string,(e={},i(e,a.showAll,function(){return s.SHOW_ALL}),i(e,a.showActive,function(){return s.SHOW_ACTIVE}),i(e,a.showCompleted,function(){return s.SHOW_COMPLETED}),e)],todos:[{},l.a.object,{persist:!0},(r={},i(r,a.addTodo,function(t,e){var o=e.value,r=n.i(c.a)();return d({},t,i({},r,{id:r,createdAt:(new Date).getTime(),value:o,completed:!1,editing:!1}))}),i(r,a.removeTodo,function(t,e){var n=e.id,i=(t[n],o(t,[n]));return i}),i(r,a.completeTodo,function(t,e){var n=e.id;return d({},t,i({},n,d({},t[n],{completed:!0})))}),i(r,a.unCompleteTodo,function(t,e){var n=e.id;return d({},t,i({},n,d({},t[n],{completed:!1})))}),i(r,a.renameTodo,function(t,e){var n=e.id,o=e.value;return d({},t,i({},n,d({},t[n],{value:o})))}),i(r,a.toggleAll,function(t,e){var n=e.completed,o={};return Object.values(t).forEach(function(t){o[t.id]=d({},t,{completed:n})}),o}),i(r,a.clearCompleted,function(t,e){var n={};return Object.values(t).forEach(function(t){t.completed||(n[t.id]=t)}),n}),i(r,a.setEditing,function(t,e){var n=e.id;return d({},t,i({},n,d({},t[n],{editing:!0,editValue:t[n].value})))}),i(r,a.updateEditValue,function(t,e){var n=e.id,o=e.value;return d({},t,i({},n,d({},t[n],{editValue:o})))}),i(r,a.clearEditing,function(t,e){var n=e.id;return d({},t,i({},n,d({},t[n],{editing:!1,editValue:null})))}),r)]}},selectors:function(t){var e=t.constants,n=t.selectors;return{todoCount:[function(){return[n.todos]},function(t){return Object.keys(t).length},l.a.number],activeTodoCount:[function(){return[n.todos]},function(t){return Object.values(t).filter(function(t){return!t.completed}).length},l.a.number],completedTodoCount:[function(){return[n.todos]},function(t){return Object.values(t).filter(function(t){return t.completed}).length},l.a.number],visibleTodos:[function(){return[n.visibilityFilter,n.todos]},function(t,n){return t===e.SHOW_ALL?Object.values(n):t===e.SHOW_ACTIVE?Object.values(n).filter(function(t){return!t.completed}):t===e.SHOW_COMPLETED?Object.values(n).filter(function(t){return t.completed}):void 0},l.a.array]}}})},410:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(1181),l=(n.n(a),n(1)),c=n.n(l),d=n(7),s=(n.n(d),n(411)),u=n(266);n.d(e,"a",function(){return w});var p,f,g=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),m=u.a.constants,h=m.SHOW_ALL,b=m.SHOW_ACTIVE,x=m.SHOW_COMPLETED,v=13,w=(p=n.i(d.connect)({actions:[u.a,["showAll","showActive","showCompleted","addTodo","toggleAll","clearCompleted"]],props:[u.a,["visibilityFilter","visibleTodos","todoCount","activeTodoCount","completedTodoCount"]]}),p(f=function(t){function e(){var t,n,r,a;o(this,e);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.handleToggleAll=function(t){var e=r.props.actions.toggleAll;e(t.target.checked)},r.handleKeyDown=function(t){var e=r.props.actions.addTodo;if(t.keyCode===v){var n=r.refs.newTodo;n.value.trim()&&(e(n.value.trim()),n.value="")}},a=n,i(r,a)}return r(e,t),g(e,[{key:"render",value:function(){var t=this.props,e=t.visibilityFilter,n=t.visibleTodos,o=t.todoCount,i=t.activeTodoCount,r=t.completedTodoCount,a=this.actions,l=a.showAll,d=a.showActive,u=a.showCompleted,p=a.clearCompleted;return c.a.createElement("div",{className:"todo-scene"},c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("input",{ref:"newTodo",className:"new-todo",placeholder:"What needs to be done?",onKeyDown:this.handleKeyDown})),o>0?c.a.createElement("section",{className:"main"},c.a.createElement("input",{className:"toggle-all",type:"checkbox",onChange:this.handleToggleAll,checked:0===i}),c.a.createElement("ul",{className:"todo-list"},n.map(function(t){return c.a.createElement(s.a,{key:t.id,todo:t})}))):null,o>0?c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},i," ",1===i?"todo":"todos"," left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:l,className:e===h?"selected":""},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:d,className:e===b?"selected":""},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:u,className:e===x?"selected":""},"Completed"))),r>0?c.a.createElement("button",{className:"clear-completed",onClick:p},"Clear completed"):null):null),c.a.createElement("footer",{className:"info"},c.a.createElement("p",null,"Double-click to edit a todo"),c.a.createElement("p",null,"Created by ",c.a.createElement("a",{href:"https://github.com/mariusandra"},"mariusandra"))))}}]),e}(l.Component))||f)},411:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(1),l=n.n(a),c=n(18),d=n.n(c),s=n(7),u=(n.n(s),n(266));n.d(e,"a",function(){return v});var p,f,g,m,h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),b=27,x=13,v=(p=n.i(s.connect)({actions:[u.a,["renameTodo","removeTodo","completeTodo","unCompleteTodo","setEditing","updateEditValue","clearEditing"]]}),p((m=g=function(t){function e(){var t,n,r,a;o(this,e);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.updateEditValue=function(t){var e=r.props.todo,n=r.actions.updateEditValue;n(e.id,t.target.value)},r.onKeyDown=function(t){var e=r.props.todo,n=r.actions.clearEditing;t.keyCode===b?n(e.id):t.keyCode===x&&r.saveTodo()},r.saveTodo=function(){var t=r.props.todo,e=r.actions,n=e.renameTodo,o=e.clearEditing,i=e.removeTodo,a=r.refs.editField.value;a.trim()?(n(t.id,a.trim()),o(t.id)):i(t.id)},a=n,i(r,a)}return r(e,t),h(e,[{key:"componentDidUpdate",value:function(t){if(this.props.todo.editing&&!t.todo.editing){var e=this.refs.editField;e.focus(),e.setSelectionRange(e.value.length,e.value.length)}}},{key:"render",value:function(){var t=this.props.todo,e=this.actions,n=e.unCompleteTodo,o=e.completeTodo,i=e.setEditing,r=e.removeTodo;return t.editing?l.a.createElement("li",{className:"editing"},l.a.createElement("input",{className:"edit",type:"text",ref:"editField",value:t.editValue,onKeyDown:this.onKeyDown,onChange:this.updateEditValue,onBlur:this.saveTodo})):l.a.createElement("li",{className:t.completed?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{className:"toggle",checked:t.completed,type:"checkbox",onChange:function(){return t.completed?n(t.id):o(t.id)}}),l.a.createElement("label",{onTouchEnd:function(){return i(t.id)},onDoubleClick:function(){return i(t.id)}},t.value),l.a.createElement("button",{className:"destroy",onClick:function(){return r(t.id)}})))}}]),e}(a.Component),g.propTypes={todo:d.a.object.isRequired},f=m))||f)},435:function(t,e,n){"use strict";e.a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}}},[1197]);