"use strict";(self.webpackChunkscene_pro=self.webpackChunkscene_pro||[]).push([[23776],{93191:function(e,t,n){n.d(t,{I:function(){return x},a:function(){return w},b:function(){return g}});var r=n(41044),o=n(27349),i=n(2679),a=n(68647),c=n(7086),s=n(13743),l=n(96541),u=n(85119),f=n(48857),d=n(34709),p=n(52061),v=n(75047),h=n(74826),m=n(15150);class w extends h.K{}function g(e){const t=new m.kG,{vertex:n,fragment:h,varyings:w}=t,{output:g,perspectiveInterpolation:x}=e;return(0,l.Sv)(n,e),t.include(i.w,e),t.include(c.H,e),t.fragment.include(o.f5,e),t.include(a.R,e),t.include(v.j,e),t.attributes.add(p.T.POSITION,"vec3"),t.attributes.add(p.T.UV0,"vec2"),x&&t.attributes.add(p.T.PERSPECTIVEDIVIDE,"float"),n.main.add(f.H`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,f.If)(x,"gl_Position *= perspectiveDivide;")}`),w.add("vpos","vec3",{invariant:!0}),w.add("vTexCoord","vec2"),h.include(s.Y),h.uniforms.add(new u.p("opacity",(e=>e.opacity)),new d.A("tex",(e=>e.glTexture))).main.add(f.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${(0,f.If)(g===r.H_.ObjectAndLayerIdColor,"fragColor = vec4(0, 0, 0, 1); return;")}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),t}const x=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:w,build:g},Symbol.toStringTag,{value:"Module"}))},64497:function(e,t,n){n.d(t,{I:function(){return o},v:function(){return i}});var r=n(99574);function o(e,t,n=0){const o=(0,r.uZ)(e,0,s);for(let e=0;e<4;e++)t[n+e]=Math.floor(256*l(o*a[e]))}function i(e,t=0){let n=0;for(let r=0;r<4;r++)n+=e[t+r]*c[r];return n}const a=[1,256,65536,16777216],c=[1/256,1/65536,1/16777216,1/4294967296],s=i(new Uint8ClampedArray([255,255,255,255]));function l(e){return e-Math.floor(e)}},83695:function(e,t,n){function r(){return[1,0,0,1,0,0]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5]]}n.d(t,{Ue:function(){return r},Wd:function(){return i},d9:function(){return o}});const i=[1,0,0,1,0,0];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,fromValues:function(e,t,n,r,o,i){return[e,t,n,r,o,i]}},Symbol.toStringTag,{value:"Module"}))},50639:function(e,t,n){n.d(t,{Iu:function(){return l},Jp:function(){return a},U1:function(){return c},U_:function(){return i},Us:function(){return u},bA:function(){return s},vc:function(){return d},xJ:function(){return f},yR:function(){return o}});var r=n(66130);function o(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function i(e,t){const n=t[0],r=t[1],o=t[2],i=t[3],a=t[4],c=t[5];let s=n*i-r*o;return s?(s=1/s,e[0]=i*s,e[1]=-r*s,e[2]=-o*s,e[3]=n*s,e[4]=(o*c-i*a)*s,e[5]=(r*a-n*c)*s,e):null}function a(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],c=t[4],s=t[5],l=n[0],u=n[1],f=n[2],d=n[3],p=n[4],v=n[5];return e[0]=r*l+i*u,e[1]=o*l+a*u,e[2]=r*f+i*d,e[3]=o*f+a*d,e[4]=r*p+i*v+c,e[5]=o*p+a*v+s,e}function c(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],c=t[4],s=t[5],l=Math.sin(n),u=Math.cos(n);return e[0]=r*u+i*l,e[1]=o*u+a*l,e[2]=r*-l+i*u,e[3]=o*-l+a*u,e[4]=c,e[5]=s,e}function s(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],c=t[4],s=t[5],l=n[0],u=n[1];return e[0]=r*l,e[1]=o*l,e[2]=i*u,e[3]=a*u,e[4]=c,e[5]=s,e}function l(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],c=t[4],s=t[5],l=n[0],u=n[1];return e[0]=r,e[1]=o,e[2]=i,e[3]=a,e[4]=r*l+i*u+c,e[5]=o*l+a*u+s,e}function u(e,t){const n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function f(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function d(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function p(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}const v=a,h=p;Object.freeze(Object.defineProperty({__proto__:null,add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},determinant:function(e){return e[0]*e[3]-e[1]*e[2]},equals:function(e,t){const n=e[0],o=e[1],i=e[2],a=e[3],c=e[4],s=e[5],l=t[0],u=t[1],f=t[2],d=t[3],p=t[4],v=t[5],h=(0,r.bn)();return Math.abs(n-l)<=h*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-u)<=h*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-f)<=h*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(a-d)<=h*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(c-p)<=h*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-v)<=h*Math.max(1,Math.abs(s),Math.abs(v))},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)},fromRotation:u,fromScaling:f,fromTranslation:d,identity:o,invert:i,mul:v,multiply:a,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e},rotate:c,scale:s,set:function(e,t,n,r,o,i,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=o,e[4]=i,e[5]=a,e},str:function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},sub:h,subtract:p,translate:l},Symbol.toStringTag,{value:"Module"}))},85881:function(e,t,n){n.d(t,{F$:function(){return a},G7:function(){return l},HG:function(){return d},Mm:function(){return f},Qi:function(){return p},YL:function(){return o},YN:function(){return u},du:function(){return i},kk:function(){return c}});var r=n(59384);function o(e){return 32+e.length}const i=16;function a(e){if(!e)return 0;let t=f;for(const n in e)e.hasOwnProperty(n)&&(t+=s(e[n],!1));return t}function c(e){if(!e)return 0;if("number"==typeof e[0])return l(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return u(e,8);let n=d;for(let r=0;r<t;r++)n+=s(e[r]);return n}(e);let t=f;for(const n in e)e.hasOwnProperty(n)&&(t+=s(e[n]));return t}function s(e,t=!0){switch(typeof e){case"object":return t?c(e):f;case"string":return o(e);case"number":return i;case"boolean":return 4;default:return 8}}function l(...e){return e.reduce(((e,t)=>e+(t?(0,r.fU)(t)?t.byteLength+p:Array.isArray(t)?u(t,i):0:0)),0)}function u(e,t){return d+e.length*t}const f=32,d=16,p=145},27936:function(e,t,n){function r(e){return"point"===e.type}n.d(t,{f:function(){return r}})},36027:function(e,t,n){n.d(t,{$o:function(){return y},Go:function(){return T},Si:function(){return V},Uu:function(){return P},WR:function(){return O},ZL:function(){return C},_Z:function(){return M},bD:function(){return b},bh:function(){return S},zE:function(){return w}});var r=n(26636),o=n(31865),i=n(10934),a=n(82846),c=n(73749),s=n(27583),l=n(13132),u=n(16447),f=n(47566),d=n(69372),p=n(28931),v=n(52861),h=n(60856),m=n(74774);function w(e,t){if("point"===e.type)return x(e,t,!1);if((0,m.Ou)(e))switch(e.type){case"extent":return x(e.center,t,!1);case"polygon":return x(e.centroid,t,!1);case"polyline":return x(g(e),t,!0);case"mesh":return x((0,v.rU)(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return x(function(e){return(0,h.T)(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),null!=e.zmin&&null!=e.zmax&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e),t,!0);case"polygon":return x(function(e){const t=e.rings[0];if(!t||0===t.length)return null;const n=(0,d.a)(e.rings,!!e.hasZ);return(0,h.T)(n[0],n[1],n[2],e.spatialReference)}(e),t,!0);case"polyline":return x(g(e),t,!0);case"multipoint":return}}function g(e){const t=e.paths[0];if(!t||0===t.length)return null;const n=(0,p.n8)(t,(0,p.ok)(t)/2);return(0,h.T)(n[0],n[1],n[2],e.spatialReference)}function x(e,t,n){const r=n?e:(0,m.WG)(e);return t&&e?(0,l.projectPoint)(e,r,t)?r:null:r}function O(e){if(!e)return 0;switch(e.type){case"point":return e.z;case"extent":return e.zmax;case"polygon":return e.hasZ?e.rings.reduce(((e,t)=>t.reduce(((e,t)=>Math.max(e,t[2])),e)),-1/0):void 0;case"polyline":return e.hasZ?e.paths.reduce(((e,t)=>t.reduce(((e,t)=>Math.max(e,t[2])),e)),-1/0):void 0;case"mesh":return e.extent.zmax;case"multipoint":return}}function T(e,t,n,r=0){if(e){t||(t=(0,f.Ue)());const o=e;let i=.5*o.width*(n-1),a=.5*o.height*(n-1);return o.width<1e-7*o.height?i+=a/20:o.height<1e-7*o.width&&(a+=i/20),(0,c.s)(t,o.xmin-i-r,o.ymin-a-r,o.xmax+i+r,o.ymax+a+r),t}return null}function P(e,t,n=null){const r=(0,s.d9)(s.hq);return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!=t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),r}function y(e,t,n,r,o,i){for(let t=0;t<3;++t)i[t]=null!=e?.[t]?e[t]:null!=n?.[t]?n[t]:o[t];return i[3]=null!=t?t:null!=r?r:o[3],i}function b(e=a.hq,t,n,r=1){const o=new Array(3);if(null==t||null==n)o[0]=1,o[1]=1,o[2]=1;else{let r,i=0;for(let a=2;a>=0;a--){const c=e[a],s=null!=c,l=0===a&&!r&&!s,u=n[a];let f;"symbol-value"===c||l?f=0!==u?t[a]/u:1:s&&"proportional"!==c&&isFinite(c)&&(f=0!==u?c/u:1),null!=f&&(o[a]=f,r=f,i=Math.max(i,Math.abs(f)))}for(let e=2;e>=0;e--)null==o[e]?o[e]=r:0===o[e]&&(o[e]=.001*i)}for(let e=2;e>=0;e--)o[e]/=r;return(0,a.nI)(o)}function S(e){return C(function(e){return null!=e.isPrimitive}(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function C(e){const t=e=>null==e||e>=0;return Array.isArray(e)?e.every(t):t(e)}function M(e,t,n,r=(0,i.Ue)()){return e&&(0,o.jI)(r,r,-e/180*Math.PI),t&&(0,o.lM)(r,r,t/180*Math.PI),n&&(0,o.uD)(r,r,n/180*Math.PI),r}function V(e,t,n){if(null!=n.minDemResolution)return n.minDemResolution;const o=(0,r.c9)(t),i=(0,u.bf)(e)*o,a=(0,u.Ye)(e)*o,c=(0,u.Cb)(e)*(t.isGeographic?1:o);return 0===i&&0===a&&0===c?n.minDemResolutionForPoints:.01*Math.max(i,a,c)}},70662:function(e,t,n){n.d(t,{Lm:function(){return c},Zu:function(){return s},bA:function(){return l},qj:function(){return u}});var r=n(41044),o=n(92684),i=n(37124),a=n(48857);function c(e){e.varyings.add("linearDepth","float",{invariant:!0})}function s(e){e.vertex.uniforms.add(new i.$("nearFar",(e=>e.camera.nearFar)))}function l(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:n}=e;switch(t.output){case r.H_.Color:case r.H_.ColorEmission:if(t.receiveShadows)return c(e),void n.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case r.H_.Shadow:case r.H_.ShadowHighlight:case r.H_.ShadowExcludeHighlight:case r.H_.ViewshedShadow:return e.include(o.up,t),c(e),s(e),l(e),void n.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}n.code.add(a.H`void forwardLinearDepth() {}`)}},2679:function(e,t,n){n.d(t,{w:function(){return i}});var r=n(70662),o=n(48857);function i(e){(0,r.bA)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},56335:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48857),o=n(52061);function i(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},92684:function(e,t,n){n.d(t,{OU:function(){return w},su:function(){return m},up:function(){return h}});var r=n(30748),o=n(10934),i=n(82846),a=n(28984),c=n(80357),s=n(9535),l=n(48857),u=n(15727),f=n(57798),d=n(95334),p=n(52061),v=n(74826);function h(e,t){const{attributes:n,vertex:r,varyings:o,fragment:i}=e;r.include(a.$,t),n.add(p.T.POSITION,"vec3"),o.add("vPositionWorldCameraRelative","vec3"),o.add("vPosition_view","vec3",{invariant:!0}),r.uniforms.add(new s.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new s.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new f.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new d.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(l.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * position;
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?l.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),i.uniforms.add(new s.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(l.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),i.code.add(l.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class m extends v.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,i.Ue)(),this.transformWorldFromViewTL=(0,i.Ue)(),this.transformViewFromCameraRelativeRS=(0,r.Ue)(),this.transformProjFromView=(0,o.Ue)()}}class w extends v.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,r.Ue)(),this.transformWorldFromModelTH=(0,i.Ue)(),this.transformWorldFromModelTL=(0,i.Ue)()}}},27897:function(e,t,n){n.d(t,{L:function(){return l},V:function(){return f}});var r=n(73749),o=n(27583),i=n(39863),a=n(96541),c=n(2013),s=n(48857);function l(e,t){const n=e.vertex;t.hasVerticalOffset?(f(n),t.hasScreenSizePerspective&&(e.include(i.cK),(0,i.m8)(n),(0,a.hY)(e.vertex,t)),n.code.add(s.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:s.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):n.code.add(s.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,o.Ue)();function f(e){e.uniforms.add(new c.N("verticalOffset",((e,t)=>{const{minWorldLength:n,maxWorldLength:o,screenLength:i}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),c=t.camera.pixelRatio||1;return(0,r.s)(u,i*c,a,n,o)})))}},89755:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(79729),o=n(48857);function i(e){e.uniforms.add(new r.U("alignPixelEnabled",(e=>e.alignPixelEnabled))),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},19615:function(e,t,n){n.d(t,{R:function(){return d},c:function(){return f}});var r=n(27897),o=n(39863),i=n(96541),a=n(23027),c=n(13663),s=n(85119),l=n(48857),u=n(52061);const f=.5;function d(e,t){e.include(o.cK),e.attributes.add(u.T.POSITION,"vec3"),e.attributes.add(u.T.NORMAL,"vec3"),e.attributes.add(u.T.CENTEROFFSETANDDISTANCE,"vec4");const n=e.vertex;(0,i.Sv)(n,t),(0,i.hY)(n,t),n.uniforms.add(new a.$("viewport",(e=>e.camera.fullViewport)),new s.p("polygonOffset",(e=>e.shaderPolygonOffset)),new c.z("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),t.hasVerticalOffset&&(0,r.V)(n),n.code.add(l.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(l.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?l.H.float(0):l.H`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||(0,i._8)(n),t.draped||(n.uniforms.add(new c.z("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(l.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${l.H.float(f)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&(0,i.ZI)(n),t.hasScreenSizePerspective&&(0,o.m8)(n),n.code.add(l.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?l.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":l.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},42609:function(e,t,n){n.d(t,{P:function(){return l}});var r=n(89755),o=n(29158),i=n(23027),a=n(13663),c=n(48857),s=n(71063);function l(e){e.vertex.uniforms.add(new a.z("renderTransparentlyOccludedHUD",(e=>e.hudRenderStyle===o.U.Occluded?1:e.hudRenderStyle===o.U.NotOccluded?0:.75)),new i.$("viewport",(e=>e.camera.fullViewport)),new s.e("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),e.vertex.include(r.H),e.vertex.code.add(c.H`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}},45701:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(48857);function o(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
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
}`)}},39863:function(e,t,n){n.d(t,{cK:function(){return c},m8:function(){return l},ww:function(){return s}});var r=n(24910),o=n(82846),i=n(9535),a=n(48857);function c(e){e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function s(e){e.uniforms.add(new i.J("screenSizePerspective",(e=>u(e.screenSizePerspective))))}function l(e){e.uniforms.add(new i.J("screenSizePerspectiveAlignment",(e=>u(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function u(e){return(0,r.i)(f,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const f=(0,o.Ue)()},90285:function(e,t,n){n.d(t,{$:function(){return i}});var r=n(5998),o=n(92217);class i extends o.x{constructor(e,t){super(e,"vec4",r.P.Draw,((n,r,o)=>n.setUniform4fv(e,t(r,o))))}}},61442:function(e,t,n){n.d(t,{e:function(){return o},o:function(){return r}});class r{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerViewUids=[],this.store=o.ALL,this.normalRequired=!0,this.excludeLabels=!1}}var o;!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(o||(o={}))},32033:function(e,t,n){n.d(t,{n:function(){return d},x:function(){return f}});var r=n(31865),o=n(10934),i=n(24910),a=n(82846),c=n(73749),s=n(27583),l=n(12659),u=n(19821);class f{get ray(){return this._ray}get distanceInRenderSpace(){return null==this.distance?null:((0,i.g)(p,this.ray.direction,this.distance),(0,i.l)(p))}withinDistance(e){return!!d(this)&&this.distanceInRenderSpace<=e}getIntersectionPoint(e){return!!d(this)&&((0,i.g)(p,this.ray.direction,this.distance),(0,i.f)(e,this.ray.origin,p),!0)}getTransformedNormal(e){return(0,i.c)(v,this.normal),v[3]=0,(0,c.t)(v,v,this.transformation),(0,i.c)(e,v),(0,i.n)(e,e)}constructor(e){this.intersector=u.q.OBJECT,this.normal=(0,a.Ue)(),this.transformation=(0,o.Ue)(),this._ray=(0,l.Ue)(),this.init(e)}init(e){this.distance=this.target=this.drapedLayerOrder=this.renderPriority=null,this.intersector=u.q.OBJECT,(0,l.JG)(e,this._ray)}set(e,t,n,c,s,l,u){this.intersector=e,this.distance=n,(0,i.c)(this.normal,c??a.eG),(0,r.JG)(this.transformation,s??o.Wd),this.target=t,this.drapedLayerOrder=l,this.renderPriority=u}copy(e){(0,l.JG)(e.ray,this._ray),this.intersector=e.intersector,this.distance=e.distance,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.renderPriority=e.renderPriority,(0,i.c)(this.normal,e.normal),(0,r.JG)(this.transformation,e.transformation)}}function d(e){return null!=e?.distance}const p=(0,a.Ue)(),v=(0,s.Ue)()},19821:function(e,t,n){var r;n.d(t,{q:function(){return r}}),function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"}(r||(r={}))},87807:function(e,t,n){n.d(t,{Bw:function(){return f},CN:function(){return h},ET:function(){return m},Fw:function(){return A},IG:function(){return w},Tw:function(){return V},Ue:function(){return M},ko:function(){return g},sT:function(){return l}});var r=n(24910),o=n(82846),i=n(16447),a=n(52964),c=n(61719),s=n(52061);class l{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const u=(0,i.Ue)();function f(e,t,n,o,i,u){if(!e.visible)return;const f=(0,r.a)(R,o,n),d=(e,t,n)=>{u(e,n,t)},v=new l(!1,t.options.normalRequired);if(e.boundingInfo){(0,c.hu)(e.type===a.V.Mesh);const r=t.tolerance;p(e.boundingInfo,n,f,r,i,v,d)}else{const t=e.attributes.get(s.T.POSITION),r=t.indices;x(n,f,0,r.length/3,r,t.data,t.stride,i,v,d)}}const d=(0,o.Ue)();function p(e,t,n,o,a,c,s){if(null==e)return;const l=function(e,t){return(0,r.i)(t,1/e[0],1/e[1],1/e[2])}(n,d);if((0,i.op)(u,e.bbMin),(0,i.Tn)(u,e.bbMax),null!=a&&a.applyToAabb(u),V(u,t,l,o)){const{primitiveIndices:r,position:i}=e,l=r?r.length:i.indices.length/3;if(l>F){const r=e.getChildren();if(void 0!==r){for(const e of r)p(e,t,n,o,a,c,s);return}}!function(e,t,n,r,o,i,a,c,s,l,u){const f=e[0],d=e[1],p=e[2],h=t[0],m=t[1],w=t[2],{normalRequired:g}=l;for(let e=n;e<r;++e){const t=c[e],n=3*t,r=a*o[n];let l=i[r],x=i[r+1],O=i[r+2];const T=a*o[n+1];let P=i[T],b=i[T+1],S=i[T+2];const C=a*o[n+2];let M=i[C],V=i[C+1],A=i[C+2];null!=s&&([l,x,O]=s.applyToVertex(l,x,O,e),[P,b,S]=s.applyToVertex(P,b,S,e),[M,V,A]=s.applyToVertex(M,V,A,e));const F=P-l,R=b-x,z=S-O,D=M-l,H=V-x,_=A-O,U=m*_-H*w,L=w*D-_*h,E=h*H-D*m,N=F*U+R*L+z*E;if(Math.abs(N)<=I)continue;const W=f-l,j=d-x,G=p-O,$=W*U+j*L+G*E;if(N>0){if($<0||$>N)continue}else if($>0||$<N)continue;const B=j*z-R*G,q=G*F-z*W,J=W*R-F*j,k=h*B+m*q+w*J;if(N>0){if(k<0||$+k>N)continue}else if(k>0||$+k<N)continue;const Y=(D*B+H*q+_*J)/N;Y>=0&&u(Y,t,g?y(F,R,z,D,H,_,v):null)}}(t,n,0,l,i.indices,i.data,i.stride,r,a,c,s)}}const v=(0,o.Ue)();function h(e,t,n,o,i,a,c,s,l){const{data:u,stride:f}=a;x(e,(0,r.a)(R,t,e),n,o,i,u,f,c,s,l)}function m(e,t,n,r,o,i,a,c,s,l=null,u=0){const f=e[0],d=e[1],p=e[2],h=t[0],m=t[1],w=t[2];for(let e=n;e<r;++e){const t=u+(l?l[e]:e),n=3*t,r=a*o[n],g=i[r],x=i[r+1],O=i[r+2],T=a*o[n+1],P=i[T],b=i[T+1],S=i[T+2],C=a*o[n+2],M=P-g,V=b-x,A=S-O,F=i[C]-g,R=i[C+1]-x,z=i[C+2]-O,D=m*z-R*w,H=w*F-z*h,_=h*R-F*m,U=M*D+V*H+A*_;if(Math.abs(U)<=I)continue;const L=f-g,E=d-x,N=p-O,W=L*D+E*H+N*_;if(U>0){if(W<0||W>U)continue}else if(W>0||W<U)continue;const j=E*A-V*N,G=N*M-A*L,$=L*V-M*E,B=h*j+m*G+w*$;if(U>0){if(B<0||W+B>U)continue}else if(B>0||W+B<U)continue;const q=(F*j+R*G+z*$)/U;q>=0&&s(q,t,c?y(M,V,A,F,R,z,v):null)}}function w(e,t,n,r,o,i,a,c){const s=e[0],l=e[1],u=e[2],f=t[0],d=t[1],p=t[2];for(let e=n;e<r;++e){const t=3*e,n=t+1,r=t+2,h=i*t,m=o[h],w=o[h+1],g=o[h+2],x=i*n,O=i*r,T=o[x]-m,P=o[x+1]-w,b=o[x+2]-g,S=o[O]-m,C=o[O+1]-w,M=o[O+2]-g,V=d*M-C*p,A=p*S-M*f,F=f*C-S*d,R=T*V+P*A+b*F;if(Math.abs(R)<=I)continue;const z=s-m,D=l-w,H=u-g,_=z*V+D*A+H*F;if(R>0){if(_<0||_>R)continue}else if(_>0||_<R)continue;const U=D*b-P*H,L=H*T-b*z,E=z*P-T*D,N=f*U+d*L+p*E;if(R>0){if(N<0||_+N>R)continue}else if(N>0||_+N<R)continue;const W=(S*U+C*L+M*E)/R;W>=0&&c(W,e,a?y(T,P,b,S,C,M,v):null)}}function g(e,t,n,r,o,i,a,c,s,l,u,f=null,d=0){const p=e[0],h=e[1],m=e[2],w=t[0],g=t[1],x=t[2];for(let e=n;e<r;++e){const t=d+(f?f[e]:e),n=3*t,r=a*o[n],O=i[r],T=i[r+1],P=i[r+2],b=a*o[n+1],S=i[b],C=i[b+1],M=i[b+2],V=a*o[n+2],A=i[V],F=i[V+1],R=i[V+2],z=P-s,D=c/Math.sqrt(O*O+T*T+z*z),H=O+O*D,_=T+T*D,U=P+z*D,L=M-s,E=c/Math.sqrt(S*S+C*C+L*L),N=S+S*E,W=C+C*E,j=M+L*E,G=R-s,$=c/Math.sqrt(A*A+F*F+G*G),B=N-H,q=W-_,J=j-U,k=A+A*$-H,Y=F+F*$-_,Z=R+G*$-U,X=g*Z-Y*x,K=x*k-Z*w,Q=w*Y-k*g,ee=B*X+q*K+J*Q;if(Math.abs(ee)<=I)continue;const te=p-H,ne=h-_,re=m-U,oe=te*X+ne*K+re*Q;if(ee>0){if(oe<0||oe>ee)continue}else if(oe>0||oe<ee)continue;const ie=ne*J-q*re,ae=re*B-J*te,ce=te*q-B*ne,se=w*ie+g*ae+x*ce;if(ee>0){if(se<0||oe+se>ee)continue}else if(se>0||oe+se<ee)continue;const le=(k*ie+Y*ae+Z*ce)/ee;le>=0&&u(le,t,l?y(B,q,J,k,Y,Z,v):null)}}function x(e,t,n,o,i,a,c,s,l,u){const f=t,d=z,p=Math.abs(f[0]),v=Math.abs(f[1]),h=Math.abs(f[2]),m=p>=v?p>=h?0:2:v>=h?1:2,w=m,g=f[w]<0?2:1,x=(m+g)%3,y=(m+(3-g))%3,S=f[x]/f[w],C=f[y]/f[w],M=1/f[w],V=O,A=T,F=P,{normalRequired:I}=l;for(let t=n;t<o;++t){const n=3*t,o=c*i[n];(0,r.i)(d[0],a[o+0],a[o+1],a[o+2]);const l=c*i[n+1];(0,r.i)(d[1],a[l+0],a[l+1],a[l+2]);const f=c*i[n+2];(0,r.i)(d[2],a[f+0],a[f+1],a[f+2]),s&&((0,r.c)(d[0],s.applyToVertex(d[0][0],d[0][1],d[0][2],t)),(0,r.c)(d[1],s.applyToVertex(d[1][0],d[1][1],d[1][2],t)),(0,r.c)(d[2],s.applyToVertex(d[2][0],d[2][1],d[2][2],t))),(0,r.a)(V,d[0],e),(0,r.a)(A,d[1],e),(0,r.a)(F,d[2],e);const p=V[x]-S*V[w],v=V[y]-C*V[w],h=A[x]-S*A[w],m=A[y]-C*A[w],g=F[x]-S*F[w],O=F[y]-C*F[w],T=g*m-O*h,P=p*O-v*g,R=h*v-m*p;if((T<0||P<0||R<0)&&(T>0||P>0||R>0))continue;const z=T+P+R;if(0===z)continue;const D=T*(M*V[w])+P*(M*A[w])+R*(M*F[w]);if(D*Math.sign(z)<0)continue;const H=D/z;H>=0&&u(H,t,I?b(d):null)}}const O=(0,o.Ue)(),T=(0,o.Ue)(),P=(0,o.Ue)();function y(e,t,n,o,i,a,c){return(0,r.i)(S,e,t,n),(0,r.i)(C,o,i,a),(0,r.h)(c,S,C),(0,r.n)(c,c),c}function b(e){return(0,r.a)(S,e[1],e[0]),(0,r.a)(C,e[2],e[0]),(0,r.h)(v,S,C),(0,r.n)(v,v),v}const S=(0,o.Ue)(),C=(0,o.Ue)();function M(e,t,n){return(0,r.i)(n,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function V(e,t,n,r){return A(e,t,n,r,1/0)}function A(e,t,n,r,o){const i=(e[0]-r-t[0])*n[0],a=(e[3]+r-t[0])*n[0];let c=Math.min(i,a),s=Math.max(i,a);const l=(e[1]-r-t[1])*n[1],u=(e[4]+r-t[1])*n[1];if(s=Math.min(s,Math.max(l,u)),s<0)return!1;if(c=Math.max(c,Math.min(l,u)),c>s)return!1;const f=(e[2]-r-t[2])*n[2],d=(e[5]+r-t[2])*n[2];return s=Math.min(s,Math.max(f,d)),!(s<0)&&(c=Math.max(c,Math.min(f,d)),!(c>s)&&c<o)}const F=1e3,I=1e-7,R=(0,o.Ue)(),z=[(0,o.Ue)(),(0,o.Ue)(),(0,o.Ue)()]},29296:function(e,t,n){n.d(t,{G:function(){return l}});var r=n(24910),o=n(82846),i=n(81342),a=n(87807),c=n(52061),s=n(92991);class l{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(c.T.POSITION).indices.length}write(e,t,n,r,o,i){return(0,s.NK)(n,r,this.vertexBufferLayout,e,t,o,i)}intersect(e,t,n,o,s,l,f){const d=this.vertexBufferLayout.createView(e).getField(c.T.POSITION,i.ct);if(null==d)return;const p=(0,r.a)(u,l,s),v=d.count/3,h=o.options.normalRequired;(0,a.IG)(s,p,0,v,d.typedBuffer,d.typedBufferStride,h,((e,t,n)=>{f(e,n,t)}))}}const u=(0,o.Ue)()},36121:function(e,t,n){n.d(t,{IM:function(){return c},VD:function(){return l},qj:function(){return a},tl:function(){return s},wp:function(){return i}});var r=n(52890),o=n(52061);const i=(0,r.U$)().vec3f(o.T.POSITION),a=(0,r.U$)().vec3f(o.T.POSITION).vec2f16(o.T.UV0),c=(0,r.U$)().vec3f(o.T.POSITION).vec4u8(o.T.COLOR),s=((0,r.U$)().vec3f(o.T.POSITION).vec2f16(o.T.UV0).vec4u8(o.T.OLIDCOLOR),(0,r.U$)().vec3f(o.T.POSITION).vec2f(o.T.UV0)),l=(0,r.U$)().vec3f(o.T.POSITION).vec2f(o.T.UV0).vec4u8(o.T.OLIDCOLOR)},3113:function(e,t,n){n.d(t,{j:function(){return I}});var r=n(81342),o=n(41044),i=n(32420),a=n(59797),c=n(71356),s=n(19596),l=n(61536),u=n(948),f=n(61719),d=n(52061),p=n(29296),v=n(36121),h=n(42266),m=n(92991),w=n(58257),g=n(29107),x=n(33610),O=n(26041),T=n(93191),P=n(51135);class y extends g.A{constructor(e,t){super(e,t,new w.J(T.I,(()=>n.e(67160).then(n.bind(n,67160)))),b)}_getPipelineState(e,t){const{oitPass:n,output:r,hasOccludees:i,cullFace:a}=e,c=n===x.M.NONE;return(0,P.sm)({blending:(0,o.c1)(r)?c?P.Zo:(0,l.j7)(n):null,culling:(0,P.zp)(a),depthTest:{func:(0,l.Bh)(n)},depthWrite:(0,l.W$)(e),drawBuffers:(0,l.u_)(n,r),colorWrite:P.gf,stencilWrite:i?O.s3:null,stencilTest:i?t?O.eD:O.RY:null,polygonOffset:(0,l.eZ)(e)})}initializePipeline(e){return this._occludeePipeline=this._getPipelineState(e,!0),this._getPipelineState(e,!1)}getPipeline(e){return e?this._occludeePipeline:super.getPipeline()}}const b=new Map([[d.T.POSITION,0],[d.T.UV0,2],[d.T.PERSPECTIVEDIVIDE,3]]);var S=n(73440),C=n(31839),M=n(34479),V=n(83046),A=n(91041);class F extends A.W{constructor(e){super(),this.draped=e,this.cullFace=i.Vr.None,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.perspectiveInterpolation=!0,this.textureCoordinateType=C.I.None,this.emissionSource=M.jo.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1,this.snowCover=!1}}(0,S._)([(0,V.o)({count:i.Vr.COUNT})],F.prototype,"cullFace",void 0),(0,S._)([(0,V.o)()],F.prototype,"enableOffset",void 0),(0,S._)([(0,V.o)()],F.prototype,"writeDepth",void 0),(0,S._)([(0,V.o)()],F.prototype,"hasOccludees",void 0),(0,S._)([(0,V.o)()],F.prototype,"terrainDepthTest",void 0),(0,S._)([(0,V.o)()],F.prototype,"cullAboveTerrain",void 0),(0,S._)([(0,V.o)()],F.prototype,"perspectiveInterpolation",void 0);class I extends h.c{constructor(e){super(e,D),this.vertexAttributeLocations=b,this.supportsEdges=!0,this.produces=new Map([[u.r.OPAQUE_MATERIAL,e=>(0,o.Gy)(e)],[u.r.TRANSPARENT_MATERIAL,e=>(0,o.D5)(e)&&this.parameters.writeDepth],[u.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,o.D5)(e)&&!this.parameters.writeDepth],[u.r.DRAPED_MATERIAL,e=>(0,o.D5)(e)||(0,o.Gy)(e)]]),this._configuration=new F(e.draped)}dispose(){this.setParameters({texture:void 0})}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<l.ve,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}get visible(){return!0}createGLMaterial(e){return new R(e)}createBufferWriter(){let e=v.qj;return this.parameters.perspectiveInterpolation&&(e=e.clone().f32(d.T.PERSPECTIVEDIVIDE)),new z(e)}}class R extends a.Z{constructor(e){super({...e,...e.material.parameters}),this.parameters=e;const t=this._material.parameters.texture;(0,c.f)(t)&&e.textures.updater.add(t)}dispose(){this.parameters.textures.updater.remove(this._material.parameters.texture)}beginSlot(e){return this.getTechnique(y,e)}}class z extends p.G{write(e,t,n,o,i,a){for(const o of this.vertexBufferLayout.fields.keys()){const c=n.get(o);if(c)if(o===d.T.PERSPECTIVEDIVIDE){(0,f.hu)(1===c.size);const e=i.getField(o,r.ly);e&&(0,m.XW)(c,e,a)}else(0,m.i9)(o,c,e,t,i,a)}return null}}class D extends s.Mt{constructor(e,t){super(),this.texture=e,this.draped=t,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=i.Vr.None,this.opacity=1,this.perspectiveInterpolation=!1}get glTexture(){return this.texture.glTexture}}},42266:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(82846),o=n(19596),i=n(87807);class a extends o.F5{constructor(){super(...arguments),this._pp0=(0,r.al)(0,0,1),this._pp1=(0,r.al)(0,0,0)}intersect(e,t,n,r,o,a){return(0,i.Bw)(e,n,r,o,void 0,a)}intersectDraped(e,t,n,r){return this._pp0[0]=this._pp1[0]=n[0],this._pp0[1]=this._pp1[1]=n[1],(0,i.Bw)(e,t,this._pp0,this._pp1,void 0,r)}}}}]);