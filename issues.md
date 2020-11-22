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
