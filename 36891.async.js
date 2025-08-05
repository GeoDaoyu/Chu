"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36891],{86875:function(e,t,n){function r(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function i(){return r()}function c(){return a(1,1,1)}function s(){return a(1,0,0)}function l(){return a(0,1,0)}function u(){return a(0,0,1)}n.d(t,{Ue:function(){return r},al:function(){return a},d9:function(){return o}});const f=i(),h=c(),p=s(),d=l(),w=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:p,UNIT_Y:d,UNIT_Z:w,ZEROS:f,clone:o,create:r,fromValues:a,ones:c,unitX:s,unitY:l,unitZ:u,zeros:i},Symbol.toStringTag,{value:"Module"}))},27936:function(e,t,n){function r(e){return"point"===e.type}n.d(t,{f:function(){return r}})},36027:function(e,t,n){n.d(t,{$o:function(){return A},Go:function(){return T},Si:function(){return U},Uu:function(){return y},WR:function(){return m},ZL:function(){return S},_Z:function(){return b},bD:function(){return M},bh:function(){return P},zE:function(){return v}});var r=n(26636),o=n(31865),a=n(10934),i=n(82846),c=n(73749),s=n(27583),l=n(13132),u=n(16447),f=n(47566),h=n(69372),p=n(28931),d=n(52861),w=n(60856),g=n(74774);function v(e,t){if("point"===e.type)return x(e,t,!1);if((0,g.Ou)(e))switch(e.type){case"extent":return x(e.center,t,!1);case"polygon":return x(e.centroid,t,!1);case"polyline":return x(O(e),t,!0);case"mesh":return x((0,d.rU)(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return x(function(e){return(0,w.T)(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),null!=e.zmin&&null!=e.zmax&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e),t,!0);case"polygon":return x(function(e){const t=e.rings[0];if(!t||0===t.length)return null;const n=(0,h.a)(e.rings,!!e.hasZ);return(0,w.T)(n[0],n[1],n[2],e.spatialReference)}(e),t,!0);case"polyline":return x(O(e),t,!0);case"multipoint":return}}function O(e){const t=e.paths[0];if(!t||0===t.length)return null;const n=(0,p.n8)(t,(0,p.ok)(t)/2);return(0,w.T)(n[0],n[1],n[2],e.spatialReference)}function x(e,t,n){const r=n?e:(0,g.WG)(e);return t&&e?(0,l.projectPoint)(e,r,t)?r:null:r}function m(e){if(!e)return 0;switch(e.type){case"point":return e.z;case"extent":return e.zmax;case"polygon":return e.hasZ?e.rings.reduce(((e,t)=>t.reduce(((e,t)=>Math.max(e,t[2])),e)),-1/0):void 0;case"polyline":return e.hasZ?e.paths.reduce(((e,t)=>t.reduce(((e,t)=>Math.max(e,t[2])),e)),-1/0):void 0;case"mesh":return e.extent.zmax;case"multipoint":return}}function T(e,t,n,r=0){if(e){t||(t=(0,f.Ue)());const o=e;let a=.5*o.width*(n-1),i=.5*o.height*(n-1);return o.width<1e-7*o.height?a+=i/20:o.height<1e-7*o.width&&(i+=a/20),(0,c.s)(t,o.xmin-a-r,o.ymin-i-r,o.xmax+a+r,o.ymax+i+r),t}return null}function y(e,t,n=null){const r=(0,s.d9)(s.hq);return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!=t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),r}function A(e,t,n,r,o,a){for(let t=0;t<3;++t)a[t]=null!=e?.[t]?e[t]:null!=n?.[t]?n[t]:o[t];return a[3]=null!=t?t:null!=r?r:o[3],a}function M(e=i.hq,t,n,r=1){const o=new Array(3);if(null==t||null==n)o[0]=1,o[1]=1,o[2]=1;else{let r,a=0;for(let i=2;i>=0;i--){const c=e[i],s=null!=c,l=0===i&&!r&&!s,u=n[i];let f;"symbol-value"===c||l?f=0!==u?t[i]/u:1:s&&"proportional"!==c&&isFinite(c)&&(f=0!==u?c/u:1),null!=f&&(o[i]=f,r=f,a=Math.max(a,Math.abs(f)))}for(let e=2;e>=0;e--)null==o[e]?o[e]=r:0===o[e]&&(o[e]=.001*a)}for(let e=2;e>=0;e--)o[e]/=r;return(0,i.nI)(o)}function P(e){return S(function(e){return null!=e.isPrimitive}(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function S(e){const t=e=>null==e||e>=0;return Array.isArray(e)?e.every(t):t(e)}function b(e,t,n,r=(0,a.Ue)()){return e&&(0,o.jI)(r,r,-e/180*Math.PI),t&&(0,o.lM)(r,r,t/180*Math.PI),n&&(0,o.uD)(r,r,n/180*Math.PI),r}function U(e,t,n){if(null!=n.minDemResolution)return n.minDemResolution;const o=(0,r.c9)(t),a=(0,u.bf)(e)*o,i=(0,u.Ye)(e)*o,c=(0,u.Cb)(e)*(t.isGeographic?1:o);return 0===a&&0===i&&0===c?n.minDemResolutionForPoints:.01*Math.max(a,i,c)}},78560:function(e,t,n){n.d(t,{Dn:function(){return h},ER:function(){return l},Rg:function(){return u},aJ:function(){return p},cU:function(){return f},hy:function(){return s},wm:function(){return c}});n(61432);var r=n(64497),o=n(27583),a=n(28751),i=n(65650);const c=128,s=.5,l=(0,o.vV)(s/2,s/2,1-s/2,1-s/2);function u(e){return"cross"===e||"x"===e}function f(e,t=c,n=t*s,r=0){const{data:o,parameters:i}=h(e,t,n,r);return new a.x(o,i)}function h(e,t=c,n=t*s,r=0){return{data:p(e,t,n,r),parameters:{mipmap:!1,wrap:{s:i.e8.CLAMP_TO_EDGE,t:i.e8.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0}}}function p(e,t=c,n=t*s,r=0){switch(e){case"circle":default:return function(e,t){const n=e/2-.5;return O(e,g(n,n,t/2))}(t,n);case"square":return function(e,t){return d(e,t,!1)}(t,n);case"cross":return function(e,t,n=0){return w(e,t,!1,n)}(t,n,r);case"x":return function(e,t,n=0){return w(e,t,!0,n)}(t,n,r);case"kite":return function(e,t){return d(e,t,!0)}(t,n);case"triangle":return function(e,t){return O(e,v(e/2,t,t/2))}(t,n);case"arrow":return function(e,t){const n=t,r=t/2,o=e/2,a=.8*n,i=g(o,(e-t)/2-a,Math.sqrt(a*a+r*r)),c=v(o,n,r);return O(e,((e,t)=>Math.max(c(e,t),-i(e,t))))}(t,n)}}function d(e,t,n){return n&&(t/=Math.SQRT2),O(e,((r,o)=>{let a=r-.5*e+.25,i=.5*e-o-.75;if(n){const e=(a+i)/Math.SQRT2;i=(i-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(i))-.5*t}))}function w(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);const o=.5*t;return O(e,((t,a)=>{let i,c=t-.5*e,s=.5*e-a-1;if(n){const e=(c+s)/Math.SQRT2;s=(s-c)/Math.SQRT2,c=e}return c=Math.abs(c),s=Math.abs(s),i=c>s?c>o?Math.sqrt((c-o)*(c-o)+s*s):s:s>o?Math.sqrt(c*c+(s-o)*(s-o)):c,i-=r/2,i}))}function g(e,t,n){return(r,o)=>{const a=r-e,i=o-t;return Math.sqrt(a*a+i*i)-n}}function v(e,t,n){const r=Math.sqrt(t*t+n*n);return(o,a)=>{const i=Math.abs(o-e)-n,c=a-e+t/2+.75,s=(t*i+n*c)/r,l=-c;return Math.max(s,l)}}function O(e,t){const n=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const i=a+e*o;let c=t(a,o);c=c/e+.5,(0,r.I)(c,n,4*i)}return n}},89755:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(79729),o=n(48857);function a(e){e.uniforms.add(new r.U("alignPixelEnabled",(e=>e.alignPixelEnabled))),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
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
}`)}},19615:function(e,t,n){n.d(t,{R:function(){return h},c:function(){return f}});var r=n(27897),o=n(39863),a=n(96541),i=n(23027),c=n(13663),s=n(85119),l=n(48857),u=n(52061);const f=.5;function h(e,t){e.include(o.cK),e.attributes.add(u.T.POSITION,"vec3"),e.attributes.add(u.T.NORMAL,"vec3"),e.attributes.add(u.T.CENTEROFFSETANDDISTANCE,"vec4");const n=e.vertex;(0,a.Sv)(n,t),(0,a.hY)(n,t),n.uniforms.add(new i.$("viewport",(e=>e.camera.fullViewport)),new s.p("polygonOffset",(e=>e.shaderPolygonOffset)),new c.z("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),t.hasVerticalOffset&&(0,r.V)(n),n.code.add(l.H`struct ProjectHUDAux {
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
  `),t.draped&&!t.hasVerticalOffset||(0,a._8)(n),t.draped||(n.uniforms.add(new c.z("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(l.H`
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
  `)),t.screenCenterOffsetUnitsEnabled&&(0,a.ZI)(n),t.hasScreenSizePerspective&&(0,o.m8)(n),n.code.add(l.H`
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
  `)}},29158:function(e,t,n){var r;n.d(t,{U:function(){return r}}),function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(r||(r={}))},42609:function(e,t,n){n.d(t,{P:function(){return l}});var r=n(89755),o=n(29158),a=n(23027),i=n(13663),c=n(48857),s=n(71063);function l(e){e.vertex.uniforms.add(new i.z("renderTransparentlyOccludedHUD",(e=>e.hudRenderStyle===o.U.Occluded?1:e.hudRenderStyle===o.U.NotOccluded?0:.75)),new a.$("viewport",(e=>e.camera.fullViewport)),new s.e("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),e.vertex.include(r.H),e.vertex.code.add(c.H`bool testHUDVisibility(vec4 posProj) {
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
}`)}},90285:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(5998),o=n(92217);class a extends o.x{constructor(e,t){super(e,"vec4",r.P.Draw,((n,r,o)=>n.setUniform4fv(e,t(r,o))))}}},86026:function(e,t,n){n.d(t,{Cr:function(){return oe},IG:function(){return M},QL:function(){return W},ns:function(){return Q},nb:function(){return K},B2:function(){return R},DA:function(){return ne},x2:function(){return ee},dV:function(){return k},xu:function(){return B},mj:function(){return $},rh:function(){return te},PI:function(){return q},g7:function(){return X},AW:function(){return Z},PD:function(){return J},Ay:function(){return ie},mx:function(){return re}});var r,o=n(24910),a=n(86875),i=n(82846),c=n(60199),s=n(39909),l=n(38766),u=n(77773),f=n(12659),h=n(81749);!function(e){e.length=function(e,t){const n=e[t],r=e[t+1],o=e[t+2];return Math.sqrt(n*n+r*r+o*o)},e.normalize=function(e,t){const n=e[t],r=e[t+1],o=e[t+2],a=1/Math.sqrt(n*n+r*r+o*o);e[t]*=a,e[t+1]*=a,e[t+2]*=a},e.scale=function(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n},e.add=function(e,t,n,r,o,a=t){(o=o||e)[a]=e[t]+n[r],o[a+1]=e[t+1]+n[r+1],o[a+2]=e[t+2]+n[r+2]},e.subtract=function(e,t,n,r,o,a=t){(o=o||e)[a]=e[t]-n[r],o[a+1]=e[t+1]-n[r+1],o[a+2]=e[t+2]-n[r+2]}}(r||(r={}));var p=n(25952),d=n(61719),w=n(52061),g=n(52964);const v=r,O=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],x=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],m=[0,0,1,0,1,1,0,1],T=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],y=new Array(36);for(let e=0;e<6;e++)for(let t=0;t<6;t++)y[6*e+t]=e;const A=new Array(36);for(let e=0;e<6;e++)A[6*e]=0,A[6*e+1]=1,A[6*e+2]=2,A[6*e+3]=2,A[6*e+4]=3,A[6*e+5]=0;function M(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(24);for(let e=0;e<8;e++)n[3*e]=O[e][0]*t[0],n[3*e+1]=O[e][1]*t[1],n[3*e+2]=O[e][2]*t[2];return new p.Z(e,[[w.T.POSITION,new h.a(n,T,3,!0)],[w.T.NORMAL,new h.a(x,y,3)],[w.T.UV0,new h.a(m,A,2)]])}const P=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],S=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],b=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],U=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function R(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(18);for(let e=0;e<6;e++)n[3*e]=P[e][0]*t[0],n[3*e+1]=P[e][1]*t[1],n[3*e+2]=P[e][2]*t[2];return new p.Z(e,[[w.T.POSITION,new h.a(n,b,3,!0)],[w.T.NORMAL,new h.a(S,U,3)]])}const I=(0,a.al)(-.5,0,-.5),C=(0,a.al)(.5,0,-.5),N=(0,a.al)(0,0,.5),z=(0,a.al)(0,.5,0),D=(0,a.Ue)(),V=(0,a.Ue)(),F=(0,a.Ue)(),H=(0,a.Ue)(),E=(0,a.Ue)();(0,o.d)(D,I,z),(0,o.d)(V,I,C),(0,o.h)(F,D,V),(0,o.n)(F,F),(0,o.d)(D,C,z),(0,o.d)(V,C,N),(0,o.h)(H,D,V),(0,o.n)(H,H),(0,o.d)(D,N,z),(0,o.d)(V,N,I),(0,o.h)(E,D,V),(0,o.n)(E,E);const G=[I,C,N,z],L=[0,-1,0,F[0],F[1],F[2],H[0],H[1],H[2],E[0],E[1],E[2]],j=[0,1,2,3,1,0,3,2,1,3,0,2],_=[0,0,0,1,1,1,2,2,2,3,3,3];function Z(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(12);for(let e=0;e<4;e++)n[3*e]=G[e][0]*t[0],n[3*e+1]=G[e][1]*t[1],n[3*e+2]=G[e][2]*t[2];return new p.Z(e,[[w.T.POSITION,new h.a(n,j,3,!0)],[w.T.NORMAL,new h.a(L,_,3)]])}function q(e,t,n,r,o={uv:!0}){const a=-Math.PI,i=2*Math.PI,c=-Math.PI/2,u=Math.PI,f=Math.max(3,Math.floor(n)),d=Math.max(2,Math.floor(r)),g=(f+1)*(d+1),v=(0,s.xx)(3*g),O=(0,s.xx)(3*g),x=(0,s.xx)(2*g),m=[];let T=0;for(let e=0;e<=d;e++){const n=[],r=e/d,o=c+r*u,s=Math.cos(o);for(let e=0;e<=f;e++){const c=e/f,l=a+c*i,u=Math.cos(l)*s,h=Math.sin(o),p=-Math.sin(l)*s;v[3*T]=u*t,v[3*T+1]=h*t,v[3*T+2]=p*t,O[3*T]=u,O[3*T+1]=h,O[3*T+2]=p,x[2*T]=c,x[2*T+1]=r,n.push(T),++T}m.push(n)}const y=new Array;for(let e=0;e<d;e++)for(let t=0;t<f;t++){const n=m[e][t],r=m[e][t+1],o=m[e+1][t+1],a=m[e+1][t];0===e?(y.push(n),y.push(o),y.push(a)):e===d-1?(y.push(n),y.push(r),y.push(o)):(y.push(n),y.push(r),y.push(o),y.push(o),y.push(a),y.push(n))}const A=[[w.T.POSITION,new h.a(v,y,3,!0)],[w.T.NORMAL,new h.a(O,y,3,!0)]];return o.uv&&A.push([w.T.UV0,new h.a(x,y,2,!0)]),o.offset&&(A[0][0]=w.T.OFFSET,A.push([w.T.POSITION,new h.a(Float64Array.from(o.offset),(0,l.LE)(y.length),3,!0)])),new p.Z(e,A)}function $(e,t,n,r){const o=B(t,n,r);return new p.Z(e,o)}function B(e,t,n){const r=e;let o,a;if(n)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const e=r*(1+Math.sqrt(5))/2;o=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let t=0;t<o.length;t+=3)v.scale(o,t,e/v.length(o,t));let i={};function c(t,n){t>n&&([t,n]=[n,t]);const r=t.toString()+"."+n.toString();if(i[r])return i[r];let a=o.length;return o.length+=3,v.add(o,3*t,o,3*n,o,a),v.scale(o,a,e/v.length(o,a)),a/=3,i[r]=a,a}for(let e=0;e<t;e++){const e=a.length,t=new Array(4*e);for(let n=0;n<e;n+=3){const e=a[n],r=a[n+1],o=a[n+2],i=c(e,r),s=c(r,o),l=c(o,e),u=4*n;t[u]=e,t[u+1]=i,t[u+2]=l,t[u+3]=r,t[u+4]=s,t[u+5]=i,t[u+6]=o,t[u+7]=l,t[u+8]=s,t[u+9]=i,t[u+10]=s,t[u+11]=l}a=t,i={}}const l=(0,s.XO)(o);for(let e=0;e<l.length;e+=3)v.normalize(l,e);return[[w.T.POSITION,new h.a((0,s.XO)(o),a,3,!0)],[w.T.NORMAL,new h.a(l,a,3,!0)]]}function k(e,{normal:t,position:n,color:r,rotation:o,size:a,centerOffsetAndDistance:c,uvi:s,featureAttribute:u,objectAndLayerIdColor:f=null}={}){const d=n?(0,i.d9)(n):(0,i.Ue)(),v=t?(0,i.d9)(t):(0,i.al)(0,0,1),O=r?[255*r[0],255*r[1],255*r[2],r.length>3?255*r[3]:255]:[255,255,255,255],x=null!=a&&2===a.length?a:[1,1],m=null!=o?[o]:[0],T=(0,l.LE)(1),y=[[w.T.POSITION,new h.a(d,T,3,!0)],[w.T.NORMAL,new h.a(v,T,3,!0)],[w.T.COLOR,new h.a(O,T,4,!0)],[w.T.SIZE,new h.a(x,T,2)],[w.T.ROTATION,new h.a(m,T,1,!0)]];if(s&&y.push([w.T.UVI,new h.a(s,T,s.length)]),null!=c){const e=[c[0],c[1],c[2],c[3]];y.push([w.T.CENTEROFFSETANDDISTANCE,new h.a(e,T,4)])}if(u){const e=[u[0],u[1],u[2],u[3]];y.push([w.T.FEATUREATTRIBUTE,new h.a(e,T,4)])}return new p.Z(e,y,null,g.V.Point,f)}const Y=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function X(e,t=Y){const n=new Array(12);for(let e=0;e<4;e++)for(let r=0;r<3;r++)n[3*e+r]=t[e][r];const r=[0,1,2,2,3,0],o=[0,0,0,0,0,0],a=[[w.T.POSITION,new h.a(n,r,3,!0)],[w.T.NORMAL,new h.a([0,0,1],o,3,!0)],[w.T.UV0,new h.a([0,0,1,0,1,1,0,1],r,2,!0)],[w.T.COLOR,new h.a([255,255,255,255],o,4,!0)]];return new p.Z(e,a)}function Q(e,t,n,r,o=!0,i=!0){let c=0;const l=t,u=e;let f=(0,a.al)(0,c,0),p=(0,a.al)(0,c+u,0),d=(0,a.al)(0,-1,0),g=(0,a.al)(0,1,0);r&&(c=u,p=(0,a.al)(0,0,0),f=(0,a.al)(0,c,0),d=(0,a.al)(0,1,0),g=(0,a.al)(0,-1,0));const v=[p,f],O=[d,g],x=n+2,m=Math.sqrt(u*u+l*l);if(r)for(let e=n-1;e>=0;e--){const t=e*(2*Math.PI/n),r=(0,a.al)(Math.cos(t)*l,c,Math.sin(t)*l);v.push(r);const o=(0,a.al)(u*Math.cos(t)/m,-l/m,u*Math.sin(t)/m);O.push(o)}else for(let e=0;e<n;e++){const t=e*(2*Math.PI/n),r=(0,a.al)(Math.cos(t)*l,c,Math.sin(t)*l);v.push(r);const o=(0,a.al)(u*Math.cos(t)/m,l/m,u*Math.sin(t)/m);O.push(o)}const T=new Array,y=new Array;if(o){for(let e=3;e<v.length;e++)T.push(1),T.push(e-1),T.push(e),y.push(0),y.push(0),y.push(0);T.push(v.length-1),T.push(2),T.push(1),y.push(0),y.push(0),y.push(0)}if(i){for(let e=3;e<v.length;e++)T.push(e),T.push(e-1),T.push(0),y.push(e),y.push(e-1),y.push(1);T.push(0),T.push(2),T.push(v.length-1),y.push(1),y.push(2),y.push(O.length-1)}const A=(0,s.xx)(3*x);for(let e=0;e<x;e++)A[3*e]=v[e][0],A[3*e+1]=v[e][1],A[3*e+2]=v[e][2];const M=(0,s.xx)(3*x);for(let e=0;e<x;e++)M[3*e]=O[e][0],M[3*e+1]=O[e][1],M[3*e+2]=O[e][2];return[[w.T.POSITION,new h.a(A,T,3,!0)],[w.T.NORMAL,new h.a(M,y,3,!0)]]}function W(e,t,n,r,o,a=!0,i=!0){return new p.Z(e,Q(t,n,r,o,a,i))}function K(e,t,n,r,i,c,l){const u=i?(0,a.d9)(i):(0,a.al)(1,0,0),f=c?(0,a.d9)(c):(0,a.al)(0,0,0);l??=!0;const d=(0,a.Ue)();(0,o.n)(d,u);const g=(0,a.Ue)();(0,o.g)(g,d,Math.abs(t));const v=(0,a.Ue)();(0,o.g)(v,g,-.5),(0,o.f)(v,v,f);const O=(0,a.al)(0,1,0);Math.abs(1-(0,o.e)(d,O))<.2&&(0,o.i)(O,0,0,1);const x=(0,a.Ue)();(0,o.h)(x,d,O),(0,o.n)(x,x),(0,o.h)(O,x,d);const m=2*r+(l?2:0),T=r+(l?2:0),y=(0,s.xx)(3*m),A=(0,s.xx)(3*T),M=(0,s.xx)(2*m),P=new Array(3*r*(l?4:2)),S=new Array(3*r*(l?4:2));l&&(y[3*(m-2)]=v[0],y[3*(m-2)+1]=v[1],y[3*(m-2)+2]=v[2],M[2*(m-2)]=0,M[2*(m-2)+1]=0,y[3*(m-1)]=y[3*(m-2)]+g[0],y[3*(m-1)+1]=y[3*(m-2)+1]+g[1],y[3*(m-1)+2]=y[3*(m-2)+2]+g[2],M[2*(m-1)]=1,M[2*(m-1)+1]=1,A[3*(T-2)]=-d[0],A[3*(T-2)+1]=-d[1],A[3*(T-2)+2]=-d[2],A[3*(T-1)]=d[0],A[3*(T-1)+1]=d[1],A[3*(T-1)+2]=d[2]);const b=(e,t,n)=>{P[e]=t,S[e]=n};let U=0;const R=(0,a.Ue)(),I=(0,a.Ue)();for(let e=0;e<r;e++){const t=e*(2*Math.PI/r);(0,o.g)(R,O,Math.sin(t)),(0,o.g)(I,x,Math.cos(t)),(0,o.f)(R,R,I),A[3*e]=R[0],A[3*e+1]=R[1],A[3*e+2]=R[2],(0,o.g)(R,R,n),(0,o.f)(R,R,v),y[3*e]=R[0],y[3*e+1]=R[1],y[3*e+2]=R[2],M[2*e]=e/r,M[2*e+1]=0,y[3*(e+r)]=y[3*e]+g[0],y[3*(e+r)+1]=y[3*e+1]+g[1],y[3*(e+r)+2]=y[3*e+2]+g[2],M[2*(e+r)]=e/r,M[2*e+1]=1;const a=(e+1)%r;b(U++,e,e),b(U++,e+r,e),b(U++,a,a),b(U++,a,a),b(U++,e+r,e),b(U++,a+r,a)}if(l){for(let e=0;e<r;e++){const t=(e+1)%r;b(U++,m-2,T-2),b(U++,e,T-2),b(U++,t,T-2)}for(let e=0;e<r;e++){const t=(e+1)%r;b(U++,e+r,T-1),b(U++,m-1,T-1),b(U++,t+r,T-1)}}const C=[[w.T.POSITION,new h.a(y,P,3,!0)],[w.T.NORMAL,new h.a(A,S,3,!0)],[w.T.UV0,new h.a(M,P,2,!0)]];return new p.Z(e,C)}function J(e,t,n,r,o,a){r=r||10,o=null==o||o,(0,d.hu)(t.length>1);const i=[],c=[];for(let e=0;e<r;e++){i.push([0,-e-1,-(e+1)%r-1]);const t=e/r*2*Math.PI;c.push([Math.cos(t)*n,Math.sin(t)*n])}return ee(e,c,t,[[0,0,0]],i,o,a)}function ee(e,t,n,r,c,l,d=(0,a.al)(0,0,0)){const g=t.length,v=(0,s.xx)(n.length*g*3+(6*r.length||0)),O=(0,s.xx)(n.length*g*3+(r?6:0)),x=new Array,m=new Array;let T=0,y=0;const A=(0,i.Ue)(),M=(0,i.Ue)(),P=(0,i.Ue)(),S=(0,i.Ue)(),b=(0,i.Ue)(),U=(0,i.Ue)(),R=(0,i.Ue)(),I=(0,i.Ue)(),C=(0,i.Ue)(),N=(0,i.Ue)(),z=(0,i.Ue)(),D=(0,i.Ue)(),V=(0,i.Ue)(),F=(0,u.Ue)();(0,o.i)(C,0,1,0),(0,o.d)(M,n[1],n[0]),(0,o.n)(M,M),l?((0,o.f)(I,n[0],d),(0,o.n)(P,I)):(0,o.i)(P,0,0,1),ie(M,P,C,C,b,P,ce),(0,o.c)(S,P),(0,o.c)(D,b);for(let e=0;e<r.length;e++)(0,o.g)(U,b,r[e][0]),(0,o.g)(I,P,r[e][2]),(0,o.f)(U,U,I),(0,o.f)(U,U,n[0]),v[T++]=U[0],v[T++]=U[1],v[T++]=U[2];O[y++]=-M[0],O[y++]=-M[1],O[y++]=-M[2];for(let e=0;e<c.length;e++)x.push(c[e][0]>0?c[e][0]:-c[e][0]-1+r.length),x.push(c[e][1]>0?c[e][1]:-c[e][1]-1+r.length),x.push(c[e][2]>0?c[e][2]:-c[e][2]-1+r.length),m.push(0),m.push(0),m.push(0);let H=r.length;const E=r.length-1;for(let e=0;e<n.length;e++){let r=!1;e>0&&((0,o.c)(A,M),e<n.length-1?((0,o.d)(M,n[e+1],n[e]),(0,o.n)(M,M)):r=!0,(0,o.f)(N,A,M),(0,o.n)(N,N),(0,o.f)(z,n[e-1],S),(0,u.Yq)(n[e],N,F),(0,u.BR)(F,(0,f.re)(z,A),I)?((0,o.d)(I,I,n[e]),(0,o.n)(P,I),(0,o.h)(b,N,P),(0,o.n)(b,b)):ie(N,S,D,C,b,P,ce),(0,o.c)(S,P),(0,o.c)(D,b)),l&&((0,o.f)(I,n[e],d),(0,o.n)(V,I));for(let a=0;a<g;a++)if((0,o.g)(U,b,t[a][0]),(0,o.g)(I,P,t[a][1]),(0,o.f)(U,U,I),(0,o.n)(R,U),O[y++]=R[0],O[y++]=R[1],O[y++]=R[2],(0,o.f)(U,U,n[e]),v[T++]=U[0],v[T++]=U[1],v[T++]=U[2],!r){const e=(a+1)%g;x.push(H+a),x.push(H+g+a),x.push(H+e),x.push(H+e),x.push(H+g+a),x.push(H+g+e);for(let e=0;e<6;e++){const t=x.length-6;m.push(x[t+e]-E)}}H+=g}const G=n[n.length-1];for(let e=0;e<r.length;e++)(0,o.g)(U,b,r[e][0]),(0,o.g)(I,P,r[e][1]),(0,o.f)(U,U,I),(0,o.f)(U,U,G),v[T++]=U[0],v[T++]=U[1],v[T++]=U[2];const L=y/3;O[y++]=M[0],O[y++]=M[1],O[y++]=M[2];const j=H-g;for(let e=0;e<c.length;e++)x.push(c[e][0]>=0?H+c[e][0]:-c[e][0]-1+j),x.push(c[e][2]>=0?H+c[e][2]:-c[e][2]-1+j),x.push(c[e][1]>=0?H+c[e][1]:-c[e][1]-1+j),m.push(L),m.push(L),m.push(L);const _=[[w.T.POSITION,new h.a(v,x,3,!0)],[w.T.NORMAL,new h.a(O,m,3,!0)]];return new p.Z(e,_)}function te(e,t,n,r){(0,d.hu)(t.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),(0,d.hu)(3===t[0].length,"createPolylineGeometry(): malformed vertex"),(0,d.hu)(null==n||n.length===t.length,"createPolylineGeometry: need same number of points and normals"),(0,d.hu)(null==n||3===n[0].length,"createPolylineGeometry(): malformed normal");const o=(0,c.bg)(3*t.length),a=new Array(2*(t.length-1));let i=0,u=0;for(let e=0;e<t.length;e++){for(let n=0;n<3;n++)o[i++]=t[e][n];e>0&&(a[u++]=e-1,a[u++]=e)}const f=[[w.T.POSITION,new h.a(o,a,3,!0)]];if(n){const e=(0,s.xx)(3*n.length);let r=0;for(let o=0;o<t.length;o++)for(let t=0;t<3;t++)e[r++]=n[o][t];f.push([w.T.NORMAL,new h.a(e,a,3,!0)])}return r&&f.push([w.T.COLOR,new h.a(r,(0,l.KF)(r.length/4),4)]),new p.Z(e,f,null,g.V.Line)}function ne(e,t,n,r,o,a=0){const i=new Array(18),c=[[-n,a,o/2],[r,a,o/2],[0,t+a,o/2],[-n,a,-o/2],[r,a,-o/2],[0,t+a,-o/2]];for(let e=0;e<6;e++)i[3*e]=c[e][0],i[3*e+1]=c[e][1],i[3*e+2]=c[e][2];return new p.Z(e,[[w.T.POSITION,new h.a(i,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function re(e,t){const n=e.getMutableAttribute(w.T.POSITION).data;for(let e=0;e<n.length;e+=3){const r=n[e],a=n[e+1],i=n[e+2];(0,o.i)(se,r,a,i),(0,o.t)(se,se,t),n[e]=se[0],n[e+1]=se[1],n[e+2]=se[2]}}function oe(e,t=e){const n=e.attributes,r=n.get(w.T.POSITION).data,o=n.get(w.T.NORMAL).data;if(o){const e=t.getMutableAttribute(w.T.NORMAL).data;for(let t=0;t<o.length;t+=3){const n=o[t+1];e[t+1]=-o[t+2],e[t+2]=n}}if(r){const e=t.getMutableAttribute(w.T.POSITION).data;for(let t=0;t<r.length;t+=3){const n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function ae(e,t,n,r,a){return!(Math.abs((0,o.e)(t,e))>a||((0,o.h)(n,e,t),(0,o.n)(n,n),(0,o.h)(r,n,e),(0,o.n)(r,r),0))}function ie(e,t,n,r,o,a,i){return ae(e,t,o,a,i)||ae(e,n,o,a,i)||ae(e,r,o,a,i)}const ce=.99619469809,se=(0,i.Ue)()}}]);