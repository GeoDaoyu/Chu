"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78740],{79817:function(e,t,r){r.d(t,{L:function(){return I},b:function(){return _}});var i=r(35567),a=r(27349),n=r(11005),s=r(40122),o=r(87263),c=r(7086),l=r(13743),p=r(45701),d=r(96541),h=r(37124),v=r(23027),u=r(2013),f=r(13663),T=r(48857),m=r(18489),S=r(34709),P=r(52061),g=r(25727),O=r(75047),A=r(15150);function _(e){const t=new A.kG,{space:r,anchor:_,hasTip:I}=e,E=r===g.I9.World;t.include(n.U,e),t.include(o.Q,e),t.include(c.H,e);const{vertex:R,fragment:w,varyings:y}=t;w.include(p.n),(0,d.Sv)(R,e),t.attributes.add(P.T.POSITION,"vec3"),t.attributes.add(P.T.PREVIOUSDELTA,"vec4"),t.attributes.add(P.T.UV0,"vec2"),y.add("vColor","vec4"),y.add("vpos","vec3",{invariant:!0}),y.add("vUV","vec2"),y.add("vSize","float"),I&&y.add("vLineWidth","float"),R.uniforms.add(new h.$("nearFar",(({camera:e})=>e.nearFar)),new v.$("viewport",(({camera:e})=>e.fullViewport))).code.add(T.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),R.code.add(T.H`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),E?(t.attributes.add(P.T.NORMAL,"vec3"),(0,d._8)(R),R.constants.add("tiltThreshold","float",.7),R.code.add(T.H`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):R.code.add(T.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const D=E?"vec3":"vec2";return R.code.add(T.H`
      ${D} normalizedSegment(${D} pos, ${D} prev) {
        ${D} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${E?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${D} displace(${D} pos, ${D} prev, float displacementLen) {
        ${D} segment = normalizedSegment(pos, prev);

        ${D} displacementDirU = perpendicular(segment);
        ${D} displacementDirV = segment;

        ${_===g.i5.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),r===g.I9.Screen&&(R.uniforms.add(new m.C("inverseProjectionMatrix",(({camera:e})=>e.inverseProjectionMatrix))),R.code.add(T.H`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),R.code.add(T.H`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),R.uniforms.add(new f.z("perScreenPixelRatio",(({camera:e})=>e.perScreenPixelRatio))),R.code.add(T.H`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${(0,T.If)(e.hasCap,"if(prev.z > posLeft.z) {\n                vec2 diff = posLeft.xy - posRight.xy;\n                planeOrigin.xy += perpendicular(diff) / 2.0;\n             }")};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),(0,d.ZI)(R),R.main.add(T.H`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);
      clip(pos, prev);

      ${E?T.H`${(0,T.If)(e.hideOnShortSegments,T.H`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:T.H`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${(0,T.If)(r===g.I9.Screen,T.H`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${(0,T.If)(!E,"vUV *= displacedPosScreen.w;")}
      ${(0,T.If)(I,"vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),w.include(a.f5,e),t.include(O.j,e),w.include(l.Y),w.uniforms.add(new u.N("intrinsicColor",(({color:e})=>e)),new S.A("tex",(({markerTexture:e})=>e))).constants.add("texelSize","float",1/i.OJ).code.add(T.H`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),I&&w.constants.add("relativeMarkerSize","float",i.qO/i.OJ).constants.add("relativeTipLineWidth","float",i.zA).code.add(T.H`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${(0,T.If)(E,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),t.include(s.b,e),w.main.add(T.H`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${(0,T.If)(!E,"* gl_FragCoord.w")};
    finalColor.a *= ${I?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),t}const I=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},36121:function(e,t,r){r.d(t,{IM:function(){return o},VD:function(){return l},qj:function(){return s},tl:function(){return c},wp:function(){return n}});var i=r(52890),a=r(52061);const n=(0,i.U$)().vec3f(a.T.POSITION),s=(0,i.U$)().vec3f(a.T.POSITION).vec2f16(a.T.UV0),o=(0,i.U$)().vec3f(a.T.POSITION).vec4u8(a.T.COLOR),c=((0,i.U$)().vec3f(a.T.POSITION).vec2f16(a.T.UV0).vec4u8(a.T.OLIDCOLOR),(0,i.U$)().vec3f(a.T.POSITION).vec2f(a.T.UV0)),l=(0,i.U$)().vec3f(a.T.POSITION).vec2f(a.T.UV0).vec4u8(a.T.OLIDCOLOR)},94759:function(e,t,r){r.d(t,{X:function(){return E}});var i=r(24910),a=r(82846),n=r(57192),s=r(52890),o=r(41044),c=r(59797),l=r(19596),p=r(948),d=r(52061),h=r(70218),v=r(92991),u=r(58257),f=r(29107),T=r(61536),m=r(26041),S=r(79817),P=r(25727),g=r(51135);class O extends f.A{constructor(e,t){super(e,t,new u.J(S.L,(()=>r.e(77855).then(r.bind(r,77855)))),A)}_makePipelineState(e,t){const{output:r,oitPass:i,space:a,hasOccludees:n}=e;return(0,g.sm)({blending:(0,o.c1)(r)?(0,T.Wo)(i):null,depthTest:a===P.I9.Draped?null:{func:(0,T.Bh)(i)},depthWrite:(0,T.W$)(e),drawBuffers:(0,f.E)(r,(0,T.u_)(i,r)),colorWrite:g.gf,stencilWrite:n?m.s3:null,stencilTest:n?t?m.eD:m.RY:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=(0,g.sm)({blending:g.vf,depthTest:m.zV,depthWrite:null,colorWrite:g.gf,stencilWrite:null,stencilTest:m.YD}),this._occluderPipelineOpaque=(0,g.sm)({blending:g.vf,depthTest:m.zV,depthWrite:null,colorWrite:g.gf,stencilWrite:m.P7,stencilTest:m.ii}),this._occluderPipelineMaskWrite=(0,g.sm)({blending:null,depthTest:m.JN,depthWrite:null,colorWrite:null,stencilWrite:m.s3,stencilTest:m.eD})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===p.r.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===p.r.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const A=new Map([[d.T.POSITION,0],[d.T.PREVIOUSDELTA,1],[d.T.UV0,2],[d.T.COLOR,3],[d.T.COLORFEATUREATTRIBUTE,3],[d.T.OPACITYFEATUREATTRIBUTE,4],[d.T.SIZE,5],[d.T.SIZEFEATUREATTRIBUTE,5],[d.T.NORMAL,6]]);var _=r(55138),I=r(64801);class E extends l.F5{constructor(e){super(e,w),this._configuration=new P.PI,this.vertexAttributeLocations=A,this.produces=new Map([[p.r.OPAQUE_MATERIAL,e=>e===o.H_.Highlight||(0,o.D5)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,o.BX)(e)],[p.r.OCCLUDER_MATERIAL,e=>(0,o.Xo)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,o.Xo)(e)&&this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil],[p.r.TRANSPARENT_MATERIAL,e=>(0,o.D5)(e)&&this.parameters.writeDepth],[p.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,o.D5)(e)&&!this.parameters.writeDepth],[p.r.DRAPED_MATERIAL,e=>(0,o.c1)(e)||e===o.H_.Highlight]]),this.intersectDraped=void 0,this._layout=this.createLayout()}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.space=t.slot===p.r.DRAPED_MATERIAL?P.I9.Draped:this.parameters.worldSpace?P.I9.World:P.I9.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==_.R.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===l.yD.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,o.c1)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=I.e}intersect(){}createLayout(){const e=(0,s.U$)().vec3f(d.T.POSITION).vec4f16(d.T.PREVIOUSDELTA).vec2f16(d.T.UV0);return this.parameters.vvColor?e.f32(d.T.COLORFEATUREATTRIBUTE):e.vec4u8(d.T.COLOR,{glNormalized:!0}),this.parameters.vvOpacity&&e.f32(d.T.OPACITYFEATUREATTRIBUTE),this.parameters.vvSize?e.f32(d.T.SIZEFEATUREATTRIBUTE):e.f16(d.T.SIZE),this.parameters.worldSpace&&e.vec3f16(d.T.NORMAL),e}createBufferWriter(){return new y(this._layout,this.parameters)}createGLMaterial(e){return new R(e)}}class R extends c.Z{dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this.getTechnique(O,e)}}class w extends h.n{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=_.R.BUTT,this.anchor=P.i5.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class y{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(e,t,r,a,s,o){const c=r.get(d.T.POSITION).data,l=c.length/3;let p=[1,0,0];const h=r.get(d.T.NORMAL);this._parameters.worldSpace&&null!=h&&(p=h.data);let u=1,f=0;this._parameters.vvSize?f=r.get(d.T.SIZEFEATUREATTRIBUTE).data[0]:r.has(d.T.SIZE)&&(u=r.get(d.T.SIZE).data[0]);let T=[1,1,1,1],m=0;this._parameters.vvColor?m=r.get(d.T.COLORFEATUREATTRIBUTE).data[0]:r.has(d.T.COLOR)&&(T=r.get(d.T.COLOR).data);let S=0;this._parameters.vvOpacity&&(S=r.get(d.T.OPACITYFEATUREATTRIBUTE).data[0]);const P=new Float32Array(s.buffer),g=(0,n.TQ)(s.buffer),O=new Uint8Array(s.buffer);let A=o*(this.vertexBufferLayout.stride/4);const _=P.BYTES_PER_ELEMENT/g.BYTES_PER_ELEMENT,I=4/_,E=(e,t,r,i)=>{P[A++]=e[0],P[A++]=e[1],P[A++]=e[2],(0,v.DO)(t,e,g,A*_),A+=I;let a=A*_;if(g[a++]=r[0],g[a++]=r[1],A=Math.ceil(a/_),this._parameters.vvColor)P[A++]=m;else{const e=Math.min(4*i,T.length-4),t=4*A++;O[t]=255*T[e],O[t+1]=255*T[e+1],O[t+2]=255*T[e+2],O[t+3]=255*T[e+3]}this._parameters.vvOpacity&&(P[A++]=S),a=A*_,this._parameters.vvSize?(P[A++]=f,a+=2):g[a++]=u,this._parameters.worldSpace&&(g[a++]=p[0],g[a++]=p[1],g[a++]=p[2]),A=Math.ceil(a/_)};let R;var w;(w=R||(R={}))[w.ASCENDING=1]="ASCENDING",w[w.DESCENDING=-1]="DESCENDING";const y=(t,r)=>{const a=(0,i.i)(D,c[3*t],c[3*t+1],c[3*t+2]),n=L;let s=t+r;do{(0,i.i)(n,c[3*s],c[3*s+1],c[3*s+2]),s+=r}while((0,i.G)(a,n)&&s>=0&&s<l);e&&((0,i.t)(a,a,e),(0,i.t)(n,n,e)),E(a,n,[-1,-1],t),E(a,n,[1,-1],t),E(a,n,[1,1],t),E(a,n,[-1,-1],t),E(a,n,[1,1],t),E(a,n,[-1,1],t)},x=this._parameters.placement;return"begin"!==x&&"begin-end"!==x||y(0,R.ASCENDING),"end"!==x&&"begin-end"!==x||y(l-1,R.DESCENDING),null}}const D=(0,a.Ue)(),L=(0,a.Ue)()}}]);