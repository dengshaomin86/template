import { defineStore } from "pinia";

interface Theme {
  background: string;
}

interface State {
  theme: Theme;
  [key: string]: any;
}

export const useConfigStore = defineStore("config", {
  state: (): State => {
    return {
      theme: {
        background: "#ffffff",
      },
    };
  },
  getters: {
    gBackground: (state) => state.theme.background,
  },
  actions: {
    setBackground(payload: string) {
      this.theme.background = payload;
      this.initTheme();
    },
    initTheme() {
      let key: keyof Theme;
      for (key in this.theme) {
        document.documentElement.style.setProperty(`--${key}-color`, this.theme[key]);
      }
    },
  },
});
