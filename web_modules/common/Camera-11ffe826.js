import { V as Vector3 } from './Vector3-df4ff999.js';
import { O as Object3D, M as Matrix4 } from './Object3D-2bcaf382.js';

function Camera() {

	Object3D.call( this );

	this.type = 'Camera';

	this.matrixWorldInverse = new Matrix4();

	this.projectionMatrix = new Matrix4();
	this.projectionMatrixInverse = new Matrix4();

}

Camera.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Camera,

	isCamera: true,

	copy: function ( source, recursive ) {

		Object3D.prototype.copy.call( this, source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );

		this.projectionMatrix.copy( source.projectionMatrix );
		this.projectionMatrixInverse.copy( source.projectionMatrixInverse );

		return this;

	},

	getWorldDirection: function ( target ) {

		if ( target === undefined ) {

			console.warn( 'THREE.Camera: .getWorldDirection() target is now required' );
			target = new Vector3();

		}

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( - e[ 8 ], - e[ 9 ], - e[ 10 ] ).normalize();

	},

	updateMatrixWorld: function ( force ) {

		Object3D.prototype.updateMatrixWorld.call( this, force );

		this.matrixWorldInverse.getInverse( this.matrixWorld );

	},

	updateWorldMatrix: function ( updateParents, updateChildren ) {

		Object3D.prototype.updateWorldMatrix.call( this, updateParents, updateChildren );

		this.matrixWorldInverse.getInverse( this.matrixWorld );

	},

	clone: function () {

		return new this.constructor().copy( this );

	}

} );

export { Camera as C };
