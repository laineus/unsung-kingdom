export default `
  precision mediump float;
  uniform vec2  resolution;
  uniform float tx;
  uniform float ty;
  uniform float r;
  uniform sampler2D uMainSampler;
  varying vec2 outTexCoord;
  vec3 makeCircle(vec2 st,vec2 center, vec3 col){
      float d = distance(st,center);
      float pct = smoothstep(r,r+0.1,d);
      return vec3(1.0-pct)*col;
  } 
  void main(void) {
      vec2 st = vec2(gl_FragCoord.x/resolution.x,gl_FragCoord.y/resolution.y);
      vec4 color = texture2D(uMainSampler, outTexCoord);
      gl_FragColor = color*vec4(makeCircle(st,vec2(tx,ty),vec3(1.0)),1.0);
  }
`
