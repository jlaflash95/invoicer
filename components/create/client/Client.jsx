"use client"
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Client({setDecision}) {

    const router = useRouter()

    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")
    const [about, setAbout] = useState("")
    const [photo, setPhoto] = useState()
    const [displayPhoto, setDisplayPhoto] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleWebsite = (e) => {
        setWebsite(`https://${e.target.value}`)
    }

    const handleAbout = (e) => {
        setAbout(e.target.value)
    }

    const handlePhoto = (e) => {
        if (!e.target.files) {
            return
        }

        setDisplayPhoto(URL.createObjectURL(e.target.files[0]))

        setPhoto(e.target.files)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleNewClient = async (e) => {
        e.preventDefault()

        let workingPhoto = new FormData()
        if (photo) {
            workingPhoto.append("photo", photo[0])
        }

        console.log(Object.fromEntries(workingPhoto))

        const client = {
            company: name,
            website,
            about,
            firstName,
            lastName,
            fullName: firstName + " " + lastName,
            email,
            phoneNumber: phone
        }

        console.log(client)

        const res = await fetch("http://127.0.0.1:8090/api/collections/clients/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
        const data = await res.json()

        if (photo) {
            await fetch(`http://127.0.0.1:8090/api/collections/clients/records/${data.id}`, {
                method: 'PATCH',
                body: workingPhoto
            })
        }

        await router.push('/')

    }


    return (
        <div className={"bg-gray-100 py-10 pt-20 min-h-screen"}>

            <form className="space-y-6 max-w-7xl mx-auto" action="components/create#" onSubmit={handleNewClient}>

                <div className={"flex"}>
                    <button  className={"h-8 w-8"} type={"button"} onClick={() => setDecision("")}><ArrowSmallLeftIcon /></button><span className={"my-auto ml-2 text-lg font-medium"}> Go Back</span>
                </div>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Company Profile</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                This is company specific information for the client.
                            </p>
                        </div>


                        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            onChange={(e) => handleName(e)}
                                            type="text"
                                            name="company-name"
                                            id="company-name"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Google"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                        Website
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                            https://
                                          </span>
                                        <input
                                            onChange={(e) => handleWebsite(e)}
                                            type="text"
                                            name="company-website"
                                            id="company-website"
                                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="google.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    About
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        onChange={(e) => handleAbout(e)}
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Provides search engine services to the entire world."
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Brief description of what the company does.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Company Contact Info</h3>
                            <p className="mt-1 text-sm text-gray-500">Information for your contact at the client company.</p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">

                            <div className={"mb-6"}>
                                {/*<label className="block text-sm font-medium text-gray-700">Photo</label>*/}
                                <div className="mt-1 flex items-center space-x-5">
                                    <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-gray-100">
                                      {(!photo) ? (
                                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                          </svg>
                                      ): (
                                          <img className={"h-full w-full"} src={displayPhoto} alt="user-photo"/>
                                      )}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("photo").click()}
                                        className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        {(!photo) ? "Upload" : "Change"}
                                    </button>
                                    <input
                                        name={"photo"}
                                        type={"file"}
                                        id={"photo"}
                                        onChange={(e) => handlePhoto(e)}
                                        className={"hidden"}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        onChange={(e) => handleFirstName(e)}
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder={"Larry"}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        onChange={(e) => handleLastName(e)}
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        placeholder={"Page"}
                                        autoComplete="family-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) => handleEmail(e)}
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        placeholder={"larrypage@gmail.com"}
                                        autoComplete="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        onChange={(e) => handlePhone(e)}
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        placeholder={"(555) 555-5555"}
                                        autoComplete="phone-number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </form>

        </div>    )
}

