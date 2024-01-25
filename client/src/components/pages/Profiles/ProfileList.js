import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {getAuthUser}  from '../../../redux/actions/authactions'
import ProfileCard from './Profilecard'

function ProfileList() {
  const dispatch=useDispatch()
 
  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

const listUsers=useSelector((state)=>state.auth.user)
console.log(listUsers,"test")

  return (
    <div>
      helloooo
     {listUsers && <ProfileCard user={listUsers} />}
    </div>
  );
}

export default ProfileList


