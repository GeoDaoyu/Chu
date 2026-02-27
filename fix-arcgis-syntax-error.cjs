const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const filePath = path.join(process.cwd(), 'node_modules/@arcgis/core/views/SceneView.js');

(async () => {
  try {
    const code = fs.readFileSync(filePath, 'utf8');

    // TODO: 能不能用Babel直接解决语法错误
    const formatted = await prettier.format(code, {
      parser: 'babel',
      semi: true,
      singleQuote: true,
    });

    // 写回文件
    fs.writeFileSync(filePath, formatted, 'utf8');
  } catch (err) {
    console.error('fix-arcgis-syntax-error失败:', err.message);
    process.exit(1);
  }
})();
