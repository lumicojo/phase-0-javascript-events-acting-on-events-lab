function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
     // Your code here
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers,10);
    if (right > 0) {
      dodger.style.left = `${right+ 1}px`;
  
    }
  }