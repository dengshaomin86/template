// 此文件里面是vite帮我们定义的各种常用类型定义，比如css,图片等。
// 三斜线引用告诉编译器在编译过程中用types形式引入的额外的文件vite/client.d.ts,
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}
