const React = require('react')
const Default = require('./layouts/default')

function welcome () {
  
    return (
      <Default>
        <h2>Corey Presents: BlackJack!!!</h2>
        {/* <img src={models.image} alt='logo'/> */}
        <img src='https://www.shutterstock.com/image-vector/blackjack-logo-green-ribbon-on-600w-1639300576.jpg' alt='logo'/>
        <br></br>
      
<button type="button" class="btn btn-primary btn-lg btn-block">Play</button>
      </Default>
    )
}

module.exports = welcome;
