"use strict";(self["webpackChunkhm_vant_h5_lesson"]=self["webpackChunkhm_vant_h5_lesson"]||[]).push([[684],{9684:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var s=function(){var e=this,n=e._self._c;return n("div",{staticClass:"login-page"},[n("van-nav-bar",{attrs:{title:"面经注册"}}),n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^\w{6,16}$/,message:"用户名必须6-16位"}]},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),n("van-field",{attrs:{type:"password",name:"password",rules:[{required:!0,message:"请填写密码"},{pattern:/^\w{6,16}$/,message:"密码必须6-16位"}],label:"密码",placeholder:"密码"},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{type:"primary",block:""}},[e._v("注册")])],1)],1),n("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v("已有账号，去登录")])],1)},r=[],a=(t(7658),t(9362)),u={name:"login-page",data(){return{username:"",password:""}},methods:{async onSubmit(e){await(0,a.z2)(e),this.$toast.success("注册成功"),this.$router.push("/login")}}},o=u,i=t(1001),l=(0,i.Z)(o,s,r,!1,null,"6ca2c0e6",null),c=l.exports},9362:function(e,n,t){t.d(n,{bG:function(){return u},x4:function(){return a},z2:function(){return r}});var s=t(6088);function r(e){return s.Z.post("/user/register",e)}function a(e){return s.Z.post("/user/login",e)}function u(){return s.Z.get("/user/currentUser")}}}]);
//# sourceMappingURL=684.c41f37c7.js.map