import React from 'react'

const UserInfo = ({user}) => {
    const color = user.wallet?.balance >= 1000 ? 'bg-green-600' : user.wallet.balance > 1000 ? 'bg-yellow-600' : 'bg-red-600';
    
    return (
        <div className=' py-3 w-full grid grid-cols-3 items-center justify-center place-items-center text-lg max-sm:text-sm'>
            <p className='text-ellipsis overflow-hidden whitespace-nowrap w-full'>{user.email}</p>
            <div className={`${color} text-lg font-bold text-teal-50 px-3 py-2 rounded-lg`}>
                {user.wallet?.balance ? user.wallet.balance : 0}
            </div>
            <p>{user.role_id == 2 ?
            `Administrador` :
            `Usuario`}</p>
        </div>
    )
}

export default UserInfo