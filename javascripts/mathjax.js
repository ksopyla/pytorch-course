window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
    digits: /^(?:[0-9]+(?:\{,\}[0-9]*)?)$/,
    tags: "none",
    tagSide: "right",
    tagIndent: ".8em",
    useLabelIds: true,
    multlineWidth: "85%",
    // Force processing of all dollar signs
    skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"],
    // Don't skip any elements that might contain math
    ignoreClass: "tex2jax_ignore|editor",
    processClass: "tex2jax_process|arithmatex"
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "tex2jax_process|arithmatex",
    // Enable processing in more contexts
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
    includeHtmlTags: ["div", "span", "p", "li", "td", "th"]
  },
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        console.log('MathJax startup complete');
        // Process any existing content
        MathJax.typesetPromise();
      });
    }
  }
};

// Enhanced processing for mkdocs-jupyter content
document$.subscribe(() => {
  console.log('Document updated, processing MathJax...');
  
  // Clear and reset MathJax
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  
  // Wait a bit for mkdocs-jupyter to finish loading, then process
  setTimeout(() => {
    MathJax.typesetPromise().then(() => {
      console.log('MathJax processing complete');
    }).catch((err) => {
      console.error('MathJax processing error:', err);
    });
  }, 100);
});

// Additional processing for dynamically loaded content
if (typeof window !== 'undefined') {
  // Watch for changes in notebook content
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if any added nodes contain math
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.textContent.includes('$$') || node.textContent.includes('$') || 
                node.querySelector && (node.querySelector('[class*="highlight"]') || 
                node.querySelector('.jupyter-notebook'))) {
              shouldProcess = true;
            }
          }
        });
      }
    });
    
    if (shouldProcess) {
      console.log('Notebook content changed, reprocessing MathJax...');
      setTimeout(() => {
        MathJax.typesetPromise();
      }, 200);
    }
  });
  
  // Start observing when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
} 