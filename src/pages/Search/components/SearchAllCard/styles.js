import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '1px solid #ccc',
    boxShadow: '0 1px 6px rgba(32, 33, 36, 0.28);',
    borderRadius: '8px',
    margin: '10px '
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    padding: '5px 0'
  },
  url: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});