export default function Create() {
  let finalUser = {};
  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const formData = new FormData(e.target);
    const userObject = Object.fromEntries(formData.entries());

    finalUser = userObject;
    createUser();
    e.target.reset();
  };

  async function createUser() {
    const response = await fetch("/api/users/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalUser),
    });

    if (!response.ok) {
      console.error(response.status);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
        <label htmlFor="zipCode">Zipcode</label>
        <input type="text" name="zipCode" id="zipCode" />
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" />
        <label htmlFor="email">E-Mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />
        <br />

        <label htmlFor="ozon">Ozon</label>
        <input type="checkbox" name="ozon" id="ozon" />
        <label htmlFor="colon">Colon</label>
        <input type="checkbox" name="colon" id="colon" />
        <label htmlFor="veterinary">Veterinary</label>
        <input type="checkbox" name="veterinary" id="veterinary" />
        <label htmlFor="disposables">Disposables</label>
        <input type="checkbox" name="disposables" id="disposables" />
        <br />

        <label htmlFor="dsgvo">DSGVO</label>
        <input type="checkbox" name="dsgvo" id="dsgvo" />

        <br />

        <button type="submit">Create</button>
      </form>
    </>
  );
}
