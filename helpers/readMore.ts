export default function readMore(str: string, maxWords: number) {
  const array = str.split(" ");

  const wordCount = array.length;

  let output = array.splice(0, maxWords).join(" ");

  if (wordCount > maxWords) {
    output += "...";
  }

  return output;
}
