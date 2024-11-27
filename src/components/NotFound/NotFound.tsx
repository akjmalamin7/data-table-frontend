interface Props {
    message?: string;
}
const NotFound = ({ message }: Props) => {
    return (
        <H3>{message}</H3>
    )
}

export default NotFound