import '../../../../common/EventDispatcher-a257053d.js';
import '../../../../common/constants-2d5769b7.js';
import '../../../../common/MathUtils-943fb228.js';
import '../../../../common/Vector3-df4ff999.js';
import '../../../../common/Vector2-323a1dbe.js';
import '../../../../common/BufferGeometry-473ac695.js';
import '../../../../common/Mesh-b513e325.js';
import '../../../../common/Object3D-2bcaf382.js';
import '../../../../common/Matrix3-f848f439.js';
import '../../../../common/Color-6fe630de.js';
import '../../../../common/Material-05ed5341.js';
import '../../../../common/Vector4-50f8032c.js';
import '../../../../common/Camera-11ffe826.js';
import { P as Pass } from '../../../../common/Pass-027607b7.js';
import '../../../../common/PlaneBufferGeometry-e9373b5e.js';

var RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	Pass.call( this );

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 0;

	this.clear = true;
	this.clearDepth = false;
	this.needsSwap = false;

};

RenderPass.prototype = Object.assign( Object.create( Pass.prototype ), {

	constructor: RenderPass,

	render: function ( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		var oldClearColor, oldClearAlpha, oldOverrideMaterial;

		if ( this.overrideMaterial !== undefined ) {

			oldOverrideMaterial = this.scene.overrideMaterial;

			this.scene.overrideMaterial = this.overrideMaterial;

		}

		if ( this.clearColor ) {

			oldClearColor = renderer.getClearColor().getHex();
			oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		if ( this.clearDepth ) {

			renderer.clearDepth();

		}

		renderer.setRenderTarget( this.renderToScreen ? null : readBuffer );

		// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
		if ( this.clear ) renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );
		renderer.render( this.scene, this.camera );

		if ( this.clearColor ) {

			renderer.setClearColor( oldClearColor, oldClearAlpha );

		}

		if ( this.overrideMaterial !== undefined ) {

			this.scene.overrideMaterial = oldOverrideMaterial;

		}

		renderer.autoClear = oldAutoClear;

	}

} );

export { RenderPass };
