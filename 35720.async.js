"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35720],{1282:function(e,o,t){t.d(o,{D:function(){return B},b:function(){return V}});var r=t(27583),a=t(70662),i=t(73204),n=t(41044),s=t(27349),l=t(2679),c=t(63036),d=t(57716),u=t(50954),m=t(31839),h=t(56335),v=t(48737),p=t(27897),f=t(36350),g=t(51647),x=t(11713),b=t(19065),w=t(32179),T=t(83346),M=t(4106),C=t(42510),y=t(36351),S=t(7086),O=t(98887),H=t(88489),z=t(95030),N=t(5763),E=t(96541),I=t(9535),_=t(2013),A=t(85119),L=t(48857),G=t(34709),P=t(60037),D=t(52061),j=t(75047),R=t(15150),F=t(64801);function V(e){const o=new R.kG,{attributes:t,vertex:V,fragment:B,varyings:U}=o,{output:W,normalType:J,offsetBackfaces:q,instancedColor:Y,spherical:Z,receiveShadows:$,snowCover:k,pbrMode:X,textureAlphaPremultiplied:K,instancedDoublePrecision:Q,hasVertexColors:ee,hasVertexTangents:oe,hasColorTexture:te,hasNormalTexture:re,hasNormalTextureTransform:ae,hasColorTextureTransform:ie,hasBloom:ne}=e;if((0,E.Sv)(V,e),t.add(D.T.POSITION,"vec3"),U.add("vpos","vec3",{invariant:!0}),o.include(H.k,e),o.include(c.f,e),o.include(p.L,e),o.include(O.av,e),!(0,n.c1)(W))return o.include(f.s,e),o;o.include(O.NI,e),o.include(O.R5,e),o.include(O.jF,e),o.include(O.DT,e),(0,E.hY)(V,e),o.include(d.O,e),o.include(l.w,e);const se=J===d.r.Attribute||J===d.r.Compressed;return se&&q&&o.include(i.w),o.include(g.Q,e),o.include(v.Bb,e),Y&&o.attributes.add(D.T.INSTANCECOLOR,"vec4"),U.add("vPositionLocal","vec3"),o.include(m.D,e),o.include(a.qj,e),o.include(u.R,e),o.include(h.c,e),V.uniforms.add(new _.N("externalColor",(e=>"ignore"===e.colorMixMode?r.hq:e.externalColor))),U.add("vcolorExt","vec4"),o.include(S.H,e),V.main.add(L.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,L.If)(Y,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,L.If)(se,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,L.If)(oe,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,L.If)(se&&q,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${L.H.float(F.e)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),o.include(b.XP,e),B.include(x.K,e),o.include(z.z,e),o.include(Q?y.hb:y.XE,e),B.include(s.f5,e),o.include(j.j,e),(0,E.hY)(B,e),B.uniforms.add(V.uniforms.get("localOrigin"),new I.J("ambient",(e=>e.ambient)),new I.J("diffuse",(e=>e.diffuse)),new A.p("opacity",(e=>e.opacity)),new A.p("layerOpacity",(e=>e.layerOpacity))),te&&B.uniforms.add(new G.A("tex",(e=>e.texture))),o.include(C.jV,e),B.include(M.T,e),B.include(N.y),o.include(T.k,e),B.include(P.R,e),(0,b.PN)(B),(0,b.sC)(B),(0,w.F1)(B),B.main.add(L.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${te?L.H`
            vec4 texColor = texture(tex, ${ie?"colorUV":"vuv0"});
            ${(0,L.If)(K,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${J===d.r.ScreenDerivative?L.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:L.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${$?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,L.If)(Z,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,L.If)(ee,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,L.If)(ee,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${re?`mat3 tangentSpace = computeTangentSpace(${oe?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ae?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${Z?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,L.If)(k,L.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${X===C.f7.Normal||X===C.f7.Schematic?L.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${ne?"vec4(0.0)":"getEmissions(albedo)"};
            ${(0,L.If)(k,"mrr = applySnowToMRR(mrr, snow);\n                 emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:L.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${(0,L.If)(k,", snow")});
  `),o}const B=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},49785:function(e,o,t){t.d(o,{R:function(){return P},b:function(){return G}});var r=t(70662),a=t(73204),i=t(41044),n=t(27349),s=t(2679),l=t(63036),c=t(57716),d=t(50954),u=t(31839),m=t(56335),h=t(27897),v=t(36350),p=t(11713),f=t(19065),g=t(32179),x=t(4106),b=t(42510),w=t(36351),T=t(7086),M=t(88489),C=t(95030),y=t(5763),S=t(96541),O=t(9535),H=t(2013),z=t(85119),N=t(48857),E=t(34709),I=t(52061),_=t(75047),A=t(15150),L=t(64801);function G(e){const o=new A.kG,{attributes:t,vertex:G,fragment:P,varyings:D}=o,{output:j,offsetBackfaces:R,instancedColor:F,pbrMode:V,snowCover:B,spherical:U,hasBloom:W}=e,J=V===b.f7.Normal||V===b.f7.Schematic;if((0,S.Sv)(G,e),t.add(I.T.POSITION,"vec3"),D.add("vpos","vec3",{invariant:!0}),o.include(M.k,e),o.include(l.f,e),o.include(h.L,e),o.include(T.H,e),(0,i.c1)(j)&&((0,S.hY)(o.vertex,e),o.include(c.O,e),o.include(s.w,e),R&&o.include(a.w),F&&o.attributes.add(I.T.INSTANCECOLOR,"vec4"),D.add("vNormalWorld","vec3"),D.add("localvpos","vec3",{invariant:!0}),o.include(u.D,e),o.include(r.qj,e),o.include(d.R,e),o.include(m.c,e),G.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),D.add("vcolorExt","vec4"),G.main.add(N.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,N.If)(F,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${N.H.float(L.e)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,N.If)(R,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,i.c1)(j)){const{hasColorTexture:t,hasColorTextureTransform:r,receiveShadows:a}=e;o.include(f.XP,e),P.include(p.K,e),o.include(C.z,e),o.include(e.instancedDoublePrecision?w.hb:w.XE,e),P.include(n.f5,e),o.include(_.j,e),(0,S.hY)(P,e),(0,g.Pe)(P),(0,f.PN)(P),(0,f.sC)(P),P.uniforms.add(G.uniforms.get("localOrigin"),G.uniforms.get("view"),new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new z.p("opacity",(e=>e.opacity)),new z.p("layerOpacity",(e=>e.layerOpacity))),t&&P.uniforms.add(new E.A("tex",(e=>e.texture))),o.include(b.jV,e),P.include(x.T,e),P.include(y.y),(0,g.F1)(P),P.main.add(N.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${t?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,N.If)(t,`${(0,N.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":U?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?N.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,N.If)(B,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${N.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,N.If)(J,`vec3 normalGround = ${U?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${J?N.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,N.If)(B,N.H`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${B||W?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${(0,N.If)(B,", 1.0")});`)}return o.include(v.s,e),o}const P=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},62420:function(e,o,t){t.d(o,{S:function(){return x},b:function(){return p},g:function(){return f}});var r=t(26821),a=t(41788),i=t(17904),n=t(20638),s=t(77983),l=t(37124),c=t(19155),d=t(13663),u=t(85119),m=t(48857),h=t(34709),v=t(15150);function p(){const e=new v.kG,o=e.fragment;return e.include(i.k),e.include(s.GZ),o.include(n.K),o.uniforms.add(new d.z("radius",(e=>f(e.camera)))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),o.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),o.uniforms.add(new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new u.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new c.A("rnmScale",((e,o)=>(0,r.t8)(g,o.camera.fullWidth/e.noiseTexture.descriptor.width,o.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.p("intensity",(e=>e.intensity)),new l.$("screenSize",(e=>(0,r.t8)(g,e.camera.fullWidth,e.camera.fullHeight)))).main.add(m.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${m.H.int(16)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${m.H.int(16)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function f(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,a.Ue)(),x=Object.freeze(Object.defineProperty({__proto__:null,build:p,getRadius:f},Symbol.toStringTag,{value:"Module"}))},22692:function(e,o,t){t.d(o,{S:function(){return m},b:function(){return u}});var r=t(17904),a=t(20638),i=t(19251),n=t(85119),s=t(48857),l=t(29193),c=t(34709),d=t(15150);function u(){const e=new d.kG,o=e.fragment;e.include(r.k);return o.include(a.K),o.uniforms.add(new c.A("depthMap",(e=>e.depthTexture)),new l.R("tex",(e=>e.colorTexture)),new i.q("blurSize",(e=>e.blurSize)),new n.p("projScale",((e,o)=>{const t=o.camera.distance;return t>5e4?Math.max(0,e.projScale-(t-5e4)):e.projScale}))),o.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),o.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(4)}; r <= ${s.H.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},72432:function(e,o,t){t.d(o,{F5:function(){return n},HB:function(){return s},a9:function(){return r}});var r,a,i=t(99574);function n(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function s(e,o,t){if(null==e||o===r.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const a=(0,i.uZ)(Math.round(e[3]*c),0,c),n=0===a||o===r.Tint?0:o===r.Replace?d:u;t[0]=(0,i.uZ)(Math.round(e[0]*l),0,l),t[1]=(0,i.uZ)(Math.round(e[1]*l),0,l),t[2]=(0,i.uZ)(Math.round(e[2]*l),0,l),t[3]=a+n}(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint";const l=255,c=85,d=c,u=2*c},92638:function(e,o,t){t.d(o,{A:function(){return i}});var r=t(72432),a=t(48857);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},73204:function(e,o,t){t.d(o,{w:function(){return a}});var r=t(48857);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},63036:function(e,o,t){t.d(o,{f:function(){return x}});var r=t(96373),a=t(30748),i=t(10934),n=t(24910),s=t(82846),l=t(41044),c=t(28984),d=t(96541),u=t(87688),m=t(48857),h=t(57798),v=t(95334),p=t(52061),f=t(82969);t(74826);const g=(0,a.Ue)();function x(e,o){const{hasModelTransformation:t,instancedDoublePrecision:a,instanced:s,output:x,hasVertexTangents:w}=o;t&&(e.vertex.uniforms.add(new v.g("model",(e=>e.modelTransformation??i.Wd))),e.vertex.uniforms.add(new h.c("normalLocalOriginFromModel",(e=>((0,r.XL)(g,e.modelTransformation??i.Wd),g))))),s&&a&&(e.attributes.add(p.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.T.INSTANCEMODEL,"mat3"),e.attributes.add(p.T.INSTANCEMODELNORMAL,"mat3"));const T=e.vertex;a&&(T.include(c.$,o),T.uniforms.add(new u.d("viewOriginHi",(e=>(0,f.U8)((0,n.i)(b,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),b))),new u.d("viewOriginLo",(e=>(0,f.GB)((0,n.i)(b,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),b))))),T.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?m.H`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),T.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),x===l.H_.Normal&&((0,d._8)(T),T.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),w&&T.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const b=(0,s.Ue)()},57716:function(e,o,t){t.d(o,{O:function(){return l},r:function(){return r}});var r,a,i=t(79487),n=t(48857),s=t(52061);function l(e,o){switch(o.normalType){case r.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(n.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(n.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(o.normalType);case r.COUNT:}}(a=r||(r={}))[a.Attribute=0]="Attribute",a[a.Compressed=1]="Compressed",a[a.ScreenDerivative=2]="ScreenDerivative",a[a.COUNT=3]="COUNT"},50954:function(e,o,t){t.d(o,{R:function(){return l}});var r=t(92638),a=t(48857),i=t(20431),n=t(52061),s=t(87265);function l(e,o){o.hasSymbolColors?(e.include(r.A),e.attributes.add(n.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new i._("colorMixMode",(e=>s.FZ[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},48737:function(e,o,t){t.d(o,{Bb:function(){return u},Pf:function(){return h},d4:function(){return m}});var r=t(79487),a=t(30748),i=t(27583),n=t(57716),s=t(92684),l=t(48857),c=t(16924),d=t(57798);function u(e,o){switch(o.normalType){case n.r.Attribute:case n.r.Compressed:e.include(n.O,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.r.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,r.Bg)(o.normalType);case n.r.COUNT:}}class m extends s.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,a.Ue)()}}class h extends s.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,a.Ue)(),this.toMapSpace=(0,i.Ue)()}}},36350:function(e,o,t){t.d(o,{s:function(){return b}});var r=t(70662),a=t(41044),i=t(27349),n=t(2679),s=t(57716),l=t(68647),c=t(31839),d=t(48737),u=t(37452),m=t(40122),h=t(88489),v=t(95030),p=t(96541),f=t(48857),g=t(34709),x=t(32420);function b(e,o){const{vertex:t,fragment:b,varyings:w}=e,{hasColorTexture:T,alphaDiscardMode:M}=o,C=T&&M!==x.JJ.Opaque,{output:y,normalType:S,hasColorTextureTransform:O}=o;switch(y){case a.H_.Depth:(0,p.Sv)(t,o),e.include(n.w,o),b.include(i.f5,o),e.include(c.D,o),C&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.z,o),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(C,f.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case a.H_.Shadow:case a.H_.ShadowHighlight:case a.H_.ShadowExcludeHighlight:case a.H_.ViewshedShadow:case a.H_.ObjectAndLayerIdColor:(0,p.Sv)(t,o),e.include(n.w,o),e.include(c.D,o),e.include(h.k,o),e.include(u.F,o),b.include(i.f5,o),e.include(l.R,o),(0,r.Zu)(e),w.add("depth","float",{invariant:!0}),C&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.z,o),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(C,f.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${y===a.H_.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case a.H_.Normal:{(0,p.Sv)(t,o),e.include(n.w,o),e.include(s.O,o),e.include(d.Bb,o),e.include(c.D,o),e.include(h.k,o),C&&b.uniforms.add(new g.A("tex",(e=>e.texture))),S===s.r.ScreenDerivative&&w.add("vPositionView","vec3",{invariant:!0});const r=S===s.r.Attribute||S===s.r.Compressed;t.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${r?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),b.include(i.f5,o),e.include(v.z,o),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(C,f.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${S===s.r.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case a.H_.Highlight:(0,p.Sv)(t,o),e.include(n.w,o),e.include(c.D,o),e.include(h.k,o),C&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),b.include(i.f5,o),e.include(v.z,o),e.include(m.b,o),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(C,f.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},37452:function(e,o,t){t.d(o,{F:function(){return i}});var r=t(41044),a=t(48857);function i(e,o){switch(o.output){case r.H_.Shadow:case r.H_.ShadowHighlight:case r.H_.ShadowExcludeHighlight:case r.H_.ViewshedShadow:e.fragment.code.add(a.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}},51647:function(e,o,t){t.d(o,{Q:function(){return p}});var r=t(30748),a=t(41788),i=t(31839),n=t(79786),s=t(83346),l=t(19155),c=t(48857),d=t(57798),u=t(29193),m=t(34709),h=t(52061),v=t(5998);function p(e,o){const t=e.fragment,{hasVertexTangents:p,doubleSidedMode:f,hasNormalTexture:g,textureCoordinateType:x,bindType:b,hasNormalTextureTransform:w}=o;p?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),f===s.q.WindingOrder?t.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),g&&x!==i.I.None&&(e.include(n.i,o),t.uniforms.add(b===v.P.Pass?new m.A("normalTexture",(e=>e.textureNormal)):new u.R("normalTexture",(e=>e.textureNormal))),w&&(t.uniforms.add(new l.A("scale",(e=>e.scale??a.hq))),t.uniforms.add(new d.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.Wd)))),t.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),w&&t.code.add(c.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(c.H`return tangentSpace * rawNormal;
}`))}},72882:function(e,o,t){t.d(o,{_:function(){return u}});var r=t(24910),a=t(82846),i=t(73749),n=t(27583),s=t(42510),l=t(87688),c=t(23027),d=t(48857);function u(e,o){const t=e.fragment,a=void 0!==o.lightingSphericalHarmonicsOrder?o.lightingSphericalHarmonicsOrder:2;0===a?(t.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,r.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(t.uniforms.add(new c.$("lightingAmbientSH_R",(({lighting:e})=>(0,i.s)(h,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3]))),new c.$("lightingAmbientSH_G",(({lighting:e})=>(0,i.s)(h,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3]))),new c.$("lightingAmbientSH_B",(({lighting:e})=>(0,i.s)(h,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(t.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,r.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),new c.$("lightingAmbientSH_R1",(({lighting:e})=>(0,i.s)(h,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4]))),new c.$("lightingAmbientSH_G1",(({lighting:e})=>(0,i.s)(h,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4]))),new c.$("lightingAmbientSH_B1",(({lighting:e})=>(0,i.s)(h,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4]))),new c.$("lightingAmbientSH_R2",(({lighting:e})=>(0,i.s)(h,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8]))),new c.$("lightingAmbientSH_G2",(({lighting:e})=>(0,i.s)(h,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8]))),new c.$("lightingAmbientSH_B2",(({lighting:e})=>(0,i.s)(h,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),o.pbrMode!==s.f7.Normal&&o.pbrMode!==s.f7.Schematic||t.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,a.Ue)(),h=(0,n.Ue)()},11713:function(e,o,t){t.d(o,{K:function(){return n}});var r=t(48857),a=t(71063),i=t(46959);function n(e,o){o.receiveAmbientOcclusion?(e.uniforms.add(new a.e("ssaoTex",(e=>e.ssao?.getTexture()))),e.constants.add("blurSizePixelsInverse","float",1/i.s),e.code.add(r.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(r.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},19065:function(e,o,t){t.d(o,{XP:function(){return x},PN:function(){return f},sC:function(){return g}});var r=t(38461),a=(t(61432),t(72882)),i=t(11713),n=t(32179),s=t(4106),l=t(42510),c=t(28262),d=t(79729),u=t(13663),m=t(48857),h=t(78142);function v(e){e.code.add(m.H`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(m.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var p=t(85797);function f(e){e.constants.add("ambientBoostFactor","float",h.Vt)}function g(e){e.uniforms.add(new u.z("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function x(e,o){const t=e.fragment,{pbrMode:h,spherical:x,hasColorTexture:b}=o;t.include(i.K,o),h!==l.f7.Disabled&&t.include(s.T,o),e.include(a._,o),t.include(c.e),t.include(p.l,o);const w=!(h===l.f7.Schematic&&!b);switch(w&&t.include(v),t.code.add(m.H`
    const float GAMMA_SRGB = ${m.H.float(r.jm)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${(0,m.If)(h!==l.f7.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),f(t),g(t),(0,n.Pe)(t),t.code.add(m.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${x?m.H`normalize(vPosWorld)`:m.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.F1)(t),t.code.add(m.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),h){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(n.gz),t.code.add(m.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:t.code.add(m.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(m.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.useFillLights?t.uniforms.add(new d.U("hasFillLights",(e=>e.enableFillLights))):t.constants.add("hasFillLights","bool",!1),t.code.add(m.H`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new u.z("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new u.z("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(m.H`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),t.code.add(m.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${w?m.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:m.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Simplified:case l.f7.TerrainWithWater:(0,n.Pe)(t),(0,n.F1)(t),t.code.add(m.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);default:case l.f7.COUNT:}}},83346:function(e,o,t){t.d(o,{k:function(){return n},q:function(){return r}});var r,a=t(79487),i=t(48857);function n(e,o){const t=e.fragment;switch(t.code.add(i.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case r.None:t.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:t.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:t.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(o.doubleSidedMode);case r.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(r||(r={}))},36351:function(e,o,t){t.d(o,{XE:function(){return u},hb:function(){return d},nj:function(){return c}});var r=t(82846),a=t(56819),i=t(73263),n=t(48857),s=t(11089),l=t(74826);class c extends l.K{constructor(){super(...arguments),this.origin=(0,r.Ue)()}}function d(e,o){o.receiveShadows&&(e.include(a.dK),m(e))}function u(e,o){o.receiveShadows&&(e.include(a.qd),m(e))}function m(e){e.include(i.v);const{fragment:o}=e;o.uniforms.add(new s.j("shadowMap",(e=>e.shadowMap.depthTexture))),o.code.add(n.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}},73263:function(e,o,t){t.d(o,{v:function(){return a}});t(56819);var r=t(48857);function a(e){e.fragment.code.add(r.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}},98887:function(e,o,t){t.d(o,{DT:function(){return u},NI:function(){return l},R5:function(){return c},av:function(){return s},jF:function(){return d}});var r=t(30748),a=t(31839),i=t(48857),n=t(57798);function s(e,o){o.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??r.Wd))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.Wd))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??r.Wd))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??r.Wd))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??r.Wd))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},56819:function(e,o,t){t.d(o,{qd:function(){return u},dK:function(){return d}});t(82846);var r=t(23027),a=t(48857),i=t(63981),n=t(5998),s=t(92217);class l extends s.x{constructor(e,o,t){super(e,"mat4",n.P.Draw,((t,r,a,i)=>t.setUniformMatrix4fv(e,o(r,a,i))),t)}}var c=t(78631);t(74826);function d(e){e.fragment.uniforms.add(new c.G("shadowMapMatrix",((e,o)=>o.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e)}function u(e){e.fragment.uniforms.add(new l("shadowMapMatrix",((e,o)=>o.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e)}function m(e){const{fragment:o}=e;o.uniforms.add(new r.$("cascadeDistances",(e=>e.shadowMap.cascadeDistances)),new i.Y("numCascades",(e=>e.shadowMap.numCascades))),o.code.add(a.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}},95030:function(e,o,t){t.d(o,{o:function(){return c},z:function(){return l}});var r=t(30881),a=t(85119),i=t(48857),n=t(32420),s=t(64801);function l(e,o){d(e,o,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,o){d(e,o,new r.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,o,t){const r=e.fragment,a=o.alphaDiscardMode,l=a===n.JJ.Blend;a!==n.JJ.Mask&&a!==n.JJ.MaskBlend||r.uniforms.add(t),r.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${a===n.JJ.Opaque?"color.a = 1.0;":`if (color.a < ${l?i.H.float(s.e):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(a===n.JJ.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}},5763:function(e,o,t){t.d(o,{y:function(){return n}});var r=t(72432),a=t(13743),i=t(48857);function n(e){e.include(a.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},78631:function(e,o,t){t.d(o,{G:function(){return i}});var r=t(5998),a=t(92217);class i extends a.x{constructor(e,o,t){super(e,"mat4",r.P.Pass,((t,r,a)=>t.setUniformMatrix4fv(e,o(r,a))),t)}}},11089:function(e,o,t){t.d(o,{j:function(){return i}});var r=t(5998),a=t(92217);class i extends a.x{constructor(e,o){super(e,"sampler2DShadow",r.P.Bind,((t,r)=>t.bindTexture(e,o(r))))}}},46959:function(e,o,t){t.d(o,{K:function(){return A},s:function(){return _}});var r=t(73440),a=t(99574),i=t(61100),n=t(90403),s=t(32555),l=t(17155),c=(t(61432),t(96711),t(83850),t(48023)),d=t(26821),u=t(26173),m=t(52054),h=t(69371),v=t(36553),p=t(58257),f=t(29107),g=t(22692),x=t(51135);class b extends f.A{constructor(e,o){super(e,o,new p.J(g.S,(()=>t.e(71558).then(t.bind(t,71558)))))}initializePipeline(){return(0,x.sm)({colorWrite:x.gf})}}var w=t(41788),T=t(74826);class M extends T.K{constructor(){super(...arguments),this.projScale=1}}class C extends M{constructor(){super(...arguments),this.intensity=1}}class y extends T.K{}class S extends y{constructor(){super(...arguments),this.blurSize=(0,w.Ue)()}}var O=t(62420);class H extends f.A{constructor(e,o){super(e,o,new p.J(O.S,(()=>t.e(11456).then(t.bind(t,11456)))))}initializePipeline(){return(0,x.sm)({colorWrite:x.gf})}}var z=t(32420),N=t(65650),E=t(8158),I=t(35928);const _=2;let A=class extends m.Z{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=u.CM.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,s.HA)(0),this._passParameters=new C,this._drawParameters=new S}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),o=new I.X;o.wrapMode=N.e8.CLAMP_TO_EDGE,o.pixelFormat=N.VI.RGB,o.wrapMode=N.e8.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new E.x(this.renderingContext,o,e),this.techniques.precompile(H),this.techniques.precompile(b),this.addHandles((0,n.YP)((()=>this.isEnabled()),(()=>this._enableTime=(0,s.HA)(0))))}destroy(){this._passParameters.noiseTexture=(0,i.M2)(this._passParameters.noiseTexture)}render(e){const o=e.find((({name:e})=>"normals"===e)),t=o?.getTexture(),r=o?.getTexture(N.Lu);if(!t||!r)return;const i=this.techniques.get(H),n=this.techniques.get(b);if(!i.compiled||!n.compiled)return this._enableTime=(0,s.HA)(performance.now()),void this.requestRender(z.Xx.UPDATE);0===this._enableTime&&(this._enableTime=(0,s.HA)(performance.now()));const l=this.renderingContext,c=this.view.qualitySettings.fadeDuration,m=this.bindParameters,p=m.camera,f=p.relativeElevation,g=(0,a.uZ)((v.o-f)/(v.o-v.s),0,1),x=c>0?Math.min(c,performance.now()-this._enableTime)/c:1,w=x*g;this._passParameters.normalTexture=t,this._passParameters.depthTexture=r,this._passParameters.projScale=1/p.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*L/(0,O.g)(p)**6*w;const T=p.fullViewport[2],M=p.fullViewport[3],C=this.fboCache.acquire(T,M,"ssao input",h.qz.RG8UNORM);l.bindFramebuffer(C.fbo),l.setViewport(0,0,T,M),l.bindTechnique(i,m,this._passParameters,this._drawParameters),l.screen.draw();const y=Math.round(T/_),S=Math.round(M/_),E=this.fboCache.acquire(y,S,"ssao blur",h.qz.R8UNORM);l.bindFramebuffer(E.fbo),this._drawParameters.colorTexture=C.getTexture(),(0,d.t8)(this._drawParameters.blurSize,0,_/M),l.bindTechnique(n,m,this._passParameters,this._drawParameters),l.setViewport(0,0,y,S),l.screen.draw(),C.release();const I=this.fboCache.acquire(y,S,u.CM.SSAO,h.qz.R8UNORM);return l.bindFramebuffer(I.fbo),l.setViewport(0,0,T,M),l.setClearColor(1,1,1,0),l.clear(N.Hf.COLOR),this._drawParameters.colorTexture=E.getTexture(),(0,d.t8)(this._drawParameters.blurSize,_/T,0),l.bindTechnique(n,m,this._passParameters,this._drawParameters),l.setViewport(0,0,y,S),l.screen.draw(),l.setViewport4fv(p.fullViewport),E.release(),x<1&&this.requestRender(z.Xx.UPDATE),I}};(0,r._)([(0,l.Cb)()],A.prototype,"consumes",void 0),(0,r._)([(0,l.Cb)()],A.prototype,"produces",void 0),(0,r._)([(0,l.Cb)({constructOnly:!0})],A.prototype,"isEnabled",void 0),A=(0,r._)([(0,c.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],A);const L=.5},60037:function(e,o,t){t.d(o,{R:function(){return a}});var r=t(48857);function a(e,o){o.snowCover&&(e.code.add(r.H`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(r.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}},35720:function(e,o,t){t.d(o,{Gp:function(){return L},mo:function(){return P},Qm:function(){return D}});var r=t(24910),a=t(82846),i=t(88331),n=t(56172),s=t(52890),l=t(41044),c=t(57716),d=t(34479),u=t(83346),m=t(42510),h=t(95285),v=t(32420),p=t(40156),f=t(19596),g=t(61536),x=t(87807),b=t(948),w=t(52061),T=t(43925),M=t(29296),C=t(87265),y=t(10544),S=t(73440),O=t(31839),H=t(83046),z=t(91041);class N extends z.W{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=v.JJ.Opaque,this.doubleSidedMode=u.q.None,this.pbrMode=m.f7.Disabled,this.cullFace=v.Vr.None,this.normalType=c.r.Attribute,this.customDepthTest=v.Gv.Less,this.emissionSource=d.jo.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===d.jo.Texture||this.hasOcclusionTexture||this.hasNormalTexture?O.I.Default:O.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,S._)([(0,H.o)({count:v.JJ.COUNT})],N.prototype,"alphaDiscardMode",void 0),(0,S._)([(0,H.o)({count:u.q.COUNT})],N.prototype,"doubleSidedMode",void 0),(0,S._)([(0,H.o)({count:m.f7.COUNT})],N.prototype,"pbrMode",void 0),(0,S._)([(0,H.o)({count:v.Vr.COUNT})],N.prototype,"cullFace",void 0),(0,S._)([(0,H.o)({count:c.r.COUNT})],N.prototype,"normalType",void 0),(0,S._)([(0,H.o)({count:v.Gv.COUNT})],N.prototype,"customDepthTest",void 0),(0,S._)([(0,H.o)({count:d.jo.COUNT})],N.prototype,"emissionSource",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasVertexColors",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasSymbolColors",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasVerticalOffset",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasColorTexture",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasMetallicRoughnessTexture",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasOcclusionTexture",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasNormalTexture",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasScreenSizePerspective",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasVertexTangents",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasOccludees",void 0),(0,S._)([(0,H.o)()],N.prototype,"instancedDoublePrecision",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasModelTransformation",void 0),(0,S._)([(0,H.o)()],N.prototype,"offsetBackfaces",void 0),(0,S._)([(0,H.o)()],N.prototype,"vvSize",void 0),(0,S._)([(0,H.o)()],N.prototype,"vvColor",void 0),(0,S._)([(0,H.o)()],N.prototype,"receiveShadows",void 0),(0,S._)([(0,H.o)()],N.prototype,"receiveAmbientOcclusion",void 0),(0,S._)([(0,H.o)()],N.prototype,"textureAlphaPremultiplied",void 0),(0,S._)([(0,H.o)()],N.prototype,"instanced",void 0),(0,S._)([(0,H.o)()],N.prototype,"instancedColor",void 0),(0,S._)([(0,H.o)()],N.prototype,"writeDepth",void 0),(0,S._)([(0,H.o)()],N.prototype,"transparent",void 0),(0,S._)([(0,H.o)()],N.prototype,"enableOffset",void 0),(0,S._)([(0,H.o)()],N.prototype,"terrainDepthTest",void 0),(0,S._)([(0,H.o)()],N.prototype,"cullAboveTerrain",void 0),(0,S._)([(0,H.o)()],N.prototype,"snowCover",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasBloom",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasColorTextureTransform",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasEmissionTextureTransform",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasNormalTextureTransform",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasOcclusionTextureTransform",void 0),(0,S._)([(0,H.o)()],N.prototype,"hasMetallicRoughnessTextureTransform",void 0);var E=t(58257),I=t(49785);class _ extends y.tT{constructor(e,o){super(e,o,new E.J(I.R,(()=>t.e(22219).then(t.bind(t,22219))))),this.type="RealisticTreeTechnique"}}var A=t(64801);class L extends f.F5{constructor(e,o){super(e,P),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[b.r.OPAQUE_MATERIAL,e=>((0,l.ED)(e)||(0,l.Kr)(e))&&!this.transparent],[b.r.TRANSPARENT_MATERIAL,e=>((0,l.ED)(e)||(0,l.Kr)(e))&&this.transparent&&this.parameters.writeDepth],[b.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,l.Jb)(e)||(0,l.Kr)(e))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const o=(0,s.U$)().vec3f(w.T.POSITION);return e.normalType===c.r.Compressed?o.vec2i16(w.T.NORMALCOMPRESSED,{glNormalized:!0}):o.vec3f(w.T.NORMAL),e.hasVertexTangents&&o.vec4f(w.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&o.vec2f16(w.T.UV0),e.hasVertexColors&&o.vec4u8(w.T.COLOR),e.hasSymbolColors&&o.vec4u8(w.T.SYMBOLCOLOR),(0,h.B)()&&o.vec4u8(w.T.OLIDCOLOR),o}(this.parameters),this._configuration=new N(o.spherical)}isVisibleForOutput(e){return e!==l.H_.Shadow&&e!==l.H_.ShadowExcludeHighlight&&e!==l.H_.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:o,opacity:t,externalColor:r}=this.parameters;return e*("replace"===o?1:t)*("ignore"===o?1:r[3])>=A.e}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,r.q)(this.parameters.emissiveBaseColor,a.AG)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===i.V6.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===i.V6.Color)}getConfiguration(e,o){const{parameters:t,_configuration:r}=this,{treeRendering:a,doubleSided:n,doubleSidedType:s}=t;return super.getConfiguration(e,o,this._configuration),r.hasNormalTexture=!a&&!!t.normalTextureId,r.hasColorTexture=!!t.textureId,r.hasVertexTangents=!a&&t.hasVertexTangents,r.instanced=t.isInstanced,r.instancedDoublePrecision=t.instancedDoublePrecision,r.vvSize=!!t.vvSize,r.hasVerticalOffset=null!=t.verticalOffset,r.hasScreenSizePerspective=null!=t.screenSizePerspective,r.hasSlicePlane=t.hasSlicePlane,r.alphaDiscardMode=t.textureAlphaMode,r.normalType=a?c.r.Attribute:t.normalType,r.transparent=this.transparent,r.writeDepth=t.writeDepth,r.customDepthTest=t.customDepthTest??v.Gv.Less,r.hasOccludees=o.hasOccludees,r.cullFace=t.hasSlicePlane?v.Vr.None:t.cullFace,r.cullAboveTerrain=o.cullAboveTerrain,r.hasModelTransformation=!a&&null!=t.modelTransformation,r.hasVertexColors=t.hasVertexColors,r.hasSymbolColors=t.hasSymbolColors,r.doubleSidedMode=a?u.q.WindingOrder:n&&"normal"===s?u.q.View:n&&"winding-order"===s?u.q.WindingOrder:u.q.None,r.instancedColor=t.hasInstancedColor,(0,l.c1)(e)?(r.terrainDepthTest=o.terrainDepthTest,r.receiveShadows=t.receiveShadows,r.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=o.ssao):(r.terrainDepthTest=!1,r.receiveShadows=r.receiveAmbientOcclusion=!1),r.vvColor=!!t.vvColor,r.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,r.pbrMode=t.usePBR?t.isSchematic?m.f7.Schematic:m.f7.Normal:m.f7.Disabled,r.hasMetallicRoughnessTexture=!a&&!!t.metallicRoughnessTextureId,r.emissionSource=a?d.jo.None:null!=t.emissiveTextureId&&t.emissiveSource===i.V6.Emissive?d.jo.Texture:t.usePBR?t.emissiveSource===i.V6.Emissive?d.jo.EmissiveColor:d.jo.SymbolColor:d.jo.None,r.hasOcclusionTexture=!a&&!!t.occlusionTextureId,r.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),r.oitPass=o.oitPass,r.enableOffset=o.camera.relativeElevation<g.ve,r.snowCover=o.snowCover,r.hasBloom=(0,l.qC)(e),r.hasColorTextureTransform=!!t.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,r}intersect(e,o,t,a,i,s){if(null!=this.parameters.verticalOffset){const e=t.camera;(0,r.i)(U,o[12],o[13],o[14]);let s=null;switch(t.viewingMode){case n.JY.Global:s=(0,r.n)(V,U);break;case n.JY.Local:s=(0,r.c)(V,F)}let l=0;const c=(0,r.d)(W,U,e.eye),d=(0,r.l)(c),u=(0,r.g)(c,c,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,r.e)(s,u)),l+=(0,C.Hx)(e,d,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective),(0,r.g)(s,s,l),(0,r.o)(B,s,t.transform.inverseRotation),a=(0,r.d)(j,a,B),i=(0,r.d)(R,i,B)}(0,x.Bw)(e,t,a,i,(0,T.W9)(t.verticalOffset),s)}createGLMaterial(e){return new G(e)}createBufferWriter(){return new M.G(this._vertexBufferLayout)}get transparent(){return D(this.parameters)}}class G extends p.Fj{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const t=e.camera.viewInverseTransposeMatrix;return(0,r.i)(o.origin,t[3],t[7],t[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(o.treeRendering?_:y.tT,e)}}class P extends y.em{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function D(e){const{drivenOpacity:o,opacity:t,externalColor:[r,a,i,n],layerOpacity:s,texture:l,textureId:c,textureAlphaMode:d,colorMixMode:u}=e;return o||t<1&&"replace"!==u||n<1&&"ignore"!==u||s<1||(null!=l||null!=c)&&d!==v.JJ.Opaque&&d!==v.JJ.Mask&&"replace"!==u}const j=(0,a.Ue)(),R=(0,a.Ue)(),F=(0,a.al)(0,0,1),V=(0,a.Ue)(),B=(0,a.Ue)(),U=(0,a.Ue)(),W=(0,a.Ue)()},10544:function(e,o,t){t.d(o,{Qm:function(){return T},em:function(){return w},tT:function(){return M}});var r=t(82846),a=t(27583),i=t(88331),n=t(41044),s=t(57716),l=t(48737),c=t(58257),d=t(29107),u=t(32420),m=t(19596),h=t(61536),v=t(26041),p=t(18836),f=t(1282),g=t(65650),x=t(51135),b=t(64801);class w extends l.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.xq,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=i.V6.Color,this.emissiveBaseColor=r.AG,this.instancedDoublePrecision=!1,this.normalType=s.r.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,r.vV)(.2,.2,.2),this.diffuse=(0,r.vV)(.8,.8,.8),this.externalColor=(0,a.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.Ue)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=u.Gv.Less,this.textureAlphaMode=u.JJ.Blend,this.textureAlphaCutoff=b.e,this.textureAlphaPremultiplied=!1,this.renderOccluded=m.yD.Occlude,this.isDecoration=!1}}class T extends l.Pf{constructor(){super(...arguments),this.origin=(0,r.Ue)(),this.slicePlaneLocalOrigin=this.origin}}class M extends d.A{constructor(e,o,r=new c.J(f.D,(()=>t.e(58734).then(t.bind(t,58734))))){super(e,o,r),this.type="DefaultMaterialTechnique"}_makePipeline(e,o){const{oitPass:t,output:r,transparent:a,cullFace:i,customDepthTest:s,hasOccludees:l}=e;return(0,x.sm)({blending:(0,n.c1)(r)&&a?(0,h.Wo)(t):null,culling:y(e)?(0,x.zp)(i):null,depthTest:{func:(0,h.Bh)(t,C(s))},depthWrite:(0,h.W$)(e),drawBuffers:(0,d.E)(r,(0,h.u_)(t,r)),colorWrite:x.gf,stencilWrite:l?v.s3:null,stencilTest:l?o?v.eD:v.RY:null,polygonOffset:(0,h.eZ)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function C(e){return e===u.Gv.Lequal?g.wb.LEQUAL:g.wb.LESS}function y(e){return e.cullFace!==u.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}}}]);