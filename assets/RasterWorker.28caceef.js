import{r as a,cE as n,h as l,gK as c}from"./index.b0b4c8ac.js";import{u as i,M as f,a as u,C as p,U as S}from"./pixelUtils.b2be1f82.js";import{S as d,U as h,m as O}from"./RasterSymbolizer.2544995e.js";import{M as x,k as y,V as N}from"./rasterProjectionHelper.9727c98f.js";import{m as J,p as b,u as g}from"./dataUtils.36ab571f.js";import{i as w}from"./utils.8e074f4b.js";class ${convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=J(t,e.type);return Promise.resolve(a(s)&&s.toJSON())}async decode(e){const t=await d(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(a(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=h.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(a(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=O(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=f(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(m=>m?new i(m):null),s=u(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=p(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=S(e.destDimension,e.gcsGrid),r=l(b(r,e.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await g(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new c({steps:e.datumTransformationSteps})),(e.includeGCSGrid||x(t.spatialReference,s.spatialReference,o))&&await y();const r=e.rasterTransform?w(e.rasterTransform):null;return N({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{$ as default};
