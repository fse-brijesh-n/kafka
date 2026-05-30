const browserWindow = window as typeof window & {
  global: typeof window;
};

browserWindow.global = window;