import { E as EventDispatcher } from './EventDispatcher-a257053d.js';
import { U as UVMapping, a as MirroredRepeatWrapping, C as ClampToEdgeWrapping, b as RepeatWrapping, L as LinearFilter, c as LinearMipmapLinearFilter, R as RGBAFormat, d as UnsignedByteType, e as LinearEncoding } from './constants-2d5769b7.js';
import { M as MathUtils } from './MathUtils-943fb228.js';
import { V as Vector2 } from './Vector2-323a1dbe.js';
import { M as Matrix3 } from './Matrix3-f848f439.js';
import { V as Vector4 } from './Vector4-50f8032c.js';

let _canvas;

const ImageUtils = {

	getDataURL: function ( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement == 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

};

let textureId = 0;

function Texture( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding ) {

	Object.defineProperty( this, 'id', { value: textureId ++ } );

	this.uuid = MathUtils.generateUUID();

	this.name = '';

	this.image = image !== undefined ? image : Texture.DEFAULT_IMAGE;
	this.mipmaps = [];

	this.mapping = mapping !== undefined ? mapping : Texture.DEFAULT_MAPPING;

	this.wrapS = wrapS !== undefined ? wrapS : ClampToEdgeWrapping;
	this.wrapT = wrapT !== undefined ? wrapT : ClampToEdgeWrapping;

	this.magFilter = magFilter !== undefined ? magFilter : LinearFilter;
	this.minFilter = minFilter !== undefined ? minFilter : LinearMipmapLinearFilter;

	this.anisotropy = anisotropy !== undefined ? anisotropy : 1;

	this.format = format !== undefined ? format : RGBAFormat;
	this.internalFormat = null;
	this.type = type !== undefined ? type : UnsignedByteType;

	this.offset = new Vector2( 0, 0 );
	this.repeat = new Vector2( 1, 1 );
	this.center = new Vector2( 0, 0 );
	this.rotation = 0;

	this.matrixAutoUpdate = true;
	this.matrix = new Matrix3();

	this.generateMipmaps = true;
	this.premultiplyAlpha = false;
	this.flipY = true;
	this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

	// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
	//
	// Also changing the encoding after already used by a Material will not automatically make the Material
	// update. You need to explicitly call Material.needsUpdate to trigger it to recompile.
	this.encoding = encoding !== undefined ? encoding : LinearEncoding;

	this.version = 0;
	this.onUpdate = null;

}

Texture.DEFAULT_IMAGE = undefined;
Texture.DEFAULT_MAPPING = UVMapping;

Texture.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

	constructor: Texture,

	isTexture: true,

	updateMatrix: function () {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.name = source.name;

		this.image = source.image;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.encoding = source.encoding;

		return this;

	},

	toJSON: function ( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.5,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			mapping: this.mapping,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			type: this.type,
			encoding: this.encoding,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( this.image !== undefined ) {

			// TODO: Move to THREE.Image

			const image = this.image;

			if ( image.uuid === undefined ) {

				image.uuid = MathUtils.generateUUID(); // UGH

			}

			if ( ! isRootObject && meta.images[ image.uuid ] === undefined ) {

				let url;

				if ( Array.isArray( image ) ) {

					// process array of images e.g. CubeTexture

					url = [];

					for ( let i = 0, l = image.length; i < l; i ++ ) {

						url.push( ImageUtils.getDataURL( image[ i ] ) );

					}

				} else {

					// process single image

					url = ImageUtils.getDataURL( image );

				}

				meta.images[ image.uuid ] = {
					uuid: image.uuid,
					url: url
				};

			}

			output.image = image.uuid;

		}

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	},

	transformUv: function ( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

} );

Object.defineProperty( Texture.prototype, "needsUpdate", {

	set: function ( value ) {

		if ( value === true ) this.version ++;

	}

} );

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
function WebGLRenderTarget( width, height, options ) {

	this.width = width;
	this.height = height;

	this.scissor = new Vector4( 0, 0, width, height );
	this.scissorTest = false;

	this.viewport = new Vector4( 0, 0, width, height );

	options = options || {};

	this.texture = new Texture( undefined, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding );

	this.texture.image = {};
	this.texture.image.width = width;
	this.texture.image.height = height;

	this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
	this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

	this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
	this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;
	this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

}

WebGLRenderTarget.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

	constructor: WebGLRenderTarget,

	isWebGLRenderTarget: true,

	setSize: function ( width, height ) {

		if ( this.width !== width || this.height !== height ) {

			this.width = width;
			this.height = height;

			this.texture.image.width = width;
			this.texture.image.height = height;

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.width = source.width;
		this.height = source.height;

		this.viewport.copy( source.viewport );

		this.texture = source.texture.clone();

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;
		this.depthTexture = source.depthTexture;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );

export { Texture as T, WebGLRenderTarget as W };
