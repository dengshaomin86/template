import { ref } from "vue";
import type { PiniaPluginContext, Store } from "pinia";

const modules: string[] = ["config"];

// 合并 store state
function mergeState(target: any, source: any) {
  for (const key in source) {
    if (!(key in target)) continue; // target 不存在 key，直接跳过
    target[key].toString() === "[object Object]" && source[key].toString() === "[object Object]"
      ? mergeState(target[key], source[key])
      : (target[key] = source[key]);
  }
  return target;
}

function initState(store: Store) {
  const { $id } = store;
  if (!modules.includes($id)) return;
  // 获取文件内容
  const content = localStorage.getItem(`pinia_${$id}`);
  if (!content) return;
  const state = mergeState(JSON.parse(JSON.stringify(store.$state)), JSON.parse(content));
  for (const key in state) {
    // @ts-ignore
    store.$state[key] = ref(state[key]);
  }
}

function writeState(store: Store) {
  const { $id } = store;
  if (!modules.includes($id)) return;
  const content = JSON.stringify(store.$state);
  localStorage.setItem(`pinia_${$id}`, content);
}

export function piniaPluginSaveState(context: PiniaPluginContext) {
  const { store } = context;

  initState(store);

  // 响应 store 变化
  store.$subscribe(() => {
    writeState(store);
  });
}
