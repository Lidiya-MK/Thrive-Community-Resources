const createUser = ({ fname, mage }) => {
  return {
    id: Date.now(), // unique id based on current time
    name: fname, // takes the name from input
    age: mage, // takes the age from input
  };
};
export default createUser;
