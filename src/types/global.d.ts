
interface ChatbaseFunction extends Function {
  (method: string, ...args: any[]): any;
  q?: any[];
}

interface Window {
  chatbase: ChatbaseFunction;
}
