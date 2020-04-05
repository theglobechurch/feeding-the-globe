

module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection("recipes", function (collection) {
    return collection.getAllSorted().filter(function (item) {
      return item.inputPath.match(/^\.\/src\/recipe\//) !== null;
    });
  });

  eleventyConfig.addPassthroughCopy({ "node_modules/globe-fractal/dist": "assets" });

  eleventyConfig.addLayoutAlias("default", "templates/base.njk");
  eleventyConfig.addLayoutAlias("recipe", "templates/recipe.njk");

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
