(this["webpackJsonpfood-recipe-app"]=this["webpackJsonpfood-recipe-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.23396fc7.png"},16:function(e,t,a){e.exports=a(40)},2:function(e,t,a){e.exports={recipe:"recipe_recipe__BdaUe",recipetitle:"recipe_recipetitle__3JYVS",recipeimage:"recipe_recipeimage__1tVdy",recipeurl:"recipe_recipeurl__3C8TZ"}},21:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),i=a.n(r),l=(a(21),a(3)),o=a(14),s=a.n(o),m=a(2),p=a.n(m),u=function(e){var t=e.title,a=e.url,c=e.image,r=e.ingredients;return n.a.createElement("div",{className:p.a.recipe},n.a.createElement("div",{className:p.a.recipeimage},n.a.createElement("img",{src:c,alt:""})),n.a.createElement("div",{className:p.a.recipetitle},n.a.createElement("h2",null,t)),n.a.createElement("ol",null,r.map((function(e,t){return n.a.createElement("li",{key:t},e.text)}))),n.a.createElement("div",{className:p.a.recipeurl},n.a.createElement("a",{href:a,target:"blank"},"~Watch-Now")))},d=a(15),f=a.n(d),h=(a(39),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),m=o[0],p=o[1],d=Object(c.useState)("chicken"),h=Object(l.a)(d,2),g=h[0],E=h[1];Object(c.useEffect)((function(){b()}),[g]);var b=function(){s.a.get("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("08fb5e0a","&app_key=").concat("dd34b3556552ba02f5128421d6d8d34c")).then((function(e){console.log(e.data.hits),r(e.data.hits)})).catch((function(e){console.log(e)}))};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"heading"},n.a.createElement("img",{className:"logo",src:f.a,alt:""})),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(m),p("")},className:"search-form"},n.a.createElement("input",{className:"search-bar",type:"text",placeholder:"search Recipes...",value:m,onChange:function(e){p(e.target.value)}}),n.a.createElement("button",{className:"search-button",type:"submit"},"Search")),n.a.createElement("div",{className:"recipes"},a.map((function(e){return n.a.createElement(u,{key:e.recipe.label,image:e.recipe.image,title:e.recipe.label,ingredients:e.recipe.ingredients,url:e.recipe.url})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.29023e51.chunk.js.map