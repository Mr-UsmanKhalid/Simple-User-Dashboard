import React from 'react'

const ProfileCard = ({ name, bio, isOnline }) => {
  return (
    <div className="relative w-64 p-4 bg-white rounded-xl shadow-md">
      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></div>

      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">
        {bio ? bio : 'This user has no Bio'}
      </p>
    </div>
  )
}

export default ProfileCard
