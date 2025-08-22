export const splitLines = (text = "", maxLength = 20) => {
  const words = text.split(/\s+/);
  let currentStatement = "";
  const result = [];

  for (const word of words) {
    if ((currentStatement + word).length <= maxLength) {
      currentStatement += (currentStatement ? " " : "") + word;
    } else {
      result.push(currentStatement);
      currentStatement = word;
    }
  }

  if (currentStatement) {
    result.push(currentStatement);
  }

  // console.log(result);
  return result;
};
