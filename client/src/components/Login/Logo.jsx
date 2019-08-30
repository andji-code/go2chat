import styled from 'styled-components';
import {neon, lightenDarken, colors} from '../shared/styles/styled';

const Logo = styled.div`
    ${neon(lightenDarken(colors.blue,10),"20px")}
    color:${colors.blue};
    display:grid;
    justify-content:center;
    align-items:center;
    font-size: 10rem;
    font-weight: bold;
`

export default Logo;