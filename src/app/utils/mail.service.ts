type EmailBody = {
  address: string;
};

export default async function postEmail(email: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const body: EmailBody = { address: email };
  try {
    const response = await fetch(`${API_URL}/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log("Subscription successful!");
    } else {
      console.error("Subscription failed!");
    }
  } catch (error) {
    console.error("Error occurred while submitting the form:", error);
  }
}
