import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    minWidth: 0,
    background: 'white',
    width: '100%',
  },
  tab: {
    fontSize: 12,
    paddingBottom: 0
  },
  divider: {
    boxshadow: '0 1px 6px rgba(32, 33, 36, 0.28);'
  }
});