import React from 'react';

export const SignUp = () => {
    return (
        <>   
            <div className='card-body'>
                <form>
                    <div className='mb-1'>
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" id="first-name" className="form-control" placeholder="First Name" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" id="last-name" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input type="password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='submit_btn'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );  
}

export default SignUp;