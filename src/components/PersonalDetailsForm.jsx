// eslint-disable-next-line no-unused-vars
import React from "react";

function personalDetailsForm ({personalDetails, setPersonalDetails}){

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails ({
            ...personalDetails,
            [name]: value,
    });
};

return (
    <form>
        <label>
            Name:
            <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={handleChange}
            />
        </label>

        <br />
        <label>
            Email:
            <input
                type="email"
                name="email"
                value={personalDetails.email}
                onChange={handleChange}
            />
        </label>

        <br />
        <label>
            Phone:
            <input
                type="tel"
                name="phone"
                value={personalDetails.phone}
                onChange={handleChange}
            />
        </label>
    </form>
)
}

export default personalDetailsForm;