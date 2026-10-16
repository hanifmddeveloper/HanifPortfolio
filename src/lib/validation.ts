export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Hidden spam field
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactPayload(data: Partial<ContactPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot spam test
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam bot detected";
    return { isValid: false, errors };
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please provide your full name (at least 2 characters).";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must not exceed 100 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters long.";
  } else if (data.subject.trim().length > 150) {
    errors.subject = "Subject must not exceed 150 characters.";
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  } else if (data.message.trim().length > 3000) {
    errors.message = "Message must not exceed 3000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
