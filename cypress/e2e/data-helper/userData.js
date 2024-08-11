class UserData {
  headerPayload() {
    const headerBody = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return headerBody;
  }

  bodyPayload() {
    const postData = {
      id: 1,
      username: "nida",
      firstName: "elif",
      lastName: "karakaş",
      email: "nida@gmail.com",
      password: "123456",
      phone: "53225684184",
      userStatus: 1,
    };
    return postData;
  }
  updatePayload(firstName, lastName) {
    const postData = {
      id: 1,
      username: "nida",
      firstName: firstName,
      lastName: lastName,
      email: "nida@gmail.com",
      password: "123456",
      phone: "53225684184",
      userStatus: 1,
    };
    return postData;
  }
}

export default UserData;
