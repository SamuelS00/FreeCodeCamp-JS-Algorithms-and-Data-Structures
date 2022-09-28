type HtmlEntities = {
  "&"?: string,
  "<"?: string,
  ">"?: string,
  '"'?: string,
  "'"?: string,
}

function getValues<T, R extends keyof T>(obj: T, propertyName: R) {
  return obj[propertyName];
};

function convertHTML(str: string) {
    const htmlEntities: HtmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    const arrStr = str.split('');

    const newArr = arrStr.map((c) => {
      let isHtmlEntities = getValues(htmlEntities, c as keyof HtmlEntities);

      if (isHtmlEntities) return isHtmlEntities;

      return c;
    });

    const newStr = newArr.join('');

    return newStr;
};

export default convertHTML;