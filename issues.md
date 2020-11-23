------------------------
in node_modules/three/examples/jsm/postprocessing/EffectComposer.js:

replace:
```js
import {
	Clock,
	LinearFilter,
	Mesh,
	OrthographicCamera,
	PlaneBufferGeometry,
	RGBAFormat,
	Vector2,
	WebGLRenderTarget
} from "../../../build/three.module.js";
```

with
```js
import { Clock } from '../../../src/core/Clock.js';
import { LinearFilter, RGBAFormat } from '../../../src/constants.js';
import { Mesh } from '../../../src/objects/Mesh';
import { OrthographicCamera } from '../../../src/cameras/OrthographicCamera.js';
import { PlaneBufferGeometry } from '../../../src/geometries/PlaneBufferGeometry.js';
import { Vector2 } from '../../../src/math/Vector2.js';
import { WebGLRenderTarget } from '../../../src/renderers/WebGLRenderTarget.js'

```

to allow proper tree-shaking

------------------------

in Pass.js
```js
import {
	OrthographicCamera,
	PlaneBufferGeometry,
	Mesh
} from "../../../build/three.module.js";
```

to

```js
import { OrthographicCamera } from '../../../src/cameras/OrthographicCamera.js'
import { PlaneBufferGeometry } from '../../../src/geometries/PlaneBufferGeometry.js'
import { Mesh } from '../../../src/objects/Mesh.js'
```

------------------------

in ShaderPass.js

replace:
```js
import {
	ShaderMaterial,
	UniformsUtils
} from "../../../build/three.module.js";
```

with
```js
import { ShaderMaterial} from '../../../src/materials/ShaderMaterial.js';
import { UniformsUtils } from '../../../src/renderers/shaders/UniformsUtils.js'
```

------------------------

in FXAAShader.js

replace
```js
import {
	Vector2
} from "../../../build/three.module.js";
```

with

```js
import { Vector2 } from '../../../src/math/Vector2.js';
```

------------------------
jsm/controls/orbitControls:

```js
import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from "../../../build/three.module.js";
```

to
```js
import { EventDispatcher } from '../../../src/core/EventDispatcher.js'
import { MOUSE, TOUCH } from '../../../src/constants.js'
import { Quaternion } from '../../../src/math/Quaternion.js'
import { Spherical } from '../../../src/math/Spherical.js'
import { Vector2 } from '../../../src/math/Vector2.js'
import { Vector3 } from '../../../src/math/Vector3.js'
```
------------------------

in GLTFLoader.js
```js
import {
	ClampToEdgeWrapping,
	DoubleSide,
	FrontSide,
	InterpolateDiscrete,
	InterpolateLinear,
	LinearFilter,
	LinearMipmapLinearFilter,
	LinearMipmapNearestFilter,
	MirroredRepeatWrapping,
	NearestFilter,
	NearestMipmapLinearFilter,
	NearestMipmapNearestFilter,
	RGBFormat,
	RepeatWrapping,
	TangentSpaceNormalMap,
	TriangleFanDrawMode,
	TriangleStripDrawMode,
	sRGBEncoding
} from '../../../src/constants.js'
```
to
```js
import { AnimationClip } from '../../../src/animation/AnimationClip.js'
import { Bone } from '../../../src/objects/Bone.js'
import { Box3 } from '../../../src/math/Box3.js'
import { BufferAttribute } from '../../../src/core/BufferAttribute.js'
import { BufferGeometry } from '../../../src/core/BufferGeometry.js'
import { CanvasTexture } from '../../../src/textures/CanvasTexture.js'
import { Color } from '../../../src/math/Color.js'
import { DirectionalLight } from '../../../src/lights/DirectionalLight.js'
import { FileLoader } from '../../../src/loaders/FileLoader.js'
import { Group } from '../../../src/objects/Group.js'
import { ImageBitmapLoader } from '../../../src/loaders/ImageBitmapLoader.js'
import { InterleavedBuffer } from '../../../src/core/InterleavedBuffer.js'
import { InterleavedBufferAttribute } from '../../../src/core/InterleavedBufferAttribute.js'
import { Interpolant } from '../../../src/math/Interpolant.js'
import { Line } from '../../../src/objects/Line.js'
import { LineBasicMaterial } from '../../../src/materials/LineBasicMaterial.js'
import { LineLoop } from '../../../src/objects/LineLoop.js'
import { LineSegments } from '../../../src/objects/LineSegments.js'
import { Loader } from '../../../src/loaders/Loader.js'
import { LoaderUtils } from '../../../src/loaders/LoaderUtils.js'
import { Material } from '../../../src/materials/Material.js'
import { MathUtils } from '../../../src/math/MathUtils.js'
import { Matrix4 } from '../../../src/math/Matrix4.js'
import { Mesh } from '../../../src/objects/Mesh.js'
import { MeshBasicMaterial } from '../../../src/materials/MeshBasicMaterial.js'
import { MeshPhysicalMaterial } from '../../../src/materials/MeshPhysicalMaterial.js'
import { MeshStandardMaterial } from '../../../src/materials/MeshStandardMaterial.js'
import { NumberKeyframeTrack } from '../../../src/animation/tracks/NumberKeyframeTrack.js'
import { Object3D } from '../../../src/core/Object3D.js'
import { OrthographicCamera } from '../../../src/cameras/OrthographicCamera.js'
import { PerspectiveCamera } from '../../../src/cameras/PerspectiveCamera.js'
import { PointLight } from '../../../src/lights/PointLight.js'
import { Points } from '../../../src/objects/Points.js'
import { PointsMaterial } from '../../../src/materials/PointsMaterial.js'
import { PropertyBinding } from '../../../src/animation/PropertyBinding.js'
import { QuaternionKeyframeTrack } from '../../../src/animation/tracks/QuaternionKeyframeTrack.js'
import { Skeleton } from '../../../src/objects/Skeleton.js'
import { SkinnedMesh } from '../../../src/objects/SkinnedMesh.js'
import { Sphere } from '../../../src/math/Sphere.js'
import { SpotLight } from '../../../src/lights/SpotLight.js'
import { TextureLoader } from '../../../src/loaders/TextureLoader.js'
import { Vector2 } from '../../../src/math/Vector2.js'
import { Vector3 } from '../../../src/math/Vector3.js'
import { VectorKeyframeTrack } from '../../../src/animation/tracks/VectorKeyframeTrack.js'
```

------------------------