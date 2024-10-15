import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { 
    files: ['**/*.{js,mjs,cjs,jsx}'], 
    languageOptions: { 
      globals: globals.browser 
    }, 
    settings: { 
      react: { 
        version: 'detect' 
      }
    },
    rules: {
      quotes: ['error', 'single'], // ダブルクォートをシングルクォートに変更
      semi: ['error', 'always'],   // セミコロンを常に追加
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
