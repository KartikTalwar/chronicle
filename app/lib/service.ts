import { kv } from "@vercel/kv"

export function generateUUID() {
  var d = new Date().getTime();
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
  return 'yxxxxxxxxxxyxyxxyxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;
      if(d > 0){
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


export async function saveAPIKey(apiKey: string, address: string) {
  const set = await kv.set(apiKey, address)
  return set
}
