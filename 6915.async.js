"use strict";(self.webpackChunkscene_pro=self.webpackChunkscene_pro||[]).push([[6915],{63727:function(e,t,o){o.d(t,{Z:function(){return u}});var r=o(73440),n=o(43254),i=o(90403),l=o(17155),s=o(48023),a=o(21260);let u=class extends n.Z{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles((0,a.EH)((()=>this._refresh()),i.Z_))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const o of e)null!=o&&(t=this._processCollection(t,o));this.splice(t)}_createNewInstance(e){return new n.Z(e)}_processCollection(e,t){if(!t)return e;const o=this.itemFilterFunction??(e=>!!e);for(const r of t)if(r){if(o(r)){const t=this.indexOf(r,e);t>=0?t!==e&&this.reorder(r,e):this.add(r,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(r);if(Array.isArray(t))for(const o of t)e=this._processCollection(e,o);else e=this._processCollection(e,t)}}return e}};(0,r._)([(0,l.Cb)()],u.prototype,"getCollections",void 0),(0,r._)([(0,l.Cb)()],u.prototype,"getChildrenFunction",void 0),(0,r._)([(0,l.Cb)()],u.prototype,"itemFilterFunction",void 0),u=(0,r._)([(0,s.j)("esri.core.CollectionFlattener")],u)},64497:function(e,t,o){o.d(t,{I:function(){return n},v:function(){return i}});var r=o(99574);function n(e,t,o=0){const n=(0,r.uZ)(e,0,a);for(let e=0;e<4;e++)t[o+e]=Math.floor(256*u(n*l[e]))}function i(e,t=0){let o=0;for(let r=0;r<4;r++)o+=e[t+r]*s[r];return o}const l=[1,256,65536,16777216],s=[1/256,1/65536,1/16777216,1/4294967296],a=i(new Uint8ClampedArray([255,255,255,255]));function u(e){return e-Math.floor(e)}},332:function(e,t,o){o.d(t,{G:function(){return l},w:function(){return s}});var r=o(29292),n=o(43254),i=o(97006);async function l(e,t){return await e.load(),s(e,t)}async function s(e,t){const o=[],l=(...e)=>{for(const t of e)null!=t&&(Array.isArray(t)?l(...t):n.Z.isCollection(t)?t.forEach((e=>l(e))):i.Z.isLoadable(t)&&o.push(t))};t(l);let s=null;if(await(0,r.UI)(o,(async e=>{const t=await(0,r.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load());!1!==t.ok||s||(s=t)})),s)throw s.error;return e}},63909:function(e,t,o){o.r(t),o.d(t,{default:function(){return z}});var r=o(73440),n=o(43254),i=o(63727),l=o(88194),s=o(50702),a=o(28947),u=o(332),d=o(96711),c=o(84060),p=o(93568),f=o(90403),y=o(95490),m=o(17155),v=(o(61432),o(1194)),h=o(48023),b=o(45213),g=o(38209),x=o(51389),C=o(84201),w=o(38448),_=o(58560),T=o(55591),S=o(85330),F=o(27202),M=o(3752),I=o(95060),A=o(76889),O=o(7961),E=o(78619),R=o(63255),P=o(97006),Z=o(76329);o(83850);let j=class extends R.Z{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,r._)([(0,m.Cb)({type:String})],j.prototype,"fieldName",void 0),(0,r._)([(0,m.Cb)({type:String})],j.prototype,"modelName",void 0),(0,r._)([(0,m.Cb)({type:String})],j.prototype,"label",void 0),(0,r._)([(0,m.Cb)({type:Number})],j.prototype,"min",void 0),(0,r._)([(0,m.Cb)({type:Number})],j.prototype,"max",void 0),(0,r._)([(0,m.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],j.prototype,"mostFrequentValues",void 0),(0,r._)([(0,m.Cb)({type:[Number]})],j.prototype,"subLayerIds",void 0),j=(0,r._)([(0,h.j)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],j);let L=class extends(P.Z.LoadableMixin(Z.Z.EsriPromiseMixin(R.Z))){constructor(e){super(e),this.url=null,this.customParameters=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(d.Z.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,E.Z)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,r._)([(0,m.Cb)({constructOnly:!0,type:String})],L.prototype,"url",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],L.prototype,"customParameters",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],L.prototype,"apiKey",void 0),(0,r._)([(0,m.Cb)({readOnly:!0,type:[j],json:{read:{source:"summary"}}})],L.prototype,"fields",null),L=(0,r._)([(0,h.j)("esri.layers.support.BuildingSummaryStatistics")],L);var H=o(93295),N=o(51870);const B=n.Z.ofType(O.Z),V=(0,a.d9)(C.Z.sublayersProperty),k=V.json?.origins;k&&(k["web-scene"]={type:[x.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},k["portal-item"]={type:[x.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let U=class extends((0,I.Vt)((0,_.Y)((0,S.q)((0,F.I)((0,M.M)((0,c.R)((0,T.N)((0,w.V)(g.Z))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new i.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new B,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,o){const r=C.Z.readSublayers(e,t,o);return C.Z.forEachSublayer(r,(e=>e.layer=this)),this._allSublayerOverrides&&(function(e,t){t.forEach((t=>$(e,t)))}(r,this._allSublayerOverrides),this._allSublayerOverrides=null),r}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?function(e,t,o){const r=[];C.Z.forEachSublayer(e,(e=>{const t=e.write({},o);Object.keys(t).length>1&&r.push(t)})),r.length>0&&(t.sublayers=r)}(this.sublayers,e,t):this._allSublayerOverrides&&function(e,t,o){const r=o?.origin&&e.get(o.origin);r&&(t.sublayers=[],r.overrides.forEach((e=>{t.sublayers.push((0,a.d9)(e))})))}(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const o=function(e,t){const o=new Map;for(const r of e)null!=r&&"object"==typeof r&&"number"==typeof r.id?o.set(r.id,r):t.messages?.push(new l.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:r}));return{overrides:o,context:t}}(e.sublayers,t);this.sublayers?$(this.sublayers,o):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,o))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef&&this.parsedUrl){const e=(0,y.v_)(this.parsedUrl.path,t.statisticsHRef);return new L({url:e,apiKey:this.apiKey,customParameters:this.customParameters})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(p.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return(0,u.G)(this,(e=>{C.Z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(I.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(I.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,A.w)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){(0,p.R8)(this._logWarningOnPopupEnabled())}}async _logWarningOnPopupEnabled(){const e=new AbortController;this.addHandles((0,s.F2)(e)),await(0,f.N1)((()=>this.allSublayers.filter((e=>"building-component"===e.type)).some((e=>e.popupEnabled&&null!=e.popupTemplate))),e.signal);const t=this.allSublayers.filter((e=>"building-component"===e.type)).filter((e=>e.popupEnabled&&null!=e.popupTemplate)),o=[],r=[];for(const e of t){const t=e.title??`untitled ${e.id}`;e.attributeStorageInfo?o.push(t):r.push(t)}const n="\n  ",i=o.length>0?`\nThe following sublayers will fall back to binary attributes for Popups:${n}${o.join(n)}`:"",l=r.length>0?`\nThe following sublayers have no binary attributes and will not work with Popups:${n}${r.join(n)}`:"";d.Z.getLogger(this).warn(`Associated FeatureLayer could not be loaded for this BuildingSceneLayer: ${this.title}.`,i,l)}_validateElevationInfo(e){const t="Building scene layers";(0,N.LR)(d.Z.getLogger(this),(0,N.Uy)(t,"absolute-height",e)),(0,N.LR)(d.Z.getLogger(this),(0,N.kf)(t,e))}};function $(e,t){const{overrides:o,context:r}=t;C.Z.forEachSublayer(e,(e=>e.read(o.get(e.id),r)))}(0,r._)([(0,m.Cb)({type:["BuildingSceneLayer"]})],U.prototype,"operationalLayerType",void 0),(0,r._)([(0,m.Cb)({readOnly:!0})],U.prototype,"allSublayers",void 0),(0,r._)([(0,m.Cb)(V)],U.prototype,"sublayers",void 0),(0,r._)([(0,v.r)("service","sublayers")],U.prototype,"readSublayers",null),(0,r._)([(0,m.Cb)({type:B,nonNullable:!0,json:{write:!0}})],U.prototype,"filters",void 0),(0,r._)([(0,m.Cb)({type:String,json:{write:!0}})],U.prototype,"activeFilterId",void 0),(0,r._)([(0,m.Cb)({readOnly:!0,type:L})],U.prototype,"summaryStatistics",void 0),(0,r._)([(0,v.r)("summaryStatistics",["statisticsHRef"])],U.prototype,"readSummaryStatistics",null),(0,r._)([(0,m.Cb)({type:[String],json:{read:!1}})],U.prototype,"outFields",void 0),(0,r._)([(0,m.Cb)(H.vg)],U.prototype,"fullExtent",void 0),(0,r._)([(0,m.Cb)(H.rn)],U.prototype,"legendEnabled",void 0),(0,r._)([(0,m.Cb)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),(0,r._)([(0,m.Cb)((0,H.Lx)(b.Z))],U.prototype,"spatialReference",void 0),(0,r._)([(0,m.Cb)(H.PV)],U.prototype,"elevationInfo",null),(0,r._)([(0,m.Cb)({json:{read:!1},readOnly:!0})],U.prototype,"type",void 0),(0,r._)([(0,m.Cb)()],U.prototype,"associatedFeatureServiceItem",void 0),U=(0,r._)([(0,h.j)("esri.layers.BuildingSceneLayer")],U);const z=U},84201:function(e,t,o){o.d(t,{Z:function(){return y}});var r,n=o(73440),i=o(43254),l=o(332),s=o(8914),a=o(17155),u=(o(61432),o(96711),o(83850),o(48023)),d=o(51389),c=o(28693);const p={type:i.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:f}}},read:!1}};function f(e,t,o){if(e&&Array.isArray(e))return new i.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?y:d.Z}(e);if(t){const r=new t;return r.read(e,o),r}return o?.messages&&e&&o.messages.push(new s.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null})))}let y=r=class extends c.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>r.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var m;(0,n._)([(0,a.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],y.prototype,"listMode",void 0),(0,n._)([(0,a.Cb)(p)],y.prototype,"sublayers",void 0),y=r=(0,n._)([(0,u.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],y),(m=y||(y={})).sublayersProperty=p,m.readSublayers=f,m.forEachSublayer=function e(t,o){t.forEach((t=>{o(t),"building-group"===t.type&&e(t.sublayers,o)}))}},7961:function(e,t,o){o.d(t,{Z:function(){return F}});var r=o(73440),n=o(43254),i=o(63255),l=o(28947),s=o(18764),a=o(17155),u=(o(61432),o(96711),o(48023));o(83850);let d=class extends i.Z{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,a.Cb)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),d=(0,r._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfo")],d);const c=d;var p;let f=p=class extends i.Z{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new p({filterType:this.filterType,filterValues:(0,l.d9)(this.filterValues)})}};(0,r._)([(0,a.Cb)({type:String,json:{write:{isRequired:!0}}})],f.prototype,"filterType",void 0),(0,r._)([(0,a.Cb)({type:[String],json:{write:{isRequired:!0}}})],f.prototype,"filterValues",void 0),f=p=(0,r._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],f);const y=f;var m;const v=n.Z.ofType(y);let h=m=class extends i.Z{clone(){return new m({filterTypes:(0,l.d9)(this.filterTypes)})}};(0,r._)([(0,a.Cb)({type:v,json:{write:{isRequired:!0}}})],h.prototype,"filterTypes",void 0),h=m=(0,r._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],h);const b=h;var g;const x=n.Z.ofType(b);let C=g=class extends c{constructor(){super(...arguments),this.type="checkbox"}clone(){return new g({filterBlocks:(0,l.d9)(this.filterBlocks)})}};(0,r._)([(0,a.Cb)({type:["checkbox"]})],C.prototype,"type",void 0),(0,r._)([(0,a.Cb)({type:x,json:{write:{isRequired:!0}}})],C.prototype,"filterBlocks",void 0),C=g=(0,r._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],C);const w=C;var _,T=o(52031);const S=n.Z.ofType(T.Z);let F=_=class extends i.Z{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,s.DO)(),this.name=null}clone(){return new _({description:this.description,filterBlocks:(0,l.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.d9)(this.filterAuthoringInfo)})}};(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],F.prototype,"description",void 0),(0,r._)([(0,a.Cb)({type:S,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"filterBlocks",void 0),(0,r._)([(0,a.Cb)({types:{key:"type",base:c,typeMap:{checkbox:w}},json:{read:e=>"checkbox"===e?.type?w.fromJSON(e):null,write:!0}})],F.prototype,"filterAuthoringInfo",void 0),(0,r._)([(0,a.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"id",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"name",void 0),F=_=(0,r._)([(0,u.j)("esri.layers.support.BuildingFilter")],F)},52031:function(e,t,o){o.d(t,{Z:function(){return g}});var r,n=o(73440),i=o(63255),l=o(28947),s=o(17155),a=(o(61432),o(96711),o(48023)),u=o(2615),d=o(5030),c=o(79775),p=o(34440);let f=r=class extends u.Z{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new r({edges:(0,l.d9)(this.edges)})}};(0,n._)([(0,c.J)({wireFrame:"wire-frame"})],f.prototype,"type",void 0),(0,n._)([(0,s.Cb)(p.Z)],f.prototype,"edges",void 0),f=r=(0,n._)([(0,a.j)("esri.layers.support.BuildingFilterModeWireFrame")],f);const y=f;var m,v=o(69801);const h={nonNullable:!0,types:{key:"type",base:u.Z,typeMap:{solid:d.Z,"wire-frame":y,"x-ray":v.Z}},json:{read:e=>{switch(e?.type){case"solid":return d.Z.fromJSON(e);case"wireFrame":return y.fromJSON(e);case"x-ray":return v.Z.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=m=class extends i.Z{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new d.Z,this.title=""}clone(){return new m({filterExpression:this.filterExpression,filterMode:(0,l.d9)(this.filterMode),title:this.title})}};(0,n._)([(0,s.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),(0,n._)([(0,s.Cb)(h)],b.prototype,"filterMode",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=m=(0,n._)([(0,a.j)("esri.layers.support.BuildingFilterBlock")],b);const g=b},2615:function(e,t,o){o.d(t,{Z:function(){return a}});var r=o(73440),n=o(63255),i=o(17155),l=(o(61432),o(96711),o(83850),o(48023));let s=class extends n.Z{};(0,r._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],s.prototype,"type",void 0),s=(0,r._)([(0,l.j)("esri.layers.support.BuildingFilterMode")],s);const a=s},5030:function(e,t,o){o.d(t,{Z:function(){return u}});var r,n=o(73440),i=o(17155),l=(o(61432),o(96711),o(83850),o(48023)),s=o(2615);let a=r=class extends s.Z{constructor(){super(...arguments),this.type="solid"}clone(){return new r}};(0,n._)([(0,i.Cb)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),a=r=(0,n._)([(0,l.j)("esri.layers.support.BuildingFilterModeSolid")],a);const u=a},69801:function(e,t,o){o.d(t,{Z:function(){return u}});var r,n=o(73440),i=o(17155),l=(o(61432),o(96711),o(83850),o(48023)),s=o(2615);let a=r=class extends s.Z{constructor(){super(...arguments),this.type="x-ray"}clone(){return new r}};(0,n._)([(0,i.Cb)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),a=r=(0,n._)([(0,l.j)("esri.layers.support.BuildingFilterModeXRay")],a);const u=a},51870:function(e,t,o){o.d(t,{AA:function(){return y},Jn:function(){return u},LR:function(){return M},Lt:function(){return p},O3:function(){return C},Ou:function(){return b},RL:function(){return c},Uy:function(){return T},VW:function(){return a},W_:function(){return _},Wb:function(){return S},XH:function(){return m},Zz:function(){return l},ap:function(){return h},fl:function(){return f},fm:function(){return I},jG:function(){return A},kf:function(){return F},mF:function(){return s},tR:function(){return O},tq:function(){return w},vQ:function(){return g},vu:function(){return d},zx:function(){return x}});var r=o(26636),n=o(46368);function i(e){return e?A:O}function l(e,t){return t?.mode?t.mode:i(e).mode}function s(e,t){return null!=t?t:i(e)}function a(e,t){return l(null==e||(e.hasZ??!1),t)}function u(e,t){return s(null==e||(e.hasZ??!1),t)}function d(e){const t=v(e);return a(e.geometry,t)}function c(e){const t=v(e),o=a(e.geometry,t),r=null!=t&&"on-the-ground"!==o?I(t):0,n=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:n}}function p(e){return m(c(e))}function f(e){return m(e)||y(e)}function y(e){return"0"===e?.featureExpressionInfo?.expression}function m(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function v(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(e,t){if(!e?.offset)return 0;const{offset:o,unit:n}=e;if("decimal-degrees"===n)return 0;const i="unknown"!==n&&n?n:"meters",l=(0,r.y)(t);return l?(0,r.En)(o,i,l):0}function b(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,n=h(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function g(e,t,o,r=null){return C(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function x(e,t,o,r,n=null){return C(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function C(e,t,o,r,n,i,l=null){if(null==i)return;const s=null!=l?l.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:a}=w(t,o,r,n,e,i);return function(e,t,o,r,n,i,l,s){const a=h(l,n);switch(s){case"absolute-height":return e-a;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,o,r,n,"ground")??0)+a);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,o,r,n,"scene")??0)+a)}}(a,t,o,r,n,e,l,s)}function w(e,t,o,r,n,i){const l=h(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:o+l,elevation:0};case"on-the-ground":{const o=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const i=n.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+i+l,elevation:i}}case"relative-to-scene":{const i=n.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+i+l,elevation:i}}}}function _(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function T(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function S(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function F(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function M(e,t){t&&e.warn(".elevationInfo=",t)}function I(e){return(e?.offset??0)*(0,n.Z7)(e?.unit)}const A={mode:"absolute-height",offset:0},O={mode:"on-the-ground",offset:null}},80300:function(e,t,o){o.d(t,{hM:function(){return u},C8:function(){return d},$s:function(){return c},eU:function(){return a}});var r=o(53147),n=(o(61432),o(96094)),i=o(27583);var l=o(57225),s=o(49466);function a(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function u(e,t){return d(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function d(e,t){if(null==e)return null;const o=null!=e.color?(0,i.nI)(r.Z.toUnitRGBA(e.color)):(0,i.al)(0,0,0,0),l=(0,n.F2)(e.size),a=(0,n.F2)(e.extensionLength);switch(e.type){case"solid":return c({color:o,size:l,extensionLength:a,...t});case"sketch":return u={color:o,size:l,extensionLength:a,...t},{...f,...u,type:s.Pb.Sketch};default:return}var u}function c(e){return{...p,...e,type:s.Pb.Solid}}const p={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.i.OPAQUE,hasSlicePlane:!1},f={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.i.OPAQUE,hasSlicePlane:!1}},72432:function(e,t,o){o.d(t,{F5:function(){return l},HB:function(){return s},a9:function(){return r}});var r,n,i=o(99574);function l(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function s(e,t,o){if(null==e||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const n=(0,i.uZ)(Math.round(e[3]*u),0,u),l=0===n||t===r.Tint?0:t===r.Replace?d:c;o[0]=(0,i.uZ)(Math.round(e[0]*a),0,a),o[1]=(0,i.uZ)(Math.round(e[1]*a),0,a),o[2]=(0,i.uZ)(Math.round(e[2]*a),0,a),o[3]=n+l}(n=r||(r={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const a=255,u=85,d=u,c=2*u},54998:function(e,t,o){o.d(t,{AD:function(){return x},_N:function(){return f},nO:function(){return g},Hz:function(){return b}});var r=o(79487),n=o(64497),i=o(92638),l=o(41044),s=o(45701),a=o(90285),u=o(48857),d=o(5998),c=o(92217);class p extends c.x{constructor(e,t){super(e,"int",d.P.Draw,((o,r,n)=>o.setUniform1i(e,t(r,n))))}}var f,y,m=o(29193),v=o(95285),h=o(52061);(y=f||(f={}))[y.Uniform=0]="Uniform",y[y.Varying=1]="Varying",y[y.COUNT=2]="COUNT";const b=429496.7296;function g(e,t){(0,n.I)(e/b*.5+.5,t)}function x(e,t){switch(t.componentData){case f.Varying:return function(e,t){const{vertex:o,fragment:r}=e;o.include(s.n),o.uniforms.add(new m.R("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(h.T.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const n=t.output===l.H_.ObjectAndLayerIdColor;n&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(i.A),o.constants.add("stride","float",(0,v.B)()?3:2),o.code.add(u.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),o.code.add(u.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${u.H.float(b)};
  }

  ${n?u.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:u.H`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),r.code.add(u.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${n?u.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,t);case f.Uniform:return function(e,t){const{vertex:o,fragment:r}=e;e.varyings.add("vExternalColor","vec4"),o.uniforms.add(new a.$("externalColor",(e=>e.componentParameters.externalColor))).code.add(u.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const n=t.output===l.H_.ObjectAndLayerIdColor;r.uniforms.add(new p("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(u.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,u.If)(n,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case f.COUNT:return;default:(0,r.Bg)(t.componentData)}}},92638:function(e,t,o){o.d(t,{A:function(){return i}});var r=o(72432),n=o(48857);function i(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},57716:function(e,t,o){o.d(t,{O:function(){return a},r:function(){return r}});var r,n,i=o(79487),l=o(48857),s=o(52061);function a(e,t){switch(t.normalType){case r.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(l.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(l.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case r.COUNT:}}(n=r||(r={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.ScreenDerivative=2]="ScreenDerivative",n[n.COUNT=3]="COUNT"},45701:function(e,t,o){o.d(t,{n:function(){return n}});var r=o(48857);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(r.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(r.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},90285:function(e,t,o){o.d(t,{$:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"vec4",r.P.Draw,((o,r,n)=>o.setUniform4fv(e,t(r,n))))}}},57225:function(e,t,o){var r;o.d(t,{i:function(){return r}}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(r||(r={}))},49466:function(e,t,o){o.d(t,{G7:function(){return n},Pb:function(){return r},UR:function(){return b},lV:function(){return g}});var r,n,i,l=o(54998),s=o(57716),a=o(28984),u=o(45701),d=o(80357),c=o(9535),p=o(48857),f=o(15727),y=o(57798),m=o(18489),v=o(29193),h=o(52061);function b(e,t){const{vertex:o}=e;o.include(u.n),e.include(s.O,t);const{silhouette:r,legacy:n,spherical:i}=t;o.uniforms.add(new v.R("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(h.T.COMPONENTINDEX,"float");o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(p.H`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${p.H.float(3)}  * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${p.H.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${p.H.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${p.H.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${r?p.H`decompressNormal(normal2Compressed)`:p.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${p.H.float(l.Hz)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${p.H.float(8)} ),
        otherValue.y * 255.0 - ${p.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),n?o.code.add(p.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(o.uniforms.add(new f.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),o.code.add(p.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r?(e.attributes.add(h.T.NORMAL2COMPRESSED,"vec2"),o.code.add(p.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(p.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),n?o.code.add(p.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(a.$,t),o.uniforms.add(new y.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new d.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new d.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),o.code.add(p.H`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${i?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),o.uniforms.add(new m.C("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(p.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(p.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function g(e){return e===r.Sketch||e===r.Mixed}(i=r||(r={}))[i.Solid=0]="Solid",i[i.Sketch=1]="Sketch",i[i.Mixed=2]="Mixed",i[i.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(n||(n={}))},85754:function(e,t,o){o.d(t,{V5:function(){return i},e7:function(){return n},zc:function(){return l}});var r=o(76554);async function n(e,t=e.popupTemplate){if(null==t)return[];const o=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:i,typeIdField:l,globalIdField:s,relationships:a}=e;if(o.includes("*"))return["*"];const u=n?(0,r.CH)(e):[],d=(0,r.Q0)(e.fieldsIndex,[...o,...u]);return l&&d.push(l),d&&i&&e.fieldsIndex?.has(i)&&!d.includes(i)&&d.push(i),d&&s&&e.fieldsIndex?.has(s)&&!d.includes(s)&&d.push(s),a&&a.forEach((t=>{const{keyField:o}=t;d&&o&&e.fieldsIndex?.has(o)&&!d.includes(o)&&d.push(o)})),d}function i(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function l(e,t){return null!=i(e,{defaultPopupTemplateEnabled:t})}}}]);