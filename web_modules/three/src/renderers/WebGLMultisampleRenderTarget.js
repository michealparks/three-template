import '../../../common/EventDispatcher-a257053d.js';
import '../../../common/constants-4ff93c6e.js';
import '../../../common/MathUtils-943fb228.js';
import '../../../common/Vector2-323a1dbe.js';
import '../../../common/Matrix3-f848f439.js';
import '../../../common/Vector4-50f8032c.js';
import '../../../common/Texture-074d7c97.js';
import { W as WebGLRenderTarget } from '../../../common/WebGLRenderTarget-24ea59a7.js';

function WebGLMultisampleRenderTarget( width, height, options ) {

	WebGLRenderTarget.call( this, width, height, options );

	this.samples = 4;

}

WebGLMultisampleRenderTarget.prototype = Object.assign( Object.create( WebGLRenderTarget.prototype ), {

	constructor: WebGLMultisampleRenderTarget,

	isWebGLMultisampleRenderTarget: true,

	copy: function ( source ) {

		WebGLRenderTarget.prototype.copy.call( this, source );

		this.samples = source.samples;

		return this;

	}

} );

export { WebGLMultisampleRenderTarget };
