import {useState} from 'react';


const Signups = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setError(null);

    if ((isValidEmail(email))&&(password===cpassword)) {
        setError('sign up successful');
    } else {
      setError('sign up not successful');
    }
  };

  return (
    <div className="signup">
        <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          id="message"
          name="message"
          required
          value={email}
          onChange={handleChange}
        />
        
            <label>Name:</label>
                <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                
                <label>Phone:</label>
                <input 
                    type="number"
                    pattern="[0-9]*"
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label>Password:</label>
                <input 
                    type="text" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Confirm password:</label>
                <input 
                    type="text" 
                    required 
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                />


        <button type="submit">Submit</button>

       

        
      </form>
      <div>{error && <h2 style={{color: 'red'}}>{error}</h2>}</div>
    </div>
  );
}

export default Signups;
