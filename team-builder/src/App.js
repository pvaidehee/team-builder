import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Member from './Components/Member'
import Form from './Components/Form'
import './App.css';
import styled from 'styled-components';

const initialTeamList = []

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { name, email, role }) =>{
  const newTeamMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}

function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = ()=> {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return
    fakeAxiosPost('fakeapi.com', newTeamMember)
      .then(res => {
        const teamMemberFromAPI = res.data
        setTeamMember([ teamMemberFromAPI, ...teamMember])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeamMember(res.data))
  }, [])

  return (
    <ThisDiv className='container'>
      <header><h1>Web-34 Team Members</h1></header>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMember.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }  
    </ThisDiv>
  )
}

export default App;

const ThisDiv = styled.div`
text-align:center;
background: lavenderblush;
padding-top: 2px;
padding-bottom: 20px;
color:orange;
:hover{
  color:purple;
}

h1{
  color:hotpink;
}
`;
