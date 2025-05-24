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
  console.log('Document updated, queueing MathJax reprocessing.');

  MathJax.startup.promise.then(() => {
    console.log('MathJax is ready. Proceeding with reset for document update.');

    if (MathJax.startup.output && typeof MathJax.startup.output.clearCache === 'function') {
      MathJax.startup.output.clearCache();
    } else {
      console.warn('MathJax.startup.output.clearCache not available during document update. Skipping.');
    }
    MathJax.typesetClear();

    // Explicitly pass the TeX configuration from window.MathJax
    // to ensure all settings, including inlineMath for "$", are reapplied.
    if (window.MathJax && window.MathJax.tex) {
      MathJax.texReset(window.MathJax.tex);
    } else {
      // Fallback to default reset if window.MathJax.tex is somehow undefined
      console.warn('window.MathJax.tex not found, using default texReset().');
      MathJax.texReset();
    }

    // Wait a bit for mkdocs-jupyter to finish loading/DOM updates, then process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        MathJax.typesetPromise()
          .then(() => {
            console.log('MathJax typesetPromise complete for document update.');
            resolve();
          })
          .catch((err) => {
            console.error('MathJax typesetPromise error during document update:', err);
            reject(err);
          });
      }, 100); // Original delay
    });
  }).catch((err) => {
    console.error('Error in MathJax startup promise chain during document update:', err);
  });
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