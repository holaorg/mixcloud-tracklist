module.exports=function(dust){var tmpl=(function(dust){dust.register("templates\/audiocdconvert",body_0);function body_0(chk,ctx){return chk.h("eq",ctx,{"else":body_1,"block":body_2},{"key":ctx.get(["audiofileext"], false),"value":"m4a"},"").w(" ");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("echo \"You don't need any conversion as your burner (e.g. Imgburn) should support CUE to burn audio CD\"\npause");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("ffmpeg -i \"").f(ctx.get(["audiofilename"], false),ctx,"").w("\" \"").f(ctx.get(["audiofilenamenoext"], false),ctx,"").w(".wav\"");}body_2.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}
