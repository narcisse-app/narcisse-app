"use strict";(self.webpackChunknarcisse_app=self.webpackChunknarcisse_app||[]).push([[13],{8665:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(3366),l=a(7294),n=a(6010),s=a(7019),c=a(9960);const i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var b=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];const v=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,E),m=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(7294),l=a(8665),n=a(7774),s=a(3616);const c="tag_7kA+";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}const m=function(e){var t=e.tags,a=(0,s.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))};const o=function(e){var t=e.tags,a=e.sidebar,n=(0,s.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(m,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7294),l=a(6010),n=a(9960);const s="tag_WK-t",c="tagRegular_LXbV",i="tagWithCount_S5Zl";const m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[c]=!o,t[i]=o,t))},m,o&&r.createElement("span",null,o))}}}]);