function titleCase(str) {
  return str
  .toLowerCase()
  .replace(/(^|\s)\S/g, i => i.toUpperCase());
}

titleCase("I'm a little tea pot");