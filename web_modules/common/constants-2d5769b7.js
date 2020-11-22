const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const FlatShading = 1;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;

const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const CubeUVRefractionMapping = 307;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedShort565Type = 1019;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBFormat = 1022;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBIntegerFormat = 1032;
const RGBAIntegerFormat = 1033;

const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
const SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
const SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
const SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
const SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
const SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
const SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
const SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
const SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
const SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
const SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
const SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
const SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
const SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
const LinearEncoding = 3000;
const sRGBEncoding = 3001;
const GammaEncoding = 3007;
const RGBEEncoding = 3002;
const LogLuvEncoding = 3003;
const RGBM7Encoding = 3004;
const RGBM16Encoding = 3005;
const RGBDEncoding = 3006;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;
const KeepStencilOp = 7680;
const AlwaysStencilFunc = 519;

const StaticDrawUsage = 35044;
const GLSL3 = "300 es";

export { ObjectSpaceNormalMap as $, AddEquation as A, BackSide as B, ClampToEdgeWrapping as C, DoubleSide as D, EquirectangularReflectionMapping as E, FlatShading as F, GLSL3 as G, CubeUVRefractionMapping as H, AddOperation as I, MixOperation as J, KeepStencilOp as K, LinearFilter as L, MOUSE as M, NormalBlending as N, OneMinusSrcAlphaFactor as O, PCFShadowMap as P, LogLuvEncoding as Q, RGBAFormat as R, StaticDrawUsage as S, TOUCH as T, UVMapping as U, VSMShadowMap as V, GammaEncoding as W, RGBDEncoding as X, RGBM16Encoding as Y, RGBM7Encoding as Z, RGBEEncoding as _, MirroredRepeatWrapping as a, RGB_ETC2_Format as a$, BasicDepthPacking as a0, RGBADepthPacking as a1, SubtractEquation as a2, ReverseSubtractEquation as a3, MinEquation as a4, MaxEquation as a5, ZeroFactor as a6, OneFactor as a7, SrcColorFactor as a8, SrcAlphaSaturateFactor as a9, UnsignedShortType as aA, DepthStencilFormat as aB, HalfFloatType as aC, UnsignedShort4444Type as aD, UnsignedShort5551Type as aE, UnsignedShort565Type as aF, ByteType as aG, ShortType as aH, IntType as aI, AlphaFormat as aJ, LuminanceFormat as aK, LuminanceAlphaFormat as aL, RedFormat as aM, RedIntegerFormat as aN, RGFormat as aO, RGIntegerFormat as aP, RGBIntegerFormat as aQ, RGBAIntegerFormat as aR, RGB_S3TC_DXT1_Format as aS, RGBA_S3TC_DXT1_Format as aT, RGBA_S3TC_DXT3_Format as aU, RGBA_S3TC_DXT5_Format as aV, RGB_PVRTC_4BPPV1_Format as aW, RGB_PVRTC_2BPPV1_Format as aX, RGBA_PVRTC_4BPPV1_Format as aY, RGBA_PVRTC_2BPPV1_Format as aZ, RGB_ETC1_Format as a_, DstColorFactor as aa, DstAlphaFactor as ab, OneMinusSrcColorFactor as ac, OneMinusDstColorFactor as ad, OneMinusDstAlphaFactor as ae, CustomBlending as af, MultiplyBlending as ag, SubtractiveBlending as ah, AdditiveBlending as ai, CullFaceNone as aj, CullFaceBack as ak, CullFaceFront as al, NotEqualDepth as am, GreaterDepth as an, GreaterEqualDepth as ao, EqualDepth as ap, LessDepth as aq, AlwaysDepth as ar, NeverDepth as as, NearestMipmapNearestFilter as at, NearestMipmapLinearFilter as au, LinearMipmapNearestFilter as av, FloatType as aw, UnsignedIntType as ax, UnsignedInt248Type as ay, DepthFormat as az, RepeatWrapping as b, RGBA_ETC2_EAC_Format as b0, RGBA_ASTC_4x4_Format as b1, RGBA_ASTC_5x4_Format as b2, RGBA_ASTC_5x5_Format as b3, RGBA_ASTC_6x5_Format as b4, RGBA_ASTC_6x6_Format as b5, RGBA_ASTC_8x5_Format as b6, RGBA_ASTC_8x6_Format as b7, RGBA_ASTC_8x8_Format as b8, RGBA_ASTC_10x5_Format as b9, RGBA_ASTC_10x6_Format as ba, RGBA_ASTC_10x8_Format as bb, RGBA_ASTC_10x10_Format as bc, RGBA_ASTC_12x10_Format as bd, RGBA_ASTC_12x12_Format as be, SRGB8_ALPHA8_ASTC_4x4_Format as bf, SRGB8_ALPHA8_ASTC_5x4_Format as bg, SRGB8_ALPHA8_ASTC_5x5_Format as bh, SRGB8_ALPHA8_ASTC_6x5_Format as bi, SRGB8_ALPHA8_ASTC_6x6_Format as bj, SRGB8_ALPHA8_ASTC_8x5_Format as bk, SRGB8_ALPHA8_ASTC_8x6_Format as bl, SRGB8_ALPHA8_ASTC_8x8_Format as bm, SRGB8_ALPHA8_ASTC_10x5_Format as bn, SRGB8_ALPHA8_ASTC_10x6_Format as bo, SRGB8_ALPHA8_ASTC_10x8_Format as bp, SRGB8_ALPHA8_ASTC_10x10_Format as bq, SRGB8_ALPHA8_ASTC_12x10_Format as br, SRGB8_ALPHA8_ASTC_12x12_Format as bs, RGBA_BPTC_Format as bt, LinearMipmapLinearFilter as c, UnsignedByteType as d, LinearEncoding as e, MultiplyOperation as f, FrontSide as g, SrcAlphaFactor as h, LessEqualDepth as i, AlwaysStencilFunc as j, ACESFilmicToneMapping as k, RGBFormat as l, TangentSpaceNormalMap as m, NearestFilter as n, CubeUVReflectionMapping as o, CubeReflectionMapping as p, NoBlending as q, EquirectangularRefractionMapping as r, sRGBEncoding as s, CubeRefractionMapping as t, NoToneMapping as u, CustomToneMapping as v, CineonToneMapping as w, ReinhardToneMapping as x, LinearToneMapping as y, PCFSoftShadowMap as z };
