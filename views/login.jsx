const React = require('react')
const Default = require('./layouts/default')

function login() {
  return (
    <Default>
    <div>
      <h1>Log In Screen</h1>
      <p>Please enter user profile information or add New User by clicking button below</p>
            <form action='/login' method="POST">
                <label htmlFor="firstName">First Name</label>
                <input
                type='text'
                name='firstName'
                id='firstName'
                />
                <label htmlFor="lastName">Last Name</label>
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
                <label for="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                name="password"
                
                required
                />
                <input type="submit" value= "Log In"/>
            </form>
            <br/>
            <div>
      <button type="button" class="btn btn-primary btn-lg btn-block">Enter</button>

</div>
      

      
      </div>
    </Default>
  )
}

export default login