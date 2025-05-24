window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],       // Ensure $...$ is first or prioritized if issues persist
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    // Removed skipTags, ignoreClass, processClass for now to simplify and test core functionality
    // skipTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    // ignoreClass: "tex2jax_ignore|editor", // If you have elements to explicitly ignore
    // processClass: "tex2jax_process|arithmatex" // If Arithmatex output needs explicit processing
  },
  options: {
    // ignoreHtmlClass: "tex2jax_ignore",
    // processHtmlClass: "tex2jax_process|arithmatex"
    // Keeping options minimal for now
  },
  startup: {
    ready: () => {
      console.log('MathJax: Simplified configuration - startup.ready triggered.');
      MathJax.startup.defaultReady();
      // Initial typeset is usually handled by MathJax itself when it loads and finds its config.
      // However, if content is added by mkdocs-material slightly after, a direct call might be needed.
      // Let's ensure it runs after the main startup promise for safety.
      MathJax.startup.promise.then(() => {
        console.log('MathJax: Startup promise resolved. Attempting initial typeset.');
        return MathJax.typesetPromise(); // This will typeset the whole page
      }).then(() => {
        console.log('MathJax: Initial typesetPromise complete.');
      }).catch((err) => {
        console.error('MathJax: Error during initial typesetPromise:', err);
      });
    }
  }
};

console.log('MathJax: Custom mathjax.js configuration loaded.'); 