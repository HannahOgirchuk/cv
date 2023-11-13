
// document.querySelectorAll('.accordion').forEach((el) => {
//     el.addEventListener('click', () =>  {
//        let content =el.nextElementSibling;
//     //    console.log(content)
//         if(content.style.maxHeight) {
//             document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null )
//         } else {
//             document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null )
//             content.style.maxHeight =content.scrollHeight + 'px'

//         }
//     })
// })
function img(){
    let elem = document.getElementsByClassName ('content');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('content').style.display='block';
        } else if (style.display !== 'none') {
        document.getElementById('content').style.display='none';
      }
    }