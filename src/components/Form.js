import React, {useState} from 'react'
import FormInputGroup from './FormInputGroup';

 function From() {
 
  const [basicSalary, setBasicSalary]= useState("");
  const [earning, setEarning]= useState("");
  const [deduction, setDeduction]= useState("");
  const [netSalary, setNetSalary]= useState("");
  const [grossEarning, setGrossEarning]= useState("");
  const [ctc, setCtc]= useState("");
  const [epf8, setEpf8]= useState("");
  const [epf12, setEpf12]= useState("");
  const [epf3, setEpf3]= useState("");

    function calculateNetSalary() {
      setNetSalary((basicSalary + earning)-deduction);
      return netSalary;
    }

    
    function calculateGrossEarning() {
      setGrossEarning((basicSalary + earning));
      return grossEarning;
    }

    function calculateEpf8() {
      setEpf8((grossEarning *0.08));
      return epf8;
    }

    function calculateGrossEarning() {
      setEpf12((grossEarning *0.12));
      return epf12;
    }

    function calculateGrossEarning() {
      setEpf3((grossEarning *0.13));
      return epf3;
    }

    function calculateCtc() {
      setCtc((grossEarning + epf12+ epf3));
      console.log(ctc)
      return ctc;
    }


  return (
    <form onSubmit={(e) => e.preventDefault()}> 
    <FormInputGroup 
    text="Basic Salary"
    placeholder="Enter the BasicSalary"
    onkeyup={calculateNetSalary}
    value={basicSalary}
    onInput={(e) => setBasicSalary(e.target.value)}
    
    
    
    
     />
      <FormInputGroup 
    text="Earning"
    placeholder="Travel,Insurance"
    onkeyup={calculateNetSalary}
    value={earning}
    onInput={(e) => setEarning(e.target.value)}
    
    
     />

    <FormInputGroup 
    text="Deduction"
    placeholder="Deduction"
    onkeyup={calculateNetSalary}
    value={deduction}
    onInput={(e) => setDeduction(e.target.value)}
    
    
    
    
     />


<FormInputGroup 
    text="Gross Earning"
    placeholder=""
    readOnly={true}
    value={grossEarning}
    
    
     />
      <FormInputGroup 
    text="Net salary"
    placeholder=""
    readOnly={true}
    value={netSalary}
    
    
     />
      
    
   
      <h4 className='alert-info fw-bold'>Cost to company :{ctc}</h4>
     <button type="submit" className='my-3 btn btn-primary btn-lg w-100'
     onClick={calculateCtc}
     >Calculate</button>
    </form>
  )
}
export default  From; 