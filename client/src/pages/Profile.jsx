import { useSelector } from 'react-redux'

export default function Profile() {
  
  const {currentUser} = useSelector(state => state.user)
  console.log({currentUser})

  return (
    <div className='p-3 max-w-lg mxauto'>
      <h1 className='text-4xl text-center font-semibold my-8'>Profile</h1>
      <form className='flex flex-col gap-4'>
      <img src={currentUser.profilePicture} alt='profile' className='h-24 w-24 self-center
        cursor-pointer rounded-full object-cover mt-2' />
        <input defaultValue={currentUser.username} type='text' id='username' 
        placeholder='Username' className='bg-slate-100 rounded-lg p-4'/>
        <input defaultValue={currentUser.email} type='email' id='email' 
        placeholder='Email' className='bg-slate-100 rounded-lg p-4'/>
        <input type='password' id='password' 
        placeholder='Password' className='bg-slate-100 rounded-lg p-4'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg
        hover:opacity-95 disabled: opacity-80'>Update Info</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
