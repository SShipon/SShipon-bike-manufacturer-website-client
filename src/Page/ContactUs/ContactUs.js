import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div style={{background: 'green'}}>
            <div class="card mx-40 bg-base-800 shadow-xl">
                <div class="card-body">
                    <div className='mt-3 text-center'>
                        <h1 className='text-uppercase text-4xl font-bold'>Contact us</h1>
                        <hr className='w-50 mt-5' />
                    </div>
                    <form className='text-center p-10'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mt-5" />
                    <br />
                    <textarea class="textarea textarea-bordered w-96 mt-5" placeholder="Bio"></textarea>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                    </form>
                    
                    <div className='mt-5'>
                            <p>
                                 South Middle Halishar,Bandar,Chottagram
                            </p>
                            <p>
                                 01872900536
                            </p>
                            <p>
                                 mohammadmehedihasan84@gmail.com
                            </p>
                        </div>
                </div>
            </div>
           </div>
    );
};

export default ContactUs;