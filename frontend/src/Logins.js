import {useState} from 'react';


const Logins = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
        setError('log in successful');
    } else {
      setError('log in not successful');
    }
  };

  return (
    <div className="login">
        <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          id="message"
          name="message"
          required
          value={email}
          onChange={handleChange}
        />
        
        <label>Password:</label>
            <input 
                type="text" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

        <button type="submit">Submit</button>

       

        
      </form>
      <div>{error && <h2 style={{color: 'red'}}>{error}</h2>}</div>
    </div>
  );
}

export default Logins;
