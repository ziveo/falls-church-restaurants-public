import{di as u,cs as A,R as q,U as R,cE as k,bq as E,cx as W,r as _,t as F,dl as z,cu as C,aN as M,dv as N,dw as D,dx as G,dy as K,$ as p,a0 as m,a1 as j}from"./index.b0b4c8ac.js";import{b as V,g as B,d as H}from"./kmlUtils.7268b11f.js";import{v as J}from"./Bitmap.c8fb210f.js";import{t as O}from"./BitmapContainer.304ab473.js";import{f as Q,u as X}from"./LayerView.87c11e3b.js";import{i as b}from"./GraphicContainer.3107437a.js";import{a as f}from"./BaseGraphicContainer.dde9d49a.js";import"./utils.ebb02a79.js";import"./Utils.b14523b9.js";import"./number.6e30c64a.js";import"./definitions.cd8c5521.js";import"./enums.c60b1dad.js";import"./Texture.f96436f7.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.bc1db1db.js";import"./alignmentUtils.84250e5d.js";import"./WGLContainer.abb76d8a.js";import"./pixelUtils.b2be1f82.js";import"./VertexArrayObject.5882c7ee.js";import"./ProgramTemplate.140a51e3.js";import"./StyleDefinition.51d53a2e.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./CIMSymbolHelper.799bd5e9.js";import"./Rect.a122c453.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.610c84e4.js";import"./projectionSupport.38043ebb.js";import"./json.8bd707cf.js";import"./FeatureContainer.aa3ae2a6.js";import"./TileContainer.3c88b764.js";import"./visualVariablesUtils.931668d6.js";import"./visualVariablesUtils.e93f7c76.js";import"./Matcher.8e679b44.js";import"./tileUtils.7f1d8877.js";import"./TileClipper.43a6f893.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.64582730.js";import"./quantizationUtils.fc2d393d.js";import"./ExpandedCIM.e082de6e.js";import"./schemaUtils.b895f7f1.js";import"./createSymbolSchema.fbfa2146.js";import"./MD5.7323a015.js";import"./util.a2e8b581.js";import"./ComputedAttributeStorage.6e3964d1.js";import"./centroid.c497ca7b.js";import"./vec3f32.ca7a14c1.js";class L{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let n=class extends Q(X){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new O,this._kmlVisualData=new L,this.allVisiblePoints=new u,this.allVisiblePolylines=new u,this.allVisiblePolygons=new u,this.allVisibleMapImages=new A}async hitTest(i,t){var l,s,a;const e=this.layer;return[(l=this._pointsView)==null?void 0:l.hitTest(i),(s=this._polylinesView)==null?void 0:s.hitTest(i),(a=this._polygonsView)==null?void 0:a.hitTest(i)].flat().filter(Boolean).map(r=>(r.layer=e,r.sourceLayer=e,{type:"graphic",graphic:r,layer:e,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new f({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new b(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new f({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new b(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new f({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new b(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),q(()=>this.layer.visibleSublayers,i=>{for(const[t,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const t of i){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&R(i.href,{responseType:"image"}).then(({data:t})=>{let e=k.fromJSON(i.extent);E(e,this.view.spatialReference)&&(e=W(e,this.view.spatialReference));const l=new J(t,"standard");l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t.naturalWidth,l.rotation=i.rotation,this._mapImageContainer.addChild(l),this._bitmapIndex.set(i,l)})}async _getViewDependentUrl(i,t){const{viewFormat:e,viewBoundScale:l,httpQuery:s}=i;if(_(e)){if(F(t))throw new Error("Loading this network link requires a view state.");let a;if(await z(),_(l)&&l!==1){const h=new k(t.extent);h.expand(l),a=h}else a=t.extent;a=C(a,M.WGS84);const r=C(a,M.WebMercator),d=a.xmin,y=a.xmax,o=a.ymin,U=a.ymax,$=t.size[0]*t.pixelRatio,T=t.size[1]*t.pixelRatio,v=Math.max(r.width,r.height),S={"[bboxWest]":d.toString(),"[bboxEast]":y.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":U.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":v.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":v.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":$.toString(),"[vertPixels]":T.toString(),"[terrainEnabled]":"0","[clientVersion]":N,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},I=h=>{for(const x in h)for(const P in S)h[x]=h[x].replace(P,S[P])},c=D(e);I(c);let w={};_(s)&&(w=D(s),I(w));const g=G(i.href);return g.query={...g.query,...c,...w},`${g.path}?${K(c)}`}return i.href}async _fetchService(i){const t=new L;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!t.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,e){return this._fetchParsedKML(i,e).then(async l=>{for(const s of l.sublayers){t.allSublayers.set(s.id,s);const a=s.points?await V(s.points):[],r=s.polylines?await V(s.polylines):[],d=s.polygons?await V(s.polygons):[],y=s.mapImages||[];if(t.allPoints.push(...a.map(o=>({item:o,sublayerId:s.id}))),t.allPolylines.push(...r.map(o=>({item:o,sublayerId:s.id}))),t.allPolygons.push(...d.map(o=>({item:o,sublayerId:s.id}))),t.allMapImages.push(...y.map(o=>({item:o,sublayerId:s.id}))),s.networkLink){const o=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(o,t,e)}}})}_fetchParsedKML(i,t){return B(i,this.view.spatialReference,this.layer.refreshInterval,t).then(e=>H(e.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};p([m()],n.prototype,"_pointsView",void 0),p([m()],n.prototype,"_polylinesView",void 0),p([m()],n.prototype,"_polygonsView",void 0),p([m()],n.prototype,"updating",void 0),n=p([j("esri.views.2d.layers.KMLLayerView2D")],n);const Bi=n;export{Bi as default};
