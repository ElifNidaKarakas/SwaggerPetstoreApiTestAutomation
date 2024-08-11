class PetData {
  headerPayload() {
    const headerBody = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return headerBody;
  }

  bodyPetPayload() {
    const postData = {
      id: 1,
      category: {
        id: 1,
        name: "köpek",
      },
      name: "Karabaş",
      photoUrls: ["string"],
      tags: [
        {
          id: 1,
          name: "siyah",
        },
      ],
      status: "available",
    };
    return postData;
  }
  updatePetPayload() {
    const postData = {
      id: 1,
      category: {
        id: 1,
        name: "köpek",
      },
      name: "Kara",
      photoUrls: ["string"],
      tags: [
        {
          id: 1,
          name: "kahve",
        },
      ],
      status: "available",
    };
    return postData;
  }
  
}
export default PetData;
