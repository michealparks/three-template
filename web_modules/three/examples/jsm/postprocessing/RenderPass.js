import '../../../../common/EventDispatcher-a257053d.js';
import '../../../../common/constants-52370c26.js';
import '../../../../common/MathUtils-943fb228.js';
import '../../../../common/Vector3-df4ff999.js';
import '../../../../common/Vector2-323a1dbe.js';
import '../../../../common/Object3D-2bcaf382.js';
import '../../../../common/Matrix3-f848f439.js';
import '../../../../common/Box3-205ac6d5.js';
import '../../../../common/Vector4-50f8032c.js';
import '../../../../common/Color-6fe630de.js';
import '../../../../common/BufferGeometry-e3f10757.js';
import '../../../../common/Mesh-771e5968.js';
import '../../../../common/Camera-11ffe826.js';
import '../../../../common/OrthographicCamera-e71e1ad0.js';
import '../../../../common/Material-96681e9b.js';
import '../../../../common/PlaneBufferGeometry-dc0139e4.js';
import { P as Pass } from '../../../../common/Pass-2e3ff833.js';

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
