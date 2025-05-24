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
      console.log('MathJax: startup.ready triggered.');
      MathJax.startup.defaultReady();

      // Perform initial typesetting for the page content present at load time
      MathJax.startup.promise.then(() => {
        console.log('MathJax: Initial startup promise resolved. Typesetting page.');
        return MathJax.typesetPromise();
      }).then(() => {
        console.log('MathJax: Initial page typesetting complete.');
      }).catch((err) => console.error('MathJax: Error during initial typeset:', err));

      // Setup for mkdocs-material dynamic content updates (e.g., from jupyter notebooks)
      if (window.document$ && typeof window.document$.subscribe === 'function') {
        document$.subscribe(() => {
          console.log('MathJax: document$ event triggered. Queueing reprocessing.');
          // Ensure we use the main startup promise chain
          MathJax.startup.promise.then(() => {
            console.log('MathJax: Ready for document update. Resetting and typesetting.');
            
            if (MathJax.startup.output && typeof MathJax.startup.output.clearCache === 'function') {
              MathJax.startup.output.clearCache();
            }
            MathJax.typesetClear();

            // Re-apply TeX configuration, especially for $...$
            if (window.MathJax && window.MathJax.tex) {
              MathJax.texReset(window.MathJax.tex);
            } else {
              MathJax.texReset();
            }
            
            // Short delay for DOM changes to settle, then typeset
            return new Promise((resolve) => setTimeout(resolve, 150)).then(() => { // Slightly increased delay
                console.log('MathJax: Attempting typesetPromise for document update.');
                return MathJax.typesetPromise();
            });
          }).then(() => {
            console.log('MathJax: Reprocessing for document update complete.');
          }).catch((err) => {
            console.error('MathJax: Error during reprocessing for document update:', err);
          });
        });
        console.log('MathJax: Subscribed to document$ events for dynamic updates.');
      } else {
        console.warn('MathJax: document$ API not found. Dynamic notebook content might not be typeset by this handler.');
      }

      // Setup MutationObserver for other dynamic content changes
      // This observer also needs MathJax to be ready.
      if (typeof window !== 'undefined' && 'MutationObserver' in window) {
        const observer = new MutationObserver((mutations) => {
          let shouldProcess = false;
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                  const textContent = node.textContent || "";
                  if (textContent.includes('$') || textContent.includes('\\(') || textContent.includes('\\[') ||
                      (node.querySelector && 
                        (node.querySelector('[class*="highlight"]') || 
                         node.querySelector('.jupyter-notebook') || 
                         node.classList.contains('tex2jax_process') || 
                         node.classList.contains('arithmatex')))
                     ) {
                    shouldProcess = true;
                  }
                }
              });
            }
          });
          
          if (shouldProcess) {
            console.log('MathJax: MutationObserver detected relevant change. Queueing reprocessing.');
            MathJax.startup.promise.then(() => {
              console.log('MathJax: Ready for MutationObserver update. Typesetting.');
              // No need for full reset here, just typeset new/changed content
              return MathJax.typesetPromise();
            }).then(() => {
              console.log('MathJax: Reprocessing for MutationObserver complete.');
            }).catch(err => console.error("MathJax: Error from MutationObserver typesetPromise:", err));
          }
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
        console.log('MathJax: MutationObserver initialized and observing document body.');
      }
    }
  }
}; 