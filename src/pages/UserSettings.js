import React from 'react'
import './usersettings.css'
import BlogSidebar from '../shared/components/blogcomponents/BlogSidebar'
import Input from '../UIelements/Input'
import Button from '../UIelements/Button'
function UserSettings() {
    return (
        <div className='userSettings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="setingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src="./images/20220319_101025_copy_3935x6338.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i class=" profilePicIcon fa-solid fa-user"></i>
                        </label>
                        <Input type="file" element="input" id="fileInput" inputClass="invisible" />
                    </div>
                    <label >Username</label>
                    <Input element="input" type="text" placeholder="dzenan" inputClass="" />
                    <label >Email</label>
                    <Input element="input" type="email" placeholder="dzenan@gmail.com" inputClass="" />
                    <label >Password</label>
                    <Input element="input" type="password" placeholder="password" />
                    <Button>Update</Button>
                </form>
            </div>
            <BlogSidebar />
        </div>
    )
}

export default UserSettings