"use strict";(self.webpackChunkscene_pro=self.webpackChunkscene_pro||[]).push([[92273],{97579:function(e,t,i){i.d(t,{L:function(){return v},b:function(){return _}});var n=i(31865),r=i(10934),a=i(26821),s=i(41788),l=i(83270),o=i(37124),c=i(13663),h=i(85119),d=i(48857),u=i(18489),p=i(95334),f=i(52061),g=i(15150);function _(e){const t=new g.kG;t.include(l.j,e);const{vertex:i,fragment:r}=t;i.uniforms.add(new p.g("modelView",((e,{camera:t})=>(0,n.Iu)(b,t.viewMatrix,e.origin))),new u.C("proj",(({camera:e})=>e.projectionMatrix)),new h.p("glowWidth",((e,{camera:t})=>e.glowWidth*t.pixelRatio)),new o.$("pixelToNDC",(({camera:e})=>(0,a.t8)(m,2/e.fullViewport[2],2/e.fullViewport[3])))),t.attributes.add(f.T.START,"vec3"),t.attributes.add(f.T.END,"vec3"),e.spherical&&(t.attributes.add(f.T.START_UP,"vec3"),t.attributes.add(f.T.END_UP,"vec3")),t.attributes.add(f.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewSegmentNormal","vec3"),t.varyings.add("vViewStartNormal","vec3"),t.varyings.add("vViewEndNormal","vec3");const s=!e.spherical;return i.main.add(d.H`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${(0,d.If)(s,d.H`vec3 startUp = vec3(0, 0, 1);`)}
    ${(0,d.If)(s,d.H`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),r.uniforms.add(new c.z("perScreenPixelRatio",(e=>e.camera.perScreenPixelRatio))),r.code.add(d.H`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),r.main.add(d.H`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),t}const m=(0,s.Ue)(),b=(0,r.Ue)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},23614:function(e,t,i){i.d(t,{L:function(){return I},b:function(){return x},d:function(){return E}});var n=i(99574),r=i(26821),a=i(41788),s=i(24910),l=i(82846),o=i(73749),c=i(27583),h=i(88970),d=i(77773),u=i(69055),p=i(83270),f=i(17904),g=i(19155),_=i(87688),m=i(9535),b=i(2013),v=i(13663),P=i(85119),D=i(48857),w=i(15150);const E=(0,n.Vl)(6);function x(e){const t=new w.kG;t.include(f.k),t.include(p.j,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new P.p("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(D.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,s.t)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,s.t)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new b.N("heightManifoldOrigin",((i,n)=>(e(C,i,n),t(A,n),(0,s.d)(A,A,C),(0,s.n)(S,A),S[3]=(0,s.l)(A),S))),new _.d("globalOrigin",(e=>t(C,e))),new P.p("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,s.j)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,s.l)(e.heightManifoldTarget)))),i.code.add(D.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(D.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new P.p("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(D.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&i.uniforms.add(new v.z("perScreenPixelRatio",(e=>e.camera.perScreenPixelRatio))).code.add(D.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(D.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.main.add(D.H`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){i.uniforms.add(new g.A("angleCutoff",(e=>V(e))),new b.N("heightPlane",((e,t)=>T(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,C),t.camera.viewMatrix))));const t=e.spherical?D.H`normalize(globalOrigin - pos)`:D.H`heightPlane.xyz`;i.main.add(D.H`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>V(e))),new b.N("pointDistanceSphere",((e,t)=>function(e,t){return(0,s.t)((0,u.a)(R),e.pointDistanceOrigin,t.camera.viewMatrix),R[3]=(0,s.j)(e.pointDistanceOrigin,e.pointDistanceTarget),R}(e,t)))),i.main.add(D.H`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>V(e))),new b.N("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.KU)(e.lineVerticalPlaneSegment,.5,C),n=e.renderCoordsHelper.worldUpAtPosition(i,L),r=(0,s.n)(A,e.lineVerticalPlaneSegment.vector),a=(0,s.h)(C,n,r);return(0,s.n)(a,a),T(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}(e,t))),new m.J("lineVerticalStart",((e,t)=>function(e,t){const i=(0,s.c)(C,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,s.t)(i,i,t.camera.viewMatrix)}(e,t))),new m.J("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,s.f)(C,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,s.t)(i,i,t.camera.viewMatrix)}(e,t)))),i.main.add(D.H`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.A("angleCutoff",(e=>V(e))),new m.J("intersectsLineStart",((e,t)=>(0,s.t)(C,e.lineStartWorld,t.camera.viewMatrix))),new m.J("intersectsLineEnd",((e,t)=>(0,s.t)(C,e.lineEndWorld,t.camera.viewMatrix))),new m.J("intersectsLineDirection",((e,t)=>((0,s.c)(S,e.intersectsLineSegment.vector),S[3]=0,(0,s.n)(C,(0,o.t)(S,S,t.camera.viewMatrix))))),new P.p("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.main.add(D.H`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),i.main.add(D.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function V(e){return(0,r.t8)(y,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.Vl)(2))))}function T(e,t,i){return(0,s.t)(U,e,i),(0,s.c)(S,t),S[3]=0,(0,o.t)(S,S,i),(0,d.Yq)(U,S,M)}const y=(0,a.Ue)(),C=(0,l.Ue)(),S=(0,c.Ue)(),L=(0,l.Ue)(),A=(0,l.Ue)(),U=(0,l.Ue)(),M=(0,d.Ue)(),R=(0,u.c)(),I=Object.freeze(Object.defineProperty({__proto__:null,build:x,defaultAngleCutoff:E},Symbol.toStringTag,{value:"Module"}))},82845:function(e,t,i){i.d(t,{W:function(){return $}});i(61432);var n=i(24910),r=i(82846),a=i(88970),s=i(56960),l=i(73440),o=i(61100),c=i(17155),h=(i(96711),i(83850),i(48023)),d=i(41207),u=i(33869),p=i(12659),f=i(56172),g=i(26173),_=i(52054),m=i(25631),b=i(60199),v=i(72894),P=i(52890),D=i(58257),w=i(29107),E=i(99574),x=i(23614),V=i(74826);class T extends V.K{constructor(){super(...arguments),this.innerColor=(0,r.al)(1,1,1),this.innerWidth=1,this.glowColor=(0,r.al)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,E.Vl)(6),this.pointDistanceOrigin=(0,r.Ue)(),this.pointDistanceTarget=(0,r.Ue)(),this.lineVerticalPlaneSegment=(0,a.Ue)(),this.intersectsLineSegment=(0,a.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,r.Ue)(),this.lineStartWorld=(0,r.Ue)(),this.lineEndWorld=(0,r.Ue)()}}class y extends w.A{constructor(e,t){super(e,t,new D.J(x.L,(()=>i.e(77672).then(i.bind(i,77672)))))}}var C=i(52061),S=i(97579);class L extends T{constructor(){super(...arguments),this.origin=(0,r.Ue)()}}class A extends w.A{constructor(e,t){super(e,t,new D.J(S.L,(()=>i.e(15724).then(i.bind(i,15724)))),U)}}const U=new Map([[C.T.START,0],[C.T.END,1],[C.T.EXTRUDE,2],[C.T.START_UP,3],[C.T.END_UP,4]]);var M=i(32335),R=i(92761),I=i(65650);class O{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.Ue)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,b.bg)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.i)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.i)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(I.MX.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===f.JY.Global?z:j}_ensureVAO(e){return null==this._buffers?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new M.U(e,U,new Map([["data",(0,v.K)(this._layout)]]),new Map([["data",R.f.createVertex(e,I.l1.STATIC_DRAW,i)]]))}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+H(t)),0);this._count=t;const i=this._layout.createBuffer(t),r=this._origin;let a=0,s=0;const l="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const t of e){for(let e=0;e<t.length;e+=3){const o=(0,n.i)(q,t[e],t[e+1],t[e+2]);0===e?s=this._renderCoordsHelper.getAltitude(o):this._renderCoordsHelper.setAltitude(o,s);const c=a+2*e;l?.(e,c,t,o);const h=(0,n.d)(q,o,r);if(e<t.length-3){for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0)for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}a+=H(t)}return i.buffer}_setUpVectors(e,t,i,n,r){const a=this._renderCoordsHelper.worldUpAtPosition(r,N);if(t<n.length-3)for(let t=0;t<6;t++)e.startUp.setVec(i+t,a);if(t>0)for(let t=-6;t<0;t++)e.endUp.setVec(i+t,a)}}function H(e){return 2*(e.length/3-1)*3}const N=(0,r.Ue)(),q=(0,r.Ue)(),z=(0,P.U$)().vec3f(C.T.START).vec3f(C.T.END).vec2f(C.T.EXTRUDE).vec3f(C.T.START_UP).vec3f(C.T.END_UP),j=(0,P.U$)().vec3f(C.T.START).vec3f(C.T.END).vec2f(C.T.EXTRUDE);var F=i(83046);class W extends F.m{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}(0,l._)([(0,F.o)()],W.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,F.o)()],W.prototype,"spherical",void 0);class X extends W{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,l._)([(0,F.o)()],X.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,F.o)()],X.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,F.o)()],X.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,F.o)()],X.prototype,"intersectsLineEnabled",void 0);var G=i(32420),B=i(87265),J=i(38419);let k=class extends _.Z{constructor(e){super(e),this.isDecoration=!0,this.produces=g.CM.LASERLINES,this.consumes={required:[g.CM.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new X,this._pathTechniqueConfiguration=new W,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new L;const t=e.view.stage.renderView.techniques,i=new W;i.contrastControlEnabled=e.contrastControlEnabled,t.precompile(A,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===f.JY.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(A,this._pathTechniqueConfiguration),this._blit=new m.N(this._techniques,J.J.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=(0,o.M2)(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view.stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this.requestRender(G.Xx.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this.requestRender(G.Xx.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this.requestRender(G.Xx.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this.requestRender(G.Xx.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this.requestRender(G.Xx.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this.requestRender(G.Xx.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,a.JG)(e,this._passParameters.lineVerticalPlaneSegment),this.requestRender(G.Xx.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this.requestRender(G.Xx.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,a.JG)(e,this._passParameters.intersectsLineSegment),this.requestRender(G.Xx.UPDATE)}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this.requestRender(G.Xx.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this.requestRender(G.Xx.UPDATE))}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new O(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this.requestRender(G.Xx.UPDATE)}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new O(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this.requestRender(G.Xx.UPDATE)}setParameters(e){(0,B.LO)(this._passParameters,e)&&this.requestRender(G.Xx.UPDATE)}precompile(){this._acquireTechnique()}render(e){const t=e.find((({name:e})=>e===this.produces));if(this.isDecoration&&!this.bindParameters.decorations||null==this._blit)return t;const i=this.renderingContext,n=e.find((({name:e})=>"normals"===e));this._passParameters.normals=n?.getTexture();const r=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(t.fbo),r(),t;this._passParameters.colors=t.getTexture();const a=this.fboCache.acquire(t.fbo.width,t.fbo.height,"laser lines");return i.bindFramebuffer(a.fbo),i.setClearColor(0,0,0,0),i.clear(I.Hf.COLOR|I.Hf.DEPTH),r(),i.unbindTexture(t.getTexture()),this._blit.blend(i,a,t,this.bindParameters)||this.requestRender(G.Xx.UPDATE),a.release(),t}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===f.JY.Global,this._techniques.get(y,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const e=this._acquireTechnique();if(e.compiled){const t=this.renderingContext;t.bindTechnique(e,this.bindParameters,this._passParameters),t.screen.draw()}else this.requestRender(G.Xx.UPDATE)}_renderPath(){if(null==this._pathVerticalPlaneData)return;const e=this._techniques.get(A,this._pathTechniqueConfiguration);if(e.compiled){const t=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,t.bindTechnique(e,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(t)}else this.requestRender(G.Xx.UPDATE)}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const e=this.bindParameters.camera,t=this._passParameters;if(this._intersectsLineInfinite){if((0,d.iL)((0,p.re)(t.intersectsLineSegment.origin,t.intersectsLineSegment.vector),Y),Y.c0=-Number.MAX_VALUE,!(0,u.zq)(e.frustum,Y))return!1;(0,d.Ws)(Y,t.lineStartWorld),(0,d.S$)(Y,t.lineEndWorld)}else(0,n.c)(t.lineStartWorld,t.intersectsLineSegment.origin),(0,n.f)(t.lineEndWorld,t.intersectsLineSegment.origin,t.intersectsLineSegment.vector);return!0}get test(){}};(0,l._)([(0,c.Cb)({constructOnly:!0})],k.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.Cb)()],k.prototype,"isDecoration",void 0),(0,l._)([(0,c.Cb)()],k.prototype,"produces",void 0),(0,l._)([(0,c.Cb)()],k.prototype,"consumes",void 0),k=(0,l._)([(0,h.j)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],k);const Y=(0,d.Ue)();class $ extends s.l{constructor(e){super(e),this._angleCutoff=x.d,this._style={},this._heightManifoldTarget=(0,r.Ue)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,a.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,Z);this.intersectsLine=(0,a.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,a.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,a.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,r.d9)(e.origin),target:e.target?(0,r.d9)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}get isDecoration(){return this._isDecoration}set isDecoration(e){this._isDecoration=e,this._renderer&&(this._renderer.isDecoration=e)}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new k({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){null!=this._renderer&&this._renderer.setParameters(this._style)}_syncAngleCutoff(){this._renderer?.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view.stage&&(this._renderer.destroy(),this._renderer=null)}forEachMaterial(){}}const Z=(0,r.Ue)()},56960:function(e,t,i){i.d(t,{l:function(){return r}});i(61432);var n=i(90403);class r{get isDecoration(){return this._isDecoration}set isDecoration(e){this._isDecoration=e,this.forEachMaterial((t=>t?.setParameters({isDecoration:e})))}constructor(e){this._isDecoration=!1,this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e.view,this._handle=(0,n.YP)((()=>e.view.ready),(e=>{this._resourcesCreated&&(e?this._createResources():this._destroyResources())}))}applyProperties(e){let t=!1;for(const i in e)i in this&&("attached"===i?t=!!e[i]:this[i]=e[i]);this.attached=t}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view.stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(e))}onAttachedChange(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}},55277:function(e,t,i){i.d(t,{Y:function(){return _},c:function(){return v}});var n=i(26821),r=i(41788),a=i(27583),s=i(47925),l=i(8008),o=i(60199),c=i(39909),h=i(38766),d=i(56172),u=i(81749),p=i(25952),f=i(52061),g=i(52964);function _(e,t,i=null){const r=[],_=t.mapPositions;!function(e,t){const{attributeData:{position:i},removeDuplicateStartEnd:n}=e,r=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(i)&&n,a=i.length/3-(r?1:0),s=new Array(2*(a-1)),l=r?i.slice(0,-3):i;let o=0;for(let e=0;e<a-1;e++)s[o++]=e,s[o++]=e+1;t.push([f.T.POSITION,new u.a(l,s,3,r)])}(t,r);const v=r[0][1].data,P=r[0][1].indices.length,D=(0,h.LE)(P);return function(e,t,i){if(null!=e.attributeData.colorFeature)return;const n=e.attributeData.color;t.push([f.T.COLOR,new u.a(n??a.hq,i,4)])}(t,r,D),function(e,t,i){null==e.attributeData.sizeFeature&&t.push([f.T.SIZE,new u.a([e.attributeData.size??1],i,1,!0)])}(t,r,D),function(e,t,i){e.attributeData.normal&&t.push([f.T.NORMAL,new u.a(e.attributeData.normal,i,3)])}(t,r,D),function(e,t,i){null!=e.attributeData.colorFeature&&t.push([f.T.COLORFEATUREATTRIBUTE,new u.a([e.attributeData.colorFeature],i,1,!0)])}(t,r,D),function(e,t,i){null!=e.attributeData.sizeFeature&&t.push([f.T.SIZEFEATUREATTRIBUTE,new u.a([e.attributeData.sizeFeature],i,1,!0)])}(t,r,D),function(e,t,i){null!=e.attributeData.opacityFeature&&t.push([f.T.OPACITYFEATUREATTRIBUTE,new u.a([e.attributeData.opacityFeature],i,1,!0)])}(t,r,D),function(e,t,i){if(null==e.overlayInfo||e.overlayInfo.renderCoordsHelper.viewingMode!==d.JY.Global||!e.overlayInfo.spatialReference.isGeographic)return;const r=(0,o.bg)(i.length),a=(0,s.Iu)(e.overlayInfo.spatialReference);for(let e=0;e<r.length;e+=3)(0,l.gH)(i,e,r,e,a);const h=i.length/3,p=(0,c.xx)(h+1);let g=m,_=b,v=0,P=0;(0,n.t8)(g,r[P++],r[P++]),P++,p[0]=0;for(let e=1;e<h+1;++e)e===h&&(P=0),(0,n.t8)(_,r[P++],r[P++]),P++,v+=(0,n.TK)(g,_),p[e]=v,[g,_]=[_,g];t.push([f.T.DISTANCETOSTART,new u.a(p,t[0][1].indices,1,!0)])}(t,r,v),new p.Z(e,r,_,g.V.Line,i)}const m=(0,r.Ue)(),b=(0,r.Ue)();function v(e,t){if(null==e||0===e.length)return[];const i=[];return e.forEach((e=>{const n=e.length,r=(0,o.bg)(3*n);e.forEach(((e,t)=>{r[3*t]=e[0],r[3*t+1]=e[1],r[3*t+2]=e[2]}));const a={attributeData:{position:r,normal:t},removeDuplicateStartEnd:!1};i.push(a)})),i}},83270:function(e,t,i){i.d(t,{j:function(){return d}});var n=i(20638),r=i(34630),a=i(77983),s=i(9535),l=i(85119),o=i(48857),c=i(71063),h=i(34709);function d(e,t){const i=e.fragment;i.include(n.K),e.include(a.GZ),i.include(r.m),i.uniforms.add(new l.p("globalAlpha",(e=>e.globalAlpha)),new s.J("glowColor",(e=>e.glowColor)),new l.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new l.p("glowFalloff",(e=>e.glowFalloff)),new s.J("innerColor",(e=>e.innerColor)),new l.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new c.e("depthMap",(e=>e.depth?.attachment)),new h.A("normalMap",(e=>e.normals))),i.code.add(o.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(o.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(o.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
vec3 normalReconstructed = normalize(cross(dFdx(pos), dFdy(pos)));
vec3 normalFromTexture = normalize(texture(normalMap, uv).xyz * 2.0 - 1.0);
float blendFactor = smoothstep(0.15, 0.2, depthError);
normal = normalize(mix(normalReconstructed, normalFromTexture, blendFactor));
angleCutoffAdjust = mix(0.0, 0.004, blendFactor);
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?i.uniforms.add(new h.A("frameColor",((e,t)=>e.colors)),new l.p("globalAlphaContrastBoost",(e=>e.globalAlphaContrastBoost))).code.add(o.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):i.code.add(o.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);