import React,{useState} from 'react'
import PersonCard from './PersonCard'

const FormComponent = props => {

  // !var section

  // exemple test "people"
    const [people,setPeople]  = useState([
        {firstname:"tiga",lastname:"master yi", email:"penta@kil.com", password:"dojo"},
        {firstname:"moucha",lastname:"zed", email:"a@a.com", password:"dojo"},
    ])

// field
    const [firstname,setfirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

// add to people
    const addUser=(e)=>{
        e.preventDefault();
        const newUser = { firstname, lastname, email,password};
        setPeople([...people,newUser])
        

    }
//! return section
  return (
    // big conatainer 
    <div style={{backgroundColor:"wheat"}}>
      {/* work on form */}
      <form onSubmit={(e)=> addUser(e) }>
{/* first name */}
        <div>
          <label>First name </label>
          <input type='text' onChange={e => setfirstname(e.target.value)} />
          {
            firstname.length<2 && firstname.length!=0? 
            <p> field must be at least 2 characters.</p>:
            <p></p>
          }
        </div>
        <h4>{firstname}</h4>
{/* last name */}
        <div>
          <label>Last name </label>
          <input type='text' onChange={e => setLastname(e.target.value)} />
        
        {
            lastname.length<2 && lastname.length!=0? 
            <p> field must be at least 2 characters.</p>:
            <p></p>
          }
          </div>
        <h4>{lastname}</h4>
{/* email*/}
        <div>
          <label>Email Address: </label>
          <input type='text' onChange={e => setEmail(e.target.value)} />
        </div>
        {
            email.length<8 && email.length!=0? 
            <p> field must be at least 8 characters.</p>:
            <p></p>
          }
        <h4>{email}</h4>
{/*password*/}
        <div>
          <label>Password: </label>
          <input type='text' onChange={e => setPassword(e.target.value)} />
        </div>
                <h4>{password}</h4>
                {
            password.length<8 && password.length!=0? 
            <p> field must be at least 8 characters.</p>:
            <p></p>
          }
{/*pasword confirmation*/}
        <div>
          <label>Confirm Password: </label>
          <input type='text' onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        <h4>{confirmPassword}</h4>
        {
            password!=confirmPassword? 
            <p> passwords don't match</p>:
            <p></p>
          }
{/* submit */}
        <input type='submit' value='Create User' />
      </form>
      {people.map((person, idx)=><PersonCard key={idx} person={person}></PersonCard>)}
    </div>
  )
}

export default FormComponent
