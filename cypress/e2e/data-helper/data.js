class Data {
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
      category: {
        id: 1,
        name: "tablet",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 1,
          name: "string",
        },
      ],
      status: "available",
    };
    return postData;
  }


 
}
export default Data;
