const replace = require('@rollup/plugin-replace');
const postcss = require('rollup-plugin-postcss');


module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      })
    );
    config.plugins.push(
      postcss({
        extract: true, // استخراج CSS به فایل جداگانه
        minimize: true, // بهینه‌سازی CSS
      })
    );
    return config;
  },
};
