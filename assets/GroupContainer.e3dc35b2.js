import{b as c}from"./WGLContainer.fd68a117.js";import{L as d}from"./enums.c60b1dad.js";class h extends c{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(r){const s=this.createRenderParams(r),{context:e,painter:t,profiler:n}=s;this._prevFBO=e.getBoundFramebufferObject(),n.recordContainerStart(this.name);const i=this._getFbo(s),a=t.getRenderTarget();e.bindFramebuffer(i),t.setRenderTarget(i),e.setDepthWriteEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1);for(const o of this.children)o.beforeRender(r);for(const o of this.children)o.processRender(s);for(const o of this.children)o.afterRender(r);t.setRenderTarget(a),t.releaseFbo(i),e.bindFramebuffer(this._prevFBO),t.beforeRenderLayer(s,this._clippingInfos?255:0,this.computedOpacity),e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),t.blitTexture(e,i.colorTexture,d.NEAREST),t.compositeLayer(s,this.computedOpacity),n.recordContainerEnd()}createRenderParams(r){return{...super.createRenderParams(r),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(r){const{context:s,painter:e}=r,{width:t,height:n}=s.getViewport();return e.acquireFbo(t,n)}}export{h as r};
