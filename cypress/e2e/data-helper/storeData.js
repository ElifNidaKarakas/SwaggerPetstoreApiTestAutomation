class StoreData {
  headerPayload() {
    const headerBody = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return headerBody;
  }

  createStoreData() {
    const postData = {
      id: 1,
      petId: 1,
      quantity: 5000,
      shipDate: "2024-08-11T16:49:09.161Z",
      status: "placed",
      complete: true,
    };
    return postData;
  }
}
export default StoreData;
