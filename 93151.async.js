"use strict";(self.webpackChunkscene_pro=self.webpackChunkscene_pro||[]).push([[93151],{15086:function(e,t,o){o.d(t,{H:function(){return L},b:function(){return w},c:function(){return D},f:function(){return j}});var i=o(26821),r=o(41788),n=o(27583),s=o(21414),a=o(41044),l=o(27349),c=o(68647),d=o(89755),u=o(19615),f=o(99907),p=o(42609),h=o(40122),g=o(88489),v=o(13743),m=o(45701),T=o(39863),S=o(96541),x=o(19155),C=o(23027),O=o(90285),b=o(2013),A=o(13663),P=o(85119),y=o(48857),z=o(71063),E=o(34709),I=o(33610),_=o(52061),F=o(15150),R=o(64801);function w(e){const t=new F.kG,{signedDistanceFieldEnabled:o,occlusionTestEnabled:r,horizonCullingEnabled:w,pixelSnappingEnabled:j,hasScreenSizePerspective:L,debugDrawLabelBorder:M,vvSize:B,vvColor:$,hasRotation:V,occludedFragmentFade:q,sampleSignedDistanceFieldTexelCenter:k}=e;t.include(u.R,e),t.vertex.include(l.$S,e);const{occlusionPass:G,output:X,oitPass:W}=e;if(G)return t.include(f.R,e),t;const{vertex:Z,fragment:Y}=t;t.include(T.cK),t.include(g.k,e),t.include(c.R,e),r&&t.include(p.P),Y.include(m.n),Y.include(v.Y),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const Q=X===a.H_.Highlight,J=Q&&r;J&&t.varyings.add("voccluded","float"),Z.uniforms.add(new C.$("viewport",(e=>e.camera.fullViewport)),new x.A("screenOffset",((e,t)=>(0,i.t8)(U,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new x.A("anchorPosition",(e=>D(e))),new b.N("materialColor",(e=>e.color)),new P.p("materialRotation",(e=>e.rotation)),new E.A("tex",(e=>e.texture))),(0,S.ZI)(Z),o&&(Z.uniforms.add(new b.N("outlineColor",(e=>e.outlineColor))),Y.uniforms.add(new b.N("outlineColor",(e=>H(e)?e.outlineColor:n.AG)),new P.p("outlineSize",(e=>H(e)?e.outlineSize:0)))),w&&Z.uniforms.add(new O.$("pointDistanceSphere",((e,t)=>{const o=t.camera.eye,i=e.origin;return(0,n.al)(i[0]-o[0],i[1]-o[1],i[2]-o[2],s.sv.radius)}))),j&&Z.include(d.H),L&&((0,T.ww)(Z),(0,T.m8)(Z)),M&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(_.T.UVI,"vec2"),t.attributes.add(_.T.COLOR,"vec4"),t.attributes.add(_.T.SIZE,"vec2"),t.attributes.add(_.T.ROTATION,"float"),(B||$)&&t.attributes.add(_.T.FEATUREATTRIBUTE,"vec4"),Z.code.add(w?y.H`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:y.H`bool behindHorizon(vec3 posModel) { return false; }`),Z.main.add(y.H`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${(0,y.If)(L,y.H`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,y.H`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,y.If)(B,y.H`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${(0,y.If)(r,y.H`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${(0,y.If)(M,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${(0,y.If)(J,y.H`voccluded = visible ? 0.0 : 1.0;`)}
  `);const K=y.H`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${N} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${N} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${(0,y.If)(V,y.H`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ee=j?o?y.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:y.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:y.H`posProj += quadOffset;`;Z.main.add(y.H`
    ${K}
    ${$?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${(0,y.If)(X===a.H_.ObjectAndLayerIdColor,y.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${y.H.float(R.e)};
    ${(0,y.If)(o,`alphaDiscard = alphaDiscard && outlineColor.a < ${y.H.float(R.e)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ee}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,y.If)(M,y.H`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),Y.uniforms.add(new E.A("tex",(e=>e.texture))),q&&!Q&&Y.uniforms.add(new z.e("depthMap",(e=>e.mainDepth)),new A.z("occludedOpacity",(e=>e.hudOccludedFragmentOpacity)));const te=M?y.H`(isBorder > 0.0 ? 0.0 : ${y.H.float(R.e)})`:y.H.float(R.e),oe=y.H`
    ${(0,y.If)(M,y.H`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${(0,y.If)(k,y.H`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${o?y.H`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${te} ||
          fillPixelColor.a + outlinePixelColor.a < ${y.H.float(R.e)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,y.If)(!Q,y.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${te}) {
          discard;
        }

        ${(0,y.If)(!Q,y.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:y.H`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${te}) {
            discard;
          }
          ${(0,y.If)(!Q,y.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${(0,y.If)(q&&!Q,y.H`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${(0,y.If)(!Q&&M,y.H`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(X){case a.H_.Color:case a.H_.ColorEmission:t.outputs.add("fragColor","vec4",0),X===a.H_.ColorEmission&&t.outputs.add("fragEmission","vec4",1),W===I.M.ColorAlpha&&t.outputs.add("fragAlpha","float",X===a.H_.ColorEmission?2:1),Y.main.add(y.H`
        ${oe}
        ${(0,y.If)(W===I.M.FrontFace,y.H`fragColor.rgb /= fragColor.a;`)}
        ${(0,y.If)(X===a.H_.ColorEmission,y.H`fragEmission = vec4(0.0);`)}
        ${(0,y.If)(W===I.M.ColorAlpha,y.H`fragAlpha = fragColor.a;`)}`);break;case a.H_.ObjectAndLayerIdColor:Y.main.add(y.H`
        ${oe}
        outputObjectAndLayerIdColor();`);break;case a.H_.Highlight:t.include(h.b,e),Y.main.add(y.H`
        ${oe}
        outputHighlight(${(0,y.If)(J,y.H`voccluded == 1.0`,y.H`false`)});`)}return t}function H(e){return e.outlineColor[3]>0&&e.outlineSize>0}function D(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,o=e.distanceFieldBoundingBox,r=U,(0,i.t8)(r,t[0]*(o[2]-o[0])+o[0],t[1]*(o[3]-o[1])+o[1])):(0,i.JG)(U,e.anchorPosition),U;var t,o,r}const U=(0,r.Ue)(),j=32e3,N=y.H.float(j),L=Object.freeze(Object.defineProperty({__proto__:null,build:w,calculateAnchorPosition:D,fullUV:j},Symbol.toStringTag,{value:"Module"}))},96937:function(e,t,o){o.d(t,{A:function(){return a},f:function(){return s}});var i=o(82846),r=o(13132),n=o(2051);function s(e,t,o){return!!(0,n.S)(e,t,l,o.spatialReference)&&(o.x=l[0],o.y=l[1],o.z=l[2],!0)}async function a(e,t,o,i){return await(0,r.initializeProjection)(t,o.spatialReference,null,i),s(e,t,o)}const l=(0,i.Ue)()},99907:function(e,t,o){o.d(t,{R:function(){return s}});var i=o(89755),r=o(7086),n=o(48857);function s(e,t){const{vertex:o,fragment:s}=e;e.include(r.H,t),o.include(i.H),o.main.add(n.H`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),s.main.add(n.H`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}},3970:function(e,t,o){o.d(t,{A:function(){return X}});var i=o(99574),r=o(96373),n=o(30748),s=o(31865),a=o(10934),l=o(26821),c=o(41788),d=o(24910),u=o(82846),f=o(27583);function p(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var h=o(47566),g=o(81342),v=o(76e3),m=o(27762),T=o(52890),S=o(41044),x=o(19615),C=o(95285),O=o(40156),b=o(19596),A=o(948),P=o(31484),y=o(61719),z=o(52061),E=o(83584),I=o(92991),_=o(87265),F=o(15086),R=o(58257),w=o(29107),H=o(33610),D=o(61536),U=o(65650),j=o(51135);class N extends w.A{constructor(e,t){super(e,t,new R.J(F.H,(()=>o.e(93071).then(o.bind(o,93071))))),this.primitiveType=t.occlusionPass?U.MX.POINTS:U.MX.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:o,draped:i,output:r,depthTestEnabled:n,occlusionPass:s}=e,a=t===H.M.NONE,l=t===H.M.ColorAlpha,c=r===S.H_.Highlight,d=n&&!i&&!l&&!s&&!c;return(0,j.sm)({blending:(0,S.c1)(r)?a?j.Zo:(0,D.j7)(t):null,depthTest:n&&!i?{func:U.wb.LEQUAL}:null,depthWrite:d?j.ck:null,drawBuffers:(0,D.u_)(t,r),colorWrite:j.gf,polygonOffset:o?L:null})}}const L={factor:0,units:-4};var M=o(73440),B=o(31839),$=o(34479),V=o(83046),q=o(91041);class k extends q.W{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=B.I.None,this.emissionSource=$.jo.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}(0,M._)([(0,V.o)()],k.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"occlusionTestEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"signedDistanceFieldEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,M._)([(0,V.o)()],k.prototype,"vvSize",void 0),(0,M._)([(0,V.o)()],k.prototype,"vvColor",void 0),(0,M._)([(0,V.o)()],k.prototype,"hasVerticalOffset",void 0),(0,M._)([(0,V.o)()],k.prototype,"hasScreenSizePerspective",void 0),(0,M._)([(0,V.o)()],k.prototype,"hasRotation",void 0),(0,M._)([(0,V.o)()],k.prototype,"debugDrawLabelBorder",void 0),(0,M._)([(0,V.o)()],k.prototype,"hasPolygonOffset",void 0),(0,M._)([(0,V.o)()],k.prototype,"depthTestEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"pixelSnappingEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"draped",void 0),(0,M._)([(0,V.o)()],k.prototype,"terrainDepthTest",void 0),(0,M._)([(0,V.o)()],k.prototype,"cullAboveTerrain",void 0),(0,M._)([(0,V.o)()],k.prototype,"occlusionPass",void 0),(0,M._)([(0,V.o)()],k.prototype,"occludedFragmentFade",void 0),(0,M._)([(0,V.o)()],k.prototype,"objectAndLayerIdColorInstanced",void 0),(0,M._)([(0,V.o)()],k.prototype,"horizonCullingEnabled",void 0),(0,M._)([(0,V.o)()],k.prototype,"isFocused",void 0);var G=o(64801);class X extends b.F5{constructor(e,t){super(e,me),this.produces=new Map([[A.r.HUD_MATERIAL,e=>(0,S.Qo)(e)&&!this.parameters.drawAsLabel],[A.r.LABEL_MATERIAL,e=>(0,S.Qo)(e)&&this.parameters.drawAsLabel],[A.r.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[A.r.DRAPED_MATERIAL,e=>this.parameters.draped&&(0,S.Qo)(e)]]),this._visible=!0,this._configuration=new k(t)}getConfiguration(e,t){const o=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=o,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===A.r.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!o&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===A.r.OCCLUSION_PIXELS,(0,S.c1)(e)&&(this._configuration.debugDrawLabelBorder=!!m.h.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,o,i,n,a){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:h,camera:g}=o,{parameters:v}=this;if(!l||!c||p&&v.isLabel||!e.visible||!h||!g)return;const m=e.attributes.get(z.T.FEATUREATTRIBUTE),T=null==m?null:(0,f.nI)(m.data,ue),{scaleX:S,scaleY:x}=Ce(T,v,g.pixelRatio);(0,r.xO)(ne,t),e.attributes.has(z.T.FEATUREATTRIBUTE)&&function(e){const t=e[0],o=e[1],i=e[2],r=e[3],n=e[4],s=e[5],a=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+o*o+i*i),u=1/Math.sqrt(r*r+n*n+s*s),f=1/Math.sqrt(a*a+l*l+c*c);e[0]=t*d,e[1]=o*d,e[2]=i*d,e[3]=r*u,e[4]=n*u,e[5]=s*u,e[6]=a*f,e[7]=l*f,e[8]=c*f}(ne);const C=e.attributes.get(z.T.POSITION),O=e.attributes.get(z.T.SIZE),b=e.attributes.get(z.T.NORMAL),A=e.attributes.get(z.T.ROTATION),E=e.attributes.get(z.T.CENTEROFFSETANDDISTANCE);(0,y.hu)(C.size>=3);const I=(0,F.c)(v),_="screen"===this.parameters.centerOffsetUnits;for(let e=0;e<C.data.length/C.size;e++){const i=e*C.size;(0,d.i)(J,C.data[i],C.data[i+1],C.data[i+2]),(0,d.t)(J,J,t),(0,d.t)(J,J,g.viewMatrix);const r=e*E.size;if((0,d.i)(ce,E.data[r],E.data[r+1],E.data[r+2]),!_&&(J[0]+=ce[0],J[1]+=ce[1],0!==ce[2])){const e=ce[2];(0,d.n)(ce,J),(0,d.d)(J,J,(0,d.g)(ce,ce,e))}const n=e*b.size;if((0,d.i)(K,b.data[n],b.data[n+1],b.data[n+2]),Z(K,ne,g,fe),Oe(this.parameters,J,fe,g,Q),g.applyProjection(J,ee),ee[0]>-1){_&&(ce[0]||ce[1])&&(ee[0]+=ce[0]*g.pixelRatio,0!==ce[1]&&(ee[1]+=(0,P.sX)(ce[1],Q.factorAlignment)*g.pixelRatio),g.unapplyProjection(ee,J)),ee[0]+=this.parameters.screenOffset[0]*g.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*g.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const t=e*O.size;ge[0]=O.data[t],ge[1]=O.data[t+1],(0,P.TU)(ge,Q.factor,ge);const i=pe*g.pixelRatio;let r=0;v.textureIsSignedDistanceField&&(r=Math.min(v.outlineSize,.5*ge[0])*g.pixelRatio/2),ge[0]*=S,ge[1]*=x;const n=e*A.size,l=v.rotation+A.data[n];if(Y(h,ee[0],ee[1],ge,i,r,l,v,I)){const e=o.ray;if((0,d.t)(oe,J,(0,s.U_)(ae,g.viewMatrix)),ee[0]=h[0],ee[1]=h[1],g.unprojectFromRenderScreen(ee,J)){const t=(0,u.Ue)();(0,d.c)(t,e.direction);const o=1/(0,d.l)(t);(0,d.g)(t,t,o),a((0,d.j)(e.origin,J)*o,t,-1,oe)}}}}}intersectDraped(e,t,o,i,r){const n=e.attributes.get(z.T.POSITION),s=e.attributes.get(z.T.SIZE),a=e.attributes.get(z.T.ROTATION),l=this.parameters,c=(0,F.c)(l),d=e.attributes.get(z.T.FEATUREATTRIBUTE),u=null==d?null:(0,f.nI)(d.data,ue),{scaleX:p,scaleY:h}=Ce(u,l,e.screenToWorldRatio),g=he*e.screenToWorldRatio;for(let t=0;t<n.data.length/n.size;t++){const d=t*n.size,u=n.data[d],f=n.data[d+1],v=t*s.size;ge[0]=s.data[v],ge[1]=s.data[v+1];let m=0;l.textureIsSignedDistanceField&&(m=Math.min(l.outlineSize,.5*ge[0])*e.screenToWorldRatio/2),ge[0]*=p,ge[1]*=h;const T=t*a.size,S=l.rotation+a.data[T];Y(o,u,f,ge,g,m,S,l,c)&&i(r.distance,r.normal,-1)}}createBufferWriter(){return new xe}applyShaderOffsetsView(e,t,o,i,r,n,s){const a=Z(t,o,r,fe);return this._applyVerticalGroundOffsetView(e,a,r,s),Oe(this.parameters,s,a,r,n),this._applyPolygonOffsetView(s,a,i[3],r,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,o,i,r){return this._applyCenterOffsetNDC(e,t,o,i),null!=r&&(0,d.c)(r,i),this._applyPolygonOffsetNDC(i,t,o,i),i}_applyPolygonOffsetView(e,t,o,r,n){const s=r.aboveGround?1:-1;let a=Math.sign(o);0===a&&(a=s);const l=s*a;if(this.parameters.shaderPolygonOffset<=0)return(0,d.c)(n,e);const c=(0,i.uZ)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/r.viewport[2];return(0,d.g)(n,e,l>0?u:1/u),n}_applyVerticalGroundOffsetView(e,t,o,i){const r=(0,d.l)(e),n=o.aboveGround?1:-1,s=o.computeRenderPixelSizeAtDist(r)*x.c,a=(0,d.g)(J,t.normal,n*s);return(0,d.f)(i,e,a),i}_applyCenterOffsetView(e,t,o){const i="screen"!==this.parameters.centerOffsetUnits;return o!==e&&(0,d.c)(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&((0,d.n)(K,o),(0,d.a)(o,o,(0,d.g)(K,K,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const r="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.c)(i,e),r||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const r=this.parameters.shaderPolygonOffset;if(e!==i&&(0,d.c)(i,e),r){const e=o.aboveGround?1:-1,n=e*Math.sign(t[3]);i[2]-=(n||e)*r}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:o}=this.parameters,i=e[3]>=G.e||t>=G.e&&o[3]>=G.e;return this._visible&&i}createGLMaterial(e){return new W(e)}calculateRelativeScreenBounds(e,t,o=(0,h.Ue)()){return function(e,t,o,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*o,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*o}(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}}class W extends O.Fj{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(N,e)}}function Z(e,t,o,i){return p(t)&&(t=(0,r.xO)(se,t)),(0,d.o)(i.normal,e,t),(0,d.t)(i.normal,i.normal,o.viewInverseTransposeMatrix),i.cosAngle=(0,d.e)(te,ve),i}function Y(e,t,o,r,n,s,a,c,d){let u=t-n-r[0]*d[0],f=u+r[0]+2*n,p=o-n-r[1]*d[1],h=p+r[1]+2*n;const g=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=g&&(u+=r[0]*g[0],p+=r[1]*g[1],f-=r[0]*(1-g[2]),h-=r[1]*(1-g[3]),u-=s,f+=s,p-=s,h+=s),(0,l.t8)(re,t,o),(0,l.U1)(ie,e,re,(0,i.Vl)(a)),ie[0]>u&&ie[0]<f&&ie[1]>p&&ie[1]<h}const Q=new E.G,J=(0,u.Ue)(),K=(0,u.Ue)(),ee=(0,f.Ue)(),te=(0,u.Ue)(),oe=(0,u.Ue)(),ie=(0,c.Ue)(),re=(0,c.Ue)(),ne=(0,n.Ue)(),se=(0,n.Ue)(),ae=(0,a.Ue)(),le=(0,f.Ue)(),ce=(0,u.Ue)(),de=(0,u.Ue)(),ue=(0,f.Ue)(),fe={normal:te,cosAngle:0},pe=1,he=2,ge=(0,c.al)(0,0),ve=(0,u.al)(0,0,1);class me extends O.EY{constructor(){super(...arguments),this.renderOccluded=b.yD.Occlude,this.isDecoration=!1,this.color=(0,f.vV)(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=(0,c.al)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=(0,f.vV)(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=(0,f.Ue)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const Te=(0,T.U$)().vec3f(z.T.POSITION).vec3f(z.T.NORMAL).vec2i16(z.T.UVI).vec4u8(z.T.COLOR).vec2f(z.T.SIZE).f32(z.T.ROTATION).vec4f(z.T.CENTEROFFSETANDDISTANCE).vec4f(z.T.FEATUREATTRIBUTE),Se=Te.clone().vec4u8(z.T.OLIDCOLOR);class xe{constructor(){this.vertexBufferLayout=(0,C.B)()?Se:Te}elementCount(e){return 6*e.get(z.T.POSITION).indices.length}write(e,t,o,i,r,n){const{position:s,normal:a,uvi:l,color:c,size:d,rotation:u,centerOffsetAndDistance:f,featureAttribute:p}=r;(0,I.ho)(o.get(z.T.POSITION),e,s,n,6),(0,I.s5)(o.get(z.T.NORMAL),t,a,n,6);const h=o.get(z.T.UVI)?.data;let v=0,m=0,T=-1-F.f,S=-1-F.f;h&&h.length>=4&&(v=h[0],m=h[1],T=-1-h[2],S=-1-h[3]);let x=o.get(z.T.POSITION).indices.length,C=n;for(let e=0;e<x;++e)l.set(C,0,v),l.set(C,1,m),C++,l.set(C,0,T),l.set(C,1,m),C++,l.set(C,0,T),l.set(C,1,S),C++,l.set(C,0,T),l.set(C,1,S),C++,l.set(C,0,v),l.set(C,1,S),C++,l.set(C,0,v),l.set(C,1,m),C++;(0,I.Vs)(o.get(z.T.COLOR),4,c,n,6);const{data:O,indices:b}=o.get(z.T.SIZE);x=b.length,C=n;for(let e=0;e<x;++e){const t=O[2*b[e]],o=O[2*b[e]+1];for(let e=0;e<6;++e)d.set(C,0,t),d.set(C,1,o),C++}if((0,I.XW)(o.get(z.T.ROTATION),u,n,6),o.get(z.T.CENTEROFFSETANDDISTANCE)?(0,I.SW)(o.get(z.T.CENTEROFFSETANDDISTANCE),f,n,6):(0,I.h)(f,n,6*x),o.get(z.T.FEATUREATTRIBUTE)?(0,I.SW)(o.get(z.T.FEATUREATTRIBUTE),p,n,6):(0,I.h)(p,n,6*x),null!=i){const e=o.get(z.T.POSITION)?.indices;if(e){const t=e.length,o=r.getField(z.T.OLIDCOLOR,g.mc);(0,I.Vq)(i,o,t,n,6)}}return{numVerticesPerItem:6,numItems:x}}intersect(e,t,o,i,r,n,a){const{options:{selectionMode:l,hud:c,excludeLabels:f},point:p,camera:h}=i;if(!l||!c||f&&t.isLabel||!p)return;const v=this.vertexBufferLayout.createView(e),m=v.getField(z.T.POSITION,g.ct),T=v.getField(z.T.NORMAL,g.ct),S=v.getField(z.T.ROTATION,g.ly),x=v.getField(z.T.SIZE,g.Eu),C=v.getField(z.T.FEATUREATTRIBUTE,g.ek),O=v.getField(z.T.CENTEROFFSETANDDISTANCE,g.ek),b="screen"===t.centerOffsetUnits,A=(0,F.c)(t);if(null==m||null==T||null==S||null==x||null==O||null==h)return;const y=null==C?null:C.getVec(0,ue),{scaleX:E,scaleY:I}=Ce(y,t,h.pixelRatio),_=m.count/6;for(let e=0;e<_;e++){const r=6*e;if(m.getVec(r,J),null!=o&&(0,d.f)(J,J,o),(0,d.t)(J,J,h.viewMatrix),O.getVec(r,le),(0,d.i)(ce,le[0],le[1],le[2]),!b&&(J[0]+=ce[0],J[1]+=ce[1],0!==ce[2])){const e=ce[2];(0,d.n)(ce,J),(0,d.d)(J,J,(0,d.g)(ce,ce,e))}if(T.getVec(r,K),Z(K,ne,h,fe),Oe(t,J,fe,h,Q),h.applyProjection(J,ee),ee[0]>-1){b&&(ce[0]||ce[1])&&(ee[0]+=ce[0]*h.pixelRatio,0!==ce[1]&&(ee[1]+=(0,P.sX)(ce[1],Q.factorAlignment)*h.pixelRatio),h.unapplyProjection(ee,J)),ee[0]+=t.screenOffset[0]*h.pixelRatio,ee[1]+=t.screenOffset[1]*h.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]),x.getVec(r,ge),(0,P.TU)(ge,Q.factor,ge);const o=pe*h.pixelRatio;let n=0;t.textureIsSignedDistanceField&&(n=Math.min(t.outlineSize,.5*ge[0])*h.pixelRatio/2),ge[0]*=E,ge[1]*=I;const l=S.get(r),c=t.rotation+l;if(Y(p,ee[0],ee[1],ge,o,n,c,t,A)){const t=i.ray;if((0,d.t)(oe,J,(0,s.U_)(ae,h.viewMatrix)),ee[0]=p[0],ee[1]=p[1],h.unprojectFromRenderScreen(ee,J)){const o=(0,u.Ue)();(0,d.c)(o,t.direction);const i=1/(0,d.l)(o);(0,d.g)(o,o,i),a((0,d.j)(t.origin,J)*i,o,e,oe)}}}}}}function Ce(e,t,o){return null==e||null==t.vvSize?{scaleX:o,scaleY:o}:((0,v.FE)(de,t,e),{scaleX:de[0]*o,scaleY:de[1]*o})}function Oe(e,t,o,i,r){if(!e.verticalOffset?.screenLength)return e.screenSizePerspective||e.screenSizePerspectiveAlignment?be(e,r,(0,d.l)(t),o.cosAngle):(r.factor.scale=1,r.factorAlignment.scale=1),t;const n=(0,d.l)(t),s=e.screenSizePerspectiveAlignment??e.screenSizePerspective,a=(0,_.Hx)(i,n,e.verticalOffset,o.cosAngle,s);return be(e,r,n,o.cosAngle),(0,d.g)(o.normal,o.normal,a),(0,d.f)(t,t,o.normal)}function be(e,t,o,i){null!=e.screenSizePerspective?(0,P.PV)(i,o,e.screenSizePerspective,t.factor):(t.factor.scale=1,t.factor.factor=0,t.factor.minScaleFactor=0),null!=e.screenSizePerspectiveAlignment?(0,P.PV)(i,o,e.screenSizePerspectiveAlignment,t.factorAlignment):(t.factorAlignment.factor=t.factor.factor,t.factorAlignment.scale=t.factor.scale,t.factorAlignment.minScaleFactor=t.factor.minScaleFactor)}},83584:function(e,t,o){o.d(t,{G:function(){return i}});class i{constructor(){this.factor=new r,this.factorAlignment=new r}}class r{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}}}]);