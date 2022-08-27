// import { useDeleteContactMutation } from '../redux/getContact';
// import { useGetContactsQuery } from '../redux/getContact';
// import { useDispatch } from 'react-redux';

// export const DeleteContact = ({ visibleContacts }) => {
//   const { data, error, isLoading } = useGetContactsQuery();
//   console.log(data);

//   const [deleteContact] = useDeleteContactMutation();
//   const dispatch = useDispatch();
//   return (
//     <ul>
//       {visibleContacts.map(contact => {
//         return (
//           <li key={contact.id}>
//             {contact.name}: {contact.phone}
//             <button
//               onClick={() => dispatch(deleteContact(contact.id))}
//               type="button"
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
