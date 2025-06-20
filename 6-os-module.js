// Built-In Module 
 
 // OS Module(Operating System module)
 const os =  require('os') // this will understand that we were finding a inbuilt module 

  // info about the curent user and will give the current OS user details as it is a OS module
  const user = os.userInfo();
  console.log(user);
  
  // Mehtod that Return the system uptime in seconds 
  console.log(`The system uptime is ${os.uptime()} seconds`);
  
  // Mehtod that returns OS data
  currentOS = 
  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
  }
  console.log(currentOS);