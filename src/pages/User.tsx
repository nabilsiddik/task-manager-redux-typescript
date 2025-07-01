import AddUserModal from "@/components/AddUserModal"
import UserCard from "@/components/UserCard"
import { selectAllUsers } from "@/redux/features/user/userSlice"
import { useAppSelector } from "@/redux/hook"

const User = () => {
    const users = useAppSelector(selectAllUsers)
    return (
        <div>
            <div className="mb-10 mt-10">
                <AddUserModal />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4'>
                {users?.length > 0 && users.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        </div>
    )
}

export default User
