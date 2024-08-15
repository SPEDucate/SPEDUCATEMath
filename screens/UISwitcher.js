// Function to switch colors in the embedded CSS
export function colorsSwitcher(fileName, color) {
    // Check if the file name ends with .js
    if (!fileName.endsWith('.js')) {
      console.error('The provided file is not a .js file.');
      return;
    }
  
    // Dynamically import the JavaScript file
    import(`./${fileName}`).then(module => {
      const css = module.default; // Assume CSS is exported as default in the JS file
  
      // Create a <style> element to manipulate the CSS
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      document.head.appendChild(style);
  
      // Modify the color in the CSS
      const styleSheet = style.sheet;
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.style && rule.style.color) {
          rule.style.color = color;
        }
      }
    }).catch(err => {
      console.error('Error importing the file:', err);
    });
  }
  