import '../../../common/EventDispatcher-a257053d.js';
import '../../../common/MathUtils-943fb228.js';
import '../../../common/Vector3-df4ff999.js';
import { O as Object3D } from '../../../common/Object3D-2bcaf382.js';
import '../../../common/Matrix3-f848f439.js';
import { C as Color } from '../../../common/Color-6fe630de.js';

function Light( color, intensity ) {

	Object3D.call( this );

	this.type = 'Light';

	this.color = new Color( color );
	this.intensity = intensity !== undefined ? intensity : 1;

}

Light.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Light,

	isLight: true,

	copy: function ( source ) {

		Object3D.prototype.copy.call( this, source );

		this.color.copy( source.color );
		this.intensity = source.intensity;

		return this;

	},

	toJSON: function ( meta ) {

		const data = Object3D.prototype.toJSON.call( this, meta );

		data.object.color = this.color.getHex();
		data.object.intensity = this.intensity;

		if ( this.groundColor !== undefined ) data.object.groundColor = this.groundColor.getHex();

		if ( this.distance !== undefined ) data.object.distance = this.distance;
		if ( this.angle !== undefined ) data.object.angle = this.angle;
		if ( this.decay !== undefined ) data.object.decay = this.decay;
		if ( this.penumbra !== undefined ) data.object.penumbra = this.penumbra;

		if ( this.shadow !== undefined ) data.object.shadow = this.shadow.toJSON();

		return data;

	}

} );

function AmbientLight( color, intensity ) {

	Light.call( this, color, intensity );

	this.type = 'AmbientLight';

}

AmbientLight.prototype = Object.assign( Object.create( Light.prototype ), {

	constructor: AmbientLight,

	isAmbientLight: true

} );

export { AmbientLight };
