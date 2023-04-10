const React = require('react')
const Default = require('./layouts/default')


function userprofile({user,index}) {

  return( 
<Default>
<div>
  <h3>{user.firstName}</h3>
  <button>Play</button>
  <h2>User Scores:</h2>
  </div>
  <div>
  <h2>To delete your profile enter you information and click the Delete User Button below</h2>
  <form action={`/black/:${index}?_method=Delete`} method="POST">
  <input type='submit' value="DELETE"/>
</form>  
<form action='/black/welcome' method="POST">
  <input type='submit' value="Back to Home"/>
</form>

</div>
</Default>
 )
}
export default userprofile