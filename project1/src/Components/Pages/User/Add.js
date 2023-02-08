import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';




function Add() {
   const  {register, handleSubmit} = useForm();

   function savedata(data){
    axios.post('http://localhost:5000/users', data);
    //console.log(data);
   }

  return (
    <div className='container'>
        <center><h1><u>USER REGISTERATION FORM</u></h1></center>
        <form onSubmit={handleSubmit(savedata)}>
            <label htmlFor='eid'><b>ENTER ID:</b></label>
            <input type='number' id='eid' className='form-control' {...register("eid")}/>
            <br />
            <br />
            <label htmlFor='fn'><b>ENTER FIRST NAME:</b></label>
            <input type='text' id='fn' className='form-control' {...register("fname")}/>
            <br />
            <br />
            <label htmlFor='ln'><b>ENTER LAST NAME:</b></label>
            <input type='text' id='ln' className='form-control' {...register("lname")}/>
            <br />
            <br />
            <label htmlFor='ct'><b>ENTER CITY:</b></label>
            <input type='text' id='ct' className='form-control' {...register("ct")}/>
            <br />
            <br />
            <input type='submit' value='ADD USER' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>
        
        </form>
    </div>
  )
}

export default Add;