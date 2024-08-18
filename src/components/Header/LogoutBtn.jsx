import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout as clearDataFromState} from '../../store/authSlice'

function LogoutBtn({className, children = null, ...props}) {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(clearDataFromState())      
        })
    }
    return (
        <button 
            className={`${className}`}
            onClick={logoutHandler}
            {...props}>
                {children ? {children} : "Logout" }
        </button>
    )
}

export default LogoutBtn