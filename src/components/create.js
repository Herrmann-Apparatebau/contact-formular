import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

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

    console.log(finalUser);
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
      <StyledForm onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <label htmlFor="firstName">First name</label>
        <StyledInput type="text" name="firstName" id="firstName" required />

        <label htmlFor="lastName">Last name</label>
        <StyledInput type="text" name="lastName" id="lastName" required />

        <label htmlFor="address">Address</label>
        <StyledInput type="text" name="address" id="address" required />

        <label htmlFor="zipCode">Zipcode</label>
        <StyledInput type="text" name="zipCode" id="zipCode" required />

        <label htmlFor="city">City</label>
        <StyledInput type="text" name="city" id="city" required />

        <label htmlFor="country">Country</label>
        <StyledInput type="text" name="country" id="country" required />

        <label htmlFor="email">E-Mail</label>
        <StyledInput type="email" name="email" id="email" />

        <label htmlFor="phone">Phone</label>
        <StyledInput type="text" name="phone" id="phone" />
        <br />
        <div>
          <label htmlFor="ozon">Ozon</label>
          <input type="checkbox" name="ozon" id="ozon" value={"true"} />
          <label htmlFor="colon">Colon</label>
          <input type="checkbox" name="colon" id="colon" value={"true"} />
          <label htmlFor="veterinary">Veterinary</label>
          <input
            type="checkbox"
            name="veterinary"
            id="veterinary"
            value={"true"}
          />
          <label htmlFor="disposables">Disposables</label>
          <input
            type="checkbox"
            name="disposables"
            id="disposables"
            value={"true"}
          />
        </div>
        <br />

        <div>
          <label htmlFor="dsgvo">DSGVO</label>
          <input
            type="checkbox"
            name="dsgvo"
            id="dsgvo"
            required
            value={"true"}
          />
        </div>

        <br />

        <button type="submit">Create</button>
      </StyledForm>
    </>
  );
}
