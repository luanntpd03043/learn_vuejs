import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import gzipPlugin from 'rollup-plugin-gzip';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import viteImagemin from 'vite-plugin-imagemin';
import AutoImport from 'unplugin-auto-import/vite';
import copy from 'rollup-plugin-copy';
import type { UserConfig } from 'vite';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT || 8001;

  return {
    base: '/',
    build: {
      target: 'esnext',
      outDir: 'public',
      emptyOutDir: true,
      manifest: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'app.[hash].js',
          chunkFileNames: 'app.[hash].chunk.js',
          assetFileNames: 'assets.[hash].[ext]',
        },
      },
    },
    mode: env.NODE_ENV,
    server: {
      host: '0.0.0.0',
      port: env.PORT || 8001,
    },
    define: {
      API_URL: JSON.stringify(env.API_URL),
      APP_URL: JSON.stringify(env.APP_URL),
      NODE_ENV: JSON.stringify(env.NODE_ENV),
      PORT: JSON.stringify(env.PORT),
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        config: path.resolve(__dirname, 'src/config'),
        api: path.resolve(__dirname, 'src/api'),
        stores: path.resolve(__dirname, 'src/stores'),
        types: path.resolve(__dirname, 'src/types'),
        styles: path.resolve(__dirname, 'src/styles'),
        i18n: path.resolve(__dirname, 'i18n'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'assets'),
        pages: path.resolve(__dirname, 'src/pages'),
        src: path.resolve(__dirname, 'src'),
        modals: path.resolve(__dirname, 'src/modals'),
        enums: path.resolve(__dirname, 'src/enums'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        providers: path.resolve(__dirname, 'src/providers'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '.json'],
    },
    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin(),
      stylelintPlugin(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: true,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      gzipPlugin({
        filter: /\.(js|css)$/i,
        fileName: '',
      }),
      copy({
        verbose: true,
        hook: 'writeBundle',
        targets: [
          {
            src: ['assets/images/avatar-default.svg'],
            dest: 'public/assets/images',
          },
        ],
      }),
      vueI18n({
        include: path.resolve(__dirname, 'i18n/**'),
      }),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
          'vue',
          {
            'lodash-es': [
              'get',
              'head',
              'isString',
              'trim',
              'isObject',
              'isDate',
              'mapValues',
              'isArray',
              'forEach',
              'isEmpty',
              'keys',
              'isNull',
              'camelCase',
              'snakeCase',
              'map',
              'indexOf',
              'isBoolean',
              'noop',
              'pick',
            ],
          },
          {
            'element-plus': [
              'ElRow',
              'ElCol',
              'ElForm',
              'ElButton',
              'ElAlert',
              'ElSelect',
              'ElOption',
              'ElFormItem',
              'ElRadioGroup',
              'ElRadio',
              'ElCheckbox',
              'ElCheckboxGroup',
              'ElNotification',
              'UPDATE_MODEL_EVENT',
              'CHANGE_EVENT',
              'INPUT_EVENT',
              ['default', 'ElementPlus'],
            ],
          },
          {
            'vue-i18n': ['useI18n', 'createI18n'],
          },
          {
            '@vueuse/core': [
              'useVModels',
              'useDebounceFn',
              'useLocalStorage',
              'useTitle',
              'useFavicon',
            ],
          },
          {
            '@vueuse/integrations/useAxios': ['useAxios'],
          },
          {
            '@vueuse/integrations/useAsyncValidator': ['useAsyncValidator'],
          },
          {
            '@vueuse/integrations/useCookies': [
              ['useCookies', 'useUniversalCookie'],
            ],
          },
          {
            'vue-router': [
              'useRoute',
              'useRouter',
              'createRouter',
              'createWebHistory',
            ],
          },
          {
            '@tanstack/vue-query': [
              'useMutation',
              'useQueries',
              'useQuery',
              'useQueryClient',
              'QueryClient',
              'QueryClientProvider',
              'useInfiniteQuery',
            ],
          },
          {
            dayjs: [['default', 'dayjs']],
          },
          {
            from: 'dayjs',
            imports: ['ConfigType', 'Dayjs', 'OpUnitType', 'QUnitType'],
            type: true,
          },
          {
            axios: [['default', 'axios']],
          },
          {
            classnames: [['default', 'classNames']],
          },
          {
            pinia: ['defineStore', 'createPinia'],
          },
          {
            from: 'pinia',
            imports: ['DefineStoreOptions', 'StoreDefinition'],
            type: true,
          },
          {
            from: 'vue-router',
            imports: [
              'RouteRecordName',
              'RouteLocationNormalizedLoaded',
              'RouteLocationNamedRaw',
            ],
            type: true,
          },
          {
            from: 'axios',
            imports: [
              'AxiosInstance',
              'AxiosResponse',
              'AxiosError',
              'AxiosRequestConfig',
              'InternalAxiosRequestConfig',
            ],
            type: true,
          },
          {
            from: '@vueuse/integrations',
            imports: ['UseAxiosOptions', 'StrictUseAxiosReturn'],
            type: true,
          },
          {
            from: 'vue',
            imports: ['PropType', 'InjectionKey', 'Ref'],
            type: true,
          },
          {
            from: 'element-plus',
            imports: [
              'FormRules',
              'FormInstance',
              'FormItemRule',
              'UploadInstance',
              'UploadFile',
            ],
            type: true,
          },
        ],
        dirs: ['src/shared'],
        dts: 'src/types/auto-imports.d.ts',
      }),
    ],
  };
});
