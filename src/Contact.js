import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';


// https://mdbootstrap.com/docs/react/extended/contact/

export default function Contact() {
  return (
    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  
    <form id='form' className='text-center' style={{ width: '50%',paddingTop:'10vh' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4' style={{padding:'10px 30px', width:"100%"}}>
        Send
      </MDBBtn>
    </form>
   
    </div>
 
    </>
  );
}
