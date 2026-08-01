import { useState } from "react";
import API from "../services/api";

function EmailForm({ setEmail, setLoading, setError }) {
    const [formData, setFormData] = useState({
        emailType: "",
        recipient: "",
        reason: "",
        tone: "",
        additionalInstructions: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            setError("");
            setEmail(null);

            const response = await API.post("/email/generate", formData);
            setEmail(response.data);
        } catch (error) {
            console.log(error.response?.data);
            setError(error.response?.data || "Unable to generate email.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="emailType" placeholder="Email Type" value={formData.emailType} onChange={handleChange} required />
            <input type="text" name="recipient" placeholder="Recipient" value={formData.recipient} onChange={handleChange} required />
            <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} required />
            <select name="tone" value={formData.tone} onChange={handleChange} required>
                <option value="">Select Tone</option>
                <option value="Professional">Professional</option>
                <option value="Friendly">Friendly</option>
                <option value="Formal">Formal</option>
            </select>
            <textarea name="additionalInstructions" placeholder="Additional Instructions" value={formData.additionalInstructions} onChange={handleChange} />
            <button type="submit">Generate Email</button>
        </form>
    );
}

export default EmailForm;
