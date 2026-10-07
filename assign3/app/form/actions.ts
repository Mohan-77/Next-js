"use server";

type State = {
  success: boolean;
  error: boolean;
  message: string;
};

export async function submitForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (password.length < 6) {
      return {
        success: false,
        error: true,
        message: "Password must be at least 6 characters",
      };
    }

    console.log("Email:", email);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);

    return {
      success: true,
      error: false,
      message: `Hello, ${firstName} ${lastName}! Thanks for submitting!`,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: true,
      message: "Form submission failed",
    };
  }
}
