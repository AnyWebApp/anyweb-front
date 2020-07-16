import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: '0px'
  },
  action: {
    boxSizing: 'border-box',
    padding: '5px',
    boxShadow: '0',
  },
  media: {
    width: '100%',
    minHeight: '130px'
  },
  content: {
    padding: '5px'
  },
  title: {
    fontSize: '14px',
    fontWeight: '400',
    margin: '0',
    overflow: 'hidden',
    height: '23px'
  },
  url: {
    fontSize: '12px'
  }
}); 