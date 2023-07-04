import React from 'react'

interface UserManager {
    createUser: (userData: any) => void,
    updateUser: (userId: string, userData: any) => void,
}

const StudentManager: UserManager = {
    createUser : (userData: any) => {
        //Logic to create a Student user
        
    },
    updateUser : (userId: string, userData: any) => {
        //Logic to update a Student user

    }
}

export default StudentManager