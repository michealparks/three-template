import '../../../common/EventDispatcher-a257053d.js';
import '../../../common/MathUtils-943fb228.js';
import '../../../common/Vector3-df4ff999.js';
import '../../../common/Object3D-2bcaf382.js';
import '../../../common/Matrix3-f848f439.js';
import '../../../common/Color-6fe630de.js';
import { L as Light } from '../../../common/Light-44efac91.js';

function AmbientLight( color, intensity ) {

	Light.call( this, color, intensity );

	this.type = 'AmbientLight';

}

AmbientLight.prototype = Object.assign( Object.create( Light.prototype ), {

	constructor: AmbientLight,

	isAmbientLight: true

} );

export { AmbientLight };
