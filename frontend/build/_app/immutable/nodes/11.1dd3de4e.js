import{S as ze,i as Ke,s as Qe,y as D,a as y,k as J,q as M,e as Fe,z as I,c as E,l as j,m as z,r as U,h as f,n as X,A as T,b as g,G as W,g as d,v as ve,d as w,f as ge,B as N,J as F,C as Xe,I as Ze,w as te,ac as re,ad as ne}from"../chunks/index.607a4587.js";import{G as be}from"../chunks/GreyText.545daa15.js";import{B as de,e as pe,s as We}from"../chunks/strings.82d8c965.js";import{D as nt}from"../chunks/DangerButton.30216a4e.js";import{I as ie}from"../chunks/InputSm.96943004.js";import{I as it}from"../chunks/Input.88fb81a1.js";import{T as he,n as we}from"../chunks/tasks.746ddd9e.js";import{I as ke,S as st}from"../chunks/Service.e3ed56e7.js";import{S as Ye}from"../chunks/Select.43d10eda.js";function lt(i){let t,n,e,s,l;return t=new ke({props:{icon:"material-symbols:delete-outline-sharp",color:"white"}}),{c(){D(t.$$.fragment),n=y(),e=J("span"),s=M("Delete"),this.h()},l(u){I(t.$$.fragment,u),n=E(u),e=j(u,"SPAN",{class:!0});var o=z(e);s=U(o,"Delete"),o.forEach(f),this.h()},h(){X(e,"class","ml-2")},m(u,o){T(t,u,o),g(u,n,o),g(u,e,o),W(e,s),l=!0},p:F,i(u){l||(d(t.$$.fragment,u),l=!0)},o(u){w(t.$$.fragment,u),l=!1},d(u){N(t,u),u&&f(n),u&&f(e)}}}function He(i){let t,n;return t=new he({props:{output:i[2]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s[0]&4&&(l.output=e[2]),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function at(i){let t,n,e,s,l;return t=new ke({props:{icon:"material-symbols:deployed-code",color:"white"}}),{c(){D(t.$$.fragment),n=y(),e=J("span"),s=M("Trigger Deploy"),this.h()},l(u){I(t.$$.fragment,u),n=E(u),e=j(u,"SPAN",{class:!0});var o=z(e);s=U(o,"Trigger Deploy"),o.forEach(f),this.h()},h(){X(e,"class","ml-2")},m(u,o){T(t,u,o),g(u,n,o),g(u,e,o),W(e,s),l=!0},p:F,i(u){l||(d(t.$$.fragment,u),l=!0)},o(u){w(t.$$.fragment,u),l=!1},d(u){N(t,u),u&&f(n),u&&f(e)}}}function Je(i){let t,n;return t=new he({props:{output:i[4]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s[0]&16&&(l.output=e[4]),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function ut(i){let t,n,e,s,l;return t=new ke({props:{icon:"ph:read-cv-logo-bold",color:"white"}}),{c(){D(t.$$.fragment),n=y(),e=J("span"),s=M("Get Service Logs"),this.h()},l(u){I(t.$$.fragment,u),n=E(u),e=j(u,"SPAN",{class:!0});var o=z(e);s=U(o,"Get Service Logs"),o.forEach(f),this.h()},h(){X(e,"class","ml-2")},m(u,o){T(t,u,o),g(u,n,o),g(u,e,o),W(e,s),l=!0},p:F,i(u){l||(d(t.$$.fragment,u),l=!0)},o(u){w(t.$$.fragment,u),l=!1},d(u){N(t,u),u&&f(n),u&&f(e)}}}function je(i){let t,n;return t=new he({props:{output:i[6]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s[0]&64&&(l.output=e[6]),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function ot(i){let t,n,e={ctx:i,current:null,token:null,hasCatch:!1,pending:_t,then:mt,catch:ct,value:31,blocks:[,,,]};return Xe(i[12](),e),{c(){t=J("div"),e.block.c(),this.h()},l(s){t=j(s,"DIV",{class:!0});var l=z(t);e.block.l(l),l.forEach(f),this.h()},h(){X(t,"class","edit-service-yaml-container")},m(s,l){g(s,t,l),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,n=!0},p(s,l){i=s,Ze(e,i,l)},i(s){n||(d(e.block),n=!0)},o(s){for(let l=0;l<3;l+=1){const u=e.blocks[l];w(u)}n=!1},d(s){s&&f(t),e.block.d(),e.token=null,e=null}}}function ft(i){var C,h;let t,n,e,s,l,u,o,R,b,S,P,B,p;l=new be({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),o=new ie({props:{id:"name",label:"File Name",placeholder:"zfsmongo.service",value:((h=(C=i[0])==null?void 0:C.RawService)==null?void 0:h.FileName)||"",disabled:!0,minlength:1}});function k(m){i[18](m)}let A={id:"body",label:"Body",placeholder:"[Unit]\\nDescription=Arcadia\\n\\n[Service]\\nExecStart=/usr/bin/arcadia\\nWorkingDirectory=/root/arcadia\\n\\n[Install]\\nWantedBy=ibl-maint",minlength:3};return i[0].RawService.Body!==void 0&&(A.value=i[0].RawService.Body),b=new it({props:A}),te.push(()=>re(b,"value",k)),B=new de({props:{onclick:i[19],$$slots:{default:[dt]},$$scope:{ctx:i}}}),{c(){t=J("div"),n=J("h2"),e=M("Raw Service"),s=y(),D(l.$$.fragment),u=y(),D(o.$$.fragment),R=y(),D(b.$$.fragment),P=y(),D(B.$$.fragment),this.h()},l(m){t=j(m,"DIV",{class:!0});var $=z(t);n=j($,"H2",{class:!0});var L=z(n);e=U(L,"Raw Service"),L.forEach(f),s=E($),I(l.$$.fragment,$),u=E($),I(o.$$.fragment,$),R=E($),I(b.$$.fragment,$),P=E($),I(B.$$.fragment,$),$.forEach(f),this.h()},h(){X(n,"class","text-xl font-semibold mt-4"),X(t,"class","edit-service-raw-container")},m(m,$){g(m,t,$),W(t,n),W(n,e),W(t,s),T(l,t,null),W(t,u),T(o,t,null),W(t,R),T(b,t,null),W(t,P),T(B,t,null),p=!0},p(m,$){var v,G;const L={};$[1]&2&&(L.$$scope={dirty:$,ctx:m}),l.$set(L);const q={};$[0]&1&&(q.value=((G=(v=m[0])==null?void 0:v.RawService)==null?void 0:G.FileName)||""),o.$set(q);const H={};!S&&$[0]&1&&(S=!0,H.value=m[0].RawService.Body,ne(()=>S=!1)),b.$set(H);const a={};$[1]&2&&(a.$$scope={dirty:$,ctx:m}),B.$set(a)},i(m){p||(d(l.$$.fragment,m),d(o.$$.fragment,m),d(b.$$.fragment,m),d(B.$$.fragment,m),p=!0)},o(m){w(l.$$.fragment,m),w(o.$$.fragment,m),w(b.$$.fragment,m),w(B.$$.fragment,m),p=!1},d(m){m&&f(t),N(l),N(o),N(b),N(B)}}}function ct(i){return{c:F,l:F,m:F,p:F,i:F,o:F,d:F}}function mt(i){var Te,Ne;let t,n,e,s,l,u,o,R,b,S,P,B,p,k,A,C,h,m,$,L,q,H,a,v,G,Y,x,V,ce,oe,K,fe,se,ee,le,Q,ae;t=new st({props:{service:i[0]}}),e=new ie({props:{id:"name",label:"Service Name",placeholder:"arcadia, ibl-backup etc.",value:i[7].name,disabled:!0,minlength:1}});function $e(r){i[20](r)}let me={id:"command",label:"Command (must start with /usr/bin/)",placeholder:"E.g. /usr/bin/arcadia",minlength:3};i[7].service.cmd!==void 0&&(me.value=i[7].service.cmd),l=new ie({props:me}),te.push(()=>re(l,"value",$e));function _e(r){i[21](r)}let c={id:"directory",label:"Directory",placeholder:"E.g. /root/arcadia",minlength:3};i[7].service.dir!==void 0&&(c.value=i[7].service.dir),R=new ie({props:c}),te.push(()=>re(R,"value",_e));function O(r){i[22](r)}let Z={name:"target",placeholder:"Choose Target",options:new Map((Ne=(Te=i[31])==null?void 0:Te.Targets)==null?void 0:Ne.map(wt))};i[7].service.target!==void 0&&(Z.value=i[7].service.target),P=new Ye({props:Z}),te.push(()=>re(P,"value",O));function ue(r){i[23](r)}let Se={id:"description",label:"Description",placeholder:"E.g. Arcadia",minlength:5};i[7].service.description!==void 0&&(Se.value=i[7].service.description),k=new ie({props:Se}),te.push(()=>re(k,"value",ue));function xe(r){i[24](r)}let ye={id:"after",label:"After",placeholder:"E.g. ibl-maint",minlength:1};i[7].service.after!==void 0&&(ye.value=i[7].service.after),h=new ie({props:ye}),te.push(()=>re(h,"value",xe));function et(r){i[25](r)}let Ee={name:"broken",placeholder:"Is the service broken/disabled?",options:new Map([["Yes, it is","0"],["No, its not","1"]])};i[8]!==void 0&&(Ee.value=i[8]),L=new Ye({props:Ee}),te.push(()=>re(L,"value",et)),Y=new be({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}});function tt(r){i[26](r)}let De={id:"user",label:"User",placeholder:"E.g. root",minlength:1};i[7].service.user!==void 0&&(De.value=i[7].service.user),V=new ie({props:De}),te.push(()=>re(V,"value",tt));function rt(r){i[27](r)}let Ie={id:"group",label:"Group",placeholder:"E.g. root",minlength:1};return i[7].service.group!==void 0&&(Ie.value=i[7].service.group),K=new ie({props:Ie}),te.push(()=>re(K,"value",rt)),Q=new de({props:{onclick:i[28],$$slots:{default:[$t]},$$scope:{ctx:i}}}),{c(){D(t.$$.fragment),n=y(),D(e.$$.fragment),s=y(),D(l.$$.fragment),o=y(),D(R.$$.fragment),S=y(),D(P.$$.fragment),p=y(),D(k.$$.fragment),C=y(),D(h.$$.fragment),$=y(),D(L.$$.fragment),H=y(),a=J("h2"),v=M("Service User"),G=y(),D(Y.$$.fragment),x=y(),D(V.$$.fragment),oe=y(),D(K.$$.fragment),se=y(),ee=J("div"),le=y(),D(Q.$$.fragment),this.h()},l(r){I(t.$$.fragment,r),n=E(r),I(e.$$.fragment,r),s=E(r),I(l.$$.fragment,r),o=E(r),I(R.$$.fragment,r),S=E(r),I(P.$$.fragment,r),p=E(r),I(k.$$.fragment,r),C=E(r),I(h.$$.fragment,r),$=E(r),I(L.$$.fragment,r),H=E(r),a=j(r,"H2",{class:!0});var _=z(a);v=U(_,"Service User"),_.forEach(f),G=E(r),I(Y.$$.fragment,r),x=E(r),I(V.$$.fragment,r),oe=E(r),I(K.$$.fragment,r),se=E(r),ee=j(r,"DIV",{class:!0}),z(ee).forEach(f),le=E(r),I(Q.$$.fragment,r),this.h()},h(){X(a,"class","text-xl font-semibold mt-4"),X(ee,"class","mb-2")},m(r,_){T(t,r,_),g(r,n,_),T(e,r,_),g(r,s,_),T(l,r,_),g(r,o,_),T(R,r,_),g(r,S,_),T(P,r,_),g(r,p,_),T(k,r,_),g(r,C,_),T(h,r,_),g(r,$,_),T(L,r,_),g(r,H,_),g(r,a,_),W(a,v),g(r,G,_),T(Y,r,_),g(r,x,_),T(V,r,_),g(r,oe,_),T(K,r,_),g(r,se,_),g(r,ee,_),g(r,le,_),T(Q,r,_),ae=!0},p(r,_){const Re={};_[0]&1&&(Re.service=r[0]),t.$set(Re);const Pe={};_[0]&128&&(Pe.value=r[7].name),e.$set(Pe);const Be={};!u&&_[0]&128&&(u=!0,Be.value=r[7].service.cmd,ne(()=>u=!1)),l.$set(Be);const Le={};!b&&_[0]&128&&(b=!0,Le.value=r[7].service.dir,ne(()=>b=!1)),R.$set(Le);const Oe={};!B&&_[0]&128&&(B=!0,Oe.value=r[7].service.target,ne(()=>B=!1)),P.$set(Oe);const qe={};!A&&_[0]&128&&(A=!0,qe.value=r[7].service.description,ne(()=>A=!1)),k.$set(qe);const Ae={};!m&&_[0]&128&&(m=!0,Ae.value=r[7].service.after,ne(()=>m=!1)),h.$set(Ae);const Ce={};!q&&_[0]&256&&(q=!0,Ce.value=r[8],ne(()=>q=!1)),L.$set(Ce);const Ge={};_[1]&2&&(Ge.$$scope={dirty:_,ctx:r}),Y.$set(Ge);const Ve={};!ce&&_[0]&128&&(ce=!0,Ve.value=r[7].service.user,ne(()=>ce=!1)),V.$set(Ve);const Me={};!fe&&_[0]&128&&(fe=!0,Me.value=r[7].service.group,ne(()=>fe=!1)),K.$set(Me);const Ue={};_[1]&2&&(Ue.$$scope={dirty:_,ctx:r}),Q.$set(Ue)},i(r){ae||(d(t.$$.fragment,r),d(e.$$.fragment,r),d(l.$$.fragment,r),d(R.$$.fragment,r),d(P.$$.fragment,r),d(k.$$.fragment,r),d(h.$$.fragment,r),d(L.$$.fragment,r),d(Y.$$.fragment,r),d(V.$$.fragment,r),d(K.$$.fragment,r),d(Q.$$.fragment,r),ae=!0)},o(r){w(t.$$.fragment,r),w(e.$$.fragment,r),w(l.$$.fragment,r),w(R.$$.fragment,r),w(P.$$.fragment,r),w(k.$$.fragment,r),w(h.$$.fragment,r),w(L.$$.fragment,r),w(Y.$$.fragment,r),w(V.$$.fragment,r),w(K.$$.fragment,r),w(Q.$$.fragment,r),ae=!1},d(r){N(t,r),r&&f(n),N(e,r),r&&f(s),N(l,r),r&&f(o),N(R,r),r&&f(S),N(P,r),r&&f(p),N(k,r),r&&f(C),N(h,r),r&&f($),N(L,r),r&&f(H),r&&f(a),r&&f(G),N(Y,r),r&&f(x),N(V,r),r&&f(oe),N(K,r),r&&f(se),r&&f(ee),r&&f(le),N(Q,r)}}}function pt(i){let t;return{c(){t=M("Defaults to root if unset. Note that this could be a possible security risk to use the wrong user/group!")},l(n){t=U(n,"Defaults to root if unset. Note that this could be a possible security risk to use the wrong user/group!")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function $t(i){let t;return{c(){t=M("Edit Service")},l(n){t=U(n,"Edit Service")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function _t(i){let t,n;return t=new be({props:{$$slots:{default:[vt]},$$scope:{ctx:i}}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s[1]&2&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function vt(i){let t;return{c(){t=M("Loading metadata...")},l(n){t=U(n,"Loading metadata...")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function gt(i){let t;return{c(){t=M("Warning: Manually managed units should be manually verified for correctness!")},l(n){t=U(n,"Warning: Manually managed units should be manually verified for correctness!")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function dt(i){let t;return{c(){t=M("Edit Service")},l(n){t=U(n,"Edit Service")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function bt(i){let t,n,e,s,l,u,o,R,b,S,P,B,p,k,A,C;t=new nt({props:{onclick:i[15],$$slots:{default:[lt]},$$scope:{ctx:i}}});let h=i[1]!=""&&He(i);s=new de({props:{onclick:i[16],$$slots:{default:[at]},$$scope:{ctx:i}}});let m=i[3]!=""&&Je(i);o=new de({props:{onclick:i[17],$$slots:{default:[ut]},$$scope:{ctx:i}}});let $=i[5]!=""&&je(i);const L=[ft,ot],q=[];function H(a,v){var G;return(G=a[0])!=null&&G.RawService?0:1}return p=H(i),k=q[p]=L[p](i),{c(){D(t.$$.fragment),n=y(),h&&h.c(),e=y(),D(s.$$.fragment),l=y(),m&&m.c(),u=y(),D(o.$$.fragment),R=y(),$&&$.c(),b=y(),S=J("h2"),P=M("Service Info"),B=y(),k.c(),A=Fe(),this.h()},l(a){I(t.$$.fragment,a),n=E(a),h&&h.l(a),e=E(a),I(s.$$.fragment,a),l=E(a),m&&m.l(a),u=E(a),I(o.$$.fragment,a),R=E(a),$&&$.l(a),b=E(a),S=j(a,"H2",{class:!0});var v=z(S);P=U(v,"Service Info"),v.forEach(f),B=E(a),k.l(a),A=Fe(),this.h()},h(){X(S,"class","font-semibold text-xl")},m(a,v){T(t,a,v),g(a,n,v),h&&h.m(a,v),g(a,e,v),T(s,a,v),g(a,l,v),m&&m.m(a,v),g(a,u,v),T(o,a,v),g(a,R,v),$&&$.m(a,v),g(a,b,v),g(a,S,v),W(S,P),g(a,B,v),q[p].m(a,v),g(a,A,v),C=!0},p(a,v){const G={};v[1]&2&&(G.$$scope={dirty:v,ctx:a}),t.$set(G),a[1]!=""?h?(h.p(a,v),v[0]&2&&d(h,1)):(h=He(a),h.c(),d(h,1),h.m(e.parentNode,e)):h&&(ve(),w(h,1,1,()=>{h=null}),ge());const Y={};v[1]&2&&(Y.$$scope={dirty:v,ctx:a}),s.$set(Y),a[3]!=""?m?(m.p(a,v),v[0]&8&&d(m,1)):(m=Je(a),m.c(),d(m,1),m.m(u.parentNode,u)):m&&(ve(),w(m,1,1,()=>{m=null}),ge());const x={};v[1]&2&&(x.$$scope={dirty:v,ctx:a}),o.$set(x),a[5]!=""?$?($.p(a,v),v[0]&32&&d($,1)):($=je(a),$.c(),d($,1),$.m(b.parentNode,b)):$&&(ve(),w($,1,1,()=>{$=null}),ge());let V=p;p=H(a),p===V?q[p].p(a,v):(ve(),w(q[V],1,1,()=>{q[V]=null}),ge(),k=q[p],k?k.p(a,v):(k=q[p]=L[p](a),k.c()),d(k,1),k.m(A.parentNode,A))},i(a){C||(d(t.$$.fragment,a),d(h),d(s.$$.fragment,a),d(m),d(o.$$.fragment,a),d($),d(k),C=!0)},o(a){w(t.$$.fragment,a),w(h),w(s.$$.fragment,a),w(m),w(o.$$.fragment,a),w($),w(k),C=!1},d(a){N(t,a),a&&f(n),h&&h.d(a),a&&f(e),N(s,a),a&&f(l),m&&m.d(a),a&&f(u),N(o,a),a&&f(R),$&&$.d(a),a&&f(b),a&&f(S),a&&f(B),q[p].d(a),a&&f(A)}}}const wt=i=>[(i==null?void 0:i.Name)+" - "+(i==null?void 0:i.Description),i==null?void 0:i.Name];function ht(i,t,n){var fe,se,ee,le,Q,ae,$e,me,_e;let{service:e}=t,s="",l=[];const u=async()=>{var Z;if(window.prompt("Are you sure you want to delete this service? (YES to confirm))")!="YES")return;let O=await fetch("/api/systemd/deleteService",{method:"POST",body:JSON.stringify({name:((Z=e==null?void 0:e.RawService)==null?void 0:Z.FileName)||(e==null?void 0:e.ID)})});if(!O.ok){let ue=await O.text();pe(ue);return}n(1,s=await O.text()),we(s,ue=>{n(2,l=ue)})};let o="",R=[];const b=async()=>{let c=await fetch(`/api/systemd/initDeploy?id=${e==null?void 0:e.ID}`,{method:"POST"});if(!c.ok){let O=await c.text();pe(O);return}n(3,o=await c.text()),we(o,O=>{n(4,R=O)})};let S="",P=[];const B=async()=>{let c=await fetch(`/api/systemd/getServiceLogs?id=${e==null?void 0:e.ID}`,{method:"POST"});if(!c.ok){let O=await c.text();pe(O)}n(5,S=await c.text()),we(S,O=>{n(6,P=O)})};let p={name:(e==null?void 0:e.ID)||"",service:{cmd:((fe=e==null?void 0:e.Service)==null?void 0:fe.Command)||"",dir:((se=e==null?void 0:e.Service)==null?void 0:se.Directory)||"",target:((ee=e==null?void 0:e.Service)==null?void 0:ee.Target)||"ibl-maint",description:((le=e==null?void 0:e.Service)==null?void 0:le.Description)||"",after:(Q=e==null?void 0:e.Service)==null?void 0:Q.After,broken:!!((ae=e==null?void 0:e.Service)!=null&&ae.Broken),user:(($e=e==null?void 0:e.Service)==null?void 0:$e.User)||"",group:((me=e==null?void 0:e.Service)==null?void 0:me.Group)||""}},k=(_e=e==null?void 0:e.Service)!=null&&_e.Broken?"0":"1";const A=async()=>{let c=await fetch("/api/systemd/getMeta",{method:"POST"});if(!c.ok){let Z=await c.text();throw new Error(Z)}return await c.json()},C=async()=>{var O,Z;let c=await fetch("/api/systemd/createService?update=true",{method:"POST",body:JSON.stringify({raw_service:{filename:(O=e==null?void 0:e.RawService)==null?void 0:O.FileName,body:(Z=e==null?void 0:e.RawService)==null?void 0:Z.Body}})});if(!c.ok){let ue=await c.text();pe(ue);return}We("Service editted successfully!")},h=async()=>{let c=await fetch("/api/systemd/createService?update=true",{method:"POST",body:JSON.stringify({name:p.name,service:{...p.service,broken:k==="0"}})});if(!c.ok){let O=await c.text();pe(O);return}We("Service editted successfully!")},m=()=>u(),$=()=>b(),L=()=>B();function q(c){i.$$.not_equal(e.RawService.Body,c)&&(e.RawService.Body=c,n(0,e))}const H=()=>C();function a(c){i.$$.not_equal(p.service.cmd,c)&&(p.service.cmd=c,n(7,p))}function v(c){i.$$.not_equal(p.service.dir,c)&&(p.service.dir=c,n(7,p))}function G(c){i.$$.not_equal(p.service.target,c)&&(p.service.target=c,n(7,p))}function Y(c){i.$$.not_equal(p.service.description,c)&&(p.service.description=c,n(7,p))}function x(c){i.$$.not_equal(p.service.after,c)&&(p.service.after=c,n(7,p))}function V(c){k=c,n(8,k)}function ce(c){i.$$.not_equal(p.service.user,c)&&(p.service.user=c,n(7,p))}function oe(c){i.$$.not_equal(p.service.group,c)&&(p.service.group=c,n(7,p))}const K=()=>h();return i.$$set=c=>{"service"in c&&n(0,e=c.service)},[e,s,l,o,R,S,P,p,k,u,b,B,A,C,h,m,$,L,q,H,a,v,G,Y,x,V,ce,oe,K]}class kt extends ze{constructor(t){super(),Ke(this,t,ht,bt,Qe,{service:0},null,[-1,-1])}}function St(i){let t,n=i[4]+"",e;return{c(){t=J("p"),e=M(n),this.h()},l(s){t=j(s,"P",{class:!0});var l=z(t);e=U(l,n),l.forEach(f),this.h()},h(){X(t,"class","text-red-500")},m(s,l){g(s,t,l),W(t,e)},p:F,i:F,o:F,d(s){s&&f(t)}}}function yt(i){var R;let t,n,e=((R=i[3])==null?void 0:R.ID)+"",s,l,u,o;return u=new kt({props:{service:i[3]}}),{c(){t=J("h1"),n=M("Viewing "),s=M(e),l=y(),D(u.$$.fragment),this.h()},l(b){t=j(b,"H1",{class:!0});var S=z(t);n=U(S,"Viewing "),s=U(S,e),S.forEach(f),l=E(b),I(u.$$.fragment,b),this.h()},h(){X(t,"class","text-2xl font-semibold")},m(b,S){g(b,t,S),W(t,n),W(t,s),g(b,l,S),T(u,b,S),o=!0},p:F,i(b){o||(d(u.$$.fragment,b),o=!0)},o(b){w(u.$$.fragment,b),o=!1},d(b){b&&f(t),b&&f(l),N(u,b)}}}function Et(i){let t,n;return t=new be({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s&32&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Dt(i){let t;return{c(){t=M("Loading service...")},l(n){t=U(n,"Loading service...")},m(n,e){g(n,t,e)},d(n){n&&f(t)}}}function It(i){let t,n,e={ctx:i,current:null,token:null,hasCatch:!0,pending:Et,then:yt,catch:St,value:3,error:4,blocks:[,,,]};return Xe(i[0](),e),{c(){t=J("div"),e.block.c()},l(s){t=j(s,"DIV",{});var l=z(t);e.block.l(l),l.forEach(f)},m(s,l){g(s,t,l),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,n=!0},p(s,[l]){i=s,Ze(e,i,l)},i(s){n||(d(e.block),n=!0)},o(s){for(let l=0;l<3;l+=1){const u=e.blocks[l];w(u)}n=!1},d(s){s&&f(t),e.block.d(),e.token=null,e=null}}}function Tt(i){let t=null;const n=()=>t||(t=new URLSearchParams(window.location.search).get("id")||"",t);return[async()=>{if(!n())throw new Error("No service id provided");let s=await fetch("/api/systemd/getServiceList",{method:"POST"});if(!s.ok){let o=await s.text();throw new Error(o)}let u=(await s.json()).find(o=>(o==null?void 0:o.ID)==n());if(!u)throw new Error("Service not found");return u}]}class Gt extends ze{constructor(t){super(),Ke(this,t,Tt,It,Qe,{})}}export{Gt as component};
