webpackJsonp([6],{PtFU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a("3cXf"),i=a.n(n),r=a("lC5x"),c=a.n(r),l=a("J0Oq"),u=a.n(l),o=a("Yarq"),f=a.n(o),h=a("AA3o"),d=a.n(h),p=a("xSur"),v=a.n(p),y=a("UzKs"),g=a.n(y),_=a("Y7Ml"),k=a.n(_),m=a("4YfN"),b=a.n(m),w=a("VCXJ"),C=a("9ZwC"),x=a.n(C),S=a("9rMa"),A=a("6wm7"),z=a("Ryl/"),$=x()({computed:b()({},Object(S.b)("article",{classifies:function(t){return t.classifies},states:function(t){return t.states}})),watch:{page:function(){this.fetchArticles()},pageSize:function(){this.fetchArticles()}}})(s=function(t){function e(){var t,a,s,n;d()(this,e);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return a=s=g()(this,(t=e.__proto__||f()(e)).call.apply(t,[this].concat(r))),s.articles=[],s.total=0,s.classify="",s.state="",s.keyword="",s.loading=!1,s.tableHead=["标题","分类","作者","状态","创建日期","更新日期","操作"],s.tableKeys=["title","classify","author","state","createdDate","updatedDate"],s.page=1,s.pageSize=20,s.userId="",n=a,g()(s,n)}return k()(e,t),v()(e,[{key:"created",value:function(){var t=this;this.userId=JSON.parse(window.sessionStorage.getItem("userInfo")).id,this.$store.dispatch("article/getClassifies").then(function(e){return t.fetchArticles()})}},{key:"setClassify",value:function(t){this.classify=t}},{key:"setState",value:function(t){this.state=t}},{key:"handlePageChange",value:function(t){this.page=t}},{key:"handlePageSizeChange",value:function(t){this.pageSize=t}},{key:"search",value:function(){var t=u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.fetchArticles();case 3:this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"fetchArticles",value:function(){var t=u()(c.a.mark(function t(){var e,a,s=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$loading.start(),t.prev=1,e={classify:this.classify,state:this.state,keyword:this.keyword,page:this.page,pageSize:this.pageSize},t.next=5,z.a.fetchArticles(e,this.userId);case 5:a=t.sent,this.articles=a.items.map(function(t){return t.createdDate=Object(A.a)(t.createdDate),t.updatedDate=Object(A.a)(t.updatedDate),t.author=t.author.account,t.classify=JSON.parse(i()(s.classifies)).find(function(e){return e.value=t.classify}).title,t.state=JSON.parse(i()(s.states)).find(function(e){return e.value=t.state}).title,t}),this.total=a.total,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),this.$message.error(t.t0.message);case 13:return t.prev=13,this.$loading.close(),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,10,13,16]])}));return function(){return t.apply(this,arguments)}}()},{key:"deleteArticle",value:function(){var t=u()(c.a.mark(function t(e){var a=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$confirm("此操作将删除文章，是否继续？","提示",{type:"warning"}).then(u()(c.a.mark(function t(){var s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.a.deleteArticle(e,a.userId);case 3:s=t.sent,a.$message.success(s),a.fetchArticles(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a.$message.error(t.t0.message);case 11:case"end":return t.stop()}},t,a,[[0,8]])}))).catch(function(t){return a.$message.info("取消删除")});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"editArticle",value:function(t){this.$router.push("/article/"+t)}}]),e}(w.default))||s,J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ta-article-list"},[a("div",{staticClass:"ta-searcharea"},[a("div",{staticClass:"ta-searcharea__item"},[a("span",[t._v("分类:")]),t._v(" "),t._l([{title:"全部",value:""}].concat(t.classifies),function(e,s){return a("ta-button",{key:s,attrs:{type:e.value===t.classify?"primary":"text"},on:{click:function(a){t.setClassify(e.value)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})],2),t._v(" "),a("div",{staticClass:"ta-searcharea__item"},[a("span",[t._v("状态:")]),t._v(" "),t._l([{title:"全部",value:""}].concat(t.states),function(e,s){return a("ta-button",{key:s,attrs:{type:e.value===t.state?"primary":"text"},on:{click:function(a){t.setState(e.value)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})],2),t._v(" "),a("div",{staticClass:"ta-searcharea__item"},[a("span",[t._v("搜索:")]),t._v(" "),a("ta-input",{attrs:{placeholder:"标题,描述"},on:{enter:function(e){t.search()}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),a("ta-button",{attrs:{type:"primary",icon:"ios-search-strong",loading:t.loading},on:{click:function(e){t.search()}}},[t._v("\n        搜索\n      ")])],1)]),t._v(" "),a("div",{staticClass:"ta-content"},[a("ta-table",{attrs:{needIndex:!0,tableHead:t.tableHead,keys:t.tableKeys,tableBody:t.articles,index:(t.page-1)*t.pageSize}},t._l(t.articles,function(e,s){return a("div",{key:s,attrs:{slot:s},slot:s},[a("ta-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.editArticle(e._id)}}},[t._v("编辑")]),t._v(" "),a("ta-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.deleteArticle(e._id)}}},[t._v("删除")])],1)}))],1),t._v(" "),a("ta-pagination",{attrs:{total:t.total,page:t.page},on:{pageChange:function(e){t.handlePageChange(e)},pageSizeChange:function(e){t.handlePageSizeChange(e)}}})],1)},staticRenderFns:[]};var O=a("Z0/y")($,J,!1,function(t){a("QJ0h")},"data-v-8daf12e4",null);e.default=O.exports},QJ0h:function(t,e){}});
//# sourceMappingURL=article-list.f2130808901ce2f0ef2f.js.map