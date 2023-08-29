
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'

export default function OAuth() {
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      const res = await fetch('/backend/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        })
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
    } catch (error) {
      console.log('Could Not sign in with google.', error)
    }
  }

  return (
    <button type='button' onClick={handleGoogle} className='bg-red-600 text-white rounded-md p-3 uppercase hover:opacity-80'>Continue With google</button>
  )
}
