export default [
  'precision mediump float;',

  // 'in' attributes from our vertex shader
  'varying vec4 outColor;',
  'varying vec2 outTexCoord;',

  // declare uniforms
  'uniform sampler2D u_texture;',
  'uniform float resolution;',
  'uniform float radius;',
  'uniform vec2 dir;',

  'void main() {',
    // this will be our RGBA sum
    'vec4 sum = vec4(0.0);',

    // our original texcoord for this fragment
    'vec2 tc = outTexCoord;',

    // the amount to blur, i.e. how far off center to sample from 
    // 1.0 -> blur by one pixel
    // 2.0 -> blur by two pixels, etc.
    'float blur = radius/resolution;',

    // apply blurring,
    'sum += texture2D(u_texture, vec2(tc.x, tc.y)) * 0.2;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y + 1.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y + 1.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y + 1.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y + 0.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y + 0.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y - 1.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y - 1.0*blur)) * 0.035;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y - 1.0*blur)) * 0.035;',

    'sum += texture2D(u_texture, vec2(tc.x - 1.5*blur, tc.y + 1.5*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y + 1.5*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.5*blur, tc.y + 1.5*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.5*blur, tc.y + 0.0*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.5*blur, tc.y + 0.0*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.5*blur, tc.y - 1.5*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y - 1.5*blur)) * 0.015;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.5*blur, tc.y - 1.5*blur)) * 0.015;',

    'sum += texture2D(u_texture, vec2(tc.x - 2.0*blur, tc.y + 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y + 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y + 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y + 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 2.0*blur, tc.y + 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 2.0*blur, tc.y + 1.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 2.0*blur, tc.y + 1.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 2.0*blur, tc.y + 0.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 2.0*blur, tc.y + 0.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 2.0*blur, tc.y - 1.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 2.0*blur, tc.y - 1.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 2.0*blur, tc.y - 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y - 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y - 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y - 2.0*blur)) * 0.025;',
    'sum += texture2D(u_texture, vec2(tc.x + 2.0*blur, tc.y - 2.0*blur)) * 0.025;',

    // discard alpha for our simple demo,return
    'gl_FragColor =  vec4(sum.rgb, 1.0);',
  '}'
].join('\n')

    // +
    // 'sum += texture2D(u_texture, vec2(tc.x + 1.5*blur, tc.y + 0.0*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x + 0.0*blur, tc.y + 1.5*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x - 1.5*blur, tc.y - 0.0*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x - 0.0*blur, tc.y - 1.5*blur*vstep)) * 0.1;',
    // x
    // 'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y + 1.0*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x + 1.0*blur, tc.y - 1.0*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y + 1.0*blur*vstep)) * 0.1;',
    // 'sum += texture2D(u_texture, vec2(tc.x - 1.0*blur, tc.y - 1.0*blur*vstep)) * 0.1;',
