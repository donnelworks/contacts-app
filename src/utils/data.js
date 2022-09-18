let contacts = [
  {
    id: 1,
    name: "Dimas Saputra",
    tag: "dimasmds",
    img: "/images/dimasmds.jpeg",
  },
  {
    id: 2,
    name: "Arif Faizin",
    tag: "arifaizin",
    img: "/images/arifaizin.jpeg",
  },
  {
    id: 3,
    name: "Rahmat Fajri",
    tag: "rfajri27",
    img: "/images/rfajri27.jpeg",
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), img: "/images/default.jpg", ...contact },
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
