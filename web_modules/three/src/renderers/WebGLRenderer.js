import { E as EventDispatcher } from '../../../common/EventDispatcher-a257053d.js';
import { n as NearestFilter, o as CubeUVReflectionMapping, B as BackSide, g as FrontSide, p as CubeReflectionMapping, l as RGBFormat, R as RGBAFormat, q as NoBlending, c as LinearMipmapLinearFilter, L as LinearFilter, E as EquirectangularReflectionMapping, r as EquirectangularRefractionMapping, t as CubeRefractionMapping, C as ClampToEdgeWrapping, u as NoToneMapping, G as GLSL3, v as CustomToneMapping, k as ACESFilmicToneMapping, w as CineonToneMapping, x as ReinhardToneMapping, y as LinearToneMapping, P as PCFShadowMap, z as PCFSoftShadowMap, V as VSMShadowMap, H as CubeUVRefractionMapping, I as AddOperation, J as MixOperation, f as MultiplyOperation, Q as LogLuvEncoding, W as GammaEncoding, X as RGBDEncoding, Y as RGBM16Encoding, Z as RGBM7Encoding, _ as RGBEEncoding, s as sRGBEncoding, e as LinearEncoding, $ as ObjectSpaceNormalMap, m as TangentSpaceNormalMap, D as DoubleSide, a0 as BasicDepthPacking, a1 as RGBADepthPacking, i as LessEqualDepth, A as AddEquation, a2 as SubtractEquation, a3 as ReverseSubtractEquation, a4 as MinEquation, a5 as MaxEquation, a6 as ZeroFactor, a7 as OneFactor, a8 as SrcColorFactor, h as SrcAlphaFactor, a9 as SrcAlphaSaturateFactor, aa as DstColorFactor, ab as DstAlphaFactor, ac as OneMinusSrcColorFactor, O as OneMinusSrcAlphaFactor, ad as OneMinusDstColorFactor, ae as OneMinusDstAlphaFactor, af as CustomBlending, ag as MultiplyBlending, ah as SubtractiveBlending, ai as AdditiveBlending, N as NormalBlending, aj as CullFaceNone, ak as CullFaceBack, al as CullFaceFront, am as NotEqualDepth, an as GreaterDepth, ao as GreaterEqualDepth, ap as EqualDepth, aq as LessDepth, ar as AlwaysDepth, as as NeverDepth, b as RepeatWrapping, a as MirroredRepeatWrapping, at as NearestMipmapNearestFilter, au as NearestMipmapLinearFilter, av as LinearMipmapNearestFilter, aw as FloatType, ax as UnsignedIntType, ay as UnsignedInt248Type, az as DepthFormat, aA as UnsignedShortType, aB as DepthStencilFormat, aC as HalfFloatType, d as UnsignedByteType, aD as UnsignedShort4444Type, aE as UnsignedShort5551Type, aF as UnsignedShort565Type, aG as ByteType, aH as ShortType, aI as IntType, aJ as AlphaFormat, aK as LuminanceFormat, aL as LuminanceAlphaFormat, aM as RedFormat, aN as RedIntegerFormat, aO as RGFormat, aP as RGIntegerFormat, aQ as RGBIntegerFormat, aR as RGBAIntegerFormat, aS as RGB_S3TC_DXT1_Format, aT as RGBA_S3TC_DXT1_Format, aU as RGBA_S3TC_DXT3_Format, aV as RGBA_S3TC_DXT5_Format, aW as RGB_PVRTC_4BPPV1_Format, aX as RGB_PVRTC_2BPPV1_Format, aY as RGBA_PVRTC_4BPPV1_Format, aZ as RGBA_PVRTC_2BPPV1_Format, a_ as RGB_ETC1_Format, a$ as RGB_ETC2_Format, b0 as RGBA_ETC2_EAC_Format, b1 as RGBA_ASTC_4x4_Format, b2 as RGBA_ASTC_5x4_Format, b3 as RGBA_ASTC_5x5_Format, b4 as RGBA_ASTC_6x5_Format, b5 as RGBA_ASTC_6x6_Format, b6 as RGBA_ASTC_8x5_Format, b7 as RGBA_ASTC_8x6_Format, b8 as RGBA_ASTC_8x8_Format, b9 as RGBA_ASTC_10x5_Format, ba as RGBA_ASTC_10x6_Format, bb as RGBA_ASTC_10x8_Format, bc as RGBA_ASTC_10x10_Format, bd as RGBA_ASTC_12x10_Format, be as RGBA_ASTC_12x12_Format, bf as SRGB8_ALPHA8_ASTC_4x4_Format, bg as SRGB8_ALPHA8_ASTC_5x4_Format, bh as SRGB8_ALPHA8_ASTC_5x5_Format, bi as SRGB8_ALPHA8_ASTC_6x5_Format, bj as SRGB8_ALPHA8_ASTC_6x6_Format, bk as SRGB8_ALPHA8_ASTC_8x5_Format, bl as SRGB8_ALPHA8_ASTC_8x6_Format, bm as SRGB8_ALPHA8_ASTC_8x8_Format, bn as SRGB8_ALPHA8_ASTC_10x5_Format, bo as SRGB8_ALPHA8_ASTC_10x6_Format, bp as SRGB8_ALPHA8_ASTC_10x8_Format, bq as SRGB8_ALPHA8_ASTC_10x10_Format, br as SRGB8_ALPHA8_ASTC_12x10_Format, bs as SRGB8_ALPHA8_ASTC_12x12_Format, bt as RGBA_BPTC_Format } from '../../../common/constants-2d5769b7.js';
import { M as MathUtils } from '../../../common/MathUtils-943fb228.js';
import { V as Vector3 } from '../../../common/Vector3-df4ff999.js';
import { V as Vector2 } from '../../../common/Vector2-323a1dbe.js';
import '../../../common/Box3-205ac6d5.js';
import { S as Sphere, B as BufferGeometry, a as arrayMax, U as Uint32BufferAttribute, b as Uint16BufferAttribute, c as BufferAttribute } from '../../../common/BufferGeometry-a26ddb44.js';
import { P as Plane, M as Mesh } from '../../../common/Mesh-25cbe38f.js';
import { O as Object3D, M as Matrix4 } from '../../../common/Object3D-2bcaf382.js';
import { M as Matrix3 } from '../../../common/Matrix3-f848f439.js';
import { C as Color } from '../../../common/Color-6fe630de.js';
import { M as Material } from '../../../common/Material-05ed5341.js';
import { V as Vector4 } from '../../../common/Vector4-50f8032c.js';
import '../../../common/Camera-11ffe826.js';
import { P as PlaneBufferGeometry } from '../../../common/PlaneBufferGeometry-4bdea935.js';
import { T as Texture, W as WebGLRenderTarget } from '../../../common/WebGLRenderTarget-b4f6286c.js';
import { m as mergeUniforms, S as ShaderMaterial, c as cloneUniforms, U as UniformsUtils } from '../../../common/ShaderMaterial-e2b49877.js';
import { P as PerspectiveCamera } from '../../../common/PerspectiveCamera-292336e9.js';
import { B as BoxBufferGeometry } from '../../../common/BoxBufferGeometry-81c5424f.js';

function DataTexture( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, encoding ) {

	Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

	this.image = { data: data || null, width: width || 1, height: height || 1 };

	this.magFilter = magFilter !== undefined ? magFilter : NearestFilter;
	this.minFilter = minFilter !== undefined ? minFilter : NearestFilter;

	this.generateMipmaps = false;
	this.flipY = false;
	this.unpackAlignment = 1;

	this.needsUpdate = true;

}

DataTexture.prototype = Object.create( Texture.prototype );
DataTexture.prototype.constructor = DataTexture;

DataTexture.prototype.isDataTexture = true;

const _sphere = /*@__PURE__*/ new Sphere();
const _vector = /*@__PURE__*/ new Vector3();

class Frustum {

	constructor( p0, p1, p2, p3, p4, p5 ) {

		this.planes = [

			( p0 !== undefined ) ? p0 : new Plane(),
			( p1 !== undefined ) ? p1 : new Plane(),
			( p2 !== undefined ) ? p2 : new Plane(),
			( p3 !== undefined ) ? p3 : new Plane(),
			( p4 !== undefined ) ? p4 : new Plane(),
			( p5 !== undefined ) ? p5 : new Plane()

		];

	}

	set( p0, p1, p2, p3, p4, p5 ) {

		const planes = this.planes;

		planes[ 0 ].copy( p0 );
		planes[ 1 ].copy( p1 );
		planes[ 2 ].copy( p2 );
		planes[ 3 ].copy( p3 );
		planes[ 4 ].copy( p4 );
		planes[ 5 ].copy( p5 );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( frustum ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			planes[ i ].copy( frustum.planes[ i ] );

		}

		return this;

	}

	setFromProjectionMatrix( m ) {

		const planes = this.planes;
		const me = m.elements;
		const me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		const me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		const me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		const me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();
		planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

		return this;

	}

	intersectsObject( object ) {

		const geometry = object.geometry;

		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

		_sphere.copy( geometry.boundingSphere ).applyMatrix4( object.matrixWorld );

		return this.intersectsSphere( _sphere );

	}

	intersectsSprite( sprite ) {

		_sphere.center.set( 0, 0, 0 );
		_sphere.radius = 0.7071067811865476;
		_sphere.applyMatrix4( sprite.matrixWorld );

		return this.intersectsSphere( _sphere );

	}

	intersectsSphere( sphere ) {

		const planes = this.planes;
		const center = sphere.center;
		const negRadius = - sphere.radius;

		for ( let i = 0; i < 6; i ++ ) {

			const distance = planes[ i ].distanceToPoint( center );

			if ( distance < negRadius ) {

				return false;

			}

		}

		return true;

	}

	intersectsBox( box ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			const plane = planes[ i ];

			// corner at max distance

			_vector.x = plane.normal.x > 0 ? box.max.x : box.min.x;
			_vector.y = plane.normal.y > 0 ? box.max.y : box.min.y;
			_vector.z = plane.normal.z > 0 ? box.max.z : box.min.z;

			if ( plane.distanceToPoint( _vector ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	containsPoint( point ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

				return false;

			}

		}

		return true;

	}

}

function WebGLAnimation() {

	let context = null;
	let isAnimating = false;
	let animationLoop = null;
	let requestId = null;

	function onAnimationFrame( time, frame ) {

		animationLoop( time, frame );

		requestId = context.requestAnimationFrame( onAnimationFrame );

	}

	return {

		start: function () {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			requestId = context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		},

		stop: function () {

			context.cancelAnimationFrame( requestId );

			isAnimating = false;

		},

		setAnimationLoop: function ( callback ) {

			animationLoop = callback;

		},

		setContext: function ( value ) {

			context = value;

		}

	};

}

function WebGLAttributes( gl, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	const buffers = new WeakMap();

	function createBuffer( attribute, bufferType ) {

		const array = attribute.array;
		const usage = attribute.usage;

		const buffer = gl.createBuffer();

		gl.bindBuffer( bufferType, buffer );
		gl.bufferData( bufferType, array, usage );

		attribute.onUploadCallback();

		let type = gl.FLOAT;

		if ( array instanceof Float32Array ) {

			type = gl.FLOAT;

		} else if ( array instanceof Float64Array ) {

			console.warn( 'THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.' );

		} else if ( array instanceof Uint16Array ) {

			type = gl.UNSIGNED_SHORT;

		} else if ( array instanceof Int16Array ) {

			type = gl.SHORT;

		} else if ( array instanceof Uint32Array ) {

			type = gl.UNSIGNED_INT;

		} else if ( array instanceof Int32Array ) {

			type = gl.INT;

		} else if ( array instanceof Int8Array ) {

			type = gl.BYTE;

		} else if ( array instanceof Uint8Array ) {

			type = gl.UNSIGNED_BYTE;

		}

		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version
		};

	}

	function updateBuffer( buffer, attribute, bufferType ) {

		const array = attribute.array;
		const updateRange = attribute.updateRange;

		gl.bindBuffer( bufferType, buffer );

		if ( updateRange.count === - 1 ) {

			// Not using update ranges

			gl.bufferSubData( bufferType, 0, array );

		} else {

			if ( isWebGL2 ) {

				gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
					array, updateRange.offset, updateRange.count );

			} else {

				gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
					array.subarray( updateRange.offset, updateRange.offset + updateRange.count ) );

			}

			updateRange.count = - 1; // reset range

		}

	}

	//

	function get( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		return buffers.get( attribute );

	}

	function remove( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data ) {

			gl.deleteBuffer( data.buffer );

			buffers.delete( attribute );

		}

	}

	function update( attribute, bufferType ) {

		if ( attribute.isGLBufferAttribute ) {

			var cached = buffers.get( attribute );

			if ( ! cached || cached.version < attribute.version ) {

				buffers.set( attribute, {
					buffer: attribute.buffer,
					type: attribute.type,
					bytesPerElement: attribute.elementSize,
					version: attribute.version
				} );

			}

			return;

		}

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data === undefined ) {

			buffers.set( attribute, createBuffer( attribute, bufferType ) );

		} else if ( data.version < attribute.version ) {

			updateBuffer( data.buffer, attribute, bufferType );

			data.version = attribute.version;

		}

	}

	return {

		get: get,
		remove: remove,
		update: update

	};

}

var alphamap_fragment = /* glsl */`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`;

var alphamap_pars_fragment = /* glsl */`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;

var alphatest_fragment = /* glsl */`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`;

var aomap_fragment = /* glsl */`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`;

var aomap_pars_fragment = /* glsl */`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;

var begin_vertex = /* glsl */`
vec3 transformed = vec3( position );
`;

var beginnormal_vertex = /* glsl */`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;

var bsdfs = /* glsl */`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {

	// See F_Schlick
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;

	return Fr * fresnel + F0;

}


// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + viewDir );

	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94
float D_Charlie(float roughness, float NoH) {
	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16
	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136
float V_Neubelt(float NoV, float NoL) {
	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}

vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {

	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;

	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );

	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );

}

#endif
`;

var bumpmap_pars_fragment = /* glsl */`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;

var clipping_planes_fragment = /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`;

var clipping_planes_pars_fragment = /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;

var clipping_planes_pars_vertex = /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;

var clipping_planes_vertex = /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;

var color_fragment = /* glsl */`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`;

var color_pars_fragment = /* glsl */`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`;

var color_pars_vertex = /* glsl */`
#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;

var color_vertex = /* glsl */`
#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor.xyz *= color.xyz;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`;

var common = /* glsl */`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`;

var cube_uv_reflection_fragment = /* glsl */`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );

		vec2 f = fract( uv );

		uv += 0.5 - f;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		if ( mipInt < cubeUV_maxMipLevel ) {

			uv.y += 2.0 * cubeUV_maxTileSize;

		}

		uv.y += filterInt * 2.0 * cubeUV_minTileSize;

		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );

		uv *= texelSize;

		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x += texelSize;

		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.y += texelSize;

		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x -= texelSize;

		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		vec3 tm = mix( tl, tr, f.x );

		vec3 bm = mix( bl, br, f.x );

		return mix( tm, bm, f.y );

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`;

var defaultnormal_vertex = /* glsl */`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`;

var displacementmap_pars_vertex = /* glsl */`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;

var displacementmap_vertex = /* glsl */`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`;

var emissivemap_fragment = /* glsl */`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;

var emissivemap_pars_fragment = /* glsl */`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;

var encodings_fragment = /* glsl */`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;

var encodings_pars_fragment = /* glsl */`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
	// return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	// NOTE: The implementation with min causes the shader to not compile on
	// a common Alcatel A502DL in Chrome 78/Android 8.1. Some research suggests 
	// that the chipset is Mediatek MT6739 w/ IMG PowerVR GE8100 GPU.
	// D = min( floor( D ) / 255.0, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`;

var envmap_fragment = /* glsl */`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifndef ENVMAP_TYPE_CUBE_UV

		envColor = envMapTexelToLinear( envColor );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;

var envmap_common_pars_fragment = /* glsl */`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;

var envmap_pars_fragment = /* glsl */`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;

var envmap_pars_vertex = /* glsl */`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;

var envmap_vertex = /* glsl */`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;

var fog_vertex = /* glsl */`
#ifdef USE_FOG

	fogDepth = - mvPosition.z;

#endif
`;

var fog_pars_vertex = /* glsl */`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`;

var fog_fragment = /* glsl */`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;

var fog_pars_fragment = /* glsl */`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;

var gradientmap_pars_fragment = /* glsl */`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return texture2D( gradientMap, coord ).rgb;

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`;

var lightmap_fragment = /* glsl */`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`;

var lightmap_pars_fragment = /* glsl */`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;

var lights_lambert_vertex = /* glsl */`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}
	#pragma unroll_loop_end

#endif
`;

var lights_pars_begin = /* glsl */`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {

	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

		}
	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`;

var envmap_physical_pars_fragment = /* glsl */`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

		float maxMIPLevelScalar = float( maxMIPLevel );

		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( -viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

		#else

			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`;

var lights_toon_fragment = /* glsl */`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;

var lights_toon_pars_fragment = /* glsl */`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`;

var lights_phong_fragment = /* glsl */`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;

var lights_phong_pars_fragment = /* glsl */`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`;

var lights_physical_fragment = /* glsl */`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.specularRoughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );

#ifdef REFLECTIVITY

	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );

#endif

#ifdef CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheen;

#endif
`;

var lights_physical_pars_fragment = /* glsl */`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;

#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifdef CLEARCOAT

		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = ccDotNL * directLight.color;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			ccIrradiance *= PI; // punctual light

		#endif

		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

	#else

		float clearcoatDHR = 0.0;

	#endif

	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif

	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef CLEARCOAT

		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

	#else

		float clearcoatDHR = 0.0;

	#endif

	float clearcoatInv = 1.0 - clearcoatDHR;

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;

var lights_fragment_begin = /* glsl */`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;

var lights_fragment_maps = /* glsl */`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );

	#ifdef CLEARCOAT

		clearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );

	#endif

#endif
`;

var lights_fragment_end = /* glsl */`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`;

var logdepthbuf_fragment = /* glsl */`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;

var logdepthbuf_pars_fragment = /* glsl */`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;

var logdepthbuf_pars_vertex = /* glsl */`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;

var logdepthbuf_vertex = /* glsl */`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`;

var map_fragment = /* glsl */`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`;

var map_pars_fragment = /* glsl */`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;

var map_particle_fragment = /* glsl */`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;

var map_particle_pars_fragment = /* glsl */`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;

var metalnessmap_fragment = /* glsl */`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;

var metalnessmap_pars_fragment = /* glsl */`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;

var morphnormal_vertex = /* glsl */`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

#endif
`;

var morphtarget_pars_vertex = /* glsl */`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

		uniform float morphTargetInfluences[ 8 ];

	#else

		uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`;

var morphtarget_vertex = /* glsl */`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];

	#ifndef USE_MORPHNORMALS

		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];

	#endif

#endif
`;

var normal_fragment_begin = /* glsl */`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`;

var normal_fragment_maps = /* glsl */`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`;

var normalmap_pars_fragment = /* glsl */`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Per-Pixel Tangent Space Normal Mapping
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );

		mat3 tsn = mat3( S, T, N );

		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		return normalize( tsn * mapN );

	}

#endif
`;

var clearcoat_normal_fragment_begin = /* glsl */`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`;

var clearcoat_normal_fragment_maps = /* glsl */`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`;

var clearcoat_pars_fragment = /* glsl */`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`;

var packing = /* glsl */`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`;

var premultiplied_alpha_fragment = /* glsl */`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;

var project_vertex = /* glsl */`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;

var dithering_fragment = /* glsl */`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;

var dithering_pars_fragment = /* glsl */`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;

var roughnessmap_fragment = /* glsl */`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;

var roughnessmap_pars_fragment = /* glsl */`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;

var shadowmap_pars_fragment = /* glsl */`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`;

var shadowmap_pars_vertex = /* glsl */`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;

var shadowmap_vertex = /* glsl */`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`;

var shadowmask_pars_fragment = /* glsl */`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;

var skinbase_vertex = /* glsl */`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;

var skinning_pars_vertex = /* glsl */`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`;

var skinning_vertex = /* glsl */`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;

var skinnormal_vertex = /* glsl */`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;

var specularmap_fragment = /* glsl */`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;

var specularmap_pars_fragment = /* glsl */`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;

var tonemapping_fragment = /* glsl */`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;

var tonemapping_pars_fragment = /* glsl */`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;

var transmissionmap_fragment = /* glsl */`
#ifdef USE_TRANSMISSIONMAP

	totalTransmission *= texture2D( transmissionMap, vUv ).r;

#endif
`;

var transmissionmap_pars_fragment = /* glsl */`
#ifdef USE_TRANSMISSIONMAP

	uniform sampler2D transmissionMap;

#endif
`;

var uv_pars_fragment = /* glsl */`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`;

var uv_pars_vertex = /* glsl */`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`;

var uv_vertex = /* glsl */`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;

var uv2_pars_fragment = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`;

var uv2_pars_vertex = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`;

var uv2_vertex = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`;

var worldpos_vertex = /* glsl */`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;

var background_frag = /* glsl */`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;

var background_vert = /* glsl */`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;

var cube_frag = /* glsl */`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;

var cube_vert = /* glsl */`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`;

var depth_frag = /* glsl */`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`;

var depth_vert = /* glsl */`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`;

var distanceRGBA_frag = /* glsl */`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;

var distanceRGBA_vert = /* glsl */`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`;

var equirect_frag = /* glsl */`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;

var equirect_vert = /* glsl */`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`;

var linedashed_frag = /* glsl */`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;

var linedashed_vert = /* glsl */`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;

var meshbasic_frag = /* glsl */`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

var meshbasic_vert = /* glsl */`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`;

var meshlambert_frag = /* glsl */`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;

var meshlambert_vert = /* glsl */`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;

var meshmatcap_frag = /* glsl */`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

var meshmatcap_vert = /* glsl */`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`;

var meshtoon_frag = /* glsl */`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

var meshtoon_vert = /* glsl */`
#define TOON

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;

var meshphong_frag = /* glsl */`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

var meshphong_vert = /* glsl */`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;

var meshphysical_frag = /* glsl */`
#define STANDARD

#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
	uniform float transmission;
#endif

#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif

#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	// this is a stub for the transmission model
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

var meshphysical_vert = /* glsl */`
#define STANDARD

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;

var normal_frag = /* glsl */`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`;

var normal_vert = /* glsl */`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`;

var points_frag = /* glsl */`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;

var points_vert = /* glsl */`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`;

var shadow_frag = /* glsl */`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;

var shadow_vert = /* glsl */`
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;

var sprite_frag = /* glsl */`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;

var sprite_vert = /* glsl */`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;

const ShaderChunk = {
	alphamap_fragment: alphamap_fragment,
	alphamap_pars_fragment: alphamap_pars_fragment,
	alphatest_fragment: alphatest_fragment,
	aomap_fragment: aomap_fragment,
	aomap_pars_fragment: aomap_pars_fragment,
	begin_vertex: begin_vertex,
	beginnormal_vertex: beginnormal_vertex,
	bsdfs: bsdfs,
	bumpmap_pars_fragment: bumpmap_pars_fragment,
	clipping_planes_fragment: clipping_planes_fragment,
	clipping_planes_pars_fragment: clipping_planes_pars_fragment,
	clipping_planes_pars_vertex: clipping_planes_pars_vertex,
	clipping_planes_vertex: clipping_planes_vertex,
	color_fragment: color_fragment,
	color_pars_fragment: color_pars_fragment,
	color_pars_vertex: color_pars_vertex,
	color_vertex: color_vertex,
	common: common,
	cube_uv_reflection_fragment: cube_uv_reflection_fragment,
	defaultnormal_vertex: defaultnormal_vertex,
	displacementmap_pars_vertex: displacementmap_pars_vertex,
	displacementmap_vertex: displacementmap_vertex,
	emissivemap_fragment: emissivemap_fragment,
	emissivemap_pars_fragment: emissivemap_pars_fragment,
	encodings_fragment: encodings_fragment,
	encodings_pars_fragment: encodings_pars_fragment,
	envmap_fragment: envmap_fragment,
	envmap_common_pars_fragment: envmap_common_pars_fragment,
	envmap_pars_fragment: envmap_pars_fragment,
	envmap_pars_vertex: envmap_pars_vertex,
	envmap_physical_pars_fragment: envmap_physical_pars_fragment,
	envmap_vertex: envmap_vertex,
	fog_vertex: fog_vertex,
	fog_pars_vertex: fog_pars_vertex,
	fog_fragment: fog_fragment,
	fog_pars_fragment: fog_pars_fragment,
	gradientmap_pars_fragment: gradientmap_pars_fragment,
	lightmap_fragment: lightmap_fragment,
	lightmap_pars_fragment: lightmap_pars_fragment,
	lights_lambert_vertex: lights_lambert_vertex,
	lights_pars_begin: lights_pars_begin,
	lights_toon_fragment: lights_toon_fragment,
	lights_toon_pars_fragment: lights_toon_pars_fragment,
	lights_phong_fragment: lights_phong_fragment,
	lights_phong_pars_fragment: lights_phong_pars_fragment,
	lights_physical_fragment: lights_physical_fragment,
	lights_physical_pars_fragment: lights_physical_pars_fragment,
	lights_fragment_begin: lights_fragment_begin,
	lights_fragment_maps: lights_fragment_maps,
	lights_fragment_end: lights_fragment_end,
	logdepthbuf_fragment: logdepthbuf_fragment,
	logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
	logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
	logdepthbuf_vertex: logdepthbuf_vertex,
	map_fragment: map_fragment,
	map_pars_fragment: map_pars_fragment,
	map_particle_fragment: map_particle_fragment,
	map_particle_pars_fragment: map_particle_pars_fragment,
	metalnessmap_fragment: metalnessmap_fragment,
	metalnessmap_pars_fragment: metalnessmap_pars_fragment,
	morphnormal_vertex: morphnormal_vertex,
	morphtarget_pars_vertex: morphtarget_pars_vertex,
	morphtarget_vertex: morphtarget_vertex,
	normal_fragment_begin: normal_fragment_begin,
	normal_fragment_maps: normal_fragment_maps,
	normalmap_pars_fragment: normalmap_pars_fragment,
	clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
	clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
	clearcoat_pars_fragment: clearcoat_pars_fragment,
	packing: packing,
	premultiplied_alpha_fragment: premultiplied_alpha_fragment,
	project_vertex: project_vertex,
	dithering_fragment: dithering_fragment,
	dithering_pars_fragment: dithering_pars_fragment,
	roughnessmap_fragment: roughnessmap_fragment,
	roughnessmap_pars_fragment: roughnessmap_pars_fragment,
	shadowmap_pars_fragment: shadowmap_pars_fragment,
	shadowmap_pars_vertex: shadowmap_pars_vertex,
	shadowmap_vertex: shadowmap_vertex,
	shadowmask_pars_fragment: shadowmask_pars_fragment,
	skinbase_vertex: skinbase_vertex,
	skinning_pars_vertex: skinning_pars_vertex,
	skinning_vertex: skinning_vertex,
	skinnormal_vertex: skinnormal_vertex,
	specularmap_fragment: specularmap_fragment,
	specularmap_pars_fragment: specularmap_pars_fragment,
	tonemapping_fragment: tonemapping_fragment,
	tonemapping_pars_fragment: tonemapping_pars_fragment,
	transmissionmap_fragment: transmissionmap_fragment,
	transmissionmap_pars_fragment: transmissionmap_pars_fragment,
	uv_pars_fragment: uv_pars_fragment,
	uv_pars_vertex: uv_pars_vertex,
	uv_vertex: uv_vertex,
	uv2_pars_fragment: uv2_pars_fragment,
	uv2_pars_vertex: uv2_pars_vertex,
	uv2_vertex: uv2_vertex,
	worldpos_vertex: worldpos_vertex,

	background_frag: background_frag,
	background_vert: background_vert,
	cube_frag: cube_frag,
	cube_vert: cube_vert,
	depth_frag: depth_frag,
	depth_vert: depth_vert,
	distanceRGBA_frag: distanceRGBA_frag,
	distanceRGBA_vert: distanceRGBA_vert,
	equirect_frag: equirect_frag,
	equirect_vert: equirect_vert,
	linedashed_frag: linedashed_frag,
	linedashed_vert: linedashed_vert,
	meshbasic_frag: meshbasic_frag,
	meshbasic_vert: meshbasic_vert,
	meshlambert_frag: meshlambert_frag,
	meshlambert_vert: meshlambert_vert,
	meshmatcap_frag: meshmatcap_frag,
	meshmatcap_vert: meshmatcap_vert,
	meshtoon_frag: meshtoon_frag,
	meshtoon_vert: meshtoon_vert,
	meshphong_frag: meshphong_frag,
	meshphong_vert: meshphong_vert,
	meshphysical_frag: meshphysical_frag,
	meshphysical_vert: meshphysical_vert,
	normal_frag: normal_frag,
	normal_vert: normal_vert,
	points_frag: points_frag,
	points_vert: points_vert,
	shadow_frag: shadow_frag,
	shadow_vert: shadow_vert,
	sprite_frag: sprite_frag,
	sprite_vert: sprite_vert
};

/**
 * Uniforms library for shared webgl shaders
 */

const UniformsLib = {

	common: {

		diffuse: { value: new Color( 0xeeeeee ) },
		opacity: { value: 1.0 },

		map: { value: null },
		uvTransform: { value: new Matrix3() },
		uv2Transform: { value: new Matrix3() },

		alphaMap: { value: null },

	},

	specularmap: {

		specularMap: { value: null },

	},

	envmap: {

		envMap: { value: null },
		flipEnvMap: { value: - 1 },
		reflectivity: { value: 1.0 },
		refractionRatio: { value: 0.98 },
		maxMipLevel: { value: 0 }

	},

	aomap: {

		aoMap: { value: null },
		aoMapIntensity: { value: 1 }

	},

	lightmap: {

		lightMap: { value: null },
		lightMapIntensity: { value: 1 }

	},

	emissivemap: {

		emissiveMap: { value: null }

	},

	bumpmap: {

		bumpMap: { value: null },
		bumpScale: { value: 1 }

	},

	normalmap: {

		normalMap: { value: null },
		normalScale: { value: new Vector2( 1, 1 ) }

	},

	displacementmap: {

		displacementMap: { value: null },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }

	},

	roughnessmap: {

		roughnessMap: { value: null }

	},

	metalnessmap: {

		metalnessMap: { value: null }

	},

	gradientmap: {

		gradientMap: { value: null }

	},

	fog: {

		fogDensity: { value: 0.00025 },
		fogNear: { value: 1 },
		fogFar: { value: 2000 },
		fogColor: { value: new Color( 0xffffff ) }

	},

	lights: {

		ambientLightColor: { value: [] },

		lightProbe: { value: [] },

		directionalLights: { value: [], properties: {
			direction: {},
			color: {}
		} },

		directionalLightShadows: { value: [], properties: {
			shadowBias: {},
			shadowNormalBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} },

		directionalShadowMap: { value: [] },
		directionalShadowMatrix: { value: [] },

		spotLights: { value: [], properties: {
			color: {},
			position: {},
			direction: {},
			distance: {},
			coneCos: {},
			penumbraCos: {},
			decay: {}
		} },

		spotLightShadows: { value: [], properties: {
			shadowBias: {},
			shadowNormalBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} },

		spotShadowMap: { value: [] },
		spotShadowMatrix: { value: [] },

		pointLights: { value: [], properties: {
			color: {},
			position: {},
			decay: {},
			distance: {}
		} },

		pointLightShadows: { value: [], properties: {
			shadowBias: {},
			shadowNormalBias: {},
			shadowRadius: {},
			shadowMapSize: {},
			shadowCameraNear: {},
			shadowCameraFar: {}
		} },

		pointShadowMap: { value: [] },
		pointShadowMatrix: { value: [] },

		hemisphereLights: { value: [], properties: {
			direction: {},
			skyColor: {},
			groundColor: {}
		} },

		// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
		rectAreaLights: { value: [], properties: {
			color: {},
			position: {},
			width: {},
			height: {}
		} },

		ltc_1: { value: null },
		ltc_2: { value: null }

	},

	points: {

		diffuse: { value: new Color( 0xeeeeee ) },
		opacity: { value: 1.0 },
		size: { value: 1.0 },
		scale: { value: 1.0 },
		map: { value: null },
		alphaMap: { value: null },
		uvTransform: { value: new Matrix3() }

	},

	sprite: {

		diffuse: { value: new Color( 0xeeeeee ) },
		opacity: { value: 1.0 },
		center: { value: new Vector2( 0.5, 0.5 ) },
		rotation: { value: 0.0 },
		map: { value: null },
		alphaMap: { value: null },
		uvTransform: { value: new Matrix3() }

	}

};

const ShaderLib = {

	basic: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.fog
		] ),

		vertexShader: ShaderChunk.meshbasic_vert,
		fragmentShader: ShaderChunk.meshbasic_frag

	},

	lambert: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: new Color( 0x000000 ) }
			}
		] ),

		vertexShader: ShaderChunk.meshlambert_vert,
		fragmentShader: ShaderChunk.meshlambert_frag

	},

	phong: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: new Color( 0x000000 ) },
				specular: { value: new Color( 0x111111 ) },
				shininess: { value: 30 }
			}
		] ),

		vertexShader: ShaderChunk.meshphong_vert,
		fragmentShader: ShaderChunk.meshphong_frag

	},

	standard: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.roughnessmap,
			UniformsLib.metalnessmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: new Color( 0x000000 ) },
				roughness: { value: 1.0 },
				metalness: { value: 0.0 },
				envMapIntensity: { value: 1 } // temporary
			}
		] ),

		vertexShader: ShaderChunk.meshphysical_vert,
		fragmentShader: ShaderChunk.meshphysical_frag

	},

	toon: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.gradientmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: new Color( 0x000000 ) }
			}
		] ),

		vertexShader: ShaderChunk.meshtoon_vert,
		fragmentShader: ShaderChunk.meshtoon_frag

	},

	matcap: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.fog,
			{
				matcap: { value: null }
			}
		] ),

		vertexShader: ShaderChunk.meshmatcap_vert,
		fragmentShader: ShaderChunk.meshmatcap_frag

	},

	points: {

		uniforms: mergeUniforms( [
			UniformsLib.points,
			UniformsLib.fog
		] ),

		vertexShader: ShaderChunk.points_vert,
		fragmentShader: ShaderChunk.points_frag

	},

	dashed: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		] ),

		vertexShader: ShaderChunk.linedashed_vert,
		fragmentShader: ShaderChunk.linedashed_frag

	},

	depth: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.displacementmap
		] ),

		vertexShader: ShaderChunk.depth_vert,
		fragmentShader: ShaderChunk.depth_frag

	},

	normal: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			{
				opacity: { value: 1.0 }
			}
		] ),

		vertexShader: ShaderChunk.normal_vert,
		fragmentShader: ShaderChunk.normal_frag

	},

	sprite: {

		uniforms: mergeUniforms( [
			UniformsLib.sprite,
			UniformsLib.fog
		] ),

		vertexShader: ShaderChunk.sprite_vert,
		fragmentShader: ShaderChunk.sprite_frag

	},

	background: {

		uniforms: {
			uvTransform: { value: new Matrix3() },
			t2D: { value: null },
		},

		vertexShader: ShaderChunk.background_vert,
		fragmentShader: ShaderChunk.background_frag

	},
	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	cube: {

		uniforms: mergeUniforms( [
			UniformsLib.envmap,
			{
				opacity: { value: 1.0 }
			}
		] ),

		vertexShader: ShaderChunk.cube_vert,
		fragmentShader: ShaderChunk.cube_frag

	},

	equirect: {

		uniforms: {
			tEquirect: { value: null },
		},

		vertexShader: ShaderChunk.equirect_vert,
		fragmentShader: ShaderChunk.equirect_frag

	},

	distanceRGBA: {

		uniforms: mergeUniforms( [
			UniformsLib.common,
			UniformsLib.displacementmap,
			{
				referencePosition: { value: new Vector3() },
				nearDistance: { value: 1 },
				farDistance: { value: 1000 }
			}
		] ),

		vertexShader: ShaderChunk.distanceRGBA_vert,
		fragmentShader: ShaderChunk.distanceRGBA_frag

	},

	shadow: {

		uniforms: mergeUniforms( [
			UniformsLib.lights,
			UniformsLib.fog,
			{
				color: { value: new Color( 0x00000 ) },
				opacity: { value: 1.0 }
			},
		] ),

		vertexShader: ShaderChunk.shadow_vert,
		fragmentShader: ShaderChunk.shadow_frag

	}

};

ShaderLib.physical = {

	uniforms: mergeUniforms( [
		ShaderLib.standard.uniforms,
		{
			clearcoat: { value: 0 },
			clearcoatMap: { value: null },
			clearcoatRoughness: { value: 0 },
			clearcoatRoughnessMap: { value: null },
			clearcoatNormalScale: { value: new Vector2( 1, 1 ) },
			clearcoatNormalMap: { value: null },
			sheen: { value: new Color( 0x000000 ) },
			transmission: { value: 0 },
			transmissionMap: { value: null },
		}
	] ),

	vertexShader: ShaderChunk.meshphysical_vert,
	fragmentShader: ShaderChunk.meshphysical_frag

};

function WebGLBackground( renderer, cubemaps, state, objects, premultipliedAlpha ) {

	const clearColor = new Color( 0x000000 );
	let clearAlpha = 0;

	let planeMesh;
	let boxMesh;

	let currentBackground = null;
	let currentBackgroundVersion = 0;
	let currentTonemapping = null;

	function render( renderList, scene, camera, forceClear ) {

		let background = scene.isScene === true ? scene.background : null;

		if ( background && background.isTexture ) {

			background = cubemaps.get( background );

		}

		// Ignore background in AR
		// TODO: Reconsider this.

		const xr = renderer.xr;
		const session = xr.getSession && xr.getSession();

		if ( session && session.environmentBlendMode === 'additive' ) {

			background = null;

		}

		if ( background === null ) {

			setClear( clearColor, clearAlpha );

		} else if ( background && background.isColor ) {

			setClear( background, 1 );
			forceClear = true;

		}

		if ( renderer.autoClear || forceClear ) {

			renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );

		}

		if ( background && ( background.isCubeTexture || background.isWebGLCubeRenderTarget || background.mapping === CubeUVReflectionMapping ) ) {

			if ( boxMesh === undefined ) {

				boxMesh = new Mesh(
					new BoxBufferGeometry( 1, 1, 1 ),
					new ShaderMaterial( {
						name: 'BackgroundCubeMaterial',
						uniforms: cloneUniforms( ShaderLib.cube.uniforms ),
						vertexShader: ShaderLib.cube.vertexShader,
						fragmentShader: ShaderLib.cube.fragmentShader,
						side: BackSide,
						depthTest: false,
						depthWrite: false,
						fog: false
					} )
				);

				boxMesh.geometry.deleteAttribute( 'normal' );
				boxMesh.geometry.deleteAttribute( 'uv' );

				boxMesh.onBeforeRender = function ( renderer, scene, camera ) {

					this.matrixWorld.copyPosition( camera.matrixWorld );

				};

				// enable code injection for non-built-in material
				Object.defineProperty( boxMesh.material, 'envMap', {

					get: function () {

						return this.uniforms.envMap.value;

					}

				} );

				objects.update( boxMesh );

			}

			if ( background.isWebGLCubeRenderTarget ) {

				// TODO Deprecate

				background = background.texture;

			}

			boxMesh.material.uniforms.envMap.value = background;
			boxMesh.material.uniforms.flipEnvMap.value = ( background.isCubeTexture && background._needsFlipEnvMap ) ? - 1 : 1;

			if ( currentBackground !== background ||
				currentBackgroundVersion !== background.version ||
				currentTonemapping !== renderer.toneMapping ) {

				boxMesh.material.needsUpdate = true;

				currentBackground = background;
				currentBackgroundVersion = background.version;
				currentTonemapping = renderer.toneMapping;

			}

			// push to the pre-sorted opaque render list
			renderList.unshift( boxMesh, boxMesh.geometry, boxMesh.material, 0, 0, null );

		} else if ( background && background.isTexture ) {

			if ( planeMesh === undefined ) {

				planeMesh = new Mesh(
					new PlaneBufferGeometry( 2, 2 ),
					new ShaderMaterial( {
						name: 'BackgroundMaterial',
						uniforms: cloneUniforms( ShaderLib.background.uniforms ),
						vertexShader: ShaderLib.background.vertexShader,
						fragmentShader: ShaderLib.background.fragmentShader,
						side: FrontSide,
						depthTest: false,
						depthWrite: false,
						fog: false
					} )
				);

				planeMesh.geometry.deleteAttribute( 'normal' );

				// enable code injection for non-built-in material
				Object.defineProperty( planeMesh.material, 'map', {

					get: function () {

						return this.uniforms.t2D.value;

					}

				} );

				objects.update( planeMesh );

			}

			planeMesh.material.uniforms.t2D.value = background;

			if ( background.matrixAutoUpdate === true ) {

				background.updateMatrix();

			}

			planeMesh.material.uniforms.uvTransform.value.copy( background.matrix );

			if ( currentBackground !== background ||
				currentBackgroundVersion !== background.version ||
				currentTonemapping !== renderer.toneMapping ) {

				planeMesh.material.needsUpdate = true;

				currentBackground = background;
				currentBackgroundVersion = background.version;
				currentTonemapping = renderer.toneMapping;

			}


			// push to the pre-sorted opaque render list
			renderList.unshift( planeMesh, planeMesh.geometry, planeMesh.material, 0, 0, null );

		}

	}

	function setClear( color, alpha ) {

		state.buffers.color.setClear( color.r, color.g, color.b, alpha, premultipliedAlpha );

	}

	return {

		getClearColor: function () {

			return clearColor;

		},
		setClearColor: function ( color, alpha ) {

			clearColor.set( color );
			clearAlpha = alpha !== undefined ? alpha : 1;
			setClear( clearColor, clearAlpha );

		},
		getClearAlpha: function () {

			return clearAlpha;

		},
		setClearAlpha: function ( alpha ) {

			clearAlpha = alpha;
			setClear( clearColor, clearAlpha );

		},
		render: render

	};

}

function WebGLBindingStates( gl, extensions, attributes, capabilities ) {

	const maxVertexAttributes = gl.getParameter( gl.MAX_VERTEX_ATTRIBS );

	const extension = capabilities.isWebGL2 ? null : extensions.get( 'OES_vertex_array_object' );
	const vaoAvailable = capabilities.isWebGL2 || extension !== null;

	const bindingStates = {};

	const defaultState = createBindingState( null );
	let currentState = defaultState;

	function setup( object, material, program, geometry, index ) {

		let updateBuffers = false;

		if ( vaoAvailable ) {

			const state = getBindingState( geometry, program, material );

			if ( currentState !== state ) {

				currentState = state;
				bindVertexArrayObject( currentState.object );

			}

			updateBuffers = needsUpdate( geometry, index );

			if ( updateBuffers ) saveCache( geometry, index );

		} else {

			const wireframe = ( material.wireframe === true );

			if ( currentState.geometry !== geometry.id ||
				currentState.program !== program.id ||
				currentState.wireframe !== wireframe ) {

				currentState.geometry = geometry.id;
				currentState.program = program.id;
				currentState.wireframe = wireframe;

				updateBuffers = true;

			}

		}

		if ( object.isInstancedMesh === true ) {

			updateBuffers = true;

		}

		if ( index !== null ) {

			attributes.update( index, gl.ELEMENT_ARRAY_BUFFER );

		}

		if ( updateBuffers ) {

			setupVertexAttributes( object, material, program, geometry );

			if ( index !== null ) {

				gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, attributes.get( index ).buffer );

			}

		}

	}

	function createVertexArrayObject() {

		if ( capabilities.isWebGL2 ) return gl.createVertexArray();

		return extension.createVertexArrayOES();

	}

	function bindVertexArrayObject( vao ) {

		if ( capabilities.isWebGL2 ) return gl.bindVertexArray( vao );

		return extension.bindVertexArrayOES( vao );

	}

	function deleteVertexArrayObject( vao ) {

		if ( capabilities.isWebGL2 ) return gl.deleteVertexArray( vao );

		return extension.deleteVertexArrayOES( vao );

	}

	function getBindingState( geometry, program, material ) {

		const wireframe = ( material.wireframe === true );

		let programMap = bindingStates[ geometry.id ];

		if ( programMap === undefined ) {

			programMap = {};
			bindingStates[ geometry.id ] = programMap;

		}

		let stateMap = programMap[ program.id ];

		if ( stateMap === undefined ) {

			stateMap = {};
			programMap[ program.id ] = stateMap;

		}

		let state = stateMap[ wireframe ];

		if ( state === undefined ) {

			state = createBindingState( createVertexArrayObject() );
			stateMap[ wireframe ] = state;

		}

		return state;

	}

	function createBindingState( vao ) {

		const newAttributes = [];
		const enabledAttributes = [];
		const attributeDivisors = [];

		for ( let i = 0; i < maxVertexAttributes; i ++ ) {

			newAttributes[ i ] = 0;
			enabledAttributes[ i ] = 0;
			attributeDivisors[ i ] = 0;

		}

		return {

			// for backward compatibility on non-VAO support browser
			geometry: null,
			program: null,
			wireframe: false,

			newAttributes: newAttributes,
			enabledAttributes: enabledAttributes,
			attributeDivisors: attributeDivisors,
			object: vao,
			attributes: {},
			index: null

		};

	}

	function needsUpdate( geometry, index ) {

		const cachedAttributes = currentState.attributes;
		const geometryAttributes = geometry.attributes;

		if ( Object.keys( cachedAttributes ).length !== Object.keys( geometryAttributes ).length ) return true;

		for ( const key in geometryAttributes ) {

			const cachedAttribute = cachedAttributes[ key ];
			const geometryAttribute = geometryAttributes[ key ];

			if ( cachedAttribute === undefined ) return true;

			if ( cachedAttribute.attribute !== geometryAttribute ) return true;

			if ( cachedAttribute.data !== geometryAttribute.data ) return true;

		}

		if ( currentState.index !== index ) return true;

		return false;

	}

	function saveCache( geometry, index ) {

		const cache = {};
		const attributes = geometry.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			const data = {};
			data.attribute = attribute;

			if ( attribute.data ) {

				data.data = attribute.data;

			}

			cache[ key ] = data;

		}

		currentState.attributes = cache;

		currentState.index = index;

	}

	function initAttributes() {

		const newAttributes = currentState.newAttributes;

		for ( let i = 0, il = newAttributes.length; i < il; i ++ ) {

			newAttributes[ i ] = 0;

		}

	}

	function enableAttribute( attribute ) {

		enableAttributeAndDivisor( attribute, 0 );

	}

	function enableAttributeAndDivisor( attribute, meshPerAttribute ) {

		const newAttributes = currentState.newAttributes;
		const enabledAttributes = currentState.enabledAttributes;
		const attributeDivisors = currentState.attributeDivisors;

		newAttributes[ attribute ] = 1;

		if ( enabledAttributes[ attribute ] === 0 ) {

			gl.enableVertexAttribArray( attribute );
			enabledAttributes[ attribute ] = 1;

		}

		if ( attributeDivisors[ attribute ] !== meshPerAttribute ) {

			const extension = capabilities.isWebGL2 ? gl : extensions.get( 'ANGLE_instanced_arrays' );

			extension[ capabilities.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE' ]( attribute, meshPerAttribute );
			attributeDivisors[ attribute ] = meshPerAttribute;

		}

	}

	function disableUnusedAttributes() {

		const newAttributes = currentState.newAttributes;
		const enabledAttributes = currentState.enabledAttributes;

		for ( let i = 0, il = enabledAttributes.length; i < il; i ++ ) {

			if ( enabledAttributes[ i ] !== newAttributes[ i ] ) {

				gl.disableVertexAttribArray( i );
				enabledAttributes[ i ] = 0;

			}

		}

	}

	function vertexAttribPointer( index, size, type, normalized, stride, offset ) {

		if ( capabilities.isWebGL2 === true && ( type === gl.INT || type === gl.UNSIGNED_INT ) ) {

			gl.vertexAttribIPointer( index, size, type, stride, offset );

		} else {

			gl.vertexAttribPointer( index, size, type, normalized, stride, offset );

		}

	}

	function setupVertexAttributes( object, material, program, geometry ) {

		if ( capabilities.isWebGL2 === false && ( object.isInstancedMesh || geometry.isInstancedBufferGeometry ) ) {

			if ( extensions.get( 'ANGLE_instanced_arrays' ) === null ) return;

		}

		initAttributes();

		const geometryAttributes = geometry.attributes;

		const programAttributes = program.getAttributes();

		const materialDefaultAttributeValues = material.defaultAttributeValues;

		for ( const name in programAttributes ) {

			const programAttribute = programAttributes[ name ];

			if ( programAttribute >= 0 ) {

				const geometryAttribute = geometryAttributes[ name ];

				if ( geometryAttribute !== undefined ) {

					const normalized = geometryAttribute.normalized;
					const size = geometryAttribute.itemSize;

					const attribute = attributes.get( geometryAttribute );

					// TODO Attribute may not be available on context restore

					if ( attribute === undefined ) continue;

					const buffer = attribute.buffer;
					const type = attribute.type;
					const bytesPerElement = attribute.bytesPerElement;

					if ( geometryAttribute.isInterleavedBufferAttribute ) {

						const data = geometryAttribute.data;
						const stride = data.stride;
						const offset = geometryAttribute.offset;

						if ( data && data.isInstancedInterleavedBuffer ) {

							enableAttributeAndDivisor( programAttribute, data.meshPerAttribute );

							if ( geometry._maxInstanceCount === undefined ) {

								geometry._maxInstanceCount = data.meshPerAttribute * data.count;

							}

						} else {

							enableAttribute( programAttribute );

						}

						gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
						vertexAttribPointer( programAttribute, size, type, normalized, stride * bytesPerElement, offset * bytesPerElement );

					} else {

						if ( geometryAttribute.isInstancedBufferAttribute ) {

							enableAttributeAndDivisor( programAttribute, geometryAttribute.meshPerAttribute );

							if ( geometry._maxInstanceCount === undefined ) {

								geometry._maxInstanceCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;

							}

						} else {

							enableAttribute( programAttribute );

						}

						gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
						vertexAttribPointer( programAttribute, size, type, normalized, 0, 0 );

					}

				} else if ( name === 'instanceMatrix' ) {

					const attribute = attributes.get( object.instanceMatrix );

					// TODO Attribute may not be available on context restore

					if ( attribute === undefined ) continue;

					const buffer = attribute.buffer;
					const type = attribute.type;

					enableAttributeAndDivisor( programAttribute + 0, 1 );
					enableAttributeAndDivisor( programAttribute + 1, 1 );
					enableAttributeAndDivisor( programAttribute + 2, 1 );
					enableAttributeAndDivisor( programAttribute + 3, 1 );

					gl.bindBuffer( gl.ARRAY_BUFFER, buffer );

					gl.vertexAttribPointer( programAttribute + 0, 4, type, false, 64, 0 );
					gl.vertexAttribPointer( programAttribute + 1, 4, type, false, 64, 16 );
					gl.vertexAttribPointer( programAttribute + 2, 4, type, false, 64, 32 );
					gl.vertexAttribPointer( programAttribute + 3, 4, type, false, 64, 48 );

				} else if ( name === 'instanceColor' ) {

					const attribute = attributes.get( object.instanceColor );

					// TODO Attribute may not be available on context restore

					if ( attribute === undefined ) continue;

					const buffer = attribute.buffer;
					const type = attribute.type;

					enableAttributeAndDivisor( programAttribute, 1 );

					gl.bindBuffer( gl.ARRAY_BUFFER, buffer );

					gl.vertexAttribPointer( programAttribute, 3, type, false, 12, 0 );

				} else if ( materialDefaultAttributeValues !== undefined ) {

					const value = materialDefaultAttributeValues[ name ];

					if ( value !== undefined ) {

						switch ( value.length ) {

							case 2:
								gl.vertexAttrib2fv( programAttribute, value );
								break;

							case 3:
								gl.vertexAttrib3fv( programAttribute, value );
								break;

							case 4:
								gl.vertexAttrib4fv( programAttribute, value );
								break;

							default:
								gl.vertexAttrib1fv( programAttribute, value );

						}

					}

				}

			}

		}

		disableUnusedAttributes();

	}

	function dispose() {

		reset();

		for ( const geometryId in bindingStates ) {

			const programMap = bindingStates[ geometryId ];

			for ( const programId in programMap ) {

				const stateMap = programMap[ programId ];

				for ( const wireframe in stateMap ) {

					deleteVertexArrayObject( stateMap[ wireframe ].object );

					delete stateMap[ wireframe ];

				}

				delete programMap[ programId ];

			}

			delete bindingStates[ geometryId ];

		}

	}

	function releaseStatesOfGeometry( geometry ) {

		if ( bindingStates[ geometry.id ] === undefined ) return;

		const programMap = bindingStates[ geometry.id ];

		for ( const programId in programMap ) {

			const stateMap = programMap[ programId ];

			for ( const wireframe in stateMap ) {

				deleteVertexArrayObject( stateMap[ wireframe ].object );

				delete stateMap[ wireframe ];

			}

			delete programMap[ programId ];

		}

		delete bindingStates[ geometry.id ];

	}

	function releaseStatesOfProgram( program ) {

		for ( const geometryId in bindingStates ) {

			const programMap = bindingStates[ geometryId ];

			if ( programMap[ program.id ] === undefined ) continue;

			const stateMap = programMap[ program.id ];

			for ( const wireframe in stateMap ) {

				deleteVertexArrayObject( stateMap[ wireframe ].object );

				delete stateMap[ wireframe ];

			}

			delete programMap[ program.id ];

		}

	}

	function reset() {

		resetDefaultState();

		if ( currentState === defaultState ) return;

		currentState = defaultState;
		bindVertexArrayObject( currentState.object );

	}

	// for backward-compatilibity

	function resetDefaultState() {

		defaultState.geometry = null;
		defaultState.program = null;
		defaultState.wireframe = false;

	}

	return {

		setup: setup,
		reset: reset,
		resetDefaultState: resetDefaultState,
		dispose: dispose,
		releaseStatesOfGeometry: releaseStatesOfGeometry,
		releaseStatesOfProgram: releaseStatesOfProgram,

		initAttributes: initAttributes,
		enableAttribute: enableAttribute,
		disableUnusedAttributes: disableUnusedAttributes

	};

}

function WebGLBufferRenderer( gl, extensions, info, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	let mode;

	function setMode( value ) {

		mode = value;

	}

	function render( start, count ) {

		gl.drawArrays( mode, start, count );

		info.update( count, mode, 1 );

	}

	function renderInstances( start, count, primcount ) {

		if ( primcount === 0 ) return;

		let extension, methodName;

		if ( isWebGL2 ) {

			extension = gl;
			methodName = 'drawArraysInstanced';

		} else {

			extension = extensions.get( 'ANGLE_instanced_arrays' );
			methodName = 'drawArraysInstancedANGLE';

			if ( extension === null ) {

				console.error( 'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
				return;

			}

		}

		extension[ methodName ]( mode, start, count, primcount );

		info.update( count, mode, primcount );

	}

	//

	this.setMode = setMode;
	this.render = render;
	this.renderInstances = renderInstances;

}

function WebGLCapabilities( gl, extensions, parameters ) {

	let maxAnisotropy;

	function getMaxAnisotropy() {

		if ( maxAnisotropy !== undefined ) return maxAnisotropy;

		const extension = extensions.get( 'EXT_texture_filter_anisotropic' );

		if ( extension !== null ) {

			maxAnisotropy = gl.getParameter( extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT );

		} else {

			maxAnisotropy = 0;

		}

		return maxAnisotropy;

	}

	function getMaxPrecision( precision ) {

		if ( precision === 'highp' ) {

			if ( gl.getShaderPrecisionFormat( gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision > 0 &&
				gl.getShaderPrecisionFormat( gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision > 0 ) {

				return 'highp';

			}

			precision = 'mediump';

		}

		if ( precision === 'mediump' ) {

			if ( gl.getShaderPrecisionFormat( gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision > 0 &&
				gl.getShaderPrecisionFormat( gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision > 0 ) {

				return 'mediump';

			}

		}

		return 'lowp';

	}

	/* eslint-disable no-undef */
	const isWebGL2 = ( typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext ) ||
		( typeof WebGL2ComputeRenderingContext !== 'undefined' && gl instanceof WebGL2ComputeRenderingContext );
	/* eslint-enable no-undef */

	let precision = parameters.precision !== undefined ? parameters.precision : 'highp';
	const maxPrecision = getMaxPrecision( precision );

	if ( maxPrecision !== precision ) {

		console.warn( 'THREE.WebGLRenderer:', precision, 'not supported, using', maxPrecision, 'instead.' );
		precision = maxPrecision;

	}

	const logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true;

	const maxTextures = gl.getParameter( gl.MAX_TEXTURE_IMAGE_UNITS );
	const maxVertexTextures = gl.getParameter( gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS );
	const maxTextureSize = gl.getParameter( gl.MAX_TEXTURE_SIZE );
	const maxCubemapSize = gl.getParameter( gl.MAX_CUBE_MAP_TEXTURE_SIZE );

	const maxAttributes = gl.getParameter( gl.MAX_VERTEX_ATTRIBS );
	const maxVertexUniforms = gl.getParameter( gl.MAX_VERTEX_UNIFORM_VECTORS );
	const maxVaryings = gl.getParameter( gl.MAX_VARYING_VECTORS );
	const maxFragmentUniforms = gl.getParameter( gl.MAX_FRAGMENT_UNIFORM_VECTORS );

	const vertexTextures = maxVertexTextures > 0;
	const floatFragmentTextures = isWebGL2 || !! extensions.get( 'OES_texture_float' );
	const floatVertexTextures = vertexTextures && floatFragmentTextures;

	const maxSamples = isWebGL2 ? gl.getParameter( gl.MAX_SAMPLES ) : 0;

	return {

		isWebGL2: isWebGL2,

		getMaxAnisotropy: getMaxAnisotropy,
		getMaxPrecision: getMaxPrecision,

		precision: precision,
		logarithmicDepthBuffer: logarithmicDepthBuffer,

		maxTextures: maxTextures,
		maxVertexTextures: maxVertexTextures,
		maxTextureSize: maxTextureSize,
		maxCubemapSize: maxCubemapSize,

		maxAttributes: maxAttributes,
		maxVertexUniforms: maxVertexUniforms,
		maxVaryings: maxVaryings,
		maxFragmentUniforms: maxFragmentUniforms,

		vertexTextures: vertexTextures,
		floatFragmentTextures: floatFragmentTextures,
		floatVertexTextures: floatVertexTextures,

		maxSamples: maxSamples

	};

}

function WebGLClipping( properties ) {

	const scope = this;

	let globalState = null,
		numGlobalPlanes = 0,
		localClippingEnabled = false,
		renderingShadows = false;

	const plane = new Plane(),
		viewNormalMatrix = new Matrix3(),

		uniform = { value: null, needsUpdate: false };

	this.uniform = uniform;
	this.numPlanes = 0;
	this.numIntersection = 0;

	this.init = function ( planes, enableLocalClipping, camera ) {

		const enabled =
			planes.length !== 0 ||
			enableLocalClipping ||
			// enable state of previous frame - the clipping code has to
			// run another frame in order to reset the state:
			numGlobalPlanes !== 0 ||
			localClippingEnabled;

		localClippingEnabled = enableLocalClipping;

		globalState = projectPlanes( planes, camera, 0 );
		numGlobalPlanes = planes.length;

		return enabled;

	};

	this.beginShadows = function () {

		renderingShadows = true;
		projectPlanes( null );

	};

	this.endShadows = function () {

		renderingShadows = false;
		resetGlobalState();

	};

	this.setState = function ( material, camera, useCache ) {

		const planes = material.clippingPlanes,
			clipIntersection = material.clipIntersection,
			clipShadows = material.clipShadows;

		const materialProperties = properties.get( material );

		if ( ! localClippingEnabled || planes === null || planes.length === 0 || renderingShadows && ! clipShadows ) {

			// there's no local clipping

			if ( renderingShadows ) {

				// there's no global clipping

				projectPlanes( null );

			} else {

				resetGlobalState();

			}

		} else {

			const nGlobal = renderingShadows ? 0 : numGlobalPlanes,
				lGlobal = nGlobal * 4;

			let dstArray = materialProperties.clippingState || null;

			uniform.value = dstArray; // ensure unique state

			dstArray = projectPlanes( planes, camera, lGlobal, useCache );

			for ( let i = 0; i !== lGlobal; ++ i ) {

				dstArray[ i ] = globalState[ i ];

			}

			materialProperties.clippingState = dstArray;
			this.numIntersection = clipIntersection ? this.numPlanes : 0;
			this.numPlanes += nGlobal;

		}


	};

	function resetGlobalState() {

		if ( uniform.value !== globalState ) {

			uniform.value = globalState;
			uniform.needsUpdate = numGlobalPlanes > 0;

		}

		scope.numPlanes = numGlobalPlanes;
		scope.numIntersection = 0;

	}

	function projectPlanes( planes, camera, dstOffset, skipTransform ) {

		const nPlanes = planes !== null ? planes.length : 0;
		let dstArray = null;

		if ( nPlanes !== 0 ) {

			dstArray = uniform.value;

			if ( skipTransform !== true || dstArray === null ) {

				const flatSize = dstOffset + nPlanes * 4,
					viewMatrix = camera.matrixWorldInverse;

				viewNormalMatrix.getNormalMatrix( viewMatrix );

				if ( dstArray === null || dstArray.length < flatSize ) {

					dstArray = new Float32Array( flatSize );

				}

				for ( let i = 0, i4 = dstOffset; i !== nPlanes; ++ i, i4 += 4 ) {

					plane.copy( planes[ i ] ).applyMatrix4( viewMatrix, viewNormalMatrix );

					plane.normal.toArray( dstArray, i4 );
					dstArray[ i4 + 3 ] = plane.constant;

				}

			}

			uniform.value = dstArray;
			uniform.needsUpdate = true;

		}

		scope.numPlanes = nPlanes;
		scope.numIntersection = 0;

		return dstArray;

	}

}

const fov = 90, aspect = 1;

function CubeCamera( near, far, renderTarget ) {

	Object3D.call( this );

	this.type = 'CubeCamera';

	if ( renderTarget.isWebGLCubeRenderTarget !== true ) {

		console.error( 'THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.' );
		return;

	}

	this.renderTarget = renderTarget;

	const cameraPX = new PerspectiveCamera( fov, aspect, near, far );
	cameraPX.layers = this.layers;
	cameraPX.up.set( 0, - 1, 0 );
	cameraPX.lookAt( new Vector3( 1, 0, 0 ) );
	this.add( cameraPX );

	const cameraNX = new PerspectiveCamera( fov, aspect, near, far );
	cameraNX.layers = this.layers;
	cameraNX.up.set( 0, - 1, 0 );
	cameraNX.lookAt( new Vector3( - 1, 0, 0 ) );
	this.add( cameraNX );

	const cameraPY = new PerspectiveCamera( fov, aspect, near, far );
	cameraPY.layers = this.layers;
	cameraPY.up.set( 0, 0, 1 );
	cameraPY.lookAt( new Vector3( 0, 1, 0 ) );
	this.add( cameraPY );

	const cameraNY = new PerspectiveCamera( fov, aspect, near, far );
	cameraNY.layers = this.layers;
	cameraNY.up.set( 0, 0, - 1 );
	cameraNY.lookAt( new Vector3( 0, - 1, 0 ) );
	this.add( cameraNY );

	const cameraPZ = new PerspectiveCamera( fov, aspect, near, far );
	cameraPZ.layers = this.layers;
	cameraPZ.up.set( 0, - 1, 0 );
	cameraPZ.lookAt( new Vector3( 0, 0, 1 ) );
	this.add( cameraPZ );

	const cameraNZ = new PerspectiveCamera( fov, aspect, near, far );
	cameraNZ.layers = this.layers;
	cameraNZ.up.set( 0, - 1, 0 );
	cameraNZ.lookAt( new Vector3( 0, 0, - 1 ) );
	this.add( cameraNZ );

	this.update = function ( renderer, scene ) {

		if ( this.parent === null ) this.updateMatrixWorld();

		const currentXrEnabled = renderer.xr.enabled;
		const currentRenderTarget = renderer.getRenderTarget();

		renderer.xr.enabled = false;

		const generateMipmaps = renderTarget.texture.generateMipmaps;

		renderTarget.texture.generateMipmaps = false;

		renderer.setRenderTarget( renderTarget, 0 );
		renderer.render( scene, cameraPX );

		renderer.setRenderTarget( renderTarget, 1 );
		renderer.render( scene, cameraNX );

		renderer.setRenderTarget( renderTarget, 2 );
		renderer.render( scene, cameraPY );

		renderer.setRenderTarget( renderTarget, 3 );
		renderer.render( scene, cameraNY );

		renderer.setRenderTarget( renderTarget, 4 );
		renderer.render( scene, cameraPZ );

		renderTarget.texture.generateMipmaps = generateMipmaps;

		renderer.setRenderTarget( renderTarget, 5 );
		renderer.render( scene, cameraNZ );

		renderer.setRenderTarget( currentRenderTarget );

		renderer.xr.enabled = currentXrEnabled;

	};

}

CubeCamera.prototype = Object.create( Object3D.prototype );
CubeCamera.prototype.constructor = CubeCamera;

function CubeTexture( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding ) {

	images = images !== undefined ? images : [];
	mapping = mapping !== undefined ? mapping : CubeReflectionMapping;
	format = format !== undefined ? format : RGBFormat;

	Texture.call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

	this.flipY = false;

	// Why CubeTexture._needsFlipEnvMap is necessary:
	//
	// By convention -- likely based on the RenderMan spec from the 1990's -- cube maps are specified by WebGL (and three.js)
	// in a coordinate system in which positive-x is to the right when looking up the positive-z axis -- in other words,
	// in a left-handed coordinate system. By continuing this convention, preexisting cube maps continued to render correctly.

	// three.js uses a right-handed coordinate system. So environment maps used in three.js appear to have px and nx swapped
	// and the flag _needsFlipEnvMap controls this conversion. The flip is not required (and thus _needsFlipEnvMap is set to false)
	// when using WebGLCubeRenderTarget.texture as a cube texture.

	this._needsFlipEnvMap = true;

}

CubeTexture.prototype = Object.create( Texture.prototype );
CubeTexture.prototype.constructor = CubeTexture;

CubeTexture.prototype.isCubeTexture = true;

Object.defineProperty( CubeTexture.prototype, 'images', {

	get: function () {

		return this.image;

	},

	set: function ( value ) {

		this.image = value;

	}

} );

function WebGLCubeRenderTarget( size, options, dummy ) {

	if ( Number.isInteger( options ) ) {

		console.warn( 'THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )' );

		options = dummy;

	}

	WebGLRenderTarget.call( this, size, size, options );

	options = options || {};

	this.texture = new CubeTexture( undefined, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding );

	this.texture._needsFlipEnvMap = false;

}

WebGLCubeRenderTarget.prototype = Object.create( WebGLRenderTarget.prototype );
WebGLCubeRenderTarget.prototype.constructor = WebGLCubeRenderTarget;

WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = true;

WebGLCubeRenderTarget.prototype.fromEquirectangularTexture = function ( renderer, texture ) {

	this.texture.type = texture.type;
	this.texture.format = RGBAFormat; // see #18859
	this.texture.encoding = texture.encoding;

	this.texture.generateMipmaps = texture.generateMipmaps;
	this.texture.minFilter = texture.minFilter;
	this.texture.magFilter = texture.magFilter;

	const shader = {

		uniforms: {
			tEquirect: { value: null },
		},

		vertexShader: /* glsl */`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,

		fragmentShader: /* glsl */`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`
	};

	const geometry = new BoxBufferGeometry( 5, 5, 5 );

	const material = new ShaderMaterial( {

		name: 'CubemapFromEquirect',

		uniforms: cloneUniforms( shader.uniforms ),
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader,
		side: BackSide,
		blending: NoBlending

	} );

	material.uniforms.tEquirect.value = texture;

	const mesh = new Mesh( geometry, material );

	const currentMinFilter = texture.minFilter;

	// Avoid blurred poles
	if ( texture.minFilter === LinearMipmapLinearFilter ) texture.minFilter = LinearFilter;

	const camera = new CubeCamera( 1, 10, this );
	camera.update( renderer, mesh );

	texture.minFilter = currentMinFilter;

	mesh.geometry.dispose();
	mesh.material.dispose();

	return this;

};

WebGLCubeRenderTarget.prototype.clear = function ( renderer, color, depth, stencil ) {

	const currentRenderTarget = renderer.getRenderTarget();

	for ( let i = 0; i < 6; i ++ ) {

		renderer.setRenderTarget( this, i );

		renderer.clear( color, depth, stencil );

	}

	renderer.setRenderTarget( currentRenderTarget );

};

function WebGLCubeMaps( renderer ) {

	let cubemaps = new WeakMap();

	function mapTextureMapping( texture, mapping ) {

		if ( mapping === EquirectangularReflectionMapping ) {

			texture.mapping = CubeReflectionMapping;

		} else if ( mapping === EquirectangularRefractionMapping ) {

			texture.mapping = CubeRefractionMapping;

		}

		return texture;

	}

	function get( texture ) {

		if ( texture && texture.isTexture ) {

			const mapping = texture.mapping;

			if ( mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping ) {

				if ( cubemaps.has( texture ) ) {

					const cubemap = cubemaps.get( texture ).texture;
					return mapTextureMapping( cubemap, texture.mapping );

				} else {

					const image = texture.image;

					if ( image && image.height > 0 ) {

						const currentRenderList = renderer.getRenderList();
						const currentRenderTarget = renderer.getRenderTarget();
						const currentRenderState = renderer.getRenderState();

						const renderTarget = new WebGLCubeRenderTarget( image.height / 2 );
						renderTarget.fromEquirectangularTexture( renderer, texture );
						cubemaps.set( texture, renderTarget );

						renderer.setRenderTarget( currentRenderTarget );
						renderer.setRenderList( currentRenderList );
						renderer.setRenderState( currentRenderState );

						texture.addEventListener( 'dispose', onTextureDispose );

						return mapTextureMapping( renderTarget.texture, texture.mapping );

					} else {

						// image not yet ready. try the conversion next frame

						return null;

					}

				}

			}

		}

		return texture;

	}

	function onTextureDispose( event ) {

		const texture = event.target;

		texture.removeEventListener( 'dispose', onTextureDispose );

		const cubemap = cubemaps.get( texture );

		if ( cubemap !== undefined ) {

			cubemaps.delete( texture );
			cubemap.dispose();

		}

	}

	function dispose() {

		cubemaps = new WeakMap();

	}

	return {
		get: get,
		dispose: dispose
	};

}

function WebGLExtensions( gl ) {

	const extensions = {};

	return {

		has: function ( name ) {

			if ( extensions[ name ] !== undefined ) {

				return extensions[ name ] !== null;

			}

			let extension;

			switch ( name ) {

				case 'WEBGL_depth_texture':
					extension = gl.getExtension( 'WEBGL_depth_texture' ) || gl.getExtension( 'MOZ_WEBGL_depth_texture' ) || gl.getExtension( 'WEBKIT_WEBGL_depth_texture' );
					break;

				case 'EXT_texture_filter_anisotropic':
					extension = gl.getExtension( 'EXT_texture_filter_anisotropic' ) || gl.getExtension( 'MOZ_EXT_texture_filter_anisotropic' ) || gl.getExtension( 'WEBKIT_EXT_texture_filter_anisotropic' );
					break;

				case 'WEBGL_compressed_texture_s3tc':
					extension = gl.getExtension( 'WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'MOZ_WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_s3tc' );
					break;

				case 'WEBGL_compressed_texture_pvrtc':
					extension = gl.getExtension( 'WEBGL_compressed_texture_pvrtc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_pvrtc' );
					break;

				default:
					extension = gl.getExtension( name );

			}

			extensions[ name ] = extension;

			return extension !== null;

		},

		get: function ( name ) {

			if ( ! this.has( name ) ) {

				console.warn( 'THREE.WebGLRenderer: ' + name + ' extension not supported.' );

			}

			return extensions[ name ];

		}

	};

}

function WebGLGeometries( gl, attributes, info, bindingStates ) {

	const geometries = new WeakMap();
	const wireframeAttributes = new WeakMap();

	function onGeometryDispose( event ) {

		const geometry = event.target;
		const buffergeometry = geometries.get( geometry );

		if ( buffergeometry.index !== null ) {

			attributes.remove( buffergeometry.index );

		}

		for ( const name in buffergeometry.attributes ) {

			attributes.remove( buffergeometry.attributes[ name ] );

		}

		geometry.removeEventListener( 'dispose', onGeometryDispose );

		geometries.delete( geometry );

		const attribute = wireframeAttributes.get( buffergeometry );

		if ( attribute ) {

			attributes.remove( attribute );
			wireframeAttributes.delete( buffergeometry );

		}

		bindingStates.releaseStatesOfGeometry( buffergeometry );

		if ( geometry.isInstancedBufferGeometry === true ) {

			delete geometry._maxInstanceCount;

		}

		//

		info.memory.geometries --;

	}

	function get( object, geometry ) {

		let buffergeometry = geometries.get( geometry );

		if ( buffergeometry ) return buffergeometry;

		geometry.addEventListener( 'dispose', onGeometryDispose );

		if ( geometry.isBufferGeometry ) {

			buffergeometry = geometry;

		} else if ( geometry.isGeometry ) {

			if ( geometry._bufferGeometry === undefined ) {

				geometry._bufferGeometry = new BufferGeometry().setFromObject( object );

			}

			buffergeometry = geometry._bufferGeometry;

		}

		geometries.set( geometry, buffergeometry );

		info.memory.geometries ++;

		return buffergeometry;

	}

	function update( geometry ) {

		const geometryAttributes = geometry.attributes;

		// Updating index buffer in VAO now. See WebGLBindingStates.

		for ( const name in geometryAttributes ) {

			attributes.update( geometryAttributes[ name ], gl.ARRAY_BUFFER );

		}

		// morph targets

		const morphAttributes = geometry.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = morphAttributes[ name ];

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				attributes.update( array[ i ], gl.ARRAY_BUFFER );

			}

		}

	}

	function updateWireframeAttribute( geometry ) {

		const indices = [];

		const geometryIndex = geometry.index;
		const geometryPosition = geometry.attributes.position;
		let version = 0;

		if ( geometryIndex !== null ) {

			const array = geometryIndex.array;
			version = geometryIndex.version;

			for ( let i = 0, l = array.length; i < l; i += 3 ) {

				const a = array[ i + 0 ];
				const b = array[ i + 1 ];
				const c = array[ i + 2 ];

				indices.push( a, b, b, c, c, a );

			}

		} else {

			const array = geometryPosition.array;
			version = geometryPosition.version;

			for ( let i = 0, l = ( array.length / 3 ) - 1; i < l; i += 3 ) {

				const a = i + 0;
				const b = i + 1;
				const c = i + 2;

				indices.push( a, b, b, c, c, a );

			}

		}

		const attribute = new ( arrayMax( indices ) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute )( indices, 1 );
		attribute.version = version;

		// Updating index buffer in VAO now. See WebGLBindingStates

		//

		const previousAttribute = wireframeAttributes.get( geometry );

		if ( previousAttribute ) attributes.remove( previousAttribute );

		//

		wireframeAttributes.set( geometry, attribute );

	}

	function getWireframeAttribute( geometry ) {

		const currentAttribute = wireframeAttributes.get( geometry );

		if ( currentAttribute ) {

			const geometryIndex = geometry.index;

			if ( geometryIndex !== null ) {

				// if the attribute is obsolete, create a new one

				if ( currentAttribute.version < geometryIndex.version ) {

					updateWireframeAttribute( geometry );

				}

			}

		} else {

			updateWireframeAttribute( geometry );

		}

		return wireframeAttributes.get( geometry );

	}

	return {

		get: get,
		update: update,

		getWireframeAttribute: getWireframeAttribute

	};

}

function WebGLIndexedBufferRenderer( gl, extensions, info, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	let mode;

	function setMode( value ) {

		mode = value;

	}

	let type, bytesPerElement;

	function setIndex( value ) {

		type = value.type;
		bytesPerElement = value.bytesPerElement;

	}

	function render( start, count ) {

		gl.drawElements( mode, count, type, start * bytesPerElement );

		info.update( count, mode, 1 );

	}

	function renderInstances( start, count, primcount ) {

		if ( primcount === 0 ) return;

		let extension, methodName;

		if ( isWebGL2 ) {

			extension = gl;
			methodName = 'drawElementsInstanced';

		} else {

			extension = extensions.get( 'ANGLE_instanced_arrays' );
			methodName = 'drawElementsInstancedANGLE';

			if ( extension === null ) {

				console.error( 'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
				return;

			}

		}

		extension[ methodName ]( mode, count, type, start * bytesPerElement, primcount );

		info.update( count, mode, primcount );

	}

	//

	this.setMode = setMode;
	this.setIndex = setIndex;
	this.render = render;
	this.renderInstances = renderInstances;

}

function WebGLInfo( gl ) {

	const memory = {
		geometries: 0,
		textures: 0
	};

	const render = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};

	function update( count, mode, instanceCount ) {

		render.calls ++;

		switch ( mode ) {

			case gl.TRIANGLES:
				render.triangles += instanceCount * ( count / 3 );
				break;

			case gl.LINES:
				render.lines += instanceCount * ( count / 2 );
				break;

			case gl.LINE_STRIP:
				render.lines += instanceCount * ( count - 1 );
				break;

			case gl.LINE_LOOP:
				render.lines += instanceCount * count;
				break;

			case gl.POINTS:
				render.points += instanceCount * count;
				break;

			default:
				console.error( 'THREE.WebGLInfo: Unknown draw mode:', mode );
				break;

		}

	}

	function reset() {

		render.frame ++;
		render.calls = 0;
		render.triangles = 0;
		render.points = 0;
		render.lines = 0;

	}

	return {
		memory: memory,
		render: render,
		programs: null,
		autoReset: true,
		reset: reset,
		update: update
	};

}

function numericalSort( a, b ) {

	return a[ 0 ] - b[ 0 ];

}

function absNumericalSort( a, b ) {

	return Math.abs( b[ 1 ] ) - Math.abs( a[ 1 ] );

}

function WebGLMorphtargets( gl ) {

	const influencesList = {};
	const morphInfluences = new Float32Array( 8 );

	const workInfluences = [];

	for ( let i = 0; i < 8; i ++ ) {

		workInfluences[ i ] = [ i, 0 ];

	}

	function update( object, geometry, material, program ) {

		const objectInfluences = object.morphTargetInfluences;

		// When object doesn't have morph target influences defined, we treat it as a 0-length array
		// This is important to make sure we set up morphTargetBaseInfluence / morphTargetInfluences

		const length = objectInfluences === undefined ? 0 : objectInfluences.length;

		let influences = influencesList[ geometry.id ];

		if ( influences === undefined ) {

			// initialise list

			influences = [];

			for ( let i = 0; i < length; i ++ ) {

				influences[ i ] = [ i, 0 ];

			}

			influencesList[ geometry.id ] = influences;

		}

		// Collect influences

		for ( let i = 0; i < length; i ++ ) {

			const influence = influences[ i ];

			influence[ 0 ] = i;
			influence[ 1 ] = objectInfluences[ i ];

		}

		influences.sort( absNumericalSort );

		for ( let i = 0; i < 8; i ++ ) {

			if ( i < length && influences[ i ][ 1 ] ) {

				workInfluences[ i ][ 0 ] = influences[ i ][ 0 ];
				workInfluences[ i ][ 1 ] = influences[ i ][ 1 ];

			} else {

				workInfluences[ i ][ 0 ] = Number.MAX_SAFE_INTEGER;
				workInfluences[ i ][ 1 ] = 0;

			}

		}

		workInfluences.sort( numericalSort );

		const morphTargets = material.morphTargets && geometry.morphAttributes.position;
		const morphNormals = material.morphNormals && geometry.morphAttributes.normal;

		let morphInfluencesSum = 0;

		for ( let i = 0; i < 8; i ++ ) {

			const influence = workInfluences[ i ];
			const index = influence[ 0 ];
			const value = influence[ 1 ];

			if ( index !== Number.MAX_SAFE_INTEGER && value ) {

				if ( morphTargets && geometry.getAttribute( 'morphTarget' + i ) !== morphTargets[ index ] ) {

					geometry.setAttribute( 'morphTarget' + i, morphTargets[ index ] );

				}

				if ( morphNormals && geometry.getAttribute( 'morphNormal' + i ) !== morphNormals[ index ] ) {

					geometry.setAttribute( 'morphNormal' + i, morphNormals[ index ] );

				}

				morphInfluences[ i ] = value;
				morphInfluencesSum += value;

			} else {

				if ( morphTargets && geometry.getAttribute( 'morphTarget' + i ) !== undefined ) {

					geometry.deleteAttribute( 'morphTarget' + i );

				}

				if ( morphNormals && geometry.getAttribute( 'morphNormal' + i ) !== undefined ) {

					geometry.deleteAttribute( 'morphNormal' + i );

				}

				morphInfluences[ i ] = 0;

			}

		}

		// GLSL shader uses formula baseinfluence * base + sum(target * influence)
		// This allows us to switch between absolute morphs and relative morphs without changing shader code
		// When baseinfluence = 1 - sum(influence), the above is equivalent to sum((target - base) * influence)
		const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;

		program.getUniforms().setValue( gl, 'morphTargetBaseInfluence', morphBaseInfluence );
		program.getUniforms().setValue( gl, 'morphTargetInfluences', morphInfluences );

	}

	return {

		update: update

	};

}

function WebGLObjects( gl, geometries, attributes, info ) {

	let updateMap = new WeakMap();

	function update( object ) {

		const frame = info.render.frame;

		const geometry = object.geometry;
		const buffergeometry = geometries.get( object, geometry );

		// Update once per frame

		if ( updateMap.get( buffergeometry ) !== frame ) {

			if ( geometry.isGeometry ) {

				buffergeometry.updateFromObject( object );

			}

			geometries.update( buffergeometry );

			updateMap.set( buffergeometry, frame );

		}

		if ( object.isInstancedMesh ) {

			attributes.update( object.instanceMatrix, gl.ARRAY_BUFFER );

			if ( object.instanceColor !== null ) {

				attributes.update( object.instanceColor, gl.ARRAY_BUFFER );

			}

		}

		return buffergeometry;

	}

	function dispose() {

		updateMap = new WeakMap();

	}

	return {

		update: update,
		dispose: dispose

	};

}

function DataTexture2DArray( data, width, height, depth ) {

	Texture.call( this, null );

	this.image = { data: data || null, width: width || 1, height: height || 1, depth: depth || 1 };

	this.magFilter = NearestFilter;
	this.minFilter = NearestFilter;

	this.wrapR = ClampToEdgeWrapping;

	this.generateMipmaps = false;
	this.flipY = false;

	this.needsUpdate = true;

}

DataTexture2DArray.prototype = Object.create( Texture.prototype );
DataTexture2DArray.prototype.constructor = DataTexture2DArray;
DataTexture2DArray.prototype.isDataTexture2DArray = true;

function DataTexture3D( data, width, height, depth ) {

	// We're going to add .setXXX() methods for setting properties later.
	// Users can still set in DataTexture3D directly.
	//
	//	const texture = new THREE.DataTexture3D( data, width, height, depth );
	// 	texture.anisotropy = 16;
	//
	// See #14839

	Texture.call( this, null );

	this.image = { data: data || null, width: width || 1, height: height || 1, depth: depth || 1 };

	this.magFilter = NearestFilter;
	this.minFilter = NearestFilter;

	this.wrapR = ClampToEdgeWrapping;

	this.generateMipmaps = false;
	this.flipY = false;

	this.needsUpdate = true;


}

DataTexture3D.prototype = Object.create( Texture.prototype );
DataTexture3D.prototype.constructor = DataTexture3D;
DataTexture3D.prototype.isDataTexture3D = true;

/**
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [textures] )
 *
 * 		uploads a uniform value(s)
 *  	the 'textures' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (textures factorizations):
 *
 * .upload( gl, seq, values, textures )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 *
 * Methods of the top-level container (textures factorizations):
 *
 * .setValue( gl, name, value, textures )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 */

const emptyTexture = new Texture();
const emptyTexture2dArray = new DataTexture2DArray();
const emptyTexture3d = new DataTexture3D();
const emptyCubeTexture = new CubeTexture();

// --- Utilities ---

// Array Caches (provide typed arrays for temporary by size)

const arrayCacheF32 = [];
const arrayCacheI32 = [];

// Float32Array caches used for uploading Matrix uniforms

const mat4array = new Float32Array( 16 );
const mat3array = new Float32Array( 9 );
const mat2array = new Float32Array( 4 );

// Flattening for arrays of vectors and matrices

function flatten( array, nBlocks, blockSize ) {

	const firstElem = array[ 0 ];

	if ( firstElem <= 0 || firstElem > 0 ) return array;
	// unoptimized: ! isNaN( firstElem )
	// see http://jacksondunstan.com/articles/983

	const n = nBlocks * blockSize;
	let r = arrayCacheF32[ n ];

	if ( r === undefined ) {

		r = new Float32Array( n );
		arrayCacheF32[ n ] = r;

	}

	if ( nBlocks !== 0 ) {

		firstElem.toArray( r, 0 );

		for ( let i = 1, offset = 0; i !== nBlocks; ++ i ) {

			offset += blockSize;
			array[ i ].toArray( r, offset );

		}

	}

	return r;

}

function arraysEqual( a, b ) {

	if ( a.length !== b.length ) return false;

	for ( let i = 0, l = a.length; i < l; i ++ ) {

		if ( a[ i ] !== b[ i ] ) return false;

	}

	return true;

}

function copyArray( a, b ) {

	for ( let i = 0, l = b.length; i < l; i ++ ) {

		a[ i ] = b[ i ];

	}

}

// Texture unit allocation

function allocTexUnits( textures, n ) {

	let r = arrayCacheI32[ n ];

	if ( r === undefined ) {

		r = new Int32Array( n );
		arrayCacheI32[ n ] = r;

	}

	for ( let i = 0; i !== n; ++ i ) {

		r[ i ] = textures.allocateTextureUnit();

	}

	return r;

}

// --- Setters ---

// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.

// Single scalar

function setValueV1f( gl, v ) {

	const cache = this.cache;

	if ( cache[ 0 ] === v ) return;

	gl.uniform1f( this.addr, v );

	cache[ 0 ] = v;

}

// Single float vector (from flat array or THREE.VectorN)

function setValueV2f( gl, v ) {

	const cache = this.cache;

	if ( v.x !== undefined ) {

		if ( cache[ 0 ] !== v.x || cache[ 1 ] !== v.y ) {

			gl.uniform2f( this.addr, v.x, v.y );

			cache[ 0 ] = v.x;
			cache[ 1 ] = v.y;

		}

	} else {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniform2fv( this.addr, v );

		copyArray( cache, v );

	}

}

function setValueV3f( gl, v ) {

	const cache = this.cache;

	if ( v.x !== undefined ) {

		if ( cache[ 0 ] !== v.x || cache[ 1 ] !== v.y || cache[ 2 ] !== v.z ) {

			gl.uniform3f( this.addr, v.x, v.y, v.z );

			cache[ 0 ] = v.x;
			cache[ 1 ] = v.y;
			cache[ 2 ] = v.z;

		}

	} else if ( v.r !== undefined ) {

		if ( cache[ 0 ] !== v.r || cache[ 1 ] !== v.g || cache[ 2 ] !== v.b ) {

			gl.uniform3f( this.addr, v.r, v.g, v.b );

			cache[ 0 ] = v.r;
			cache[ 1 ] = v.g;
			cache[ 2 ] = v.b;

		}

	} else {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniform3fv( this.addr, v );

		copyArray( cache, v );

	}

}

function setValueV4f( gl, v ) {

	const cache = this.cache;

	if ( v.x !== undefined ) {

		if ( cache[ 0 ] !== v.x || cache[ 1 ] !== v.y || cache[ 2 ] !== v.z || cache[ 3 ] !== v.w ) {

			gl.uniform4f( this.addr, v.x, v.y, v.z, v.w );

			cache[ 0 ] = v.x;
			cache[ 1 ] = v.y;
			cache[ 2 ] = v.z;
			cache[ 3 ] = v.w;

		}

	} else {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniform4fv( this.addr, v );

		copyArray( cache, v );

	}

}

// Single matrix (from flat array or MatrixN)

function setValueM2( gl, v ) {

	const cache = this.cache;
	const elements = v.elements;

	if ( elements === undefined ) {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniformMatrix2fv( this.addr, false, v );

		copyArray( cache, v );

	} else {

		if ( arraysEqual( cache, elements ) ) return;

		mat2array.set( elements );

		gl.uniformMatrix2fv( this.addr, false, mat2array );

		copyArray( cache, elements );

	}

}

function setValueM3( gl, v ) {

	const cache = this.cache;
	const elements = v.elements;

	if ( elements === undefined ) {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniformMatrix3fv( this.addr, false, v );

		copyArray( cache, v );

	} else {

		if ( arraysEqual( cache, elements ) ) return;

		mat3array.set( elements );

		gl.uniformMatrix3fv( this.addr, false, mat3array );

		copyArray( cache, elements );

	}

}

function setValueM4( gl, v ) {

	const cache = this.cache;
	const elements = v.elements;

	if ( elements === undefined ) {

		if ( arraysEqual( cache, v ) ) return;

		gl.uniformMatrix4fv( this.addr, false, v );

		copyArray( cache, v );

	} else {

		if ( arraysEqual( cache, elements ) ) return;

		mat4array.set( elements );

		gl.uniformMatrix4fv( this.addr, false, mat4array );

		copyArray( cache, elements );

	}

}

// Single texture (2D / Cube)

function setValueT1( gl, v, textures ) {

	const cache = this.cache;
	const unit = textures.allocateTextureUnit();

	if ( cache[ 0 ] !== unit ) {

		gl.uniform1i( this.addr, unit );
		cache[ 0 ] = unit;

	}

	textures.safeSetTexture2D( v || emptyTexture, unit );

}

function setValueT2DArray1( gl, v, textures ) {

	const cache = this.cache;
	const unit = textures.allocateTextureUnit();

	if ( cache[ 0 ] !== unit ) {

		gl.uniform1i( this.addr, unit );
		cache[ 0 ] = unit;

	}

	textures.setTexture2DArray( v || emptyTexture2dArray, unit );

}

function setValueT3D1( gl, v, textures ) {

	const cache = this.cache;
	const unit = textures.allocateTextureUnit();

	if ( cache[ 0 ] !== unit ) {

		gl.uniform1i( this.addr, unit );
		cache[ 0 ] = unit;

	}

	textures.setTexture3D( v || emptyTexture3d, unit );

}

function setValueT6( gl, v, textures ) {

	const cache = this.cache;
	const unit = textures.allocateTextureUnit();

	if ( cache[ 0 ] !== unit ) {

		gl.uniform1i( this.addr, unit );
		cache[ 0 ] = unit;

	}

	textures.safeSetTextureCube( v || emptyCubeTexture, unit );

}

// Integer / Boolean vectors or arrays thereof (always flat arrays)

function setValueV1i( gl, v ) {

	const cache = this.cache;

	if ( cache[ 0 ] === v ) return;

	gl.uniform1i( this.addr, v );

	cache[ 0 ] = v;

}

function setValueV2i( gl, v ) {

	const cache = this.cache;

	if ( arraysEqual( cache, v ) ) return;

	gl.uniform2iv( this.addr, v );

	copyArray( cache, v );

}

function setValueV3i( gl, v ) {

	const cache = this.cache;

	if ( arraysEqual( cache, v ) ) return;

	gl.uniform3iv( this.addr, v );

	copyArray( cache, v );

}

function setValueV4i( gl, v ) {

	const cache = this.cache;

	if ( arraysEqual( cache, v ) ) return;

	gl.uniform4iv( this.addr, v );

	copyArray( cache, v );

}

// uint

function setValueV1ui( gl, v ) {

	const cache = this.cache;

	if ( cache[ 0 ] === v ) return;

	gl.uniform1ui( this.addr, v );

	cache[ 0 ] = v;

}

// Helper to pick the right setter for the singular case

function getSingularSetter( type ) {

	switch ( type ) {

		case 0x1406: return setValueV1f; // FLOAT
		case 0x8b50: return setValueV2f; // _VEC2
		case 0x8b51: return setValueV3f; // _VEC3
		case 0x8b52: return setValueV4f; // _VEC4

		case 0x8b5a: return setValueM2; // _MAT2
		case 0x8b5b: return setValueM3; // _MAT3
		case 0x8b5c: return setValueM4; // _MAT4

		case 0x1404: case 0x8b56: return setValueV1i; // INT, BOOL
		case 0x8b53: case 0x8b57: return setValueV2i; // _VEC2
		case 0x8b54: case 0x8b58: return setValueV3i; // _VEC3
		case 0x8b55: case 0x8b59: return setValueV4i; // _VEC4

		case 0x1405: return setValueV1ui; // UINT

		case 0x8b5e: // SAMPLER_2D
		case 0x8d66: // SAMPLER_EXTERNAL_OES
		case 0x8dca: // INT_SAMPLER_2D
		case 0x8dd2: // UNSIGNED_INT_SAMPLER_2D
		case 0x8b62: // SAMPLER_2D_SHADOW
			return setValueT1;

		case 0x8b5f: // SAMPLER_3D
		case 0x8dcb: // INT_SAMPLER_3D
		case 0x8dd3: // UNSIGNED_INT_SAMPLER_3D
			return setValueT3D1;

		case 0x8b60: // SAMPLER_CUBE
		case 0x8dcc: // INT_SAMPLER_CUBE
		case 0x8dd4: // UNSIGNED_INT_SAMPLER_CUBE
		case 0x8dc5: // SAMPLER_CUBE_SHADOW
			return setValueT6;

		case 0x8dc1: // SAMPLER_2D_ARRAY
		case 0x8dcf: // INT_SAMPLER_2D_ARRAY
		case 0x8dd7: // UNSIGNED_INT_SAMPLER_2D_ARRAY
		case 0x8dc4: // SAMPLER_2D_ARRAY_SHADOW
			return setValueT2DArray1;

	}

}

// Array of scalars
function setValueV1fArray( gl, v ) {

	gl.uniform1fv( this.addr, v );

}

// Integer / Boolean vectors or arrays thereof (always flat arrays)
function setValueV1iArray( gl, v ) {

	gl.uniform1iv( this.addr, v );

}

function setValueV2iArray( gl, v ) {

	gl.uniform2iv( this.addr, v );

}

function setValueV3iArray( gl, v ) {

	gl.uniform3iv( this.addr, v );

}

function setValueV4iArray( gl, v ) {

	gl.uniform4iv( this.addr, v );

}


// Array of vectors (flat or from THREE classes)

function setValueV2fArray( gl, v ) {

	const data = flatten( v, this.size, 2 );

	gl.uniform2fv( this.addr, data );

}

function setValueV3fArray( gl, v ) {

	const data = flatten( v, this.size, 3 );

	gl.uniform3fv( this.addr, data );

}

function setValueV4fArray( gl, v ) {

	const data = flatten( v, this.size, 4 );

	gl.uniform4fv( this.addr, data );

}

// Array of matrices (flat or from THREE clases)

function setValueM2Array( gl, v ) {

	const data = flatten( v, this.size, 4 );

	gl.uniformMatrix2fv( this.addr, false, data );

}

function setValueM3Array( gl, v ) {

	const data = flatten( v, this.size, 9 );

	gl.uniformMatrix3fv( this.addr, false, data );

}

function setValueM4Array( gl, v ) {

	const data = flatten( v, this.size, 16 );

	gl.uniformMatrix4fv( this.addr, false, data );

}

// Array of textures (2D / Cube)

function setValueT1Array( gl, v, textures ) {

	const n = v.length;

	const units = allocTexUnits( textures, n );

	gl.uniform1iv( this.addr, units );

	for ( let i = 0; i !== n; ++ i ) {

		textures.safeSetTexture2D( v[ i ] || emptyTexture, units[ i ] );

	}

}

function setValueT6Array( gl, v, textures ) {

	const n = v.length;

	const units = allocTexUnits( textures, n );

	gl.uniform1iv( this.addr, units );

	for ( let i = 0; i !== n; ++ i ) {

		textures.safeSetTextureCube( v[ i ] || emptyCubeTexture, units[ i ] );

	}

}

// Helper to pick the right setter for a pure (bottom-level) array

function getPureArraySetter( type ) {

	switch ( type ) {

		case 0x1406: return setValueV1fArray; // FLOAT
		case 0x8b50: return setValueV2fArray; // _VEC2
		case 0x8b51: return setValueV3fArray; // _VEC3
		case 0x8b52: return setValueV4fArray; // _VEC4

		case 0x8b5a: return setValueM2Array; // _MAT2
		case 0x8b5b: return setValueM3Array; // _MAT3
		case 0x8b5c: return setValueM4Array; // _MAT4

		case 0x1404: case 0x8b56: return setValueV1iArray; // INT, BOOL
		case 0x8b53: case 0x8b57: return setValueV2iArray; // _VEC2
		case 0x8b54: case 0x8b58: return setValueV3iArray; // _VEC3
		case 0x8b55: case 0x8b59: return setValueV4iArray; // _VEC4

		case 0x8b5e: // SAMPLER_2D
		case 0x8d66: // SAMPLER_EXTERNAL_OES
		case 0x8dca: // INT_SAMPLER_2D
		case 0x8dd2: // UNSIGNED_INT_SAMPLER_2D
		case 0x8b62: // SAMPLER_2D_SHADOW
			return setValueT1Array;

		case 0x8b60: // SAMPLER_CUBE
		case 0x8dcc: // INT_SAMPLER_CUBE
		case 0x8dd4: // UNSIGNED_INT_SAMPLER_CUBE
		case 0x8dc5: // SAMPLER_CUBE_SHADOW
			return setValueT6Array;

	}

}

// --- Uniform Classes ---

function SingleUniform( id, activeInfo, addr ) {

	this.id = id;
	this.addr = addr;
	this.cache = [];
	this.setValue = getSingularSetter( activeInfo.type );

	// this.path = activeInfo.name; // DEBUG

}

function PureArrayUniform( id, activeInfo, addr ) {

	this.id = id;
	this.addr = addr;
	this.cache = [];
	this.size = activeInfo.size;
	this.setValue = getPureArraySetter( activeInfo.type );

	// this.path = activeInfo.name; // DEBUG

}

PureArrayUniform.prototype.updateCache = function ( data ) {

	const cache = this.cache;

	if ( data instanceof Float32Array && cache.length !== data.length ) {

		this.cache = new Float32Array( data.length );

	}

	copyArray( cache, data );

};

function StructuredUniform( id ) {

	this.id = id;

	this.seq = [];
	this.map = {};

}

StructuredUniform.prototype.setValue = function ( gl, value, textures ) {

	const seq = this.seq;

	for ( let i = 0, n = seq.length; i !== n; ++ i ) {

		const u = seq[ i ];
		u.setValue( gl, value[ u.id ], textures );

	}

};

// --- Top-level ---

// Parser - builds up the property tree from the path strings

const RePathPart = /([\w\d_]+)(\])?(\[|\.)?/g;

// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.

function addUniform( container, uniformObject ) {

	container.seq.push( uniformObject );
	container.map[ uniformObject.id ] = uniformObject;

}

function parseUniform( activeInfo, addr, container ) {

	const path = activeInfo.name,
		pathLength = path.length;

	// reset RegExp object, because of the early exit of a previous run
	RePathPart.lastIndex = 0;

	while ( true ) {

		const match = RePathPart.exec( path ),
			matchEnd = RePathPart.lastIndex;

		let id = match[ 1 ];
		const idIsIndex = match[ 2 ] === ']',
			subscript = match[ 3 ];

		if ( idIsIndex ) id = id | 0; // convert to integer

		if ( subscript === undefined || subscript === '[' && matchEnd + 2 === pathLength ) {

			// bare name or "pure" bottom-level array "[0]" suffix

			addUniform( container, subscript === undefined ?
				new SingleUniform( id, activeInfo, addr ) :
				new PureArrayUniform( id, activeInfo, addr ) );

			break;

		} else {

			// step into inner node / create it in case it doesn't exist

			const map = container.map;
			let next = map[ id ];

			if ( next === undefined ) {

				next = new StructuredUniform( id );
				addUniform( container, next );

			}

			container = next;

		}

	}

}

// Root Container

function WebGLUniforms( gl, program ) {

	this.seq = [];
	this.map = {};

	const n = gl.getProgramParameter( program, gl.ACTIVE_UNIFORMS );

	for ( let i = 0; i < n; ++ i ) {

		const info = gl.getActiveUniform( program, i ),
			addr = gl.getUniformLocation( program, info.name );

		parseUniform( info, addr, this );

	}

}

WebGLUniforms.prototype.setValue = function ( gl, name, value, textures ) {

	const u = this.map[ name ];

	if ( u !== undefined ) u.setValue( gl, value, textures );

};

WebGLUniforms.prototype.setOptional = function ( gl, object, name ) {

	const v = object[ name ];

	if ( v !== undefined ) this.setValue( gl, name, v );

};


// Static interface

WebGLUniforms.upload = function ( gl, seq, values, textures ) {

	for ( let i = 0, n = seq.length; i !== n; ++ i ) {

		const u = seq[ i ],
			v = values[ u.id ];

		if ( v.needsUpdate !== false ) {

			// note: always updating when .needsUpdate is undefined
			u.setValue( gl, v.value, textures );

		}

	}

};

WebGLUniforms.seqWithValue = function ( seq, values ) {

	const r = [];

	for ( let i = 0, n = seq.length; i !== n; ++ i ) {

		const u = seq[ i ];
		if ( u.id in values ) r.push( u );

	}

	return r;

};

function WebGLShader( gl, type, string ) {

	const shader = gl.createShader( type );

	gl.shaderSource( shader, string );
	gl.compileShader( shader );

	return shader;

}

let programIdCount = 0;

function addLineNumbers( string ) {

	const lines = string.split( '\n' );

	for ( let i = 0; i < lines.length; i ++ ) {

		lines[ i ] = ( i + 1 ) + ': ' + lines[ i ];

	}

	return lines.join( '\n' );

}

function getEncodingComponents( encoding ) {

	switch ( encoding ) {

		case LinearEncoding:
			return [ 'Linear', '( value )' ];
		case sRGBEncoding:
			return [ 'sRGB', '( value )' ];
		case RGBEEncoding:
			return [ 'RGBE', '( value )' ];
		case RGBM7Encoding:
			return [ 'RGBM', '( value, 7.0 )' ];
		case RGBM16Encoding:
			return [ 'RGBM', '( value, 16.0 )' ];
		case RGBDEncoding:
			return [ 'RGBD', '( value, 256.0 )' ];
		case GammaEncoding:
			return [ 'Gamma', '( value, float( GAMMA_FACTOR ) )' ];
		case LogLuvEncoding:
			return [ 'LogLuv', '( value )' ];
		default:
			console.warn( 'THREE.WebGLProgram: Unsupported encoding:', encoding );
			return [ 'Linear', '( value )' ];

	}

}

function getShaderErrors( gl, shader, type ) {

	const status = gl.getShaderParameter( shader, gl.COMPILE_STATUS );
	const log = gl.getShaderInfoLog( shader ).trim();

	if ( status && log === '' ) return '';

	// --enable-privileged-webgl-extension
	// console.log( '**' + type + '**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );

	const source = gl.getShaderSource( shader );

	return 'THREE.WebGLShader: gl.getShaderInfoLog() ' + type + '\n' + log + addLineNumbers( source );

}

function getTexelDecodingFunction( functionName, encoding ) {

	const components = getEncodingComponents( encoding );
	return 'vec4 ' + functionName + '( vec4 value ) { return ' + components[ 0 ] + 'ToLinear' + components[ 1 ] + '; }';

}

function getTexelEncodingFunction( functionName, encoding ) {

	const components = getEncodingComponents( encoding );
	return 'vec4 ' + functionName + '( vec4 value ) { return LinearTo' + components[ 0 ] + components[ 1 ] + '; }';

}

function getToneMappingFunction( functionName, toneMapping ) {

	let toneMappingName;

	switch ( toneMapping ) {

		case LinearToneMapping:
			toneMappingName = 'Linear';
			break;

		case ReinhardToneMapping:
			toneMappingName = 'Reinhard';
			break;

		case CineonToneMapping:
			toneMappingName = 'OptimizedCineon';
			break;

		case ACESFilmicToneMapping:
			toneMappingName = 'ACESFilmic';
			break;

		case CustomToneMapping:
			toneMappingName = 'Custom';
			break;

		default:
			console.warn( 'THREE.WebGLProgram: Unsupported toneMapping:', toneMapping );
			toneMappingName = 'Linear';

	}

	return 'vec3 ' + functionName + '( vec3 color ) { return ' + toneMappingName + 'ToneMapping( color ); }';

}

function generateExtensions( parameters ) {

	const chunks = [
		( parameters.extensionDerivatives || parameters.envMapCubeUV || parameters.bumpMap || parameters.tangentSpaceNormalMap || parameters.clearcoatNormalMap || parameters.flatShading || parameters.shaderID === 'physical' ) ? '#extension GL_OES_standard_derivatives : enable' : '',
		( parameters.extensionFragDepth || parameters.logarithmicDepthBuffer ) && parameters.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '',
		( parameters.extensionDrawBuffers && parameters.rendererExtensionDrawBuffers ) ? '#extension GL_EXT_draw_buffers : require' : '',
		( parameters.extensionShaderTextureLOD || parameters.envMap ) && parameters.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : ''
	];

	return chunks.filter( filterEmptyLine ).join( '\n' );

}

function generateDefines( defines ) {

	const chunks = [];

	for ( const name in defines ) {

		const value = defines[ name ];

		if ( value === false ) continue;

		chunks.push( '#define ' + name + ' ' + value );

	}

	return chunks.join( '\n' );

}

function fetchAttributeLocations( gl, program ) {

	const attributes = {};

	const n = gl.getProgramParameter( program, gl.ACTIVE_ATTRIBUTES );

	for ( let i = 0; i < n; i ++ ) {

		const info = gl.getActiveAttrib( program, i );
		const name = info.name;

		// console.log( 'THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:', name, i );

		attributes[ name ] = gl.getAttribLocation( program, name );

	}

	return attributes;

}

function filterEmptyLine( string ) {

	return string !== '';

}

function replaceLightNums( string, parameters ) {

	return string
		.replace( /NUM_DIR_LIGHTS/g, parameters.numDirLights )
		.replace( /NUM_SPOT_LIGHTS/g, parameters.numSpotLights )
		.replace( /NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights )
		.replace( /NUM_POINT_LIGHTS/g, parameters.numPointLights )
		.replace( /NUM_HEMI_LIGHTS/g, parameters.numHemiLights )
		.replace( /NUM_DIR_LIGHT_SHADOWS/g, parameters.numDirLightShadows )
		.replace( /NUM_SPOT_LIGHT_SHADOWS/g, parameters.numSpotLightShadows )
		.replace( /NUM_POINT_LIGHT_SHADOWS/g, parameters.numPointLightShadows );

}

function replaceClippingPlaneNums( string, parameters ) {

	return string
		.replace( /NUM_CLIPPING_PLANES/g, parameters.numClippingPlanes )
		.replace( /UNION_CLIPPING_PLANES/g, ( parameters.numClippingPlanes - parameters.numClipIntersection ) );

}

// Resolve Includes

const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;

function resolveIncludes( string ) {

	return string.replace( includePattern, includeReplacer );

}

function includeReplacer( match, include ) {

	const string = ShaderChunk[ include ];

	if ( string === undefined ) {

		throw new Error( 'Can not resolve #include <' + include + '>' );

	}

	return resolveIncludes( string );

}

// Unroll Loops

const deprecatedUnrollLoopPattern = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function unrollLoops( string ) {

	return string
		.replace( unrollLoopPattern, loopReplacer )
		.replace( deprecatedUnrollLoopPattern, deprecatedLoopReplacer );

}

function deprecatedLoopReplacer( match, start, end, snippet ) {

	console.warn( 'WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.' );
	return loopReplacer( match, start, end, snippet );

}

function loopReplacer( match, start, end, snippet ) {

	let string = '';

	for ( let i = parseInt( start ); i < parseInt( end ); i ++ ) {

		string += snippet
			.replace( /\[\s*i\s*\]/g, '[ ' + i + ' ]' )
			.replace( /UNROLLED_LOOP_INDEX/g, i );

	}

	return string;

}

//

function generatePrecision( parameters ) {

	let precisionstring = "precision " + parameters.precision + " float;\nprecision " + parameters.precision + " int;";

	if ( parameters.precision === "highp" ) {

		precisionstring += "\n#define HIGH_PRECISION";

	} else if ( parameters.precision === "mediump" ) {

		precisionstring += "\n#define MEDIUM_PRECISION";

	} else if ( parameters.precision === "lowp" ) {

		precisionstring += "\n#define LOW_PRECISION";

	}

	return precisionstring;

}

function generateShadowMapTypeDefine( parameters ) {

	let shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC';

	if ( parameters.shadowMapType === PCFShadowMap ) {

		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF';

	} else if ( parameters.shadowMapType === PCFSoftShadowMap ) {

		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT';

	} else if ( parameters.shadowMapType === VSMShadowMap ) {

		shadowMapTypeDefine = 'SHADOWMAP_TYPE_VSM';

	}

	return shadowMapTypeDefine;

}

function generateEnvMapTypeDefine( parameters ) {

	let envMapTypeDefine = 'ENVMAP_TYPE_CUBE';

	if ( parameters.envMap ) {

		switch ( parameters.envMapMode ) {

			case CubeReflectionMapping:
			case CubeRefractionMapping:
				envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
				break;

			case CubeUVReflectionMapping:
			case CubeUVRefractionMapping:
				envMapTypeDefine = 'ENVMAP_TYPE_CUBE_UV';
				break;

		}

	}

	return envMapTypeDefine;

}

function generateEnvMapModeDefine( parameters ) {

	let envMapModeDefine = 'ENVMAP_MODE_REFLECTION';

	if ( parameters.envMap ) {

		switch ( parameters.envMapMode ) {

			case CubeRefractionMapping:
			case CubeUVRefractionMapping:

				envMapModeDefine = 'ENVMAP_MODE_REFRACTION';
				break;

		}

	}

	return envMapModeDefine;

}

function generateEnvMapBlendingDefine( parameters ) {

	let envMapBlendingDefine = 'ENVMAP_BLENDING_NONE';

	if ( parameters.envMap ) {

		switch ( parameters.combine ) {

			case MultiplyOperation:
				envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';
				break;

			case MixOperation:
				envMapBlendingDefine = 'ENVMAP_BLENDING_MIX';
				break;

			case AddOperation:
				envMapBlendingDefine = 'ENVMAP_BLENDING_ADD';
				break;

		}

	}

	return envMapBlendingDefine;

}

function WebGLProgram( renderer, cacheKey, parameters, bindingStates ) {

	const gl = renderer.getContext();

	const defines = parameters.defines;

	let vertexShader = parameters.vertexShader;
	let fragmentShader = parameters.fragmentShader;

	const shadowMapTypeDefine = generateShadowMapTypeDefine( parameters );
	const envMapTypeDefine = generateEnvMapTypeDefine( parameters );
	const envMapModeDefine = generateEnvMapModeDefine( parameters );
	const envMapBlendingDefine = generateEnvMapBlendingDefine( parameters );


	const gammaFactorDefine = ( renderer.gammaFactor > 0 ) ? renderer.gammaFactor : 1.0;

	const customExtensions = parameters.isWebGL2 ? '' : generateExtensions( parameters );

	const customDefines = generateDefines( defines );

	const program = gl.createProgram();

	let prefixVertex, prefixFragment;
	let versionString = parameters.glslVersion ? '#version ' + parameters.glslVersion + "\n" : '';

	if ( parameters.isRawShaderMaterial ) {

		prefixVertex = [

			customDefines

		].filter( filterEmptyLine ).join( '\n' );

		if ( prefixVertex.length > 0 ) {

			prefixVertex += '\n';

		}

		prefixFragment = [

			customExtensions,
			customDefines

		].filter( filterEmptyLine ).join( '\n' );

		if ( prefixFragment.length > 0 ) {

			prefixFragment += '\n';

		}

	} else {

		prefixVertex = [

			generatePrecision( parameters ),

			'#define SHADER_NAME ' + parameters.shaderName,

			customDefines,

			parameters.instancing ? '#define USE_INSTANCING' : '',
			parameters.instancingColor ? '#define USE_INSTANCING_COLOR' : '',

			parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',

			'#define GAMMA_FACTOR ' + gammaFactorDefine,

			'#define MAX_BONES ' + parameters.maxBones,
			( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
			( parameters.useFog && parameters.fogExp2 ) ? '#define FOG_EXP2' : '',

			parameters.map ? '#define USE_MAP' : '',
			parameters.envMap ? '#define USE_ENVMAP' : '',
			parameters.envMap ? '#define ' + envMapModeDefine : '',
			parameters.lightMap ? '#define USE_LIGHTMAP' : '',
			parameters.aoMap ? '#define USE_AOMAP' : '',
			parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
			parameters.bumpMap ? '#define USE_BUMPMAP' : '',
			parameters.normalMap ? '#define USE_NORMALMAP' : '',
			( parameters.normalMap && parameters.objectSpaceNormalMap ) ? '#define OBJECTSPACE_NORMALMAP' : '',
			( parameters.normalMap && parameters.tangentSpaceNormalMap ) ? '#define TANGENTSPACE_NORMALMAP' : '',

			parameters.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
			parameters.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
			parameters.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
			parameters.displacementMap && parameters.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
			parameters.specularMap ? '#define USE_SPECULARMAP' : '',
			parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
			parameters.metalnessMap ? '#define USE_METALNESSMAP' : '',
			parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
			parameters.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',

			parameters.vertexTangents ? '#define USE_TANGENT' : '',
			parameters.vertexColors ? '#define USE_COLOR' : '',
			parameters.vertexUvs ? '#define USE_UV' : '',
			parameters.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',

			parameters.flatShading ? '#define FLAT_SHADED' : '',

			parameters.skinning ? '#define USE_SKINNING' : '',
			parameters.useVertexTexture ? '#define BONE_TEXTURE' : '',

			parameters.morphTargets ? '#define USE_MORPHTARGETS' : '',
			parameters.morphNormals && parameters.flatShading === false ? '#define USE_MORPHNORMALS' : '',
			parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
			parameters.flipSided ? '#define FLIP_SIDED' : '',

			parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
			parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',

			parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',

			parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
			( parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ) ? '#define USE_LOGDEPTHBUF_EXT' : '',

			'uniform mat4 modelMatrix;',
			'uniform mat4 modelViewMatrix;',
			'uniform mat4 projectionMatrix;',
			'uniform mat4 viewMatrix;',
			'uniform mat3 normalMatrix;',
			'uniform vec3 cameraPosition;',
			'uniform bool isOrthographic;',

			'#ifdef USE_INSTANCING',

			'	attribute mat4 instanceMatrix;',

			'#endif',

			'#ifdef USE_INSTANCING_COLOR',

			'	attribute vec3 instanceColor;',

			'#endif',

			'attribute vec3 position;',
			'attribute vec3 normal;',
			'attribute vec2 uv;',

			'#ifdef USE_TANGENT',

			'	attribute vec4 tangent;',

			'#endif',

			'#ifdef USE_COLOR',

			'	attribute vec3 color;',

			'#endif',

			'#ifdef USE_MORPHTARGETS',

			'	attribute vec3 morphTarget0;',
			'	attribute vec3 morphTarget1;',
			'	attribute vec3 morphTarget2;',
			'	attribute vec3 morphTarget3;',

			'	#ifdef USE_MORPHNORMALS',

			'		attribute vec3 morphNormal0;',
			'		attribute vec3 morphNormal1;',
			'		attribute vec3 morphNormal2;',
			'		attribute vec3 morphNormal3;',

			'	#else',

			'		attribute vec3 morphTarget4;',
			'		attribute vec3 morphTarget5;',
			'		attribute vec3 morphTarget6;',
			'		attribute vec3 morphTarget7;',

			'	#endif',

			'#endif',

			'#ifdef USE_SKINNING',

			'	attribute vec4 skinIndex;',
			'	attribute vec4 skinWeight;',

			'#endif',

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

		prefixFragment = [

			customExtensions,

			generatePrecision( parameters ),

			'#define SHADER_NAME ' + parameters.shaderName,

			customDefines,

			parameters.alphaTest ? '#define ALPHATEST ' + parameters.alphaTest + ( parameters.alphaTest % 1 ? '' : '.0' ) : '', // add '.0' if integer

			'#define GAMMA_FACTOR ' + gammaFactorDefine,

			( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
			( parameters.useFog && parameters.fogExp2 ) ? '#define FOG_EXP2' : '',

			parameters.map ? '#define USE_MAP' : '',
			parameters.matcap ? '#define USE_MATCAP' : '',
			parameters.envMap ? '#define USE_ENVMAP' : '',
			parameters.envMap ? '#define ' + envMapTypeDefine : '',
			parameters.envMap ? '#define ' + envMapModeDefine : '',
			parameters.envMap ? '#define ' + envMapBlendingDefine : '',
			parameters.lightMap ? '#define USE_LIGHTMAP' : '',
			parameters.aoMap ? '#define USE_AOMAP' : '',
			parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
			parameters.bumpMap ? '#define USE_BUMPMAP' : '',
			parameters.normalMap ? '#define USE_NORMALMAP' : '',
			( parameters.normalMap && parameters.objectSpaceNormalMap ) ? '#define OBJECTSPACE_NORMALMAP' : '',
			( parameters.normalMap && parameters.tangentSpaceNormalMap ) ? '#define TANGENTSPACE_NORMALMAP' : '',
			parameters.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
			parameters.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
			parameters.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
			parameters.specularMap ? '#define USE_SPECULARMAP' : '',
			parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
			parameters.metalnessMap ? '#define USE_METALNESSMAP' : '',
			parameters.alphaMap ? '#define USE_ALPHAMAP' : '',

			parameters.sheen ? '#define USE_SHEEN' : '',
			parameters.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',

			parameters.vertexTangents ? '#define USE_TANGENT' : '',
			parameters.vertexColors || parameters.instancingColor ? '#define USE_COLOR' : '',
			parameters.vertexUvs ? '#define USE_UV' : '',
			parameters.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',

			parameters.gradientMap ? '#define USE_GRADIENTMAP' : '',

			parameters.flatShading ? '#define FLAT_SHADED' : '',

			parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
			parameters.flipSided ? '#define FLIP_SIDED' : '',

			parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
			parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',

			parameters.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',

			parameters.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',

			parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
			( parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ) ? '#define USE_LOGDEPTHBUF_EXT' : '',

			( ( parameters.extensionShaderTextureLOD || parameters.envMap ) && parameters.rendererExtensionShaderTextureLod ) ? '#define TEXTURE_LOD_EXT' : '',

			'uniform mat4 viewMatrix;',
			'uniform vec3 cameraPosition;',
			'uniform bool isOrthographic;',

			( parameters.toneMapping !== NoToneMapping ) ? '#define TONE_MAPPING' : '',
			( parameters.toneMapping !== NoToneMapping ) ? ShaderChunk[ 'tonemapping_pars_fragment' ] : '', // this code is required here because it is used by the toneMapping() function defined below
			( parameters.toneMapping !== NoToneMapping ) ? getToneMappingFunction( 'toneMapping', parameters.toneMapping ) : '',

			parameters.dithering ? '#define DITHERING' : '',

			ShaderChunk[ 'encodings_pars_fragment' ], // this code is required here because it is used by the various encoding/decoding function defined below
			parameters.map ? getTexelDecodingFunction( 'mapTexelToLinear', parameters.mapEncoding ) : '',
			parameters.matcap ? getTexelDecodingFunction( 'matcapTexelToLinear', parameters.matcapEncoding ) : '',
			parameters.envMap ? getTexelDecodingFunction( 'envMapTexelToLinear', parameters.envMapEncoding ) : '',
			parameters.emissiveMap ? getTexelDecodingFunction( 'emissiveMapTexelToLinear', parameters.emissiveMapEncoding ) : '',
			parameters.lightMap ? getTexelDecodingFunction( 'lightMapTexelToLinear', parameters.lightMapEncoding ) : '',
			getTexelEncodingFunction( 'linearToOutputTexel', parameters.outputEncoding ),

			parameters.depthPacking ? '#define DEPTH_PACKING ' + parameters.depthPacking : '',

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

	}

	vertexShader = resolveIncludes( vertexShader );
	vertexShader = replaceLightNums( vertexShader, parameters );
	vertexShader = replaceClippingPlaneNums( vertexShader, parameters );

	fragmentShader = resolveIncludes( fragmentShader );
	fragmentShader = replaceLightNums( fragmentShader, parameters );
	fragmentShader = replaceClippingPlaneNums( fragmentShader, parameters );

	vertexShader = unrollLoops( vertexShader );
	fragmentShader = unrollLoops( fragmentShader );

	if ( parameters.isWebGL2 && parameters.isRawShaderMaterial !== true ) {

		// GLSL 3.0 conversion for built-in materials and ShaderMaterial

		versionString = '#version 300 es\n';

		prefixVertex = [
			'#define attribute in',
			'#define varying out',
			'#define texture2D texture'
		].join( '\n' ) + '\n' + prefixVertex;

		prefixFragment = [
			'#define varying in',
			( parameters.glslVersion === GLSL3 ) ? '' : 'out highp vec4 pc_fragColor;',
			( parameters.glslVersion === GLSL3 ) ? '' : '#define gl_FragColor pc_fragColor',
			'#define gl_FragDepthEXT gl_FragDepth',
			'#define texture2D texture',
			'#define textureCube texture',
			'#define texture2DProj textureProj',
			'#define texture2DLodEXT textureLod',
			'#define texture2DProjLodEXT textureProjLod',
			'#define textureCubeLodEXT textureLod',
			'#define texture2DGradEXT textureGrad',
			'#define texture2DProjGradEXT textureProjGrad',
			'#define textureCubeGradEXT textureGrad'
		].join( '\n' ) + '\n' + prefixFragment;

	}

	const vertexGlsl = versionString + prefixVertex + vertexShader;
	const fragmentGlsl = versionString + prefixFragment + fragmentShader;

	// console.log( '*VERTEX*', vertexGlsl );
	// console.log( '*FRAGMENT*', fragmentGlsl );

	const glVertexShader = WebGLShader( gl, gl.VERTEX_SHADER, vertexGlsl );
	const glFragmentShader = WebGLShader( gl, gl.FRAGMENT_SHADER, fragmentGlsl );

	gl.attachShader( program, glVertexShader );
	gl.attachShader( program, glFragmentShader );

	// Force a particular attribute to index 0.

	if ( parameters.index0AttributeName !== undefined ) {

		gl.bindAttribLocation( program, 0, parameters.index0AttributeName );

	} else if ( parameters.morphTargets === true ) {

		// programs with morphTargets displace position out of attribute 0
		gl.bindAttribLocation( program, 0, 'position' );

	}

	gl.linkProgram( program );

	// check for link errors
	if ( renderer.debug.checkShaderErrors ) {

		const programLog = gl.getProgramInfoLog( program ).trim();
		const vertexLog = gl.getShaderInfoLog( glVertexShader ).trim();
		const fragmentLog = gl.getShaderInfoLog( glFragmentShader ).trim();

		let runnable = true;
		let haveDiagnostics = true;

		if ( gl.getProgramParameter( program, gl.LINK_STATUS ) === false ) {

			runnable = false;

			const vertexErrors = getShaderErrors( gl, glVertexShader, 'vertex' );
			const fragmentErrors = getShaderErrors( gl, glFragmentShader, 'fragment' );

			console.error( 'THREE.WebGLProgram: shader error: ', gl.getError(), 'gl.VALIDATE_STATUS', gl.getProgramParameter( program, gl.VALIDATE_STATUS ), 'gl.getProgramInfoLog', programLog, vertexErrors, fragmentErrors );

		} else if ( programLog !== '' ) {

			console.warn( 'THREE.WebGLProgram: gl.getProgramInfoLog()', programLog );

		} else if ( vertexLog === '' || fragmentLog === '' ) {

			haveDiagnostics = false;

		}

		if ( haveDiagnostics ) {

			this.diagnostics = {

				runnable: runnable,

				programLog: programLog,

				vertexShader: {

					log: vertexLog,
					prefix: prefixVertex

				},

				fragmentShader: {

					log: fragmentLog,
					prefix: prefixFragment

				}

			};

		}

	}

	// Clean up

	// Crashes in iOS9 and iOS10. #18402
	// gl.detachShader( program, glVertexShader );
	// gl.detachShader( program, glFragmentShader );

	gl.deleteShader( glVertexShader );
	gl.deleteShader( glFragmentShader );

	// set up caching for uniform locations

	let cachedUniforms;

	this.getUniforms = function () {

		if ( cachedUniforms === undefined ) {

			cachedUniforms = new WebGLUniforms( gl, program );

		}

		return cachedUniforms;

	};

	// set up caching for attribute locations

	let cachedAttributes;

	this.getAttributes = function () {

		if ( cachedAttributes === undefined ) {

			cachedAttributes = fetchAttributeLocations( gl, program );

		}

		return cachedAttributes;

	};

	// free resource

	this.destroy = function () {

		bindingStates.releaseStatesOfProgram( this );

		gl.deleteProgram( program );
		this.program = undefined;

	};

	//

	this.name = parameters.shaderName;
	this.id = programIdCount ++;
	this.cacheKey = cacheKey;
	this.usedTimes = 1;
	this.program = program;
	this.vertexShader = glVertexShader;
	this.fragmentShader = glFragmentShader;

	return this;

}

function WebGLPrograms( renderer, cubemaps, extensions, capabilities, bindingStates, clipping ) {

	const programs = [];

	const isWebGL2 = capabilities.isWebGL2;
	const logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
	const floatVertexTextures = capabilities.floatVertexTextures;
	const maxVertexUniforms = capabilities.maxVertexUniforms;
	const vertexTextures = capabilities.vertexTextures;

	let precision = capabilities.precision;

	const shaderIDs = {
		MeshDepthMaterial: 'depth',
		MeshDistanceMaterial: 'distanceRGBA',
		MeshNormalMaterial: 'normal',
		MeshBasicMaterial: 'basic',
		MeshLambertMaterial: 'lambert',
		MeshPhongMaterial: 'phong',
		MeshToonMaterial: 'toon',
		MeshStandardMaterial: 'physical',
		MeshPhysicalMaterial: 'physical',
		MeshMatcapMaterial: 'matcap',
		LineBasicMaterial: 'basic',
		LineDashedMaterial: 'dashed',
		PointsMaterial: 'points',
		ShadowMaterial: 'shadow',
		SpriteMaterial: 'sprite'
	};

	const parameterNames = [
		"precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor",
		"map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV",
		"lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap",
		"roughnessMap", "metalnessMap", "gradientMap",
		"alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2",
		"flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning",
		"maxBones", "useVertexTexture", "morphTargets", "morphNormals",
		"maxMorphTargets", "maxMorphNormals", "premultipliedAlpha",
		"numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights",
		"numDirLightShadows", "numPointLightShadows", "numSpotLightShadows",
		"shadowMapEnabled", "shadowMapType", "toneMapping", 'physicallyCorrectLights',
		"alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering",
		"sheen", "transmissionMap"
	];

	function getMaxBones( object ) {

		const skeleton = object.skeleton;
		const bones = skeleton.bones;

		if ( floatVertexTextures ) {

			return 1024;

		} else {

			// default for when object is not specified
			// ( for example when prebuilding shader to be used with multiple objects )
			//
			//  - leave some extra space for other uniforms
			//  - limit here is ANGLE's 254 max uniform vectors
			//    (up to 54 should be safe)

			const nVertexUniforms = maxVertexUniforms;
			const nVertexMatrices = Math.floor( ( nVertexUniforms - 20 ) / 4 );

			const maxBones = Math.min( nVertexMatrices, bones.length );

			if ( maxBones < bones.length ) {

				console.warn( 'THREE.WebGLRenderer: Skeleton has ' + bones.length + ' bones. This GPU supports ' + maxBones + '.' );
				return 0;

			}

			return maxBones;

		}

	}

	function getTextureEncodingFromMap( map ) {

		let encoding;

		if ( ! map ) {

			encoding = LinearEncoding;

		} else if ( map.isTexture ) {

			encoding = map.encoding;

		} else if ( map.isWebGLRenderTarget ) {

			console.warn( "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead." );
			encoding = map.texture.encoding;

		}

		return encoding;

	}

	function getParameters( material, lights, shadows, scene, object ) {

		const fog = scene.fog;
		const environment = material.isMeshStandardMaterial ? scene.environment : null;

		const envMap = cubemaps.get( material.envMap || environment );

		const shaderID = shaderIDs[ material.type ];

		// heuristics to create shader parameters according to lights in the scene
		// (not to blow over maxLights budget)

		const maxBones = object.isSkinnedMesh ? getMaxBones( object ) : 0;

		if ( material.precision !== null ) {

			precision = capabilities.getMaxPrecision( material.precision );

			if ( precision !== material.precision ) {

				console.warn( 'THREE.WebGLProgram.getParameters:', material.precision, 'not supported, using', precision, 'instead.' );

			}

		}

		let vertexShader, fragmentShader;

		if ( shaderID ) {

			const shader = ShaderLib[ shaderID ];

			vertexShader = shader.vertexShader;
			fragmentShader = shader.fragmentShader;

		} else {

			vertexShader = material.vertexShader;
			fragmentShader = material.fragmentShader;

		}

		const currentRenderTarget = renderer.getRenderTarget();

		const parameters = {

			isWebGL2: isWebGL2,

			shaderID: shaderID,
			shaderName: material.type,

			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			defines: material.defines,

			isRawShaderMaterial: material.isRawShaderMaterial === true,
			glslVersion: material.glslVersion,

			precision: precision,

			instancing: object.isInstancedMesh === true,
			instancingColor: object.isInstancedMesh === true && object.instanceColor !== null,

			supportsVertexTextures: vertexTextures,
			outputEncoding: ( currentRenderTarget !== null ) ? getTextureEncodingFromMap( currentRenderTarget.texture ) : renderer.outputEncoding,
			map: !! material.map,
			mapEncoding: getTextureEncodingFromMap( material.map ),
			matcap: !! material.matcap,
			matcapEncoding: getTextureEncodingFromMap( material.matcap ),
			envMap: !! envMap,
			envMapMode: envMap && envMap.mapping,
			envMapEncoding: getTextureEncodingFromMap( envMap ),
			envMapCubeUV: ( !! envMap ) && ( ( envMap.mapping === CubeUVReflectionMapping ) || ( envMap.mapping === CubeUVRefractionMapping ) ),
			lightMap: !! material.lightMap,
			lightMapEncoding: getTextureEncodingFromMap( material.lightMap ),
			aoMap: !! material.aoMap,
			emissiveMap: !! material.emissiveMap,
			emissiveMapEncoding: getTextureEncodingFromMap( material.emissiveMap ),
			bumpMap: !! material.bumpMap,
			normalMap: !! material.normalMap,
			objectSpaceNormalMap: material.normalMapType === ObjectSpaceNormalMap,
			tangentSpaceNormalMap: material.normalMapType === TangentSpaceNormalMap,
			clearcoatMap: !! material.clearcoatMap,
			clearcoatRoughnessMap: !! material.clearcoatRoughnessMap,
			clearcoatNormalMap: !! material.clearcoatNormalMap,
			displacementMap: !! material.displacementMap,
			roughnessMap: !! material.roughnessMap,
			metalnessMap: !! material.metalnessMap,
			specularMap: !! material.specularMap,
			alphaMap: !! material.alphaMap,

			gradientMap: !! material.gradientMap,

			sheen: !! material.sheen,

			transmissionMap: !! material.transmissionMap,

			combine: material.combine,

			vertexTangents: ( material.normalMap && material.vertexTangents ),
			vertexColors: material.vertexColors,
			vertexUvs: !! material.map || !! material.bumpMap || !! material.normalMap || !! material.specularMap || !! material.alphaMap || !! material.emissiveMap || !! material.roughnessMap || !! material.metalnessMap || !! material.clearcoatMap || !! material.clearcoatRoughnessMap || !! material.clearcoatNormalMap || !! material.displacementMap || !! material.transmissionMap,
			uvsVertexOnly: ! ( !! material.map || !! material.bumpMap || !! material.normalMap || !! material.specularMap || !! material.alphaMap || !! material.emissiveMap || !! material.roughnessMap || !! material.metalnessMap || !! material.clearcoatNormalMap || !! material.transmissionMap ) && !! material.displacementMap,

			fog: !! fog,
			useFog: material.fog,
			fogExp2: ( fog && fog.isFogExp2 ),

			flatShading: material.flatShading,

			sizeAttenuation: material.sizeAttenuation,
			logarithmicDepthBuffer: logarithmicDepthBuffer,

			skinning: material.skinning && maxBones > 0,
			maxBones: maxBones,
			useVertexTexture: floatVertexTextures,

			morphTargets: material.morphTargets,
			morphNormals: material.morphNormals,
			maxMorphTargets: renderer.maxMorphTargets,
			maxMorphNormals: renderer.maxMorphNormals,

			numDirLights: lights.directional.length,
			numPointLights: lights.point.length,
			numSpotLights: lights.spot.length,
			numRectAreaLights: lights.rectArea.length,
			numHemiLights: lights.hemi.length,

			numDirLightShadows: lights.directionalShadowMap.length,
			numPointLightShadows: lights.pointShadowMap.length,
			numSpotLightShadows: lights.spotShadowMap.length,

			numClippingPlanes: clipping.numPlanes,
			numClipIntersection: clipping.numIntersection,

			dithering: material.dithering,

			shadowMapEnabled: renderer.shadowMap.enabled && shadows.length > 0,
			shadowMapType: renderer.shadowMap.type,

			toneMapping: material.toneMapped ? renderer.toneMapping : NoToneMapping,
			physicallyCorrectLights: renderer.physicallyCorrectLights,

			premultipliedAlpha: material.premultipliedAlpha,

			alphaTest: material.alphaTest,
			doubleSided: material.side === DoubleSide,
			flipSided: material.side === BackSide,

			depthPacking: ( material.depthPacking !== undefined ) ? material.depthPacking : false,

			index0AttributeName: material.index0AttributeName,

			extensionDerivatives: material.extensions && material.extensions.derivatives,
			extensionFragDepth: material.extensions && material.extensions.fragDepth,
			extensionDrawBuffers: material.extensions && material.extensions.drawBuffers,
			extensionShaderTextureLOD: material.extensions && material.extensions.shaderTextureLOD,

			rendererExtensionFragDepth: isWebGL2 || extensions.has( 'EXT_frag_depth' ),
			rendererExtensionDrawBuffers: isWebGL2 || extensions.has( 'WEBGL_draw_buffers' ),
			rendererExtensionShaderTextureLod: isWebGL2 || extensions.has( 'EXT_shader_texture_lod' ),

			customProgramCacheKey: material.customProgramCacheKey()

		};

		return parameters;

	}

	function getProgramCacheKey( parameters ) {

		const array = [];

		if ( parameters.shaderID ) {

			array.push( parameters.shaderID );

		} else {

			array.push( parameters.fragmentShader );
			array.push( parameters.vertexShader );

		}

		if ( parameters.defines !== undefined ) {

			for ( const name in parameters.defines ) {

				array.push( name );
				array.push( parameters.defines[ name ] );

			}

		}

		if ( parameters.isRawShaderMaterial === false ) {

			for ( let i = 0; i < parameterNames.length; i ++ ) {

				array.push( parameters[ parameterNames[ i ] ] );

			}

			array.push( renderer.outputEncoding );
			array.push( renderer.gammaFactor );

		}

		array.push( parameters.customProgramCacheKey );

		return array.join();

	}

	function getUniforms( material ) {

		const shaderID = shaderIDs[ material.type ];
		let uniforms;

		if ( shaderID ) {

			const shader = ShaderLib[ shaderID ];
			uniforms = UniformsUtils.clone( shader.uniforms );

		} else {

			uniforms = material.uniforms;

		}

		return uniforms;

	}

	function acquireProgram( parameters, cacheKey ) {

		let program;

		// Check if code has been already compiled
		for ( let p = 0, pl = programs.length; p < pl; p ++ ) {

			const preexistingProgram = programs[ p ];

			if ( preexistingProgram.cacheKey === cacheKey ) {

				program = preexistingProgram;
				++ program.usedTimes;

				break;

			}

		}

		if ( program === undefined ) {

			program = new WebGLProgram( renderer, cacheKey, parameters, bindingStates );
			programs.push( program );

		}

		return program;

	}

	function releaseProgram( program ) {

		if ( -- program.usedTimes === 0 ) {

			// Remove from unordered set
			const i = programs.indexOf( program );
			programs[ i ] = programs[ programs.length - 1 ];
			programs.pop();

			// Free WebGL resources
			program.destroy();

		}

	}

	return {
		getParameters: getParameters,
		getProgramCacheKey: getProgramCacheKey,
		getUniforms: getUniforms,
		acquireProgram: acquireProgram,
		releaseProgram: releaseProgram,
		// Exposed for resource monitoring & error feedback via renderer.info:
		programs: programs
	};

}

function WebGLProperties() {

	let properties = new WeakMap();

	function get( object ) {

		let map = properties.get( object );

		if ( map === undefined ) {

			map = {};
			properties.set( object, map );

		}

		return map;

	}

	function remove( object ) {

		properties.delete( object );

	}

	function update( object, key, value ) {

		properties.get( object )[ key ] = value;

	}

	function dispose() {

		properties = new WeakMap();

	}

	return {
		get: get,
		remove: remove,
		update: update,
		dispose: dispose
	};

}

function painterSortStable( a, b ) {

	if ( a.groupOrder !== b.groupOrder ) {

		return a.groupOrder - b.groupOrder;

	} else if ( a.renderOrder !== b.renderOrder ) {

		return a.renderOrder - b.renderOrder;

	} else if ( a.program !== b.program ) {

		return a.program.id - b.program.id;

	} else if ( a.material.id !== b.material.id ) {

		return a.material.id - b.material.id;

	} else if ( a.z !== b.z ) {

		return a.z - b.z;

	} else {

		return a.id - b.id;

	}

}

function reversePainterSortStable( a, b ) {

	if ( a.groupOrder !== b.groupOrder ) {

		return a.groupOrder - b.groupOrder;

	} else if ( a.renderOrder !== b.renderOrder ) {

		return a.renderOrder - b.renderOrder;

	} else if ( a.z !== b.z ) {

		return b.z - a.z;

	} else {

		return a.id - b.id;

	}

}


function WebGLRenderList( properties ) {

	const renderItems = [];
	let renderItemsIndex = 0;

	const opaque = [];
	const transparent = [];

	const defaultProgram = { id: - 1 };

	function init() {

		renderItemsIndex = 0;

		opaque.length = 0;
		transparent.length = 0;

	}

	function getNextRenderItem( object, geometry, material, groupOrder, z, group ) {

		let renderItem = renderItems[ renderItemsIndex ];
		const materialProperties = properties.get( material );

		if ( renderItem === undefined ) {

			renderItem = {
				id: object.id,
				object: object,
				geometry: geometry,
				material: material,
				program: materialProperties.program || defaultProgram,
				groupOrder: groupOrder,
				renderOrder: object.renderOrder,
				z: z,
				group: group
			};

			renderItems[ renderItemsIndex ] = renderItem;

		} else {

			renderItem.id = object.id;
			renderItem.object = object;
			renderItem.geometry = geometry;
			renderItem.material = material;
			renderItem.program = materialProperties.program || defaultProgram;
			renderItem.groupOrder = groupOrder;
			renderItem.renderOrder = object.renderOrder;
			renderItem.z = z;
			renderItem.group = group;

		}

		renderItemsIndex ++;

		return renderItem;

	}

	function push( object, geometry, material, groupOrder, z, group ) {

		const renderItem = getNextRenderItem( object, geometry, material, groupOrder, z, group );

		( material.transparent === true ? transparent : opaque ).push( renderItem );

	}

	function unshift( object, geometry, material, groupOrder, z, group ) {

		const renderItem = getNextRenderItem( object, geometry, material, groupOrder, z, group );

		( material.transparent === true ? transparent : opaque ).unshift( renderItem );

	}

	function sort( customOpaqueSort, customTransparentSort ) {

		if ( opaque.length > 1 ) opaque.sort( customOpaqueSort || painterSortStable );
		if ( transparent.length > 1 ) transparent.sort( customTransparentSort || reversePainterSortStable );

	}

	function finish() {

		// Clear references from inactive renderItems in the list

		for ( let i = renderItemsIndex, il = renderItems.length; i < il; i ++ ) {

			const renderItem = renderItems[ i ];

			if ( renderItem.id === null ) break;

			renderItem.id = null;
			renderItem.object = null;
			renderItem.geometry = null;
			renderItem.material = null;
			renderItem.program = null;
			renderItem.group = null;

		}

	}

	return {

		opaque: opaque,
		transparent: transparent,

		init: init,
		push: push,
		unshift: unshift,
		finish: finish,

		sort: sort
	};

}

function WebGLRenderLists( properties ) {

	let lists = new WeakMap();

	function get( scene, camera ) {

		const cameras = lists.get( scene );
		let list;

		if ( cameras === undefined ) {

			list = new WebGLRenderList( properties );
			lists.set( scene, new WeakMap() );
			lists.get( scene ).set( camera, list );

		} else {

			list = cameras.get( camera );
			if ( list === undefined ) {

				list = new WebGLRenderList( properties );
				cameras.set( camera, list );

			}

		}

		return list;

	}

	function dispose() {

		lists = new WeakMap();

	}

	return {
		get: get,
		dispose: dispose
	};

}

function UniformsCache() {

	const lights = {};

	return {

		get: function ( light ) {

			if ( lights[ light.id ] !== undefined ) {

				return lights[ light.id ];

			}

			let uniforms;

			switch ( light.type ) {

				case 'DirectionalLight':
					uniforms = {
						direction: new Vector3(),
						color: new Color()
					};
					break;

				case 'SpotLight':
					uniforms = {
						position: new Vector3(),
						direction: new Vector3(),
						color: new Color(),
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0
					};
					break;

				case 'PointLight':
					uniforms = {
						position: new Vector3(),
						color: new Color(),
						distance: 0,
						decay: 0
					};
					break;

				case 'HemisphereLight':
					uniforms = {
						direction: new Vector3(),
						skyColor: new Color(),
						groundColor: new Color()
					};
					break;

				case 'RectAreaLight':
					uniforms = {
						color: new Color(),
						position: new Vector3(),
						halfWidth: new Vector3(),
						halfHeight: new Vector3()
					};
					break;

			}

			lights[ light.id ] = uniforms;

			return uniforms;

		}

	};

}

function ShadowUniformsCache() {

	const lights = {};

	return {

		get: function ( light ) {

			if ( lights[ light.id ] !== undefined ) {

				return lights[ light.id ];

			}

			let uniforms;

			switch ( light.type ) {

				case 'DirectionalLight':
					uniforms = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new Vector2()
					};
					break;

				case 'SpotLight':
					uniforms = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new Vector2()
					};
					break;

				case 'PointLight':
					uniforms = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new Vector2(),
						shadowCameraNear: 1,
						shadowCameraFar: 1000
					};
					break;

				// TODO (abelnation): set RectAreaLight shadow uniforms

			}

			lights[ light.id ] = uniforms;

			return uniforms;

		}

	};

}



let nextVersion = 0;

function shadowCastingLightsFirst( lightA, lightB ) {

	return ( lightB.castShadow ? 1 : 0 ) - ( lightA.castShadow ? 1 : 0 );

}

function WebGLLights( extensions, capabilities ) {

	const cache = new UniformsCache();

	const shadowCache = ShadowUniformsCache();

	const state = {

		version: 0,

		hash: {
			directionalLength: - 1,
			pointLength: - 1,
			spotLength: - 1,
			rectAreaLength: - 1,
			hemiLength: - 1,

			numDirectionalShadows: - 1,
			numPointShadows: - 1,
			numSpotShadows: - 1
		},

		ambient: [ 0, 0, 0 ],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotShadow: [],
		spotShadowMap: [],
		spotShadowMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: []

	};

	for ( let i = 0; i < 9; i ++ ) state.probe.push( new Vector3() );

	const vector3 = new Vector3();
	const matrix4 = new Matrix4();
	const matrix42 = new Matrix4();

	function setup( lights, shadows, camera ) {

		let r = 0, g = 0, b = 0;

		for ( let i = 0; i < 9; i ++ ) state.probe[ i ].set( 0, 0, 0 );

		let directionalLength = 0;
		let pointLength = 0;
		let spotLength = 0;
		let rectAreaLength = 0;
		let hemiLength = 0;

		let numDirectionalShadows = 0;
		let numPointShadows = 0;
		let numSpotShadows = 0;

		const viewMatrix = camera.matrixWorldInverse;

		lights.sort( shadowCastingLightsFirst );

		for ( let i = 0, l = lights.length; i < l; i ++ ) {

			const light = lights[ i ];

			const color = light.color;
			const intensity = light.intensity;
			const distance = light.distance;

			const shadowMap = ( light.shadow && light.shadow.map ) ? light.shadow.map.texture : null;

			if ( light.isAmbientLight ) {

				r += color.r * intensity;
				g += color.g * intensity;
				b += color.b * intensity;

			} else if ( light.isLightProbe ) {

				for ( let j = 0; j < 9; j ++ ) {

					state.probe[ j ].addScaledVector( light.sh.coefficients[ j ], intensity );

				}

			} else if ( light.isDirectionalLight ) {

				const uniforms = cache.get( light );

				uniforms.color.copy( light.color ).multiplyScalar( light.intensity );
				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				vector3.setFromMatrixPosition( light.target.matrixWorld );
				uniforms.direction.sub( vector3 );
				uniforms.direction.transformDirection( viewMatrix );

				if ( light.castShadow ) {

					const shadow = light.shadow;

					const shadowUniforms = shadowCache.get( light );

					shadowUniforms.shadowBias = shadow.bias;
					shadowUniforms.shadowNormalBias = shadow.normalBias;
					shadowUniforms.shadowRadius = shadow.radius;
					shadowUniforms.shadowMapSize = shadow.mapSize;

					state.directionalShadow[ directionalLength ] = shadowUniforms;
					state.directionalShadowMap[ directionalLength ] = shadowMap;
					state.directionalShadowMatrix[ directionalLength ] = light.shadow.matrix;

					numDirectionalShadows ++;

				}

				state.directional[ directionalLength ] = uniforms;

				directionalLength ++;

			} else if ( light.isSpotLight ) {

				const uniforms = cache.get( light );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				uniforms.color.copy( color ).multiplyScalar( intensity );
				uniforms.distance = distance;

				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				vector3.setFromMatrixPosition( light.target.matrixWorld );
				uniforms.direction.sub( vector3 );
				uniforms.direction.transformDirection( viewMatrix );

				uniforms.coneCos = Math.cos( light.angle );
				uniforms.penumbraCos = Math.cos( light.angle * ( 1 - light.penumbra ) );
				uniforms.decay = light.decay;

				if ( light.castShadow ) {

					const shadow = light.shadow;

					const shadowUniforms = shadowCache.get( light );

					shadowUniforms.shadowBias = shadow.bias;
					shadowUniforms.shadowNormalBias = shadow.normalBias;
					shadowUniforms.shadowRadius = shadow.radius;
					shadowUniforms.shadowMapSize = shadow.mapSize;

					state.spotShadow[ spotLength ] = shadowUniforms;
					state.spotShadowMap[ spotLength ] = shadowMap;
					state.spotShadowMatrix[ spotLength ] = light.shadow.matrix;

					numSpotShadows ++;

				}

				state.spot[ spotLength ] = uniforms;

				spotLength ++;

			} else if ( light.isRectAreaLight ) {

				const uniforms = cache.get( light );

				// (a) intensity is the total visible light emitted
				//uniforms.color.copy( color ).multiplyScalar( intensity / ( light.width * light.height * Math.PI ) );

				// (b) intensity is the brightness of the light
				uniforms.color.copy( color ).multiplyScalar( intensity );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				// extract local rotation of light to derive width/height half vectors
				matrix42.identity();
				matrix4.copy( light.matrixWorld );
				matrix4.premultiply( viewMatrix );
				matrix42.extractRotation( matrix4 );

				uniforms.halfWidth.set( light.width * 0.5, 0.0, 0.0 );
				uniforms.halfHeight.set( 0.0, light.height * 0.5, 0.0 );

				uniforms.halfWidth.applyMatrix4( matrix42 );
				uniforms.halfHeight.applyMatrix4( matrix42 );

				// TODO (abelnation): RectAreaLight distance?
				// uniforms.distance = distance;

				state.rectArea[ rectAreaLength ] = uniforms;

				rectAreaLength ++;

			} else if ( light.isPointLight ) {

				const uniforms = cache.get( light );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				uniforms.color.copy( light.color ).multiplyScalar( light.intensity );
				uniforms.distance = light.distance;
				uniforms.decay = light.decay;

				if ( light.castShadow ) {

					const shadow = light.shadow;

					const shadowUniforms = shadowCache.get( light );

					shadowUniforms.shadowBias = shadow.bias;
					shadowUniforms.shadowNormalBias = shadow.normalBias;
					shadowUniforms.shadowRadius = shadow.radius;
					shadowUniforms.shadowMapSize = shadow.mapSize;
					shadowUniforms.shadowCameraNear = shadow.camera.near;
					shadowUniforms.shadowCameraFar = shadow.camera.far;

					state.pointShadow[ pointLength ] = shadowUniforms;
					state.pointShadowMap[ pointLength ] = shadowMap;
					state.pointShadowMatrix[ pointLength ] = light.shadow.matrix;

					numPointShadows ++;

				}

				state.point[ pointLength ] = uniforms;

				pointLength ++;

			} else if ( light.isHemisphereLight ) {

				const uniforms = cache.get( light );

				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				uniforms.direction.transformDirection( viewMatrix );
				uniforms.direction.normalize();

				uniforms.skyColor.copy( light.color ).multiplyScalar( intensity );
				uniforms.groundColor.copy( light.groundColor ).multiplyScalar( intensity );

				state.hemi[ hemiLength ] = uniforms;

				hemiLength ++;

			}

		}

		if ( rectAreaLength > 0 ) {

			if ( capabilities.isWebGL2 ) {

				// WebGL 2

				state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
				state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;

			} else {

				// WebGL 1

				if ( extensions.has( 'OES_texture_float_linear' ) === true ) {

					state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
					state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;

				} else if ( extensions.has( 'OES_texture_half_float_linear' ) === true ) {

					state.rectAreaLTC1 = UniformsLib.LTC_HALF_1;
					state.rectAreaLTC2 = UniformsLib.LTC_HALF_2;

				} else {

					console.error( 'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.' );

				}

			}

		}

		state.ambient[ 0 ] = r;
		state.ambient[ 1 ] = g;
		state.ambient[ 2 ] = b;

		const hash = state.hash;

		if ( hash.directionalLength !== directionalLength ||
			hash.pointLength !== pointLength ||
			hash.spotLength !== spotLength ||
			hash.rectAreaLength !== rectAreaLength ||
			hash.hemiLength !== hemiLength ||
			hash.numDirectionalShadows !== numDirectionalShadows ||
			hash.numPointShadows !== numPointShadows ||
			hash.numSpotShadows !== numSpotShadows ) {

			state.directional.length = directionalLength;
			state.spot.length = spotLength;
			state.rectArea.length = rectAreaLength;
			state.point.length = pointLength;
			state.hemi.length = hemiLength;

			state.directionalShadow.length = numDirectionalShadows;
			state.directionalShadowMap.length = numDirectionalShadows;
			state.pointShadow.length = numPointShadows;
			state.pointShadowMap.length = numPointShadows;
			state.spotShadow.length = numSpotShadows;
			state.spotShadowMap.length = numSpotShadows;
			state.directionalShadowMatrix.length = numDirectionalShadows;
			state.pointShadowMatrix.length = numPointShadows;
			state.spotShadowMatrix.length = numSpotShadows;

			hash.directionalLength = directionalLength;
			hash.pointLength = pointLength;
			hash.spotLength = spotLength;
			hash.rectAreaLength = rectAreaLength;
			hash.hemiLength = hemiLength;

			hash.numDirectionalShadows = numDirectionalShadows;
			hash.numPointShadows = numPointShadows;
			hash.numSpotShadows = numSpotShadows;

			state.version = nextVersion ++;

		}

	}

	return {
		setup: setup,
		state: state
	};

}

function WebGLRenderState( extensions, capabilities ) {

	const lights = new WebGLLights( extensions, capabilities );

	const lightsArray = [];
	const shadowsArray = [];

	function init() {

		lightsArray.length = 0;
		shadowsArray.length = 0;

	}

	function pushLight( light ) {

		lightsArray.push( light );

	}

	function pushShadow( shadowLight ) {

		shadowsArray.push( shadowLight );

	}

	function setupLights( camera ) {

		lights.setup( lightsArray, shadowsArray, camera );

	}

	const state = {
		lightsArray: lightsArray,
		shadowsArray: shadowsArray,

		lights: lights
	};

	return {
		init: init,
		state: state,
		setupLights: setupLights,

		pushLight: pushLight,
		pushShadow: pushShadow
	};

}

function WebGLRenderStates( extensions, capabilities ) {

	let renderStates = new WeakMap();

	function get( scene, camera ) {

		let renderState;

		if ( renderStates.has( scene ) === false ) {

			renderState = new WebGLRenderState( extensions, capabilities );
			renderStates.set( scene, new WeakMap() );
			renderStates.get( scene ).set( camera, renderState );

		} else {

			if ( renderStates.get( scene ).has( camera ) === false ) {

				renderState = new WebGLRenderState( extensions, capabilities );
				renderStates.get( scene ).set( camera, renderState );

			} else {

				renderState = renderStates.get( scene ).get( camera );

			}

		}

		return renderState;

	}

	function dispose() {

		renderStates = new WeakMap();

	}

	return {
		get: get,
		dispose: dispose
	};

}

/**
 * parameters = {
 *
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

function MeshDepthMaterial( parameters ) {

	Material.call( this );

	this.type = 'MeshDepthMaterial';

	this.depthPacking = BasicDepthPacking;

	this.skinning = false;
	this.morphTargets = false;

	this.map = null;

	this.alphaMap = null;

	this.displacementMap = null;
	this.displacementScale = 1;
	this.displacementBias = 0;

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.fog = false;

	this.setValues( parameters );

}

MeshDepthMaterial.prototype = Object.create( Material.prototype );
MeshDepthMaterial.prototype.constructor = MeshDepthMaterial;

MeshDepthMaterial.prototype.isMeshDepthMaterial = true;

MeshDepthMaterial.prototype.copy = function ( source ) {

	Material.prototype.copy.call( this, source );

	this.depthPacking = source.depthPacking;

	this.skinning = source.skinning;
	this.morphTargets = source.morphTargets;

	this.map = source.map;

	this.alphaMap = source.alphaMap;

	this.displacementMap = source.displacementMap;
	this.displacementScale = source.displacementScale;
	this.displacementBias = source.displacementBias;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	return this;

};

/**
 * parameters = {
 *
 *  referencePosition: <float>,
 *  nearDistance: <float>,
 *  farDistance: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>
 *
 * }
 */

function MeshDistanceMaterial( parameters ) {

	Material.call( this );

	this.type = 'MeshDistanceMaterial';

	this.referencePosition = new Vector3();
	this.nearDistance = 1;
	this.farDistance = 1000;

	this.skinning = false;
	this.morphTargets = false;

	this.map = null;

	this.alphaMap = null;

	this.displacementMap = null;
	this.displacementScale = 1;
	this.displacementBias = 0;

	this.fog = false;

	this.setValues( parameters );

}

MeshDistanceMaterial.prototype = Object.create( Material.prototype );
MeshDistanceMaterial.prototype.constructor = MeshDistanceMaterial;

MeshDistanceMaterial.prototype.isMeshDistanceMaterial = true;

MeshDistanceMaterial.prototype.copy = function ( source ) {

	Material.prototype.copy.call( this, source );

	this.referencePosition.copy( source.referencePosition );
	this.nearDistance = source.nearDistance;
	this.farDistance = source.farDistance;

	this.skinning = source.skinning;
	this.morphTargets = source.morphTargets;

	this.map = source.map;

	this.alphaMap = source.alphaMap;

	this.displacementMap = source.displacementMap;
	this.displacementScale = source.displacementScale;
	this.displacementBias = source.displacementBias;

	return this;

};

var vsm_frag = /* glsl */`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

		#ifdef HORIZONAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;

var vsm_vert = /* glsl */`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`;

function WebGLShadowMap( _renderer, _objects, maxTextureSize ) {

	let _frustum = new Frustum();

	const _shadowMapSize = new Vector2(),
		_viewportSize = new Vector2(),

		_viewport = new Vector4(),

		_depthMaterials = [],
		_distanceMaterials = [],

		_materialCache = {};

	const shadowSide = { 0: BackSide, 1: FrontSide, 2: DoubleSide };

	const shadowMaterialVertical = new ShaderMaterial( {

		defines: {
			SAMPLE_RATE: 2.0 / 8.0,
			HALF_SAMPLE_RATE: 1.0 / 8.0
		},

		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new Vector2() },
			radius: { value: 4.0 }
		},

		vertexShader: vsm_vert,

		fragmentShader: vsm_frag

	} );

	const shadowMaterialHorizonal = shadowMaterialVertical.clone();
	shadowMaterialHorizonal.defines.HORIZONAL_PASS = 1;

	const fullScreenTri = new BufferGeometry();
	fullScreenTri.setAttribute(
		"position",
		new BufferAttribute(
			new Float32Array( [ - 1, - 1, 0.5, 3, - 1, 0.5, - 1, 3, 0.5 ] ),
			3
		)
	);

	const fullScreenMesh = new Mesh( fullScreenTri, shadowMaterialVertical );

	const scope = this;

	this.enabled = false;

	this.autoUpdate = true;
	this.needsUpdate = false;

	this.type = PCFShadowMap;

	this.render = function ( lights, scene, camera ) {

		if ( scope.enabled === false ) return;
		if ( scope.autoUpdate === false && scope.needsUpdate === false ) return;

		if ( lights.length === 0 ) return;

		const currentRenderTarget = _renderer.getRenderTarget();
		const activeCubeFace = _renderer.getActiveCubeFace();
		const activeMipmapLevel = _renderer.getActiveMipmapLevel();

		const _state = _renderer.state;

		// Set GL state for depth map.
		_state.setBlending( NoBlending );
		_state.buffers.color.setClear( 1, 1, 1, 1 );
		_state.buffers.depth.setTest( true );
		_state.setScissorTest( false );

		// render depth map

		for ( let i = 0, il = lights.length; i < il; i ++ ) {

			const light = lights[ i ];
			const shadow = light.shadow;

			if ( shadow === undefined ) {

				console.warn( 'THREE.WebGLShadowMap:', light, 'has no shadow.' );
				continue;

			}

			if ( shadow.autoUpdate === false && shadow.needsUpdate === false ) continue;

			_shadowMapSize.copy( shadow.mapSize );

			const shadowFrameExtents = shadow.getFrameExtents();

			_shadowMapSize.multiply( shadowFrameExtents );

			_viewportSize.copy( shadow.mapSize );

			if ( _shadowMapSize.x > maxTextureSize || _shadowMapSize.y > maxTextureSize ) {

				if ( _shadowMapSize.x > maxTextureSize ) {

					_viewportSize.x = Math.floor( maxTextureSize / shadowFrameExtents.x );
					_shadowMapSize.x = _viewportSize.x * shadowFrameExtents.x;
					shadow.mapSize.x = _viewportSize.x;

				}

				if ( _shadowMapSize.y > maxTextureSize ) {

					_viewportSize.y = Math.floor( maxTextureSize / shadowFrameExtents.y );
					_shadowMapSize.y = _viewportSize.y * shadowFrameExtents.y;
					shadow.mapSize.y = _viewportSize.y;

				}

			}

			if ( shadow.map === null && ! shadow.isPointLightShadow && this.type === VSMShadowMap ) {

				const pars = { minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat };

				shadow.map = new WebGLRenderTarget( _shadowMapSize.x, _shadowMapSize.y, pars );
				shadow.map.texture.name = light.name + ".shadowMap";

				shadow.mapPass = new WebGLRenderTarget( _shadowMapSize.x, _shadowMapSize.y, pars );

				shadow.camera.updateProjectionMatrix();

			}

			if ( shadow.map === null ) {

				const pars = { minFilter: NearestFilter, magFilter: NearestFilter, format: RGBAFormat };

				shadow.map = new WebGLRenderTarget( _shadowMapSize.x, _shadowMapSize.y, pars );
				shadow.map.texture.name = light.name + ".shadowMap";

				shadow.camera.updateProjectionMatrix();

			}

			_renderer.setRenderTarget( shadow.map );
			_renderer.clear();

			const viewportCount = shadow.getViewportCount();

			for ( let vp = 0; vp < viewportCount; vp ++ ) {

				const viewport = shadow.getViewport( vp );

				_viewport.set(
					_viewportSize.x * viewport.x,
					_viewportSize.y * viewport.y,
					_viewportSize.x * viewport.z,
					_viewportSize.y * viewport.w
				);

				_state.viewport( _viewport );

				shadow.updateMatrices( light, vp );

				_frustum = shadow.getFrustum();

				renderObject( scene, camera, shadow.camera, light, this.type );

			}

			// do blur pass for VSM

			if ( ! shadow.isPointLightShadow && this.type === VSMShadowMap ) {

				VSMPass( shadow, camera );

			}

			shadow.needsUpdate = false;

		}

		scope.needsUpdate = false;

		_renderer.setRenderTarget( currentRenderTarget, activeCubeFace, activeMipmapLevel );

	};

	function VSMPass( shadow, camera ) {

		const geometry = _objects.update( fullScreenMesh );

		// vertical pass

		shadowMaterialVertical.uniforms.shadow_pass.value = shadow.map.texture;
		shadowMaterialVertical.uniforms.resolution.value = shadow.mapSize;
		shadowMaterialVertical.uniforms.radius.value = shadow.radius;
		_renderer.setRenderTarget( shadow.mapPass );
		_renderer.clear();
		_renderer.renderBufferDirect( camera, null, geometry, shadowMaterialVertical, fullScreenMesh, null );

		// horizonal pass

		shadowMaterialHorizonal.uniforms.shadow_pass.value = shadow.mapPass.texture;
		shadowMaterialHorizonal.uniforms.resolution.value = shadow.mapSize;
		shadowMaterialHorizonal.uniforms.radius.value = shadow.radius;
		_renderer.setRenderTarget( shadow.map );
		_renderer.clear();
		_renderer.renderBufferDirect( camera, null, geometry, shadowMaterialHorizonal, fullScreenMesh, null );

	}

	function getDepthMaterialVariant( useMorphing, useSkinning, useInstancing ) {

		const index = useMorphing << 0 | useSkinning << 1 | useInstancing << 2;

		let material = _depthMaterials[ index ];

		if ( material === undefined ) {

			material = new MeshDepthMaterial( {

				depthPacking: RGBADepthPacking,

				morphTargets: useMorphing,
				skinning: useSkinning

			} );

			_depthMaterials[ index ] = material;

		}

		return material;

	}

	function getDistanceMaterialVariant( useMorphing, useSkinning, useInstancing ) {

		const index = useMorphing << 0 | useSkinning << 1 | useInstancing << 2;

		let material = _distanceMaterials[ index ];

		if ( material === undefined ) {

			material = new MeshDistanceMaterial( {

				morphTargets: useMorphing,
				skinning: useSkinning

			} );

			_distanceMaterials[ index ] = material;

		}

		return material;

	}

	function getDepthMaterial( object, geometry, material, light, shadowCameraNear, shadowCameraFar, type ) {

		let result = null;

		let getMaterialVariant = getDepthMaterialVariant;
		let customMaterial = object.customDepthMaterial;

		if ( light.isPointLight === true ) {

			getMaterialVariant = getDistanceMaterialVariant;
			customMaterial = object.customDistanceMaterial;

		}

		if ( customMaterial === undefined ) {

			let useMorphing = false;

			if ( material.morphTargets === true ) {

				useMorphing = geometry.morphAttributes && geometry.morphAttributes.position && geometry.morphAttributes.position.length > 0;

			}

			let useSkinning = false;

			if ( object.isSkinnedMesh === true ) {

				if ( material.skinning === true ) {

					useSkinning = true;

				} else {

					console.warn( 'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', object );

				}

			}

			const useInstancing = object.isInstancedMesh === true;

			result = getMaterialVariant( useMorphing, useSkinning, useInstancing );

		} else {

			result = customMaterial;

		}

		if ( _renderer.localClippingEnabled &&
				material.clipShadows === true &&
				material.clippingPlanes.length !== 0 ) {

			// in this case we need a unique material instance reflecting the
			// appropriate state

			const keyA = result.uuid, keyB = material.uuid;

			let materialsForVariant = _materialCache[ keyA ];

			if ( materialsForVariant === undefined ) {

				materialsForVariant = {};
				_materialCache[ keyA ] = materialsForVariant;

			}

			let cachedMaterial = materialsForVariant[ keyB ];

			if ( cachedMaterial === undefined ) {

				cachedMaterial = result.clone();
				materialsForVariant[ keyB ] = cachedMaterial;

			}

			result = cachedMaterial;

		}

		result.visible = material.visible;
		result.wireframe = material.wireframe;

		if ( type === VSMShadowMap ) {

			result.side = ( material.shadowSide !== null ) ? material.shadowSide : material.side;

		} else {

			result.side = ( material.shadowSide !== null ) ? material.shadowSide : shadowSide[ material.side ];

		}

		result.clipShadows = material.clipShadows;
		result.clippingPlanes = material.clippingPlanes;
		result.clipIntersection = material.clipIntersection;

		result.wireframeLinewidth = material.wireframeLinewidth;
		result.linewidth = material.linewidth;

		if ( light.isPointLight === true && result.isMeshDistanceMaterial === true ) {

			result.referencePosition.setFromMatrixPosition( light.matrixWorld );
			result.nearDistance = shadowCameraNear;
			result.farDistance = shadowCameraFar;

		}

		return result;

	}

	function renderObject( object, camera, shadowCamera, light, type ) {

		if ( object.visible === false ) return;

		const visible = object.layers.test( camera.layers );

		if ( visible && ( object.isMesh || object.isLine || object.isPoints ) ) {

			if ( ( object.castShadow || ( object.receiveShadow && type === VSMShadowMap ) ) && ( ! object.frustumCulled || _frustum.intersectsObject( object ) ) ) {

				object.modelViewMatrix.multiplyMatrices( shadowCamera.matrixWorldInverse, object.matrixWorld );

				const geometry = _objects.update( object );
				const material = object.material;

				if ( Array.isArray( material ) ) {

					const groups = geometry.groups;

					for ( let k = 0, kl = groups.length; k < kl; k ++ ) {

						const group = groups[ k ];
						const groupMaterial = material[ group.materialIndex ];

						if ( groupMaterial && groupMaterial.visible ) {

							const depthMaterial = getDepthMaterial( object, geometry, groupMaterial, light, shadowCamera.near, shadowCamera.far, type );

							_renderer.renderBufferDirect( shadowCamera, null, geometry, depthMaterial, object, group );

						}

					}

				} else if ( material.visible ) {

					const depthMaterial = getDepthMaterial( object, geometry, material, light, shadowCamera.near, shadowCamera.far, type );

					_renderer.renderBufferDirect( shadowCamera, null, geometry, depthMaterial, object, null );

				}

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			renderObject( children[ i ], camera, shadowCamera, light, type );

		}

	}

}

function WebGLState( gl, extensions, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	function ColorBuffer() {

		let locked = false;

		const color = new Vector4();
		let currentColorMask = null;
		const currentColorClear = new Vector4( 0, 0, 0, 0 );

		return {

			setMask: function ( colorMask ) {

				if ( currentColorMask !== colorMask && ! locked ) {

					gl.colorMask( colorMask, colorMask, colorMask, colorMask );
					currentColorMask = colorMask;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( r, g, b, a, premultipliedAlpha ) {

				if ( premultipliedAlpha === true ) {

					r *= a; g *= a; b *= a;

				}

				color.set( r, g, b, a );

				if ( currentColorClear.equals( color ) === false ) {

					gl.clearColor( r, g, b, a );
					currentColorClear.copy( color );

				}

			},

			reset: function () {

				locked = false;

				currentColorMask = null;
				currentColorClear.set( - 1, 0, 0, 0 ); // set to invalid state

			}

		};

	}

	function DepthBuffer() {

		let locked = false;

		let currentDepthMask = null;
		let currentDepthFunc = null;
		let currentDepthClear = null;

		return {

			setTest: function ( depthTest ) {

				if ( depthTest ) {

					enable( gl.DEPTH_TEST );

				} else {

					disable( gl.DEPTH_TEST );

				}

			},

			setMask: function ( depthMask ) {

				if ( currentDepthMask !== depthMask && ! locked ) {

					gl.depthMask( depthMask );
					currentDepthMask = depthMask;

				}

			},

			setFunc: function ( depthFunc ) {

				if ( currentDepthFunc !== depthFunc ) {

					if ( depthFunc ) {

						switch ( depthFunc ) {

							case NeverDepth:

								gl.depthFunc( gl.NEVER );
								break;

							case AlwaysDepth:

								gl.depthFunc( gl.ALWAYS );
								break;

							case LessDepth:

								gl.depthFunc( gl.LESS );
								break;

							case LessEqualDepth:

								gl.depthFunc( gl.LEQUAL );
								break;

							case EqualDepth:

								gl.depthFunc( gl.EQUAL );
								break;

							case GreaterEqualDepth:

								gl.depthFunc( gl.GEQUAL );
								break;

							case GreaterDepth:

								gl.depthFunc( gl.GREATER );
								break;

							case NotEqualDepth:

								gl.depthFunc( gl.NOTEQUAL );
								break;

							default:

								gl.depthFunc( gl.LEQUAL );

						}

					} else {

						gl.depthFunc( gl.LEQUAL );

					}

					currentDepthFunc = depthFunc;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( depth ) {

				if ( currentDepthClear !== depth ) {

					gl.clearDepth( depth );
					currentDepthClear = depth;

				}

			},

			reset: function () {

				locked = false;

				currentDepthMask = null;
				currentDepthFunc = null;
				currentDepthClear = null;

			}

		};

	}

	function StencilBuffer() {

		let locked = false;

		let currentStencilMask = null;
		let currentStencilFunc = null;
		let currentStencilRef = null;
		let currentStencilFuncMask = null;
		let currentStencilFail = null;
		let currentStencilZFail = null;
		let currentStencilZPass = null;
		let currentStencilClear = null;

		return {

			setTest: function ( stencilTest ) {

				if ( ! locked ) {

					if ( stencilTest ) {

						enable( gl.STENCIL_TEST );

					} else {

						disable( gl.STENCIL_TEST );

					}

				}

			},

			setMask: function ( stencilMask ) {

				if ( currentStencilMask !== stencilMask && ! locked ) {

					gl.stencilMask( stencilMask );
					currentStencilMask = stencilMask;

				}

			},

			setFunc: function ( stencilFunc, stencilRef, stencilMask ) {

				if ( currentStencilFunc !== stencilFunc ||
				     currentStencilRef !== stencilRef ||
				     currentStencilFuncMask !== stencilMask ) {

					gl.stencilFunc( stencilFunc, stencilRef, stencilMask );

					currentStencilFunc = stencilFunc;
					currentStencilRef = stencilRef;
					currentStencilFuncMask = stencilMask;

				}

			},

			setOp: function ( stencilFail, stencilZFail, stencilZPass ) {

				if ( currentStencilFail !== stencilFail ||
				     currentStencilZFail !== stencilZFail ||
				     currentStencilZPass !== stencilZPass ) {

					gl.stencilOp( stencilFail, stencilZFail, stencilZPass );

					currentStencilFail = stencilFail;
					currentStencilZFail = stencilZFail;
					currentStencilZPass = stencilZPass;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( stencil ) {

				if ( currentStencilClear !== stencil ) {

					gl.clearStencil( stencil );
					currentStencilClear = stencil;

				}

			},

			reset: function () {

				locked = false;

				currentStencilMask = null;
				currentStencilFunc = null;
				currentStencilRef = null;
				currentStencilFuncMask = null;
				currentStencilFail = null;
				currentStencilZFail = null;
				currentStencilZPass = null;
				currentStencilClear = null;

			}

		};

	}

	//

	const colorBuffer = new ColorBuffer();
	const depthBuffer = new DepthBuffer();
	const stencilBuffer = new StencilBuffer();

	let enabledCapabilities = {};

	let currentProgram = null;

	let currentBlendingEnabled = null;
	let currentBlending = null;
	let currentBlendEquation = null;
	let currentBlendSrc = null;
	let currentBlendDst = null;
	let currentBlendEquationAlpha = null;
	let currentBlendSrcAlpha = null;
	let currentBlendDstAlpha = null;
	let currentPremultipledAlpha = false;

	let currentFlipSided = null;
	let currentCullFace = null;

	let currentLineWidth = null;

	let currentPolygonOffsetFactor = null;
	let currentPolygonOffsetUnits = null;

	const maxTextures = gl.getParameter( gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS );

	let lineWidthAvailable = false;
	let version = 0;
	const glVersion = gl.getParameter( gl.VERSION );

	if ( glVersion.indexOf( 'WebGL' ) !== - 1 ) {

		version = parseFloat( /^WebGL\ ([0-9])/.exec( glVersion )[ 1 ] );
		lineWidthAvailable = ( version >= 1.0 );

	} else if ( glVersion.indexOf( 'OpenGL ES' ) !== - 1 ) {

		version = parseFloat( /^OpenGL\ ES\ ([0-9])/.exec( glVersion )[ 1 ] );
		lineWidthAvailable = ( version >= 2.0 );

	}

	let currentTextureSlot = null;
	let currentBoundTextures = {};

	const currentScissor = new Vector4();
	const currentViewport = new Vector4();

	function createTexture( type, target, count ) {

		const data = new Uint8Array( 4 ); // 4 is required to match default unpack alignment of 4.
		const texture = gl.createTexture();

		gl.bindTexture( type, texture );
		gl.texParameteri( type, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
		gl.texParameteri( type, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

		for ( let i = 0; i < count; i ++ ) {

			gl.texImage2D( target + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );

		}

		return texture;

	}

	const emptyTextures = {};
	emptyTextures[ gl.TEXTURE_2D ] = createTexture( gl.TEXTURE_2D, gl.TEXTURE_2D, 1 );
	emptyTextures[ gl.TEXTURE_CUBE_MAP ] = createTexture( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_CUBE_MAP_POSITIVE_X, 6 );

	// init

	colorBuffer.setClear( 0, 0, 0, 1 );
	depthBuffer.setClear( 1 );
	stencilBuffer.setClear( 0 );

	enable( gl.DEPTH_TEST );
	depthBuffer.setFunc( LessEqualDepth );

	setFlipSided( false );
	setCullFace( CullFaceBack );
	enable( gl.CULL_FACE );

	setBlending( NoBlending );

	//

	function enable( id ) {

		if ( enabledCapabilities[ id ] !== true ) {

			gl.enable( id );
			enabledCapabilities[ id ] = true;

		}

	}

	function disable( id ) {

		if ( enabledCapabilities[ id ] !== false ) {

			gl.disable( id );
			enabledCapabilities[ id ] = false;

		}

	}

	function useProgram( program ) {

		if ( currentProgram !== program ) {

			gl.useProgram( program );

			currentProgram = program;

			return true;

		}

		return false;

	}

	const equationToGL = {
		[ AddEquation ]: gl.FUNC_ADD,
		[ SubtractEquation ]: gl.FUNC_SUBTRACT,
		[ ReverseSubtractEquation ]: gl.FUNC_REVERSE_SUBTRACT
	};

	if ( isWebGL2 ) {

		equationToGL[ MinEquation ] = gl.MIN;
		equationToGL[ MaxEquation ] = gl.MAX;

	} else {

		const extension = extensions.get( 'EXT_blend_minmax' );

		if ( extension !== null ) {

			equationToGL[ MinEquation ] = extension.MIN_EXT;
			equationToGL[ MaxEquation ] = extension.MAX_EXT;

		}

	}

	const factorToGL = {
		[ ZeroFactor ]: gl.ZERO,
		[ OneFactor ]: gl.ONE,
		[ SrcColorFactor ]: gl.SRC_COLOR,
		[ SrcAlphaFactor ]: gl.SRC_ALPHA,
		[ SrcAlphaSaturateFactor ]: gl.SRC_ALPHA_SATURATE,
		[ DstColorFactor ]: gl.DST_COLOR,
		[ DstAlphaFactor ]: gl.DST_ALPHA,
		[ OneMinusSrcColorFactor ]: gl.ONE_MINUS_SRC_COLOR,
		[ OneMinusSrcAlphaFactor ]: gl.ONE_MINUS_SRC_ALPHA,
		[ OneMinusDstColorFactor ]: gl.ONE_MINUS_DST_COLOR,
		[ OneMinusDstAlphaFactor ]: gl.ONE_MINUS_DST_ALPHA
	};

	function setBlending( blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha ) {

		if ( blending === NoBlending ) {

			if ( currentBlendingEnabled ) {

				disable( gl.BLEND );
				currentBlendingEnabled = false;

			}

			return;

		}

		if ( ! currentBlendingEnabled ) {

			enable( gl.BLEND );
			currentBlendingEnabled = true;

		}

		if ( blending !== CustomBlending ) {

			if ( blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha ) {

				if ( currentBlendEquation !== AddEquation || currentBlendEquationAlpha !== AddEquation ) {

					gl.blendEquation( gl.FUNC_ADD );

					currentBlendEquation = AddEquation;
					currentBlendEquationAlpha = AddEquation;

				}

				if ( premultipliedAlpha ) {

					switch ( blending ) {

						case NormalBlending:
							gl.blendFuncSeparate( gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA );
							break;

						case AdditiveBlending:
							gl.blendFunc( gl.ONE, gl.ONE );
							break;

						case SubtractiveBlending:
							gl.blendFuncSeparate( gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA );
							break;

						case MultiplyBlending:
							gl.blendFuncSeparate( gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA );
							break;

						default:
							console.error( 'THREE.WebGLState: Invalid blending: ', blending );
							break;

					}

				} else {

					switch ( blending ) {

						case NormalBlending:
							gl.blendFuncSeparate( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA );
							break;

						case AdditiveBlending:
							gl.blendFunc( gl.SRC_ALPHA, gl.ONE );
							break;

						case SubtractiveBlending:
							gl.blendFunc( gl.ZERO, gl.ONE_MINUS_SRC_COLOR );
							break;

						case MultiplyBlending:
							gl.blendFunc( gl.ZERO, gl.SRC_COLOR );
							break;

						default:
							console.error( 'THREE.WebGLState: Invalid blending: ', blending );
							break;

					}

				}

				currentBlendSrc = null;
				currentBlendDst = null;
				currentBlendSrcAlpha = null;
				currentBlendDstAlpha = null;

				currentBlending = blending;
				currentPremultipledAlpha = premultipliedAlpha;

			}

			return;

		}

		// custom blending

		blendEquationAlpha = blendEquationAlpha || blendEquation;
		blendSrcAlpha = blendSrcAlpha || blendSrc;
		blendDstAlpha = blendDstAlpha || blendDst;

		if ( blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha ) {

			gl.blendEquationSeparate( equationToGL[ blendEquation ], equationToGL[ blendEquationAlpha ] );

			currentBlendEquation = blendEquation;
			currentBlendEquationAlpha = blendEquationAlpha;

		}

		if ( blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha ) {

			gl.blendFuncSeparate( factorToGL[ blendSrc ], factorToGL[ blendDst ], factorToGL[ blendSrcAlpha ], factorToGL[ blendDstAlpha ] );

			currentBlendSrc = blendSrc;
			currentBlendDst = blendDst;
			currentBlendSrcAlpha = blendSrcAlpha;
			currentBlendDstAlpha = blendDstAlpha;

		}

		currentBlending = blending;
		currentPremultipledAlpha = null;

	}

	function setMaterial( material, frontFaceCW ) {

		material.side === DoubleSide
			? disable( gl.CULL_FACE )
			: enable( gl.CULL_FACE );

		let flipSided = ( material.side === BackSide );
		if ( frontFaceCW ) flipSided = ! flipSided;

		setFlipSided( flipSided );

		( material.blending === NormalBlending && material.transparent === false )
			? setBlending( NoBlending )
			: setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha );

		depthBuffer.setFunc( material.depthFunc );
		depthBuffer.setTest( material.depthTest );
		depthBuffer.setMask( material.depthWrite );
		colorBuffer.setMask( material.colorWrite );

		const stencilWrite = material.stencilWrite;
		stencilBuffer.setTest( stencilWrite );
		if ( stencilWrite ) {

			stencilBuffer.setMask( material.stencilWriteMask );
			stencilBuffer.setFunc( material.stencilFunc, material.stencilRef, material.stencilFuncMask );
			stencilBuffer.setOp( material.stencilFail, material.stencilZFail, material.stencilZPass );

		}

		setPolygonOffset( material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits );

	}

	//

	function setFlipSided( flipSided ) {

		if ( currentFlipSided !== flipSided ) {

			if ( flipSided ) {

				gl.frontFace( gl.CW );

			} else {

				gl.frontFace( gl.CCW );

			}

			currentFlipSided = flipSided;

		}

	}

	function setCullFace( cullFace ) {

		if ( cullFace !== CullFaceNone ) {

			enable( gl.CULL_FACE );

			if ( cullFace !== currentCullFace ) {

				if ( cullFace === CullFaceBack ) {

					gl.cullFace( gl.BACK );

				} else if ( cullFace === CullFaceFront ) {

					gl.cullFace( gl.FRONT );

				} else {

					gl.cullFace( gl.FRONT_AND_BACK );

				}

			}

		} else {

			disable( gl.CULL_FACE );

		}

		currentCullFace = cullFace;

	}

	function setLineWidth( width ) {

		if ( width !== currentLineWidth ) {

			if ( lineWidthAvailable ) gl.lineWidth( width );

			currentLineWidth = width;

		}

	}

	function setPolygonOffset( polygonOffset, factor, units ) {

		if ( polygonOffset ) {

			enable( gl.POLYGON_OFFSET_FILL );

			if ( currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units ) {

				gl.polygonOffset( factor, units );

				currentPolygonOffsetFactor = factor;
				currentPolygonOffsetUnits = units;

			}

		} else {

			disable( gl.POLYGON_OFFSET_FILL );

		}

	}

	function setScissorTest( scissorTest ) {

		if ( scissorTest ) {

			enable( gl.SCISSOR_TEST );

		} else {

			disable( gl.SCISSOR_TEST );

		}

	}

	// texture

	function activeTexture( webglSlot ) {

		if ( webglSlot === undefined ) webglSlot = gl.TEXTURE0 + maxTextures - 1;

		if ( currentTextureSlot !== webglSlot ) {

			gl.activeTexture( webglSlot );
			currentTextureSlot = webglSlot;

		}

	}

	function bindTexture( webglType, webglTexture ) {

		if ( currentTextureSlot === null ) {

			activeTexture();

		}

		let boundTexture = currentBoundTextures[ currentTextureSlot ];

		if ( boundTexture === undefined ) {

			boundTexture = { type: undefined, texture: undefined };
			currentBoundTextures[ currentTextureSlot ] = boundTexture;

		}

		if ( boundTexture.type !== webglType || boundTexture.texture !== webglTexture ) {

			gl.bindTexture( webglType, webglTexture || emptyTextures[ webglType ] );

			boundTexture.type = webglType;
			boundTexture.texture = webglTexture;

		}

	}

	function unbindTexture() {

		const boundTexture = currentBoundTextures[ currentTextureSlot ];

		if ( boundTexture !== undefined && boundTexture.type !== undefined ) {

			gl.bindTexture( boundTexture.type, null );

			boundTexture.type = undefined;
			boundTexture.texture = undefined;

		}

	}

	function compressedTexImage2D() {

		try {

			gl.compressedTexImage2D.apply( gl, arguments );

		} catch ( error ) {

			console.error( 'THREE.WebGLState:', error );

		}

	}

	function texImage2D() {

		try {

			gl.texImage2D.apply( gl, arguments );

		} catch ( error ) {

			console.error( 'THREE.WebGLState:', error );

		}

	}

	function texImage3D() {

		try {

			gl.texImage3D.apply( gl, arguments );

		} catch ( error ) {

			console.error( 'THREE.WebGLState:', error );

		}

	}

	//

	function scissor( scissor ) {

		if ( currentScissor.equals( scissor ) === false ) {

			gl.scissor( scissor.x, scissor.y, scissor.z, scissor.w );
			currentScissor.copy( scissor );

		}

	}

	function viewport( viewport ) {

		if ( currentViewport.equals( viewport ) === false ) {

			gl.viewport( viewport.x, viewport.y, viewport.z, viewport.w );
			currentViewport.copy( viewport );

		}

	}

	//

	function reset() {

		enabledCapabilities = {};

		currentTextureSlot = null;
		currentBoundTextures = {};

		currentProgram = null;

		currentBlending = null;

		currentFlipSided = null;
		currentCullFace = null;

		colorBuffer.reset();
		depthBuffer.reset();
		stencilBuffer.reset();

	}

	return {

		buffers: {
			color: colorBuffer,
			depth: depthBuffer,
			stencil: stencilBuffer
		},

		enable: enable,
		disable: disable,

		useProgram: useProgram,

		setBlending: setBlending,
		setMaterial: setMaterial,

		setFlipSided: setFlipSided,
		setCullFace: setCullFace,

		setLineWidth: setLineWidth,
		setPolygonOffset: setPolygonOffset,

		setScissorTest: setScissorTest,

		activeTexture: activeTexture,
		bindTexture: bindTexture,
		unbindTexture: unbindTexture,
		compressedTexImage2D: compressedTexImage2D,
		texImage2D: texImage2D,
		texImage3D: texImage3D,

		scissor: scissor,
		viewport: viewport,

		reset: reset

	};

}

function WebGLTextures( _gl, extensions, state, properties, capabilities, utils, info ) {

	const isWebGL2 = capabilities.isWebGL2;
	const maxTextures = capabilities.maxTextures;
	const maxCubemapSize = capabilities.maxCubemapSize;
	const maxTextureSize = capabilities.maxTextureSize;
	const maxSamples = capabilities.maxSamples;

	const _videoTextures = new WeakMap();
	let _canvas;

	// cordova iOS (as of 5.0) still uses UIWebView, which provides OffscreenCanvas,
	// also OffscreenCanvas.getContext("webgl"), but not OffscreenCanvas.getContext("2d")!
	// Some implementations may only implement OffscreenCanvas partially (e.g. lacking 2d).

	let useOffscreenCanvas = false;

	try {

		useOffscreenCanvas = typeof OffscreenCanvas !== 'undefined'
			&& ( new OffscreenCanvas( 1, 1 ).getContext( "2d" ) ) !== null;

	} catch ( err ) {

		// Ignore any errors

	}

	function createCanvas( width, height ) {

		// Use OffscreenCanvas when available. Specially needed in web workers

		return useOffscreenCanvas ?
			new OffscreenCanvas( width, height ) :
			document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );

	}

	function resizeImage( image, needsPowerOfTwo, needsNewCanvas, maxSize ) {

		let scale = 1;

		// handle case if texture exceeds max size

		if ( image.width > maxSize || image.height > maxSize ) {

			scale = maxSize / Math.max( image.width, image.height );

		}

		// only perform resize if necessary

		if ( scale < 1 || needsPowerOfTwo === true ) {

			// only perform resize for certain image types

			if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
				( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
				( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

				const floor = needsPowerOfTwo ? MathUtils.floorPowerOfTwo : Math.floor;

				const width = floor( scale * image.width );
				const height = floor( scale * image.height );

				if ( _canvas === undefined ) _canvas = createCanvas( width, height );

				// cube textures can't reuse the same canvas

				const canvas = needsNewCanvas ? createCanvas( width, height ) : _canvas;

				canvas.width = width;
				canvas.height = height;

				const context = canvas.getContext( '2d' );
				context.drawImage( image, 0, 0, width, height );

				console.warn( 'THREE.WebGLRenderer: Texture has been resized from (' + image.width + 'x' + image.height + ') to (' + width + 'x' + height + ').' );

				return canvas;

			} else {

				if ( 'data' in image ) {

					console.warn( 'THREE.WebGLRenderer: Image in DataTexture is too big (' + image.width + 'x' + image.height + ').' );

				}

				return image;

			}

		}

		return image;

	}

	function isPowerOfTwo( image ) {

		return MathUtils.isPowerOfTwo( image.width ) && MathUtils.isPowerOfTwo( image.height );

	}

	function textureNeedsPowerOfTwo( texture ) {

		if ( isWebGL2 ) return false;

		return ( texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping ) ||
			( texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter );

	}

	function textureNeedsGenerateMipmaps( texture, supportsMips ) {

		return texture.generateMipmaps && supportsMips &&
			texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;

	}

	function generateMipmap( target, texture, width, height ) {

		_gl.generateMipmap( target );

		const textureProperties = properties.get( texture );

		// Note: Math.log( x ) * Math.LOG2E used instead of Math.log2( x ) which is not supported by IE11
		textureProperties.__maxMipLevel = Math.log( Math.max( width, height ) ) * Math.LOG2E;

	}

	function getInternalFormat( internalFormatName, glFormat, glType ) {

		if ( isWebGL2 === false ) return glFormat;

		if ( internalFormatName !== null ) {

			if ( _gl[ internalFormatName ] !== undefined ) return _gl[ internalFormatName ];

			console.warn( 'THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format \'' + internalFormatName + '\'' );

		}

		let internalFormat = glFormat;

		if ( glFormat === _gl.RED ) {

			if ( glType === _gl.FLOAT ) internalFormat = _gl.R32F;
			if ( glType === _gl.HALF_FLOAT ) internalFormat = _gl.R16F;
			if ( glType === _gl.UNSIGNED_BYTE ) internalFormat = _gl.R8;

		}

		if ( glFormat === _gl.RGB ) {

			if ( glType === _gl.FLOAT ) internalFormat = _gl.RGB32F;
			if ( glType === _gl.HALF_FLOAT ) internalFormat = _gl.RGB16F;
			if ( glType === _gl.UNSIGNED_BYTE ) internalFormat = _gl.RGB8;

		}

		if ( glFormat === _gl.RGBA ) {

			if ( glType === _gl.FLOAT ) internalFormat = _gl.RGBA32F;
			if ( glType === _gl.HALF_FLOAT ) internalFormat = _gl.RGBA16F;
			if ( glType === _gl.UNSIGNED_BYTE ) internalFormat = _gl.RGBA8;

		}

		if ( internalFormat === _gl.R16F || internalFormat === _gl.R32F ||
			internalFormat === _gl.RGBA16F || internalFormat === _gl.RGBA32F ) {

			extensions.get( 'EXT_color_buffer_float' );

		}

		return internalFormat;

	}

	// Fallback filters for non-power-of-2 textures

	function filterFallback( f ) {

		if ( f === NearestFilter || f === NearestMipmapNearestFilter || f === NearestMipmapLinearFilter ) {

			return _gl.NEAREST;

		}

		return _gl.LINEAR;

	}

	//

	function onTextureDispose( event ) {

		const texture = event.target;

		texture.removeEventListener( 'dispose', onTextureDispose );

		deallocateTexture( texture );

		if ( texture.isVideoTexture ) {

			_videoTextures.delete( texture );

		}

		info.memory.textures --;

	}

	function onRenderTargetDispose( event ) {

		const renderTarget = event.target;

		renderTarget.removeEventListener( 'dispose', onRenderTargetDispose );

		deallocateRenderTarget( renderTarget );

		info.memory.textures --;

	}

	//

	function deallocateTexture( texture ) {

		const textureProperties = properties.get( texture );

		if ( textureProperties.__webglInit === undefined ) return;

		_gl.deleteTexture( textureProperties.__webglTexture );

		properties.remove( texture );

	}

	function deallocateRenderTarget( renderTarget ) {

		const renderTargetProperties = properties.get( renderTarget );
		const textureProperties = properties.get( renderTarget.texture );

		if ( ! renderTarget ) return;

		if ( textureProperties.__webglTexture !== undefined ) {

			_gl.deleteTexture( textureProperties.__webglTexture );

		}

		if ( renderTarget.depthTexture ) {

			renderTarget.depthTexture.dispose();

		}

		if ( renderTarget.isWebGLCubeRenderTarget ) {

			for ( let i = 0; i < 6; i ++ ) {

				_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer[ i ] );
				if ( renderTargetProperties.__webglDepthbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglDepthbuffer[ i ] );

			}

		} else {

			_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer );
			if ( renderTargetProperties.__webglDepthbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglDepthbuffer );
			if ( renderTargetProperties.__webglMultisampledFramebuffer ) _gl.deleteFramebuffer( renderTargetProperties.__webglMultisampledFramebuffer );
			if ( renderTargetProperties.__webglColorRenderbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglColorRenderbuffer );
			if ( renderTargetProperties.__webglDepthRenderbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglDepthRenderbuffer );

		}

		properties.remove( renderTarget.texture );
		properties.remove( renderTarget );

	}

	//

	let textureUnits = 0;

	function resetTextureUnits() {

		textureUnits = 0;

	}

	function allocateTextureUnit() {

		const textureUnit = textureUnits;

		if ( textureUnit >= maxTextures ) {

			console.warn( 'THREE.WebGLTextures: Trying to use ' + textureUnit + ' texture units while this GPU supports only ' + maxTextures );

		}

		textureUnits += 1;

		return textureUnit;

	}

	//

	function setTexture2D( texture, slot ) {

		const textureProperties = properties.get( texture );

		if ( texture.isVideoTexture ) updateVideoTexture( texture );

		if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

			const image = texture.image;

			if ( image === undefined ) {

				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is undefined' );

			} else if ( image.complete === false ) {

				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is incomplete' );

			} else {

				uploadTexture( textureProperties, texture, slot );
				return;

			}

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );

	}

	function setTexture2DArray( texture, slot ) {

		const textureProperties = properties.get( texture );

		if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

			uploadTexture( textureProperties, texture, slot );
			return;

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_2D_ARRAY, textureProperties.__webglTexture );

	}

	function setTexture3D( texture, slot ) {

		const textureProperties = properties.get( texture );

		if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

			uploadTexture( textureProperties, texture, slot );
			return;

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_3D, textureProperties.__webglTexture );

	}

	function setTextureCube( texture, slot ) {

		const textureProperties = properties.get( texture );

		if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

			uploadCubeTexture( textureProperties, texture, slot );
			return;

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture );

	}

	const wrappingToGL = {
		[ RepeatWrapping ]: _gl.REPEAT,
		[ ClampToEdgeWrapping ]: _gl.CLAMP_TO_EDGE,
		[ MirroredRepeatWrapping ]: _gl.MIRRORED_REPEAT
	};

	const filterToGL = {
		[ NearestFilter ]: _gl.NEAREST,
		[ NearestMipmapNearestFilter ]: _gl.NEAREST_MIPMAP_NEAREST,
		[ NearestMipmapLinearFilter ]: _gl.NEAREST_MIPMAP_LINEAR,

		[ LinearFilter ]: _gl.LINEAR,
		[ LinearMipmapNearestFilter ]: _gl.LINEAR_MIPMAP_NEAREST,
		[ LinearMipmapLinearFilter ]: _gl.LINEAR_MIPMAP_LINEAR
	};

	function setTextureParameters( textureType, texture, supportsMips ) {

		if ( supportsMips ) {

			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, wrappingToGL[ texture.wrapS ] );
			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, wrappingToGL[ texture.wrapT ] );

			if ( textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY ) {

				_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_R, wrappingToGL[ texture.wrapR ] );

			}

			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, filterToGL[ texture.magFilter ] );
			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, filterToGL[ texture.minFilter ] );

		} else {

			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE );
			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE );

			if ( textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY ) {

				_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_R, _gl.CLAMP_TO_EDGE );

			}

			if ( texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping ) {

				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.' );

			}

			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, filterFallback( texture.magFilter ) );
			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, filterFallback( texture.minFilter ) );

			if ( texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter ) {

				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.' );

			}

		}

		const extension = extensions.get( 'EXT_texture_filter_anisotropic' );

		if ( extension ) {

			if ( texture.type === FloatType && extensions.get( 'OES_texture_float_linear' ) === null ) return;
			if ( texture.type === HalfFloatType && ( isWebGL2 || extensions.get( 'OES_texture_half_float_linear' ) ) === null ) return;

			if ( texture.anisotropy > 1 || properties.get( texture ).__currentAnisotropy ) {

				_gl.texParameterf( textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min( texture.anisotropy, capabilities.getMaxAnisotropy() ) );
				properties.get( texture ).__currentAnisotropy = texture.anisotropy;

			}

		}

	}

	function initTexture( textureProperties, texture ) {

		if ( textureProperties.__webglInit === undefined ) {

			textureProperties.__webglInit = true;

			texture.addEventListener( 'dispose', onTextureDispose );

			textureProperties.__webglTexture = _gl.createTexture();

			info.memory.textures ++;

		}

	}

	function uploadTexture( textureProperties, texture, slot ) {

		let textureType = _gl.TEXTURE_2D;

		if ( texture.isDataTexture2DArray ) textureType = _gl.TEXTURE_2D_ARRAY;
		if ( texture.isDataTexture3D ) textureType = _gl.TEXTURE_3D;

		initTexture( textureProperties, texture );

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( textureType, textureProperties.__webglTexture );

		_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );
		_gl.pixelStorei( _gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha );
		_gl.pixelStorei( _gl.UNPACK_ALIGNMENT, texture.unpackAlignment );

		const needsPowerOfTwo = textureNeedsPowerOfTwo( texture ) && isPowerOfTwo( texture.image ) === false;
		const image = resizeImage( texture.image, needsPowerOfTwo, false, maxTextureSize );

		const supportsMips = isPowerOfTwo( image ) || isWebGL2,
			glFormat = utils.convert( texture.format );

		let glType = utils.convert( texture.type ),
			glInternalFormat = getInternalFormat( texture.internalFormat, glFormat, glType );

		setTextureParameters( textureType, texture, supportsMips );

		let mipmap;
		const mipmaps = texture.mipmaps;

		if ( texture.isDepthTexture ) {

			// populate depth texture with dummy data

			glInternalFormat = _gl.DEPTH_COMPONENT;

			if ( isWebGL2 ) {

				if ( texture.type === FloatType ) {

					glInternalFormat = _gl.DEPTH_COMPONENT32F;

				} else if ( texture.type === UnsignedIntType ) {

					glInternalFormat = _gl.DEPTH_COMPONENT24;

				} else if ( texture.type === UnsignedInt248Type ) {

					glInternalFormat = _gl.DEPTH24_STENCIL8;

				} else {

					glInternalFormat = _gl.DEPTH_COMPONENT16; // WebGL2 requires sized internalformat for glTexImage2D

				}

			} else {

				if ( texture.type === FloatType ) {

					console.error( 'WebGLRenderer: Floating point depth texture requires WebGL2.' );

				}

			}

			// validation checks for WebGL 1

			if ( texture.format === DepthFormat && glInternalFormat === _gl.DEPTH_COMPONENT ) {

				// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
				// DEPTH_COMPONENT and type is not UNSIGNED_SHORT or UNSIGNED_INT
				// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
				if ( texture.type !== UnsignedShortType && texture.type !== UnsignedIntType ) {

					console.warn( 'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.' );

					texture.type = UnsignedShortType;
					glType = utils.convert( texture.type );

				}

			}

			if ( texture.format === DepthStencilFormat && glInternalFormat === _gl.DEPTH_COMPONENT ) {

				// Depth stencil textures need the DEPTH_STENCIL internal format
				// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
				glInternalFormat = _gl.DEPTH_STENCIL;

				// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
				// DEPTH_STENCIL and type is not UNSIGNED_INT_24_8_WEBGL.
				// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
				if ( texture.type !== UnsignedInt248Type ) {

					console.warn( 'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.' );

					texture.type = UnsignedInt248Type;
					glType = utils.convert( texture.type );

				}

			}

			//

			state.texImage2D( _gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, null );

		} else if ( texture.isDataTexture ) {

			// use manually created mipmaps if available
			// if there are no manual mipmaps
			// set 0 level mipmap and then use GL to generate other mipmap levels

			if ( mipmaps.length > 0 && supportsMips ) {

				for ( let i = 0, il = mipmaps.length; i < il; i ++ ) {

					mipmap = mipmaps[ i ];
					state.texImage2D( _gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

				}

				texture.generateMipmaps = false;
				textureProperties.__maxMipLevel = mipmaps.length - 1;

			} else {

				state.texImage2D( _gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, image.data );
				textureProperties.__maxMipLevel = 0;

			}

		} else if ( texture.isCompressedTexture ) {

			for ( let i = 0, il = mipmaps.length; i < il; i ++ ) {

				mipmap = mipmaps[ i ];

				if ( texture.format !== RGBAFormat && texture.format !== RGBFormat ) {

					if ( glFormat !== null ) {

						state.compressedTexImage2D( _gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data );

					} else {

						console.warn( 'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()' );

					}

				} else {

					state.texImage2D( _gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

				}

			}

			textureProperties.__maxMipLevel = mipmaps.length - 1;

		} else if ( texture.isDataTexture2DArray ) {

			state.texImage3D( _gl.TEXTURE_2D_ARRAY, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data );
			textureProperties.__maxMipLevel = 0;

		} else if ( texture.isDataTexture3D ) {

			state.texImage3D( _gl.TEXTURE_3D, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data );
			textureProperties.__maxMipLevel = 0;

		} else {

			// regular Texture (image, video, canvas)

			// use manually created mipmaps if available
			// if there are no manual mipmaps
			// set 0 level mipmap and then use GL to generate other mipmap levels

			if ( mipmaps.length > 0 && supportsMips ) {

				for ( let i = 0, il = mipmaps.length; i < il; i ++ ) {

					mipmap = mipmaps[ i ];
					state.texImage2D( _gl.TEXTURE_2D, i, glInternalFormat, glFormat, glType, mipmap );

				}

				texture.generateMipmaps = false;
				textureProperties.__maxMipLevel = mipmaps.length - 1;

			} else {

				state.texImage2D( _gl.TEXTURE_2D, 0, glInternalFormat, glFormat, glType, image );
				textureProperties.__maxMipLevel = 0;

			}

		}

		if ( textureNeedsGenerateMipmaps( texture, supportsMips ) ) {

			generateMipmap( textureType, texture, image.width, image.height );

		}

		textureProperties.__version = texture.version;

		if ( texture.onUpdate ) texture.onUpdate( texture );

	}

	function uploadCubeTexture( textureProperties, texture, slot ) {

		if ( texture.image.length !== 6 ) return;

		initTexture( textureProperties, texture );

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture );

		_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );

		const isCompressed = ( texture && ( texture.isCompressedTexture || texture.image[ 0 ].isCompressedTexture ) );
		const isDataTexture = ( texture.image[ 0 ] && texture.image[ 0 ].isDataTexture );

		const cubeImage = [];

		for ( let i = 0; i < 6; i ++ ) {

			if ( ! isCompressed && ! isDataTexture ) {

				cubeImage[ i ] = resizeImage( texture.image[ i ], false, true, maxCubemapSize );

			} else {

				cubeImage[ i ] = isDataTexture ? texture.image[ i ].image : texture.image[ i ];

			}

		}

		const image = cubeImage[ 0 ],
			supportsMips = isPowerOfTwo( image ) || isWebGL2,
			glFormat = utils.convert( texture.format ),
			glType = utils.convert( texture.type ),
			glInternalFormat = getInternalFormat( texture.internalFormat, glFormat, glType );

		setTextureParameters( _gl.TEXTURE_CUBE_MAP, texture, supportsMips );

		let mipmaps;

		if ( isCompressed ) {

			for ( let i = 0; i < 6; i ++ ) {

				mipmaps = cubeImage[ i ].mipmaps;

				for ( let j = 0; j < mipmaps.length; j ++ ) {

					const mipmap = mipmaps[ j ];

					if ( texture.format !== RGBAFormat && texture.format !== RGBFormat ) {

						if ( glFormat !== null ) {

							state.compressedTexImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data );

						} else {

							console.warn( 'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()' );

						}

					} else {

						state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

					}

				}

			}

			textureProperties.__maxMipLevel = mipmaps.length - 1;

		} else {

			mipmaps = texture.mipmaps;

			for ( let i = 0; i < 6; i ++ ) {

				if ( isDataTexture ) {

					state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, cubeImage[ i ].width, cubeImage[ i ].height, 0, glFormat, glType, cubeImage[ i ].data );

					for ( let j = 0; j < mipmaps.length; j ++ ) {

						const mipmap = mipmaps[ j ];
						const mipmapImage = mipmap.image[ i ].image;

						state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, mipmapImage.width, mipmapImage.height, 0, glFormat, glType, mipmapImage.data );

					}

				} else {

					state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, glFormat, glType, cubeImage[ i ] );

					for ( let j = 0; j < mipmaps.length; j ++ ) {

						const mipmap = mipmaps[ j ];

						state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, glFormat, glType, mipmap.image[ i ] );

					}

				}

			}

			textureProperties.__maxMipLevel = mipmaps.length;

		}

		if ( textureNeedsGenerateMipmaps( texture, supportsMips ) ) {

			// We assume images for cube map have the same size.
			generateMipmap( _gl.TEXTURE_CUBE_MAP, texture, image.width, image.height );

		}

		textureProperties.__version = texture.version;

		if ( texture.onUpdate ) texture.onUpdate( texture );

	}

	// Render targets

	// Setup storage for target texture and bind it to correct framebuffer
	function setupFrameBufferTexture( framebuffer, renderTarget, attachment, textureTarget ) {

		const glFormat = utils.convert( renderTarget.texture.format );
		const glType = utils.convert( renderTarget.texture.type );
		const glInternalFormat = getInternalFormat( renderTarget.texture.internalFormat, glFormat, glType );
		state.texImage2D( textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );
		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
		_gl.framebufferTexture2D( _gl.FRAMEBUFFER, attachment, textureTarget, properties.get( renderTarget.texture ).__webglTexture, 0 );
		_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

	}

	// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
	function setupRenderBufferStorage( renderbuffer, renderTarget, isMultisample ) {

		_gl.bindRenderbuffer( _gl.RENDERBUFFER, renderbuffer );

		if ( renderTarget.depthBuffer && ! renderTarget.stencilBuffer ) {

			let glInternalFormat = _gl.DEPTH_COMPONENT16;

			if ( isMultisample ) {

				const depthTexture = renderTarget.depthTexture;

				if ( depthTexture && depthTexture.isDepthTexture ) {

					if ( depthTexture.type === FloatType ) {

						glInternalFormat = _gl.DEPTH_COMPONENT32F;

					} else if ( depthTexture.type === UnsignedIntType ) {

						glInternalFormat = _gl.DEPTH_COMPONENT24;

					}

				}

				const samples = getRenderTargetSamples( renderTarget );

				_gl.renderbufferStorageMultisample( _gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height );

			} else {

				_gl.renderbufferStorage( _gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height );

			}

			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

		} else if ( renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

			if ( isMultisample ) {

				const samples = getRenderTargetSamples( renderTarget );

				_gl.renderbufferStorageMultisample( _gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height );

			} else {

				_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height );

			}


			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

		} else {

			const glFormat = utils.convert( renderTarget.texture.format );
			const glType = utils.convert( renderTarget.texture.type );
			const glInternalFormat = getInternalFormat( renderTarget.texture.internalFormat, glFormat, glType );

			if ( isMultisample ) {

				const samples = getRenderTargetSamples( renderTarget );

				_gl.renderbufferStorageMultisample( _gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height );

			} else {

				_gl.renderbufferStorage( _gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height );

			}

		}

		_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );

	}

	// Setup resources for a Depth Texture for a FBO (needs an extension)
	function setupDepthTexture( framebuffer, renderTarget ) {

		const isCube = ( renderTarget && renderTarget.isWebGLCubeRenderTarget );
		if ( isCube ) throw new Error( 'Depth Texture with cube render targets is not supported' );

		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );

		if ( ! ( renderTarget.depthTexture && renderTarget.depthTexture.isDepthTexture ) ) {

			throw new Error( 'renderTarget.depthTexture must be an instance of THREE.DepthTexture' );

		}

		// upload an empty depth texture with framebuffer size
		if ( ! properties.get( renderTarget.depthTexture ).__webglTexture ||
				renderTarget.depthTexture.image.width !== renderTarget.width ||
				renderTarget.depthTexture.image.height !== renderTarget.height ) {

			renderTarget.depthTexture.image.width = renderTarget.width;
			renderTarget.depthTexture.image.height = renderTarget.height;
			renderTarget.depthTexture.needsUpdate = true;

		}

		setTexture2D( renderTarget.depthTexture, 0 );

		const webglDepthTexture = properties.get( renderTarget.depthTexture ).__webglTexture;

		if ( renderTarget.depthTexture.format === DepthFormat ) {

			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0 );

		} else if ( renderTarget.depthTexture.format === DepthStencilFormat ) {

			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0 );

		} else {

			throw new Error( 'Unknown depthTexture format' );

		}

	}

	// Setup GL resources for a non-texture depth buffer
	function setupDepthRenderbuffer( renderTarget ) {

		const renderTargetProperties = properties.get( renderTarget );

		const isCube = ( renderTarget.isWebGLCubeRenderTarget === true );

		if ( renderTarget.depthTexture ) {

			if ( isCube ) throw new Error( 'target.depthTexture not supported in Cube render targets' );

			setupDepthTexture( renderTargetProperties.__webglFramebuffer, renderTarget );

		} else {

			if ( isCube ) {

				renderTargetProperties.__webglDepthbuffer = [];

				for ( let i = 0; i < 6; i ++ ) {

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[ i ] );
					renderTargetProperties.__webglDepthbuffer[ i ] = _gl.createRenderbuffer();
					setupRenderBufferStorage( renderTargetProperties.__webglDepthbuffer[ i ], renderTarget, false );

				}

			} else {

				_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer );
				renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
				setupRenderBufferStorage( renderTargetProperties.__webglDepthbuffer, renderTarget, false );

			}

		}

		_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

	}

	// Set up GL resources for the render target
	function setupRenderTarget( renderTarget ) {

		const renderTargetProperties = properties.get( renderTarget );
		const textureProperties = properties.get( renderTarget.texture );

		renderTarget.addEventListener( 'dispose', onRenderTargetDispose );

		textureProperties.__webglTexture = _gl.createTexture();

		info.memory.textures ++;

		const isCube = ( renderTarget.isWebGLCubeRenderTarget === true );
		const isMultisample = ( renderTarget.isWebGLMultisampleRenderTarget === true );
		const supportsMips = isPowerOfTwo( renderTarget ) || isWebGL2;

		// Handles WebGL2 RGBFormat fallback - #18858

		if ( isWebGL2 && renderTarget.texture.format === RGBFormat && ( renderTarget.texture.type === FloatType || renderTarget.texture.type === HalfFloatType ) ) {

			renderTarget.texture.format = RGBAFormat;

			console.warn( 'THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.' );

		}

		// Setup framebuffer

		if ( isCube ) {

			renderTargetProperties.__webglFramebuffer = [];

			for ( let i = 0; i < 6; i ++ ) {

				renderTargetProperties.__webglFramebuffer[ i ] = _gl.createFramebuffer();

			}

		} else {

			renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();

			if ( isMultisample ) {

				if ( isWebGL2 ) {

					renderTargetProperties.__webglMultisampledFramebuffer = _gl.createFramebuffer();
					renderTargetProperties.__webglColorRenderbuffer = _gl.createRenderbuffer();

					_gl.bindRenderbuffer( _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer );

					const glFormat = utils.convert( renderTarget.texture.format );
					const glType = utils.convert( renderTarget.texture.type );
					const glInternalFormat = getInternalFormat( renderTarget.texture.internalFormat, glFormat, glType );
					const samples = getRenderTargetSamples( renderTarget );
					_gl.renderbufferStorageMultisample( _gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height );

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer );
					_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer );
					_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );

					if ( renderTarget.depthBuffer ) {

						renderTargetProperties.__webglDepthRenderbuffer = _gl.createRenderbuffer();
						setupRenderBufferStorage( renderTargetProperties.__webglDepthRenderbuffer, renderTarget, true );

					}

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );


				} else {

					console.warn( 'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.' );

				}

			}

		}

		// Setup color buffer

		if ( isCube ) {

			state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture );
			setTextureParameters( _gl.TEXTURE_CUBE_MAP, renderTarget.texture, supportsMips );

			for ( let i = 0; i < 6; i ++ ) {

				setupFrameBufferTexture( renderTargetProperties.__webglFramebuffer[ i ], renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i );

			}

			if ( textureNeedsGenerateMipmaps( renderTarget.texture, supportsMips ) ) {

				generateMipmap( _gl.TEXTURE_CUBE_MAP, renderTarget.texture, renderTarget.width, renderTarget.height );

			}

			state.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

		} else {

			state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );
			setTextureParameters( _gl.TEXTURE_2D, renderTarget.texture, supportsMips );
			setupFrameBufferTexture( renderTargetProperties.__webglFramebuffer, renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D );

			if ( textureNeedsGenerateMipmaps( renderTarget.texture, supportsMips ) ) {

				generateMipmap( _gl.TEXTURE_2D, renderTarget.texture, renderTarget.width, renderTarget.height );

			}

			state.bindTexture( _gl.TEXTURE_2D, null );

		}

		// Setup depth and stencil buffers

		if ( renderTarget.depthBuffer ) {

			setupDepthRenderbuffer( renderTarget );

		}

	}

	function updateRenderTargetMipmap( renderTarget ) {

		const texture = renderTarget.texture;
		const supportsMips = isPowerOfTwo( renderTarget ) || isWebGL2;

		if ( textureNeedsGenerateMipmaps( texture, supportsMips ) ) {

			const target = renderTarget.isWebGLCubeRenderTarget ? _gl.TEXTURE_CUBE_MAP : _gl.TEXTURE_2D;
			const webglTexture = properties.get( texture ).__webglTexture;

			state.bindTexture( target, webglTexture );
			generateMipmap( target, texture, renderTarget.width, renderTarget.height );
			state.bindTexture( target, null );

		}

	}

	function updateMultisampleRenderTarget( renderTarget ) {

		if ( renderTarget.isWebGLMultisampleRenderTarget ) {

			if ( isWebGL2 ) {

				const renderTargetProperties = properties.get( renderTarget );

				_gl.bindFramebuffer( _gl.READ_FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer );
				_gl.bindFramebuffer( _gl.DRAW_FRAMEBUFFER, renderTargetProperties.__webglFramebuffer );

				const width = renderTarget.width;
				const height = renderTarget.height;
				let mask = _gl.COLOR_BUFFER_BIT;

				if ( renderTarget.depthBuffer ) mask |= _gl.DEPTH_BUFFER_BIT;
				if ( renderTarget.stencilBuffer ) mask |= _gl.STENCIL_BUFFER_BIT;

				_gl.blitFramebuffer( 0, 0, width, height, 0, 0, width, height, mask, _gl.NEAREST );

				_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer ); // see #18905

			} else {

				console.warn( 'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.' );

			}

		}

	}

	function getRenderTargetSamples( renderTarget ) {

		return ( isWebGL2 && renderTarget.isWebGLMultisampleRenderTarget ) ?
			Math.min( maxSamples, renderTarget.samples ) : 0;

	}

	function updateVideoTexture( texture ) {

		const frame = info.render.frame;

		// Check the last frame we updated the VideoTexture

		if ( _videoTextures.get( texture ) !== frame ) {

			_videoTextures.set( texture, frame );
			texture.update();

		}

	}

	// backwards compatibility

	let warnedTexture2D = false;
	let warnedTextureCube = false;

	function safeSetTexture2D( texture, slot ) {

		if ( texture && texture.isWebGLRenderTarget ) {

			if ( warnedTexture2D === false ) {

				console.warn( "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead." );
				warnedTexture2D = true;

			}

			texture = texture.texture;

		}

		setTexture2D( texture, slot );

	}

	function safeSetTextureCube( texture, slot ) {

		if ( texture && texture.isWebGLCubeRenderTarget ) {

			if ( warnedTextureCube === false ) {

				console.warn( "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead." );
				warnedTextureCube = true;

			}

			texture = texture.texture;

		}


		setTextureCube( texture, slot );

	}

	//

	this.allocateTextureUnit = allocateTextureUnit;
	this.resetTextureUnits = resetTextureUnits;

	this.setTexture2D = setTexture2D;
	this.setTexture2DArray = setTexture2DArray;
	this.setTexture3D = setTexture3D;
	this.setTextureCube = setTextureCube;
	this.setupRenderTarget = setupRenderTarget;
	this.updateRenderTargetMipmap = updateRenderTargetMipmap;
	this.updateMultisampleRenderTarget = updateMultisampleRenderTarget;

	this.safeSetTexture2D = safeSetTexture2D;
	this.safeSetTextureCube = safeSetTextureCube;

}

function WebGLUtils( gl, extensions, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	function convert( p ) {

		let extension;

		if ( p === UnsignedByteType ) return gl.UNSIGNED_BYTE;
		if ( p === UnsignedShort4444Type ) return gl.UNSIGNED_SHORT_4_4_4_4;
		if ( p === UnsignedShort5551Type ) return gl.UNSIGNED_SHORT_5_5_5_1;
		if ( p === UnsignedShort565Type ) return gl.UNSIGNED_SHORT_5_6_5;

		if ( p === ByteType ) return gl.BYTE;
		if ( p === ShortType ) return gl.SHORT;
		if ( p === UnsignedShortType ) return gl.UNSIGNED_SHORT;
		if ( p === IntType ) return gl.INT;
		if ( p === UnsignedIntType ) return gl.UNSIGNED_INT;
		if ( p === FloatType ) return gl.FLOAT;

		if ( p === HalfFloatType ) {

			if ( isWebGL2 ) return gl.HALF_FLOAT;

			extension = extensions.get( 'OES_texture_half_float' );

			if ( extension !== null ) {

				return extension.HALF_FLOAT_OES;

			} else {

				return null;

			}

		}

		if ( p === AlphaFormat ) return gl.ALPHA;
		if ( p === RGBFormat ) return gl.RGB;
		if ( p === RGBAFormat ) return gl.RGBA;
		if ( p === LuminanceFormat ) return gl.LUMINANCE;
		if ( p === LuminanceAlphaFormat ) return gl.LUMINANCE_ALPHA;
		if ( p === DepthFormat ) return gl.DEPTH_COMPONENT;
		if ( p === DepthStencilFormat ) return gl.DEPTH_STENCIL;
		if ( p === RedFormat ) return gl.RED;

		// WebGL2 formats.

		if ( p === RedIntegerFormat ) return gl.RED_INTEGER;
		if ( p === RGFormat ) return gl.RG;
		if ( p === RGIntegerFormat ) return gl.RG_INTEGER;
		if ( p === RGBIntegerFormat ) return gl.RGB_INTEGER;
		if ( p === RGBAIntegerFormat ) return gl.RGBA_INTEGER;

		if ( p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format ||
			p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_s3tc' );

			if ( extension !== null ) {

				if ( p === RGB_S3TC_DXT1_Format ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if ( p === RGBA_S3TC_DXT1_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if ( p === RGBA_S3TC_DXT3_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if ( p === RGBA_S3TC_DXT5_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

			} else {

				return null;

			}

		}

		if ( p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format ||
			p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_pvrtc' );

			if ( extension !== null ) {

				if ( p === RGB_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if ( p === RGB_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if ( p === RGBA_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if ( p === RGBA_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

			} else {

				return null;

			}

		}

		if ( p === RGB_ETC1_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_etc1' );

			if ( extension !== null ) {

				return extension.COMPRESSED_RGB_ETC1_WEBGL;

			} else {

				return null;

			}

		}

		if ( p === RGB_ETC2_Format || p === RGBA_ETC2_EAC_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_etc' );

			if ( extension !== null ) {

				if ( p === RGB_ETC2_Format ) return extension.COMPRESSED_RGB8_ETC2;
				if ( p === RGBA_ETC2_EAC_Format ) return extension.COMPRESSED_RGBA8_ETC2_EAC;

			}

		}

		if ( p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format ||
			p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format ||
			p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format ||
			p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format ||
			p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format ||
			p === SRGB8_ALPHA8_ASTC_4x4_Format || p === SRGB8_ALPHA8_ASTC_5x4_Format || p === SRGB8_ALPHA8_ASTC_5x5_Format ||
			p === SRGB8_ALPHA8_ASTC_6x5_Format || p === SRGB8_ALPHA8_ASTC_6x6_Format || p === SRGB8_ALPHA8_ASTC_8x5_Format ||
			p === SRGB8_ALPHA8_ASTC_8x6_Format || p === SRGB8_ALPHA8_ASTC_8x8_Format || p === SRGB8_ALPHA8_ASTC_10x5_Format ||
			p === SRGB8_ALPHA8_ASTC_10x6_Format || p === SRGB8_ALPHA8_ASTC_10x8_Format || p === SRGB8_ALPHA8_ASTC_10x10_Format ||
			p === SRGB8_ALPHA8_ASTC_12x10_Format || p === SRGB8_ALPHA8_ASTC_12x12_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_astc' );

			if ( extension !== null ) {

				// TODO Complete?

				return p;

			} else {

				return null;

			}

		}

		if ( p === RGBA_BPTC_Format ) {

			extension = extensions.get( 'EXT_texture_compression_bptc' );

			if ( extension !== null ) {

				// TODO Complete?

				return p;

			} else {

				return null;

			}

		}

		if ( p === UnsignedInt248Type ) {

			if ( isWebGL2 ) return gl.UNSIGNED_INT_24_8;

			extension = extensions.get( 'WEBGL_depth_texture' );

			if ( extension !== null ) {

				return extension.UNSIGNED_INT_24_8_WEBGL;

			} else {

				return null;

			}

		}

	}

	return { convert: convert };

}

function ArrayCamera( array ) {

	PerspectiveCamera.call( this );

	this.cameras = array || [];

}

ArrayCamera.prototype = Object.assign( Object.create( PerspectiveCamera.prototype ), {

	constructor: ArrayCamera,

	isArrayCamera: true

} );

function Group() {

	Object3D.call( this );

	this.type = 'Group';

}

Group.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Group,

	isGroup: true

} );

function WebXRController() {

	this._targetRay = null;
	this._grip = null;
	this._hand = null;

}

Object.assign( WebXRController.prototype, {

	constructor: WebXRController,

	getHandSpace: function () {

		if ( this._hand === null ) {

			this._hand = new Group();
			this._hand.matrixAutoUpdate = false;
			this._hand.visible = false;

			this._hand.joints = [];
			this._hand.inputState = { pinching: false };

			if ( window.XRHand ) {

				for ( let i = 0; i <= window.XRHand.LITTLE_PHALANX_TIP; i ++ ) {

					// The transform of this joint will be updated with the joint pose on each frame
					const joint = new Group();
					joint.matrixAutoUpdate = false;
					joint.visible = false;
					this._hand.joints.push( joint );
					// ??
					this._hand.add( joint );

				}

			}

		}

		return this._hand;

	},

	getTargetRaySpace: function () {

		if ( this._targetRay === null ) {

			this._targetRay = new Group();
			this._targetRay.matrixAutoUpdate = false;
			this._targetRay.visible = false;

		}

		return this._targetRay;

	},

	getGripSpace: function () {

		if ( this._grip === null ) {

			this._grip = new Group();
			this._grip.matrixAutoUpdate = false;
			this._grip.visible = false;

		}

		return this._grip;

	},

	dispatchEvent: function ( event ) {

		if ( this._targetRay !== null ) {

			this._targetRay.dispatchEvent( event );

		}

		if ( this._grip !== null ) {

			this._grip.dispatchEvent( event );

		}

		if ( this._hand !== null ) {

			this._hand.dispatchEvent( event );

		}

		return this;

	},

	disconnect: function ( inputSource ) {

		this.dispatchEvent( { type: 'disconnected', data: inputSource } );

		if ( this._targetRay !== null ) {

			this._targetRay.visible = false;

		}

		if ( this._grip !== null ) {

			this._grip.visible = false;

		}

		if ( this._hand !== null ) {

			this._hand.visible = false;

		}

		return this;

	},

	update: function ( inputSource, frame, referenceSpace ) {

		let inputPose = null;
		let gripPose = null;
		let handPose = null;

		const targetRay = this._targetRay;
		const grip = this._grip;
		const hand = this._hand;

		if ( inputSource ) {

			if ( hand && inputSource.hand ) {

				handPose = true;

				for ( let i = 0; i <= window.XRHand.LITTLE_PHALANX_TIP; i ++ ) {

					if ( inputSource.hand[ i ] ) {

						// Update the joints groups with the XRJoint poses
						const jointPose = frame.getJointPose( inputSource.hand[ i ], referenceSpace );
						const joint = hand.joints[ i ];

						if ( jointPose !== null ) {

							joint.matrix.fromArray( jointPose.transform.matrix );
							joint.matrix.decompose( joint.position, joint.rotation, joint.scale );
							joint.jointRadius = jointPose.radius;

						}

						joint.visible = jointPose !== null;

						// Custom events

						// Check pinch
						const indexTip = hand.joints[ window.XRHand.INDEX_PHALANX_TIP ];
						const thumbTip = hand.joints[ window.XRHand.THUMB_PHALANX_TIP ];
						const distance = indexTip.position.distanceTo( thumbTip.position );

						const distanceToPinch = 0.02;
						const threshold = 0.005;

						if ( hand.inputState.pinching && distance > distanceToPinch + threshold ) {

							hand.inputState.pinching = false;
							this.dispatchEvent( {
								type: "pinchend",
								handedness: inputSource.handedness,
								target: this
							} );

						} else if ( ! hand.inputState.pinching && distance <= distanceToPinch - threshold ) {

							hand.inputState.pinching = true;
							this.dispatchEvent( {
								type: "pinchstart",
								handedness: inputSource.handedness,
								target: this
							} );

						}

					}

				}

			} else {

				if ( targetRay !== null ) {

					inputPose = frame.getPose( inputSource.targetRaySpace, referenceSpace );

					if ( inputPose !== null ) {

						targetRay.matrix.fromArray( inputPose.transform.matrix );
						targetRay.matrix.decompose( targetRay.position, targetRay.rotation, targetRay.scale );

					}

				}

				if ( grip !== null && inputSource.gripSpace ) {

					gripPose = frame.getPose( inputSource.gripSpace, referenceSpace );

					if ( gripPose !== null ) {

						grip.matrix.fromArray( gripPose.transform.matrix );
						grip.matrix.decompose( grip.position, grip.rotation, grip.scale );

					}

				}

			}

		}

		if ( targetRay !== null ) {

			targetRay.visible = ( inputPose !== null );

		}

		if ( grip !== null ) {

			grip.visible = ( gripPose !== null );

		}

		if ( hand !== null ) {

			hand.visible = ( handPose !== null );

		}

		return this;

	}

} );

function WebXRManager( renderer, gl ) {

	const scope = this;

	let session = null;

	let framebufferScaleFactor = 1.0;

	let referenceSpace = null;
	let referenceSpaceType = 'local-floor';

	let pose = null;

	const controllers = [];
	const inputSourcesMap = new Map();

	//

	const cameraL = new PerspectiveCamera();
	cameraL.layers.enable( 1 );
	cameraL.viewport = new Vector4();

	const cameraR = new PerspectiveCamera();
	cameraR.layers.enable( 2 );
	cameraR.viewport = new Vector4();

	const cameras = [ cameraL, cameraR ];

	const cameraVR = new ArrayCamera();
	cameraVR.layers.enable( 1 );
	cameraVR.layers.enable( 2 );

	let _currentDepthNear = null;
	let _currentDepthFar = null;

	//

	this.enabled = false;

	this.isPresenting = false;

	this.getController = function ( index ) {

		let controller = controllers[ index ];

		if ( controller === undefined ) {

			controller = new WebXRController();
			controllers[ index ] = controller;

		}

		return controller.getTargetRaySpace();

	};

	this.getControllerGrip = function ( index ) {

		let controller = controllers[ index ];

		if ( controller === undefined ) {

			controller = new WebXRController();
			controllers[ index ] = controller;

		}

		return controller.getGripSpace();

	};

	this.getHand = function ( index ) {

		let controller = controllers[ index ];

		if ( controller === undefined ) {

			controller = new WebXRController();
			controllers[ index ] = controller;

		}

		return controller.getHandSpace();

	};

	//

	function onSessionEvent( event ) {

		const controller = inputSourcesMap.get( event.inputSource );

		if ( controller ) {

			controller.dispatchEvent( { type: event.type, data: event.inputSource } );

		}

	}

	function onSessionEnd() {

		inputSourcesMap.forEach( function ( controller, inputSource ) {

			controller.disconnect( inputSource );

		} );

		inputSourcesMap.clear();

		//

		renderer.setFramebuffer( null );
		renderer.setRenderTarget( renderer.getRenderTarget() ); // Hack #15830
		animation.stop();

		scope.isPresenting = false;

		scope.dispatchEvent( { type: 'sessionend' } );

	}

	function onRequestReferenceSpace( value ) {

		referenceSpace = value;

		animation.setContext( session );
		animation.start();

		scope.isPresenting = true;

		scope.dispatchEvent( { type: 'sessionstart' } );

	}

	this.setFramebufferScaleFactor = function ( value ) {

		framebufferScaleFactor = value;

		if ( scope.isPresenting === true ) {

			console.warn( 'THREE.WebXRManager: Cannot change framebuffer scale while presenting.' );

		}

	};

	this.setReferenceSpaceType = function ( value ) {

		referenceSpaceType = value;

		if ( scope.isPresenting === true ) {

			console.warn( 'THREE.WebXRManager: Cannot change reference space type while presenting.' );

		}

	};

	this.getReferenceSpace = function () {

		return referenceSpace;

	};

	this.getSession = function () {

		return session;

	};

	this.setSession = function ( value ) {

		session = value;

		if ( session !== null ) {

			session.addEventListener( 'select', onSessionEvent );
			session.addEventListener( 'selectstart', onSessionEvent );
			session.addEventListener( 'selectend', onSessionEvent );
			session.addEventListener( 'squeeze', onSessionEvent );
			session.addEventListener( 'squeezestart', onSessionEvent );
			session.addEventListener( 'squeezeend', onSessionEvent );
			session.addEventListener( 'end', onSessionEnd );

			const attributes = gl.getContextAttributes();

			if ( attributes.xrCompatible !== true ) {

				gl.makeXRCompatible();

			}

			const layerInit = {
				antialias: attributes.antialias,
				alpha: attributes.alpha,
				depth: attributes.depth,
				stencil: attributes.stencil,
				framebufferScaleFactor: framebufferScaleFactor
			};

			// eslint-disable-next-line no-undef
			const baseLayer = new XRWebGLLayer( session, gl, layerInit );

			session.updateRenderState( { baseLayer: baseLayer } );

			session.requestReferenceSpace( referenceSpaceType ).then( onRequestReferenceSpace );

			//

			session.addEventListener( 'inputsourceschange', updateInputSources );

		}

	};

	function updateInputSources( event ) {

		const inputSources = session.inputSources;

		// Assign inputSources to available controllers

		for ( let i = 0; i < controllers.length; i ++ ) {

			inputSourcesMap.set( inputSources[ i ], controllers[ i ] );

		}

		// Notify disconnected

		for ( let i = 0; i < event.removed.length; i ++ ) {

			const inputSource = event.removed[ i ];
			const controller = inputSourcesMap.get( inputSource );

			if ( controller ) {

				controller.dispatchEvent( { type: 'disconnected', data: inputSource } );
				inputSourcesMap.delete( inputSource );

			}

		}

		// Notify connected

		for ( let i = 0; i < event.added.length; i ++ ) {

			const inputSource = event.added[ i ];
			const controller = inputSourcesMap.get( inputSource );

			if ( controller ) {

				controller.dispatchEvent( { type: 'connected', data: inputSource } );

			}

		}

	}

	//

	const cameraLPos = new Vector3();
	const cameraRPos = new Vector3();

	/**
	 * Assumes 2 cameras that are parallel and share an X-axis, and that
	 * the cameras' projection and world matrices have already been set.
	 * And that near and far planes are identical for both cameras.
	 * Visualization of this technique: https://computergraphics.stackexchange.com/a/4765
	 */
	function setProjectionFromUnion( camera, cameraL, cameraR ) {

		cameraLPos.setFromMatrixPosition( cameraL.matrixWorld );
		cameraRPos.setFromMatrixPosition( cameraR.matrixWorld );

		const ipd = cameraLPos.distanceTo( cameraRPos );

		const projL = cameraL.projectionMatrix.elements;
		const projR = cameraR.projectionMatrix.elements;

		// VR systems will have identical far and near planes, and
		// most likely identical top and bottom frustum extents.
		// Use the left camera for these values.
		const near = projL[ 14 ] / ( projL[ 10 ] - 1 );
		const far = projL[ 14 ] / ( projL[ 10 ] + 1 );
		const topFov = ( projL[ 9 ] + 1 ) / projL[ 5 ];
		const bottomFov = ( projL[ 9 ] - 1 ) / projL[ 5 ];

		const leftFov = ( projL[ 8 ] - 1 ) / projL[ 0 ];
		const rightFov = ( projR[ 8 ] + 1 ) / projR[ 0 ];
		const left = near * leftFov;
		const right = near * rightFov;

		// Calculate the new camera's position offset from the
		// left camera. xOffset should be roughly half `ipd`.
		const zOffset = ipd / ( - leftFov + rightFov );
		const xOffset = zOffset * - leftFov;

		// TODO: Better way to apply this offset?
		cameraL.matrixWorld.decompose( camera.position, camera.quaternion, camera.scale );
		camera.translateX( xOffset );
		camera.translateZ( zOffset );
		camera.matrixWorld.compose( camera.position, camera.quaternion, camera.scale );
		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

		// Find the union of the frustum values of the cameras and scale
		// the values so that the near plane's position does not change in world space,
		// although must now be relative to the new union camera.
		const near2 = near + zOffset;
		const far2 = far + zOffset;
		const left2 = left - xOffset;
		const right2 = right + ( ipd - xOffset );
		const top2 = topFov * far / far2 * near2;
		const bottom2 = bottomFov * far / far2 * near2;

		camera.projectionMatrix.makePerspective( left2, right2, top2, bottom2, near2, far2 );

	}

	function updateCamera( camera, parent ) {

		if ( parent === null ) {

			camera.matrixWorld.copy( camera.matrix );

		} else {

			camera.matrixWorld.multiplyMatrices( parent.matrixWorld, camera.matrix );

		}

		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

	}

	this.getCamera = function ( camera ) {

		cameraVR.near = cameraR.near = cameraL.near = camera.near;
		cameraVR.far = cameraR.far = cameraL.far = camera.far;

		if ( _currentDepthNear !== cameraVR.near || _currentDepthFar !== cameraVR.far ) {

			// Note that the new renderState won't apply until the next frame. See #18320

			session.updateRenderState( {
				depthNear: cameraVR.near,
				depthFar: cameraVR.far
			} );

			_currentDepthNear = cameraVR.near;
			_currentDepthFar = cameraVR.far;

		}

		const parent = camera.parent;
		const cameras = cameraVR.cameras;

		updateCamera( cameraVR, parent );

		for ( let i = 0; i < cameras.length; i ++ ) {

			updateCamera( cameras[ i ], parent );

		}

		// update camera and its children

		camera.matrixWorld.copy( cameraVR.matrixWorld );

		const children = camera.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].updateMatrixWorld( true );

		}

		// update projection matrix for proper view frustum culling

		if ( cameras.length === 2 ) {

			setProjectionFromUnion( cameraVR, cameraL, cameraR );

		} else {

			// assume single camera setup (AR)

			cameraVR.projectionMatrix.copy( cameraL.projectionMatrix );

		}

		return cameraVR;

	};

	// Animation Loop

	let onAnimationFrameCallback = null;

	function onAnimationFrame( time, frame ) {

		pose = frame.getViewerPose( referenceSpace );

		if ( pose !== null ) {

			const views = pose.views;
			const baseLayer = session.renderState.baseLayer;

			renderer.setFramebuffer( baseLayer.framebuffer );

			let cameraVRNeedsUpdate = false;

			// check if it's necessary to rebuild cameraVR's camera list

			if ( views.length !== cameraVR.cameras.length ) {

				cameraVR.cameras.length = 0;
				cameraVRNeedsUpdate = true;

			}

			for ( let i = 0; i < views.length; i ++ ) {

				const view = views[ i ];
				const viewport = baseLayer.getViewport( view );

				const camera = cameras[ i ];
				camera.matrix.fromArray( view.transform.matrix );
				camera.projectionMatrix.fromArray( view.projectionMatrix );
				camera.viewport.set( viewport.x, viewport.y, viewport.width, viewport.height );

				if ( i === 0 ) {

					cameraVR.matrix.copy( camera.matrix );

				}

				if ( cameraVRNeedsUpdate === true ) {

					cameraVR.cameras.push( camera );

				}

			}

		}

		//

		const inputSources = session.inputSources;

		for ( let i = 0; i < controllers.length; i ++ ) {

			const controller = controllers[ i ];
			const inputSource = inputSources[ i ];

			controller.update( inputSource, frame, referenceSpace );

		}

		if ( onAnimationFrameCallback ) onAnimationFrameCallback( time, frame );

	}

	const animation = new WebGLAnimation();
	animation.setAnimationLoop( onAnimationFrame );

	this.setAnimationLoop = function ( callback ) {

		onAnimationFrameCallback = callback;

	};

	this.dispose = function () {};

}

Object.assign( WebXRManager.prototype, EventDispatcher.prototype );

function WebGLMaterials( properties ) {

	function refreshFogUniforms( uniforms, fog ) {

		uniforms.fogColor.value.copy( fog.color );

		if ( fog.isFog ) {

			uniforms.fogNear.value = fog.near;
			uniforms.fogFar.value = fog.far;

		} else if ( fog.isFogExp2 ) {

			uniforms.fogDensity.value = fog.density;

		}

	}

	function refreshMaterialUniforms( uniforms, material, pixelRatio, height ) {

		if ( material.isMeshBasicMaterial ) {

			refreshUniformsCommon( uniforms, material );

		} else if ( material.isMeshLambertMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsLambert( uniforms, material );

		} else if ( material.isMeshToonMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsToon( uniforms, material );

		} else if ( material.isMeshPhongMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsPhong( uniforms, material );

		} else if ( material.isMeshStandardMaterial ) {

			refreshUniformsCommon( uniforms, material );

			if ( material.isMeshPhysicalMaterial ) {

				refreshUniformsPhysical( uniforms, material );

			} else {

				refreshUniformsStandard( uniforms, material );

			}

		} else if ( material.isMeshMatcapMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsMatcap( uniforms, material );

		} else if ( material.isMeshDepthMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsDepth( uniforms, material );

		} else if ( material.isMeshDistanceMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsDistance( uniforms, material );

		} else if ( material.isMeshNormalMaterial ) {

			refreshUniformsCommon( uniforms, material );
			refreshUniformsNormal( uniforms, material );

		} else if ( material.isLineBasicMaterial ) {

			refreshUniformsLine( uniforms, material );

			if ( material.isLineDashedMaterial ) {

				refreshUniformsDash( uniforms, material );

			}

		} else if ( material.isPointsMaterial ) {

			refreshUniformsPoints( uniforms, material, pixelRatio, height );

		} else if ( material.isSpriteMaterial ) {

			refreshUniformsSprites( uniforms, material );

		} else if ( material.isShadowMaterial ) {

			uniforms.color.value.copy( material.color );
			uniforms.opacity.value = material.opacity;

		} else if ( material.isShaderMaterial ) {

			material.uniformsNeedUpdate = false; // #15581

		}

	}

	function refreshUniformsCommon( uniforms, material ) {

		uniforms.opacity.value = material.opacity;

		if ( material.color ) {

			uniforms.diffuse.value.copy( material.color );

		}

		if ( material.emissive ) {

			uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

		}

		if ( material.map ) {

			uniforms.map.value = material.map;

		}

		if ( material.alphaMap ) {

			uniforms.alphaMap.value = material.alphaMap;

		}

		if ( material.specularMap ) {

			uniforms.specularMap.value = material.specularMap;

		}

		const envMap = properties.get( material ).envMap;

		if ( envMap ) {

			uniforms.envMap.value = envMap;

			uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap._needsFlipEnvMap ) ? - 1 : 1;

			uniforms.reflectivity.value = material.reflectivity;
			uniforms.refractionRatio.value = material.refractionRatio;

			const maxMipLevel = properties.get( envMap ).__maxMipLevel;

			if ( maxMipLevel !== undefined ) {

				uniforms.maxMipLevel.value = maxMipLevel;

			}

		}

		if ( material.lightMap ) {

			uniforms.lightMap.value = material.lightMap;
			uniforms.lightMapIntensity.value = material.lightMapIntensity;

		}

		if ( material.aoMap ) {

			uniforms.aoMap.value = material.aoMap;
			uniforms.aoMapIntensity.value = material.aoMapIntensity;

		}

		// uv repeat and offset setting priorities
		// 1. color map
		// 2. specular map
		// 3. displacementMap map
		// 4. normal map
		// 5. bump map
		// 6. roughnessMap map
		// 7. metalnessMap map
		// 8. alphaMap map
		// 9. emissiveMap map
		// 10. clearcoat map
		// 11. clearcoat normal map
		// 12. clearcoat roughnessMap map

		let uvScaleMap;

		if ( material.map ) {

			uvScaleMap = material.map;

		} else if ( material.specularMap ) {

			uvScaleMap = material.specularMap;

		} else if ( material.displacementMap ) {

			uvScaleMap = material.displacementMap;

		} else if ( material.normalMap ) {

			uvScaleMap = material.normalMap;

		} else if ( material.bumpMap ) {

			uvScaleMap = material.bumpMap;

		} else if ( material.roughnessMap ) {

			uvScaleMap = material.roughnessMap;

		} else if ( material.metalnessMap ) {

			uvScaleMap = material.metalnessMap;

		} else if ( material.alphaMap ) {

			uvScaleMap = material.alphaMap;

		} else if ( material.emissiveMap ) {

			uvScaleMap = material.emissiveMap;

		} else if ( material.clearcoatMap ) {

			uvScaleMap = material.clearcoatMap;

		} else if ( material.clearcoatNormalMap ) {

			uvScaleMap = material.clearcoatNormalMap;

		} else if ( material.clearcoatRoughnessMap ) {

			uvScaleMap = material.clearcoatRoughnessMap;

		}

		if ( uvScaleMap !== undefined ) {

			// backwards compatibility
			if ( uvScaleMap.isWebGLRenderTarget ) {

				uvScaleMap = uvScaleMap.texture;

			}

			if ( uvScaleMap.matrixAutoUpdate === true ) {

				uvScaleMap.updateMatrix();

			}

			uniforms.uvTransform.value.copy( uvScaleMap.matrix );

		}

		// uv repeat and offset setting priorities for uv2
		// 1. ao map
		// 2. light map

		let uv2ScaleMap;

		if ( material.aoMap ) {

			uv2ScaleMap = material.aoMap;

		} else if ( material.lightMap ) {

			uv2ScaleMap = material.lightMap;

		}

		if ( uv2ScaleMap !== undefined ) {

			// backwards compatibility
			if ( uv2ScaleMap.isWebGLRenderTarget ) {

				uv2ScaleMap = uv2ScaleMap.texture;

			}

			if ( uv2ScaleMap.matrixAutoUpdate === true ) {

				uv2ScaleMap.updateMatrix();

			}

			uniforms.uv2Transform.value.copy( uv2ScaleMap.matrix );

		}

	}

	function refreshUniformsLine( uniforms, material ) {

		uniforms.diffuse.value.copy( material.color );
		uniforms.opacity.value = material.opacity;

	}

	function refreshUniformsDash( uniforms, material ) {

		uniforms.dashSize.value = material.dashSize;
		uniforms.totalSize.value = material.dashSize + material.gapSize;
		uniforms.scale.value = material.scale;

	}

	function refreshUniformsPoints( uniforms, material, pixelRatio, height ) {

		uniforms.diffuse.value.copy( material.color );
		uniforms.opacity.value = material.opacity;
		uniforms.size.value = material.size * pixelRatio;
		uniforms.scale.value = height * 0.5;

		if ( material.map ) {

			uniforms.map.value = material.map;

		}

		if ( material.alphaMap ) {

			uniforms.alphaMap.value = material.alphaMap;

		}

		// uv repeat and offset setting priorities
		// 1. color map
		// 2. alpha map

		let uvScaleMap;

		if ( material.map ) {

			uvScaleMap = material.map;

		} else if ( material.alphaMap ) {

			uvScaleMap = material.alphaMap;

		}

		if ( uvScaleMap !== undefined ) {

			if ( uvScaleMap.matrixAutoUpdate === true ) {

				uvScaleMap.updateMatrix();

			}

			uniforms.uvTransform.value.copy( uvScaleMap.matrix );

		}

	}

	function refreshUniformsSprites( uniforms, material ) {

		uniforms.diffuse.value.copy( material.color );
		uniforms.opacity.value = material.opacity;
		uniforms.rotation.value = material.rotation;

		if ( material.map ) {

			uniforms.map.value = material.map;

		}

		if ( material.alphaMap ) {

			uniforms.alphaMap.value = material.alphaMap;

		}

		// uv repeat and offset setting priorities
		// 1. color map
		// 2. alpha map

		let uvScaleMap;

		if ( material.map ) {

			uvScaleMap = material.map;

		} else if ( material.alphaMap ) {

			uvScaleMap = material.alphaMap;

		}

		if ( uvScaleMap !== undefined ) {

			if ( uvScaleMap.matrixAutoUpdate === true ) {

				uvScaleMap.updateMatrix();

			}

			uniforms.uvTransform.value.copy( uvScaleMap.matrix );

		}

	}

	function refreshUniformsLambert( uniforms, material ) {

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

	}

	function refreshUniformsPhong( uniforms, material ) {

		uniforms.specular.value.copy( material.specular );
		uniforms.shininess.value = Math.max( material.shininess, 1e-4 ); // to prevent pow( 0.0, 0.0 )

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;
			if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );
			if ( material.side === BackSide ) uniforms.normalScale.value.negate();

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	function refreshUniformsToon( uniforms, material ) {

		if ( material.gradientMap ) {

			uniforms.gradientMap.value = material.gradientMap;

		}

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;
			if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );
			if ( material.side === BackSide ) uniforms.normalScale.value.negate();

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	function refreshUniformsStandard( uniforms, material ) {

		uniforms.roughness.value = material.roughness;
		uniforms.metalness.value = material.metalness;

		if ( material.roughnessMap ) {

			uniforms.roughnessMap.value = material.roughnessMap;

		}

		if ( material.metalnessMap ) {

			uniforms.metalnessMap.value = material.metalnessMap;

		}

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;
			if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );
			if ( material.side === BackSide ) uniforms.normalScale.value.negate();

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

		const envMap = properties.get( material ).envMap;

		if ( envMap ) {

			//uniforms.envMap.value = material.envMap; // part of uniforms common
			uniforms.envMapIntensity.value = material.envMapIntensity;

		}

	}

	function refreshUniformsPhysical( uniforms, material ) {

		refreshUniformsStandard( uniforms, material );

		uniforms.reflectivity.value = material.reflectivity; // also part of uniforms common

		uniforms.clearcoat.value = material.clearcoat;
		uniforms.clearcoatRoughness.value = material.clearcoatRoughness;
		if ( material.sheen ) uniforms.sheen.value.copy( material.sheen );

		if ( material.clearcoatMap ) {

			uniforms.clearcoatMap.value = material.clearcoatMap;

		}

		if ( material.clearcoatRoughnessMap ) {

			uniforms.clearcoatRoughnessMap.value = material.clearcoatRoughnessMap;

		}

		if ( material.clearcoatNormalMap ) {

			uniforms.clearcoatNormalScale.value.copy( material.clearcoatNormalScale );
			uniforms.clearcoatNormalMap.value = material.clearcoatNormalMap;

			if ( material.side === BackSide ) {

				uniforms.clearcoatNormalScale.value.negate();

			}

		}

		uniforms.transmission.value = material.transmission;

		if ( material.transmissionMap ) {

			uniforms.transmissionMap.value = material.transmissionMap;

		}

	}

	function refreshUniformsMatcap( uniforms, material ) {

		if ( material.matcap ) {

			uniforms.matcap.value = material.matcap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;
			if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );
			if ( material.side === BackSide ) uniforms.normalScale.value.negate();

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	function refreshUniformsDepth( uniforms, material ) {

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	function refreshUniformsDistance( uniforms, material ) {

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

		uniforms.referencePosition.value.copy( material.referencePosition );
		uniforms.nearDistance.value = material.nearDistance;
		uniforms.farDistance.value = material.farDistance;

	}

	function refreshUniformsNormal( uniforms, material ) {

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;
			if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );
			if ( material.side === BackSide ) uniforms.normalScale.value.negate();

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	return {
		refreshFogUniforms: refreshFogUniforms,
		refreshMaterialUniforms: refreshMaterialUniforms
	};

}

function WebGLRenderer( parameters ) {

	parameters = parameters || {};

	const _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' ),
		_context = parameters.context !== undefined ? parameters.context : null,

		_alpha = parameters.alpha !== undefined ? parameters.alpha : false,
		_depth = parameters.depth !== undefined ? parameters.depth : true,
		_stencil = parameters.stencil !== undefined ? parameters.stencil : true,
		_antialias = parameters.antialias !== undefined ? parameters.antialias : false,
		_premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
		_preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false,
		_powerPreference = parameters.powerPreference !== undefined ? parameters.powerPreference : 'default',
		_failIfMajorPerformanceCaveat = parameters.failIfMajorPerformanceCaveat !== undefined ? parameters.failIfMajorPerformanceCaveat : false;

	let currentRenderList = null;
	let currentRenderState = null;

	// public properties

	this.domElement = _canvas;

	// Debug configuration container
	this.debug = {

		/**
		 * Enables error checking and reporting when shader programs are being compiled
		 * @type {boolean}
		 */
		checkShaderErrors: true
	};

	// clearing

	this.autoClear = true;
	this.autoClearColor = true;
	this.autoClearDepth = true;
	this.autoClearStencil = true;

	// scene graph

	this.sortObjects = true;

	// user-defined clipping

	this.clippingPlanes = [];
	this.localClippingEnabled = false;

	// physically based shading

	this.gammaFactor = 2.0;	// for backwards compatibility
	this.outputEncoding = LinearEncoding;

	// physical lights

	this.physicallyCorrectLights = false;

	// tone mapping

	this.toneMapping = NoToneMapping;
	this.toneMappingExposure = 1.0;

	// morphs

	this.maxMorphTargets = 8;
	this.maxMorphNormals = 4;

	// internal properties

	const _this = this;

	let _isContextLost = false;

	// internal state cache

	let _framebuffer = null;

	let _currentActiveCubeFace = 0;
	let _currentActiveMipmapLevel = 0;
	let _currentRenderTarget = null;
	let _currentFramebuffer = null;
	let _currentMaterialId = - 1;

	let _currentCamera = null;
	let _currentArrayCamera = null;

	const _currentViewport = new Vector4();
	const _currentScissor = new Vector4();
	let _currentScissorTest = null;

	//

	let _width = _canvas.width;
	let _height = _canvas.height;

	let _pixelRatio = 1;
	let _opaqueSort = null;
	let _transparentSort = null;

	const _viewport = new Vector4( 0, 0, _width, _height );
	const _scissor = new Vector4( 0, 0, _width, _height );
	let _scissorTest = false;

	// frustum

	const _frustum = new Frustum();

	// clipping

	let _clippingEnabled = false;
	let _localClippingEnabled = false;

	// camera matrices cache

	const _projScreenMatrix = new Matrix4();

	const _vector3 = new Vector3();

	const _emptyScene = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };

	function getTargetPixelRatio() {

		return _currentRenderTarget === null ? _pixelRatio : 1;

	}

	// initialize

	let _gl = _context;

	function getContext( contextNames, contextAttributes ) {

		for ( let i = 0; i < contextNames.length; i ++ ) {

			const contextName = contextNames[ i ];
			const context = _canvas.getContext( contextName, contextAttributes );
			if ( context !== null ) return context;

		}

		return null;

	}

	try {

		const contextAttributes = {
			alpha: _alpha,
			depth: _depth,
			stencil: _stencil,
			antialias: _antialias,
			premultipliedAlpha: _premultipliedAlpha,
			preserveDrawingBuffer: _preserveDrawingBuffer,
			powerPreference: _powerPreference,
			failIfMajorPerformanceCaveat: _failIfMajorPerformanceCaveat
		};

		// event listeners must be registered before WebGL context is created, see #12753

		_canvas.addEventListener( 'webglcontextlost', onContextLost, false );
		_canvas.addEventListener( 'webglcontextrestored', onContextRestore, false );

		if ( _gl === null ) {

			const contextNames = [ 'webgl2', 'webgl', 'experimental-webgl' ];

			if ( _this.isWebGL1Renderer === true ) {

				contextNames.shift();

			}

			_gl = getContext( contextNames, contextAttributes );

			if ( _gl === null ) {

				if ( getContext( contextNames ) ) {

					throw new Error( 'Error creating WebGL context with your selected attributes.' );

				} else {

					throw new Error( 'Error creating WebGL context.' );

				}

			}

		}

		// Some experimental-webgl implementations do not have getShaderPrecisionFormat

		if ( _gl.getShaderPrecisionFormat === undefined ) {

			_gl.getShaderPrecisionFormat = function () {

				return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };

			};

		}

	} catch ( error ) {

		console.error( 'THREE.WebGLRenderer: ' + error.message );
		throw error;

	}

	let extensions, capabilities, state, info;
	let properties, textures, cubemaps, attributes, geometries, objects;
	let programCache, materials, renderLists, renderStates, clipping;

	let background, morphtargets, bufferRenderer, indexedBufferRenderer;

	let utils, bindingStates;

	function initGLContext() {

		extensions = new WebGLExtensions( _gl );

		capabilities = new WebGLCapabilities( _gl, extensions, parameters );

		if ( capabilities.isWebGL2 === false ) {

			extensions.get( 'WEBGL_depth_texture' );
			extensions.get( 'OES_texture_float' );
			extensions.get( 'OES_texture_half_float' );
			extensions.get( 'OES_texture_half_float_linear' );
			extensions.get( 'OES_standard_derivatives' );
			extensions.get( 'OES_element_index_uint' );
			extensions.get( 'OES_vertex_array_object' );
			extensions.get( 'ANGLE_instanced_arrays' );

		}

		extensions.get( 'OES_texture_float_linear' );

		utils = new WebGLUtils( _gl, extensions, capabilities );

		state = new WebGLState( _gl, extensions, capabilities );
		state.scissor( _currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio ).floor() );
		state.viewport( _currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio ).floor() );

		info = new WebGLInfo( _gl );
		properties = new WebGLProperties();
		textures = new WebGLTextures( _gl, extensions, state, properties, capabilities, utils, info );
		cubemaps = new WebGLCubeMaps( _this );
		attributes = new WebGLAttributes( _gl, capabilities );
		bindingStates = new WebGLBindingStates( _gl, extensions, attributes, capabilities );
		geometries = new WebGLGeometries( _gl, attributes, info, bindingStates );
		objects = new WebGLObjects( _gl, geometries, attributes, info );
		morphtargets = new WebGLMorphtargets( _gl );
		clipping = new WebGLClipping( properties );
		programCache = new WebGLPrograms( _this, cubemaps, extensions, capabilities, bindingStates, clipping );
		materials = new WebGLMaterials( properties );
		renderLists = new WebGLRenderLists( properties );
		renderStates = new WebGLRenderStates( extensions, capabilities );
		background = new WebGLBackground( _this, cubemaps, state, objects, _premultipliedAlpha );

		bufferRenderer = new WebGLBufferRenderer( _gl, extensions, info, capabilities );
		indexedBufferRenderer = new WebGLIndexedBufferRenderer( _gl, extensions, info, capabilities );

		info.programs = programCache.programs;

		_this.capabilities = capabilities;
		_this.extensions = extensions;
		_this.properties = properties;
		_this.renderLists = renderLists;
		_this.state = state;
		_this.info = info;

	}

	initGLContext();

	// xr

	const xr = new WebXRManager( _this, _gl );

	this.xr = xr;

	// shadow map

	const shadowMap = new WebGLShadowMap( _this, objects, capabilities.maxTextureSize );

	this.shadowMap = shadowMap;

	// API

	this.getContext = function () {

		return _gl;

	};

	this.getContextAttributes = function () {

		return _gl.getContextAttributes();

	};

	this.forceContextLoss = function () {

		const extension = extensions.get( 'WEBGL_lose_context' );
		if ( extension ) extension.loseContext();

	};

	this.forceContextRestore = function () {

		const extension = extensions.get( 'WEBGL_lose_context' );
		if ( extension ) extension.restoreContext();

	};

	this.getPixelRatio = function () {

		return _pixelRatio;

	};

	this.setPixelRatio = function ( value ) {

		if ( value === undefined ) return;

		_pixelRatio = value;

		this.setSize( _width, _height, false );

	};

	this.getSize = function ( target ) {

		if ( target === undefined ) {

			console.warn( 'WebGLRenderer: .getsize() now requires a Vector2 as an argument' );

			target = new Vector2();

		}

		return target.set( _width, _height );

	};

	this.setSize = function ( width, height, updateStyle ) {

		if ( xr.isPresenting ) {

			console.warn( 'THREE.WebGLRenderer: Can\'t change size while VR device is presenting.' );
			return;

		}

		_width = width;
		_height = height;

		_canvas.width = Math.floor( width * _pixelRatio );
		_canvas.height = Math.floor( height * _pixelRatio );

		if ( updateStyle !== false ) {

			_canvas.style.width = width + 'px';
			_canvas.style.height = height + 'px';

		}

		this.setViewport( 0, 0, width, height );

	};

	this.getDrawingBufferSize = function ( target ) {

		if ( target === undefined ) {

			console.warn( 'WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument' );

			target = new Vector2();

		}

		return target.set( _width * _pixelRatio, _height * _pixelRatio ).floor();

	};

	this.setDrawingBufferSize = function ( width, height, pixelRatio ) {

		_width = width;
		_height = height;

		_pixelRatio = pixelRatio;

		_canvas.width = Math.floor( width * pixelRatio );
		_canvas.height = Math.floor( height * pixelRatio );

		this.setViewport( 0, 0, width, height );

	};

	this.getCurrentViewport = function ( target ) {

		if ( target === undefined ) {

			console.warn( 'WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument' );

			target = new Vector4();

		}

		return target.copy( _currentViewport );

	};

	this.getViewport = function ( target ) {

		return target.copy( _viewport );

	};

	this.setViewport = function ( x, y, width, height ) {

		if ( x.isVector4 ) {

			_viewport.set( x.x, x.y, x.z, x.w );

		} else {

			_viewport.set( x, y, width, height );

		}

		state.viewport( _currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio ).floor() );

	};

	this.getScissor = function ( target ) {

		return target.copy( _scissor );

	};

	this.setScissor = function ( x, y, width, height ) {

		if ( x.isVector4 ) {

			_scissor.set( x.x, x.y, x.z, x.w );

		} else {

			_scissor.set( x, y, width, height );

		}

		state.scissor( _currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio ).floor() );

	};

	this.getScissorTest = function () {

		return _scissorTest;

	};

	this.setScissorTest = function ( boolean ) {

		state.setScissorTest( _scissorTest = boolean );

	};

	this.setOpaqueSort = function ( method ) {

		_opaqueSort = method;

	};

	this.setTransparentSort = function ( method ) {

		_transparentSort = method;

	};

	// Clearing

	this.getClearColor = function () {

		return background.getClearColor();

	};

	this.setClearColor = function () {

		background.setClearColor.apply( background, arguments );

	};

	this.getClearAlpha = function () {

		return background.getClearAlpha();

	};

	this.setClearAlpha = function () {

		background.setClearAlpha.apply( background, arguments );

	};

	this.clear = function ( color, depth, stencil ) {

		let bits = 0;

		if ( color === undefined || color ) bits |= _gl.COLOR_BUFFER_BIT;
		if ( depth === undefined || depth ) bits |= _gl.DEPTH_BUFFER_BIT;
		if ( stencil === undefined || stencil ) bits |= _gl.STENCIL_BUFFER_BIT;

		_gl.clear( bits );

	};

	this.clearColor = function () {

		this.clear( true, false, false );

	};

	this.clearDepth = function () {

		this.clear( false, true, false );

	};

	this.clearStencil = function () {

		this.clear( false, false, true );

	};

	//

	this.dispose = function () {

		_canvas.removeEventListener( 'webglcontextlost', onContextLost, false );
		_canvas.removeEventListener( 'webglcontextrestored', onContextRestore, false );

		renderLists.dispose();
		renderStates.dispose();
		properties.dispose();
		cubemaps.dispose();
		objects.dispose();
		bindingStates.dispose();

		xr.dispose();

		animation.stop();

	};

	// Events

	function onContextLost( event ) {

		event.preventDefault();

		console.log( 'THREE.WebGLRenderer: Context Lost.' );

		_isContextLost = true;

	}

	function onContextRestore( /* event */ ) {

		console.log( 'THREE.WebGLRenderer: Context Restored.' );

		_isContextLost = false;

		initGLContext();

	}

	function onMaterialDispose( event ) {

		const material = event.target;

		material.removeEventListener( 'dispose', onMaterialDispose );

		deallocateMaterial( material );

	}

	// Buffer deallocation

	function deallocateMaterial( material ) {

		releaseMaterialProgramReference( material );

		properties.remove( material );

	}


	function releaseMaterialProgramReference( material ) {

		const programInfo = properties.get( material ).program;

		if ( programInfo !== undefined ) {

			programCache.releaseProgram( programInfo );

		}

	}

	// Buffer rendering

	function renderObjectImmediate( object, program ) {

		object.render( function ( object ) {

			_this.renderBufferImmediate( object, program );

		} );

	}

	this.renderBufferImmediate = function ( object, program ) {

		bindingStates.initAttributes();

		const buffers = properties.get( object );

		if ( object.hasPositions && ! buffers.position ) buffers.position = _gl.createBuffer();
		if ( object.hasNormals && ! buffers.normal ) buffers.normal = _gl.createBuffer();
		if ( object.hasUvs && ! buffers.uv ) buffers.uv = _gl.createBuffer();
		if ( object.hasColors && ! buffers.color ) buffers.color = _gl.createBuffer();

		const programAttributes = program.getAttributes();

		if ( object.hasPositions ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.position );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.positionArray, _gl.DYNAMIC_DRAW );

			bindingStates.enableAttribute( programAttributes.position );
			_gl.vertexAttribPointer( programAttributes.position, 3, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasNormals ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.normal );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.normalArray, _gl.DYNAMIC_DRAW );

			bindingStates.enableAttribute( programAttributes.normal );
			_gl.vertexAttribPointer( programAttributes.normal, 3, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasUvs ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.uv );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.uvArray, _gl.DYNAMIC_DRAW );

			bindingStates.enableAttribute( programAttributes.uv );
			_gl.vertexAttribPointer( programAttributes.uv, 2, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasColors ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.color );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.colorArray, _gl.DYNAMIC_DRAW );

			bindingStates.enableAttribute( programAttributes.color );
			_gl.vertexAttribPointer( programAttributes.color, 3, _gl.FLOAT, false, 0, 0 );

		}

		bindingStates.disableUnusedAttributes();

		_gl.drawArrays( _gl.TRIANGLES, 0, object.count );

		object.count = 0;

	};

	this.renderBufferDirect = function ( camera, scene, geometry, material, object, group ) {

		if ( scene === null ) scene = _emptyScene; // renderBufferDirect second parameter used to be fog (could be null)

		const frontFaceCW = ( object.isMesh && object.matrixWorld.determinant() < 0 );

		const program = setProgram( camera, scene, material, object );

		state.setMaterial( material, frontFaceCW );

		//

		let index = geometry.index;
		const position = geometry.attributes.position;

		//

		if ( index === null ) {

			if ( position === undefined || position.count === 0 ) return;

		} else if ( index.count === 0 ) {

			return;

		}

		//

		let rangeFactor = 1;

		if ( material.wireframe === true ) {

			index = geometries.getWireframeAttribute( geometry );
			rangeFactor = 2;

		}

		if ( material.morphTargets || material.morphNormals ) {

			morphtargets.update( object, geometry, material, program );

		}

		bindingStates.setup( object, material, program, geometry, index );

		let attribute;
		let renderer = bufferRenderer;

		if ( index !== null ) {

			attribute = attributes.get( index );

			renderer = indexedBufferRenderer;
			renderer.setIndex( attribute );

		}

		//

		const dataCount = ( index !== null ) ? index.count : position.count;

		const rangeStart = geometry.drawRange.start * rangeFactor;
		const rangeCount = geometry.drawRange.count * rangeFactor;

		const groupStart = group !== null ? group.start * rangeFactor : 0;
		const groupCount = group !== null ? group.count * rangeFactor : Infinity;

		const drawStart = Math.max( rangeStart, groupStart );
		const drawEnd = Math.min( dataCount, rangeStart + rangeCount, groupStart + groupCount ) - 1;

		const drawCount = Math.max( 0, drawEnd - drawStart + 1 );

		if ( drawCount === 0 ) return;

		//

		if ( object.isMesh ) {

			if ( material.wireframe === true ) {

				state.setLineWidth( material.wireframeLinewidth * getTargetPixelRatio() );
				renderer.setMode( _gl.LINES );

			} else {

				renderer.setMode( _gl.TRIANGLES );

			}

		} else if ( object.isLine ) {

			let lineWidth = material.linewidth;

			if ( lineWidth === undefined ) lineWidth = 1; // Not using Line*Material

			state.setLineWidth( lineWidth * getTargetPixelRatio() );

			if ( object.isLineSegments ) {

				renderer.setMode( _gl.LINES );

			} else if ( object.isLineLoop ) {

				renderer.setMode( _gl.LINE_LOOP );

			} else {

				renderer.setMode( _gl.LINE_STRIP );

			}

		} else if ( object.isPoints ) {

			renderer.setMode( _gl.POINTS );

		} else if ( object.isSprite ) {

			renderer.setMode( _gl.TRIANGLES );

		}

		if ( object.isInstancedMesh ) {

			renderer.renderInstances( drawStart, drawCount, object.count );

		} else if ( geometry.isInstancedBufferGeometry ) {

			const instanceCount = Math.min( geometry.instanceCount, geometry._maxInstanceCount );

			renderer.renderInstances( drawStart, drawCount, instanceCount );

		} else {

			renderer.render( drawStart, drawCount );

		}

	};

	// Compile

	this.compile = function ( scene, camera ) {

		currentRenderState = renderStates.get( scene, camera );
		currentRenderState.init();

		scene.traverseVisible( function ( object ) {

			if ( object.isLight && object.layers.test( camera.layers ) ) {

				currentRenderState.pushLight( object );

				if ( object.castShadow ) {

					currentRenderState.pushShadow( object );

				}

			}

		} );

		currentRenderState.setupLights( camera );

		const compiled = new WeakMap();

		scene.traverse( function ( object ) {

			const material = object.material;

			if ( material ) {

				if ( Array.isArray( material ) ) {

					for ( let i = 0; i < material.length; i ++ ) {

						const material2 = material[ i ];

						if ( compiled.has( material2 ) === false ) {

							initMaterial( material2, scene, object );
							compiled.set( material2 );

						}

					}

				} else if ( compiled.has( material ) === false ) {

					initMaterial( material, scene, object );
					compiled.set( material );

				}

			}

		} );

	};

	// Animation Loop

	let onAnimationFrameCallback = null;

	function onAnimationFrame( time ) {

		if ( xr.isPresenting ) return;
		if ( onAnimationFrameCallback ) onAnimationFrameCallback( time );

	}

	const animation = new WebGLAnimation();
	animation.setAnimationLoop( onAnimationFrame );

	if ( typeof window !== 'undefined' ) animation.setContext( window );

	this.setAnimationLoop = function ( callback ) {

		onAnimationFrameCallback = callback;
		xr.setAnimationLoop( callback );

		( callback === null ) ? animation.stop() : animation.start();

	};

	// Rendering

	this.render = function ( scene, camera ) {

		let renderTarget, forceClear;

		if ( arguments[ 2 ] !== undefined ) {

			console.warn( 'THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.' );
			renderTarget = arguments[ 2 ];

		}

		if ( arguments[ 3 ] !== undefined ) {

			console.warn( 'THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.' );
			forceClear = arguments[ 3 ];

		}

		if ( camera !== undefined && camera.isCamera !== true ) {

			console.error( 'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.' );
			return;

		}

		if ( _isContextLost === true ) return;

		// reset caching for this frame

		bindingStates.resetDefaultState();
		_currentMaterialId = - 1;
		_currentCamera = null;

		// update scene graph

		if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

		// update camera matrices and frustum

		if ( camera.parent === null ) camera.updateMatrixWorld();

		if ( xr.enabled === true && xr.isPresenting === true ) {

			camera = xr.getCamera( camera );

		}

		//
		if ( scene.isScene === true ) scene.onBeforeRender( _this, scene, camera, renderTarget || _currentRenderTarget );

		currentRenderState = renderStates.get( scene, camera );
		currentRenderState.init();

		_projScreenMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
		_frustum.setFromProjectionMatrix( _projScreenMatrix );

		_localClippingEnabled = this.localClippingEnabled;
		_clippingEnabled = clipping.init( this.clippingPlanes, _localClippingEnabled, camera );

		currentRenderList = renderLists.get( scene, camera );
		currentRenderList.init();

		projectObject( scene, camera, 0, _this.sortObjects );

		currentRenderList.finish();

		if ( _this.sortObjects === true ) {

			currentRenderList.sort( _opaqueSort, _transparentSort );

		}

		//

		if ( _clippingEnabled === true ) clipping.beginShadows();

		const shadowsArray = currentRenderState.state.shadowsArray;

		shadowMap.render( shadowsArray, scene, camera );

		currentRenderState.setupLights( camera );

		if ( _clippingEnabled === true ) clipping.endShadows();

		//

		if ( this.info.autoReset === true ) this.info.reset();

		if ( renderTarget !== undefined ) {

			this.setRenderTarget( renderTarget );

		}

		//

		background.render( currentRenderList, scene, camera, forceClear );

		// render scene

		const opaqueObjects = currentRenderList.opaque;
		const transparentObjects = currentRenderList.transparent;

		if ( opaqueObjects.length > 0 ) renderObjects( opaqueObjects, scene, camera );
		if ( transparentObjects.length > 0 ) renderObjects( transparentObjects, scene, camera );

		//

		if ( scene.isScene === true ) scene.onAfterRender( _this, scene, camera );

		//

		if ( _currentRenderTarget !== null ) {

			// Generate mipmap if we're using any kind of mipmap filtering

			textures.updateRenderTargetMipmap( _currentRenderTarget );

			// resolve multisample renderbuffers to a single-sample texture if necessary

			textures.updateMultisampleRenderTarget( _currentRenderTarget );

		}

		// Ensure depth buffer writing is enabled so it can be cleared on next render

		state.buffers.depth.setTest( true );
		state.buffers.depth.setMask( true );
		state.buffers.color.setMask( true );

		state.setPolygonOffset( false );

		// _gl.finish();

		currentRenderList = null;
		currentRenderState = null;

	};

	function projectObject( object, camera, groupOrder, sortObjects ) {

		if ( object.visible === false ) return;

		const visible = object.layers.test( camera.layers );

		if ( visible ) {

			if ( object.isGroup ) {

				groupOrder = object.renderOrder;

			} else if ( object.isLOD ) {

				if ( object.autoUpdate === true ) object.update( camera );

			} else if ( object.isLight ) {

				currentRenderState.pushLight( object );

				if ( object.castShadow ) {

					currentRenderState.pushShadow( object );

				}

			} else if ( object.isSprite ) {

				if ( ! object.frustumCulled || _frustum.intersectsSprite( object ) ) {

					if ( sortObjects ) {

						_vector3.setFromMatrixPosition( object.matrixWorld )
							.applyMatrix4( _projScreenMatrix );

					}

					const geometry = objects.update( object );
					const material = object.material;

					if ( material.visible ) {

						currentRenderList.push( object, geometry, material, groupOrder, _vector3.z, null );

					}

				}

			} else if ( object.isImmediateRenderObject ) {

				if ( sortObjects ) {

					_vector3.setFromMatrixPosition( object.matrixWorld )
						.applyMatrix4( _projScreenMatrix );

				}

				currentRenderList.push( object, null, object.material, groupOrder, _vector3.z, null );

			} else if ( object.isMesh || object.isLine || object.isPoints ) {

				if ( object.isSkinnedMesh ) {

					// update skeleton only once in a frame

					if ( object.skeleton.frame !== info.render.frame ) {

						object.skeleton.update();
						object.skeleton.frame = info.render.frame;

					}

				}

				if ( ! object.frustumCulled || _frustum.intersectsObject( object ) ) {

					if ( sortObjects ) {

						_vector3.setFromMatrixPosition( object.matrixWorld )
							.applyMatrix4( _projScreenMatrix );

					}

					const geometry = objects.update( object );
					const material = object.material;

					if ( Array.isArray( material ) ) {

						const groups = geometry.groups;

						for ( let i = 0, l = groups.length; i < l; i ++ ) {

							const group = groups[ i ];
							const groupMaterial = material[ group.materialIndex ];

							if ( groupMaterial && groupMaterial.visible ) {

								currentRenderList.push( object, geometry, groupMaterial, groupOrder, _vector3.z, group );

							}

						}

					} else if ( material.visible ) {

						currentRenderList.push( object, geometry, material, groupOrder, _vector3.z, null );

					}

				}

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			projectObject( children[ i ], camera, groupOrder, sortObjects );

		}

	}

	function renderObjects( renderList, scene, camera ) {

		const overrideMaterial = scene.isScene === true ? scene.overrideMaterial : null;

		for ( let i = 0, l = renderList.length; i < l; i ++ ) {

			const renderItem = renderList[ i ];

			const object = renderItem.object;
			const geometry = renderItem.geometry;
			const material = overrideMaterial === null ? renderItem.material : overrideMaterial;
			const group = renderItem.group;

			if ( camera.isArrayCamera ) {

				_currentArrayCamera = camera;

				const cameras = camera.cameras;

				for ( let j = 0, jl = cameras.length; j < jl; j ++ ) {

					const camera2 = cameras[ j ];

					if ( object.layers.test( camera2.layers ) ) {

						state.viewport( _currentViewport.copy( camera2.viewport ) );

						currentRenderState.setupLights( camera2 );

						renderObject( object, scene, camera2, geometry, material, group );

					}

				}

			} else {

				_currentArrayCamera = null;

				renderObject( object, scene, camera, geometry, material, group );

			}

		}

	}

	function renderObject( object, scene, camera, geometry, material, group ) {

		object.onBeforeRender( _this, scene, camera, geometry, material, group );
		currentRenderState = renderStates.get( scene, _currentArrayCamera || camera );

		object.modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, object.matrixWorld );
		object.normalMatrix.getNormalMatrix( object.modelViewMatrix );

		if ( object.isImmediateRenderObject ) {

			const program = setProgram( camera, scene, material, object );

			state.setMaterial( material );

			bindingStates.reset();

			renderObjectImmediate( object, program );

		} else {

			_this.renderBufferDirect( camera, scene, geometry, material, object, group );

		}

		object.onAfterRender( _this, scene, camera, geometry, material, group );
		currentRenderState = renderStates.get( scene, _currentArrayCamera || camera );

	}

	function initMaterial( material, scene, object ) {

		if ( scene.isScene !== true ) scene = _emptyScene; // scene could be a Mesh, Line, Points, ...

		const materialProperties = properties.get( material );

		const lights = currentRenderState.state.lights;
		const shadowsArray = currentRenderState.state.shadowsArray;

		const lightsStateVersion = lights.state.version;

		const parameters = programCache.getParameters( material, lights.state, shadowsArray, scene, object );
		const programCacheKey = programCache.getProgramCacheKey( parameters );

		let program = materialProperties.program;
		let programChange = true;

		if ( program === undefined ) {

			// new material
			material.addEventListener( 'dispose', onMaterialDispose );

		} else if ( program.cacheKey !== programCacheKey ) {

			// changed glsl or parameters
			releaseMaterialProgramReference( material );

		} else if ( materialProperties.lightsStateVersion !== lightsStateVersion ) {

			programChange = false;

		} else if ( parameters.shaderID !== undefined ) {

			// same glsl and uniform list, envMap still needs the update here to avoid a frame-late effect

			const environment = material.isMeshStandardMaterial ? scene.environment : null;
			materialProperties.envMap = cubemaps.get( material.envMap || environment );

			return;

		} else {

			// only rebuild uniform list
			programChange = false;

		}

		if ( programChange ) {

			parameters.uniforms = programCache.getUniforms( material );

			material.onBeforeCompile( parameters, _this );

			program = programCache.acquireProgram( parameters, programCacheKey );

			materialProperties.program = program;
			materialProperties.uniforms = parameters.uniforms;
			materialProperties.outputEncoding = parameters.outputEncoding;

		}

		const uniforms = materialProperties.uniforms;

		if ( ! material.isShaderMaterial &&
			! material.isRawShaderMaterial ||
			material.clipping === true ) {

			materialProperties.numClippingPlanes = clipping.numPlanes;
			materialProperties.numIntersection = clipping.numIntersection;
			uniforms.clippingPlanes = clipping.uniform;

		}

		materialProperties.environment = material.isMeshStandardMaterial ? scene.environment : null;
		materialProperties.fog = scene.fog;
		materialProperties.envMap = cubemaps.get( material.envMap || materialProperties.environment );

		// store the light setup it was created for

		materialProperties.needsLights = materialNeedsLights( material );
		materialProperties.lightsStateVersion = lightsStateVersion;

		if ( materialProperties.needsLights ) {

			// wire up the material to this renderer's lighting state

			uniforms.ambientLightColor.value = lights.state.ambient;
			uniforms.lightProbe.value = lights.state.probe;
			uniforms.directionalLights.value = lights.state.directional;
			uniforms.directionalLightShadows.value = lights.state.directionalShadow;
			uniforms.spotLights.value = lights.state.spot;
			uniforms.spotLightShadows.value = lights.state.spotShadow;
			uniforms.rectAreaLights.value = lights.state.rectArea;
			uniforms.ltc_1.value = lights.state.rectAreaLTC1;
			uniforms.ltc_2.value = lights.state.rectAreaLTC2;
			uniforms.pointLights.value = lights.state.point;
			uniforms.pointLightShadows.value = lights.state.pointShadow;
			uniforms.hemisphereLights.value = lights.state.hemi;

			uniforms.directionalShadowMap.value = lights.state.directionalShadowMap;
			uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
			uniforms.spotShadowMap.value = lights.state.spotShadowMap;
			uniforms.spotShadowMatrix.value = lights.state.spotShadowMatrix;
			uniforms.pointShadowMap.value = lights.state.pointShadowMap;
			uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
			// TODO (abelnation): add area lights shadow info to uniforms

		}

		const progUniforms = materialProperties.program.getUniforms();
		const uniformsList = WebGLUniforms.seqWithValue( progUniforms.seq, uniforms );

		materialProperties.uniformsList = uniformsList;

	}

	function setProgram( camera, scene, material, object ) {

		if ( scene.isScene !== true ) scene = _emptyScene; // scene could be a Mesh, Line, Points, ...

		textures.resetTextureUnits();

		const fog = scene.fog;
		const environment = material.isMeshStandardMaterial ? scene.environment : null;
		const encoding = ( _currentRenderTarget === null ) ? _this.outputEncoding : _currentRenderTarget.texture.encoding;
		const envMap = cubemaps.get( material.envMap || environment );

		const materialProperties = properties.get( material );
		const lights = currentRenderState.state.lights;

		if ( _clippingEnabled === true ) {

			if ( _localClippingEnabled === true || camera !== _currentCamera ) {

				const useCache =
					camera === _currentCamera &&
					material.id === _currentMaterialId;

				// we might want to call this function with some ClippingGroup
				// object instead of the material, once it becomes feasible
				// (#8465, #8379)
				clipping.setState( material, camera, useCache );

			}

		}

		if ( material.version === materialProperties.__version ) {

			if ( material.fog && materialProperties.fog !== fog ) {

				initMaterial( material, scene, object );

			} else if ( materialProperties.environment !== environment ) {

				initMaterial( material, scene, object );

			} else if ( materialProperties.needsLights && ( materialProperties.lightsStateVersion !== lights.state.version ) ) {

				initMaterial( material, scene, object );

			} else if ( materialProperties.numClippingPlanes !== undefined &&
				( materialProperties.numClippingPlanes !== clipping.numPlanes ||
				materialProperties.numIntersection !== clipping.numIntersection ) ) {

				initMaterial( material, scene, object );

			} else if ( materialProperties.outputEncoding !== encoding ) {

				initMaterial( material, scene, object );

			} else if ( materialProperties.envMap !== envMap ) {

				initMaterial( material, scene, object );

			}

		} else {

			initMaterial( material, scene, object );
			materialProperties.__version = material.version;

		}

		let refreshProgram = false;
		let refreshMaterial = false;
		let refreshLights = false;

		const program = materialProperties.program,
			p_uniforms = program.getUniforms(),
			m_uniforms = materialProperties.uniforms;

		if ( state.useProgram( program.program ) ) {

			refreshProgram = true;
			refreshMaterial = true;
			refreshLights = true;

		}

		if ( material.id !== _currentMaterialId ) {

			_currentMaterialId = material.id;

			refreshMaterial = true;

		}

		if ( refreshProgram || _currentCamera !== camera ) {

			p_uniforms.setValue( _gl, 'projectionMatrix', camera.projectionMatrix );

			if ( capabilities.logarithmicDepthBuffer ) {

				p_uniforms.setValue( _gl, 'logDepthBufFC',
					2.0 / ( Math.log( camera.far + 1.0 ) / Math.LN2 ) );

			}

			if ( _currentCamera !== camera ) {

				_currentCamera = camera;

				// lighting uniforms depend on the camera so enforce an update
				// now, in case this material supports lights - or later, when
				// the next material that does gets activated:

				refreshMaterial = true;		// set to true on material change
				refreshLights = true;		// remains set until update done

			}

			// load material specific uniforms
			// (shader material also gets them for the sake of genericity)

			if ( material.isShaderMaterial ||
				material.isMeshPhongMaterial ||
				material.isMeshToonMaterial ||
				material.isMeshStandardMaterial ||
				material.envMap ) {

				const uCamPos = p_uniforms.map.cameraPosition;

				if ( uCamPos !== undefined ) {

					uCamPos.setValue( _gl,
						_vector3.setFromMatrixPosition( camera.matrixWorld ) );

				}

			}

			if ( material.isMeshPhongMaterial ||
				material.isMeshToonMaterial ||
				material.isMeshLambertMaterial ||
				material.isMeshBasicMaterial ||
				material.isMeshStandardMaterial ||
				material.isShaderMaterial ) {

				p_uniforms.setValue( _gl, 'isOrthographic', camera.isOrthographicCamera === true );

			}

			if ( material.isMeshPhongMaterial ||
				material.isMeshToonMaterial ||
				material.isMeshLambertMaterial ||
				material.isMeshBasicMaterial ||
				material.isMeshStandardMaterial ||
				material.isShaderMaterial ||
				material.isShadowMaterial ||
				material.skinning ) {

				p_uniforms.setValue( _gl, 'viewMatrix', camera.matrixWorldInverse );

			}

		}

		// skinning uniforms must be set even if material didn't change
		// auto-setting of texture unit for bone texture must go before other textures
		// otherwise textures used for skinning can take over texture units reserved for other material textures

		if ( material.skinning ) {

			p_uniforms.setOptional( _gl, object, 'bindMatrix' );
			p_uniforms.setOptional( _gl, object, 'bindMatrixInverse' );

			const skeleton = object.skeleton;

			if ( skeleton ) {

				const bones = skeleton.bones;

				if ( capabilities.floatVertexTextures ) {

					if ( skeleton.boneTexture === undefined ) {

						// layout (1 matrix = 4 pixels)
						//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
						//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
						//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
						//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
						//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)


						let size = Math.sqrt( bones.length * 4 ); // 4 pixels needed for 1 matrix
						size = MathUtils.ceilPowerOfTwo( size );
						size = Math.max( size, 4 );

						const boneMatrices = new Float32Array( size * size * 4 ); // 4 floats per RGBA pixel
						boneMatrices.set( skeleton.boneMatrices ); // copy current values

						const boneTexture = new DataTexture( boneMatrices, size, size, RGBAFormat, FloatType );

						skeleton.boneMatrices = boneMatrices;
						skeleton.boneTexture = boneTexture;
						skeleton.boneTextureSize = size;

					}

					p_uniforms.setValue( _gl, 'boneTexture', skeleton.boneTexture, textures );
					p_uniforms.setValue( _gl, 'boneTextureSize', skeleton.boneTextureSize );

				} else {

					p_uniforms.setOptional( _gl, skeleton, 'boneMatrices' );

				}

			}

		}

		if ( refreshMaterial || materialProperties.receiveShadow !== object.receiveShadow ) {

			materialProperties.receiveShadow = object.receiveShadow;
			p_uniforms.setValue( _gl, 'receiveShadow', object.receiveShadow );

		}

		if ( refreshMaterial ) {

			p_uniforms.setValue( _gl, 'toneMappingExposure', _this.toneMappingExposure );

			if ( materialProperties.needsLights ) {

				// the current material requires lighting info

				// note: all lighting uniforms are always set correctly
				// they simply reference the renderer's state for their
				// values
				//
				// use the current material's .needsUpdate flags to set
				// the GL state when required

				markUniformsLightsNeedsUpdate( m_uniforms, refreshLights );

			}

			// refresh uniforms common to several materials

			if ( fog && material.fog ) {

				materials.refreshFogUniforms( m_uniforms, fog );

			}

			materials.refreshMaterialUniforms( m_uniforms, material, _pixelRatio, _height );

			WebGLUniforms.upload( _gl, materialProperties.uniformsList, m_uniforms, textures );

		}

		if ( material.isShaderMaterial && material.uniformsNeedUpdate === true ) {

			WebGLUniforms.upload( _gl, materialProperties.uniformsList, m_uniforms, textures );
			material.uniformsNeedUpdate = false;

		}

		if ( material.isSpriteMaterial ) {

			p_uniforms.setValue( _gl, 'center', object.center );

		}

		// common matrices

		p_uniforms.setValue( _gl, 'modelViewMatrix', object.modelViewMatrix );
		p_uniforms.setValue( _gl, 'normalMatrix', object.normalMatrix );
		p_uniforms.setValue( _gl, 'modelMatrix', object.matrixWorld );

		return program;

	}

	// If uniforms are marked as clean, they don't need to be loaded to the GPU.

	function markUniformsLightsNeedsUpdate( uniforms, value ) {

		uniforms.ambientLightColor.needsUpdate = value;
		uniforms.lightProbe.needsUpdate = value;

		uniforms.directionalLights.needsUpdate = value;
		uniforms.directionalLightShadows.needsUpdate = value;
		uniforms.pointLights.needsUpdate = value;
		uniforms.pointLightShadows.needsUpdate = value;
		uniforms.spotLights.needsUpdate = value;
		uniforms.spotLightShadows.needsUpdate = value;
		uniforms.rectAreaLights.needsUpdate = value;
		uniforms.hemisphereLights.needsUpdate = value;

	}

	function materialNeedsLights( material ) {

		return material.isMeshLambertMaterial || material.isMeshToonMaterial || material.isMeshPhongMaterial ||
			material.isMeshStandardMaterial || material.isShadowMaterial ||
			( material.isShaderMaterial && material.lights === true );

	}

	//
	this.setFramebuffer = function ( value ) {

		if ( _framebuffer !== value && _currentRenderTarget === null ) _gl.bindFramebuffer( _gl.FRAMEBUFFER, value );

		_framebuffer = value;

	};

	this.getActiveCubeFace = function () {

		return _currentActiveCubeFace;

	};

	this.getActiveMipmapLevel = function () {

		return _currentActiveMipmapLevel;

	};

	this.getRenderList = function () {

		return currentRenderList;

	};

	this.setRenderList = function ( renderList ) {

		currentRenderList = renderList;

	};

	this.getRenderState = function () {

		return currentRenderState;

	};

	this.setRenderState = function ( renderState ) {

		currentRenderState = renderState;

	};

	this.getRenderTarget = function () {

		return _currentRenderTarget;

	};

	this.setRenderTarget = function ( renderTarget, activeCubeFace = 0, activeMipmapLevel = 0 ) {

		_currentRenderTarget = renderTarget;
		_currentActiveCubeFace = activeCubeFace;
		_currentActiveMipmapLevel = activeMipmapLevel;

		if ( renderTarget && properties.get( renderTarget ).__webglFramebuffer === undefined ) {

			textures.setupRenderTarget( renderTarget );

		}

		let framebuffer = _framebuffer;
		let isCube = false;

		if ( renderTarget ) {

			const __webglFramebuffer = properties.get( renderTarget ).__webglFramebuffer;

			if ( renderTarget.isWebGLCubeRenderTarget ) {

				framebuffer = __webglFramebuffer[ activeCubeFace ];
				isCube = true;

			} else if ( renderTarget.isWebGLMultisampleRenderTarget ) {

				framebuffer = properties.get( renderTarget ).__webglMultisampledFramebuffer;

			} else {

				framebuffer = __webglFramebuffer;

			}

			_currentViewport.copy( renderTarget.viewport );
			_currentScissor.copy( renderTarget.scissor );
			_currentScissorTest = renderTarget.scissorTest;

		} else {

			_currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio ).floor();
			_currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio ).floor();
			_currentScissorTest = _scissorTest;

		}

		if ( _currentFramebuffer !== framebuffer ) {

			_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
			_currentFramebuffer = framebuffer;

		}

		state.viewport( _currentViewport );
		state.scissor( _currentScissor );
		state.setScissorTest( _currentScissorTest );

		if ( isCube ) {

			const textureProperties = properties.get( renderTarget.texture );
			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + activeCubeFace, textureProperties.__webglTexture, activeMipmapLevel );

		}

	};

	this.readRenderTargetPixels = function ( renderTarget, x, y, width, height, buffer, activeCubeFaceIndex ) {

		if ( ! ( renderTarget && renderTarget.isWebGLRenderTarget ) ) {

			console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.' );
			return;

		}

		let framebuffer = properties.get( renderTarget ).__webglFramebuffer;

		if ( renderTarget.isWebGLCubeRenderTarget && activeCubeFaceIndex !== undefined ) {

			framebuffer = framebuffer[ activeCubeFaceIndex ];

		}

		if ( framebuffer ) {

			let restore = false;

			if ( framebuffer !== _currentFramebuffer ) {

				_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );

				restore = true;

			}

			try {

				const texture = renderTarget.texture;
				const textureFormat = texture.format;
				const textureType = texture.type;

				if ( textureFormat !== RGBAFormat && utils.convert( textureFormat ) !== _gl.getParameter( _gl.IMPLEMENTATION_COLOR_READ_FORMAT ) ) {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.' );
					return;

				}

				if ( textureType !== UnsignedByteType && utils.convert( textureType ) !== _gl.getParameter( _gl.IMPLEMENTATION_COLOR_READ_TYPE ) && // IE11, Edge and Chrome Mac < 52 (#9513)
					! ( textureType === FloatType && ( capabilities.isWebGL2 || extensions.get( 'OES_texture_float' ) || extensions.get( 'WEBGL_color_buffer_float' ) ) ) && // Chrome Mac >= 52 and Firefox
					! ( textureType === HalfFloatType && ( capabilities.isWebGL2 ? extensions.get( 'EXT_color_buffer_float' ) : extensions.get( 'EXT_color_buffer_half_float' ) ) ) ) {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.' );
					return;

				}

				if ( _gl.checkFramebufferStatus( _gl.FRAMEBUFFER ) === _gl.FRAMEBUFFER_COMPLETE ) {

					// the following if statement ensures valid read requests (no out-of-bounds pixels, see #8604)

					if ( ( x >= 0 && x <= ( renderTarget.width - width ) ) && ( y >= 0 && y <= ( renderTarget.height - height ) ) ) {

						_gl.readPixels( x, y, width, height, utils.convert( textureFormat ), utils.convert( textureType ), buffer );

					}

				} else {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.' );

				}

			} finally {

				if ( restore ) {

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, _currentFramebuffer );

				}

			}

		}

	};

	this.copyFramebufferToTexture = function ( position, texture, level ) {

		if ( level === undefined ) level = 0;

		const levelScale = Math.pow( 2, - level );
		const width = Math.floor( texture.image.width * levelScale );
		const height = Math.floor( texture.image.height * levelScale );
		const glFormat = utils.convert( texture.format );

		textures.setTexture2D( texture, 0 );

		_gl.copyTexImage2D( _gl.TEXTURE_2D, level, glFormat, position.x, position.y, width, height, 0 );

		state.unbindTexture();

	};

	this.copyTextureToTexture = function ( position, srcTexture, dstTexture, level ) {

		if ( level === undefined ) level = 0;

		const width = srcTexture.image.width;
		const height = srcTexture.image.height;
		const glFormat = utils.convert( dstTexture.format );
		const glType = utils.convert( dstTexture.type );

		textures.setTexture2D( dstTexture, 0 );

		// As another texture upload may have changed pixelStorei
		// parameters, make sure they are correct for the dstTexture
		_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, dstTexture.flipY );
		_gl.pixelStorei( _gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, dstTexture.premultiplyAlpha );
		_gl.pixelStorei( _gl.UNPACK_ALIGNMENT, dstTexture.unpackAlignment );

		if ( srcTexture.isDataTexture ) {

			_gl.texSubImage2D( _gl.TEXTURE_2D, level, position.x, position.y, width, height, glFormat, glType, srcTexture.image.data );

		} else {

			if ( srcTexture.isCompressedTexture ) {

				_gl.compressedTexSubImage2D( _gl.TEXTURE_2D, level, position.x, position.y, srcTexture.mipmaps[ 0 ].width, srcTexture.mipmaps[ 0 ].height, glFormat, srcTexture.mipmaps[ 0 ].data );

			} else {

				_gl.texSubImage2D( _gl.TEXTURE_2D, level, position.x, position.y, glFormat, glType, srcTexture.image );

			}

		}

		// Generate mipmaps only when copying level 0
		if ( level === 0 && dstTexture.generateMipmaps ) _gl.generateMipmap( _gl.TEXTURE_2D );

		state.unbindTexture();

	};

	this.initTexture = function ( texture ) {

		textures.setTexture2D( texture, 0 );

		state.unbindTexture();

	};

	if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

		__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'observe', { detail: this } ) ); // eslint-disable-line no-undef

	}

}

export { WebGLRenderer };
