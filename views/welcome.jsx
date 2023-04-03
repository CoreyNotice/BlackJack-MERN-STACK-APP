const React = require('react')
const Default = require('./layouts/default')
function welcome () {
    return (
      <Default>
        <h2>Corey Presents: BlackJack!!!</h2>
        <button>Play</button>
      </Default>
    )
}

module.exports = welcome;
