import styled from 'styled-components'
import { colors } from '../shared/styles/styled';

const Button = styled.button`
    background: ${props=>props.ok?colors.green:props.danger?colors.red:colors.white};
`;

export default Button;