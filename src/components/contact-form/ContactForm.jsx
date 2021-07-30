import React from 'react';
import styles from './ContactForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '98%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

let ContactForm = (props) => {
  const classes = useStyles();

  const [vehicleType, setVehicleType] = React.useState('');
  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <div className={`${classes.root} ${styles.outer_container}`}>
      <Paper square className={`${styles.container}`} elevation={4}>
        <div className={`${styles.row_1}`}>
          <TextField id="name" label="Name" />
          <TextField id="email" label="Email" />
        </div>
        <div className={`${styles.row_1}`}>
          <TextField id="phone" label="Phone" />
          <TextField id="city" label="City" />
        </div>
        <div className={`${styles.row_2}`}>
          <FormControl className={`${classes.formControl}`}>
            <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel>
            <Select
              labelId="vehicle-type-label"
              id="vehicle-type"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
            >
              <MenuItem value={'economy'}>Economy</MenuItem>
              <MenuItem value={'executive'}>Executive</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`${styles.row_2}`}>
          <TextareaAutosize aria-label="requirement" rowsMin={5} placeholder="Enter your requirement." />
        </div>
        <div className={`${styles.row_3}`}>
          <Button variant="contained" color="primary">
            Book Now
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default ContactForm;