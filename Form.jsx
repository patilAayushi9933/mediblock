import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import { createUserWithEmailAndPassword }  from "firebase/auth";
import { Auth } from "firebase/auth";
import 'firebase/compat/firestore';
import { auth } from "./firebase";


export default function Form() {
  const [name, setName] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

const handleSubmit = (event) => {

    setName("");
    setHospitalId("");
    setEmail("");
    setLocation("");
    setContact("");
}

const db   = firebase.firestore();

createUserWithEmailAndPassword(auth,email).then(
  (res) => {
    console.log(res);
  })
  .catch(err=>console.log("Error"-err));

  };


//function to upload data to database
const addDoc = (event) => {
  event.preventDefault();
}

db.collection("Users").add({
  name :contact.name,
  hospitalId: contact.hospitalId,
  email:contact.email,
  location:contact.location,
  contact:contact.contact,
}).then((docRef) => {

  const docId = docRef.id;
  console.log(docId);


}).catch((err) =>{
  console.log("Error"+err.message);
})

  return (
    
    <section className="bg-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <a href="/" className="text-2xl font-bold text-pink-600">
              MediBlock
            </a>
            <p className="max-w-xl text-lg">
            Our medical blockchain app utilizes secure, decentralized
              technology to store and manage patients' medical records, ensuring
              privacy and accessibility for both patients and healthcare
              providers.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="hospitalId">
                  Hospital ID
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  id="hospitalId"
                  placeholder="Hospital ID"
                  value={hospitalId}
                  onChange={(event) => setHospitalId(event.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Location
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  id="message"
                  placeholder="Address"
                  rows="2"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Contact
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="number"
                  id="contact"
                  placeholder="Contact Number"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                />
              </div>         
            
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  }  
  