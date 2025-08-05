"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[232],{71389:function(e,t,r){r.d(t,{H:function(){return f},b:function(){return g}});var i=r(22806),n=r(57531),o=r(19251),s=r(85119),a=r(48857),c=r(20431),l=r(34709),h=r(29234),u=r(24728),d=r(15150);function g(){const e=new d.kG;e.include(i.y);const{fragment:t}=e;return t.uniforms.add(new l.A("blurInput",(e=>e.highlightBlurTexture)),new o.q("blurSize",(e=>e.blurSize)),new h.T("highlightTexture",(e=>e.highlightTexture)),new l.A("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new c._("highlightLevel",(e=>e.highlightLevel)),new s.p("occludedIntensityFactor",(e=>e.occludedFactor))),t.constants.add("inner","float",1-(u.o-u.b)/u.o),e.include(n.D),t.main.add(a.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
uvec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},63003:function(e,t,r){r.d(t,{H:function(){return h},a:function(){return d},b:function(){return u}});var i=r(41788),n=r(22806),o=r(19251),s=r(48857),a=r(29193),c=r(74826),l=r(15150);class h extends c.K{constructor(){super(...arguments),this.blurSize=(0,i.Ue)()}}function u(){const e=new l.kG;return e.include(n.y),e.outputs.add("fragHighlight","vec2",0),e.fragment.uniforms.add(new o.q("blurSize",(e=>e.blurSize)),new a.R("blurInput",(e=>e.blurInput))).main.add(s.H`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:h,build:u},Symbol.toStringTag,{value:"Module"}))},24728:function(e,t,r){r.d(t,{H:function(){return c},a:function(){return g},b:function(){return d},c:function(){return l},g:function(){return h},o:function(){return u}});var i=r(17904),n=r(48857),o=r(29234),s=r(74826),a=r(15150);class c extends s.K{}function l(){const e=new a.kG,{outputs:t,fragment:r}=e;return e.include(i.k),r.uniforms.add(new o.T("highlightTexture",(e=>e.highlightTexture))),r.constants.add("outlineWidth","int",Math.ceil(u)),r.constants.add("cellSize","int",h),t.add("fragGrid","uvec2"),r.main.add(n.H`ivec2 inputTextureSize = textureSize(highlightTexture, 0);
ivec2 cellBottomLeftCornerInput = ivec2(ivec2(floor(gl_FragCoord.xy) * vec2(cellSize)));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = texelFetch(highlightTexture, coordMid, 0).rg & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
texelFetch(highlightTexture,coord+ivec2(0,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(0,1),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,1),0).rg & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = outputValue;`),e}const h=32,u=9,d=.4,g=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:c,blurSize:d,build:l,gridCellPixelSize:h,outlineSize:u},Symbol.toStringTag,{value:"Module"}))},9945:function(e,t,r){r.d(t,{H:function(){return h},b:function(){return l}});var i=r(22806),n=r(57531),o=r(48857),s=r(20431),a=r(29234),c=r(15150);function l(){const e=new c.kG;e.include(i.y),e.include(n.D);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new a.T("highlightTexture",(e=>e.highlightTexture)),new s._("highlightLevel",(e=>e.highlightLevel))),t.main.add(o.H`ivec2 iuv = ivec2(gl_FragCoord.xy);
uvec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}))},56458:function(e,t,r){r.d(t,{O:function(){return u},a:function(){return g},b:function(){return d}});var i=r(85216),n=r(17904),o=r(85119),s=r(48857),a=r(20431),c=r(34709),l=r(74826),h=r(15150);class u extends l.K{constructor(){super(...arguments),this.overlayIndex=i.fu.INNER,this.opacity=1}}function d(){const e=new h.kG;return e.include(n.k),e.fragment.uniforms.add(new c.A("tex",(e=>e.texture))),e.fragment.uniforms.add(new a._("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new o.p("opacity",(e=>e.opacity))),e.fragment.main.add(s.H`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:u,build:d},Symbol.toStringTag,{value:"Module"}))},82792:function(e,t,r){r.d(t,{T:function(){return h},a:function(){return d},b:function(){return u}});var i=r(82846),n=r(17904),o=r(9535),s=r(48857),a=r(34709),c=r(74826),l=r(15150);class h extends c.K{constructor(){super(...arguments),this.color=(0,i.al)(1,1,1)}}function u(){const e=new l.kG;return e.include(n.k),e.fragment.uniforms.add(new a.A("tex",(e=>e.texture)),new o.J("uColor",(e=>e.color))),e.fragment.main.add(s.H`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:h,build:u},Symbol.toStringTag,{value:"Module"}))},61544:function(e,t,r){r.d(t,{r:function(){return i}});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get outerSize(){return this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){this._outer.forEach(((t,r)=>t.forEach(((t,i)=>e(t,r,i)))))}}},86456:function(e,t,r){r.d(t,{EU:function(){return _},Ue:function(){return l},WH:function(){return v},ZZ:function(){return p},q_:function(){return d},qw:function(){return f},uT:function(){return h},up:function(){return x},zk:function(){return u}});var i=r(99574),n=r(31865),o=r(18156),s=r(21117),a=r(24910),c=r(82846);function l(e=x){return[e[0],e[1],e[2],e[3]]}function h(e,t,r=l()){return(0,a.c)(r,e),r[3]=t,r}function u(e,t,r){return(0,a.h)(r,e,t),(0,a.n)(r,r),r[3]=-(0,a.p)(e,t),r}function d(e,t=l()){const r=(0,n.j6)(y,e);return m(t,(0,i.BV)((0,o.Bh)(t,r))),t}function g(e,t,r=l()){return(0,o.yY)(y,e,v(e)),(0,o.yY)(C,t,v(t)),(0,o.Jp)(y,C,y),m(r,(0,i.BV)((0,o.Bh)(r,y)))}function f(e,t,r,i=l()){return h(c.E9,e,w),h(c.IO,t,b),h(c.eG,r,T),g(w,b,w),g(w,T,i),i}function p(e){return e}function _(e){return e[3]}function v(e){return(0,i.Vl)(e[3])}function m(e,t){return e[3]=t,e}const x=[0,0,1,0],y=(0,s.Ue)(),C=(0,s.Ue)(),w=(l(),l()),b=l(),T=l()},41629:function(e,t,r){var i,n;function o(e){return null!=e&&!e.running}r.d(t,{TH:function(){return i},WU:function(){return o},uz:function(){return n}}),function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"}(i||(i={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(n||(n={}))},85772:function(e,t,r){r.d(t,{K:function(){return _},e:function(){return i}});var i,n,o=r(79487),s=r(99574),a=r(39355),c=r(31865),l=r(10934),h=r(24910),u=r(82846),d=r(86456),g=r(21414),f=r(41629),p=r(70973);class _{constructor(){this.startTime=0,this._data=(0,a.t)(null),this.coverage=0,this.absorption=0,this._readChannels=f.uz.RG,this.parallax=new v,this.parallaxNew=new v,this._anchorPoint=(0,u.Ue)(),this._fadeState=(0,a.t)(i.HIDE),this._fadeFactor=(0,a.t)(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case i.HIDE:return 0;case i.FADE_OUT:return 1-this.fadeFactor;case i.FADE_IN:return this.fadeFactor;case i.SHOW:case i.CROSS_FADE:return 1}}fade(e,t,r){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=r?(0,s.uZ)((t-this.startTime)/(C*r),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(e,t),this._updateParallax(e)}_evaluateState(e,t){const r=e.relativeElevation,n=this._updateAnchorPoint(e);(r>1.7*p.rm||r<-1e4||n>b)&&this.opacity>0?this._startFade(i.HIDE,t):this.isFading||(r>p.rm||r<-.35*p.rm||n>w*b?this.opacity>0&&this._startFade(i.FADE_OUT,t):(0,f.WU)(this.data)&&(0===this.opacity?this._startFade(i.FADE_IN,t):this.data.state===f.TH.Ready&&(this.fadeState===i.SHOW?this._startFade(i.CROSS_FADE,t):this._startFade(i.SHOW,t))))}_updateParallax(e){const t=(0,h.k)(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-g.sv.radius*g.sv.radius,0))/Math.sqrt(t),(0,d.zk)(m,this.parallax.anchorPoint,x),(0,c.U1)(this.parallax.transform,l.Wd,x[3],(0,d.ZZ)(x)),(0,d.zk)(m,this.parallaxNew.anchorPoint,x),(0,c.U1)(this.parallaxNew.transform,l.Wd,x[3],(0,d.ZZ)(x))}_updateAnchorPoint(e){return(0,h.n)(this._anchorPoint,e.eye),(0,h.g)(this._anchorPoint,this._anchorPoint,g.sv.radius),this.fadeState===i.HIDE&&this.data?.state===f.TH.Ready?((0,h.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,h.l)((0,h.d)(y,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,t){switch(this._fadeState.value=e,this.startTime=t,e){case i.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,h.c)(this.parallax.anchorPoint,this._anchorPoint),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_OUT:this.requestFade();break;case i.SHOW:this._switchReadChannels(),(0,h.c)(this.parallax.anchorPoint,this._anchorPoint),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case i.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==f.TH.Ready&&(this.data.state=f.TH.Idle),this.fadeState){case i.CROSS_FADE:(0,h.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=i.SHOW;break;case i.FADE_IN:this._fadeState.value=i.SHOW;break;case i.FADE_OUT:this._fadeState.value=i.HIDE;break;case i.SHOW:case i.HIDE:break;default:(0,o.Bg)(this.fadeState)}}_switchReadChannels(){this.data?.state===f.TH.Ready&&(this._readChannels=1-this._readChannels,this.data.state=f.TH.Fading)}get isFading(){return this.fadeState===i.FADE_OUT||this.fadeState===i.FADE_IN||this.fadeState===i.CROSS_FADE}}(n=i||(i={}))[n.HIDE=0]="HIDE",n[n.FADE_IN=1]="FADE_IN",n[n.SHOW=2]="SHOW",n[n.CROSS_FADE=3]="CROSS_FADE",n[n.FADE_OUT=4]="FADE_OUT";class v{constructor(){this.anchorPoint=(0,u.Ue)(),this.radiusCurvatureCorrection=0,this.transform=(0,l.Ue)()}}const m=(0,u.al)(0,0,1),x=(0,d.Ue)(),y=(0,u.Ue)(),C=1.25,w=.5,b=2e5},70973:function(e,t,r){r.d(t,{$T:function(){return d},Hr:function(){return c},b8:function(){return h},rm:function(){return u}});var i=r(76224),n=r(85953),o=r(86470),s=r(26221),a=r(47826);const c={key:"type",base:a.Z,typeMap:{sunny:a.Z,cloudy:i.Z,rainy:o.Z,snowy:s.Z,foggy:n.Z}},l=Object.keys(c.typeMap);function h(e,t){return!!l.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const u=1e4,d=1e5},72894:function(e,t,r){r.d(t,{K:function(){return o}});var i=r(65650),n=r(31442);function o(e,t=0){const r=e.stride;return Array.from(e.fields.keys()).map((i=>{const o=e.fields.get(i),a=o.constructor.ElementCount,c=s(o.constructor.ElementType),l=o.offset,h=o.optional?.glNormalized??!1;return new n.G(i,a,c,l,r,h,t)}))}function s(e){const t=a[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const a={u8:i.g.UNSIGNED_BYTE,u16:i.g.UNSIGNED_SHORT,u32:i.g.UNSIGNED_INT,i8:i.g.BYTE,i16:i.g.SHORT,i32:i.g.INT,f16:i.g.HALF_FLOAT,f32:i.g.FLOAT}},61796:function(e,t,r){var i;r.d(t,{D:function(){return i}}),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(i||(i={}))},61471:function(e,t,r){r.d(t,{CB:function(){return ie},gi:function(){return se},Qi:function(){return ae}});var i=r(73440),n=r(87833),o=(r(61432),r(79577)),s=r(61100),a=r(63974),c=r(90403),l=r(74355),h=r(17155),u=(r(96711),r(83850),r(48023)),d=r(31865),g=r(24910),f=r(82846),p=r(94808),_=r(27762),v=r(85216),m=r(47566),x=r(25909);class y{constructor(){this._extent=(0,m.Ue)(),this.resolution=0,this.renderLocalOrigin=(0,x.a)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new C}get extent(){return this._extent}setupGeometryViews(e){if(this._setupGeometryView(),!e)return;const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,m.cv)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,m.cv)(this._extent,-e.range,0,t)}}_setupGeometryView(){this.canvasGeometries.numViews=1,(0,m.JG)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class C{constructor(){this.extents=[(0,m.Ue)(),(0,m.Ue)(),(0,m.Ue)()],this.numViews=0}}var w=r(61796);class b{constructor(e,t,r){this._fbos=e,this._format=t,this._name=r}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,s.RY)(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,r){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===r||(this._handle?.release(),this._handle=this._fbos.acquire(t,r,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}var T=r(69371),D=r(41044),S=r(95285);class R{constructor(e,t,r,i,n=T.qz.RGBA8UNORM_MIPMAP){this.output=r,this.content=i,this.fbo=new b(e,n,t)}get valid(){return this.fbo.valid}}class O{constructor(e){this.targets=[new R(e,"overlay color",D.H_.Color,w.D.Color),new R(e,"overlay IM color",D.H_.Color,w.D.ColorNoRasterImage),new R(e,"overlay highlight",D.H_.Highlight,w.D.Highlight,T.qz.RG8UINT),new R(e,"overlay water",D.H_.Normal,w.D.WaterNormal),new R(e,"overlay occluded",D.H_.Color,w.D.Occluded)],(0,S.B)()&&this.targets.push(new R(e,"overlay olid",D.H_.ObjectAndLayerIdColor,w.D.ObjectAndLayerIdColor,T.qz.RGBA8UNORM))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,t,r)=>t.valid?e|=1<<r:e),0)}}var E=r(48636),M=r(76144),I=r(82792),A=r(20472),P=r(35285),F=r(32420),H=r(86236),N=r(3648),z=r(19596),U=r(33610),L=r(73267),V=r(948),B=r(79262),j=r(58257),G=r(29107),W=r(51135);class k extends G.A{constructor(e,t){super(e,t,new j.J(I.a,(()=>r.e(94310).then(r.bind(r,94310)))))}initializePipeline(e){return e.hasAlpha?(0,W.sm)({blending:W.vf,colorWrite:W.gf}):(0,W.sm)({colorWrite:W.gf})}}var q=r(83046);class Z extends q.m{constructor(){super(...arguments),this.hasAlpha=!1}}(0,i._)([(0,q.o)()],Z.prototype,"hasAlpha",void 0);var Y=r(81021),K=r(94125),X=r(8562),Q=r(56458);class $ extends G.A{constructor(e,t){super(e,t,new j.J(Q.a,(()=>r.e(25347).then(r.bind(r,25347)))))}}var J=r(50399),ee=r(65650),te=r(8158),re=r(35928);let ie=class extends A.tY{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Q.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new a.Z,this._passParameters=new I.T,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new E.Z,this.events=new n.Z,this.longitudeCyclical=null,this.produces=new Map([[V.r.DRAPED_MATERIAL,e=>e!==D.H_.Highlight||this.hasHighlights],[V.r.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,t=e.stage,r=t.renderer.fboCache,{waterTextures:i,techniques:n}=t.renderView;this._renderContext=new L.V(this._rctx,new B.l(r,e.state.viewingMode),n),this.addHandles([(0,c.YP)((()=>i.updating),(()=>this.events.emit("content-changed")),c.tX),(0,c.YP)((()=>this.spatialReference),(e=>this._localOriginFactory=new N.C(e)),c.tX),(0,c.on)((()=>e.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),(0,c.YP)((()=>(0,P.yp)(e.state.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),c.nn),(0,c.YP)((()=>e.state.highlights),(t=>{this._bindParameters.highlights=t,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap}),c.nn),e.resourceController.scheduler.registerTask(J.T8.OVERLAY_RENDERER,this)]);const{_bindParameters:o,_camera:s}=this;s.near=1,s.far=1e4,s.relativeElevation=null,o.slot=V.r.DRAPED_MATERIAL,o.mainDepth=null,o.camera=s,o.oitPass=U.M.NONE,o.updateLighting([new X.Mi((0,f.iU)())],0,0,Y.B.Immediate)}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=(0,s.M2)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view.stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._pluginContext.materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){const t=new H.h(this._view.stage.renderView.textures,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));this._pluginContext={...e,materials:t},this._techniques.precompile($)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,o.oE)(this._renderers,(e=>e.updating||e.canCompact))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}registerDrapeSource(e,t){const r=this._renderers.get(e);null!=r&&r.destroy(),this._renderers.set(e,t),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles((0,c.YP)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e)}removeDrapeSourceRenderer(e){if(null==e)return;const t=this._renderers.get(e);null!=t&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,l.fn)(e,(e=>e.drapeTargetType===p.al.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=(0,l.fn)(e,(e=>e.drapeSourceType===p.Lw.Features)),this._hasDrapedRasterSource=(0,l.fn)(e,(e=>e.drapeSourceType===p.Lw.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t,r=this._bindParameters.overlayStretch){null==this._overlays&&(this._renderTargets=new O(this._stage.renderer.fboCache),this._overlays=[new y,new y]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=(0,s.M2)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){return e===w.D.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(w.D.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,n]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&n.commitChanges()&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers(),e.madeProgress()),this.compact(e),r&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,o.oE)(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"))}compact(e){let t=!1;for(const r of this._renderers.values()){if(e.done)break;t=r.compact(e)||t}return t&&this.notifyChange("updating"),t}hasHighlight(e){return(0,o.oE)(this._renderers,(t=>t.hasHighlight(e)))}processSyncDrapeSources(){this._processDrapeSources(J.G5,(e=>e.updatePolicy===K.j.SYNC))}get isEmpty(){return!_.h.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,o.oE)(this._renderers,(e=>!e.isEmpty))}get hasWater(){const e=(0,o.oE)(this._renderers,(({hasWater:e})=>e));return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=ae,++this._techniques.precompiling;const t=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(_.h.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==w.D.Occluded&&e!==w.D.Highlight)return!0;if(!this._overlays)return!1;const t=this._overlays[v.fu.INNER];for(const e of this._overlays)e.setupGeometryViews(this.longitudeCyclical);if(!t.hasSomeSizedView())return!1;const r=this._renderContext.output;this._renderContext.output=this._renderTargets?.targets.find((t=>t.content===e))?.output??D.H_.Color,++this._techniques.precompiling;const i=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.output=r,i}get mode(){return this.isEmpty?M.gT.Disabled:this.hasWater&&this.renders(w.D.WaterNormal)?M.gT.EnabledWithWater:this._renderTargets?.getTexture(w.D.Color)?M.gT.Enabled:M.gT.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t&&this.parent.requestRender(F.Xx.BACKGROUND),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(!this._overlays||!this._renderTargets)return;const t=this._bindParameters;t.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===w.D.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=e.output;this._renderContext.output=r,t.slot=r===D.H_.Normal?V.r.DRAPED_WATER:V.r.DRAPED_MATERIAL,r===D.H_.Highlight&&(t.highlightMixTexture=t.highlights.length>1?this._rctx.emptyTexture:null),e.content===w.D.Occluded&&(this._renderContext.renderOccludedMask=ae),this._sortedRenderers.forAll((({drapeSource:t,renderer:r})=>{e.content===w.D.ColorNoRasterImage&&t.drapeSourceType===p.Lw.RasterImage||r.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=L.C,t.highlightMixTexture=null}--this._techniques.precompiling}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)e.setupGeometryViews(this.longitudeCyclical);this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const e of this._renderTargets.targets){if(e.content===w.D.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=this._drawTarget(v.fu.INNER,e),r=this._drawTarget(v.fu.OUTER,e);(t||r)&&e.fbo.generateMipMap()}}}_drawTarget(e,t){const r=this._overlays[e],i=r.canvasGeometries;if(0===i.numViews)return!1;const n=this._view.state.contentPixelRatio;this._screenToWorldRatio=n*r.mapUnitsPerPixel/this._bindParameters.overlayStretch;const{output:o}=t;if(this.isEmpty||o===D.H_.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const{_rctx:s,_camera:a,_renderContext:c,_bindParameters:l}=this;if(a.pixelRatio=r.pixelRatio*n,c.output=o,l.screenToWorldRatio=this._screenToWorldRatio,l.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,l.slot=o===D.H_.Normal?V.r.DRAPED_WATER:V.r.DRAPED_MATERIAL,t.content===w.D.Occluded&&(c.renderOccludedMask=ae),!this.renders(t.content))return c.renderOccludedMask=L.C,!1;const{resolution:h}=r,u=e===v.fu.INNER,d=u?0:h;if(s.setViewport(d,0,h,h),this._bindTargetFBO(t),u)if(t.output!==D.H_.Highlight)s.setClearColor(0,0,0,0),s.clear(ee.Hf.COLOR);else{const{gl:e}=s;e.clearBufferuiv(e.COLOR,0,[0,0,0,0])}if(_.h.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==w.D.Occluded&&t.content!==w.D.Highlight){this._techniques.precompile(k,ce);const t=this._techniques.get(k,ce);for(let n=0;n<i.numViews;n++)this._setViewParameters(i.extents[n],r),this._ensureDebugPatternResources(r.resolution,oe[e]),s.bindTechnique(t,l,this._passParameters),s.screen.draw()}if(t.output===D.H_.Highlight){const{fboCache:r}=this._stage.renderer,i=this._resolution;this._bindTargetFBO(t),(0,P.m7)(s,r,{width:i,height:i},l,(()=>this._renderAllGeometry(e,t)),d)}else this._renderAllGeometry(e,t);return s.bindFramebuffer(null),c.renderOccludedMask=L.C,!0}_renderAllGeometry(e,t){const r=this._overlays[e],i=r.canvasGeometries;this._sortedRenderers.forAll((({drapeSource:n,renderer:o})=>{if(t.content===w.D.ColorNoRasterImage&&n.drapeSourceType===p.Lw.RasterImage)return;const{fullOpacity:s}=n,a=null!=s&&s<1&&t.output===D.H_.Color&&this._bindTemporaryFBO();for(let e=0;e<i.numViews;e++)this._setViewParameters(i.extents[e],r),o.render(this._renderContext);if(a){this._bindTargetFBO(t),this._overlayParameters.texture=a.getTexture(),this._overlayParameters.opacity=s,this._overlayParameters.overlayIndex=e;const r=this._techniques.get($);this._rctx.bindTechnique(r,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),a.release()}}))}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(ee.Hf.COLOR),i}get _resolution(){return this._overlays?.[v.fu.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let n=0;for(const{renderer:o}of this._sortedRenderers)n=o.intersect?.(e,t,r,i,n)??n}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this._view.map.allLayers,t=e.length;this._renderers.forEach(((r,i)=>{const n=e.indexOf(i.layer),o=n>=0,s=i.renderGroup??(o?p.eZ.MapLayer:p.eZ.ViewLayer),a=i.drapeSourcePriorityOffset??0,c=t*s+(o?n:0)+a;this._sortedRenderers.push(new ne(i,r,c))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],(0,d.M5)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,d.vc)(r.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,t){if((0,g.i)(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let t=0;t<e;t++)for(let n=0;n<e;n++){const o=Math.floor(n/10),s=Math.floor(t/10);o<2||s<2||10*o>e-20||10*s>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&s?1&n^1&t?0:255:1&o^1&s?0:128)}const n=new re.X(e);n.samplingMode=ee.cw.NEAREST,this._passParameters.texture=new te.x(this._rctx,n,r)}get test(){}};(0,i._)([(0,h.Cb)()],ie.prototype,"hasHighlights",void 0),(0,i._)([(0,h.Cb)()],ie.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],ie.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"_techniques",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],ie.prototype,"updating",null),(0,i._)([(0,h.Cb)()],ie.prototype,"isEmpty",null),(0,i._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"rendersOccludedDraped",null),ie=(0,i._)([(0,u.j)("esri.views.3d.terrain.OverlayRenderer")],ie);class ne{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const oe=[[1,.5,.5],[.5,.5,1]],se=-2,ae=z.yD.OccludeAndTransparent,ce=new Z;ce.hasAlpha=!0},85216:function(e,t,r){var i,n,o;r.d(t,{Ns:function(){return o},fu:function(){return i},tk:function(){return n}}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(n||(n={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(o||(o={}))},74222:function(e,t,r){var i;r.d(t,{o:function(){return i}}),function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"}(i||(i={}))},22806:function(e,t,r){r.d(t,{y:function(){return d}});var i=r(26821),n=r(41788),o=r(48857),s=r(5998),a=r(92217);class c extends a.x{constructor(e,t){super(e,"ivec2",s.P.Pass,((r,i,n)=>r.setUniform2iv(e,t(i,n))))}}var l=r(20431),h=r(29234),u=r(24728);function d(e){const{vertex:t}=e;t.uniforms.add(new h.T("coverageTexture",(e=>e.coverageTexture)),new c("highlightRenderCellCount",(e=>(0,i.t8)(g,e.horizontalCellCount,e.verticalCellCount))),new c("highlightTextureResolution",(({highlightTexture:e})=>(0,i.t8)(g,e.descriptor.width,e.descriptor.height))),new l._("highlightLevel",(e=>e.highlightLevel))).constants.add("cellSize","int",u.g),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(o.H`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),t.main.add(o.H`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = texelFetch(coverageTexture, cellPos, 0).rg;
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const g=(0,n.Ue)()},87558:function(e,t,r){r.d(t,{E:function(){return o},K:function(){return n}});var i=r(48857);function n(e){e.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function o(e){e.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},40212:function(e,t,r){r.d(t,{D:function(){return o}});var i=r(38461),n=r(48857);function o(e){e.code.add(n.H`
    const float GAMMA = ${n.H.float(i.jm)};
    const float INV_GAMMA = ${n.H.float(1/i.jm)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}},53330:function(e,t,r){r.d(t,{B:function(){return _}});var i=r(87558),n=r(40212),o=r(4106),s=r(36553),a=r(20638),c=r(37124),l=r(13663),h=r(48857),u=r(18489),d=r(71063);function g(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(a.K),r.uniforms.add(new c.$("nearFar",(e=>e.camera.nearFar)),new d.e("depthMap",(e=>e.depth?.attachment)),new u.C("proj",(e=>e.camera.projectionMatrix)),new l.z("invResolutionHeight",(e=>1/e.camera.height)),new u.C("reprojectionMatrix",(e=>e.ssr.reprojectionMatrix))).code.add(h.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}var f=r(29736),p=r(85797);function _(e,t){const r=e.fragment;r.include(o.g,t),r.include(n.D),r.include(i.E),t.cloudReflections&&e.include(f.j),e.include(g,t),r.include(p.l,t),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",s.s),r.constants.add("ssrHeightFadeEnd","float",s.o),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(h.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new l.z("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new l.z("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))),r.code.add(h.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new l.z("cloudsOpacity",(e=>e.clouds.opacity))).code.add(h.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new u.C("view",(e=>e.camera.viewMatrix)),new d.e("lastFrameColorTexture",(e=>e.ssr.lastFrameColor?.getTexture())),new l.z("fadeFactorSSR",(e=>e.ssr.fadeFactor))).code.add(h.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(h.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(h.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(h.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(h.H`return waterRenderedColor;
}`)}},76144:function(e,t,r){r.d(t,{WB:function(){return y},WE:function(){return b},gT:function(){return i},yl:function(){return C}});var i,n,o=r(27583),s=r(47566),a=r(85216),c=r(61796),l=r(74222),h=r(41044),u=r(32179),d=r(42510),g=r(53330),f=r(90285),p=r(85119),_=r(48857),v=r(34709),m=r(29234),x=r(92217);function y(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new f.$("overlayTexOffset",((e,t)=>function(e,t){const r=t.overlay?.overlays[a.fu.INNER]?.extent;(0,s.py)(r)&&(T[0]=e.toMapSpace[0]/(0,s.d_)(r)-r[0]/(0,s.d_)(r),T[1]=e.toMapSpace[1]/(0,s.Cb)(r)-r[1]/(0,s.Cb)(r));const i=t.overlay?.overlays[a.fu.OUTER]?.extent;return(0,s.py)(i)&&(T[2]=e.toMapSpace[0]/(0,s.d_)(i)-i[0]/(0,s.d_)(i),T[3]=e.toMapSpace[1]/(0,s.Cb)(i)-i[1]/(0,s.Cb)(i)),T}(e,t))),new f.$("overlayTexScale",((e,t)=>function(e,t){const r=t.overlay?.overlays[a.fu.INNER]?.extent;(0,s.py)(r)&&(T[0]=e.toMapSpace[2]/(0,s.d_)(r),T[1]=e.toMapSpace[3]/(0,s.Cb)(r));const i=t.overlay?.overlays[a.fu.OUTER]?.extent;return(0,s.py)(i)&&(T[2]=e.toMapSpace[2]/(0,s.d_)(i),T[3]=e.toMapSpace[3]/(0,s.Cb)(i)),T}(e,t)))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new v.A("ovColorTex",((e,t)=>b(e,t)))),w(e,t)}function C(e,t){const{vertex:r,fragment:i}=e,{output:n}=t;r.uniforms.add(new D("overlayTexOffset"),new D("overlayTexScale")),i.uniforms.add(new p.p("overlayOpacity",(e=>e.overlayOpacity))),n!==h.H_.Highlight&&i.uniforms.add(new v.A("ovColorTex",((e,t)=>t.overlay?.getTexture(e.overlayContent)))),w(e,t)}function w(e,t){const r=t.pbrMode===d.f7.Water||t.pbrMode===d.f7.WaterOnIntegratedMesh||t.pbrMode===d.f7.TerrainWithWater;r&&e.include(g.B,t);const{vertex:i,fragment:n,varyings:o}=e;o.add("vtcOverlay","vec4");const{output:s}=t,a=s===h.H_.Highlight;i.code.add(_.H`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),n.code.add(_.H`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),a?n.uniforms.add(new m.T("overlayHighlightTexture",((e,t)=>t.overlay?.getTexture(c.D.Highlight)))).code.add(_.H`uvec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(overlayHighlightTexture, 0));
uvec2 texelValueInner = texelFetch(overlayHighlightTexture, ivec2(texelCoordInner * texDim), 0).rg;
uvec2 texelValueOuter = texelFetch(overlayHighlightTexture, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
uvec2(0);
}`):(n.code.add(_.H`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),n.code.add(_.H`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`)),r&&((0,u.Pe)(n),(0,u.F1)(n),n.code.add(_.H`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function b(e,t){return e.identifier===l.o.Material&&(0,h.c1)(e.output)?e.occludedGround?t.overlay?.getTexture(c.D.Occluded):t.overlay?.getTexture(c.D.ColorNoRasterImage):e.identifier===l.o.Material&&e.output===h.H_.ObjectAndLayerIdColor?t.overlay?.getTexture(c.D.ObjectAndLayerIdColor):e.identifier===l.o.Highlight?t.overlay?.getTexture(c.D.Highlight):null}(n=i||(i={}))[n.Disabled=0]="Disabled",n[n.Enabled=1]="Enabled",n[n.EnabledWithWater=2]="EnabledWithWater",n[n.COUNT=3]="COUNT";const T=(0,o.Ue)();class D extends x.x{constructor(e){super(e,"vec4")}}},29736:function(e,t,r){r.d(t,{j:function(){return m}});var i=r(82846),n=r(21414),o=r(41629),s=r(85772),a=r(70973),c=r(32179),l=r(13663),h=r(48857);function u(e){e.fragment.uniforms.add(new l.z("cloudAbsorption",(e=>e.clouds.absorption)),new l.z("cloudCoverage",(e=>e.clouds.coverage))).code.add(h.H`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}var d=r(79729),g=r(87688),f=r(18489),p=r(5998),_=r(92217);class v extends _.x{constructor(e,t){super(e,"sampler2DArray",p.P.Bind,((r,i)=>r.bindTexture(e,t(i))))}}function m(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",x).code.add(h.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new l.z("radiusCurvatureCorrection",(({clouds:e})=>e.parallax.radiusCurvatureCorrection))).code.add(h.H`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(h.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,c.Pe)(t),(0,c.F1)(t);const r=(0,i.al)(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r);t.code.add(h.H`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${h.H.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${h.H.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${h.H.float(.2)} * pow(dirDotLight, ${h.H.float(10)}) * (1. - pow(sunsetTransition, ${h.H.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),e.include(u),t.uniforms.add(new d.U("readChannelsRG",(e=>e.clouds.readChannels===o.uz.RG)),new v("cubeMap",(e=>e.clouds.data?.cubeMap?.colorTexture))).code.add(h.H`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new g.d("anchorPoint",(e=>e.clouds.parallax.anchorPoint)),new g.d("anchorPointNew",(e=>e.clouds.parallaxNew.anchorPoint)),new f.C("rotationClouds",(e=>e.clouds.parallax.transform)),new f.C("rotationCloudsNew",(e=>e.clouds.parallaxNew.transform)),new l.z("cloudsOpacity",(e=>e.clouds.opacity)),new l.z("fadeFactor",(e=>e.clouds.fadeFactor)),new d.U("crossFade",(e=>e.clouds.fadeState===s.e.CROSS_FADE))).code.add(h.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const x=(n.sv.radius+a.$T)**2},29234:function(e,t,r){r.d(t,{T:function(){return o}});var i=r(5998),n=r(92217);class o extends n.x{constructor(e,t){super(e,"usampler2D",i.P.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},20472:function(e,t,r){r.d(t,{hr:function(){return h},jt:function(){return s},of:function(){return a},tY:function(){return l}});var i=r(70880),n=r(41044),o=r(19596);const s={required:[]},a={required:[n.H_.Depth]};class c extends i.Z{precompile(e){return!!this.acquireTechniques(e)}consumes(){return s}get usedMemory(){return 0}get renderOccludedFlags(){return o.yD.Occlude}get isDecoration(){return!1}get running(){return!1}modify(e,t){}get numGeometries(){return 0}get hasOccludees(){return!1}get hasEmissions(){return!1}forEachGeometry(e){}}class l extends c{}class h extends c{}},35285:function(e,t,r){r.d(t,{y$:function(){return F},d1:function(){return V},m7:function(){return L},yp:function(){return z}});var i=r(73440),n=(r(61432),r(61100)),o=r(90403),s=r(17155),a=(r(96711),r(83850),r(48023)),c=r(26821),l=r(26173),h=r(52054),u=r(69371),d=r(58257),g=r(29107),f=r(71389),p=r(51135);class _ extends g.A{constructor(e,t){super(e,t,new d.J(f.H,(()=>r.e(21538).then(r.bind(r,21538)))))}initializePipeline(){return(0,p.sm)({blending:p.vf,colorWrite:p.gf})}}var v=r(63003);class m extends g.A{constructor(e,t){super(e,t,new d.J(v.a,(()=>r.e(63920).then(r.bind(r,63920)))))}initializePipeline(){return(0,p.sm)({colorWrite:p.gf})}}var x=r(24728);class y extends g.A{constructor(e,t){super(e,t,new d.J(x.a,(()=>r.e(1096).then(r.bind(r,1096)))))}initializePipeline(){return(0,p.sm)({colorWrite:p.gf})}}var C=r(43295),w=r(74826);class b extends w.K{constructor(){super(...arguments),this.occludedFactor=C.En,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}var T=r(9945);class D extends g.A{constructor(e,t){super(e,t,new d.J(T.H,(()=>r.e(18678).then(r.bind(r,18678)))))}initializePipeline(){return(0,p.sm)({colorWrite:p.gf})}}var S=r(32420),R=r(75025),O=r(31214),E=r(32335),M=r(92761),I=r(65650),A=r(8158),P=r(35928);let F=class extends h.Z{constructor(){super(...arguments),this.produces=l.CM.HIGHLIGHTS,this.consumes={required:[l.CM.HIGHLIGHTS,"highlights"]},this._downsampleDrawParameters=new x.H,this._passParameters=new b,this._highlightBlurDrawParameters=new v.H,this._grid=new H}initialize(){this.addHandles([(0,o.YP)((()=>this._updateOptionsTexture()),(()=>{}),o.nn)])}destroy(){this._grid.coverage=(0,n.RY)(this._grid.coverage),this._grid.vao=(0,n.M2)(this._grid.vao),this._passParameters.highlightOptionsTexture=(0,n.RY)(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(null==this._passParameters.highlightOptionsTexture){const e=new P.X(16,2);e.internalFormat=I.VI.RGBA,e.samplingMode=I.cw.NEAREST,this._passParameters.highlightOptionsTexture=new A.x(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(function(e){const t=new Uint8Array(128);let r=0;for(const i of e){const e=4*r,n=4*r+64;++r;const{color:o}=i,s=i.haloColor??o;t[e+0]=o.r,t[e+1]=o.g,t[e+2]=o.b,t[e+3]=i.fillOpacity*o.a*255,t[n+0]=s.r,t[n+1]=s.g,t[n+2]=s.b,t[n+3]=i.haloOpacity*s.a*255}return t}(this.view.state.highlights)),this.requestRender(S.Xx.UPDATE)}precompile(){this.techniques.precompile(y),this.techniques.precompile(D),this.techniques.precompile(m),this.techniques.precompile(_)}render(e){const t=e.find((({name:e})=>e===l.CM.HIGHLIGHTS)),{techniques:r,bindParameters:i,_passParameters:n,renderingContext:o}=this;if(!i.decorations)return t;const s=r.get(y);if(!s.compiled)return this.requestRender(S.Xx.UPDATE),t;const a=e.find((({name:e})=>"highlights"===e)).getTexture();n.highlightTexture=a;const{camera:c}=i;return this._renderHighlightPostprocess(a,(()=>{this._gridUpdateResources(a);const e=this._gridComputeCoverage(s,a,i),{horizontalCellCount:t,verticalCellCount:r}=e;return n.horizontalCellCount=t,n.verticalCellCount=r,n.coverageTexture=e.coverage?.getTexture(),e}),(e=>{const t=e.verticalCellCount*e.horizontalCellCount;o.bindVAO(e.vao),o.drawElementsInstanced(I.MX.TRIANGLES,6,I.g.UNSIGNED_BYTE,0,t)}),(()=>{o.bindFramebuffer(t.fbo),o.setViewport4fv(c.fullViewport)})),n.highlightTexture=null,n.coverageTexture=null,t}_renderHighlightPostprocess(e,t,r,i){const{fboCache:n,techniques:o,bindParameters:s,_passParameters:a,renderingContext:l}=this,h=o.get(D),d=o.get(m),g=o.get(_);if(!g.compiled||!d.compiled||!h.compiled)return void this.requestRender(S.Xx.UPDATE);a.highlightTexture=e;const f=t(),{width:p,height:v}=e.descriptor;a.highlightTexture=e;const{camera:x}=s,{fullWidth:y,fullHeight:C,pixelRatio:w}=x,b=Math.ceil(y/w),T=Math.ceil(C/w),{_highlightBlurDrawParameters:R}=this,O=this.view.stage.renderView.renderer,{highlights:E}=s;for(let e=0;e<E.length;++e){const{name:t}=E[e];if(!O.hasHighlight(t))continue;a.highlightLevel=e,l.setClearColor(0,0,0,0);const o=n.acquire(p,v,"single highlight",u.qz.RG8UNORM);l.bindFramebuffer(o.fbo),l.setViewport(0,0,p,v),l.clear(I.Hf.COLOR),l.bindTechnique(h,s,a),r(f),R.blurInput=o.getTexture(),(0,c.t8)(R.blurSize,1/b,0);const _=n.acquire(b,T,"single highlight blur h",u.qz.RG8UNORM);l.unbindTexture(_.fbo?.colorTexture),l.bindFramebuffer(_.fbo),l.setViewport(0,0,b,T),l.clear(I.Hf.COLOR),l.bindTechnique(d,s,a,R),r(f),o.release(),(0,c.t8)(R.blurSize,0,1/T),a.highlightBlurTexture=_.getTexture(),i(),l.bindTechnique(g,s,a,R),r(f),_.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/x.g),t.verticalCellCount=Math.ceil(i/x.g),t.vao)return;const n=this.renderingContext,o=M.f.createIndex(n,I.l1.STATIC_DRAW,U);t.vao=new E.U(n,R.i,new Map([["geometry",O.gg]]),new Map([["geometry",M.f.createVertex(n,I.l1.STATIC_DRAW)]]),o)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,n=this._grid,o=t.descriptor,s=Math.ceil(o.width/x.g),a=Math.ceil(o.height/x.g);this._downsampleDrawParameters.input=t;const{highlights:c}=r;n.coverage?.release();const l=this.fboCache.acquire(s,a,"highlight coverage",c.length>V?u.qz.RG8UINT:u.qz.R8UINT);return n.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,s,a),i.screen.draw(),n}get test(){}};(0,i._)([(0,s.Cb)()],F.prototype,"produces",void 0),(0,i._)([(0,s.Cb)()],F.prototype,"consumes",void 0),F=(0,i._)([(0,a.j)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],F);class H{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}let N=0;function z(e){let t=0;for(const r of e){const{name:e}=r;t+=e.length;const{color:i,fillOpacity:n,haloColor:o,haloOpacity:s}=r;t+=i.r+i.g+i.b+i.a+n,t+=o?o.r+o.g+o.b+o.a+s:0}const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:n}=r;t+=e+i+n.r+n.g+n.b+n.a}return N+++(t>=0?0:1)}const U=new Uint8Array([0,1,2,2,1,3]);function L(e,t,r,i,n,o=0){const{highlights:s}=i,a=s.length>1?t.acquire(r.width,r.height,"highlight mix",s.length>V?u.qz.RG8UINT:u.qz.R8UINT):null,{gl:l}=e;if(a){const t=e.getBoundFramebufferObject();e.bindFramebuffer(a.fbo),l.clearBufferuiv(l.COLOR,0,[0,0,0,0]),e.bindFramebuffer(t)}const h=a?.getTexture();i.highlightMixTexture=h,(0,c.t8)(i.highlightMixOrigin,o,0),s.forEach(((t,s)=>{if(s>0){const t=A.x.TEXTURE_UNIT_FOR_UPDATES;e.bindTexture(h,t),e.setActiveTexture(t),l.copyTexSubImage2D(I.No.TEXTURE_2D,0,0,0,o,0,r.width,r.height),e.bindTexture(null,t)}e.clear(I.Hf.DEPTH),i.highlightLevel=s,n()})),i.highlightLevel=null,i.highlightMixTexture=null,a?.release()}const V=4},1812:function(e,t,r){r.d(t,{Z:function(){return d},p:function(){return g}});var i=r(10934),n=r(41788),o=r(85772),s=r(48636),a=r(29158),c=r(33610),l=r(948),h=r(81021),u=r(78142);class d{constructor(e,t){this.width=e,this.height=t}}class g{constructor(e){this.shadowMap=e,this.slot=l.r.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=c.M.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new s.Z,this._inverseViewport=(0,n.Ue)(),this._oldLighting=new u.cI,this._newLighting=new u.cI,this._fadedLighting=new u.cI,this._lighting=this._newLighting,this.ssr=new f,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=(0,n.Ue)(),this.highlightMixTexture=null,this.hudRenderStyle=a.U.Occluded,this.hudOccludedFragmentOpacity=1,this.snowCover=!1,this.clouds=new o.K,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,t,r,i){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=r,this._newLighting.set(e),i===h.B.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return null==this.highlightLevel?null:this.highlights[this.highlightLevel]}}class f{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,i.Ue)()}}},31214:function(e,t,r){r.d(t,{GN:function(){return h},QI:function(){return c},W:function(){return l},ap:function(){return a},gg:function(){return s}});var i=r(52061),n=r(65650),o=r(31442);const s=[],a=[new o.G(i.T.POSITION,3,n.g.FLOAT,0,12)],c=[new o.G(i.T.POSITION,2,n.g.FLOAT,0,8)],l=[new o.G(i.T.POSITION,2,n.g.FLOAT,0,12),new o.G(i.T.UV0,2,n.g.HALF_FLOAT,8,12)],h=[new o.G(i.T.POSITION,2,n.g.FLOAT,0,16),new o.G(i.T.UV0,2,n.g.FLOAT,8,16)]},86236:function(e,t,r){r.d(t,{h:function(){return c}});var i=r(96711),n=r(61100),o=r(61544);class s{constructor(e,t,r,i){this.material=e,this.output=t,this.techniques=r,this.textures=i}}var a=r(61719);class c{constructor(e,t,r,i){this._textures=e,this._techniques=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new o.r}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);if(!e.produces.get(t)?.(r))return null;let i=this._id2glMaterialRef.get(r,e.id);if(null==i){const t=e.createGLMaterial(new s(e,r,this._techniques,this._textures));i=new l(t),this._id2glMaterialRef.set(r,e.id,i)}return i.ref(),i.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||((0,n.M2)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&i.Z.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class l{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,a.hu)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}},89341:function(e,t,r){var i,n;r.d(t,{$:function(){return n},T:function(){return i}}),function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"}(i||(i={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITY=1]="VISIBILITY",e[e.GEOMETRY=2]="GEOMETRY",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.OCCLUDEE=16]="OCCLUDEE"}(n||(n={}))},73267:function(e,t,r){r.d(t,{C:function(){return l},V:function(){return c}});var i=r(32555),n=r(48636),o=r(41044),s=r(1812),a=r(19596);class c{constructor(e,t,r){this.rctx=e,this.techniques=r,this.lastFrameCamera=new n.Z,this.output=o.H_.Color,this.renderOccludedMask=l,this.time=(0,i.HA)(0),this.bind=new s.p(t),this.bind.alignPixelEnabled=!0}}const l=a.yD.Occlude|a.yD.OccludeAndTransparent|a.yD.OccludeAndTransparentStencil},14357:function(e,t,r){r.d(t,{z:function(){return l}});var i=r(67908),n=r(31865),o=r(10934),s=r(24910),a=r(69055),c=r(22365);class l{constructor(e,t={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=(0,o.Ue)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,i.D)(),this.layerViewUid=t.layerViewUid,this.graphicUid=t.graphicUid,this.castShadow=t.castShadow??!1,t.objectShaderTransformation&&this.objectShaderTransformationChanged(t.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){(0,n.JG)(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){null==e?this._shaderTransformation=null:(this._shaderTransformation??=(0,o.Ue)(),(0,n.Jp)(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,a.c)(),(0,s.t)((0,a.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,c.u1)(this.shaderTransformation)),this._boundingSphere):a.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(e){this.geometry.foreachHighlightOptions(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}},79262:function(e,t,r){r.d(t,{l:function(){return E},i:function(){return w}});var i=r(61432),n=r(99574),o=r(61100),s=r(30748),a=r(31865),c=r(10934),l=r(26821),h=r(41788),u=r(24910),d=r(82846),g=r(73749),f=r(27583),p=r(56172),_=r(69371),v=r(73440),m=r(17155),x=(r(96711),r(83850),r(48023)),y=r(48636);let C=class extends y.Z{constructor(){super(...arguments),this._projectionMatrix=(0,c.Ue)()}get projectionMatrix(){return this._projectionMatrix}};(0,v._)([(0,m.Cb)()],C.prototype,"_projectionMatrix",void 0),(0,v._)([(0,m.Cb)({readOnly:!0})],C.prototype,"projectionMatrix",null),C=(0,v._)([(0,x.j)("esri.views.3d.webgl-engine.lib.CascadeCamera")],C);var w,b,T=r(51440),D=r(61719),S=r(65650);(b=w||(w={}))[b.Highlight=0]="Highlight",b[b.ExcludeHighlight=1]="ExcludeHighlight";class R{constructor(){this.camera=new C,this.lightMat=(0,c.Ue)()}}class O{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class E{constructor(e,t){this._fbos=e,this._viewingMode=t,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new O,this._projectionView=(0,c.Ue)(),this._projectionViewInverse=(0,c.Ue)(),this._modelViewLight=(0,c.Ue)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,f.Ue)(),this._cascades=[new R,new R,new R,new R],this._lastOrigin=null,this._enabled=!1,this._maxTextureWidth=Math.min((0,i.Z)("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture(S.Lu)}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,g.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeMainBuffer(){this._handle=(0,o.RY)(this._handle)}disposeOffscreenBuffers(){this.disposeMainBuffer(),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=(0,n.uZ)(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let e=0;e<this._numCascades;++e)L[e]=this._cascades[e];return L.length=this._numCascades,L}start(e,t,r,i,n){(0,D.hu)(this.enabled);const{near:o,far:s}=function(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}(r);this._computeCascadeDistances(o,s,i),this._textureHeight=this._computeTextureHeight(e,n,i),this._setupMatrices(e,t);const{viewMatrix:a,projectionMatrix:c}=e;for(let e=0;e<this._numCascades;++e)this._constructCascade(e,c,a,t);this._lastOrigin=null,this.clear()}finish(){(0,D.hu)(this.enabled)}getShadowMapMatrices(e){if(!this._lastOrigin||!(0,u.q)(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,d.Ue)(),(0,u.c)(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){(0,a.Iu)(V,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)B[16*t+e]=V[e]}}return B}moveSnapshot(e){(0,D.hu)(this.enabled),this._snapshots[e]?.release(),this._snapshots[e]=this._handle,this._handle?.setName(e===w.Highlight?"shadow map highlight":"shadow map excluding highlight"),this._handle=null}copySnapshot(e){if(!this.enabled)return;const t=this._handle?.getTexture(S.Lu)?.descriptor;if(!t)return;this._snapshots[e]?.release();const r=e===w.Highlight?"shadow map highlight":"shadow map excluding highlight",i=this._acquireFBO(r);this._snapshots[e]=i;const n=this._handle?.fbo;if(!n||!i?.fbo)return void console.error("No FBO");const{rctx:o}=this._fbos;o.blitFramebuffer(n,i.fbo,S.Hf.DEPTH)}getSnapshot(e){return this.enabled?this._snapshots[e]?.getTexture(S.Lu):null}clear(){this._ensureFbo(),this.bindFbo(),this._fbos.rctx.clear(S.Hf.DEPTH)}_computeTextureHeight({pixelRatio:e,fullWidth:t,fullHeight:r},i,n){const o=Math.min(window.devicePixelRatio,i)/e,s=n?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality;return(0,T.nq)(Math.max(t,r)*o*s,this._maxTextureWidth/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._acquireFBO("shadow map"))}_acquireFBO(e){const t=this._fbos.acquire(this._textureWidth,this._textureHeight,e,_.qk.DEPTH16);return t.getTexture(S.Lu)?.setShadowFiltering(!0),t}_discardSnapshot(e){this._snapshots[e]=(0,o.RY)(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(e,t,r,i){const o=this._cascades[e],s=-this._cascadeDistances[e],c=-this._cascadeDistances[e+1],h=(t[10]*s+t[14])/Math.abs(t[11]*s+t[15]),d=(t[10]*c+t[14])/Math.abs(t[11]*c+t[15]);(0,D.hu)(h<d);for(let e=0;e<8;++e){(0,g.s)(I,e%4==0||e%4==3?-1:1,e%4==0||e%4==1?-1:1,e<4?h:d,1);const t=A[e];(0,g.t)(t,I,this._projectionViewInverse),t[0]/=t[3],t[1]/=t[3],t[2]/=t[3]}(0,u.u)(U,A[0]),o.camera.viewMatrix=(0,a.Iu)(M,this._modelViewLight,U);for(let e=0;e<8;++e)(0,u.t)(A[e],A[e],o.camera.viewMatrix);let f=A[0][2],p=A[0][2];for(let e=1;e<8;++e)f=Math.min(f,A[e][2]),p=Math.max(p,A[e][2]);f-=200,p+=200,o.camera.near=-p,o.camera.far=-f,function(e,t,r,i,o){const s=1/A[0][3],a=1/A[4][3];(0,D.hu)(s<a);let c=s+Math.sqrt(s*a);const h=Math.sin((0,n.ZF)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));c/=h,function(e,t,r,i,n,o,s,a){(0,l.t8)(j,0,0);for(let t=0;t<4;++t)(0,l.IH)(j,j,e[t]);(0,l.bA)(j,j,.25),(0,l.t8)(G,0,0);for(let t=4;t<8;++t)(0,l.IH)(G,G,e[t]);(0,l.bA)(G,G,.25),(0,l.t7)(W[0],e[4],e[5],.5),(0,l.t7)(W[1],e[5],e[6],.5),(0,l.t7)(W[2],e[6],e[7],.5),(0,l.t7)(W[3],e[7],e[4],.5);let c=0,h=(0,l.bI)(W[0],j);for(let e=1;e<4;++e){const t=(0,l.bI)(W[e],j);t<h&&(h=t,c=e)}(0,l.$X)(k,W[c],e[c+4]);const u=k[0];let d,g;k[0]=-k[1],k[1]=u,(0,l.$X)(q,G,j),(0,l.AK)(q,k)<0&&(0,l.tk)(k,k),(0,l.t7)(k,k,q,r),(0,l.Fv)(k,k),d=g=(0,l.AK)((0,l.$X)(Z,e[0],j),k);for(let t=1;t<8;++t){const r=(0,l.AK)((0,l.$X)(Z,e[t],j),k);r<d?d=r:r>g&&(g=r)}(0,l.JG)(i,j),(0,l.bA)(Z,k,d-t),(0,l.IH)(i,i,Z);let f=-1,p=1,_=0,v=0;for(let t=0;t<8;++t){(0,l.$X)(Y,e[t],i),(0,l.Fv)(Y,Y);const r=k[0]*Y[1]-k[1]*Y[0];r>0?r>f&&(f=r,_=t):r<p&&(p=r,v=t)}(0,D.T)(f>0,"leftArea"),(0,D.T)(p<0,"rightArea"),(0,l.bA)(K,k,d),(0,l.IH)(K,K,j),(0,l.bA)(X,k,g),(0,l.IH)(X,X,j),Q[0]=-k[1],Q[1]=k[0];const m=(0,D.ep)(i,e[v],X,(0,l.IH)(Z,X,Q),1,n),x=(0,D.ep)(i,e[_],X,Z,1,o),y=(0,D.ep)(i,e[_],K,(0,l.IH)(Z,K,Q),1,s),C=(0,D.ep)(i,e[v],K,Z,1,a);(0,D.T)(m,"rayRay"),(0,D.T)(x,"rayRay"),(0,D.T)(y,"rayRay"),(0,D.T)(C,"rayRay")}(A,c,h,P,F,H,N,z),function(e,t,r,i,n){(0,l.$X)(te,r,i),(0,l.bA)(te,te,.5),re[0]=te[0],re[1]=te[1],re[2]=0,re[3]=te[1],re[4]=-te[0],re[5]=0,re[6]=te[0]*te[0]+te[1]*te[1],re[7]=te[0]*te[1]-te[1]*te[0],re[8]=1,re[$(0,2)]=-(0,l.AK)(ee(re,0),e),re[$(1,2)]=-(0,l.AK)(ee(re,1),e);let o=(0,l.AK)(ee(re,0),r)+re[$(0,2)],s=(0,l.AK)(ee(re,1),r)+re[$(1,2)],a=(0,l.AK)(ee(re,0),i)+re[$(0,2)],c=(0,l.AK)(ee(re,1),i)+re[$(1,2)];o=-(o+a)/(s+c),re[$(0,0)]+=re[$(1,0)]*o,re[$(0,1)]+=re[$(1,1)]*o,re[$(0,2)]+=re[$(1,2)]*o,o=1/((0,l.AK)(ee(re,0),r)+re[$(0,2)]),s=1/((0,l.AK)(ee(re,1),r)+re[$(1,2)]),re[$(0,0)]*=o,re[$(0,1)]*=o,re[$(0,2)]*=o,re[$(1,0)]*=s,re[$(1,1)]*=s,re[$(1,2)]*=s,re[$(2,0)]=re[$(1,0)],re[$(2,1)]=re[$(1,1)],re[$(2,2)]=re[$(1,2)],re[$(1,2)]+=1,o=(0,l.AK)(ee(re,1),t)+re[$(1,2)],s=(0,l.AK)(ee(re,2),t)+re[$(2,2)],a=(0,l.AK)(ee(re,1),r)+re[$(1,2)],c=(0,l.AK)(ee(re,2),r)+re[$(2,2)],o=-.5*(o/s+a/c),re[$(1,0)]+=re[$(2,0)]*o,re[$(1,1)]+=re[$(2,1)]*o,re[$(1,2)]+=re[$(2,2)]*o,o=(0,l.AK)(ee(re,1),t)+re[$(1,2)],s=(0,l.AK)(ee(re,2),t)+re[$(2,2)],a=-s/o,re[$(1,0)]*=a,re[$(1,1)]*=a,re[$(1,2)]*=a,n[0]=re[0],n[1]=re[1],n[2]=0,n[3]=re[2],n[4]=re[3],n[5]=re[4],n[6]=0,n[7]=re[5],n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=re[6],n[13]=re[7],n[14]=0,n[15]=re[8]}(P,F,N,z,o.projectionMatrix),o.projectionMatrix[10]=2/(r-i),o.projectionMatrix[14]=-(r+i)/(r-i)}(r,i,f,p,o.camera),(0,a.Jp)(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const _=this._textureHeight;o.camera.viewport=[e*_,0,_,_]}_setupMatrices(e,t){(0,a.Jp)(this._projectionView,e.projectionMatrix,e.viewMatrix),(0,a.U_)(this._projectionViewInverse,this._projectionView);const r=this._viewingMode===p.JY.Global?e.eye:(0,u.i)(U,0,0,1);(0,a.zB)(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],r)}_computeCascadeDistances(e,t,r){const i=r?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,D.E6)(t/e,4)),i);const o=(t-e)/this._numCascades,s=(t/e)**(1/this._numCascades);let a=e,c=e;for(let e=0;e<this._numCascades+1;++e)this._cascadeDistances[e]=(0,n.t7)(a,c,this.settings.splitSchemeLambda),a*=s,c+=o}get test(){}}const M=(0,c.Ue)(),I=(0,f.Ue)(),A=[];for(let e=0;e<8;++e)A.push((0,f.Ue)());const P=(0,h.Ue)(),F=(0,h.Ue)(),H=(0,h.Ue)(),N=(0,h.Ue)(),z=(0,h.Ue)(),U=(0,d.Ue)(),L=[],V=(0,c.Ue)(),B=c.Wd.concat(c.Wd,c.Wd,c.Wd,c.Wd),j=(0,h.Ue)(),G=(0,h.Ue)(),W=[(0,h.Ue)(),(0,h.Ue)(),(0,h.Ue)(),(0,h.Ue)()],k=(0,h.Ue)(),q=(0,h.Ue)(),Z=(0,h.Ue)(),Y=(0,h.Ue)(),K=(0,h.Ue)(),X=(0,h.Ue)(),Q=(0,h.Ue)();function $(e,t){return 3*t+e}const J=(0,h.Ue)();function ee(e,t){return(0,l.t8)(J,e[t],e[t+3]),J}const te=(0,h.Ue)(),re=(0,s.Ue)()},81021:function(e,t,r){var i;r.d(t,{B:function(){return i}}),function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(i||(i={}))},32335:function(e,t,r){r.d(t,{U:function(){return n}});var i=r(57945);class n extends i.U{}},92761:function(e,t,r){r.d(t,{f:function(){return l}});var i=r(3480),n=(r(61432),r(96711)),o=r(59384),s=r(13e3),a=r(65650);const c=()=>n.Z.getLogger("esri.views.webgl.BufferObject");class l{static createIndex(e,t,r){return new l(e,a.w0.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new l(e,a.w0.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){return new l(e,a.w0.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=a.l1.STREAM_READ,r){const i=new l(e,a.w0.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=a.l1.STREAM_DRAW,r){return new l(e,a.w0.PIXEL_UNPACK_BUFFER,t,r)}static createTransformFeedback(e,t=a.l1.STATIC_DRAW,r){const i=new l(e,a.w0.TRANSFORM_FEEDBACK_BUFFER,t);return i.setSize(r),i}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(a._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,s.zu)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER){if(this._indexType===a.g.UNSIGNED_INT)return 4*this._size;if(this._indexType===a.g.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===a.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(a._g.BufferObject,this),this._context=null):this._glName&&c().warn("Leaked WebGL buffer object")}setSize(e,t=null){if(this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case a.g.UNSIGNED_SHORT:e*=2;break;case a.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER&&((0,o.lq)(e)?this._indexType=a.g.UNSIGNED_BYTE:(0,o.Uc)(e)?(t/=2,this._indexType=a.g.UNSIGNED_SHORT):(0,o.ZY)(e)&&(t/=4,this._indexType=a.g.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,s.zu)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r),(0,s.zu)(o),this._isVAOAware&&this._context.bindVAO(n)}getSubData(e,t=0,r,n){if(r<0||n<0)return;const o=function(e){return(0,i.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(o*((r??0)+(n??0))>e.byteLength)return;t+o*(n??0)>this.usedMemory&&c().warn("Potential problem getting subdata: requested data exceeds buffer size!");const s=this._context.gl;this.bufferType===a.w0.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,a.w0.TRANSFORM_FEEDBACK_BUFFER),s.getBufferSubData(a.w0.TRANSFORM_FEEDBACK_BUFFER,t,e,r,n),this._context.unbindBuffer(a.w0.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,a.w0.COPY_READ_BUFFER),s.getBufferSubData(a.w0.COPY_READ_BUFFER,t,e,r,n),this._context.unbindBuffer(a.w0.COPY_READ_BUFFER))}async getSubDataAsync(e,t=0,r,i){await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)}}},57945:function(e,t,r){r.d(t,{U:function(){return l}});var i=r(96711),n=r(61100),o=r(85881),s=r(65650),a=r(15483);const c=()=>i.Z.getLogger("esri.views.webgl.VertexArrayObject");let l=class{constructor(e,t,r,i,n=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=n,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}getByteLength(e){return this._buffers.get(e)?.usedMemory??0}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return Array.from(this._buffers.values()).reduce(((e,t)=>e+t.usedMemory),this._indexBuffer?.usedMemory??0+(this._buffers.size+(this._indexBuffer?1:0))*o.Qi)}get cachedMemory(){return this.usedMemory}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach((e=>e.dispose())),this._buffers.clear(),this._indexBuffer=(0,n.M2)(this._indexBuffer),this.disposeVAOOnly()):(this._glName||this._buffers.size>0)&&c().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(s._g.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(s._g.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||c().error("Vertex buffer dictionary is empty!");const i=this._context.gl;this._buffers.forEach(((e,r)=>{const i=t.get(r);i?(0,a.XP)(this._context,this._locations,e,i):c().error("Vertex element descriptor is empty!")})),null!=r&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}}}]);