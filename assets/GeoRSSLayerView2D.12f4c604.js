import{R as l,S as h,d8 as g,cs as w,dc as d,dd as f,de as n,$ as u,a1 as S}from"./index.b0b4c8ac.js";import{f as b,u as V}from"./LayerView.87c11e3b.js";import{i as v}from"./GraphicContainer.3107437a.js";import{a as _}from"./BaseGraphicContainer.dde9d49a.js";import"./utils.ebb02a79.js";import"./Utils.b14523b9.js";import"./number.6e30c64a.js";import"./definitions.cd8c5521.js";import"./enums.c60b1dad.js";import"./Texture.f96436f7.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.bc1db1db.js";import"./alignmentUtils.84250e5d.js";import"./CIMSymbolHelper.799bd5e9.js";import"./Rect.a122c453.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.610c84e4.js";import"./projectionSupport.38043ebb.js";import"./json.8bd707cf.js";import"./VertexArrayObject.5882c7ee.js";import"./FeatureContainer.aa3ae2a6.js";import"./TileContainer.3c88b764.js";import"./WGLContainer.abb76d8a.js";import"./pixelUtils.b2be1f82.js";import"./ProgramTemplate.140a51e3.js";import"./StyleDefinition.51d53a2e.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./visualVariablesUtils.931668d6.js";import"./visualVariablesUtils.e93f7c76.js";import"./Matcher.8e679b44.js";import"./tileUtils.7f1d8877.js";import"./TileClipper.43a6f893.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.64582730.js";import"./quantizationUtils.fc2d393d.js";import"./ExpandedCIM.e082de6e.js";import"./schemaUtils.b895f7f1.js";import"./createSymbolSchema.fbfa2146.js";import"./MD5.7323a015.js";import"./util.a2e8b581.js";import"./ComputedAttributeStorage.6e3964d1.js";import"./centroid.c497ca7b.js";import"./vec3f32.ca7a14c1.js";let y=class extends b(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new w(i.features),s=t.drawingInfo,c=r?d.fromJSON(r):null,a=f(s.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new v(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([S("esri.views.2d.layers.GeoRSSLayerView2D")],y);const we=y;export{we as default};
