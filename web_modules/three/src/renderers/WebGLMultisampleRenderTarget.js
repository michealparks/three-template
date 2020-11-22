import '../../../common/EventDispatcher-a257053d.js';
import '../../../common/constants-2d5769b7.js';
import '../../../common/MathUtils-943fb228.js';
import '../../../common/Vector2-323a1dbe.js';
import '../../../common/Matrix3-f848f439.js';
import '../../../common/Vector4-50f8032c.js';
import { W as WebGLRenderTarget } from '../../../common/WebGLRenderTarget-b4f6286c.js';

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
