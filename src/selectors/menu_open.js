export const menu_open = () => {
  var content = document.getElementById('menu_content')
  if (content.style.display === '' || content.style.display === 'none') {
    content.style.display = 'flex'
  } else {
    content.style.display = 'none'
  }
}
