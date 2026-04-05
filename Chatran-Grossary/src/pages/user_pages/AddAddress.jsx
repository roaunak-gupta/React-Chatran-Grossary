import { useState } from 'react';
import { assets } from '../../assets/assets'

const InputField = ({ type, placeholder, name, handleChange, address }) => (
    <input
        className='w-full px-2 py-2.5 border border-primary-darkgreen/30 outline-none text-gray-500 focus:border-primary-lightgreen rounded'
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required />
)

const AddAddress = () => {


    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        contry: '',
        zipcode: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='mt-16 pb-16'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>Add Address</p>
                <div className='w-16 h-0.5 bg-primary-lightgreen rounded-full'></div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                    <form className='space-y-3 mt-10 text-sm ' onSubmit={onSubmitHandler}>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField
                                handleChange={handleChange}
                                name='firstName'
                                type='text'
                                address={address}
                                placeholder='First Name' />
                            <InputField
                                handleChange={handleChange}
                                name='lastName'
                                type='text'
                                address={address}
                                placeholder='Last Name' />
                        </div>

                        <InputField
                            handleChange={handleChange}
                            name='street'
                            type='text'
                            address={address}
                            placeholder='Street' />

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField
                                handleChange={handleChange}
                                name='city'
                                type='text'
                                address={address}
                                placeholder='City' />
                            <InputField
                                handleChange={handleChange}
                                name='state'
                                type='text'
                                address={address}
                                placeholder='State' />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField
                                handleChange={handleChange}
                                name='zipcode'
                                type='number'
                                address={address}
                                placeholder='Zipcode' />
                            <InputField
                                handleChange={handleChange}
                                name='country'
                                type='text'
                                address={address}
                                placeholder='Country' />
                        </div>

                        <InputField
                            handleChange={handleChange}
                            name='email'
                            type='email'
                            address={address}
                            placeholder='Email' />

                        <InputField
                            handleChange={handleChange}
                            name='phone'
                            type='number'
                            address={address}
                            placeholder='Phone' />

                        <button className='w-full bg-primary-lightgreen text-primary-darkgreen hover:bg-primary-darkgreen hover:text-primary-lightgreen py-3 cursor-pointer uppercase transition rounded'>
                            Submit  
                        </button>
                    </form>
                </div>
                <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add Address" />
            </div>
        </div>
    )
}

export default AddAddress