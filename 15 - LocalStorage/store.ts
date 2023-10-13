
  /**
   *   Requirement:
   *     type something in item input and click the submit or press the enter key so that the item add in tapas list
   *   Solution:
   *    track the value of item
   *    when pressing the enter key or clicking the submit. add the item value to items list at the same time render a list of li appling to ul.
   * 
   */
  interface Item {
    item: string,
    done: boolean 
  }
  const addItems = document.querySelector('.add-items') as HTMLFormElement;
  const itemsList = document.querySelector('.plates') as HTMLUListElement;

  let items:Item[] = JSON.parse(String(localStorage.getItem("items"))) || [];
  //console.log(items);

addItems.addEventListener('submit',handleSubmit) 
window.addEventListener("load",()=>{
  if(items.length !== 0){
    updateItems(items)}});
itemsList.addEventListener("click", ToggleDone);

function handleSubmit(e: SubmitEvent){
    submitItem(e);
    updateItems(items);
}

function submitItem(e: SubmitEvent){
   e.preventDefault();
   const form = e.target as HTMLFormElement
   const formData = new FormData(form);
   const item: Item = {
    item: String(formData.get('item')),
    done: false,
   }
   items.push(item);
   localStorage.setItem("items", JSON.stringify(items));
   form.reset();
   //console.log(localStorage);
}
function updateItems(items:Item[]) {
    const html =  items.map((item, index) => {
        return `
        <li>
          <input type="checkbox" data-index="${index}" id="item${index}" ${item.done? 'checked' : ''}>
          <label for="item${index}">${item.item}</label>
        </li>`
    });
    itemsList.innerHTML = html.join("");
    
}

function ToggleDone(e:MouseEvent){
  const el = e.target as HTMLElement;
  if(el.matches("input")){
    const i = el.dataset.index;
    items[i!].done =  !items[i!].done;
    localStorage.setItem("items", JSON.stringify(items));
    updateItems(items);
  }
}