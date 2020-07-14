import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    width: '90vw',
    height: '38px',
    overflow: 'hidden',
    boxShadow: 'none',
    border: '1px solid #DFE1E5',

    [theme.breakpoints.up('sm')]: {
      width: '50vw',
    }
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    width: 50,
    borderRadius: '0 20px 20px 0',
    background: '#4285F4',

    [theme.breakpoints.up('sm')]: {
      background: '#FFFFFF'
    },
  },

  searchIcon: {
    color: 'white',
    width: '20px',
    height: '20px',

    [theme.breakpoints.up('sm')]: {
      color: '#9AA0A6'
    },

  }

}));