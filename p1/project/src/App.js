
import './App.css';

function App() {
  return (
    <div className='container'>
     <div className='sub_container'>
      <h2>Login Form</h2>
     
      <form>
      <div className="form-group">
  <label htmlFor='loginInput'>Email</label>
  <input type='text'  id='loginInput' placeholder='Enter Email Here'/>
  </div>
  <div className="form-group">
  
  <label htmlFor='loginPassword'>Password</label>
  <input type='password' id="loginPassword" placeholder=' Enter Password Here'/>
  </div>
  <div className="form-group">
  
  <button className='btn-sumit' type='submit'>Submit</button>
  </div>
</form>


     </div>
    </div>
  );
}

export default App;
