(this["webpackJsonpl-system-viewer"]=this["webpackJsonpl-system-viewer"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"axiom":"One or more characters used to define the starting point of the system.","iterations":"A number defining how many times to run the defined string through the replacement process.","symbol":"A single character identifing a replacement rule and a drawing rule.","replacementRule":"A string that replaces a given symbol when iterating.","drawRule":"What the drawing program does when it reads this character.","drawRuleParameterHeader":"How far to move or turn (in angles)"}')},,,function(e){e.exports=JSON.parse('{"sampleSystems":[{"displayName":"Hilbert Curve","symbolRules":[{"ruleIndex":0,"symbol":"a","replacementRule":"ebcdacadcbe","drawRule":{"type":"None"}},{"ruleIndex":1,"symbol":"b","replacementRule":"dacebcbecad","drawRule":{"type":"None"}},{"ruleIndex":2,"symbol":"c","replacementRule":"c","drawRule":{"type":"Move","value":10}},{"ruleIndex":3,"symbol":"d","replacementRule":"d","drawRule":{"type":"AnglePos","value":90}},{"ruleIndex":4,"symbol":"e","replacementRule":"e","drawRule":{"type":"AngleNeg","value":90}}],"axiom":"a","iterations":5},{"displayName":"Koch Curve","symbolRules":[{"ruleIndex":0,"symbol":"F","replacementRule":"FLFRFRFLF","drawRule":{"type":"Move","value":10}},{"ruleIndex":1,"symbol":"R","replacementRule":"R","drawRule":{"type":"AngleNeg","value":90}},{"ruleIndex":2,"symbol":"L","replacementRule":"L","drawRule":{"type":"AnglePos","value":90}}],"axiom":"F","iterations":4},{"displayName":"Dragon curve","symbolRules":[{"ruleIndex":0,"symbol":"F","replacementRule":"F","drawRule":{"type":"Move","value":10}},{"ruleIndex":1,"symbol":"X","replacementRule":"XRYFR","drawRule":{"type":"None"}},{"ruleIndex":2,"symbol":"Y","replacementRule":"LFXLY","drawRule":{"type":"None"}},{"ruleIndex":3,"symbol":"R","replacementRule":"R","drawRule":{"type":"AnglePos","value":90}},{"ruleIndex":4,"symbol":"L","replacementRule":"L","drawRule":{"type":"AngleNeg","value":90}}],"axiom":"FX","iterations":10}]}')},,,function(e,t,a){},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),s=a.n(r),i=(a(20),a(11)),u=a(9),o=a(8),c=a(2),m=a(3),d=a(5),p=a(4),h=a(1),y=a(6),b=(a(13),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={lastX:320,maxX:320,minX:320,lastY:320,maxY:320,minY:320,facing:-90},a.getPath=a.getPath.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"getAsRadians",value:function(e){return e*Math.PI/180}},{key:"findDrawRuleBySymbol",value:function(e,t){var a=e.find((function(e){return e.symbol===t}));return a?a.drawRule:""}},{key:"getPath",value:function(e){var t=this,a=new Path2D,n=this.state.facing,l=this.state.lastX,r=this.state.lastY,s=this.state.maxX,i=this.state.minX,u=this.state.maxY,o=this.state.minY;return a.moveTo(l,r),e.split("").forEach((function(e){var c=t.findDrawRuleBySymbol(t.props.ruleState.symbolRules,e);if("None"===c.type);else if("AnglePos"===c.type)n+=c.value;else if("AngleNeg"===c.type)n-=c.value;else if("Move"===c.type){var m=c.value,d=l+m*Math.cos(t.getAsRadians(n)),p=r+m*Math.sin(t.getAsRadians(n));a.lineTo(d,p),l=d,r=p,d>s?s=d:d<i&&(i=d),p>u?u=p:p<o&&(o=p)}})),this.setState({facing:n,lastX:l,lastY:r,maxX:s,minX:i,maxY:u,minY:o}),o--,{result:a,minX:i-=20,minY:o,width:s-i+20,height:u-o+20}}}]),t}(l.a.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={message:""},a.updateCanvas=a.updateCanvas.bind(Object(h.a)(a)),a.generateString=a.generateString.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this.generateString(),t=this.refs.canvas,a=t.getContext("2d");if(e){var n=new b(this.props).getPath(e);t.width=n.width,t.height=n.height,a.translate(-1*n.minX,-1*n.minY),a.stroke(n.result)}}},{key:"findReplacementRuleBySymbol",value:function(e,t){var a=e.find((function(e){return e.symbol===t}));return a?a.replacementRule:t}},{key:"generateString",value:function(){for(var e=this,t=this.props.ruleState.symbolRules,a=this.props.ruleState.axiom,n=parseInt(this.props.ruleState.iterations),l=a,r=0;r<n;r++){var s="";if(!(l.length<25e4))return this.setState({message:"That drawing may cause your browser to slow down, so it was canceled instead. Try using a smaller value for the iterations."}),a;l.split("").forEach((function(a){s+=e.findReplacementRuleBySymbol(t,a)})),l=s}return this.setState({ruleString:l,message:""}),l}},{key:"render",value:function(){var e=null===this.state.message?"":l.a.createElement("br",null);return l.a.createElement("div",{className:"View-pane",id:"viewPane"},this.state.message,e,l.a.createElement("canvas",{ref:"canvas"},"Your browser does not support the HTML5 canvas tag or you're looking at a search engine preview or something."))}}]),t}(l.a.Component),g=a(7),f=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];[{type:"Move",val:10},{type:"AnglePos",val:90},{type:"AngleNeg",val:90},{type:"None"}].forEach((function(t){e.push(l.a.createElement("option",{key:t,value:t.type},t.type))}));var t="None"===this.props.rule.drawRule.type?"":l.a.createElement("input",{type:"Text",className:"drawRuleValue",title:g.drawRuleParameterHeader,id:this.props.index,value:this.props.rule.drawRule.value,onChange:this.props.handleChange});return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"Text",className:"symbol",maxLength:"1",id:this.props.index,title:g.symbol,value:this.props.rule.symbol,onChange:this.props.handleChange})),l.a.createElement("td",null,l.a.createElement("input",{type:"Text",className:"replacementRule",title:g.replacementRule,id:this.props.index,value:this.props.rule.replacementRule,onChange:this.props.handleChange})),l.a.createElement("td",null,l.a.createElement("select",{className:"drawRuleType",id:this.props.index,title:g.drawRule,value:this.props.rule.drawRule.type,onChange:this.props.handleChange},e)),l.a.createElement("td",null,t))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleDrawSystem=a.handleDrawSystem.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"handleDrawSystem",value:function(){this.props.handleDrawButton()}},{key:"render",value:function(){var e=this,t=[];this.props.ruleState.symbolRules.forEach((function(a){t.push(l.a.createElement(f,{key:a.ruleIndex,index:a.ruleIndex,rule:a,handleChange:e.props.formHandler}))}));for(var a=[],n=1;n<=20;n++)a.push(l.a.createElement("option",{key:n,value:n},n));return l.a.createElement("div",null,l.a.createElement("table",{align:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{title:g.axiom},"Axiom"),l.a.createElement("td",{title:g.iterations},"Iterations")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"Text",className:"axiom",title:g.axiom,value:this.props.ruleState.axiom,onChange:this.props.formHandler})),l.a.createElement("td",null,l.a.createElement("select",{title:g.iterations,value:this.props.ruleState.iterations,className:"iterations",onChange:this.props.formHandler},a))),l.a.createElement("tr",null,l.a.createElement("td",{title:g.symbol},"Symbol"),l.a.createElement("td",{title:g.replacementRule},"Replacement Rule"),l.a.createElement("td",{title:g.drawRule},"Draw Rule"),l.a.createElement("td",{title:g.drawRuleParameterHeader},"Draw Rule Parameter")),t,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{onClick:this.props.addRuleHandler},"New Rule")),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.handleDrawSystem},"Draw System"))))))}}]),t}(n.Component),w=a(10),S=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];return w.sampleSystems.forEach((function(t){e.push(l.a.createElement("option",{key:t.displayName,value:t.displayName},t.displayName))})),l.a.createElement("div",null,l.a.createElement("select",{className:"ruleState",value:this.props.ruleState.displayName,onChange:this.props.loadSystem},e))}}]),t}(l.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Control-pane"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",{style:{textAlign:"center"}},"Welcome to Nielson's Lindenmayer System Viewer")),l.a.createElement("p",null,"A Lindenmayer System, or L-System, is a system for generating strings that can be interpreted as geometric shapes."),l.a.createElement("p",null,"Mouse over an input option to get an explanation of its purpose. For a greater understanding of L-Systems, see ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/L-system"},"Wikipedia")),l.a.createElement(R,{className:"System-rule-pane",handleDrawButton:this.props.handleDrawButton,ruleState:this.props.ruleState,formHandler:this.props.formHandler,addRuleHandler:this.props.addRuleHandler}),l.a.createElement(S,{ruleState:this.props.ruleState,loadSystem:this.props.loadSystem}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={ruleState:w.sampleSystems[0],ruleString:""},a.handleDrawButton=a.handleDrawButton.bind(Object(h.a)(a)),a.addRuleHandler=a.addRuleHandler.bind(Object(h.a)(a)),a.handleForm=a.handleForm.bind(Object(h.a)(a)),a.editSymbolRule=a.editSymbolRule.bind(Object(h.a)(a)),a.getSystemByDisplayName=a.getSystemByDisplayName.bind(Object(h.a)(a)),a.loadSystem=a.loadSystem.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(O,{handleDrawButton:this.handleDrawButton,ruleState:this.state.ruleState,formHandler:this.handleForm,addRuleHandler:this.addRuleHandler,loadSystem:this.loadSystem}),l.a.createElement(v,{ref:"viewPane",ruleString:this.state.ruleString,ruleState:this.state.ruleState}))}},{key:"handleDrawButton",value:function(){this.refs.viewPane.updateCanvas()}},{key:"findRuleByIndex",value:function(e,t){return e.find((function(e){return e.ruleIndex===t}))}},{key:"getSystemByDisplayName",value:function(e){return w.sampleSystems.find((function(t){return t.displayName===e.target.value}))}},{key:"handleForm",value:function(e){e.persist(),["symbol","replacementRule"].includes(e.target.className)?this.editSymbolRule(e):["drawRuleType","drawRuleValue"].includes(e.target.className)?this.editDrawRule(e):["axiom","iterations"].includes(e.target.className)&&this.setState((function(t){return{ruleState:Object(o.a)({},t.ruleState,Object(u.a)({},e.target.className,e.target.value))}}))}},{key:"loadSystem",value:function(e){var t=this.getSystemByDisplayName(e);this.setState({ruleState:t},this.handleDrawButton)}},{key:"editSymbolRule",value:function(e){var t=Object(i.a)(this.state.ruleState.symbolRules),a=parseInt(e.target.id,10),n=this.findRuleByIndex(t,a);n=Object(o.a)({},n,Object(u.a)({},e.target.className,e.target.value));var l=t;l.splice(a,1,n),this.setState((function(e){return{ruleState:Object(o.a)({},e.ruleState,{symbolRules:l})}}))}},{key:"editDrawRule",value:function(e){var t=Object(i.a)(this.state.ruleState.symbolRules),a=parseInt(e.target.id,10),n=this.findRuleByIndex(t,a),l=n.drawRule;if("drawRuleType"===e.target.className){var r="Move"===e.target.value?10:90;l={type:e.target.value,value:r}}else{var s=e.target.value?parseInt(e.target.value,10):0;l=Object(o.a)({},l,{value:s})}n=Object(o.a)({},n,{drawRule:l});var u=t;u.splice(a,1,n),this.setState((function(e){return{ruleState:Object(o.a)({},e.ruleState,{symbolRules:u})}}))}},{key:"addRuleHandler",value:function(e){var t=this.state.ruleState.symbolRules,a=this.getNewRule(t);t.push(a),this.setState((function(e){return{ruleState:Object(o.a)({},e.ruleState,{symbolRules:t})}}))}},{key:"getNewRule",value:function(e){return{ruleIndex:e.length,symbol:"",replacementRule:"",drawRule:{type:"None"}}}}]),t}(l.a.Component);var j=function(){return l.a.createElement(E,{className:"L-system-pane"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.3fa57227.chunk.js.map