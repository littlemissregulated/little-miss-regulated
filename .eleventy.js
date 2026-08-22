module.exports = function(eleventyConfig) {

  // Kopiraj CMS administracijo in slike/CSS na objavljeno stran
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  // Slovenski zapis datuma
  eleventyConfig.addFilter("slDate", function(date) {
    const d = new Date(date);

    const months = [
      "januar", "februar", "marec", "april",
      "maj", "junij", "julij", "avgust",
      "september", "oktober", "november", "december"
    ];

    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
