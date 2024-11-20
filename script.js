let productCards = document.querySelectorAll('.product_card')
productCards.forEach(function(card) {
  card.onmouseover = function() {
    card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'
  }
  card.onmouseout = function() {
    card.style.boxShadow = 'none'
  }
})
