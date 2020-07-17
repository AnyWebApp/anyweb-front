import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

export const useStyles = makeStyles({
  tabsBox: {
    display: 'flex',
    alignItems: 'center',
    width: '60%'
  },
});

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width:100%;
  height:50px;
`
