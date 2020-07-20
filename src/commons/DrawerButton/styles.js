import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles({
  drawer: {
    width: '67vw',
  },
  menuIcon: {
    padding: 0,
    minWidth: 50
  }
});

export const DrawerLogo = styled.img`
  width: 120px;
	margin-top: 20px;
	margin-left: -60px;
`;