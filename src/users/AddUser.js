// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Button from "../components/Button"
import TextField from '../components/TextField';

const AddUser = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const handleNewUser = () => {
    setValues({ name: '', email: '' });
    // dispatch(addUser({
    //   // id: uuidv4(),
    //   name: values.name,
    //   email: values.email
    // }));
    // navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Toure' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'toure@mail.com' }}
      />
      <Button onClick={handleNewUser}>Submit</Button>
    </div>
  )
}

export default AddUser