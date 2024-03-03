import UserList from "../components/UserList";
import { User } from "../interface";

export default function HomePage() {
  let usersData:User[] =[];
  const fetchUsers = async () =>{
      try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          usersData = await res.json()
          return usersData
      } catch (error) {
          console.error(error)
      }
  }
  

  return <UserList usersData={fetchUsers()} />;
}
