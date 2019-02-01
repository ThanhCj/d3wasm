#version 100
precision mediump float;
        
// In
varying vec4 var_TexDiffuse;
        
// Uniforms
uniform sampler2D u_fragmentMap0;
uniform lowp float u_alphaTest;
uniform lowp vec4 u_glColor;
        
// Out
// gl_FragCoord
        
void main(void)
{
  if (u_alphaTest > texture2D(u_fragmentMap0, var_TexDiffuse.xy / var_TexDiffuse.w).a) {
    discard;
  }
        
  gl_FragColor = u_glColor;
}
