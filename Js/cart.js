// Lấy tất cả các nút thêm-bớt số lượng sản phẩm
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');

// Xử lý sự kiện khi nút '+' được nhấn
plusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const input = this.previousElementSibling;
    let value = parseInt(input.value);
    value = isNaN(value) ? 0 : value;
    input.value = value + 1;
  });
});

// Xử lý sự kiện khi nút '-' được nhấn
minusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const input = this.nextElementSibling;
    let value = parseInt(input.value);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      input.value = value - 1;
    }
  });
});

// Lắng nghe sự kiện khi nhấp vào nút "Bớt sản phẩm"
// document.addEventListener('click', function(event) {
//   if (event.target.classList.contains('remove-from-cart')) {
//     var cartItem = event.target.parentNode.parentNode.parentNode;
//     cartItem.removeChild(cartItem);
//   }
// });
const children = document.querySelectorAll('.remove-from-cart');
children.forEach((child) => {
    child.addEventListener('click', function () {
        // const parent =
        //     ele.parentElement.parentElement.parentElement.parentElement;
        const parent = findParent(child, 'cart');
        parent.style.display = 'none';
    });
});

function findParent(child) {
    let parent = child.parentElement.parentElement;
    // while (parent) {
    //     if (parent.classList.value.includes(parentClass)) {
    //         break;
    //     }
    //     parent;
    // }
    return parent;
}