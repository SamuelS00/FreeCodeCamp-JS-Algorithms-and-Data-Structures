function spinalCase(str: string) {
  let newStr = str.split((/\s|_|(?=[A-Z])/)).join("-").toLowerCase();

  return newStr;
}

export default spinalCase;