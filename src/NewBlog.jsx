import { useState } from 'react';
import { Button, TextInput, SegmentedControl } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { useForm } from '@mantine/form';

import { IconBrandTumblr, IconBallpen, IconDeviceFloppy } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';




export default function NewBlogs({ blogList, setBlogList }) {

    const [isPending, setIsPending] = useState(false)


    const navigate = useNavigate()

    const form = useForm({
        initialValues: {
            title: '',
            author: '',
            blogContent: '',
            type: ''
        },

        validate: {
            title: (value) => (value.trim().length < 3 ? 'Title must be three character long' : null),
            author: (value) => (value.trim().length < 3 ? 'Author must be three character long' : null)
        },
    });

    function handleFormSubmit(values) {

        setIsPending(true)


        setTimeout(() => {

            let createdOn = new Date()

            let id = Math.random();

            values = {
                ...values,
                'date': createdOn,
                'id': id
            }

            let blogsList = JSON.parse(localStorage.getItem('localBlogs'));

            // console.log(blogsList)
            blogsList.unshift(values);

            setBlogList(blogsList);

            localStorage.setItem('localBlogs', JSON.stringify(blogsList));
            setIsPending(false)

            navigate('/');

        }, 1200);

        //     let createdOn = new Date()

        //     let id= Math.random();

        //     values ={...values,
        //         'date':createdOn,
        //         'id':id
        //     }

        //     let blogsList = JSON.parse(localStorage.getItem('localBlogs'));

        //     // console.log(blogsList)
        //     blogsList.push(values)

        //    localStorage.setItem('localBlogs', JSON.stringify(blogsList));

        //    navigate('/');


        // console.log(values)

    }

    return (
        <div className="blogs bg-grey-50 flex justify-center my-20">
            <div className="w-3/4 lg:w-1/2">

                <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>

                    <div className="flex flex-col gap-6">

                        <TextInput label="Blog title" placeholder="Blog title" icon={<IconBrandTumblr size={14} />} required {...form.getInputProps('title')} />

                        <TextInput label="Author" placeholder="Authored by" icon={<IconBallpen size={14} />} required  {...form.getInputProps('author')} />

                        <SegmentedControl
                            // value={blogtype}
                            // onChange={setBlogtype}
                            data={[
                                { label: 'Technology', value: 'technology' },
                                { label: 'Entertainment', value: 'entertainment' },
                                { label: 'Community', value: 'Community' },
                                { label: 'Other', value: 'other' },
                            ]}

                            {...form.getInputProps('type')}
                        />

                        <RichTextEditor my={30} sx={{ height: '600px', overflow: 'auto' }} placeholder='Write the blog here...' {...form.getInputProps('blogContent')} />

                        {!isPending && <Button type="submit" sx={{ width: '100px', margin: 'auto' }} leftIcon={<IconDeviceFloppy size={14} />} >
                            Save
                        </Button>}
                        {isPending && <Button type="submit" sx={{ width: '100px', margin: 'auto' }} leftIcon={<IconDeviceFloppy size={14} />} loading >
                            Save
                        </Button>}

                    </div>
                </form>
            </div>


        </div>
    )

};
