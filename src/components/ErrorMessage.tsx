type ErrorMessageProps = {
    message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
    return <p className="text-bower-red text-sm text-center">{message}</p>;
}
