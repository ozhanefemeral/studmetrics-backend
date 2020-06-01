(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08cfef61"],{1239:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.student?n("div",[n("v-row",[n("v-col",{attrs:{md:"6",cols:"12"}},[n("v-card",{attrs:{raised:"",shaped:""}},[n("v-card-title",[n("v-row",{staticClass:"text-left"},[n("v-col",{attrs:{cols:"12"}},[n("v-icon",{staticClass:"mx-3"},[t._v("mdi-account")]),n("span",{staticClass:"font-weight-light"},[t._v("Name:")]),n("strong",[t._v(" "+t._s(t.student.firstName)+" "+t._s(t.student.middleName)+" "+t._s(t.student.lastName))])],1),n("v-col",{attrs:{cols:"12"}},[n("v-icon",{staticClass:"mx-3"},[t._v("mdi-medal")]),n("span",{staticClass:"font-weight-light"},[t._v("Ranking:")]),n("strong",[t._v(" "+t._s(t.ranking))])],1)],1)],1)],1)],1),n("v-col",{attrs:{md:"6",cols:"12"}},[n("v-card",{attrs:{raised:"",shaped:""}},[n("v-card-title",[n("v-row",{staticClass:"text-left"},[n("v-col",{attrs:{cols:"12"}},[n("v-icon",{staticClass:"mx-3"},[t._v("mdi-book")]),n("span",{staticClass:"font-weight-light"},[t._v("Homework Ratio:")]),n("strong",[t._v(" "+t._s(t.answeredCount)+" of "+t._s(t.assignments.length)+" ")])],1),n("v-col",{attrs:{cols:"12"}},[n("v-icon",{staticClass:"mx-3"},[t._v("mdi-calculator")]),n("span",{staticClass:"font-weight-light"},[t._v("Homework Average:")]),n("strong",{class:{"green--text":t.average>50,"red--text":t.average<30,"amber--text":t.average>30&&t.average<50}},[t._v(" "+t._s(t.average)+" % ")])],1)],1)],1)],1)],1)],1),n("v-col",{attrs:{cols:"4"}}),n("v-row",[n("v-col",{attrs:{md:"4",cols:"12"}},[n("v-card",[n("v-card-text",[n("v-select",{attrs:{label:"Enrolled",outlined:"","item-text":function(e){return t.selectEnrolledText(e)},"item-value":"index",items:t.enrolleds},model:{value:t.selectedEnroll,callback:function(e){t.selectedEnroll=e},expression:"selectedEnroll"}}),n("chartist",{staticClass:"ct-chart",attrs:{ratio:"ct-major-second",type:"Line",data:t.assignmentChartData,options:{low:0,high:100}}})],1)],1)],1),n("v-col",{attrs:{md:"4",cols:"12"}},[n("v-card",[n("v-card-text",[t.selectedEnroll?n("chartist",{staticClass:"ct-chart",attrs:{ratio:"ct-major-second",type:"Bar",data:t.enrolledChartData,options:{high:100,low:0}}}):t._e()],1)],1)],1)],1)],1):t._e()},a=[],s=(n("99af"),n("4160"),n("b0c0"),n("a9e3"),n("159b"),n("1723")),c={data:function(){return{enrolleds:[],assignments:[],assignmentChartData:{},enrolledChartData:{},selectedEnroll:Number,studentId:Number,student:Object,average:Number,ranking:Number,assignmentMarks:[],answeredCount:0}},created:function(){var t=this;this.studentId=this.$route.params.studentId,this.ranking=this.$route.params.ranking,s["a"].GetStudent(this.studentId).then((function(e){t.student=e,s["a"].GetEnrolleds(t.studentId).then((function(e){t.enrolleds=e,e.length>0&&(t.selectedEnroll=0)})),s["a"].GetStudentAssignments(t.studentId).then((function(e){t.assignments=e,e.forEach((function(e){e.isAnswered&&t.answeredCount++}));var n=s["a"].CalculateAssignmentsAverage(e);t.average=Math.round(n)}))}))},methods:{selectEnrolledText:function(t){var e="";return e=e.concat(t.Offer.Course.name," ",t.Offer.code," ",t.Offer.Teacher.firstName+" "+t.Offer.Teacher.lastName),e}},watch:{selectedEnroll:function(){var t=[],e=[[]];this.enrolleds[this.selectedEnroll].Assignments.forEach((function(n){e[0].push(n.mark),t.push(n.Homework.name)})),this.assignmentChartData={labels:t,series:e}},enrolleds:function(){for(var t=0;t<this.enrolleds.length;t++)this.$set(this.enrolleds[t],"index",t)}}},o=c,i=n("2877"),u=n("6544"),l=n.n(u),d=n("b0af"),v=n("99d9"),h=n("62ad"),f=n("132d"),p=n("0fd9"),m=n("b974"),g=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=g.exports;l()(g,{VCard:d["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:h["a"],VIcon:f["a"],VRow:p["a"],VSelect:m["a"]})},1723:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf");var r=n("1da1"),a=n("d4ec"),s=n("bee2"),c=n("bc3a"),o=n.n(c),i="/api/students/",u=function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,null,[{key:"CreateStudent",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat(i),{studentBody:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"DeleteStudent",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("".concat(i)+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"EnrollStudent",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],a="",s=0;s<e.length;s++)c=e[s],r.push(o.a.post("".concat(i).concat(c,"/enroll"),{offerIds:n}));return t.next=5,Promise.all(r).then((function(){return a=!0})).catch((function(){return a=!1}));case 5:return t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"GetEnrolleds",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i).concat(e,"/enrolleds"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"UpdateEnrolled",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.patch("".concat(i,"enrolleds/"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"GetStudents",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"GetStudent",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i).concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"GetStudentAssignments",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i).concat(e,"/assignments"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"CalculateAssignmentsAverage",value:function(t){for(var e=0,n=t.length,r=0;r<n;r++)e+=t[r].mark;return e/n}},{key:"GetEnrolled",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/enrolleds/?studentId=".concat(e,"&offerId=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=u},"615b":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i}));var r=n("b0af"),a=n("80d2"),s=Object(a["i"])("v-card__actions"),c=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),i=Object(a["i"])("v-card__title");r["a"]},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var r=n("5530"),a=(n("615b"),n("10d2")),s=n("297c"),c=n("1c87"),o=n("58df");e["a"]=Object(o["a"])(s["a"],c["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-08cfef61.20edacda.js.map