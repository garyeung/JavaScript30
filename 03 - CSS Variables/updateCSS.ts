/**
 * Requirement:
 *  update the css variables: spacing, blur and base-color with js
 * 
 * Solution:
 *  get the corresponding input value
 *  then apply to the css variables
 *  add the variables to img css style
 *  keep running these event.
 */
    let spacingVar = '--spacing';
    let blurVar = '--blur';
    let baseVar = '--base';

    const spacingInput = document.getElementById("spacing") as HTMLInputElement;
    const blurInput = document.getElementById("blur") as HTMLInputElement;
    const baseColorInput = document.getElementById("base") as HTMLInputElement;
    //get the inital value
    document.documentElement.style.setProperty(spacingVar, spacingInput.value+'px');
    document.documentElement.style.setProperty(blurVar, blurInput.value+"px");
    document.documentElement.style.setProperty(baseVar, baseColorInput.value);

    spacingInput.addEventListener("input", (event)=>{
        const target  = event.target as HTMLInputElement;
        document.documentElement.style.setProperty(spacingVar, target.value+'px');
    })
    blurInput.addEventListener("input", (event) =>{
        const target = event.target as HTMLInputElement;
        document.documentElement.style.setProperty(blurVar, target.value+"px");

    })
    baseColorInput.addEventListener("input", (event) => {
        const target = event.target as HTMLInputElement;
        document.documentElement.style.setProperty(baseVar, target.value);
    })

    const imgs = document.getElementsByTagName("img");
    const img = imgs[0];
    img.style.setProperty("padding", `var(${spacingVar})`);
    img.style.setProperty("background-color", `var(${baseVar})`);
    img.style.setProperty("filter", `blur(var(${blurVar}))`);
