/**
 * Custom Hook for Contact Form Logic
 * Separates form state management and submission logic from UI components
 */

import { useState, useCallback } from "react";
import type { ContactFormData, FormSubmitStatus } from "@/lib/types";

export interface UseContactFormOptions {
  onSuccess?: (data: ContactFormData) => void;
  onError?: (error: Error) => void;
  resetOnSuccess?: boolean;
  autoResetStatus?: number; // milliseconds
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  status: FormSubmitStatus;
  isSubmitting: boolean;
  errors: Partial<ContactFormData>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  resetStatus: () => void;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const useContactForm = (
  options: UseContactFormOptions = {}
): UseContactFormReturn => {
  const {
    onSuccess,
    onError,
    resetOnSuccess = true,
    autoResetStatus = 5000,
  } = options;

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormSubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const isSubmitting = status === "loading";

  // Validation function
  const validateForm = useCallback(
    (data: ContactFormData): Partial<ContactFormData> => {
      const newErrors: Partial<ContactFormData> = {};

      if (!data.name.trim()) {
        newErrors.name = "Name is required";
      } else if (data.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }

      if (!data.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!data.subject.trim()) {
        newErrors.subject = "Subject is required";
      } else if (data.subject.trim().length < 5) {
        newErrors.subject = "Subject must be at least 5 characters";
      }

      if (!data.message.trim()) {
        newErrors.message = "Message is required";
      } else if (data.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }

      return newErrors;
    },
    []
  );

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  // Submit form
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form
      const formErrors = validateForm(formData);
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      setStatus("loading");
      setErrors({});

      try {
        // Here you would integrate with your preferred form service
        // For now, we'll simulate the submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate random success/failure for demo
        if (Math.random() > 0.1) {
          // 90% success rate
          setStatus("success");
          onSuccess?.(formData);

          if (resetOnSuccess) {
            setFormData(initialFormData);
          }
        } else {
          throw new Error("Simulated submission error");
        }
      } catch (error) {
        setStatus("error");
        onError?.(error instanceof Error ? error : new Error("Unknown error"));
      } finally {
        // Auto-reset status after specified time
        if (autoResetStatus > 0) {
          setTimeout(() => setStatus("idle"), autoResetStatus);
        }
      }
    },
    [
      formData,
      validateForm,
      onSuccess,
      onError,
      resetOnSuccess,
      autoResetStatus,
    ]
  );

  // Reset form data
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setStatus("idle");
  }, []);

  // Reset status only
  const resetStatus = useCallback(() => {
    setStatus("idle");
  }, []);

  return {
    formData,
    status,
    isSubmitting,
    errors,
    handleInputChange,
    handleSubmit,
    resetForm,
    resetStatus,
  };
};
