import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContacts = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("contact added successfully");
        } catch (error) {
            console.log(error);
        }
    };
    
    const updateContacts = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("contact updated successfully");

        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
            <Formik
            validationSchema={contactSchemaValidation}
            initialValues={ isUpdate ? {
                name: contact.name,
                email: contact.email,
            } : {
                name: "",
                email: "",
            }}
            onSubmit={(values) => {
                console.log(values);
                isUpdate ?
                updateContacts(values, contact.id) :
                addContacts(values);
            }}
            >
                <Form className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="h-10 border"/>
                        <div className="text-xs text-red-500">
                            <ErrorMessage name="name"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="h-10 border"/>
                         <div className="text-xs text-red-500">
                            <ErrorMessage name="name"/>
                        </div>
                    </div>
                    <button className="self-end border bg-orange px-3 py-1.5">{isUpdate ? "update" : "add"} contact</button>
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact;
