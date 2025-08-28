"use strict";(self.webpackChunkscene_pro=self.webpackChunkscene_pro||[]).push([[35720],{1282:function(e,o,t){t.d(o,{D:function(){return B},b:function(){return j}});var r=t(27583),a=t(70662),n=t(73204),i=t(41044),s=t(27349),c=t(2679),l=t(63036),d=t(57716),u=t(50954),m=t(31839),h=t(56335),f=t(48737),v=t(27897),p=t(36350),g=t(51647),x=t(11713),b=t(19065),w=t(32179),T=t(83346),M=t(4106),S=t(42510),C=t(36351),y=t(7086),O=t(98887),H=t(88489),z=t(95030),P=t(5763),N=t(96541),A=t(9535),I=t(2013),_=t(85119),E=t(48857),F=t(34709),L=t(60037),V=t(52061),R=t(75047),D=t(15150),G=t(64801);function j(e){const o=new D.kG,{attributes:t,vertex:j,fragment:B,varyings:W}=o,{output:U,normalType:J,offsetBackfaces:q,instancedColor:Y,spherical:Z,receiveShadows:$,snowCover:k,pbrMode:X,textureAlphaPremultiplied:K,instancedDoublePrecision:Q,hasVertexColors:ee,hasVertexTangents:oe,hasColorTexture:te,hasNormalTexture:re,hasNormalTextureTransform:ae,hasColorTextureTransform:ne,hasBloom:ie}=e;if((0,N.Sv)(j,e),t.add(V.T.POSITION,"vec3"),W.add("vpos","vec3",{invariant:!0}),o.include(H.k,e),o.include(l.f,e),o.include(v.L,e),o.include(O.av,e),!(0,i.c1)(U))return o.include(p.s,e),o;o.include(O.NI,e),o.include(O.R5,e),o.include(O.jF,e),o.include(O.DT,e),(0,N.hY)(j,e),o.include(d.O,e),o.include(c.w,e);const se=J===d.r.Attribute||J===d.r.Compressed;return se&&q&&o.include(n.w),o.include(g.Q,e),o.include(f.Bb,e),Y&&o.attributes.add(V.T.INSTANCECOLOR,"vec4"),W.add("vPositionLocal","vec3"),o.include(m.D,e),o.include(a.qj,e),o.include(u.R,e),o.include(h.c,e),j.uniforms.add(new I.N("externalColor",(e=>"ignore"===e.colorMixMode?r.hq:e.externalColor))),W.add("vcolorExt","vec4"),o.include(y.H,e),j.main.add(E.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,E.If)(Y,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,E.If)(se,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,E.If)(oe,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,E.If)(se&&q,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${E.H.float(G.e)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),o.include(b.XP,e),B.include(x.K,e),o.include(z.z,e),o.include(Q?C.hb:C.XE,e),B.include(s.f5,e),o.include(R.j,e),(0,N.hY)(B,e),B.uniforms.add(j.uniforms.get("localOrigin"),new A.J("ambient",(e=>e.ambient)),new A.J("diffuse",(e=>e.diffuse)),new _.p("opacity",(e=>e.opacity)),new _.p("layerOpacity",(e=>e.layerOpacity))),te&&B.uniforms.add(new F.A("tex",(e=>e.texture))),o.include(S.jV,e),B.include(M.T,e),B.include(P.y),o.include(T.k,e),B.include(L.R,e),(0,b.PN)(B),(0,b.sC)(B),(0,w.F1)(B),B.main.add(E.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${te?E.H`
            vec4 texColor = texture(tex, ${ne?"colorUV":"vuv0"});
            ${(0,E.If)(K,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:E.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${J===d.r.ScreenDerivative?E.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:E.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${$?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,E.If)(Z,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,E.If)(ee,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,E.If)(ee,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${re?`mat3 tangentSpace = computeTangentSpace(${oe?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ae?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${Z?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,E.If)(k,E.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${X===S.f7.Normal||X===S.f7.Schematic?E.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${ie?"vec4(0.0)":"getEmissions(albedo)"};
            ${(0,E.If)(k,"mrr = applySnowToMRR(mrr, snow);\n                 emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:E.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${(0,E.If)(k,", snow")});
  `),o}const B=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}))},49785:function(e,o,t){t.d(o,{R:function(){return L},b:function(){return F}});var r=t(70662),a=t(73204),n=t(41044),i=t(27349),s=t(2679),c=t(63036),l=t(57716),d=t(50954),u=t(31839),m=t(56335),h=t(27897),f=t(36350),v=t(11713),p=t(19065),g=t(32179),x=t(4106),b=t(42510),w=t(36351),T=t(7086),M=t(88489),S=t(95030),C=t(5763),y=t(96541),O=t(9535),H=t(2013),z=t(85119),P=t(48857),N=t(34709),A=t(52061),I=t(75047),_=t(15150),E=t(64801);function F(e){const o=new _.kG,{attributes:t,vertex:F,fragment:L,varyings:V}=o,{output:R,offsetBackfaces:D,instancedColor:G,pbrMode:j,snowCover:B,spherical:W,hasBloom:U}=e,J=j===b.f7.Normal||j===b.f7.Schematic;if((0,y.Sv)(F,e),t.add(A.T.POSITION,"vec3"),V.add("vpos","vec3",{invariant:!0}),o.include(M.k,e),o.include(c.f,e),o.include(h.L,e),o.include(T.H,e),(0,n.c1)(R)&&((0,y.hY)(o.vertex,e),o.include(l.O,e),o.include(s.w,e),D&&o.include(a.w),G&&o.attributes.add(A.T.INSTANCECOLOR,"vec4"),V.add("vNormalWorld","vec3"),V.add("localvpos","vec3",{invariant:!0}),o.include(u.D,e),o.include(r.qj,e),o.include(d.R,e),o.include(m.c,e),F.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),F.main.add(P.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,P.If)(G,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${P.H.float(E.e)};
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
      ${(0,P.If)(D,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,n.c1)(R)){const{hasColorTexture:t,hasColorTextureTransform:r,receiveShadows:a}=e;o.include(p.XP,e),L.include(v.K,e),o.include(S.z,e),o.include(e.instancedDoublePrecision?w.hb:w.XE,e),L.include(i.f5,e),o.include(I.j,e),(0,y.hY)(L,e),(0,g.Pe)(L),(0,p.PN)(L),(0,p.sC)(L),L.uniforms.add(F.uniforms.get("localOrigin"),F.uniforms.get("view"),new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new z.p("opacity",(e=>e.opacity)),new z.p("layerOpacity",(e=>e.layerOpacity))),t&&L.uniforms.add(new N.A("tex",(e=>e.texture))),o.include(b.jV,e),L.include(x.T,e),L.include(C.y),(0,g.F1)(L),L.main.add(P.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${t?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,P.If)(t,`${(0,P.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":W?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?P.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,P.If)(B,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${P.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,P.If)(J,`vec3 normalGround = ${W?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${J?P.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,P.If)(B,P.H`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${B||U?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${(0,P.If)(B,", 1.0")});`)}return o.include(f.s,e),o}const L=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},62420:function(e,o,t){t.d(o,{S:function(){return x},b:function(){return v},g:function(){return p}});var r=t(26821),a=t(41788),n=t(17904),i=t(20638),s=t(77983),c=t(37124),l=t(19155),d=t(13663),u=t(85119),m=t(48857),h=t(34709),f=t(15150);function v(){const e=new f.kG,o=e.fragment;return e.include(n.k),e.include(s.GZ),o.include(i.K),o.uniforms.add(new d.z("radius",(e=>p(e.camera)))).code.add(m.H`vec3 sphere[16] = vec3[16](
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
}`),e.outputs.add("fragOcclusion","float"),o.uniforms.add(new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new u.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,o)=>(0,r.t8)(g,o.camera.fullWidth/e.noiseTexture.descriptor.width,o.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.p("intensity",(e=>e.intensity)),new c.$("screenSize",(e=>(0,r.t8)(g,e.camera.fullWidth,e.camera.fullHeight)))).main.add(m.H`
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
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,a.Ue)(),x=Object.freeze(Object.defineProperty({__proto__:null,build:v,getRadius:p},Symbol.toStringTag,{value:"Module"}))},22692:function(e,o,t){t.d(o,{S:function(){return m},b:function(){return u}});var r=t(17904),a=t(20638),n=t(19251),i=t(85119),s=t(48857),c=t(29193),l=t(34709),d=t(15150);function u(){const e=new d.kG,o=e.fragment;e.include(r.k);return o.include(a.K),o.uniforms.add(new l.A("depthMap",(e=>e.depthTexture)),new c.R("tex",(e=>e.colorTexture)),new n.q("blurSize",(e=>e.blurSize)),new i.p("projScale",((e,o)=>{const t=o.camera.distance;return t>5e4?Math.max(0,e.projScale-(t-5e4)):e.projScale}))),o.code.add(s.H`
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
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},72432:function(e,o,t){t.d(o,{F5:function(){return i},HB:function(){return s},a9:function(){return r}});var r,a,n=t(99574);function i(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function s(e,o,t){if(null==e||o===r.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const a=(0,n.uZ)(Math.round(e[3]*l),0,l),i=0===a||o===r.Tint?0:o===r.Replace?d:u;t[0]=(0,n.uZ)(Math.round(e[0]*c),0,c),t[1]=(0,n.uZ)(Math.round(e[1]*c),0,c),t[2]=(0,n.uZ)(Math.round(e[2]*c),0,c),t[3]=a+i}(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint";const c=255,l=85,d=l,u=2*l},92638:function(e,o,t){t.d(o,{A:function(){return n}});var r=t(72432),a=t(48857);function n(e){e.vertex.code.add(a.H`
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
  `)}},70662:function(e,o,t){t.d(o,{Lm:function(){return s},Zu:function(){return c},bA:function(){return l},qj:function(){return d}});var r=t(41044),a=t(92684),n=t(37124),i=t(48857);function s(e){e.varyings.add("linearDepth","float",{invariant:!0})}function c(e){e.vertex.uniforms.add(new n.$("nearFar",(e=>e.camera.nearFar)))}function l(e){e.vertex.code.add(i.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,o){const{vertex:t}=e;switch(o.output){case r.H_.Color:case r.H_.ColorEmission:if(o.receiveShadows)return s(e),void t.code.add(i.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case r.H_.Shadow:case r.H_.ShadowHighlight:case r.H_.ShadowExcludeHighlight:case r.H_.ViewshedShadow:return e.include(a.up,o),s(e),c(e),l(e),void t.code.add(i.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}t.code.add(i.H`void forwardLinearDepth() {}`)}},73204:function(e,o,t){t.d(o,{w:function(){return a}});var r=t(48857);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},2679:function(e,o,t){t.d(o,{w:function(){return n}});var r=t(70662),a=t(48857);function n(e){(0,r.bA)(e),e.vertex.code.add(a.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(a.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},63036:function(e,o,t){t.d(o,{f:function(){return x}});var r=t(96373),a=t(30748),n=t(10934),i=t(24910),s=t(82846),c=t(41044),l=t(28984),d=t(96541),u=t(87688),m=t(48857),h=t(57798),f=t(95334),v=t(52061),p=t(82969);t(74826);const g=(0,a.Ue)();function x(e,o){const{hasModelTransformation:t,instancedDoublePrecision:a,instanced:s,output:x,hasVertexTangents:w}=o;t&&(e.vertex.uniforms.add(new f.g("model",(e=>e.modelTransformation??n.Wd))),e.vertex.uniforms.add(new h.c("normalLocalOriginFromModel",(e=>((0,r.XL)(g,e.modelTransformation??n.Wd),g))))),s&&a&&(e.attributes.add(v.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(v.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(v.T.INSTANCEMODEL,"mat3"),e.attributes.add(v.T.INSTANCEMODELNORMAL,"mat3"));const T=e.vertex;a&&(T.include(l.$,o),T.uniforms.add(new u.d("viewOriginHi",(e=>(0,p.U8)((0,i.i)(b,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),b))),new u.d("viewOriginLo",(e=>(0,p.GB)((0,i.i)(b,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),b))))),T.code.add(m.H`
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
    `),x===c.H_.Normal&&((0,d._8)(T),T.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),w&&T.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const b=(0,s.Ue)()},57716:function(e,o,t){t.d(o,{O:function(){return c},r:function(){return r}});var r,a,n=t(79487),i=t(48857),s=t(52061);function c(e,o){switch(o.normalType){case r.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Bg)(o.normalType);case r.COUNT:}}(a=r||(r={}))[a.Attribute=0]="Attribute",a[a.Compressed=1]="Compressed",a[a.ScreenDerivative=2]="ScreenDerivative",a[a.COUNT=3]="COUNT"},50954:function(e,o,t){t.d(o,{R:function(){return c}});var r=t(92638),a=t(48857),n=t(20431),i=t(52061),s=t(87265);function c(e,o){o.hasSymbolColors?(e.include(r.A),e.attributes.add(i.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>s.FZ[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},56335:function(e,o,t){t.d(o,{c:function(){return n}});var r=t(48857),a=t(52061);function n(e,o){o.hasVertexColors?(e.attributes.add(a.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},48737:function(e,o,t){t.d(o,{Bb:function(){return u},Pf:function(){return h},d4:function(){return m}});var r=t(79487),a=t(30748),n=t(27583),i=t(57716),s=t(92684),c=t(48857),l=t(15727),d=t(57798);function u(e,o){switch(o.normalType){case i.r.Attribute:case i.r.Compressed:e.include(i.O,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(c.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case i.r.ScreenDerivative:e.vertex.code.add(c.H`void forwardNormal() {}`);break;default:(0,r.Bg)(o.normalType);case i.r.COUNT:}}class m extends s.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,a.Ue)()}}class h extends s.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,a.Ue)(),this.toMapSpace=(0,n.Ue)()}}},92684:function(e,o,t){t.d(o,{OU:function(){return g},su:function(){return p},up:function(){return v}});var r=t(30748),a=t(10934),n=t(82846),i=t(28984),s=t(80357),c=t(9535),l=t(48857),d=t(15727),u=t(57798),m=t(95334),h=t(52061),f=t(74826);function v(e,o){const{attributes:t,vertex:r,varyings:a,fragment:n}=e;r.include(i.$,o),t.add(h.T.POSITION,"vec3"),a.add("vPositionWorldCameraRelative","vec3"),a.add("vPosition_view","vec3",{invariant:!0}),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new s.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new s.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(l.H`vec3 positionWorldCameraRelative() {
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
        vPositionWorldCameraRelative += fOffset * ${o.spherical?l.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),n.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(l.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),n.code.add(l.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends f.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.Ue)(),this.transformWorldFromViewTL=(0,n.Ue)(),this.transformViewFromCameraRelativeRS=(0,r.Ue)(),this.transformProjFromView=(0,a.Ue)()}}class g extends f.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,r.Ue)(),this.transformWorldFromModelTH=(0,n.Ue)(),this.transformWorldFromModelTL=(0,n.Ue)()}}},27897:function(e,o,t){t.d(o,{L:function(){return l},V:function(){return u}});var r=t(73749),a=t(27583),n=t(39863),i=t(96541),s=t(2013),c=t(48857);function l(e,o){const t=e.vertex;o.hasVerticalOffset?(u(t),o.hasScreenSizePerspective&&(e.include(n.cK),(0,n.m8)(t),(0,i.hY)(e.vertex,o)),t.code.add(c.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${o.spherical?c.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${o.hasScreenSizePerspective?c.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):t.code.add(c.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,a.Ue)();function u(e){e.uniforms.add(new s.N("verticalOffset",((e,o)=>{const{minWorldLength:t,maxWorldLength:a,screenLength:n}=e.verticalOffset,i=Math.tan(.5*o.camera.fovY)/(.5*o.camera.fullViewport[3]),s=o.camera.pixelRatio||1;return(0,r.s)(d,n*s,i,t,a)})))}},36350:function(e,o,t){t.d(o,{s:function(){return b}});var r=t(70662),a=t(41044),n=t(27349),i=t(2679),s=t(57716),c=t(68647),l=t(31839),d=t(48737),u=t(37452),m=t(40122),h=t(88489),f=t(95030),v=t(96541),p=t(48857),g=t(34709),x=t(32420);function b(e,o){const{vertex:t,fragment:b,varyings:w}=e,{hasColorTexture:T,alphaDiscardMode:M}=o,S=T&&M!==x.JJ.Opaque,{output:C,normalType:y,hasColorTextureTransform:O}=o;switch(C){case a.H_.Depth:(0,v.Sv)(t,o),e.include(i.w,o),b.include(n.f5,o),e.include(l.D,o),S&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(f.z,o),b.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(S,p.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case a.H_.Shadow:case a.H_.ShadowHighlight:case a.H_.ShadowExcludeHighlight:case a.H_.ViewshedShadow:case a.H_.ObjectAndLayerIdColor:(0,v.Sv)(t,o),e.include(i.w,o),e.include(l.D,o),e.include(h.k,o),e.include(u.F,o),b.include(n.f5,o),e.include(c.R,o),(0,r.Zu)(e),w.add("depth","float",{invariant:!0}),S&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(f.z,o),b.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(S,p.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${C===a.H_.ObjectAndLayerIdColor?p.H`outputObjectAndLayerIdColor();`:p.H`outputDepth(depth);`}`);break;case a.H_.Normal:{(0,v.Sv)(t,o),e.include(i.w,o),e.include(s.O,o),e.include(d.Bb,o),e.include(l.D,o),e.include(h.k,o),S&&b.uniforms.add(new g.A("tex",(e=>e.texture))),y===s.r.ScreenDerivative&&w.add("vPositionView","vec3",{invariant:!0});const r=y===s.r.Attribute||y===s.r.Compressed;t.main.add(p.H`
        vpos = getVertexInLocalOriginSpace();
        ${r?p.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:p.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),b.include(n.f5,o),e.include(f.z,o),b.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(S,p.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${y===s.r.ScreenDerivative?p.H`vec3 normal = screenDerivativeNormal(vPositionView);`:p.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case a.H_.Highlight:(0,v.Sv)(t,o),e.include(i.w,o),e.include(l.D,o),e.include(h.k,o),S&&b.uniforms.add(new g.A("tex",(e=>e.texture))),t.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),b.include(n.f5,o),e.include(f.z,o),e.include(m.b,o),b.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(S,p.H`vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},37452:function(e,o,t){t.d(o,{F:function(){return n}});var r=t(41044),a=t(48857);function n(e,o){switch(o.output){case r.H_.Shadow:case r.H_.ShadowHighlight:case r.H_.ShadowExcludeHighlight:case r.H_.ViewshedShadow:e.fragment.code.add(a.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}},51647:function(e,o,t){t.d(o,{Q:function(){return v}});var r=t(30748),a=t(41788),n=t(31839),i=t(79786),s=t(83346),c=t(19155),l=t(48857),d=t(57798),u=t(29193),m=t(34709),h=t(52061),f=t(5998);function v(e,o){const t=e.fragment,{hasVertexTangents:v,doubleSidedMode:p,hasNormalTexture:g,textureCoordinateType:x,bindType:b,hasNormalTextureTransform:w}=o;v?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),p===s.q.WindingOrder?t.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(l.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),g&&x!==n.I.None&&(e.include(i.i,o),t.uniforms.add(b===f.P.Pass?new m.A("normalTexture",(e=>e.textureNormal)):new u.R("normalTexture",(e=>e.textureNormal))),w&&(t.uniforms.add(new c.A("scale",(e=>e.scale??a.hq))),t.uniforms.add(new d.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.Wd)))),t.code.add(l.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),w&&t.code.add(l.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(l.H`return tangentSpace * rawNormal;
}`))}},72882:function(e,o,t){t.d(o,{_:function(){return u}});var r=t(24910),a=t(82846),n=t(73749),i=t(27583),s=t(42510),c=t(87688),l=t(23027),d=t(48857);function u(e,o){const t=e.fragment,a=void 0!==o.lightingSphericalHarmonicsOrder?o.lightingSphericalHarmonicsOrder:2;0===a?(t.uniforms.add(new c.d("lightingAmbientSH0",(({lighting:e})=>(0,r.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(t.uniforms.add(new l.$("lightingAmbientSH_R",(({lighting:e})=>(0,n.s)(h,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3]))),new l.$("lightingAmbientSH_G",(({lighting:e})=>(0,n.s)(h,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3]))),new l.$("lightingAmbientSH_B",(({lighting:e})=>(0,n.s)(h,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===a&&(t.uniforms.add(new c.d("lightingAmbientSH0",(({lighting:e})=>(0,r.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),new l.$("lightingAmbientSH_R1",(({lighting:e})=>(0,n.s)(h,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4]))),new l.$("lightingAmbientSH_G1",(({lighting:e})=>(0,n.s)(h,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4]))),new l.$("lightingAmbientSH_B1",(({lighting:e})=>(0,n.s)(h,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4]))),new l.$("lightingAmbientSH_R2",(({lighting:e})=>(0,n.s)(h,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8]))),new l.$("lightingAmbientSH_G2",(({lighting:e})=>(0,n.s)(h,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8]))),new l.$("lightingAmbientSH_B2",(({lighting:e})=>(0,n.s)(h,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8])))),t.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const m=(0,a.Ue)(),h=(0,i.Ue)()},11713:function(e,o,t){t.d(o,{K:function(){return i}});var r=t(48857),a=t(71063),n=t(46959);function i(e,o){o.receiveAmbientOcclusion?(e.uniforms.add(new a.e("ssaoTex",(e=>e.ssao?.getTexture()))),e.constants.add("blurSizePixelsInverse","float",1/n.s),e.code.add(r.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(r.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},19065:function(e,o,t){t.d(o,{XP:function(){return x},PN:function(){return p},sC:function(){return g}});var r=t(38461),a=(t(61432),t(72882)),n=t(11713),i=t(32179),s=t(4106),c=t(42510),l=t(28262),d=t(79729),u=t(13663),m=t(48857),h=t(78142);function f(e){e.code.add(m.H`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(m.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var v=t(85797);function p(e){e.constants.add("ambientBoostFactor","float",h.Vt)}function g(e){e.uniforms.add(new u.z("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function x(e,o){const t=e.fragment,{pbrMode:h,spherical:x,hasColorTexture:b}=o;t.include(n.K,o),h!==c.f7.Disabled&&t.include(s.T,o),e.include(a._,o),t.include(l.e),t.include(v.l,o);const w=!(h===c.f7.Schematic&&!b);switch(w&&t.include(f),t.code.add(m.H`
    const float GAMMA_SRGB = ${m.H.float(r.jm)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${(0,m.If)(h!==c.f7.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),p(t),g(t),(0,i.Pe)(t),t.code.add(m.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${x?m.H`normalize(vPosWorld)`:m.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,i.F1)(t),t.code.add(m.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),h){case c.f7.Disabled:case c.f7.WaterOnIntegratedMesh:case c.f7.Water:e.include(i.gz),t.code.add(m.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.f7.Normal:case c.f7.Schematic:t.code.add(m.H`const float fillLightIntensity = 0.25;
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
    `);break;case c.f7.Simplified:case c.f7.TerrainWithWater:(0,i.Pe)(t),(0,i.F1)(t),t.code.add(m.H`const float roughnessTerrain = 0.5;
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
}`);default:case c.f7.COUNT:}}},83346:function(e,o,t){t.d(o,{k:function(){return i},q:function(){return r}});var r,a=t(79487),n=t(48857);function i(e,o){const t=e.fragment;switch(t.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case r.None:t.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:t.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:t.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(o.doubleSidedMode);case r.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(r||(r={}))},36351:function(e,o,t){t.d(o,{XE:function(){return u},hb:function(){return d},nj:function(){return l}});var r=t(82846),a=t(56819),n=t(73263),i=t(48857),s=t(11089),c=t(74826);class l extends c.K{constructor(){super(...arguments),this.origin=(0,r.Ue)()}}function d(e,o){o.receiveShadows&&(e.include(a.dK),m(e))}function u(e,o){o.receiveShadows&&(e.include(a.qd),m(e))}function m(e){e.include(n.v);const{fragment:o}=e;o.uniforms.add(new s.j("shadowMap",(e=>e.shadowMap.depthTexture))),o.code.add(i.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}},73263:function(e,o,t){t.d(o,{v:function(){return a}});t(56819);var r=t(48857);function a(e){e.fragment.code.add(r.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}},98887:function(e,o,t){t.d(o,{DT:function(){return u},NI:function(){return c},R5:function(){return l},av:function(){return s},jF:function(){return d}});var r=t(30748),a=t(31839),n=t(48857),i=t(57798);function s(e,o){o.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new i.c("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??r.Wd))).code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardColorUV(){}`)}function c(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new i.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.Wd))).code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardNormalUV(){}`)}function l(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new i.c("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??r.Wd))).code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardEmissiveUV(){}`)}function d(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new i.c("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??r.Wd))).code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardOcclusionUV(){}`)}function u(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==a.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new i.c("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??r.Wd))).code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){}`)}},56819:function(e,o,t){t.d(o,{qd:function(){return u},dK:function(){return d}});t(82846);var r=t(23027),a=t(48857),n=t(63981),i=t(5998),s=t(92217);class c extends s.x{constructor(e,o,t){super(e,"mat4",i.P.Draw,((t,r,a,n)=>t.setUniformMatrix4fv(e,o(r,a,n))),t)}}var l=t(78631);t(74826);function d(e){e.fragment.uniforms.add(new l.G("shadowMapMatrix",((e,o)=>o.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e)}function u(e){e.fragment.uniforms.add(new c("shadowMapMatrix",((e,o)=>o.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e)}function m(e){const{fragment:o}=e;o.uniforms.add(new r.$("cascadeDistances",(e=>e.shadowMap.cascadeDistances)),new n.Y("numCascades",(e=>e.shadowMap.numCascades))),o.code.add(a.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}},95030:function(e,o,t){t.d(o,{o:function(){return l},z:function(){return c}});var r=t(30881),a=t(85119),n=t(48857),i=t(32420),s=t(64801);function c(e,o){d(e,o,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function l(e,o){d(e,o,new r.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,o,t){const r=e.fragment,a=o.alphaDiscardMode,c=a===i.JJ.Blend;a!==i.JJ.Mask&&a!==i.JJ.MaskBlend||r.uniforms.add(t),r.code.add(n.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${a===i.JJ.Opaque?"color.a = 1.0;":`if (color.a < ${c?n.H.float(s.e):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,n.If)(a===i.JJ.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}},5763:function(e,o,t){t.d(o,{y:function(){return i}});var r=t(72432),a=t(13743),n=t(48857);function i(e){e.include(a.Y),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
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

      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},39863:function(e,o,t){t.d(o,{cK:function(){return s},m8:function(){return l},ww:function(){return c}});var r=t(24910),a=t(82846),n=t(9535),i=t(48857);function s(e){e.vertex.code.add(i.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(i.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(i.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(i.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e){e.uniforms.add(new n.J("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function l(e){e.uniforms.add(new n.J("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,r.i)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,a.Ue)()},78631:function(e,o,t){t.d(o,{G:function(){return n}});var r=t(5998),a=t(92217);class n extends a.x{constructor(e,o,t){super(e,"mat4",r.P.Pass,((t,r,a)=>t.setUniformMatrix4fv(e,o(r,a))),t)}}},11089:function(e,o,t){t.d(o,{j:function(){return n}});var r=t(5998),a=t(92217);class n extends a.x{constructor(e,o){super(e,"sampler2DShadow",r.P.Bind,((t,r)=>t.bindTexture(e,o(r))))}}},46959:function(e,o,t){t.d(o,{K:function(){return _},s:function(){return I}});var r=t(73440),a=t(99574),n=t(61100),i=t(90403),s=t(32555),c=t(17155),l=(t(61432),t(96711),t(83850),t(48023)),d=t(26821),u=t(26173),m=t(52054),h=t(69371),f=t(36553),v=t(58257),p=t(29107),g=t(22692),x=t(51135);class b extends p.A{constructor(e,o){super(e,o,new v.J(g.S,(()=>t.e(71558).then(t.bind(t,71558)))))}initializePipeline(){return(0,x.sm)({colorWrite:x.gf})}}var w=t(41788),T=t(74826);class M extends T.K{constructor(){super(...arguments),this.projScale=1}}class S extends M{constructor(){super(...arguments),this.intensity=1}}class C extends T.K{}class y extends C{constructor(){super(...arguments),this.blurSize=(0,w.Ue)()}}var O=t(62420);class H extends p.A{constructor(e,o){super(e,o,new v.J(O.S,(()=>t.e(11456).then(t.bind(t,11456)))))}initializePipeline(){return(0,x.sm)({colorWrite:x.gf})}}var z=t(32420),P=t(65650),N=t(8158),A=t(35928);const I=2;let _=class extends m.Z{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=u.CM.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,s.HA)(0),this._passParameters=new S,this._drawParameters=new y}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),o=new A.X;o.wrapMode=P.e8.CLAMP_TO_EDGE,o.pixelFormat=P.VI.RGB,o.wrapMode=P.e8.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new N.x(this.renderingContext,o,e),this.techniques.precompile(H),this.techniques.precompile(b),this.addHandles((0,i.YP)((()=>this.isEnabled()),(()=>this._enableTime=(0,s.HA)(0))))}destroy(){this._passParameters.noiseTexture=(0,n.M2)(this._passParameters.noiseTexture)}render(e){const o=e.find((({name:e})=>"normals"===e)),t=o?.getTexture(),r=o?.getTexture(P.Lu);if(!t||!r)return;const n=this.techniques.get(H),i=this.techniques.get(b);if(!n.compiled||!i.compiled)return this._enableTime=(0,s.HA)(performance.now()),void this.requestRender(z.Xx.UPDATE);0===this._enableTime&&(this._enableTime=(0,s.HA)(performance.now()));const c=this.renderingContext,l=this.view.qualitySettings.fadeDuration,m=this.bindParameters,v=m.camera,p=v.relativeElevation,g=(0,a.uZ)((f.o-p)/(f.o-f.s),0,1),x=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,w=x*g;this._passParameters.normalTexture=t,this._passParameters.depthTexture=r,this._passParameters.projScale=1/v.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*E/(0,O.g)(v)**6*w;const T=v.fullViewport[2],M=v.fullViewport[3],S=this.fboCache.acquire(T,M,"ssao input",h.qz.RG8UNORM);c.bindFramebuffer(S.fbo),c.setViewport(0,0,T,M),c.bindTechnique(n,m,this._passParameters,this._drawParameters),c.screen.draw();const C=Math.round(T/I),y=Math.round(M/I),N=this.fboCache.acquire(C,y,"ssao blur",h.qz.R8UNORM);c.bindFramebuffer(N.fbo),this._drawParameters.colorTexture=S.getTexture(),(0,d.t8)(this._drawParameters.blurSize,0,I/M),c.bindTechnique(i,m,this._passParameters,this._drawParameters),c.setViewport(0,0,C,y),c.screen.draw(),S.release();const A=this.fboCache.acquire(C,y,u.CM.SSAO,h.qz.R8UNORM);return c.bindFramebuffer(A.fbo),c.setViewport(0,0,T,M),c.setClearColor(1,1,1,0),c.clear(P.Hf.COLOR),this._drawParameters.colorTexture=N.getTexture(),(0,d.t8)(this._drawParameters.blurSize,I/T,0),c.bindTechnique(i,m,this._passParameters,this._drawParameters),c.setViewport(0,0,C,y),c.screen.draw(),c.setViewport4fv(v.fullViewport),N.release(),x<1&&this.requestRender(z.Xx.UPDATE),A}};(0,r._)([(0,c.Cb)()],_.prototype,"consumes",void 0),(0,r._)([(0,c.Cb)()],_.prototype,"produces",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],_.prototype,"isEnabled",void 0),_=(0,r._)([(0,l.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],_);const E=.5},60037:function(e,o,t){t.d(o,{R:function(){return a}});var r=t(48857);function a(e,o){o.snowCover&&(e.code.add(r.H`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(r.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}},87807:function(e,o,t){t.d(o,{Bw:function(){return u},CN:function(){return v},ET:function(){return p},Fw:function(){return P},IG:function(){return g},Tw:function(){return z},Ue:function(){return H},ko:function(){return x},sT:function(){return l}});var r=t(24910),a=t(82846),n=t(16447),i=t(52964),s=t(61719),c=t(52061);class l{constructor(e=!1,o=!0){this.isVerticalRay=e,this.normalRequired=o}}const d=(0,n.Ue)();function u(e,o,t,a,n,d){if(!e.visible)return;const u=(0,r.a)(I,a,t),m=(e,o,t)=>{d(e,t,o)},f=new l(!1,o.options.normalRequired);if(e.boundingInfo){(0,s.hu)(e.type===i.V.Mesh);const r=o.tolerance;h(e.boundingInfo,t,u,r,n,f,m)}else{const o=e.attributes.get(c.T.POSITION),r=o.indices;b(t,u,0,r.length/3,r,o.data,o.stride,n,f,m)}}const m=(0,a.Ue)();function h(e,o,t,a,i,s,c){if(null==e)return;const l=function(e,o){return(0,r.i)(o,1/e[0],1/e[1],1/e[2])}(t,m);if((0,n.op)(d,e.bbMin),(0,n.Tn)(d,e.bbMax),null!=i&&i.applyToAabb(d),z(d,o,l,a)){const{primitiveIndices:r,position:n}=e,l=r?r.length:n.indices.length/3;if(l>N){const r=e.getChildren();if(void 0!==r){for(const e of r)h(e,o,t,a,i,s,c);return}}!function(e,o,t,r,a,n,i,s,c,l,d){const u=e[0],m=e[1],h=e[2],v=o[0],p=o[1],g=o[2],{normalRequired:x}=l;for(let e=t;e<r;++e){const o=s[e],t=3*o,r=i*a[t];let l=n[r],b=n[r+1],w=n[r+2];const T=i*a[t+1];let M=n[T],C=n[T+1],y=n[T+2];const O=i*a[t+2];let H=n[O],z=n[O+1],P=n[O+2];null!=c&&([l,b,w]=c.applyToVertex(l,b,w,e),[M,C,y]=c.applyToVertex(M,C,y,e),[H,z,P]=c.applyToVertex(H,z,P,e));const N=M-l,I=C-b,_=y-w,E=H-l,F=z-b,L=P-w,V=p*L-F*g,R=g*E-L*v,D=v*F-E*p,G=N*V+I*R+_*D;if(Math.abs(G)<=A)continue;const j=u-l,B=m-b,W=h-w,U=j*V+B*R+W*D;if(G>0){if(U<0||U>G)continue}else if(U>0||U<G)continue;const J=B*_-I*W,q=W*N-_*j,Y=j*I-N*B,Z=v*J+p*q+g*Y;if(G>0){if(Z<0||U+Z>G)continue}else if(Z>0||U+Z<G)continue;const $=(E*J+F*q+L*Y)/G;$>=0&&d($,o,x?S(N,I,_,E,F,L,f):null)}}(o,t,0,l,n.indices,n.data,n.stride,r,i,s,c)}}const f=(0,a.Ue)();function v(e,o,t,a,n,i,s,c,l){const{data:d,stride:u}=i;b(e,(0,r.a)(I,o,e),t,a,n,d,u,s,c,l)}function p(e,o,t,r,a,n,i,s,c,l=null,d=0){const u=e[0],m=e[1],h=e[2],v=o[0],p=o[1],g=o[2];for(let e=t;e<r;++e){const o=d+(l?l[e]:e),t=3*o,r=i*a[t],x=n[r],b=n[r+1],w=n[r+2],T=i*a[t+1],M=n[T],C=n[T+1],y=n[T+2],O=i*a[t+2],H=M-x,z=C-b,P=y-w,N=n[O]-x,I=n[O+1]-b,_=n[O+2]-w,E=p*_-I*g,F=g*N-_*v,L=v*I-N*p,V=H*E+z*F+P*L;if(Math.abs(V)<=A)continue;const R=u-x,D=m-b,G=h-w,j=R*E+D*F+G*L;if(V>0){if(j<0||j>V)continue}else if(j>0||j<V)continue;const B=D*P-z*G,W=G*H-P*R,U=R*z-H*D,J=v*B+p*W+g*U;if(V>0){if(J<0||j+J>V)continue}else if(J>0||j+J<V)continue;const q=(N*B+I*W+_*U)/V;q>=0&&c(q,o,s?S(H,z,P,N,I,_,f):null)}}function g(e,o,t,r,a,n,i,s){const c=e[0],l=e[1],d=e[2],u=o[0],m=o[1],h=o[2];for(let e=t;e<r;++e){const o=3*e,t=o+1,r=o+2,v=n*o,p=a[v],g=a[v+1],x=a[v+2],b=n*t,w=n*r,T=a[b]-p,M=a[b+1]-g,C=a[b+2]-x,y=a[w]-p,O=a[w+1]-g,H=a[w+2]-x,z=m*H-O*h,P=h*y-H*u,N=u*O-y*m,I=T*z+M*P+C*N;if(Math.abs(I)<=A)continue;const _=c-p,E=l-g,F=d-x,L=_*z+E*P+F*N;if(I>0){if(L<0||L>I)continue}else if(L>0||L<I)continue;const V=E*C-M*F,R=F*T-C*_,D=_*M-T*E,G=u*V+m*R+h*D;if(I>0){if(G<0||L+G>I)continue}else if(G>0||L+G<I)continue;const j=(y*V+O*R+H*D)/I;j>=0&&s(j,e,i?S(T,M,C,y,O,H,f):null)}}function x(e,o,t,r,a,n,i,s,c,l,d,u=null,m=0){const h=e[0],v=e[1],p=e[2],g=o[0],x=o[1],b=o[2];for(let e=t;e<r;++e){const o=m+(u?u[e]:e),t=3*o,r=i*a[t],w=n[r],T=n[r+1],M=n[r+2],C=i*a[t+1],y=n[C],O=n[C+1],H=n[C+2],z=i*a[t+2],P=n[z],N=n[z+1],I=n[z+2],_=M-c,E=s/Math.sqrt(w*w+T*T+_*_),F=w+w*E,L=T+T*E,V=M+_*E,R=H-c,D=s/Math.sqrt(y*y+O*O+R*R),G=y+y*D,j=O+O*D,B=H+R*D,W=I-c,U=s/Math.sqrt(P*P+N*N+W*W),J=G-F,q=j-L,Y=B-V,Z=P+P*U-F,$=N+N*U-L,k=I+W*U-V,X=x*k-$*b,K=b*Z-k*g,Q=g*$-Z*x,ee=J*X+q*K+Y*Q;if(Math.abs(ee)<=A)continue;const oe=h-F,te=v-L,re=p-V,ae=oe*X+te*K+re*Q;if(ee>0){if(ae<0||ae>ee)continue}else if(ae>0||ae<ee)continue;const ne=te*Y-q*re,ie=re*J-Y*oe,se=oe*q-J*te,ce=g*ne+x*ie+b*se;if(ee>0){if(ce<0||ae+ce>ee)continue}else if(ce>0||ae+ce<ee)continue;const le=(Z*ne+$*ie+k*se)/ee;le>=0&&d(le,o,l?S(J,q,Y,Z,$,k,f):null)}}function b(e,o,t,a,n,i,s,c,l,d){const u=o,m=_,h=Math.abs(u[0]),f=Math.abs(u[1]),v=Math.abs(u[2]),p=h>=f?h>=v?0:2:f>=v?1:2,g=p,x=u[g]<0?2:1,b=(p+x)%3,S=(p+(3-x))%3,y=u[b]/u[g],O=u[S]/u[g],H=1/u[g],z=w,P=T,N=M,{normalRequired:A}=l;for(let o=t;o<a;++o){const t=3*o,a=s*n[t];(0,r.i)(m[0],i[a+0],i[a+1],i[a+2]);const l=s*n[t+1];(0,r.i)(m[1],i[l+0],i[l+1],i[l+2]);const u=s*n[t+2];(0,r.i)(m[2],i[u+0],i[u+1],i[u+2]),c&&((0,r.c)(m[0],c.applyToVertex(m[0][0],m[0][1],m[0][2],o)),(0,r.c)(m[1],c.applyToVertex(m[1][0],m[1][1],m[1][2],o)),(0,r.c)(m[2],c.applyToVertex(m[2][0],m[2][1],m[2][2],o))),(0,r.a)(z,m[0],e),(0,r.a)(P,m[1],e),(0,r.a)(N,m[2],e);const h=z[b]-y*z[g],f=z[S]-O*z[g],v=P[b]-y*P[g],p=P[S]-O*P[g],x=N[b]-y*N[g],w=N[S]-O*N[g],T=x*p-w*v,M=h*w-f*x,I=v*f-p*h;if((T<0||M<0||I<0)&&(T>0||M>0||I>0))continue;const _=T+M+I;if(0===_)continue;const E=T*(H*z[g])+M*(H*P[g])+I*(H*N[g]);if(E*Math.sign(_)<0)continue;const F=E/_;F>=0&&d(F,o,A?C(m):null)}}const w=(0,a.Ue)(),T=(0,a.Ue)(),M=(0,a.Ue)();function S(e,o,t,a,n,i,s){return(0,r.i)(y,e,o,t),(0,r.i)(O,a,n,i),(0,r.h)(s,y,O),(0,r.n)(s,s),s}function C(e){return(0,r.a)(y,e[1],e[0]),(0,r.a)(O,e[2],e[0]),(0,r.h)(f,y,O),(0,r.n)(f,f),f}const y=(0,a.Ue)(),O=(0,a.Ue)();function H(e,o,t){return(0,r.i)(t,1/(o[0]-e[0]),1/(o[1]-e[1]),1/(o[2]-e[2]))}function z(e,o,t,r){return P(e,o,t,r,1/0)}function P(e,o,t,r,a){const n=(e[0]-r-o[0])*t[0],i=(e[3]+r-o[0])*t[0];let s=Math.min(n,i),c=Math.max(n,i);const l=(e[1]-r-o[1])*t[1],d=(e[4]+r-o[1])*t[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-r-o[2])*t[2],m=(e[5]+r-o[2])*t[2];return c=Math.min(c,Math.max(u,m)),!(c<0)&&(s=Math.max(s,Math.min(u,m)),!(s>c)&&s<a)}const N=1e3,A=1e-7,I=(0,a.Ue)(),_=[(0,a.Ue)(),(0,a.Ue)(),(0,a.Ue)()]},29296:function(e,o,t){t.d(o,{G:function(){return l}});var r=t(24910),a=t(82846),n=t(81342),i=t(87807),s=t(52061),c=t(92991);class l{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(s.T.POSITION).indices.length}write(e,o,t,r,a,n){return(0,c.NK)(t,r,this.vertexBufferLayout,e,o,a,n)}intersect(e,o,t,a,c,l,u){const m=this.vertexBufferLayout.createView(e).getField(s.T.POSITION,n.ct);if(null==m)return;const h=(0,r.a)(d,l,c),f=m.count/3,v=a.options.normalRequired;(0,i.IG)(c,h,0,f,m.typedBuffer,m.typedBufferStride,v,((e,o,t)=>{u(e,t,o)}))}}const d=(0,a.Ue)()},35720:function(e,o,t){t.d(o,{Gp:function(){return E},mo:function(){return L},Qm:function(){return V}});var r=t(24910),a=t(82846),n=t(88331),i=t(56172),s=t(52890),c=t(41044),l=t(57716),d=t(34479),u=t(83346),m=t(42510),h=t(95285),f=t(32420),v=t(40156),p=t(19596),g=t(61536),x=t(87807),b=t(948),w=t(52061),T=t(43925),M=t(29296),S=t(87265),C=t(10544),y=t(73440),O=t(31839),H=t(83046),z=t(91041);class P extends z.W{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=f.JJ.Opaque,this.doubleSidedMode=u.q.None,this.pbrMode=m.f7.Disabled,this.cullFace=f.Vr.None,this.normalType=l.r.Attribute,this.customDepthTest=f.Gv.Less,this.emissionSource=d.jo.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===d.jo.Texture||this.hasOcclusionTexture||this.hasNormalTexture?O.I.Default:O.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,y._)([(0,H.o)({count:f.JJ.COUNT})],P.prototype,"alphaDiscardMode",void 0),(0,y._)([(0,H.o)({count:u.q.COUNT})],P.prototype,"doubleSidedMode",void 0),(0,y._)([(0,H.o)({count:m.f7.COUNT})],P.prototype,"pbrMode",void 0),(0,y._)([(0,H.o)({count:f.Vr.COUNT})],P.prototype,"cullFace",void 0),(0,y._)([(0,H.o)({count:l.r.COUNT})],P.prototype,"normalType",void 0),(0,y._)([(0,H.o)({count:f.Gv.COUNT})],P.prototype,"customDepthTest",void 0),(0,y._)([(0,H.o)({count:d.jo.COUNT})],P.prototype,"emissionSource",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasVertexColors",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasSymbolColors",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasVerticalOffset",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasColorTexture",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasMetallicRoughnessTexture",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasOcclusionTexture",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasNormalTexture",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasScreenSizePerspective",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasVertexTangents",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasOccludees",void 0),(0,y._)([(0,H.o)()],P.prototype,"instancedDoublePrecision",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasModelTransformation",void 0),(0,y._)([(0,H.o)()],P.prototype,"offsetBackfaces",void 0),(0,y._)([(0,H.o)()],P.prototype,"vvSize",void 0),(0,y._)([(0,H.o)()],P.prototype,"vvColor",void 0),(0,y._)([(0,H.o)()],P.prototype,"receiveShadows",void 0),(0,y._)([(0,H.o)()],P.prototype,"receiveAmbientOcclusion",void 0),(0,y._)([(0,H.o)()],P.prototype,"textureAlphaPremultiplied",void 0),(0,y._)([(0,H.o)()],P.prototype,"instanced",void 0),(0,y._)([(0,H.o)()],P.prototype,"instancedColor",void 0),(0,y._)([(0,H.o)()],P.prototype,"writeDepth",void 0),(0,y._)([(0,H.o)()],P.prototype,"transparent",void 0),(0,y._)([(0,H.o)()],P.prototype,"enableOffset",void 0),(0,y._)([(0,H.o)()],P.prototype,"terrainDepthTest",void 0),(0,y._)([(0,H.o)()],P.prototype,"cullAboveTerrain",void 0),(0,y._)([(0,H.o)()],P.prototype,"snowCover",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasBloom",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasColorTextureTransform",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasEmissionTextureTransform",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasNormalTextureTransform",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasOcclusionTextureTransform",void 0),(0,y._)([(0,H.o)()],P.prototype,"hasMetallicRoughnessTextureTransform",void 0);var N=t(58257),A=t(49785);class I extends C.tT{constructor(e,o){super(e,o,new N.J(A.R,(()=>t.e(22219).then(t.bind(t,22219))))),this.type="RealisticTreeTechnique"}}var _=t(64801);class E extends p.F5{constructor(e,o){super(e,L),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[b.r.OPAQUE_MATERIAL,e=>((0,c.ED)(e)||(0,c.Kr)(e))&&!this.transparent],[b.r.TRANSPARENT_MATERIAL,e=>((0,c.ED)(e)||(0,c.Kr)(e))&&this.transparent&&this.parameters.writeDepth],[b.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,c.Jb)(e)||(0,c.Kr)(e))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const o=(0,s.U$)().vec3f(w.T.POSITION);return e.normalType===l.r.Compressed?o.vec2i16(w.T.NORMALCOMPRESSED,{glNormalized:!0}):o.vec3f(w.T.NORMAL),e.hasVertexTangents&&o.vec4f(w.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&o.vec2f16(w.T.UV0),e.hasVertexColors&&o.vec4u8(w.T.COLOR),e.hasSymbolColors&&o.vec4u8(w.T.SYMBOLCOLOR),(0,h.B)()&&o.vec4u8(w.T.OLIDCOLOR),o}(this.parameters),this._configuration=new P(o.spherical)}isVisibleForOutput(e){return e!==c.H_.Shadow&&e!==c.H_.ShadowExcludeHighlight&&e!==c.H_.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:o,opacity:t,externalColor:r}=this.parameters;return e*("replace"===o?1:t)*("ignore"===o?1:r[3])>=_.e}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,r.q)(this.parameters.emissiveBaseColor,a.AG)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===n.V6.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===n.V6.Color)}getConfiguration(e,o){const{parameters:t,_configuration:r}=this,{treeRendering:a,doubleSided:i,doubleSidedType:s}=t;return super.getConfiguration(e,o,this._configuration),r.hasNormalTexture=!a&&!!t.normalTextureId,r.hasColorTexture=!!t.textureId,r.hasVertexTangents=!a&&t.hasVertexTangents,r.instanced=t.isInstanced,r.instancedDoublePrecision=t.instancedDoublePrecision,r.vvSize=!!t.vvSize,r.hasVerticalOffset=null!=t.verticalOffset,r.hasScreenSizePerspective=null!=t.screenSizePerspective,r.hasSlicePlane=t.hasSlicePlane,r.alphaDiscardMode=t.textureAlphaMode,r.normalType=a?l.r.Attribute:t.normalType,r.transparent=this.transparent,r.writeDepth=t.writeDepth,r.customDepthTest=t.customDepthTest??f.Gv.Less,r.hasOccludees=o.hasOccludees,r.cullFace=t.hasSlicePlane?f.Vr.None:t.cullFace,r.cullAboveTerrain=o.cullAboveTerrain,r.hasModelTransformation=!a&&null!=t.modelTransformation,r.hasVertexColors=t.hasVertexColors,r.hasSymbolColors=t.hasSymbolColors,r.doubleSidedMode=a?u.q.WindingOrder:i&&"normal"===s?u.q.View:i&&"winding-order"===s?u.q.WindingOrder:u.q.None,r.instancedColor=t.hasInstancedColor,(0,c.c1)(e)?(r.terrainDepthTest=o.terrainDepthTest,r.receiveShadows=t.receiveShadows,r.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=o.ssao):(r.terrainDepthTest=!1,r.receiveShadows=r.receiveAmbientOcclusion=!1),r.vvColor=!!t.vvColor,r.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,r.pbrMode=t.usePBR?t.isSchematic?m.f7.Schematic:m.f7.Normal:m.f7.Disabled,r.hasMetallicRoughnessTexture=!a&&!!t.metallicRoughnessTextureId,r.emissionSource=a?d.jo.None:null!=t.emissiveTextureId&&t.emissiveSource===n.V6.Emissive?d.jo.Texture:t.usePBR?t.emissiveSource===n.V6.Emissive?d.jo.EmissiveColor:d.jo.SymbolColor:d.jo.None,r.hasOcclusionTexture=!a&&!!t.occlusionTextureId,r.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),r.oitPass=o.oitPass,r.enableOffset=o.camera.relativeElevation<g.ve,r.snowCover=o.snowCover,r.hasBloom=(0,c.qC)(e),r.hasColorTextureTransform=!!t.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,r}intersect(e,o,t,a,n,s){if(null!=this.parameters.verticalOffset){const e=t.camera;(0,r.i)(W,o[12],o[13],o[14]);let s=null;switch(t.viewingMode){case i.JY.Global:s=(0,r.n)(j,W);break;case i.JY.Local:s=(0,r.c)(j,G)}let c=0;const l=(0,r.d)(U,W,e.eye),d=(0,r.l)(l),u=(0,r.g)(l,l,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,r.e)(s,u)),c+=(0,S.Hx)(e,d,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective),(0,r.g)(s,s,c),(0,r.o)(B,s,t.transform.inverseRotation),a=(0,r.d)(R,a,B),n=(0,r.d)(D,n,B)}(0,x.Bw)(e,t,a,n,(0,T.W9)(t.verticalOffset),s)}createGLMaterial(e){return new F(e)}createBufferWriter(){return new M.G(this._vertexBufferLayout)}get transparent(){return V(this.parameters)}}class F extends v.Fj{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const t=e.camera.viewInverseTransposeMatrix;return(0,r.i)(o.origin,t[3],t[7],t[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(o.treeRendering?I:C.tT,e)}}class L extends C.em{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function V(e){const{drivenOpacity:o,opacity:t,externalColor:[r,a,n,i],layerOpacity:s,texture:c,textureId:l,textureAlphaMode:d,colorMixMode:u}=e;return o||t<1&&"replace"!==u||i<1&&"ignore"!==u||s<1||(null!=c||null!=l)&&d!==f.JJ.Opaque&&d!==f.JJ.Mask&&"replace"!==u}const R=(0,a.Ue)(),D=(0,a.Ue)(),G=(0,a.al)(0,0,1),j=(0,a.Ue)(),B=(0,a.Ue)(),W=(0,a.Ue)(),U=(0,a.Ue)()},10544:function(e,o,t){t.d(o,{Qm:function(){return T},em:function(){return w},tT:function(){return M}});var r=t(82846),a=t(27583),n=t(88331),i=t(41044),s=t(57716),c=t(48737),l=t(58257),d=t(29107),u=t(32420),m=t(19596),h=t(61536),f=t(26041),v=t(18836),p=t(1282),g=t(65650),x=t(51135),b=t(64801);class w extends c.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=v.xq,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=n.V6.Color,this.emissiveBaseColor=r.AG,this.instancedDoublePrecision=!1,this.normalType=s.r.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,r.vV)(.2,.2,.2),this.diffuse=(0,r.vV)(.8,.8,.8),this.externalColor=(0,a.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.Ue)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=u.Gv.Less,this.textureAlphaMode=u.JJ.Blend,this.textureAlphaCutoff=b.e,this.textureAlphaPremultiplied=!1,this.renderOccluded=m.yD.Occlude,this.isDecoration=!1}}class T extends c.Pf{constructor(){super(...arguments),this.origin=(0,r.Ue)(),this.slicePlaneLocalOrigin=this.origin}}class M extends d.A{constructor(e,o,r=new l.J(p.D,(()=>t.e(58734).then(t.bind(t,58734))))){super(e,o,r),this.type="DefaultMaterialTechnique"}_makePipeline(e,o){const{oitPass:t,output:r,transparent:a,cullFace:n,customDepthTest:s,hasOccludees:c}=e;return(0,x.sm)({blending:(0,i.c1)(r)&&a?(0,h.Wo)(t):null,culling:C(e)?(0,x.zp)(n):null,depthTest:{func:(0,h.Bh)(t,S(s))},depthWrite:(0,h.W$)(e),drawBuffers:(0,d.E)(r,(0,h.u_)(t,r)),colorWrite:x.gf,stencilWrite:c?f.s3:null,stencilTest:c?o?f.eD:f.RY:null,polygonOffset:(0,h.eZ)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function S(e){return e===u.Gv.Lequal?g.wb.LEQUAL:g.wb.LESS}function C(e){return e.cullFace!==u.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}}}]);