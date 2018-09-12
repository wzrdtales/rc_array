function translate(prefix, key, obj) {
  if (!key.startsWith(`${prefix}_`)) return;

  let cursor = obj;
  var keys = key.substring(prefix.length + 1).split("__");
  var length = keys.length - 1;

  for (var i = 0; i < length; ++i) {
    var key = keys[i];
    if (!cursor[key]) {
      return false;
    }

    cursor = cursor[key];
  }

  if (typeof cursor === "object") {
    var lastKey = keys.pop();
    cursor[lastKey] = Object.values(cursor[lastKey]);
  }

  return true;
}

module.exports = function(translateKey, prefix) {
  var params = [].slice.call(arguments, 1);
  var rc = require("rc");
  var config = rc.apply(rc, params);
  var translateKey = config[translateKey];

  if (translateKey) {
    if (typeof translateKey === "string") {
      translate(prefix, translateKey, config);
    } else if (typeof translateKey === "object") {
      Object.values(translateKey).forEach(value =>
        translate(prefix, value, config)
      );
    }
  }

  return config;
};
