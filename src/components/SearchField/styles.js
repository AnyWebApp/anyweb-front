import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ' 20px ',
    width: '90vw',
    boxShadow: '0px',
    height: '34px',
    overflow: 'hidden'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    width: 50,
    borderRadius: '0 20px 20px 0',
    background: '#4285F4',

  },


}));