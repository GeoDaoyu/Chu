"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42439],{2875:function(e,t,n){n.d(t,{a:function(){return d},b:function(){return s},c:function(){return a},d:function(){return r},e:function(){return f},f:function(){return u},l:function(){return c},n:function(){return h},t:function(){return i}});var o=n(38461);n(61432),n(96711);function r(e,t,n){i(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function i(e,t,n,o=3,r=o){if(e.length/o!==Math.ceil(t.length/r))return e;const i=e.length/o,a=n[0],s=n[1],l=n[2],c=n[4],u=n[5],d=n[6],f=n[8],h=n[9],m=n[10],p=n[12],v=n[13],x=n[14];let y=0,g=0;for(let n=0;n<i;n++){const n=t[y],i=t[y+1],b=t[y+2];e[g]=a*n+c*i+f*b+p,e[g+1]=s*n+u*i+h*b+v,e[g+2]=l*n+d*i+m*b+x,y+=r,g+=o}return e}function a(e,t,n){s(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function s(e,t,n,o=3,r=o){if(e.length/o!==Math.ceil(t.length/r))return;const i=e.length/o,a=n[0],s=n[1],l=n[2],c=n[3],u=n[4],d=n[5],f=n[6],h=n[7],m=n[8];let p=0,v=0;for(let n=0;n<i;n++){const n=t[p],i=t[p+1],x=t[p+2];e[v]=a*n+c*i+f*x,e[v+1]=s*n+u*i+h*x,e[v+2]=l*n+d*i+m*x,p+=r,v+=o}}function l(e,t,n,o=3,r=o){const i=Math.min(e.length/o,t.length/r);let a=0,s=0;for(let l=0;l<i;l++)e[s]=n*t[a],e[s+1]=n*t[a+1],e[s+2]=n*t[a+2],a+=r,s+=o;return e}function c(e,t,n,o){u(e.typedBuffer,t.typedBuffer,n,o,e.typedBufferStride,t.typedBufferStride)}function u(e,t,n,r,i=3,a=i){const s=Math.min(e.length/i,t.length/a);let l=0,c=0;const u=1/o.jm;for(let o=0;o<s;o++)e[c]=r*(n*t[l])**u,e[c+1]=r*(n*t[l+1])**u,e[c+2]=r*(n*t[l+2])**u,l+=a,c+=i}function d(e,t,n,o=3,r=o){const i=e.length/o;if(i!==Math.ceil(t.length/r))return e;let a=0,s=0;for(let l=0;l<i;l++)e[s]=t[a]+n[0],e[s+1]=t[a+1]+n[1],e[s+2]=t[a+2]+n[2],a+=r,s+=o;return e}function f(e,t){h(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function h(e,t,n=3,o=n){const r=Math.min(e.length/n,t.length/o);let i=0,a=0;for(let s=0;s<r;s++){const r=t[i],s=t[i+1],l=t[i+2],c=r*r+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*r,e[a+1]=t*s,e[a+2]=t*l}i+=o,a+=n}}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:u,linearToSRGBView:c,normalize:h,normalizeView:f,scale:l,scaleView:function(e,t,n){l(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)},shiftRight:function(e,t,n){const o=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<o;e++)r[c]=a[l]>>n,r[c+1]=a[l+1]>>n,r[c+2]=a[l+2]>>n,l+=s,c+=i},transformMat3:s,transformMat3View:a,transformMat4:i,transformMat4View:r,translate:d},Symbol.toStringTag,{value:"Module"}))},37580:function(e,t,n){n.d(t,{q:function(){return l}});var o=n(3480),r=n(50702),i=n(96711),a=n(93568),s=n(82592);class l{constructor(e,t,n,o,r={}){this._mainMethod=t,this._transferLists=n,this._listeners=[],this._promise=(0,s.bA)(e,{...r,schedule:o}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>i.Z.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const n={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(n),this._connectListener(n),(0,r.kB)((()=>{n.removed=!0,(0,o.Od)(this._listeners,n),this._thread&&null!=n.threadHandle&&n.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t,n){return this.invokeMethod(this._mainMethod,e,t,n)}invokeMethod(e,t,n,o){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:n,priority:o})}return this._promise?this._promise.then((()=>((0,a.k_)(n),this.invokeMethod(e,t,n)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},25657:function(e,t,n){n.d(t,{Z:function(){return u}});var o,r=n(73440),i=n(89314),a=n(63255),s=n(17155),l=(n(61432),n(96711),n(83850),n(79775)),c=n(48023);let u=class extends(i.Z.ClonableMixin(a.Z)){static{o=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new o}};(0,r._)([(0,l.J)({georeferenced:"georeferenced"},{readOnly:!0})],u.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:[Number],nonNullable:!1,json:{write:!0}})],u.prototype,"origin",void 0),u=o=(0,r._)([(0,c.j)("esri.geometry.support.MeshGeoreferencedVertexSpace")],u)},93466:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(73440),r=n(89314),i=n(63255),a=n(17155),s=(n(61432),n(96711),n(83850),n(79775)),l=n(48023),c=n(82846);let u=class extends(r.Z.ClonableMixin(i.Z)){constructor(e){super(e),this.type="local",this.origin=(0,c.Ue)()}};(0,o._)([(0,s.J)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,o._)([(0,l.j)("esri.geometry.support.MeshLocalVertexSpace")],u)},94701:function(e,t,n){var o,r;n.d(t,{B:function(){return r},P:function(){return o}}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(o||(o={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(r||(r={}))},55656:function(e,t,n){n.d(t,{OV:function(){return f},S9:function(){return p},YQ:function(){return u},yF:function(){return d}});var o=n(96711),r=n(63974),i=n(82846),a=n(37580),s=n(13132),l=n(2051),c=n(94701);class u{constructor(e,t,n,o,r,i){this.layout=e,this.interleavedVertexData=t,this.indices=n,this.hasColors=o,this.hasModifications=r,this.positionData=i}}class d{constructor(e,t,n,o,r,i,a){this.componentOffsets=e,this.featureIds=t,this.anchorIds=n,this.anchors=o,this.transformedGeometry=r,this.globalTrafo=i,this.obb=a}}class f extends a.q{constructor(e){super("SceneLayerWorker","process",{process:e=>[e.geometryBuffer],project:e=>[e.positions.buffer],transformNormals:e=>[e.normals.buffer]},e,{hasInitialize:!0})}setModifications(e,t,n,o){const r={context:e,modifications:p(t,n,o),isGeodetic:o.isGeographic};this.broadcast(r,"setModifications")}setLegacySchema(e,t){const n=JSON.stringify(t);return this.broadcast({context:e,jsonSchema:n},"setLegacySchema")}destroyContext(e){return this.broadcast(e,"destroyContext")}project(e,t){return this.invokeMethod("project",e,t)}transformNormals(e,t){return this.invokeMethod("transformNormals",e,t)}}const h=new r.Z({deallocator:null}),m=(0,i.Ue)();function p(e,t,n){h.clear();let r=1/0,i=1/0,a=-1/0,u=-1/0,d=!1;for(const e of t){const t="clip"===e.type?c.B.Inside:"mask"===e.type?c.B.Outside:c.B.Replace,f=e.geometry;let p=e=>e;if(f.spatialReference){if(!(0,s.canProjectWithoutEngine)(f.spatialReference,n)){o.Z.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}p=e=>((0,l.S)(e,f.spatialReference,m,n),m)}else f.hasZ||(m[2]=0,p=e=>(m[0]=e[0],m[1]=e[1],m));d=d||t===c.B.Outside,h.push(t),h.push(f.rings.length);for(const e of f.rings){h.push(e.length);for(const t of e){const e=p(t);h.push(e[0]),h.push(e[1]),h.push(e[2]),r=Math.min(r,e[0]),i=Math.min(i,e[1]),a=Math.max(a,e[0]),u=Math.max(u,e[1])}}}if(null!=e)if(d){const t=1e-4;h.push(c.B.Inside),h.push(2),h.push(4),h.push(r-t),h.push(i-t),h.push(0),h.push(a+t),h.push(i-t),h.push(0),h.push(a+t),h.push(u+t),h.push(0),h.push(r-t),h.push(u+t),h.push(0),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0)}else h.push(c.B.Outside),h.push(1),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0);h.push(c.B.Finished);const f=new Float64Array(h.length);for(let e=0;e<h.length;++e)f[e]=h.at(e);return f}},16662:function(e,t,n){n.r(t),n.d(t,{destroyContext:function(){return M},dracoDecompressPointCloudData:function(){return p},filterObbsForModifications:function(){return v},filterObbsForModificationsSync:function(){return O},initialize:function(){return I},interpretObbModificationResults:function(){return T},process:function(){return m},project:function(){return g},setLegacySchema:function(){return y},setModifications:function(){return x},setModificationsSync:function(){return S},test:function(){return F},transformNormals:function(){return b}});var o=n(99574),r=n(45213),i=n(25657),a=n(93466),s=n(2875),l=n(94701),c=n(1800);function u(e){return(0,c.V)(`esri/libs/i3s/${e}`)}let d;var f=n(55656),h=n(23996);async function m(e){C=await _();const t=[e.geometryBuffer];return{result:R(C,e,t),transferList:t}}async function p(e){C=await _();const t=[e.geometryBuffer],{geometryBuffer:n}=e,o=n.byteLength,r=C._malloc(o),i=new Uint8Array(C.HEAPU8.buffer,r,o);i.set(new Uint8Array(n));const a=C.dracoDecompressPointCloudData(r,i.byteLength);if(C._free(r),a.error.length>0)throw new Error(`i3s.wasm: ${a.error}`);const s=a.featureIds?.length>0?a.featureIds.slice():null,l=a.positions.slice();return s&&t.push(s.buffer),t.push(l.buffer),{result:{positions:l,featureIds:s},transferList:t}}async function v(e){await _(),O(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function x(e){await _(),S(e)}async function y(e){C=await _(),C.setLegacySchema(e.context,e.jsonSchema)}async function g(e){const{localMatrix:t,origin:o,positions:s,vertexSpace:l}=e,c=r.Z.fromJSON(e.inSpatialReference),u=r.Z.fromJSON(e.outSpatialReference);let d;const[{projectBuffer:f},{initializeProjection:h}]=await Promise.all([Promise.resolve().then(n.bind(n,30146)),Promise.resolve().then(n.bind(n,13132))]);await h(c,u);const m=[0,0,0];if(!f(o,c,0,m,u,0))throw new Error("Failed to project");if("georeferenced"===l.type&&null==l.origin){if(d=new Float64Array(s.length),!f(s,c,0,d,u,0,d.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===l.type?i.Z.fromJSON(l):a.Z.fromJSON(l),{projectMeshVertexPositions:o}=await n.e(98639).then(n.bind(n,98639)),r=o({vertexAttributes:{position:s},transform:t?{localMatrix:t}:void 0,vertexSpace:e,spatialReference:c},u);if(!r)throw new Error("Failed to project");d=r}const p=d.length,[v,x,y]=m;for(let e=0;e<p;e+=3)d[e]-=v,d[e+1]-=x,d[e+2]-=y;return{result:{projected:d,original:s,projectedOrigin:m},transferList:[d.buffer,s.buffer]}}async function b({normalMatrix:e,normals:t}){const n=new Float32Array(t.length);return(0,s.b)(n,t,e),(0,o.oc)(e)&&(0,s.n)(n,n),{result:{transformed:n,original:t},transferList:[n.buffer,t.buffer]}}function M(e){A(e)}let w,C;function S(e){if(!C)return;const t=e.modifications,n=C._malloc(8*t.length),o=new Float64Array(C.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)o[e]=t[e];C.setModifications(e.context,n,t.length,e.isGeodetic),C._free(n)}function R(e,t,n){const{context:o,globalTrafo:r,mbs:i,obbData:a,elevationOffset:s,geometryBuffer:c,geometryDescriptor:u,indexToVertexProjector:d,vertexToRenderProjector:h}=t,m=e._malloc(c.byteLength),p=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),v=new Uint8Array(e.HEAPU8.buffer,m,c.byteLength);v.set(new Uint8Array(c));const x=new Float64Array(e.HEAPU8.buffer,p,33);P(x,[NaN,NaN,NaN]);let y=x.byteOffset+3*x.BYTES_PER_ELEMENT,g=new Float64Array(x.buffer,y);P(g,r),y+=16*x.BYTES_PER_ELEMENT,g=new Float64Array(x.buffer,y),P(g,i),y+=4*x.BYTES_PER_ELEMENT,a&&(g=new Float64Array(x.buffer,y),P(g,a));const b=u,M={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:b.featureIndex},w=e.process(o,!!t.obbData,m,v.byteLength,b,M,p,s,d,h,t.normalReferenceFrame);if(e._free(p),e._free(m),w.error.length>0)throw new Error(`i3s.wasm: ${w.error}`);if(w.discarded)return null;const C=w.componentOffsets.length>0?w.componentOffsets.slice():null,S=w.featureIds.length>0?w.featureIds.slice():null,R=w.anchorIds.length>0?Array.from(w.anchorIds):null,T=w.anchors.length>0?Array.from(w.anchors):null,O=w.interleavedVertedData.slice().buffer,A=w.indicesType===l.P.Int16?new Uint16Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/2).slice():new Uint32Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/4).slice(),I=w.positions.slice(),{buffer:_,byteOffset:F,byteLength:E}=w.positionIndices,L=w.positionIndicesType===l.P.Int16?new Uint16Array(_,F,E/2).slice():new Uint32Array(_,F,E/4).slice(),N=new f.YQ(t.layouts[0],O,A,w.hasColors,w.hasModifications,{data:I,indices:L});return S&&n.push(S.buffer),C&&n.push(C.buffer),n.push(O),n.push(A.buffer),n.push(I.buffer),n.push(L.buffer),new f.yF(C,S,R,T,N,r,w.obb)}function T(e){return 0===e?h.O4.Unmodified:1===e?h.O4.PotentiallyModified:2===e?h.O4.Culled:h.O4.Unknown}function O(e){if(!C)return;const{context:t,buffer:n}=e,o=C._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(C.HEAPU8.buffer,o,r),a=new Float64Array(n);i.set(a),C.filterOBBs(t,o,r),a.set(i),C._free(o)}function A(e){C&&0===C.destroy(e)&&(C=null)}function P(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function I(){C||await _()}async function _(){return C||(C=await(w??=(d||(d=new Promise((e=>n.e(22048).then(n.bind(n,22048)).then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:u,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),d))),C}const F={transform:(e,t)=>C&&R(C,e,t),destroy:A}},23996:function(e,t,n){n.d(t,{$i:function(){return h},FE:function(){return s},Hw:function(){return i},NB:function(){return m},O4:function(){return r},U_:function(){return o},oQ:function(){return p},w5:function(){return a}});var o,r,i,a,s,l,c=n(27583),u=n(69055),d=n(52695),f=n(71298);class h extends f.r{constructor(e,t){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=t,this.serviceMbsInRenderSR=(0,u.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){(0,d.WD)(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}(l=o||(o={}))[l.Unmodified=0]="Unmodified",l[l.Culled=1]="Culled",l[l.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class m extends h{constructor(e,t,n,o,a,s,l,u,d,f){super(e,n),this.index=t,this.childCount=o,this.level=a,this.resources=s,this.version=l,this.lodMetric=u,this.maxError=d,this.numFeatures=f,this.failed=!1,this.cacheState=i.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked,this.elevationAgnosticBoundingVolume=(0,c.al)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(s||(s={}));class p{constructor(e,t,n,o){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=o}}},80300:function(e,t,n){n.d(t,{hM:function(){return c},C8:function(){return u},$s:function(){return d},eU:function(){return l}});var o=n(53147),r=(n(61432),n(96094)),i=n(27583);var a=n(57225),s=n(49466);function l(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function c(e,t){return u(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function u(e,t){if(null==e)return null;const n=null!=e.color?(0,i.nI)(o.Z.toUnitRGBA(e.color)):(0,i.al)(0,0,0,0),a=(0,r.F2)(e.size),l=(0,r.F2)(e.extensionLength);switch(e.type){case"solid":return d({color:n,size:a,extensionLength:l,...t});case"sketch":return c={color:n,size:a,extensionLength:l,...t},{...h,...c,type:s.Pb.Sketch};default:return}var c}function d(e){return{...f,...e,type:s.Pb.Solid}}const f={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.i.OPAQUE,hasSlicePlane:!1},h={color:(0,i.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.i.OPAQUE,hasSlicePlane:!1}},72432:function(e,t,n){n.d(t,{F5:function(){return a},HB:function(){return s},a9:function(){return o}});var o,r,i=n(99574);function a(e){switch(e){case"multiply":default:return o.Multiply;case"ignore":return o.Ignore;case"replace":return o.Replace;case"tint":return o.Tint}}function s(e,t,n){if(null==e||t===o.Ignore)return n[0]=255,n[1]=255,n[2]=255,void(n[3]=255);const r=(0,i.uZ)(Math.round(e[3]*c),0,c),a=0===r||t===o.Tint?0:t===o.Replace?u:d;n[0]=(0,i.uZ)(Math.round(e[0]*l),0,l),n[1]=(0,i.uZ)(Math.round(e[1]*l),0,l),n[2]=(0,i.uZ)(Math.round(e[2]*l),0,l),n[3]=r+a}(r=o||(o={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const l=255,c=85,u=c,d=2*c},71298:function(e,t,n){n.d(t,{r:function(){return o}});class o{constructor(e=1/0,t=-1/0){this.elevationRangeMin=e,this.elevationRangeMax=t}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,t){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,t)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}},54998:function(e,t,n){n.d(t,{AD:function(){return b},_N:function(){return h},nO:function(){return g},Hz:function(){return y}});var o=n(79487),r=n(64497),i=n(92638),a=n(41044),s=n(45701),l=n(90285),c=n(48857),u=n(5998),d=n(92217);class f extends d.x{constructor(e,t){super(e,"int",u.P.Draw,((n,o,r)=>n.setUniform1i(e,t(o,r))))}}var h,m,p=n(29193),v=n(95285),x=n(52061);(m=h||(h={}))[m.Uniform=0]="Uniform",m[m.Varying=1]="Varying",m[m.COUNT=2]="COUNT";const y=429496.7296;function g(e,t){(0,r.I)(e/y*.5+.5,t)}function b(e,t){switch(t.componentData){case h.Varying:return function(e,t){const{vertex:n,fragment:o}=e;n.include(s.n),n.uniforms.add(new p.R("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(x.T.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const r=t.output===a.H_.ObjectAndLayerIdColor;r&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(i.A),n.constants.add("stride","float",(0,v.B)()?3:2),n.code.add(c.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),n.code.add(c.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${c.H.float(y)};
  }

  ${r?c.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:c.H`void forwardObjectAndLayerIdColor() {}`}

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
`),o.code.add(c.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${r?c.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,t);case h.Uniform:return function(e,t){const{vertex:n,fragment:o}=e;e.varyings.add("vExternalColor","vec4"),n.uniforms.add(new l.$("externalColor",(e=>e.componentParameters.externalColor))).code.add(c.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const r=t.output===a.H_.ObjectAndLayerIdColor;o.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(c.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,c.If)(r,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case h.COUNT:return;default:(0,o.Bg)(t.componentData)}}},92638:function(e,t,n){n.d(t,{A:function(){return i}});var o=n(72432),r=n(48857);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(o.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(o.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(o.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(o.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},41044:function(e,t,n){var o;function r(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function i(e){return function(e){return p(e)||y(e)}(e)||e===o.Normal}function a(e){return x(e)||e===o.Normal}function s(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function l(e){return c(e)||s(e)}function c(e){return e===o.Color}function u(e){return c(e)||g(e)}function d(e){return c(e)||e===o.ObjectAndLayerIdColor}function f(e){return u(e)||e===o.ObjectAndLayerIdColor}function h(e){return c(e)||e===o.Highlight}function m(e){return h(e)||y(e)}function p(e){return c(e)||s(e)}function v(e){return u(e)||s(e)}function x(e){return v(e)||y(e)}function y(e){return e===o.Depth}function g(e){return e===o.ColorEmission}function b(e){switch(e){case o.Depth:case o.Shadow:case o.ShadowHighlight:case o.ShadowExcludeHighlight:case o.ViewshedShadow:return!0}return!1}n.d(t,{BX:function(){return y},CQ:function(){return d},D5:function(){return c},ED:function(){return a},Gy:function(){return s},H_:function(){return o},Jb:function(){return i},Kr:function(){return r},L_:function(){return p},Lk:function(){return f},Qo:function(){return v},Xo:function(){return m},bB:function(){return b},c1:function(){return u},f_:function(){return x},qC:function(){return g},xs:function(){return l}}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(o||(o={}))},57716:function(e,t,n){n.d(t,{O:function(){return l},r:function(){return o}});var o,r,i=n(79487),a=n(48857),s=n(52061);function l(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case o.COUNT:}}(r=o||(o={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},28984:function(e,t,n){n.d(t,{$:function(){return i}});var o=n(13663),r=n(48857);function i({code:e,uniforms:t},n){t.add(new o.z("dpDummy",(()=>1))),e.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}},45701:function(e,t,n){n.d(t,{n:function(){return r}});var o=n(48857);function r(e){e.code.add(o.H`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(o.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(o.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},80357:function(e,t,n){n.d(t,{B:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"vec3",o.P.Draw,((n,o,r,i)=>n.setUniform3fv(e,t(o,r,i))))}}},9535:function(e,t,n){n.d(t,{J:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"vec3",o.P.Pass,((n,o,r)=>n.setUniform3fv(e,t(o,r))))}}},90285:function(e,t,n){n.d(t,{$:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"vec4",o.P.Draw,((n,o,r)=>n.setUniform4fv(e,t(o,r))))}}},13663:function(e,t,n){n.d(t,{z:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"float",o.P.Bind,((n,o)=>n.setUniform1f(e,t(o))))}}},16924:function(e,t,n){n.d(t,{j:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"mat3",o.P.Draw,((n,o,r)=>n.setUniformMatrix3fv(e,t(o,r))))}}},57798:function(e,t,n){n.d(t,{c:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"mat3",o.P.Pass,((n,o,r)=>n.setUniformMatrix3fv(e,t(o,r))))}}},18489:function(e,t,n){n.d(t,{C:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"mat4",o.P.Bind,((n,o)=>n.setUniformMatrix4fv(e,t(o))))}}},29193:function(e,t,n){n.d(t,{R:function(){return i}});var o=n(5998),r=n(92217);class i extends r.x{constructor(e,t){super(e,"sampler2D",o.P.Draw,((n,o,r)=>n.bindTexture(e,t(o,r))))}}},48857:function(e,t,n){function o(e,...t){let n="";for(let o=0;o<t.length;o++)n+=e[o]+t[o];return n+=e[e.length-1],n}function r(e,t,n=""){return e?t:n}n.d(t,{H:function(){return o},If:function(){return r}}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},95285:function(e,t,n){n.d(t,{B:function(){return r}});var o=n(61432);function r(){return!!(0,o.Z)("enable-feature:objectAndLayerId-rendering")}},57225:function(e,t,n){var o;n.d(t,{i:function(){return o}}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(o||(o={}))},49466:function(e,t,n){n.d(t,{G7:function(){return r},Pb:function(){return o},UR:function(){return y},lV:function(){return g}});var o,r,i,a=n(54998),s=n(57716),l=n(28984),c=n(45701),u=n(80357),d=n(9535),f=n(48857),h=n(16924),m=n(57798),p=n(18489),v=n(29193),x=n(52061);function y(e,t){const{vertex:n}=e;n.include(c.n),e.include(s.O,t);const{silhouette:o,legacy:r,spherical:i}=t;n.uniforms.add(new v.R("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(x.T.COMPONENTINDEX,"float");n.constants.add("lineWidthFractionFactor","float",8),n.constants.add("extensionLengthOffset","float",128),n.code.add(f.H`
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
      vec3 normal2 = ${o?f.H`decompressNormal(normal2Compressed)`:f.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${f.H.float(a.Hz)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${f.H.float(8)} ),
        otherValue.y * 255.0 - ${f.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),r?n.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(n.uniforms.add(new h.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),n.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),o?(e.attributes.add(x.T.NORMAL2COMPRESSED,"vec2"),n.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):n.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),r?n.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(n.include(l.$,t),n.uniforms.add(new m.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new h.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new u.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new u.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new d.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new d.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),n.code.add(f.H`
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
    `)),n.uniforms.add(new p.C("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),n.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function g(e){return e===o.Sketch||e===o.Mixed}(i=o||(o={}))[i.Solid=0]="Solid",i[i.Sketch=1]="Sketch",i[i.Mixed=2]="Mixed",i[i.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(r||(r={}))},5998:function(e,t,n){var o;n.d(t,{P:function(){return o}}),function(e){e[e.Bind=0]="Bind",e[e.Pass=1]="Pass",e[e.Draw=2]="Draw"}(o||(o={}))},92217:function(e,t,n){n.d(t,{x:function(){return r}});n(61432);var o=n(5998);class r{constructor(e,t,n,r,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[o.P.Bind]:null,[o.P.Pass]:null,[o.P.Draw]:null},r)switch(n){case void 0:break;case o.P.Bind:this.bind[o.P.Bind]=r;break;case o.P.Pass:this.bind[o.P.Pass]=r;break;case o.P.Draw:this.bind[o.P.Draw]=r}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}}}]);