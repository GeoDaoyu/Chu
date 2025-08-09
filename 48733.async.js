"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48733],{58426:function(e,t,o){o.d(t,{$c:function(){return p},Hg:function(){return y},jW:function(){return f},xb:function(){return m}});var r=o(70880),n=o(43254),i=o(22018);const l=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function a(e){return e instanceof r.Z}function s(e){return e instanceof n.Z?Object.keys(e.items):a(e)?(0,i.vw)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof n.Z?e.items[t]:e[t]}function c(e){return e?e.declaredClass:null}function d(e,t){const o=e.diff;if(o&&"function"==typeof o)return o(e,t);const r=s(e),n=s(t);if(0===r.length&&0===n.length)return;if(!r.length||!n.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const i=n.filter((e=>!r.includes(e))),f=r.filter((e=>!n.includes(e))),p=r.filter((o=>n.includes(o)&&u(e,o)!==u(t,o))).concat(i,f).sort(),y=c(e);if(y&&l.has(y)&&p.length)return{type:"complete",oldValue:e,newValue:t};let m;const h=a(e)&&a(t);for(const r of p){const n=u(e,r),i=u(t,r);let l;if((h||"function"!=typeof n&&"function"!=typeof i)&&n!==i&&(null!=n||null!=i)){if(o&&o[r]&&"function"==typeof o[r])l=o[r]?.(n,i);else if(n instanceof Date&&i instanceof Date){if(n.getTime()===i.getTime())continue;l={type:"complete",oldValue:n,newValue:i}}else l="object"==typeof n&&"object"==typeof i&&c(n)===c(i)?d(n,i):{type:"complete",oldValue:n,newValue:i};null!=l&&(null!=m?m.diff[r]=l:m={type:"partial",diff:{[r]:l}})}}return m}function f(e,t){return function(e,t){if(null==e)return!1;const o=t.split(".");let r=e;for(const e of o){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const t=r.diff[e];if(!t)return!1;r=t}}return!0}(e,t)}function p(e,t){if(!e)return!1;if("partial"===e.type){const o=Object.keys(e.diff);return 1===o.length&&o[0]===t}return!1}function y(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&c(e)!==c(t)?{type:"complete",oldValue:e,newValue:t}:d(e,t)}function m(e){if(null==e)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!m(e))return!1;for(const e of t.removed)if(!m(e))return!1;for(const e of t.changed)if(!m(e))return!1;return!0}case"partial":for(const t in e.diff)if(!m(e.diff[t]))return!1;return!0}}},46860:function(e,t,o){o.r(t),o.d(t,{default:function(){return Se}});var r=o(73440),n=o(43254),i=o(63727),l=o(88194),a=o(50702),s=o(28947),u=o(332),c=o(96711),d=o(84060),f=o(93568),p=o(90403),y=o(95490),m=o(17155),h=(o(61432),o(1194)),v=o(48023),b=o(45213),g=o(38209),x=o(51389),w=o(76292),C=o(38448),S=o(58560),T=o(55591),_=o(85330),M=o(27202),O=o(3752),A=o(95060),F=o(76889),P=o(63255),I=o(18764);o(83850);let j=class extends P.Z{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,m.Cb)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],j.prototype,"type",void 0),j=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterAuthoringInfo")],j);const E=j;var L;let R=L=class extends P.Z{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new L({filterType:this.filterType,filterValues:(0,s.d9)(this.filterValues)})}};(0,r._)([(0,m.Cb)({type:String,json:{write:{isRequired:!0}}})],R.prototype,"filterType",void 0),(0,r._)([(0,m.Cb)({type:[String],json:{write:{isRequired:!0}}})],R.prototype,"filterValues",void 0),R=L=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],R);const H=R;var N;const V=n.Z.ofType(H);let z=N=class extends P.Z{clone(){return new N({filterTypes:(0,s.d9)(this.filterTypes)})}};(0,r._)([(0,m.Cb)({type:V,json:{write:{isRequired:!0}}})],z.prototype,"filterTypes",void 0),z=N=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],z);const B=z;var D;const Z=n.Z.ofType(B);let k=D=class extends E{constructor(){super(...arguments),this.type="checkbox"}clone(){return new D({filterBlocks:(0,s.d9)(this.filterBlocks)})}};(0,r._)([(0,m.Cb)({type:["checkbox"]})],k.prototype,"type",void 0),(0,r._)([(0,m.Cb)({type:Z,json:{write:{isRequired:!0}}})],k.prototype,"filterBlocks",void 0),k=D=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],k);const U=k;let $=class extends P.Z{};(0,r._)([(0,m.Cb)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],$.prototype,"type",void 0),$=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterMode")],$);const W=$;var q;let G=q=class extends W{constructor(){super(...arguments),this.type="solid"}clone(){return new q}};(0,r._)([(0,m.Cb)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],G.prototype,"type",void 0),G=q=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterModeSolid")],G);const J=G;var K,X=o(79775),Q=o(34440);let Y=K=class extends W{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:(0,s.d9)(this.edges)})}};(0,r._)([(0,X.J)({wireFrame:"wire-frame"})],Y.prototype,"type",void 0),(0,r._)([(0,m.Cb)(Q.Z)],Y.prototype,"edges",void 0),Y=K=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterModeWireFrame")],Y);const ee=Y;var te;let oe=te=class extends W{constructor(){super(...arguments),this.type="x-ray"}clone(){return new te}};(0,r._)([(0,m.Cb)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],oe.prototype,"type",void 0),oe=te=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterModeXRay")],oe);const re=oe;var ne;const ie={nonNullable:!0,types:{key:"type",base:W,typeMap:{solid:J,"wire-frame":ee,"x-ray":re}},json:{read:e=>{switch(e?.type){case"solid":return J.fromJSON(e);case"wireFrame":return ee.fromJSON(e);case"x-ray":return re.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let le=ne=class extends P.Z{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new J,this.title=""}clone(){return new ne({filterExpression:this.filterExpression,filterMode:(0,s.d9)(this.filterMode),title:this.title})}};(0,r._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"filterExpression",void 0),(0,r._)([(0,m.Cb)(ie)],le.prototype,"filterMode",void 0),(0,r._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"title",void 0),le=ne=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilterBlock")],le);const ae=le;var se;const ue=n.Z.ofType(ae);let ce=se=class extends P.Z{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,I.DO)(),this.name=null}clone(){return new se({description:this.description,filterBlocks:(0,s.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,s.d9)(this.filterAuthoringInfo)})}};(0,r._)([(0,m.Cb)({type:String,json:{write:!0}})],ce.prototype,"description",void 0),(0,r._)([(0,m.Cb)({type:ue,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"filterBlocks",void 0),(0,r._)([(0,m.Cb)({types:{key:"type",base:E,typeMap:{checkbox:U}},json:{read:e=>"checkbox"===e?.type?U.fromJSON(e):null,write:!0}})],ce.prototype,"filterAuthoringInfo",void 0),(0,r._)([(0,m.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"id",void 0),(0,r._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"name",void 0),ce=se=(0,r._)([(0,v.j)("esri.layers.support.BuildingFilter")],ce);var de=o(78619),fe=o(97006),pe=o(76329);let ye=class extends P.Z{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,r._)([(0,m.Cb)({type:String})],ye.prototype,"fieldName",void 0),(0,r._)([(0,m.Cb)({type:String})],ye.prototype,"modelName",void 0),(0,r._)([(0,m.Cb)({type:String})],ye.prototype,"label",void 0),(0,r._)([(0,m.Cb)({type:Number})],ye.prototype,"min",void 0),(0,r._)([(0,m.Cb)({type:Number})],ye.prototype,"max",void 0),(0,r._)([(0,m.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ye.prototype,"mostFrequentValues",void 0),(0,r._)([(0,m.Cb)({type:[Number]})],ye.prototype,"subLayerIds",void 0),ye=(0,r._)([(0,v.j)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],ye);let me=class extends(fe.Z.LoadableMixin(pe.Z.EsriPromiseMixin(P.Z))){constructor(e){super(e),this.url=null,this.customParameters=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(c.Z.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,de.Z)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,r._)([(0,m.Cb)({constructOnly:!0,type:String})],me.prototype,"url",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],me.prototype,"customParameters",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],me.prototype,"apiKey",void 0),(0,r._)([(0,m.Cb)({readOnly:!0,type:[ye],json:{read:{source:"summary"}}})],me.prototype,"fields",null),me=(0,r._)([(0,v.j)("esri.layers.support.BuildingSummaryStatistics")],me);var he=o(93295),ve=o(51870);const be=n.Z.ofType(ce),ge=(0,s.d9)(w.Z.sublayersProperty),xe=ge.json?.origins;xe&&(xe["web-scene"]={type:[x.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},xe["portal-item"]={type:[x.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let we=class extends((0,A.Vt)((0,S.Y)((0,_.q)((0,M.I)((0,O.M)((0,d.R)((0,T.N)((0,C.V)(g.Z))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new i.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new be,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,o){const r=w.Z.readSublayers(e,t,o);return w.Z.forEachSublayer(r,(e=>e.layer=this)),this._allSublayerOverrides&&(function(e,t){t.forEach((t=>Ce(e,t)))}(r,this._allSublayerOverrides),this._allSublayerOverrides=null),r}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?function(e,t,o){const r=[];w.Z.forEachSublayer(e,(e=>{const t=e.write({},o);Object.keys(t).length>1&&r.push(t)})),r.length>0&&(t.sublayers=r)}(this.sublayers,e,t):this._allSublayerOverrides&&function(e,t,o){const r=o?.origin&&e.get(o.origin);r&&(t.sublayers=[],r.overrides.forEach((e=>{t.sublayers.push((0,s.d9)(e))})))}(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const o=function(e,t){const o=new Map;for(const r of e)null!=r&&"object"==typeof r&&"number"==typeof r.id?o.set(r.id,r):t.messages?.push(new l.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:r}));return{overrides:o,context:t}}(e.sublayers,t);this.sublayers?Ce(this.sublayers,o):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,o))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef&&this.parsedUrl){const e=(0,y.v_)(this.parsedUrl.path,t.statisticsHRef);return new me({url:e,apiKey:this.apiKey,customParameters:this.customParameters})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(f.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return(0,u.G)(this,(e=>{w.Z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(A.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(A.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,F.w)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){(0,f.R8)(this._logWarningOnPopupEnabled())}}async _logWarningOnPopupEnabled(){const e=new AbortController;this.addHandles((0,a.F2)(e)),await(0,p.N1)((()=>this.allSublayers.filter((e=>"building-component"===e.type)).some((e=>e.popupEnabled&&null!=e.popupTemplate))),e.signal);const t=this.allSublayers.filter((e=>"building-component"===e.type)).filter((e=>e.popupEnabled&&null!=e.popupTemplate)),o=[],r=[];for(const e of t){const t=e.title??`untitled ${e.id}`;e.attributeStorageInfo?o.push(t):r.push(t)}const n="\n  ",i=o.length>0?`\nThe following sublayers will fall back to binary attributes for Popups:${n}${o.join(n)}`:"",l=r.length>0?`\nThe following sublayers have no binary attributes and will not work with Popups:${n}${r.join(n)}`:"";c.Z.getLogger(this).warn(`Associated FeatureLayer could not be loaded for this BuildingSceneLayer: ${this.title}.`,i,l)}_validateElevationInfo(e){const t="Building scene layers";(0,ve.LR)(c.Z.getLogger(this),(0,ve.Uy)(t,"absolute-height",e)),(0,ve.LR)(c.Z.getLogger(this),(0,ve.kf)(t,e))}};function Ce(e,t){const{overrides:o,context:r}=t;w.Z.forEachSublayer(e,(e=>e.read(o.get(e.id),r)))}(0,r._)([(0,m.Cb)({type:["BuildingSceneLayer"]})],we.prototype,"operationalLayerType",void 0),(0,r._)([(0,m.Cb)({readOnly:!0})],we.prototype,"allSublayers",void 0),(0,r._)([(0,m.Cb)(ge)],we.prototype,"sublayers",void 0),(0,r._)([(0,h.r)("service","sublayers")],we.prototype,"readSublayers",null),(0,r._)([(0,m.Cb)({type:be,nonNullable:!0,json:{write:!0}})],we.prototype,"filters",void 0),(0,r._)([(0,m.Cb)({type:String,json:{write:!0}})],we.prototype,"activeFilterId",void 0),(0,r._)([(0,m.Cb)({readOnly:!0,type:me})],we.prototype,"summaryStatistics",void 0),(0,r._)([(0,h.r)("summaryStatistics",["statisticsHRef"])],we.prototype,"readSummaryStatistics",null),(0,r._)([(0,m.Cb)({type:[String],json:{read:!1}})],we.prototype,"outFields",void 0),(0,r._)([(0,m.Cb)(he.vg)],we.prototype,"fullExtent",void 0),(0,r._)([(0,m.Cb)(he.rn)],we.prototype,"legendEnabled",void 0),(0,r._)([(0,m.Cb)({type:["show","hide","hide-children"]})],we.prototype,"listMode",void 0),(0,r._)([(0,m.Cb)((0,he.Lx)(b.Z))],we.prototype,"spatialReference",void 0),(0,r._)([(0,m.Cb)(he.PV)],we.prototype,"elevationInfo",null),(0,r._)([(0,m.Cb)({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),(0,r._)([(0,m.Cb)()],we.prototype,"associatedFeatureServiceItem",void 0),we=(0,r._)([(0,v.j)("esri.layers.BuildingSceneLayer")],we);const Se=we},76292:function(e,t,o){o.d(t,{Z:function(){return y}});var r,n=o(73440),i=o(43254),l=o(332),a=o(8914),s=o(17155),u=(o(61432),o(96711),o(83850),o(48023)),c=o(51389),d=o(28693);const f={type:i.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p}}},read:!1}};function p(e,t,o){if(e&&Array.isArray(e))return new i.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?y:c.Z}(e);if(t){const r=new t;return r.read(e,o),r}return o?.messages&&e&&o.messages.push(new a.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null})))}let y=r=class extends d.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>r.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var m;(0,n._)([(0,s.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],y.prototype,"listMode",void 0),(0,n._)([(0,s.Cb)(f)],y.prototype,"sublayers",void 0),y=r=(0,n._)([(0,u.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],y),(m=y||(y={})).sublayersProperty=f,m.readSublayers=p,m.forEachSublayer=function e(t,o){t.forEach((t=>{o(t),"building-group"===t.type&&e(t.sublayers,o)}))}},86462:function(e,t,o){o.d(t,{AJ:function(){return u},If:function(){return f},k0:function(){return s},uI:function(){return d},ul:function(){return a},wx:function(){return p}});var r=o(99574),n=o(96094),i=o(73749),l=o(27583);const a=2.4;function s(e){return(0,n.Wz)(e*a)}function u(e){return(0,n.F2)(e)/a}function c(e,t,o,n){let{color:l,ratio:a}=t,{color:s,ratio:u}=o;if(u===a){const e=1e-6;1===u?a-=e:u+=e}const c=(0,r.uZ)((n-a)/(u-a),0,1);(0,i.l)(e,l.toArray(),s.toArray(),c)}function d(e){const t=new Uint8ClampedArray(2048);if(e=e.filter((({ratio:e})=>e>=0&&e<=1)).sort(((e,t)=>e.ratio-t.ratio)).map((({color:e,ratio:t})=>({color:e,ratio:Math.max(t,.001)}))),e.length<1)return t;let o=e[0],r=e[0],n=1;const i=(0,l.Ue)();for(let l=0;l<512;l++){const a=(l+.5)/512;for(;a>r.ratio&&n<e.length;)o=r,r=e[n++];c(i,o,r,a),t.set(i,4*l)}return t}function f(e,t,o){const r=Math.sqrt(e**2+t**2)/o;return r>1?0:3/(Math.PI*o**2)*(1-r**2)**2}function p(e){return"function"==typeof e?e:e?t=>+t[e]:()=>1}},599:function(e,t,o){o.d(t,{P:function(){return u},d:function(){return f}});var r=o(73440),n=o(41773),i=o(96711),l=o(17155),a=(o(61432),o(83850),o(79775)),s=o(48023);const u=(0,n.w)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),c="percent-of-total",d="field",f=e=>{let t=class extends e{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let e=this._get("normalizationType");const t=!!this.normalizationField,o=null!=this.normalizationTotal;return t||o?(e=t&&d||o&&c||null,t&&o&&i.Z.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==d&&e!==c||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}};return(0,r._)([(0,l.Cb)({type:String,json:{name:"parameters.normalizationField",write:!0}})],t.prototype,"normalizationField",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],t.prototype,"normalizationMaxValue",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],t.prototype,"normalizationMinValue",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],t.prototype,"normalizationTotal",void 0),(0,r._)([(0,a.J)(u,{name:"parameters.normalizationType"})],t.prototype,"normalizationType",null),t=(0,r._)([(0,s.j)("esri.rest.support.NormalizationBinParametersMixin")],t),t}},9350:function(e,t,o){o.d(t,{CJ:function(){return u},Rz:function(){return d},js:function(){return f},xA:function(){return s},z3:function(){return c}});o(61432);var r=o(89636),n=o(38096),i=o(19886),l=o(45433),a=o(54914);const s=i.Z.fromJSON(a.I4),u=n.Z.fromJSON(a.ET),c=r.Z.fromJSON(a.lF),d=l.Z.fromJSON(a.qP);function f(e){if(null==e)return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return s;case"polyline":return u;case"polygon":case"extent":return c}return null}i.Z.fromJSON(a.eG),n.Z.fromJSON(a.wW),r.Z.fromJSON(a.lj)},54914:function(e,t,o){o.d(t,{ET:function(){return l},I4:function(){return i},SQ:function(){return r},X1:function(){return n},eG:function(){return u},lF:function(){return a},lj:function(){return d},qP:function(){return s},wW:function(){return c}});const r=[252,146,31,255],n=[153,153,153,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},l={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},s={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},u={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},c={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},80300:function(e,t,o){o.d(t,{hM:function(){return u},C8:function(){return c},$s:function(){return d},eU:function(){return s}});var r=o(53147),n=(o(61432),o(96094)),i=o(27583);var l=o(57225),a=o(49466);function s(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function u(e,t){return c(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function c(e,t){if(null==e)return null;const o=null!=e.color?(0,i.nI)(r.Z.toUnitRGBA(e.color)):(0,i.al)(0,0,0,0),l=(0,n.F2)(e.size),s=(0,n.F2)(e.extensionLength);switch(e.type){case"solid":return d({color:o,size:l,extensionLength:s,...t});case"sketch":return u={color:o,size:l,extensionLength:s,...t},{...p,...u,type:a.Pb.Sketch};default:return}var u}function d(e){return{...f,...e,type:a.Pb.Solid}}const f={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.i.OPAQUE,hasSlicePlane:!1},p={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.i.OPAQUE,hasSlicePlane:!1}},72432:function(e,t,o){o.d(t,{F5:function(){return l},HB:function(){return a},a9:function(){return r}});var r,n,i=o(99574);function l(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function a(e,t,o){if(null==e||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const n=(0,i.uZ)(Math.round(e[3]*u),0,u),l=0===n||t===r.Tint?0:t===r.Replace?c:d;o[0]=(0,i.uZ)(Math.round(e[0]*s),0,s),o[1]=(0,i.uZ)(Math.round(e[1]*s),0,s),o[2]=(0,i.uZ)(Math.round(e[2]*s),0,s),o[3]=n+l}(n=r||(r={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const s=255,u=85,c=u,d=2*u},54998:function(e,t,o){o.d(t,{AD:function(){return x},_N:function(){return p},nO:function(){return g},Hz:function(){return b}});var r=o(79487),n=o(64497),i=o(92638),l=o(41044),a=o(45701),s=o(90285),u=o(48857),c=o(5998),d=o(92217);class f extends d.x{constructor(e,t){super(e,"int",c.P.Draw,((o,r,n)=>o.setUniform1i(e,t(r,n))))}}var p,y,m=o(29193),h=o(95285),v=o(52061);(y=p||(p={}))[y.Uniform=0]="Uniform",y[y.Varying=1]="Varying",y[y.COUNT=2]="COUNT";const b=429496.7296;function g(e,t){(0,n.I)(e/b*.5+.5,t)}function x(e,t){switch(t.componentData){case p.Varying:return function(e,t){const{vertex:o,fragment:r}=e;o.include(a.n),o.uniforms.add(new m.R("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(v.T.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const n=t.output===l.H_.ObjectAndLayerIdColor;n&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(i.A),o.constants.add("stride","float",(0,h.B)()?3:2),o.code.add(u.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
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
`)}(e,t);case p.Uniform:return function(e,t){const{vertex:o,fragment:r}=e;e.varyings.add("vExternalColor","vec4"),o.uniforms.add(new s.$("externalColor",(e=>e.componentParameters.externalColor))).code.add(u.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const n=t.output===l.H_.ObjectAndLayerIdColor;r.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(u.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,u.If)(n,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case p.COUNT:return;default:(0,r.Bg)(t.componentData)}}},92638:function(e,t,o){o.d(t,{A:function(){return i}});var r=o(72432),n=o(48857);function i(e){e.vertex.code.add(n.H`
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
  `)}},41044:function(e,t,o){var r;function n(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function i(e){return function(e){return m(e)||b(e)}(e)||e===r.Normal}function l(e){return v(e)||e===r.Normal}function a(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function s(e){return u(e)||a(e)}function u(e){return e===r.Color}function c(e){return u(e)||g(e)}function d(e){return u(e)||e===r.ObjectAndLayerIdColor}function f(e){return c(e)||e===r.ObjectAndLayerIdColor}function p(e){return u(e)||e===r.Highlight}function y(e){return p(e)||b(e)}function m(e){return u(e)||a(e)}function h(e){return c(e)||a(e)}function v(e){return h(e)||b(e)}function b(e){return e===r.Depth}function g(e){return e===r.ColorEmission}function x(e){switch(e){case r.Depth:case r.Shadow:case r.ShadowHighlight:case r.ShadowExcludeHighlight:case r.ViewshedShadow:return!0}return!1}o.d(t,{BX:function(){return b},CQ:function(){return d},D5:function(){return u},ED:function(){return l},Gy:function(){return a},H_:function(){return r},Jb:function(){return i},Kr:function(){return n},L_:function(){return m},Lk:function(){return f},Qo:function(){return h},Xo:function(){return y},bB:function(){return x},c1:function(){return c},f_:function(){return v},qC:function(){return g},xs:function(){return s}}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(r||(r={}))},57716:function(e,t,o){o.d(t,{O:function(){return s},r:function(){return r}});var r,n,i=o(79487),l=o(48857),a=o(52061);function s(e,t){switch(t.normalType){case r.Compressed:e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(l.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(l.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case r.COUNT:}}(n=r||(r={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.ScreenDerivative=2]="ScreenDerivative",n[n.COUNT=3]="COUNT"},28984:function(e,t,o){o.d(t,{$:function(){return i}});var r=o(13663),n=o(48857);function i({code:e,uniforms:t},o){t.add(new r.z("dpDummy",(()=>1))),e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}},45701:function(e,t,o){o.d(t,{n:function(){return n}});var r=o(48857);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
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
}`)}},80357:function(e,t,o){o.d(t,{B:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"vec3",r.P.Draw,((o,r,n,i)=>o.setUniform3fv(e,t(r,n,i))))}}},9535:function(e,t,o){o.d(t,{J:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"vec3",r.P.Pass,((o,r,n)=>o.setUniform3fv(e,t(r,n))))}}},90285:function(e,t,o){o.d(t,{$:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"vec4",r.P.Draw,((o,r,n)=>o.setUniform4fv(e,t(r,n))))}}},13663:function(e,t,o){o.d(t,{z:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"float",r.P.Bind,((o,r)=>o.setUniform1f(e,t(r))))}}},15727:function(e,t,o){o.d(t,{j:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"mat3",r.P.Draw,((o,r,n)=>o.setUniformMatrix3fv(e,t(r,n))))}}},57798:function(e,t,o){o.d(t,{c:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"mat3",r.P.Pass,((o,r,n)=>o.setUniformMatrix3fv(e,t(r,n))))}}},18489:function(e,t,o){o.d(t,{C:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"mat4",r.P.Bind,((o,r)=>o.setUniformMatrix4fv(e,t(r))))}}},29193:function(e,t,o){o.d(t,{R:function(){return i}});var r=o(5998),n=o(92217);class i extends n.x{constructor(e,t){super(e,"sampler2D",r.P.Draw,((o,r,n)=>o.bindTexture(e,t(r,n))))}}},48857:function(e,t,o){function r(e,...t){let o="";for(let r=0;r<t.length;r++)o+=e[r]+t[r];return o+=e[e.length-1],o}function n(e,t,o=""){return e?t:o}o.d(t,{H:function(){return r},If:function(){return n}}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r||(r={}))},95285:function(e,t,o){o.d(t,{B:function(){return n}});var r=o(61432);function n(){return!!(0,r.Z)("enable-feature:objectAndLayerId-rendering")}},57225:function(e,t,o){var r;o.d(t,{i:function(){return r}}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(r||(r={}))},49466:function(e,t,o){o.d(t,{G7:function(){return n},Pb:function(){return r},UR:function(){return b},lV:function(){return g}});var r,n,i,l=o(54998),a=o(57716),s=o(28984),u=o(45701),c=o(80357),d=o(9535),f=o(48857),p=o(15727),y=o(57798),m=o(18489),h=o(29193),v=o(52061);function b(e,t){const{vertex:o}=e;o.include(u.n),e.include(a.O,t);const{silhouette:r,legacy:n,spherical:i}=t;o.uniforms.add(new h.R("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(v.T.COMPONENTINDEX,"float");o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(f.H`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${f.H.float(3)}  * componentIndex + fieldOffset;
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
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${f.H.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${f.H.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${f.H.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${r?f.H`decompressNormal(normal2Compressed)`:f.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${f.H.float(l.Hz)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${f.H.float(8)} ),
        otherValue.y * 255.0 - ${f.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),n?o.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(o.uniforms.add(new p.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),o.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r?(e.attributes.add(v.T.NORMAL2COMPRESSED,"vec2"),o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),n?o.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(s.$,t),o.uniforms.add(new y.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new p.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new d.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new d.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),o.code.add(f.H`
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
    `)),o.uniforms.add(new m.C("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function g(e){return e===r.Sketch||e===r.Mixed}(i=r||(r={}))[i.Solid=0]="Solid",i[i.Sketch=1]="Sketch",i[i.Mixed=2]="Mixed",i[i.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(n||(n={}))},85754:function(e,t,o){o.d(t,{V5:function(){return i},e7:function(){return n},zc:function(){return l}});var r=o(76554);async function n(e,t=e.popupTemplate){if(null==t)return[];const o=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:i,typeIdField:l,globalIdField:a,relationships:s}=e;if(o.includes("*"))return["*"];const u=n?(0,r.CH)(e):[],c=(0,r.Q0)(e.fieldsIndex,[...o,...u]);return l&&c.push(l),c&&i&&e.fieldsIndex?.has(i)&&!c.includes(i)&&c.push(i),c&&a&&e.fieldsIndex?.has(a)&&!c.includes(a)&&c.push(a),s&&s.forEach((t=>{const{keyField:o}=t;c&&o&&e.fieldsIndex?.has(o)&&!c.includes(o)&&c.push(o)})),c}function i(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function l(e,t){return null!=i(e,{defaultPopupTemplateEnabled:t})}},5998:function(e,t,o){var r;o.d(t,{P:function(){return r}}),function(e){e[e.Bind=0]="Bind",e[e.Pass=1]="Pass",e[e.Draw=2]="Draw"}(r||(r={}))},92217:function(e,t,o){o.d(t,{x:function(){return n}});o(61432);var r=o(5998);class n{constructor(e,t,o,n,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[r.P.Bind]:null,[r.P.Pass]:null,[r.P.Draw]:null},n)switch(o){case void 0:break;case r.P.Bind:this.bind[r.P.Bind]=n;break;case r.P.Pass:this.bind[r.P.Pass]=n;break;case r.P.Draw:this.bind[r.P.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}}}]);