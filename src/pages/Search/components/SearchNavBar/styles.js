import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

export const useStyles = makeStyles({

  searchNavBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  top: {
    width: '100%',
    marginTop: '10px',
    display: 'flex ',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  searchLogo: {
    height: '35px',
  }

});

export const Nav = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})
