const React = require('react')
const Default = require('./layouts/default')

function userprofile() {
  return( 
<Default>
<div>
  <button>Play</button>
  <h2>To delete your profile enter you information and click the Delete User Button below</h2>
  <form action='/new' method="Delete">
                <label for="firstName">First Name</label>
                <input
                type='text'
                name='firstName'
                id='firstName'
                />
                <label for="lastName">Last Name</label>
                <input
                type='text'
                name='lastName'
                id='lastName'
                />
                <label for="email">Enter your email:</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                />
                <label for="password">Password (4 characters minimum):</label>
                <input 
                type="password" 
                id="passord" 
                name="password" 
                required
                />
                <input type="submit" value= "Create New USer Profile"/>
            </form>
  <button>Delete User</button>
</div>
</Default>
 )
}
export default userprofile