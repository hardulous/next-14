type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const Users = async () => {

  // For showing loading state we are intentionally delaying fetch time
  
//   await new Promise((resolve) => setTimeout(resolve, 2000));

  // For showing error state we are intentionally throwing the error
  
//   throw new Error("Hi Demo Error")

  // Fetching directly inside server component without useEffect()
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  // Storing the fetched data directly in a variable instead of in state variable
  const users: User[] = await data.json();

  // No need of state variable because by the time code reach the below return statement the "users" variable is already filled with some value.
  console.log(users);

  return (
    <div>
      <h1>LIST OF USERS</h1>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default Users;

// An async server component to perform data fetching directory inside server component as server component support async operation inside them.
