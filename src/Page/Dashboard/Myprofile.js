import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { BiEditAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth)
    const email = user?.email

    const profile = (
      <img src="https://i.ibb.co/4RLYBvF/Screenshot-6.png" alt="avatar" />
    );

    const imgStorageKey = 'ab4ebcd5f1e4f3b6eb095aa66b95920e';

    const onSubmit = data => {
        const img = data.image[0];
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        formData.append('image', img);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())


        const name = data.name;
        const education = data;
        const city = data;
        const phone = data;


        const info = {
            name,
            education,
            city,
            phone,
            profile,
        }
        const newInfo = {
            ...info, email: email
        }

    }

    return (
        <div className='lg:my-12 card shadow-xl mt-5 mx-10'>
            <div className='flex navbar'>
                    <div className='m-5 ml-14'>
                        <h2 className='text-3xl font-semibold  text-purple-500'>My profile</h2>
                    </div>
                    <div className='ml-24 text-3xl mt-5 navbar-end'>
                        <Link to='myprofile/loadprofile'><BiEditAlt /></Link>
                    </div>
                </div>
                <hr />
            <div className="card lg:card-side bg-base-100 mb-5 mx-5">
                <figure>
                <div className="avatar placeholder m-10">
                        <div className="w-40 h-40 mt-5 rounded-full">
                            {profile}
                        </div>
                    </div>
                    </figure>
                <div className="card-body">
                <div>
                        <h2><span className='text-pink-400 font-bold'>Email:</span> {user.email}</h2>
                        <br />
                        <h2><span className='text-pink-400 font-bold'>Name:</span> {user.name}</h2>
                        <br />
                        <h2><span className='text-pink-400 font-bold'>Phone Number:</span> {user.phone}</h2>
                        <br />
                        <h2><span className='text-pink-400 font-bold'>Education:</span> {user.education}</h2>
                    </div>
                </div>
            </div>      
            </div>
    );
};

export default MyProfile;