function urlToText(pathname) {
  const primaryKey = pathname.split("/").pop();
  let splits = primaryKey.split("-");
  let results = splits.map((el) => {
    const upper = el.charAt(0)?.toUpperCase();
    const concat = upper.concat(el.slice(1));
    return concat;
  });
  return {
    upperTag: results.join(""),
    lowerTag: results.join("").toLowerCase()
  };
}
function keyToSentence(key) {
  return key.replace(/([A-Z])/g, " $1").trim();
}
function slugToId(string) {
  let splits = string.split("-");
  if (splits.length !== 1) {
    let results = splits.map((el) => {
      const upper = el.charAt(0)?.toUpperCase();
      const concat = upper.concat(el.slice(1));
      return concat;
    });
    return results.join("");
  } else {
    return splits[0];
  }
}
function metaFromRecord(content, path) {
  return {
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.desc,
    u: path,
    tags: content?.keywords.join()
  };
}
export { keyToSentence as k, metaFromRecord as m, slugToId as s, urlToText as u };
