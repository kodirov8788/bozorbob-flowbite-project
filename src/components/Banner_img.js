import React, { useState } from 'react'

function Banner_img() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const handleImageDelete = (imageId) => {
        setUploadedImages((prevImages) =>
            prevImages.filter((image) => image.id !== imageId)
        );
    };

    const handleFileUpload = (event) => {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                const uploadedImage = {
                    id: Date.now(),
                    src: e.target.result
                };

                setUploadedImages((prevImages) => [...prevImages, uploadedImage]);
            };

            reader.readAsDataURL(file);
        }
    };


    return (
        <div class=" sm:ml-64">
            <div className='w-[100%] h-auto  pl-10 pr-10 pt-10 pb-10 '>
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-5">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Upload an image to the banner
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="flex items-center justify-center w-full mt-5">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Yuklash uchun bosing</span> yoki tortib tashlang</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG yoki GIF (maks. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileUpload} />
                        </label>

                    </div>


                </div>


                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-5 mt-5  grid sm:gap-4 sm:grid-cols-3 sm:grid-rows-3">
                    {uploadedImages.map((image) => (
                        <div key={image.id} className="relative group">
                            <img
                                src={image.src}
                                alt=""
                                className="mr-2 w-[400px] h-[300px] mt-5 object-cover rounded "
                            />
                            <button
                                onClick={() => handleImageDelete(image.id)}
                                className="absolute top-5 right-0 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center opacity-0 transition-opacity duration-300 dark:text-white dark:bg-gray-600 group-hover:opacity-100"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner_img