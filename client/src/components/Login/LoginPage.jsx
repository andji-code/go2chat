import styled from 'styled-components'
import { colors } from '../shared/styles/styled';

const LoginPage = styled.div`
    background-color:${colors.white};
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow:column;
    grid-template: 1fr / 1fr 1fr;
`;

export default LoginPage;