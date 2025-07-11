// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
    // 忽略規則，必須在配置數組的第一項
    {
        ignores: [
            'node_modules/**',
            '.nuxt/**',
            '.output/**',
            'dist/**',
            '.git/**',
            'public/**',
            'coverage/**',
            '*.min.*',
            'CHANGELOG*.md',
            'LICENSE*',
            'pnpm-lock.yaml',
            'package-lock.json',
            'yarn.lock',
            '__snapshots__/**',
            '*.d.ts',
            'components/ui/**', // 排除 shadcn 組件
        ],
    },
    // 規則配置
    {
        rules: {
            // Vue 相關規則
            'vue/no-multiple-template-root': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/require-default-prop': 'off',
            'vue/no-v-html': 'off',

            // 通用規則
            'no-console': 'warn',
            'no-debugger': 'warn',
            'prefer-const': 'error',
            'no-unused-expressions': 'warn',

            // 允許空的 catch 語句
            'no-empty': ['error', { allowEmptyCatch: true }],
        },
    },
]);
