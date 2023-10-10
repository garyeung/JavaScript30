function debounce(func: Function, wait = 20, immediate = true) {
      let timeout: NodeJS.Timeout | undefined;
      return function() {
        let context = this, args = arguments;
        const later = function() {
          timeout = undefined;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

/**
 *  Requirement:
 *    the corresponding image slide in when it enter the visual viewport by scrolling and go out when it is out
 *  
 */
const images = document.querySelectorAll(".slide-in");

function hanleScroll(e:Event){
    images!.forEach((image) => {
      const img = image as HTMLImageElement;
      //console.log(img);
      if(isInViewport(img)){
        img.classList.add("active");
      }
      else{
        img.classList.remove("active");
      }
    })
}

function isInViewport(image:HTMLImageElement): boolean{
  let slideInAt = (window.scrollY+window.innerHeight)-(image.height/2); //slide in at half of the positio of the image
  let imageBottom = image.offsetTop + image.height;

  let isShownHalf = slideInAt > image.offsetTop;
  let isNotScrolledPast = window.scrollY < imageBottom;

  return (isShownHalf && isNotScrolledPast);
}
    
window.addEventListener('scroll', debounce(hanleScroll));