

module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection("recipes", function (collection) {
    return collection.getAllSorted().filter(function (item) {
      return item.inputPath.match(/^\.\/src\/recipe\//) !== null;
    });
  });

  return {
    templateFormats: ["html", "njk", "md"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes"
    },
  };
}
