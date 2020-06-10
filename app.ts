// Problem: Uppercase string or array of strings

function upperAnything(data: string | string[]): string | string[] {
  if (typeof data === "string") {
    return data.toUpperCase();
  }

  return data.map(item => item.toUpperCase());
}

upperAnything(['eduweb', 'overment']) /*?*/
upperAnything('Adam') /*?*/

