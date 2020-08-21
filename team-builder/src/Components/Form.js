import React from 'react';
import styled from 'styled-components';

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <PageForm className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Team Member's Info: </h2>
                <button disabled={!values.name || !values.email || !values.role }>Submit</button>
            </div>
            <div className='form-group inputs'>
                <h4>General Requirenments:</h4>
                <PageDiv>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        maxLength='20'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        maxLength='20'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>   
                        <option value=''>Select a role</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='UX Designer'>UX Designer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                    </select>
                </label>
            </PageDiv>
            </div>
        </PageForm>
    )
} 

const PageDiv = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
padding-top: 30px;

input:focus{
    background: lightblue;
}
select:focus{
    background: lightblue;
}

label{
    color:salmon;
}
`;

const PageForm = styled.form`
h2{
    color:plum;
}
h4{
    color:indianred;
}
button:active{
    color:salmon;
    background:lavender;
}
button{
    color: orange;
    background:black;
}
`;
