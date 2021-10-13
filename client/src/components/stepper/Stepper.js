import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import StepperItem from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useLocation } from 'react-router-dom';

const steps = ['Авторизацiя', 'Шиппiнг', 'Розрахунок', 'Замовлення'];

const Stepper = () => {
  const location = useLocation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (location.pathname === '/shipping') {
      setStep(1);
    } else if (location.pathname === '/payment') {
      setStep(2);
    } else if (location.pathname === '/order') {
      setStep(3);
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{ width: '100%' }}
      style={{ margin: '0 auto 40px', maxWidth: '650px' }}
    >
      <StepperItem activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StepperItem>
    </Box>
  );
};

export default Stepper;
