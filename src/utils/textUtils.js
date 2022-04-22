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
    lowerTag: results.join("").toLowerCase(),
  };
}

function keyToSentence(key) {
  return key.replace(/([A-Z])/g, " $1").trim();
}

function slugToId(string) {
  let splits = string.split("-");
  let results = splits.map((el) => {
    const upper = el.charAt(0)?.toUpperCase();
    const concat = upper.concat(el.slice(1));
    return concat;
  });
  return results.join("");
}

function metaFromRecord(content, path) {
  return {
    id: content.primary_key,
    t: `${content?.post_title} | visualsvelte`,
    d: content?.desc,
    u: path,
    tags: content?.keywords.join(),
  };
}

export { slugToId, urlToText, keyToSentence, metaFromRecord };
