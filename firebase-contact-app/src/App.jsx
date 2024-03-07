import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from './components/ContactCard';
import useDisclouse from "./components/hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactNotFound from './components/ContactNotFound';
import AddAndUpdateContact from './components/AddAndUpdateContact';

const App = () => {

  const [contacts, setContacts] = useState([]);
  
  const {isOpen, onClose, onOpen} = useDisclouse();

  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
       
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredcontacts = contactLists.filter((contact) => {
            contact.name.toLowerCase().includes(value.toLowerCase()
            );
          });
          setContacts(filteredcontacts);
          return filteredcontacts;
        });
  }

  return (
    <>
    <div className="max-w-[414px] mx-auto">
      <Navbar />
     <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
          <FiSearch className="ml-2 absolute text-3xl text-white"/>
          <input onChange={filterContacts} type="text" className=" h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-10" />
      </div>
        <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white"/>
     </div>
     <div className="mt-4 flex flex-col gap-4">
      {contacts.length <= 0 ? ( <ContactNotFound /> ) : ( contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
     </div>
    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
