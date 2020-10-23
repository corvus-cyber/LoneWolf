(this.webpackJsonplonewolf=this.webpackJsonplonewolf||[]).push([[0],{123:function(e,t,a){},170:function(e,t,a){e.exports=a(268)},175:function(e,t,a){},176:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},266:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(163),i=a.n(o),l=(a(175),a(26)),s=a(13),c=a(30),m=a(31),u=a(91),d=a(33),p=a(32),h=(a(176),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={menu:!1},n.toggleMenu=n.toggleMenu.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"toggleMenu",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){var e=this.state.menu?"show":"";return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light absolute-top"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("img",{className:"logo",src:!0,alt:"LoneWolf logo"})),r.a.createElement("button",{className:"navbar-toggler ml-auto",type:"button",onClick:this.toggleMenu},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse "+e},r.a.createElement("ul",{className:"navbar-nav ml-auto navFont"},r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(l.b,{to:"/dashboard",className:"/dashboard"===window.location.pathname||"/portfolio"===window.location.pathname?"nav-link active":"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(l.b,{to:"/stats",className:"/stats"===window.location.pathname||"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Enter Stats")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(l.b,{to:"/build",className:"/build"===window.location.pathname||"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Build Workout")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(l.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"Log Out")))))}}]),a}(n.Component));a(181);var y=function(){return r.a.createElement("div",{className:"row md-4 fixed-bottom"},r.a.createElement("div",{className:"col-md-12 text-muted"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{className:"copyrightLink",href:"https://www.linkedin.com/in/wyatt-a-hancock-885705166/"}," Wyatt A. Hancock"))))};a(182);var x=function(e){return r.a.createElement("main",{className:"wrapper container justify-content-center mt-5 ml-5"},e.children)};var g=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(y,null))},f=a(95);a(183);var b=function(e){return r.a.createElement("main",{className:"selection-container container"},e.children)},E=(a(123),a(38)),w=a.n(E),v=a(168);function k(e){return w()(".list-group-item").on("click",(function(e){e.preventDefault(),w()(this).addClass("active").siblings().removeClass("active")})),w()(".show-btn").on("click",(function(){console.log("hello"),w()("div.card-reveal[data-rel="+w()(this).data("rel")+"]").slideToggle("slow")})),w()(".card-reveal .close").on("click",(function(){w()("div.card-reveal[data-rel="+w()(this).data("rel")+"]").slideToggle("slow")})),r.a.createElement("div",{className:"mr-2 ml-2"},r.a.createElement("div",{className:"col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center"},r.a.createElement("div",{className:"card",style:{width:"18rem"},key:e.exerciseID},r.a.createElement("img",{src:""+e.gif,className:"card-img-top",alt:"gif of exercise"}),r.a.createElement("div",{className:"card-head"},r.a.createElement("h5",null,e.exercise),r.a.createElement("button",{type:"button",className:"btn btn-custom show-btn ","data-rel":e.exerciseID},r.a.createElement(v.a,null))),r.a.createElement("div",{className:"card-reveal","data-rel":e.exercise,style:{display:"none"}},r.a.createElement("button",{type:"button",className:"close","data-rel":e.exercise,"data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("p",null,e.description)))))}var N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={exercises:[]},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=function(){return console.log(f),f.map((function(e){return r.a.createElement("div",{className:"col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center"},r.a.createElement("div",{className:"btn-group-toggle","data-toggle":"buttons"},r.a.createElement("button",{key:e.nameID,type:"button",style:{backgroundColor:"#367e3b",borderColor:"#367e3b"},onClick:function(){a(e.name)},className:"btn btn-primary btn-lg btn-block"},e.name)))}))},a=function(t){console.log(t);var a=f.filter((function(e){return t===e.name}))[0];console.log("appropriate muscle",a),document.getElementById("muscleImage").src=""+a.image,e.setState({exercises:a.exercises})};return r.a.createElement(b,null,r.a.createElement("div",{className:"mt-5 pt-4 pb-4"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{className:"img-fluid",id:"muscleImage",src:"/assets/muscleGroups/None.png",alt:"muscle groups"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(t,null)),r.a.createElement("div",{className:"row justify-content-center"},this.state.exercises.map((function(e){return r.a.createElement(k,{key:e.exerciseID,gif:e.gif,exerciseID:e.exerciseID,exercise:e.exercise,description:e.description})}))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("li",{className:"nav-item nav-link text-center"},r.a.createElement(l.b,{to:"/exercises",className:"/exercises"===window.location.pathname||"/workouts"===window.location.pathname?"nav-link active":"exercises"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block",style:{backgroundColor:"#F4C430",borderColor:"#F4C430"}},"Build Workout"))))))}}]),a}(n.Component);var C=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null,r.a.createElement(N,null)),r.a.createElement(y,null))};var D=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(y,null))};var I=function(){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(l.b,{to:"/stats",className:"/stats"===window.location.pathname||"/stats"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("button",{type:"submit",className:"btn btn-primary calltoaction",style:{backgroundColor:"#F4C430",borderColor:"#F4C430"}},"Enter Stats"))))},j=(a(75),a(166)),L=(a(79),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart col-lg-4 col-md-4 col-sm-8 m-5"},r.a.createElement("p",null,"Muscle Balance History"),r.a.createElement(j.a,{data:[{angle:40,innerRadius:.7,label:"exercise 1"},{angle:40,innerRadius:.7,label:"exercise 2"},{angle:40,innerRadius:.7,label:"exercise 3"},{angle:40,innerRadius:.7,label:"exercise 4"},{angle:40,innerRadius:.7,label:"exercise 5"},{angle:40,innerRadius:.7,label:"exercise 6"},{angle:40,innerRadius:.7,label:"exercise 7"},{angle:40,innerRadius:.7,label:"exercise 8"},{angle:40,innerRadius:.7,label:"exercise 7"}],width:300,height:300,padAngle:.05}))}}]),a}(n.Component)),S=a(6),H=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart col-lg-4 col-md-4 col-sm-8 m-5"},r.a.createElement("p",null,"Weight and Lean Body Mass Chart"),r.a.createElement(S.XYPlot,{height:300,width:300,xDomain:[0,30],yDomain:[70,300]},r.a.createElement(S.VerticalGridLines,null),r.a.createElement(S.HorizontalGridLines,null),r.a.createElement(S.XAxis,{title:"dates"}),r.a.createElement(S.YAxis,{title:"lbs"}),r.a.createElement(S.LineSeries,{data:[{x:0,y:200,label:"Psyduck"},{x:7,y:190},{x:14,y:180},{x:21,y:186},{x:28,y:180}],stroke:"red"}),r.a.createElement(S.LineSeries,{data:[{x:0,y:161},{x:7,y:162},{x:14,y:166},{x:21,y:168},{x:28,y:170}]})))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart col-md-8 col-sm-8 m-5"},r.a.createElement("p",null,"Cumulative Expercise Reps Chart (Week Total)"),r.a.createElement(S.XYPlot,{height:300,width:700,xDomain:[0,30],yDomain:[0,20],colorType:"category",colorDomain:[0,1,2,3,4,5,6,7],colorRange:["red","blue","#03fce7","green","orange","purple","black","pink"]},r.a.createElement(S.VerticalGridLines,null),r.a.createElement(S.HorizontalGridLines,null),r.a.createElement(S.LineSeries,{data:[{x:0,y:1},{x:7,y:1},{x:14,y:2},{x:21,y:2},{x:28,y:3}],color:0}),r.a.createElement(S.LineSeries,{data:[{x:0,y:2},{x:7,y:2},{x:14,y:3},{x:21,y:3},{x:28,y:4}],color:1}),r.a.createElement(S.LineSeries,{data:[{x:0,y:2},{x:7,y:3},{x:14,y:4},{x:21,y:5},{x:28,y:6}],color:2}),r.a.createElement(S.LineSeries,{data:[{x:0,y:5},{x:7,y:6},{x:14,y:7},{x:21,y:8},{x:28,y:9}],color:3}),r.a.createElement(S.LineSeries,{data:[{x:0,y:9},{x:7,y:10},{x:14,y:11},{x:21,y:12},{x:28,y:13}],color:4}),r.a.createElement(S.LineSeries,{data:[{x:0,y:8},{x:7,y:5},{x:14,y:8},{x:21,y:8},{x:28,y:9}],color:5}),r.a.createElement(S.LineSeries,{data:[{x:0,y:8},{x:7,y:5},{x:14,y:10},{x:21,y:12},{x:28,y:13}],color:6}),r.a.createElement(S.LineSeries,{data:[{x:0,y:10},{x:7,y:5},{x:14,y:19},{x:21,y:12},{x:28,y:16}],color:7}),r.a.createElement(S.XAxis,{title:"dates"}),r.a.createElement(S.YAxis,{title:"reps"})))}}]),a}(n.Component),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart col-md-8 col-sm-8 m-5"},r.a.createElement("p",null,"Cumulative Exercise Time Chart (Week Total)"),r.a.createElement(S.XYPlot,{height:300,width:700,xDomain:[0,30],yDomain:[0,20],colorType:"category",colorDomain:[0,1,2,3,4,5,6,7,8],colorRange:["red","blue","#03fce7","green","orange","purple","black","pink","#8af542"]},r.a.createElement(S.VerticalGridLines,null),r.a.createElement(S.HorizontalGridLines,null),r.a.createElement(S.LineSeries,{data:[{x:0,y:1},{x:7,y:1},{x:14,y:2},{x:21,y:2},{x:28,y:3}],color:0}),r.a.createElement(S.LineSeries,{data:[{x:0,y:2},{x:7,y:2},{x:14,y:3},{x:21,y:3},{x:28,y:4}],color:1}),r.a.createElement(S.LineSeries,{data:[{x:0,y:2},{x:7,y:3},{x:14,y:4},{x:21,y:5},{x:28,y:6}],color:2}),r.a.createElement(S.LineSeries,{data:[{x:0,y:5},{x:7,y:6},{x:14,y:7},{x:21,y:8},{x:28,y:9}],color:3}),r.a.createElement(S.LineSeries,{data:[{x:0,y:9},{x:7,y:10},{x:14,y:11},{x:21,y:12},{x:28,y:13}],color:4}),r.a.createElement(S.LineSeries,{data:[{x:0,y:8},{x:7,y:5},{x:14,y:8},{x:21,y:8},{x:28,y:9}],color:5}),r.a.createElement(S.LineSeries,{data:[{x:0,y:8},{x:7,y:5},{x:14,y:10},{x:21,y:12},{x:28,y:13}],color:6}),r.a.createElement(S.LineSeries,{data:[{x:0,y:10},{x:7,y:5},{x:14,y:19},{x:21,y:12},{x:28,y:16}],color:7}),r.a.createElement(S.LineSeries,{data:[{x:0,y:20},{x:7,y:16},{x:14,y:5},{x:21,y:12},{x:28,y:16}],color:8}),r.a.createElement(S.XAxis,{title:"dates"}),r.a.createElement(S.YAxis,{title:"mins"})))}}]),a}(n.Component);var A=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null,r.a.createElement(I,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(L,null),r.a.createElement(H,null)),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(O,null)),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(B,null)))),r.a.createElement(y,null))},P=a(94),G=a(119),M=a(167),R=a(165),W=a.n(R),F=function(e){return W.a.post("/api/stats",e)};var T=function(){var e=Object(n.useState)({weight:"",leanBodyMass:""}),t=Object(M.a)(e,2),a=t[0],o=t[1];function i(e){var t=e.target,n=t.name,r=t.value;o(Object(G.a)(Object(G.a)({},a),{},Object(P.a)({},n,r)))}return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null,r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{for:"inputWeight",className:"sr-only"},"Weight"),r.a.createElement("input",{onChange:i,name:"weight",value:a.weight,className:"form-control",id:"weight",placeholder:"Weight"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Record")),r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{for:"inputLeanBodyMass",className:"sr-only"},"Lean Body Mass"),r.a.createElement("input",{onChange:i,name:"leanBodyMass",value:a.leanBodyMass,className:"form-control",id:"leanBodyMass",placeholder:"Lean Body Mass"})),r.a.createElement("button",{onClick:function(e){e.preventDefault(),F({weight:a.weight,leanBodyMass:a.leanBodyMass}).then((function(){return o({weight:"",leanBodyMass:""})})).then(console.log(a)).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-primary mb-2"},"Record"))),r.a.createElement(y,null))};a(266);var q=function(){return r.a.createElement(x,null,r.a.createElement("form",{className:"Login mt-5"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputUsername"},"Username"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"current-password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})))),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Check me out")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",style:{backgroundColor:"#F4C430",borderColor:"#F4C430"}},"Join"))),r.a.createElement("div",{className:"row justify-content-center mt-5"},r.a.createElement(l.b,{to:"/dashboard",className:"/dashboard"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("button",{type:"submit",className:"btn btn-primary calltoaction",style:{backgroundColor:"#F4C430",borderColor:"#F4C430"}},"New User"))))};var X=function(){return r.a.createElement("div",null,r.a.createElement(q,null))};var Y=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(s.a,{exact:!0,path:"/",component:X}),r.a.createElement(s.a,{exact:!0,path:"/dashboard",component:A}),r.a.createElement(s.a,{exact:!0,path:"/stats",component:T}),r.a.createElement(s.a,{exact:!0,path:"/build",component:C}),r.a.createElement(s.a,{exact:!0,path:"/exercises",component:g}),r.a.createElement(s.a,{exact:!0,path:"/workouts",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(267);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){},95:function(e){e.exports=JSON.parse('[{"name":"Chest","nameID":1,"image":"/assets/muscleGroups/Chest.png","exercises":[{"exercise":"Rotational Pushup","exerciseID":1,"gif":"test","description":"Assume a standard pushup positon, hands beneath your shoulders, either on your knees or feet. Lower yourself to the ground, being careful to not flare your elbows. As you come back up you will begin to twist to one side, rotating until one hand is barely touching the ground as it comes across your body."},{"exercise":"Decline Pushup","exerciseID":2,"gif":"test","description":"Assume a standard pushup position, the difference being that you will place either your knees or feet on a chair or bench. From there you will lower yourself to the ground, making sure to keep your elbows from flaring. After your chest touches the ground you will begin to push yourself back up, being sure to keep from looking up."},{"exercise":"Clapping Pushup","exerciseID":3,"gif":"test","description":"An explosive exercise, you will lower yourself to the ground, either on your knees or feet. As you come back up you will do so explosively, pushing through your hands into the ground. If done properly this should propel your torso high enough that your hands will temporarily leave the ground. While airborne clap your hands together and then bring them back to their original position."}]},{"name":"Back","nameID":2,"image":"/assets/muscleGroups/Back.png","exercises":[{"exercise":"Inverted Row","exerciseID":1,"gif":"test","description":"If you don\'t have access to a gym, you can set up for this by placing a broom handle or rod between two benches or chairs. Lie beneath the bar with your shoulders parallel to it, with your legs either bent or straight out. Grab the bar, and pull yourself up till your chest almost touches, squeezing your shoulder blades together. Lower yourself back down and repeat."},{"exercise":"Pull-up","exerciseID":2,"gif":"test","description":"Position yourself beneath a pull-up bar. Grab the bar with your hands facing away from you at slightly wider than shoulder width. Contract your shoulder blades together, and pull yourself up till your head comes up over the bar. Be sure to lower yourself all the way back down before beginning to come back up. If not strong enough yet you can still perform by anchoring a resistance band to the bar and looping it through your feet."},{"exercise":"Around the World Pull-up","exerciseID":3,"gif":"test","description":"An exercise that will target one side of the back at the time, you will assume the same position as the standard pull-up. As you come up though, you will not do so in a straight line. Instead you\'ll pull yourself up towards one of your hands, come over the top, and then lower yourself back down on the other side. Pause for a moment, then pull yourself up the opposite way this time."}]},{"name":"Shoulders","nameID":3,"image":"/assets/muscleGroups/Shoulders.png","exercises":[{"exercise":"Pike Press","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Handstand Pushup","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Alternating Bodyweight Side-Lateral Raise","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Biceps","nameID":4,"image":"/assets/muscleGroups/Biceps.png","exercises":[{"exercise":"Inverted Bodyweight Curls","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Chin-ups","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Commando Pull-ups","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Triceps","nameID":5,"image":"/assets/muscleGroups/Triceps.png","exercises":[{"exercise":"Sphinx Pushups","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Bodyweight Tricep Extension","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Chair Dips","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Quadriceps","nameID":6,"image":"/assets/muscleGroups/Quadriceps.png","exercises":[{"exercise":"Single Leg Box/Chair Squat","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"1 1/2 Prisoner Squats","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Jump Squats","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Hamstrings and Glutes","nameID":7,"image":"/assets/muscleGroups/Hamstrings.png","exercises":[{"exercise":"Single Leg Hip Bucks","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Alternating Heel Touch Squats","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Alternating Plyometric Sprinter Lunge","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Abdominals","nameID":8,"image":"/assets/muscleGroups/Abdominals.png","exercises":[{"exercise":"Alternating Seated Ab Circles","exerciseID":1,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Frog Crunches","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Elevated Side Plank Lifts","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]},{"name":"Conditioning","nameID":9,"image":"/assets/muscleGroups/None.png","exercises":[{"exercise":"Mountain Climbers","exerciseID":1,"gif":"test","description":"Assume a pushup position, with your legs fully extended behind you. Bring one knee up to your chest, and then quickly replace it with the other, letting the first leg return to its original place. Continue alternating back and forth, being sure to not let your glutes and lower back rise."},{"exercise":"High Knees","exerciseID":2,"gif":"test","description":"Here is write out of how to perform exercise"},{"exercise":"Side Shuffle to Burpee","exerciseID":3,"gif":"test","description":"Here is write out of how to perform exercise"}]}]')}},[[170,1,2]]]);
//# sourceMappingURL=main.132d644e.chunk.js.map