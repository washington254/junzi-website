import { useState, useEffect } from 'react';
import { SPECIAL_STEPS } from '@/config/form-steps';
import type { FormValues } from '@/lib/validations/form';
import type { FormContextType } from '@/types/form';

export function useFormSteps(): FormContextType {
  // Загружаем сохраненные данные формы при инициализации
  const loadSavedData = () => {
    if (typeof window !== 'undefined') {
      try {
        const savedData = localStorage.getItem('junzi_form_data');
        if (savedData) {
          return JSON.parse(savedData);
        }
      } catch (error) {
        console.error('Failed to load saved form data:', error);
      }
    }
    return {};
  };

  const [currentStep, setCurrentStep] = useState<number>(SPECIAL_STEPS.WELCOME);
  const [formData, setFormData] = useState<Partial<FormValues>>(loadSavedData);

  // Сохраняем данные формы при их изменении
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('junzi_form_data', JSON.stringify(formData));
    }
  }, [formData]);

  const updateFormData = (data: Partial<FormValues>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setCurrentStep(SPECIAL_STEPS.WELCOME);
    setFormData({});
    if (typeof window !== 'undefined') {
      localStorage.removeItem('junzi_form_data');
    }
  };

  // Track step changes with Google Tag Manager
  const setStepWithTracking = (step: number) => {
    // Only push to dataLayer if in browser environment and if dataLayer exists
    if (typeof window !== 'undefined' && window.dataLayer) {
      const stepName = getStepName(step);
      window.dataLayer.push({
        event: 'form_step_view',
        step_number: step,
        step_name: stepName
      });
    }
    setCurrentStep(step);
  };

  // Helper function to get the step name
  const getStepName = (step: number): string => {
    switch(step) {
      case SPECIAL_STEPS.WELCOME:
        return 'Welcome';
      case 1:
        return 'User Information';
      case 2:
        return 'Project Details';
      case 3:
        return 'Additional Information';
      case SPECIAL_STEPS.THANK_YOU:
        return 'Thank You';
      case SPECIAL_STEPS.NO_INTEREST:
        return 'No Interest';
      default:
        return `Step ${step}`;
    }
  };

  // Track the initial step view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      const stepName = getStepName(currentStep);
      window.dataLayer.push({
        event: 'form_step_view',
        step_number: currentStep,
        step_name: stepName
      });
    }
  }, []);

  return {
    currentStep,
    setCurrentStep: setStepWithTracking,
    formData,
    updateFormData,
    resetForm,
  };
} 