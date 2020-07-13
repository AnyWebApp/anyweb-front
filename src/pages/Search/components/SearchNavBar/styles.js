import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

export const useStyles = makeStyles({
  searchLogo: {
    height: '35px',
  }
});

export const Nav = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px'
})
