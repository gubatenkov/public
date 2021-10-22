import React from 'react';
import styles from './Profile.module.css';
import { Grid, Typography } from '@mui/material';

import { ProfileForm } from '../../';

const Profile = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerInner}>
        <Typography className={styles.registerHeading} variant='h5'>
          Профіль
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={12} xs={12} sm={12}>
            <ProfileForm />
          </Grid>

          {/* <Grid item md={8} xs={12} sm={12}>
            Orders
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
