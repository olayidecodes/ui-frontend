"use client"
import React, {useState} from 'react';
import './Donate.scss'
// import { checkout } from '@/lib/api/checkout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Currency {
  code: string;
  name: string;
}

const Donate = (props: any) => {
  // initializing the state of all form input.
  const [state, setState] = useState({
    FirstName: '', 
    LastName: '', 
    Email: '', 
    HallAlumni: '', 
    AmountToPay: 0,
    Narration: '',
    Currency: ''
  })

  const [ isLoading, setIsLoading ] = useState<boolean>(false)
//   const router = useRouter()


  // onSubmit function
  const submitHandler = async () => {
    // form validation before the next form
      if (state.FirstName && state.LastName && state.Email && (state.AmountToPay >= 100) && state.Currency && state.HallAlumni && state.Narration !== "") {
        const payload = {
          "firstName": state.FirstName,
          "lastName": state.LastName,
          "email": state.Email,
          "amount": state.AmountToPay,
          "narration": state.Narration,
          "hallOfResidence": state.HallAlumni,
          "currency": state.Currency,
          "transactionID": '',
        }
        setIsLoading(true);
        // const data = await checkout(payload)
        // router.push(data.data.data.authorization_url)
        // console.log(data)

      } else if(state.AmountToPay <= 0){
        toast.error(`Please input amount greater than ${state.AmountToPay}`)
        setIsLoading(false)
      }else {
        setIsLoading(false)
        toast.error('Please fillup all input field')
      }
  
    }

  // handling/getting the input value here
const inputHandle = (e: any) => {
  console.log(e.target.name)
  setState({
    ...state,
    [e.target.name]: e.target.value

  })
}


// list of currencies
const currencies: Currency[] = [
  { code: 'NGN', name: 'Nigerian Naira' }, 
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  // Add more currencies as needed
];


  return (
    <div className="main">
      <ToastContainer />
      
        <div className="form">
          <h1 className="section__title">Donate</h1>
                <div className="form1">
                  <div className="field">
                    <label className='label' htmlFor="fname">Full Name</label>
                    <input value={state.FirstName} onChange={inputHandle} className="input" type='text' name='FirstName'/>
                  </div>

                  <div className="field">
                    <label className='label' htmlFor="fname">Email Address</label>
                    <input value={state.Email} onChange={inputHandle} className="input" type='email' name='Email'/>
                  </div>

                  <div className="field">
                    <label className='label' htmlFor="hallAllumni">Alumni Hall</label>
                    <select className="input select" onChange={inputHandle} name="HallAlumni" id="HallAlumni">
                      <option value="#"></option>
                      <option value="Alexander brown hall">Alexander Brown Hall</option>
                      <option value="Kuti Hall">Kuti Hall</option>
                      <option value="Tedder Hall">Tedder Hall</option>
                      <option value="Mellanby Hall">Mellanby Hall</option>
                      <option value="Queen Elizabeth Hall">Queen Elizabeth Hall</option>
                      <option value="Independence Hall">Independence Hall</option>
                      <option value="Idia Hall">Idia Hall</option>
                      <option value="Bello Hall">Bello Hall</option>
                      <option value="Awolowo Hall">Awolowo Hall</option>
                      <option value="Nnamdi Azikwe Hall">Nnamdi Azikwe Hall</option>
                    </select>
                  </div> 
                  
                  <div className="field">
                    <label className='label' htmlFor="narration">Purpose of Payment</label>
                    <input className="Narration input" value={state.Narration} onChange={inputHandle} name="Narration" id="Narration" />
                  </div>

                  <div className="amount_box">

                  <div className="field">
                    <label className='label' htmlFor="amount">Amount</label>
                    <input value={state.AmountToPay} onChange={inputHandle} className="input" type='number' name='AmountToPay'/>
                  </div>

                  <div className="field">
                    <label className='label' htmlFor="currency">Currency</label>
                    <select className="input select" name='Currency' onChange={inputHandle}>
                      <option value="">Select A Currency</option>
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.name} - ({currency.code})
                      </option>
                      ))}
                    </select>
                  </div>

                  </div>

                </div>

                <button type='submit' className="btn" onClick={submitHandler} disabled={isLoading}>{ isLoading? "Processing..." : "Proceed to Payment"}</button>
          </div>
      </div>
  )
}

export default Donate