function getUsers(){
  return([
    {
      id: 1,
      user_name: 'symesharr',
      first_name: 'Harrison',
      last_name: 'Symes',
      // hash: hashSync('Krang', saltRounds),
      hourly_wage: 300
    },
    {
      id: 2,
      user_name: 'symesharr',
      first_name: 'Harrison',
      last_name: 'Symes',
      // hash: hashSync('Krang', saltRounds),
      hourly_wage: 300
    }
  ])

export function setAllUsers (users){
    return {
    type: "SET_ALL_USERS",
    allUsers: users
  }
}  
}
