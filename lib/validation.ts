export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  projectType: string;
  location?: string;
  approxBudget?: string;
  message: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please provide your full name (minimum 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  if (!data.projectType || data.projectType.trim() === "") {
    errors.projectType = "Please select a service or project category.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please share a brief message describing your space (minimum 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
