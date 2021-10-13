import React from 'react';
import Box from '@mui/material/Box';
import StepperItem from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Авторизацiя', 'Шиппiнг', 'Розрахунок', 'Замовлення'];

const Stepper = () => {
  return (
    <Box
      sx={{ width: '100%' }}
      style={{ margin: '0 auto 40px', maxWidth: '650px' }}
    >
      <StepperItem activeStep={1} alternativeLabel>
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
