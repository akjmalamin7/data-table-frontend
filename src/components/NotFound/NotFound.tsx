interface Props {
    message?: string;
}
const NotFound = ({ message }: Props) => {
    return (
        <h3>{message}</h3>
    )
}

export default NotFound