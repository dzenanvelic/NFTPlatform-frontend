import React from 'react'
import BlogNav from '../../shared/components/BlogNav'
import Button from '../../UIelements/Button'
import Input from '../../UIelements/Input'
import './writeblog.css'
function WriteBlog() {
    return (<>
        <BlogNav />

        <div className='writeBlog'>
            <img src="/images/20220319_101025_copy_3935x6338.jpg" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <Input

                        inputClass=' inputFile'
                        element='input'
                        id='fileInput'
                        type="file"
                        label={<i class=" plus-icon fa-solid fa-plus"></i>}
                    />
                    <Input
                        inputClass='writeInput'
                        type='text'
                        placeholder="Title"
                        element='input'
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <Input
                        type='text'
                        placeholder='Tell your story'
                        textAreaClass='writeInput writeText'
                    />
                </div>
                <Button
                    buttonClass='writeSubmit'
                >Publish</Button>
            </form>
        </div>
    </>)
}

export default WriteBlog