import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import { Container } from '.'

export default function RTE({
    name, 
    control, 
    label,
    labelClass,
    defaultValue = ""}) {

    return (
        <Container>
            {label && 
                <label className={`${labelClass} text-base font-medium text-gray-900`}>{label}</label>
            }
            <div className='mt-2'>
                <Controller 
                    name={name || 'content'}
                    control={control}
                    render={({field: {onChange}}) => (
                        <Editor 
                            apiKey={String(import.meta.env.VITE_TINYMCE_API_KEY)}
                            initialValue={defaultValue}
                            init={
                                {
                                    initialValue: {defaultValue},
                                    height:500,
                                    menubar: true,
                                    plugins: [
                                        'image',
                                        'advlist',
                                        'autolink',
                                        'lists',
                                        'link',
                                        'image',
                                        'charmap',
                                        'preview',
                                        'anchor',
                                        'searchreplace',
                                        'visualblocks',
                                        'code',
                                        'fullscreen',
                                        'insetdatetime',
                                        'media',
                                        'table',
                                        'code',
                                        'help',
                                        'wordcount',
                                        'anchor',
                                    ],
                                    toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",

                                    content_style: "body { font-family: Helvetica,Arial,sans-serif; font-size:14px}"
                                }
                            }
                            onEditorChange={onChange}
                        />
                    )}
                />
            </div>
        </Container>
    )
}
