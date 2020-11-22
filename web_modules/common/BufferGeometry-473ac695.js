import { E as EventDispatcher } from './EventDispatcher-a257053d.js';
import { S as StaticDrawUsage } from './constants-2d5769b7.js';
import { M as MathUtils } from './MathUtils-943fb228.js';
import { V as Vector3 } from './Vector3-df4ff999.js';
import { V as Vector2 } from './Vector2-323a1dbe.js';
import { M as Matrix4, O as Object3D } from './Object3D-2bcaf382.js';
import { M as Matrix3 } from './Matrix3-f848f439.js';
import { C as Color } from './Color-6fe630de.js';
import { V as Vector4 } from './Vector4-50f8032c.js';

class Box3 {

	constructor( min, max ) {

		Object.defineProperty( this, 'isBox3', { value: true } );

		this.min = ( min !== undefined ) ? min : new Vector3( + Infinity, + Infinity, + Infinity );
		this.max = ( max !== undefined ) ? max : new Vector3( - Infinity, - Infinity, - Infinity );

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		let minX = + Infinity;
		let minY = + Infinity;
		let minZ = + Infinity;

		let maxX = - Infinity;
		let maxY = - Infinity;
		let maxZ = - Infinity;

		for ( let i = 0, l = array.length; i < l; i += 3 ) {

			const x = array[ i ];
			const y = array[ i + 1 ];
			const z = array[ i + 2 ];

			if ( x < minX ) minX = x;
			if ( y < minY ) minY = y;
			if ( z < minZ ) minZ = z;

			if ( x > maxX ) maxX = x;
			if ( y > maxY ) maxY = y;
			if ( z > maxZ ) maxZ = z;

		}

		this.min.set( minX, minY, minZ );
		this.max.set( maxX, maxY, maxZ );

		return this;

	}

	setFromBufferAttribute( attribute ) {

		let minX = + Infinity;
		let minY = + Infinity;
		let minZ = + Infinity;

		let maxX = - Infinity;
		let maxY = - Infinity;
		let maxZ = - Infinity;

		for ( let i = 0, l = attribute.count; i < l; i ++ ) {

			const x = attribute.getX( i );
			const y = attribute.getY( i );
			const z = attribute.getZ( i );

			if ( x < minX ) minX = x;
			if ( y < minY ) minY = y;
			if ( z < minZ ) minZ = z;

			if ( x > maxX ) maxX = x;
			if ( y > maxY ) maxY = y;
			if ( z > maxZ ) maxZ = z;

		}

		this.min.set( minX, minY, minZ );
		this.max.set( maxX, maxY, maxZ );

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object ) {

		this.makeEmpty();

		return this.expandByObject( object );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		if ( target === undefined ) {

			console.warn( 'THREE.Box3: .getCenter() target is now required' );
			target = new Vector3();

		}

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		if ( target === undefined ) {

			console.warn( 'THREE.Box3: .getSize() target is now required' );
			target = new Vector3();

		}

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			if ( geometry.boundingBox === null ) {

				geometry.computeBoundingBox();

			}

			_box.copy( geometry.boundingBox );
			_box.applyMatrix4( object.matrixWorld );

			this.union( _box );

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ] );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		if ( target === undefined ) {

			console.warn( 'THREE.Box3: .getParameter() target is now required' );
			target = new Vector3();

		}

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0.subVectors( triangle.a, _center );
		_v1.subVectors( triangle.b, _center );
		_v2.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1, _v0 );
		_f1.subVectors( _v2, _v1 );
		_f2.subVectors( _v0, _v2 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0, _v1, _v2, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0, _v1, _v2, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0, _v1, _v2, _extents );

	}

	clampPoint( point, target ) {

		if ( target === undefined ) {

			console.warn( 'THREE.Box3: .clampPoint() target is now required' );
			target = new Vector3();

		}

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		const clampedPoint = _vector.copy( point ).clamp( this.min, this.max );

		return clampedPoint.sub( point ).length();

	}

	getBoundingSphere( target ) {

		if ( target === undefined ) {

			console.error( 'THREE.Box3: .getBoundingSphere() target is now required' );
			//target = new Sphere(); // removed to avoid cyclic dependency

		}

		this.getCenter( target.center );

		target.radius = this.getSize( _vector ).length() * 0.5;

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the seperating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the seperating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is seperating and we can exit
			return false;

		}

	}

	return true;

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector = /*@__PURE__*/ new Vector3();

const _box = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0 = /*@__PURE__*/ new Vector3();
const _v1 = /*@__PURE__*/ new Vector3();
const _v2 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

const _box$1 = /*@__PURE__*/ new Box3();

class Sphere {

	constructor( center, radius ) {

		this.center = ( center !== undefined ) ? center : new Vector3();
		this.radius = ( radius !== undefined ) ? radius : - 1;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$1.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = - 1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		if ( target === undefined ) {

			console.warn( 'THREE.Sphere: .clampPoint() target is now required' );
			target = new Vector3();

		}

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( target === undefined ) {

			console.warn( 'THREE.Sphere: .getBoundingBox() target is now required' );
			target = new Box3();

		}

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

}

const _vector$1 = new Vector3();
const _vector2 = new Vector2();

function BufferAttribute( array, itemSize, normalized ) {

	if ( Array.isArray( array ) ) {

		throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

	}

	this.name = '';

	this.array = array;
	this.itemSize = itemSize;
	this.count = array !== undefined ? array.length / itemSize : 0;
	this.normalized = normalized === true;

	this.usage = StaticDrawUsage;
	this.updateRange = { offset: 0, count: - 1 };

	this.version = 0;

}

Object.defineProperty( BufferAttribute.prototype, 'needsUpdate', {

	set: function ( value ) {

		if ( value === true ) this.version ++;

	}

} );

Object.assign( BufferAttribute.prototype, {

	isBufferAttribute: true,

	onUploadCallback: function () {},

	setUsage: function ( value ) {

		this.usage = value;

		return this;

	},

	copy: function ( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;

		return this;

	},

	copyAt: function ( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	},

	copyArray: function ( array ) {

		this.array.set( array );

		return this;

	},

	copyColorsArray: function ( colors ) {

		const array = this.array;
		let offset = 0;

		for ( let i = 0, l = colors.length; i < l; i ++ ) {

			let color = colors[ i ];

			if ( color === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyColorsArray(): color is undefined', i );
				color = new Color();

			}

			array[ offset ++ ] = color.r;
			array[ offset ++ ] = color.g;
			array[ offset ++ ] = color.b;

		}

		return this;

	},

	copyVector2sArray: function ( vectors ) {

		const array = this.array;
		let offset = 0;

		for ( let i = 0, l = vectors.length; i < l; i ++ ) {

			let vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i );
				vector = new Vector2();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;

		}

		return this;

	},

	copyVector3sArray: function ( vectors ) {

		const array = this.array;
		let offset = 0;

		for ( let i = 0, l = vectors.length; i < l; i ++ ) {

			let vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i );
				vector = new Vector3();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;

		}

		return this;

	},

	copyVector4sArray: function ( vectors ) {

		const array = this.array;
		let offset = 0;

		for ( let i = 0, l = vectors.length; i < l; i ++ ) {

			let vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i );
				vector = new Vector4();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;
			array[ offset ++ ] = vector.w;

		}

		return this;

	},

	applyMatrix3: function ( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2.fromBufferAttribute( this, i );
				_vector2.applyMatrix3( m );

				this.setXY( i, _vector2.x, _vector2.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$1.fromBufferAttribute( this, i );
				_vector$1.applyMatrix3( m );

				this.setXYZ( i, _vector$1.x, _vector$1.y, _vector$1.z );

			}

		}

		return this;

	},

	applyMatrix4: function ( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$1.x = this.getX( i );
			_vector$1.y = this.getY( i );
			_vector$1.z = this.getZ( i );

			_vector$1.applyMatrix4( m );

			this.setXYZ( i, _vector$1.x, _vector$1.y, _vector$1.z );

		}

		return this;

	},

	applyNormalMatrix: function ( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$1.x = this.getX( i );
			_vector$1.y = this.getY( i );
			_vector$1.z = this.getZ( i );

			_vector$1.applyNormalMatrix( m );

			this.setXYZ( i, _vector$1.x, _vector$1.y, _vector$1.z );

		}

		return this;

	},

	transformDirection: function ( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$1.x = this.getX( i );
			_vector$1.y = this.getY( i );
			_vector$1.z = this.getZ( i );

			_vector$1.transformDirection( m );

			this.setXYZ( i, _vector$1.x, _vector$1.y, _vector$1.z );

		}

		return this;

	},

	set: function ( value, offset ) {

		if ( offset === undefined ) offset = 0;

		this.array.set( value, offset );

		return this;

	},

	getX: function ( index ) {

		return this.array[ index * this.itemSize ];

	},

	setX: function ( index, x ) {

		this.array[ index * this.itemSize ] = x;

		return this;

	},

	getY: function ( index ) {

		return this.array[ index * this.itemSize + 1 ];

	},

	setY: function ( index, y ) {

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	},

	getZ: function ( index ) {

		return this.array[ index * this.itemSize + 2 ];

	},

	setZ: function ( index, z ) {

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	},

	getW: function ( index ) {

		return this.array[ index * this.itemSize + 3 ];

	},

	setW: function ( index, w ) {

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	},

	setXY: function ( index, x, y ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	},

	setXYZ: function ( index, x, y, z ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	},

	setXYZW: function ( index, x, y, z, w ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	},

	onUpload: function ( callback ) {

		this.onUploadCallback = callback;

		return this;

	},

	clone: function () {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	},

	toJSON: function () {

		return {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.prototype.slice.call( this.array ),
			normalized: this.normalized
		};

	}

} );

//

function Int8BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Int8Array( array ), itemSize, normalized );

}

Int8BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int8BufferAttribute.prototype.constructor = Int8BufferAttribute;


function Uint8BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Uint8Array( array ), itemSize, normalized );

}

Uint8BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint8BufferAttribute.prototype.constructor = Uint8BufferAttribute;


function Uint8ClampedBufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Uint8ClampedArray( array ), itemSize, normalized );

}

Uint8ClampedBufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint8ClampedBufferAttribute.prototype.constructor = Uint8ClampedBufferAttribute;


function Int16BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Int16Array( array ), itemSize, normalized );

}

Int16BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int16BufferAttribute.prototype.constructor = Int16BufferAttribute;


function Uint16BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Uint16Array( array ), itemSize, normalized );

}

Uint16BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint16BufferAttribute.prototype.constructor = Uint16BufferAttribute;


function Int32BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Int32Array( array ), itemSize, normalized );

}

Int32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int32BufferAttribute.prototype.constructor = Int32BufferAttribute;


function Uint32BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Uint32Array( array ), itemSize, normalized );

}

Uint32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint32BufferAttribute.prototype.constructor = Uint32BufferAttribute;


function Float32BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Float32Array( array ), itemSize, normalized );

}

Float32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Float32BufferAttribute.prototype.constructor = Float32BufferAttribute;


function Float64BufferAttribute( array, itemSize, normalized ) {

	BufferAttribute.call( this, new Float64Array( array ), itemSize, normalized );

}

Float64BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Float64BufferAttribute.prototype.constructor = Float64BufferAttribute;

class DirectGeometry {

	constructor() {

		this.vertices = [];
		this.normals = [];
		this.colors = [];
		this.uvs = [];
		this.uvs2 = [];

		this.groups = [];

		this.morphTargets = {};

		this.skinWeights = [];
		this.skinIndices = [];

		// this.lineDistances = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		// update flags

		this.verticesNeedUpdate = false;
		this.normalsNeedUpdate = false;
		this.colorsNeedUpdate = false;
		this.uvsNeedUpdate = false;
		this.groupsNeedUpdate = false;

	}

	computeGroups( geometry ) {

		const groups = [];

		let group, i;
		let materialIndex = undefined;

		const faces = geometry.faces;

		for ( i = 0; i < faces.length; i ++ ) {

			const face = faces[ i ];

			// materials

			if ( face.materialIndex !== materialIndex ) {

				materialIndex = face.materialIndex;

				if ( group !== undefined ) {

					group.count = ( i * 3 ) - group.start;
					groups.push( group );

				}

				group = {
					start: i * 3,
					materialIndex: materialIndex
				};

			}

		}

		if ( group !== undefined ) {

			group.count = ( i * 3 ) - group.start;
			groups.push( group );

		}

		this.groups = groups;

	}

	fromGeometry( geometry ) {

		const faces = geometry.faces;
		const vertices = geometry.vertices;
		const faceVertexUvs = geometry.faceVertexUvs;

		const hasFaceVertexUv = faceVertexUvs[ 0 ] && faceVertexUvs[ 0 ].length > 0;
		const hasFaceVertexUv2 = faceVertexUvs[ 1 ] && faceVertexUvs[ 1 ].length > 0;

		// morphs

		const morphTargets = geometry.morphTargets;
		const morphTargetsLength = morphTargets.length;

		let morphTargetsPosition;

		if ( morphTargetsLength > 0 ) {

			morphTargetsPosition = [];

			for ( let i = 0; i < morphTargetsLength; i ++ ) {

				morphTargetsPosition[ i ] = {
					name: morphTargets[ i ].name,
				 	data: []
				};

			}

			this.morphTargets.position = morphTargetsPosition;

		}

		const morphNormals = geometry.morphNormals;
		const morphNormalsLength = morphNormals.length;

		let morphTargetsNormal;

		if ( morphNormalsLength > 0 ) {

			morphTargetsNormal = [];

			for ( let i = 0; i < morphNormalsLength; i ++ ) {

				morphTargetsNormal[ i ] = {
					name: morphNormals[ i ].name,
				 	data: []
				};

			}

			this.morphTargets.normal = morphTargetsNormal;

		}

		// skins

		const skinIndices = geometry.skinIndices;
		const skinWeights = geometry.skinWeights;

		const hasSkinIndices = skinIndices.length === vertices.length;
		const hasSkinWeights = skinWeights.length === vertices.length;

		//

		if ( vertices.length > 0 && faces.length === 0 ) {

			console.error( 'THREE.DirectGeometry: Faceless geometries are not supported.' );

		}

		for ( let i = 0; i < faces.length; i ++ ) {

			const face = faces[ i ];

			this.vertices.push( vertices[ face.a ], vertices[ face.b ], vertices[ face.c ] );

			const vertexNormals = face.vertexNormals;

			if ( vertexNormals.length === 3 ) {

				this.normals.push( vertexNormals[ 0 ], vertexNormals[ 1 ], vertexNormals[ 2 ] );

			} else {

				const normal = face.normal;

				this.normals.push( normal, normal, normal );

			}

			const vertexColors = face.vertexColors;

			if ( vertexColors.length === 3 ) {

				this.colors.push( vertexColors[ 0 ], vertexColors[ 1 ], vertexColors[ 2 ] );

			} else {

				const color = face.color;

				this.colors.push( color, color, color );

			}

			if ( hasFaceVertexUv === true ) {

				const vertexUvs = faceVertexUvs[ 0 ][ i ];

				if ( vertexUvs !== undefined ) {

					this.uvs.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

				} else {

					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', i );

					this.uvs.push( new Vector2(), new Vector2(), new Vector2() );

				}

			}

			if ( hasFaceVertexUv2 === true ) {

				const vertexUvs = faceVertexUvs[ 1 ][ i ];

				if ( vertexUvs !== undefined ) {

					this.uvs2.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

				} else {

					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', i );

					this.uvs2.push( new Vector2(), new Vector2(), new Vector2() );

				}

			}

			// morphs

			for ( let j = 0; j < morphTargetsLength; j ++ ) {

				const morphTarget = morphTargets[ j ].vertices;

				morphTargetsPosition[ j ].data.push( morphTarget[ face.a ], morphTarget[ face.b ], morphTarget[ face.c ] );

			}

			for ( let j = 0; j < morphNormalsLength; j ++ ) {

				const morphNormal = morphNormals[ j ].vertexNormals[ i ];

				morphTargetsNormal[ j ].data.push( morphNormal.a, morphNormal.b, morphNormal.c );

			}

			// skins

			if ( hasSkinIndices ) {

				this.skinIndices.push( skinIndices[ face.a ], skinIndices[ face.b ], skinIndices[ face.c ] );

			}

			if ( hasSkinWeights ) {

				this.skinWeights.push( skinWeights[ face.a ], skinWeights[ face.b ], skinWeights[ face.c ] );

			}

		}

		this.computeGroups( geometry );

		this.verticesNeedUpdate = geometry.verticesNeedUpdate;
		this.normalsNeedUpdate = geometry.normalsNeedUpdate;
		this.colorsNeedUpdate = geometry.colorsNeedUpdate;
		this.uvsNeedUpdate = geometry.uvsNeedUpdate;
		this.groupsNeedUpdate = geometry.groupsNeedUpdate;

		if ( geometry.boundingSphere !== null ) {

			this.boundingSphere = geometry.boundingSphere.clone();

		}

		if ( geometry.boundingBox !== null ) {

			this.boundingBox = geometry.boundingBox.clone();

		}

		return this;

	}

}

function arrayMax( array ) {

	if ( array.length === 0 ) return - Infinity;

	let max = array[ 0 ];

	for ( let i = 1, l = array.length; i < l; ++ i ) {

		if ( array[ i ] > max ) max = array[ i ];

	}

	return max;

}

let _bufferGeometryId = 1; // BufferGeometry uses odd numbers as Id

const _m1 = new Matrix4();
const _obj = new Object3D();
const _offset = new Vector3();
const _box$2 = new Box3();
const _boxMorphTargets = new Box3();
const _vector$2 = new Vector3();

function BufferGeometry() {

	Object.defineProperty( this, 'id', { value: _bufferGeometryId += 2 } );

	this.uuid = MathUtils.generateUUID();

	this.name = '';
	this.type = 'BufferGeometry';

	this.index = null;
	this.attributes = {};

	this.morphAttributes = {};
	this.morphTargetsRelative = false;

	this.groups = [];

	this.boundingBox = null;
	this.boundingSphere = null;

	this.drawRange = { start: 0, count: Infinity };

	this.userData = {};

}

BufferGeometry.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

	constructor: BufferGeometry,

	isBufferGeometry: true,

	getIndex: function () {

		return this.index;

	},

	setIndex: function ( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayMax( index ) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	},

	getAttribute: function ( name ) {

		return this.attributes[ name ];

	},

	setAttribute: function ( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	},

	deleteAttribute: function ( name ) {

		delete this.attributes[ name ];

		return this;

	},

	addGroup: function ( start, count, materialIndex ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex !== undefined ? materialIndex : 0

		} );

	},

	clearGroups: function () {

		this.groups = [];

	},

	setDrawRange: function ( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	},

	applyMatrix4: function ( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	},

	rotateX: function ( angle ) {

		// rotate geometry around world x-axis

		_m1.makeRotationX( angle );

		this.applyMatrix4( _m1 );

		return this;

	},

	rotateY: function ( angle ) {

		// rotate geometry around world y-axis

		_m1.makeRotationY( angle );

		this.applyMatrix4( _m1 );

		return this;

	},

	rotateZ: function ( angle ) {

		// rotate geometry around world z-axis

		_m1.makeRotationZ( angle );

		this.applyMatrix4( _m1 );

		return this;

	},

	translate: function ( x, y, z ) {

		// translate geometry

		_m1.makeTranslation( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	},

	scale: function ( x, y, z ) {

		// scale geometry

		_m1.makeScale( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	},

	lookAt: function ( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	},

	center: function () {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	},

	setFromObject: function ( object ) {

		// console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );

		const geometry = object.geometry;

		if ( object.isPoints || object.isLine ) {

			const positions = new Float32BufferAttribute( geometry.vertices.length * 3, 3 );
			const colors = new Float32BufferAttribute( geometry.colors.length * 3, 3 );

			this.setAttribute( 'position', positions.copyVector3sArray( geometry.vertices ) );
			this.setAttribute( 'color', colors.copyColorsArray( geometry.colors ) );

			if ( geometry.lineDistances && geometry.lineDistances.length === geometry.vertices.length ) {

				const lineDistances = new Float32BufferAttribute( geometry.lineDistances.length, 1 );

				this.setAttribute( 'lineDistance', lineDistances.copyArray( geometry.lineDistances ) );

			}

			if ( geometry.boundingSphere !== null ) {

				this.boundingSphere = geometry.boundingSphere.clone();

			}

			if ( geometry.boundingBox !== null ) {

				this.boundingBox = geometry.boundingBox.clone();

			}

		} else if ( object.isMesh ) {

			if ( geometry && geometry.isGeometry ) {

				this.fromGeometry( geometry );

			}

		}

		return this;

	},

	setFromPoints: function ( points ) {

		const position = [];

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			const point = points[ i ];
			position.push( point.x, point.y, point.z || 0 );

		}

		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		return this;

	},

	updateFromObject: function ( object ) {

		let geometry = object.geometry;

		if ( object.isMesh ) {

			let direct = geometry.__directGeometry;

			if ( geometry.elementsNeedUpdate === true ) {

				direct = undefined;
				geometry.elementsNeedUpdate = false;

			}

			if ( direct === undefined ) {

				return this.fromGeometry( geometry );

			}

			direct.verticesNeedUpdate = geometry.verticesNeedUpdate;
			direct.normalsNeedUpdate = geometry.normalsNeedUpdate;
			direct.colorsNeedUpdate = geometry.colorsNeedUpdate;
			direct.uvsNeedUpdate = geometry.uvsNeedUpdate;
			direct.groupsNeedUpdate = geometry.groupsNeedUpdate;

			geometry.verticesNeedUpdate = false;
			geometry.normalsNeedUpdate = false;
			geometry.colorsNeedUpdate = false;
			geometry.uvsNeedUpdate = false;
			geometry.groupsNeedUpdate = false;

			geometry = direct;

		}

		if ( geometry.verticesNeedUpdate === true ) {

			const attribute = this.attributes.position;

			if ( attribute !== undefined ) {

				attribute.copyVector3sArray( geometry.vertices );
				attribute.needsUpdate = true;

			}

			geometry.verticesNeedUpdate = false;

		}

		if ( geometry.normalsNeedUpdate === true ) {

			const attribute = this.attributes.normal;

			if ( attribute !== undefined ) {

				attribute.copyVector3sArray( geometry.normals );
				attribute.needsUpdate = true;

			}

			geometry.normalsNeedUpdate = false;

		}

		if ( geometry.colorsNeedUpdate === true ) {

			const attribute = this.attributes.color;

			if ( attribute !== undefined ) {

				attribute.copyColorsArray( geometry.colors );
				attribute.needsUpdate = true;

			}

			geometry.colorsNeedUpdate = false;

		}

		if ( geometry.uvsNeedUpdate ) {

			const attribute = this.attributes.uv;

			if ( attribute !== undefined ) {

				attribute.copyVector2sArray( geometry.uvs );
				attribute.needsUpdate = true;

			}

			geometry.uvsNeedUpdate = false;

		}

		if ( geometry.lineDistancesNeedUpdate ) {

			const attribute = this.attributes.lineDistance;

			if ( attribute !== undefined ) {

				attribute.copyArray( geometry.lineDistances );
				attribute.needsUpdate = true;

			}

			geometry.lineDistancesNeedUpdate = false;

		}

		if ( geometry.groupsNeedUpdate ) {

			geometry.computeGroups( object.geometry );
			this.groups = geometry.groups;

			geometry.groupsNeedUpdate = false;

		}

		return this;

	},

	fromGeometry: function ( geometry ) {

		geometry.__directGeometry = new DirectGeometry().fromGeometry( geometry );

		return this.fromDirectGeometry( geometry.__directGeometry );

	},

	fromDirectGeometry: function ( geometry ) {

		const positions = new Float32Array( geometry.vertices.length * 3 );
		this.setAttribute( 'position', new BufferAttribute( positions, 3 ).copyVector3sArray( geometry.vertices ) );

		if ( geometry.normals.length > 0 ) {

			const normals = new Float32Array( geometry.normals.length * 3 );
			this.setAttribute( 'normal', new BufferAttribute( normals, 3 ).copyVector3sArray( geometry.normals ) );

		}

		if ( geometry.colors.length > 0 ) {

			const colors = new Float32Array( geometry.colors.length * 3 );
			this.setAttribute( 'color', new BufferAttribute( colors, 3 ).copyColorsArray( geometry.colors ) );

		}

		if ( geometry.uvs.length > 0 ) {

			const uvs = new Float32Array( geometry.uvs.length * 2 );
			this.setAttribute( 'uv', new BufferAttribute( uvs, 2 ).copyVector2sArray( geometry.uvs ) );

		}

		if ( geometry.uvs2.length > 0 ) {

			const uvs2 = new Float32Array( geometry.uvs2.length * 2 );
			this.setAttribute( 'uv2', new BufferAttribute( uvs2, 2 ).copyVector2sArray( geometry.uvs2 ) );

		}

		// groups

		this.groups = geometry.groups;

		// morphs

		for ( const name in geometry.morphTargets ) {

			const array = [];
			const morphTargets = geometry.morphTargets[ name ];

			for ( let i = 0, l = morphTargets.length; i < l; i ++ ) {

				const morphTarget = morphTargets[ i ];

				const attribute = new Float32BufferAttribute( morphTarget.data.length * 3, 3 );
				attribute.name = morphTarget.name;

				array.push( attribute.copyVector3sArray( morphTarget.data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		// skinning

		if ( geometry.skinIndices.length > 0 ) {

			const skinIndices = new Float32BufferAttribute( geometry.skinIndices.length * 4, 4 );
			this.setAttribute( 'skinIndex', skinIndices.copyVector4sArray( geometry.skinIndices ) );

		}

		if ( geometry.skinWeights.length > 0 ) {

			const skinWeights = new Float32BufferAttribute( geometry.skinWeights.length * 4, 4 );
			this.setAttribute( 'skinWeight', skinWeights.copyVector4sArray( geometry.skinWeights ) );

		}

		//

		if ( geometry.boundingSphere !== null ) {

			this.boundingSphere = geometry.boundingSphere.clone();

		}

		if ( geometry.boundingBox !== null ) {

			this.boundingBox = geometry.boundingBox.clone();

		}

		return this;

	},

	computeBoundingBox: function () {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$2.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$2.addVectors( this.boundingBox.min, _box$2.min );
						this.boundingBox.expandByPoint( _vector$2 );

						_vector$2.addVectors( this.boundingBox.max, _box$2.max );
						this.boundingBox.expandByPoint( _vector$2 );

					} else {

						this.boundingBox.expandByPoint( _box$2.min );
						this.boundingBox.expandByPoint( _box$2.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	},

	computeBoundingSphere: function () {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$2.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$2.addVectors( _box$2.min, _boxMorphTargets.min );
						_box$2.expandByPoint( _vector$2 );

						_vector$2.addVectors( _box$2.max, _boxMorphTargets.max );
						_box$2.expandByPoint( _vector$2 );

					} else {

						_box$2.expandByPoint( _boxMorphTargets.min );
						_box$2.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$2.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$2.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$2 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$2.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$2.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$2 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	},

	computeFaceNormals: function () {

		// backwards compatibility

	},

	computeVertexNormals: function () {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	},

	merge: function ( geometry, offset ) {

		if ( ! ( geometry && geometry.isBufferGeometry ) ) {

			console.error( 'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', geometry );
			return;

		}

		if ( offset === undefined ) {

			offset = 0;

			console.warn(
				'THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. '
				+ 'Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'
			);

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			if ( geometry.attributes[ key ] === undefined ) continue;

			const attribute1 = attributes[ key ];
			const attributeArray1 = attribute1.array;

			const attribute2 = geometry.attributes[ key ];
			const attributeArray2 = attribute2.array;

			const attributeOffset = attribute2.itemSize * offset;
			const length = Math.min( attributeArray2.length, attributeArray1.length - attributeOffset );

			for ( let i = 0, j = attributeOffset; i < length; i ++, j ++ ) {

				attributeArray1[ j ] = attributeArray2[ i ];

			}

		}

		return this;

	},

	normalizeNormals: function () {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$2.fromBufferAttribute( normals, i );

			_vector$2.normalize();

			normals.setXYZ( i, _vector$2.x, _vector$2.y, _vector$2.z );

		}

	},

	toNonIndexed: function () {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				index = indices[ i ] * itemSize;

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	},

	toJSON: function () {

		const data = {
			metadata: {
				version: 4.5,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			const attributeData = attribute.toJSON( data.data );

			if ( attribute.name !== '' ) attributeData.name = attribute.name;

			data.data.attributes[ key ] = attributeData;

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				const attributeData = attribute.toJSON( data.data );

				if ( attribute.name !== '' ) attributeData.name = attribute.name;

				array.push( attributeData );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	},

	clone: function () {

		/*
		 // Handle primitives

		 const parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 const values = [];

		 for ( const key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 const geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */

		return new BufferGeometry().copy( this );

	},

	copy: function ( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );

export { BufferGeometry as B, Float32BufferAttribute as F, Sphere as S, Uint32BufferAttribute as U, arrayMax as a, Uint16BufferAttribute as b, BufferAttribute as c };
